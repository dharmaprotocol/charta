import * as ABIDecoder from "abi-decoder";
import * as Units from "../test_utils/units";
import * as Web3 from "web3";
import * as _ from "lodash";
import * as chai from "chai";
import * as moment from "moment";
import * as utils from "../test_utils/utils";

import { DebtOrder, SignedDebtOrder } from "../../../types/kernel/debt_order";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";
import {
    IssuanceCommitment,
    SignedIssuanceCommitment,
} from "../../../types/kernel/issuance_commitment";
import { LogApproval, LogMint, LogTransfer } from "../logs/debt_token";
import { LogDebtOrderFilled, LogError } from "../logs/debt_kernel";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../logs/debt_registry";

import { BigNumber } from "bignumber.js";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { DebtKernelErrorCodes } from "../../../types/errors";
import { DebtOrderFactory } from "../factories/debt_order_factory";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../types/registry/entry";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../types/generated/dummy_token";
import { IncompatibleTermsContractContract } from "../../../types/generated/incompatible_terms_contract";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { TermsContractRegistryContract } from "../../../types/generated/terms_contract_registry";
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { TxDataPayable } from "../../../types/common";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");

contract("Debt Kernel (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let simpleInterestTermsContractAddress: string;
    let incompatibleTermsContractAddress: string;

    let defaultOrderParams: { [key: string]: any };
    let orderFactory: DebtOrderFactory;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const ISSUER_1 = ACCOUNTS[2];
    const ISSUER_2 = ACCOUNTS[3];
    const ISSUER_3 = ACCOUNTS[4];
    const ISSUERS = [ISSUER_1, ISSUER_2, ISSUER_3];

    const DEBTOR_1 = ACCOUNTS[5];
    const DEBTOR_2 = ACCOUNTS[6];
    const DEBTOR_3 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2, DEBTOR_3];

    const CREDITOR_1 = ACCOUNTS[8];
    const CREDITOR_2 = ACCOUNTS[9];
    const CREDITOR_3 = ACCOUNTS[10];
    const CREDITORS = [CREDITOR_1, CREDITOR_2, CREDITOR_3];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[13];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const termsContractRegistryContract = await TermsContractRegistryContract.deployed(
            web3,
            TX_DEFAULTS,
        );

        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddress.callAsync(
            "REP",
        );

        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        simpleInterestTermsContractAddress = await termsContractRegistryContract
            .getSimpleInterestTermsContractAddress
            .callAsync(dummyREPTokenAddress);

        const incompatibleTermsContract = await IncompatibleTermsContractContract.deployed(web3, TX_DEFAULTS);
        incompatibleTermsContractAddress = incompatibleTermsContract.address;

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtTokenContract.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment()
                    .add(1, "days")
                    .unix(),
            ),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: simpleInterestTermsContractAddress,
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
        ABIDecoder.addABI(debtRegistryContract.abi);
    };

    before(reset);

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtKernelContract.abi);
    });

    describe("Initialization & Upgrades", async () => {
        describe("non-owner sets debt token contract pointer", () => {
            it("should throw", async () => {
                expect(
                    kernel.setDebtToken.sendTransactionAsync(ATTACKER, { from: ATTACKER }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner updates debt token contract pointer", () => {
            before(async () => {
                debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
                await kernel.setDebtToken.sendTransactionAsync(debtTokenContract.address, {
                    from: CONTRACT_OWNER,
                });
            });

            it("should point to new debt token contract", async () => {
                await expect(kernel.debtToken.callAsync()).to.eventually.equal(
                    debtTokenContract.address,
                );
            });
        });
    });

    describe("#fillDebtOrder", () => {
        let debtOrder: SignedDebtOrder;

        const testShouldReturnError = async (
            order: SignedDebtOrder,
            errorCode: number,
            signaturesR?: string[],
            signaturesS?: string[],
            signaturesV?: number[],
        ) => {
            const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                order.getCreditor(),
                order.getOrderAddresses(),
                order.getOrderValues(),
                order.getOrderBytes32(),
                signaturesV || order.getSignaturesV(),
                signaturesR || order.getSignaturesR(),
                signaturesS || order.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(kernel.address, errorCode, order.getDebtOrderHash()),
            );
        };

        const setupBalancesAndAllowances = async (): Promise<[BigNumber, BigNumber]> => {
            const token = await DummyTokenContract.at(
                debtOrder.getPrincipalTokenAddress(),
                web3,
                TX_DEFAULTS,
            );

            const debtor = debtOrder.getDebtor();
            const creditor = debtOrder.getCreditor();

            await token.setBalance.sendTransactionAsync(debtor, new BigNumber(0), {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(tokenTransferProxy.address, new BigNumber(0), {
                from: debtor,
            });

            const creditorBalanceAndAllowance = debtOrder
                .getPrincipalAmount()
                .plus(debtOrder.getCreditorFee());

            await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
                from: CONTRACT_OWNER,
            });
            await token.approve.sendTransactionAsync(
                tokenTransferProxy.address,
                creditorBalanceAndAllowance,
                { from: creditor },
            );

            return [new BigNumber(0), creditorBalanceAndAllowance];
        };

        const getAgentBalances = async (principalToken: DummyTokenContract) => {
            const debtorBalance = await principalToken.balanceOf.callAsync(debtOrder.getDebtor());
            const creditorBalance = await principalToken.balanceOf.callAsync(
                debtOrder.getCreditor(),
            );
            const underwriterBalance = await principalToken.balanceOf.callAsync(
                debtOrder.getIssuanceCommitment().getUnderwriter(),
            );
            const relayerBalance = await principalToken.balanceOf.callAsync(debtOrder.getRelayer());

            return [debtorBalance, creditorBalance, underwriterBalance, relayerBalance];
        };

        const testOrderFill = (filler: string, setupDebtOrder: () => Promise<void>) => {
            return () => {
                let principalToken: DummyTokenContract;

                let debtorBalanceBefore: BigNumber;
                let creditorBalanceBefore: BigNumber;
                let underwriterBalanceBefore: BigNumber;
                let relayerBalanceBefore: BigNumber;

                let receipt: Web3.TransactionReceipt;
                let block: Web3.BlockWithoutTransactionData;

                let logs: ABIDecoder.DecodedLog[];

                before(async () => {
                    await setupDebtOrder();
                    await setupBalancesAndAllowances();

                    principalToken = await DummyTokenContract.at(
                        debtOrder.getPrincipalTokenAddress(),
                        web3,
                        TX_DEFAULTS,
                    );

                    [
                        debtorBalanceBefore,
                        creditorBalanceBefore,
                        underwriterBalanceBefore,
                        relayerBalanceBefore,
                    ] = await getAgentBalances(principalToken);

                    const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        debtOrder.getSignaturesV(),
                        debtOrder.getSignaturesR(),
                        debtOrder.getSignaturesS(),
                        { from: filler },
                    );

                    receipt = await web3.eth.getTransactionReceipt(txHash);
                    block = await web3.eth.getBlock(receipt.blockNumber);

                    logs = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should mint debt token to creditor", async () => {
                    await expect(
                        debtTokenContract.ownerOf.callAsync(
                            new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                        ),
                    ).to.eventually.equal(debtOrder.getCreditor());
                });

                it("should make issuance parameters retrievable from registry", async () => {
                    const [
                        version,
                        beneficiary,
                        underwriter,
                        underwriterRiskRating,
                        termsContract,
                        termsContractParameters,
                        issuanceBlockTimestamp,
                    ] = await debtRegistryContract.get.callAsync(
                        debtOrder.getIssuanceCommitment().getHash(),
                    );
                    expect(version).to.equal(debtOrder.getIssuanceCommitment().getVersion());
                    expect(beneficiary).to.equal(debtOrder.getCreditor());
                    expect(underwriter).to.equal(
                        debtOrder.getIssuanceCommitment().getUnderwriter(),
                    );
                    expect(underwriterRiskRating).to.bignumber.equal(
                        debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(),
                    );
                    expect(termsContract).to.equal(
                        debtOrder.getIssuanceCommitment().getTermsContract(),
                    );
                    expect(termsContractParameters).to.equal(
                        debtOrder.getIssuanceCommitment().getTermsContractParameters(),
                    );
                    expect(issuanceBlockTimestamp).to.bignumber.equal(block.timestamp);
                });

                it("should debit principal + creditor fee from creditor", async () => {
                    const delta = debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee());
                    await expect(
                        principalToken.balanceOf.callAsync(debtOrder.getCreditor()),
                    ).to.eventually.bignumber.equal(creditorBalanceBefore.minus(delta));
                });

                it("should credit principal - debtor fee to debtor", async () => {
                    const delta = debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee());
                    await expect(
                        principalToken.balanceOf.callAsync(debtOrder.getDebtor()),
                    ).to.eventually.bignumber.equal(debtorBalanceBefore.plus(delta));
                });

                it("should credit underwriter fee to underwriter", async () => {
                    const delta = debtOrder.getUnderwriterFee();
                    await expect(
                        principalToken.balanceOf.callAsync(
                            debtOrder.getIssuanceCommitment().getUnderwriter(),
                        ),
                    ).to.eventually.bignumber.equal(underwriterBalanceBefore.plus(delta));
                });

                it("should credit relayer fee to relayer", async () => {
                    const delta = debtOrder.getRelayerFee();
                    await expect(
                        principalToken.balanceOf.callAsync(debtOrder.getRelayer()),
                    ).to.eventually.bignumber.equal(relayerBalanceBefore.plus(delta));
                });

                describe("Logs Emitted:", () => {
                    it("should emit registry insert log", async () => {
                        await expect(logs.shift()).to.deep.equal(
                            LogInsertEntry(
                                debtRegistryContract.address,
                                new DebtRegistryEntry(
                                    {
                                        beneficiary: debtOrder.getCreditor(),
                                        debtor: debtOrder.getDebtor(),
                                        termsContract: debtOrder
                                            .getIssuanceCommitment()
                                            .getTermsContract(),
                                        termsContractParameters: debtOrder
                                            .getIssuanceCommitment()
                                            .getTermsContractParameters(),
                                        underwriter: debtOrder
                                            .getIssuanceCommitment()
                                            .getUnderwriter(),
                                        underwriterRiskRating: debtOrder
                                            .getIssuanceCommitment()
                                            .getUnderwriterRiskRating(),
                                        version: debtOrder.getIssuanceCommitment().getVersion(),
                                    },
                                    debtOrder.getIssuanceCommitment().getSalt(),
                                ),
                            ),
                        );
                    });

                    it("should emit debt token mint log", async () => {
                        await expect(logs.shift()).to.deep.equal(
                            LogMint(
                                debtTokenContract.address,
                                debtOrder.getCreditor(),
                                new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                            ),
                        );
                    });

                    it("should emit transfer log from creditor to debtor (if principal - debtor fee > 0)", async () => {
                        if (
                            debtOrder
                                .getPrincipalAmount()
                                .minus(debtOrder.getDebtorFee())
                                .gt(0)
                        ) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOrder.getPrincipalTokenAddress(),
                                    debtOrder.getCreditor(),
                                    debtOrder.getDebtor(),
                                    debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee()),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from creditor to underwriter (if present)", async () => {
                        if (debtOrder.getIssuanceCommitment().getUnderwriter() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOrder.getPrincipalTokenAddress(),
                                    debtOrder.getCreditor(),
                                    debtOrder.getIssuanceCommitment().getUnderwriter(),
                                    debtOrder.getUnderwriterFee(),
                                ),
                            );
                        }
                    });

                    it("should emit transfer log from kernel to relayer (if present)", async () => {
                        if (debtOrder.getRelayer() !== NULL_ADDRESS) {
                            await expect(logs.shift()).to.deep.equal(
                                LogTransfer(
                                    debtOrder.getPrincipalTokenAddress(),
                                    debtOrder.getCreditor(),
                                    debtOrder.getRelayer(),
                                    debtOrder.getRelayerFee(),
                                ),
                            );
                        }
                    });

                    it("should emit order filled log", () => {
                        expect(logs.shift()).to.deep.equal(
                            LogDebtOrderFilled(
                                kernel.address,
                                debtOrder.getIssuanceCommitment().getHash(),
                                debtOrder.getPrincipalAmount(),
                                debtOrder.getPrincipalTokenAddress(),
                                debtOrder.getIssuanceCommitment().getUnderwriter(),
                                debtOrder.getUnderwriterFee(),
                                debtOrder.getRelayer(),
                                debtOrder.getRelayerFee(),
                            ),
                        );
                    });
                });
            };
        };

        before(reset);

        describe("User fills valid, consensual debt order", () => {
            describe("...and debt kernel is paused by owner", async () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await kernel.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await kernel.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    await expect(
                        kernel.fillDebtOrder.sendTransactionAsync(
                            debtOrder.getCreditor(),
                            debtOrder.getOrderAddresses(),
                            debtOrder.getOrderValues(),
                            debtOrder.getOrderBytes32(),
                            debtOrder.getSignaturesV(),
                            debtOrder.getSignaturesR(),
                            debtOrder.getSignaturesS(),
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe(
                "...with underwriter and relayer",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                }),
            );

            describe(
                "...with neither underwriter nor relayer",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: new BigNumber(0),
                        debtorFee: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with relayer but no underwriter",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: defaultOrderParams.relayerFee.minus(
                            defaultOrderParams.debtorFee,
                        ),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with underwriter but no relayer",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriterFee: defaultOrderParams.creditorFee.plus(
                            defaultOrderParams.debtorFee,
                        ),
                    });
                }),
            );

            describe(
                "...with no principal and no creditor / debtor fees",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: new BigNumber(0),
                        debtorFee: new BigNumber(0),
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...with no principal and nonzero creditor fee",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.002),
                        debtorFee: new BigNumber(0),
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: UNDERWRITER,
                        underwriterFee: Units.ether(0.002),
                    });
                }),
            );

            describe(
                "...when creditor and debtor are same address",
                testOrderFill(CONTRACT_OWNER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditor: CREDITOR_1,
                        creditorFee: new BigNumber(0),
                        debtor: CREDITOR_1,
                        debtorFee: new BigNumber(0),
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            debtor: CREDITOR_1,
                        },
                        principalAmount: new BigNumber(0),
                        relayer: NULL_ADDRESS,
                        relayerFee: new BigNumber(0),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: new BigNumber(0),
                        underwriterRiskRating: new BigNumber(0),
                    });
                }),
            );

            describe(
                "...when submitted by creditor *without* creditor signature attached",
                testOrderFill(CREDITOR_1, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditor: CREDITOR_1,
                        orderSignatories: {
                            debtor: DEBTOR_1,
                            underwriter: UNDERWRITER,
                        },
                    });
                }),
            );

            describe(
                "...when submitted by debtor *without* debtor signature attached",
                testOrderFill(DEBTOR_1, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        debtor: DEBTOR_1,
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            underwriter: UNDERWRITER,
                        },
                    });
                }),
            );

            describe(
                "...when submitted by underwriter *without* underwriter signature attached",
                testOrderFill(UNDERWRITER, async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        orderSignatories: {
                            creditor: CREDITOR_1,
                            debtor: DEBTOR_1,
                        },
                        underwriter: UNDERWRITER,
                    });
                }),
            );
        });

        describe("User fills invalid debt order", () => {
            describe("...where there is no underwriter, but underwriter fee is nonzero", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: defaultOrderParams.relayerFee
                            .plus(Units.ether(0.001))
                            .dividedBy(2),
                        debtorFee: defaultOrderParams.relayerFee
                            .plus(Units.ether(0.001))
                            .dividedBy(2),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: Units.ether(0.001),
                        underwriterRiskRating: new BigNumber(0),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT,
                    );
                });
            });

            describe("...where there is no relayer, but relayer fee is nonzero", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: Units.ether(0.003),
                        underwriterFee: new BigNumber(0),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT,
                    );
                });
            });

            describe("...when creditor + debtor fees < underwriter + relayer fees", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.001),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return INSUFFICIENT_OR_EXCESSIVE_FEES error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES,
                    );
                });
            });

            describe("...when creditor + debtor fees > underwriter + relayer fees", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.006),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return INSUFFICIENT_OR_EXCESSIVE_FEES error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES,
                    );
                });
            });

            describe("...when creditorFee + principal > 0, proxy does not have sufficient allowance", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    const token = await DummyTokenContract.at(
                        debtOrder.getPrincipalTokenAddress(),
                        web3,
                        TX_DEFAULTS,
                    );
                    await token.approve.sendTransactionAsync(
                        tokenTransferProxy.address,
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee().minus(1)),
                        { from: debtOrder.getCreditor() },
                    );
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when creditorFee + principal > 0, but creditor does not have sufficient balance", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();

                    const token = await DummyTokenContract.at(
                        debtOrder.getPrincipalTokenAddress(),
                        web3,
                        TX_DEFAULTS,
                    );
                    await token.setBalance.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee().minus(1)),
                        { from: CONTRACT_OWNER },
                    );
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
                    );
                });
            });

            describe("...when debtorFee > principal", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0),
                        debtorFee: Units.ether(1.1),
                        principalAmount: Units.ether(1),
                        relayerFee: Units.ether(0.55),
                        underwriterFee: Units.ether(0.55),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return INSUFFICIENT_PRINCIPAL error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_PRINCIPAL,
                    );
                });
            });

            describe("...when order has expired", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new BigNumber(
                            moment()
                                .subtract(1, "days")
                                .unix(),
                        ),
                    });
                    await setupBalancesAndAllowances();
                });

                it("should return EXPIRED error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_EXPIRED,
                    );
                });
            });

            describe("...when debt order has already been filled", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    await kernel.fillDebtOrder.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        debtOrder.getSignaturesV(),
                        debtOrder.getSignaturesR(),
                        debtOrder.getSignaturesS(),
                    );
                });

                it("should return DEBT_ISSUED error", async () => {
                    await testShouldReturnError(debtOrder, DebtKernelErrorCodes.DEBT_ISSUED);
                });
            });

            describe("...when issuance has been cancelled", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    await kernel.cancelIssuance.sendTransactionAsync(
                        debtOrder.getIssuanceCommitment().getVersion(),
                        debtOrder.getIssuanceCommitment().getDebtor(),
                        debtOrder.getIssuanceCommitment().getTermsContract(),
                        debtOrder.getIssuanceCommitment().getTermsContractParameters(),
                        debtOrder.getIssuanceCommitment().getUnderwriter(),
                        debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(),
                        debtOrder.getIssuanceCommitment().getSalt(),
                        { from: debtOrder.getIssuanceCommitment().getUnderwriter() },
                    );
                });

                it("should return ISSUANCE_CANCELLED error", async () => {
                    await testShouldReturnError(debtOrder, DebtKernelErrorCodes.ISSUANCE_CANCELLED);
                });
            });

            describe("...when debt order has been cancelled", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder();
                    await setupBalancesAndAllowances();

                    await kernel.cancelDebtOrder.sendTransactionAsync(
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        { from: debtOrder.getDebtor() },
                    );
                });

                it("should return ORDER_INVALID_CANCELLED error", async () => {
                    await testShouldReturnError(
                        debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_CANCELLED,
                    );
                });
            });

            describe("...when terms contract returns false for `registerTermStart`", () => {
                before(async () => {
                    debtOrder = await orderFactory.generateDebtOrder({
                        termsContract: incompatibleTermsContractAddress,
                    });

                });

                it("should throw", async () => {
                    await expect(
                        kernel.fillDebtOrder.sendTransactionAsync(
                            debtOrder.getCreditor(),
                            debtOrder.getOrderAddresses(),
                            debtOrder.getOrderValues(),
                            debtOrder.getOrderBytes32(),
                            debtOrder.getSignaturesV(),
                            debtOrder.getSignaturesR(),
                            debtOrder.getSignaturesS(),
                            { from: debtOrder.getCreditor() },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("User fills valid, nonconsensual debt order", () => {
            let mismatchedOrder: SignedDebtOrder;

            const getMismatchedSignatures = async (
                debtorsDebtOrder: SignedDebtOrder,
                creditorsDebtOrder: SignedDebtOrder,
                underwritersDebtOrder: SignedDebtOrder,
            ): Promise<any[]> => {
                const signaturesR = [
                    underwritersDebtOrder.getUnderwriterSignature().r,
                    debtorsDebtOrder.getDebtorSignature().r,
                    creditorsDebtOrder.getCreditorSignature().r,
                ];

                const signaturesS = [
                    underwritersDebtOrder.getUnderwriterSignature().s,
                    debtorsDebtOrder.getDebtorSignature().s,
                    creditorsDebtOrder.getCreditorSignature().s,
                ];

                const signaturesV = [
                    underwritersDebtOrder.getUnderwriterSignature().v,
                    debtorsDebtOrder.getDebtorSignature().v,
                    creditorsDebtOrder.getCreditorSignature().v,
                ];

                return [signaturesR, signaturesS, signaturesV];
            };

            before(async () => {
                debtOrder = await orderFactory.generateDebtOrder();
                await setupBalancesAndAllowances();
            });

            describe("...with mismatched issuance parameters", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        termsContract: MALICIOUS_TERMS_CONTRACTS,
                    });
                });

                describe("creditor's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to issuance parameters =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, debtOrder, mismatchedOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched underwriter fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        underwriterFee: Units.ether(0.001),
                    });
                });

                describe("creditor's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to underwriter fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, debtOrder, mismatchedOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched underwriter", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                        underwriter: ATTACKER,
                    });
                });

                describe("creditor's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to underwriter =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, debtOrder, mismatchedOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched principal amount", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        principalAmount: Units.ether(1.1),
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to principal amount =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, debtOrder, mismatchedOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched principal token", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        principalTokenAddress: NULL_ADDRESS,
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to principal token =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, debtOrder, mismatchedOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched debtor fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        debtorFee: Units.ether(0.0004),
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to debtor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to debtor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched creditor fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.0004),
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to creditor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to creditor fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched relayer", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to relayer =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to relayer =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched relayer fee", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        relayerFee: new BigNumber(0),
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to relayer fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to relayer fee =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });

            describe("...with mismatched expiration", () => {
                before(async () => {
                    mismatchedOrder = await orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new BigNumber(
                            moment()
                                .add(2, "days")
                                .unix(),
                        ),
                        salt: debtOrder.getIssuanceCommitment().getSalt(),
                    });
                });

                describe("creditor's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, mismatchedOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("debtor's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(mismatchedOrder, debtOrder, debtOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });

                describe("underwriter's signature commits to expiration =/= order's", async () => {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", async () => {
                        const [
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        ] = await getMismatchedSignatures(debtOrder, debtOrder, mismatchedOrder);
                        await testShouldReturnError(
                            debtOrder,
                            DebtKernelErrorCodes.ORDER_INVALID_NON_CONSENSUAL,
                            signaturesR,
                            signaturesS,
                            signaturesV,
                        );
                    });
                });
            });
        });
    });
});
