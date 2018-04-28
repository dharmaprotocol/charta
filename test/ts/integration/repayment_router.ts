import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

import { BigNumber } from "bignumber.js";

import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../types/generated/dummy_token";

import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../types/generated/simple_interest_terms_contract";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";

import { DebtOrderFactory } from "../factories/debt_order_factory";
import { SimpleInterestParameters } from "../factories/terms_contract_parameters";

import { RepaymentRouterErrorCodes } from "../../../types/errors";
import { SignedDebtOrder } from "../../../types/kernel/debt_order";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";
import { Web3Utils } from "../../../utils/web3_utils";

import { LogError, LogRepayment } from "../logs/repayment_router";
import {
    multiSigExecuteAfterTimelock,
    multiSigExecutePauseImmediately,
} from "../test_utils/multisig";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up web3 utils
const web3Utils = new Web3Utils(web3);

contract("Repayment Router (Integration Tests)", async (ACCOUNTS) => {
    let router: RepaymentRouterContract;
    let kernel: DebtKernelContract;
    let debtToken: DebtTokenContract;
    let principalToken: DummyTokenContract;
    let termsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let multiSig: DharmaMultiSigWalletContract;

    let orderFactory: DebtOrderFactory;
    let order: SignedDebtOrder;
    let agreementId: string;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY_1 = ACCOUNTS[2];
    const BENEFICIARY_2 = ACCOUNTS[3];
    const DEBTOR = ACCOUNTS[4];
    const UNDERWRITER = ACCOUNTS[5];
    const RELAYER = ACCOUNTS[6];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );
        const dummyREPTokenIndex = await dummyTokenRegistryContract.getTokenIndexBySymbol.callAsync(
            "REP",
        );

        principalToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);

        await principalToken.setBalance.sendTransactionAsync(BENEFICIARY_1, Units.ether(100));
        await principalToken.setBalance.sendTransactionAsync(BENEFICIARY_2, Units.ether(100));
        await principalToken.approve.sendTransactionAsync(
            tokenTransferProxy.address,
            Units.ether(100),
            { from: BENEFICIARY_1 },
        );
        await principalToken.approve.sendTransactionAsync(
            tokenTransferProxy.address,
            Units.ether(100),
            { from: BENEFICIARY_2 },
        );

        router = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        termsContract = await SimpleInterestTermsContractContract.deployed(web3, TX_DEFAULTS);

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: dummyREPTokenIndex,
            principalAmount: Units.ether(1),
            interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
            amortizationUnitType: new BigNumber(1), // (weekly)
            termLengthUnits: new BigNumber(4),
        });

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        const defaultOrderParams = {
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtToken.address,
            debtor: DEBTOR,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            issuanceVersion: router.address,
            orderSignatories: { debtor: DEBTOR, creditor: BENEFICIARY_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: principalToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: termsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.35),
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        order = await orderFactory.generateDebtOrder();
        agreementId = order.getIssuanceCommitment().getHash();

        ABIDecoder.addABI(router.abi);
    });

    after(() => {
        ABIDecoder.removeABI(router.abi);
    });

    describe("#repay", () => {
        let receipt: Web3.TransactionReceipt;
        let errorLog: ABIDecoder.DecodedLog;
        let payerBalanceBefore: BigNumber;
        let beneficiaryBalanceBefore: BigNumber;

        describe("called for nonexistent debt agreement", () => {
            before(async () => {
                payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(BENEFICIARY_1);

                const txHash = await router.repay.sendTransactionAsync(
                    agreementId,
                    Units.ether(1.1),
                    principalToken.address,
                );
                receipt = await web3.eth.getTransactionReceipt(txHash);

                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            });

            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(
                    LogError(
                        router.address,
                        RepaymentRouterErrorCodes.DEBT_AGREEMENT_NONEXISTENT,
                        agreementId,
                    ),
                );
            });

            it("should not transfer tokens from payer", async () => {
                await expect(
                    principalToken.balanceOf.callAsync(PAYER),
                ).to.eventually.bignumber.equal(payerBalanceBefore);
                await expect(
                    principalToken.balanceOf.callAsync(BENEFICIARY_1),
                ).to.eventually.bignumber.equal(beneficiaryBalanceBefore);
            });

            it("should not register repayment with terms contract", async () => {
                await expect(
                    termsContract.getValueRepaidToDate.callAsync(agreementId),
                ).to.eventually.bignumber.equal(0);
            });
        });

        describe("called for issued debt agreement", () => {
            before(async () => {
                await kernel.fillDebtOrder.sendTransactionAsync(
                    BENEFICIARY_1,
                    order.getOrderAddresses(),
                    order.getOrderValues(),
                    order.getOrderBytes32(),
                    order.getSignaturesV(),
                    order.getSignaturesR(),
                    order.getSignaturesS(),
                );
            });

            describe("...when repayment router is paused", () => {
                before(async () => {
                    // "Pause" operations can be executed without waiting for the timelock
                    // to lapse -- a stipulation that exists for emergencies.
                    await multiSigExecutePauseImmediately(
                        web3,
                        multiSig,
                        router,
                        "pause",
                        ACCOUNTS,
                    );
                });

                after(async () => {
                    await multiSigExecuteAfterTimelock(web3, multiSig, router, "unpause", ACCOUNTS);
                });

                it("should throw", async () => {
                    await expect(
                        router.repay.sendTransactionAsync(
                            agreementId,
                            Units.ether(1.1),
                            principalToken.address,
                            { from: PAYER },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("...with insufficient balance for payment", () => {
                before(async () => {
                    payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(
                        BENEFICIARY_1,
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        agreementId,
                        Units.ether(1.1),
                        principalToken.address,
                        { from: PAYER },
                    );
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(
                        LogError(
                            router.address,
                            RepaymentRouterErrorCodes.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                            agreementId,
                        ),
                    );
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(
                        principalToken.balanceOf.callAsync(PAYER),
                    ).to.eventually.bignumber.equal(payerBalanceBefore);
                    await expect(
                        principalToken.balanceOf.callAsync(BENEFICIARY_1),
                    ).to.eventually.bignumber.equal(beneficiaryBalanceBefore);
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(agreementId),
                    ).to.eventually.bignumber.equal(0);
                });
            });

            describe("...with insufficient allowance for payment", () => {
                before(async () => {
                    await principalToken.setBalance.sendTransactionAsync(PAYER, Units.ether(1.1), {
                        from: CONTRACT_OWNER,
                    });
                    await principalToken.approve.sendTransactionAsync(
                        tokenTransferProxy.address,
                        Units.ether(1),
                        { from: PAYER },
                    );

                    payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(
                        BENEFICIARY_1,
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        agreementId,
                        Units.ether(1.1),
                        principalToken.address,
                        { from: PAYER },
                    );
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(
                        LogError(
                            router.address,
                            RepaymentRouterErrorCodes.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                            agreementId,
                        ),
                    );
                });

                it("should not transfer tokens from payer", async () => {
                    await expect(
                        principalToken.balanceOf.callAsync(PAYER),
                    ).to.eventually.bignumber.equal(payerBalanceBefore);
                    await expect(
                        principalToken.balanceOf.callAsync(BENEFICIARY_1),
                    ).to.eventually.bignumber.equal(beneficiaryBalanceBefore);
                });

                it("should not register repayment with terms contract", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(agreementId),
                    ).to.eventually.bignumber.equal(0);
                });
            });

            describe("...with sufficient balance and allowance for payment", () => {
                let repaymentLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await principalToken.setBalance.sendTransactionAsync(PAYER, Units.ether(1.1), {
                        from: CONTRACT_OWNER,
                    });
                    await principalToken.approve.sendTransactionAsync(
                        tokenTransferProxy.address,
                        Units.ether(1.1),
                        { from: PAYER },
                    );

                    payerBalanceBefore = await principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = await principalToken.balanceOf.callAsync(
                        BENEFICIARY_1,
                    );

                    const txHash = await router.repay.sendTransactionAsync(
                        agreementId,
                        Units.ether(1.1),
                        principalToken.address,
                        { from: PAYER },
                    );
                    receipt = await web3.eth.getTransactionReceipt(txHash);

                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should transfer tokens of specified amount from payer", async () => {
                    await expect(
                        principalToken.balanceOf.callAsync(PAYER),
                    ).to.eventually.bignumber.equal(payerBalanceBefore.minus(Units.ether(1.1)));
                    await expect(
                        principalToken.balanceOf.callAsync(BENEFICIARY_1),
                    ).to.eventually.bignumber.equal(
                        beneficiaryBalanceBefore.plus(Units.ether(1.1)),
                    );
                });

                it("should register repayment with terms contract", async () => {
                    await expect(
                        termsContract.getValueRepaidToDate.callAsync(agreementId),
                    ).to.eventually.bignumber.equal(Units.ether(1.1));
                });

                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(
                        LogRepayment(
                            router.address,
                            agreementId,
                            PAYER,
                            BENEFICIARY_1,
                            Units.ether(1.1),
                            principalToken.address,
                        ),
                    );
                });
            });
        });

        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", async () => {
                    await expect(
                        router.repay.sendTransactionAsync(
                            agreementId,
                            Units.ether(1),
                            NULL_ADDRESS,
                            {
                                from: PAYER,
                            },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("called with zero token amount", () => {
                it("should throw", async () => {
                    await expect(
                        router.repay.sendTransactionAsync(
                            agreementId,
                            new BigNumber(0),
                            principalToken.address,
                            { from: PAYER },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });
    });
});
