import {BigNumber} from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";
import * as utils from "../test_utils/utils";

import {LogDebtOrderFilled, LogError} from "../logs/debt_kernel";

import {DebtKernelContract} from "../../../types/generated/debt_kernel";
import {MockDebtTokenContract} from "../../../types/generated/mock_debt_token";
import {MockERC20TokenContract} from "../../../types/generated/mock_e_r_c20_token";
import {MockZeroExExchangeContract} from "../../../types/generated/mock_zero_ex_exchange";
import {RepaymentRouterContract} from "../../../types/generated/repayment_router";
import {ZeroX_TokenTransferProxyContract} from "../../../types/generated/zerox_tokentransferproxy";

import {DebtKernelErrorCodes} from "../../../types/errors";
import {DebtOrder, SignedDebtOrder} from "../../../types/kernel/debt_order";
import {IssuanceCommitment, SignedIssuanceCommitment} from "../../../types/kernel/issuance_commitment";

import {BigNumberSetup} from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import {INVALID_OPCODE, REVERT_ERROR} from "../test_utils/constants";

import {DebtOrderFactory} from "../factories/debt_order_factory";

import {TxDataPayable} from "../../../types/common";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");
const mockDebtTokenContract = artifacts.require("MockDebtToken");

contract("Debt Kernel (Unit Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let zeroExTokenTransferProxy: ZeroX_TokenTransferProxyContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockExchange: MockZeroExExchangeContract;
    let mockPrincipalToken: MockERC20TokenContract;

    let orderFactory: DebtOrderFactory;
    let defaultOrderParams: { [key: string]: any };

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const DEBTOR_1 = ACCOUNTS[5];
    const DEBTOR_2 = ACCOUNTS[6];
    const DEBTOR_3 = ACCOUNTS[7];
    const DEBTORS = [
        DEBTOR_1,
        DEBTOR_2,
        DEBTOR_3,
    ];

    const CREDITOR_1 = ACCOUNTS[8];
    const CREDITOR_2 = ACCOUNTS[9];
    const CREDITOR_3 = ACCOUNTS[10];
    const CREDITORS = [
        CREDITOR_1,
        CREDITOR_2,
        CREDITOR_3,
    ];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];
    const TERMS_CONTRACT = ACCOUNTS[13];
    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[14];
    const MALICIOUS_EXCHANGE_CONTRACT = ACCOUNTS[15];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        zeroExTokenTransferProxy = await ZeroX_TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        const kernelContractInstance = await debtKernelContract.new(zeroExTokenTransferProxy.address);

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const web3ContractInstance =
            web3.eth.contract(debtKernelContract.abi).at(kernelContractInstance.address);

        kernel = new DebtKernelContract(web3ContractInstance, TX_DEFAULTS);

        // Load current Repayment Router for use as a version address in the Issuance
        // commitments
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        mockExchange = await MockZeroExExchangeContract.deployed(web3, TX_DEFAULTS);
        mockPrincipalToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        defaultOrderParams = {
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtTokenContract: mockDebtToken.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(moment().add(1, "days").unix()),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: Units.ether(1),
            principalTokenAddress: mockPrincipalToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: TERMS_CONTRACT,
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
            zeroExExchangeContract: mockExchange.address,
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(mockDebtTokenContract.abi);
    };

    before(reset);

    describe("Initialization & Upgrades", async () => {
        describe("non-owner sets debt token contract pointer", () => {
            it("should throw", async () => {
                expect(kernel.setDebtToken.sendTransactionAsync(ATTACKER, { from: ATTACKER }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner updates debt token contract pointer", () => {
            before(async () => {
                await kernel.setDebtToken
                    .sendTransactionAsync(mockDebtToken.address, { from: CONTRACT_OWNER });
            });

            it("should point to new debt token contract", async () => {
                await expect(kernel.debtToken.callAsync())
                    .to.eventually.equal(mockDebtToken.address);
            });
        });
    });

    describe("#fillDebtOrder", () => {
        let debtOrder: SignedDebtOrder;
        let testOrderFill: (description: string, debtOrder: SignedDebtOrder) => Promise<void>;

        before(() => {
            testOrderFill = async (description: string, order: SignedDebtOrder) => {
                describe(description, () => {
                    let orderFilledLog: ABIDecoder.DecodedLog;

                    before(async () => {
                        await mockDebtToken.reset.sendTransactionAsync();
                        await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                                new BigNumber(order.getIssuanceCommitment().getHash()));

                        await mockPrincipalToken.reset.sendTransactionAsync();
                        await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                            order.getCreditor(),
                            order.getPrincipalAmount().plus(order.getCreditorFee(),
                        ));
                        await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                            order.getCreditor(),
                            zeroExTokenTransferProxy.address,
                            order.getPrincipalAmount().plus(order.getCreditorFee(),
                        ));

                        const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                            order.getCreditor(),
                            order.getOrderAddresses(),
                            order.getOrderValues(),
                            order.getOrderBytes32(),
                            order.getSignaturesR(),
                            order.getSignaturesS(),
                            order.getSignaturesV(),
                        );

                        const receipt = await web3.eth.getTransactionReceipt(txHash);
                        [orderFilledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                    });

                    it("should create debt token with issuance parameters", async () => {
                        await expect(mockDebtToken.wasCreateCalledWith.callAsync(
                            order.getIssuanceCommitment().getVersion(),
                            kernel.address,
                            order.getDebtor(),
                            order.getIssuanceCommitment().getUnderwriter(),
                            order.getIssuanceCommitment().getUnderwriterRiskRating(),
                            order.getIssuanceCommitment().getTermsContract(),
                            order.getIssuanceCommitment().getTermsContractParameters(),
                            order.getIssuanceCommitment().getSalt(),
                        )).to.eventually.be.true;
                    });

                    it("should fill 0x order to swap debt token for principal + creditor fee amount", async () => {
                        await expect(mockDebtToken.wasBrokerZeroExOrderCalledWith.callAsync(
                            new BigNumber(order.getIssuanceCommitment().getHash()),
                            mockExchange.address,
                            [
                                order.getCreditor(), // maker
                                NULL_ADDRESS, // taker
                                mockPrincipalToken.address, // makerToken
                                mockDebtToken.address, // takerToken
                                NULL_ADDRESS, // feeRecipient
                            ],
                            [
                                order.getPrincipalAmount().plus(order.getCreditorFee()), // makerTokenAmount
                                new BigNumber(1), // takerTokenAmount
                                new BigNumber(0), // makerFee
                                new BigNumber(0), // takerFee
                                order.getExpiration(), // expirationTimestampInSec
                                new BigNumber(order.getDebtorSignatureHash()), // salt
                            ],
                            order.getCreditorSignature().v,
                            order.getCreditorSignature().r,
                            order.getCreditorSignature().s,
                        )).to.eventually.be.true;
                    });

                    if (order.getIssuanceCommitment().getUnderwriter() !== NULL_ADDRESS) {
                        it("should transfer underwriter fee to underwriter", async () => {
                            await expect(mockPrincipalToken.wasTransferCalledWith
                                .callAsync(order.getIssuanceCommitment().getUnderwriter(),
                                    order.getUnderwriterFee())).to.eventually.be.true;
                        });
                    }

                    if (order.getRelayer() !== NULL_ADDRESS) {
                        it("should transfer relayer fee to relayer", async () => {
                            await expect(mockPrincipalToken.wasTransferCalledWith
                                .callAsync(order.getRelayer(),
                                    order.getRelayerFee())).to.eventually.be.true;
                        });
                    }

                    if (order.getPrincipalAmount().greaterThan(0)) {
                        it("should transfer principal minus debtorFee to debtor", async () => {
                            await expect(mockPrincipalToken.wasTransferCalledWith
                                .callAsync(order.getDebtor(),
                                    order.getPrincipalAmount().minus(order.getDebtorFee())))
                                    .to.eventually.be.true;
                        });
                    }

                    it("should emit order filled log", () => {
                        expect(orderFilledLog).to.deep.equal(LogDebtOrderFilled(
                            kernel.address,
                            order.getIssuanceCommitment().getHash(),
                            order.getPrincipalAmount(),
                            order.getPrincipalTokenAddress(),
                            order.getIssuanceCommitment().getUnderwriter(),
                            order.getUnderwriterFee(),
                            order.getRelayer(),
                            order.getRelayerFee(),
                        ));
                    });
                });
            };
        });

        describe("User fills invalid debt order", () => {
            const resetMocks = async () => {
                await mockDebtToken.reset.sendTransactionAsync();
                await mockExchange.reset.sendTransactionAsync();
                await mockPrincipalToken.reset.sendTransactionAsync();
            };

            const testShouldReturnError = async (order: SignedDebtOrder, errorCode: number) => {
                const txHash = await kernel.fillDebtOrder.sendTransactionAsync(
                    order.getCreditor(),
                    order.getOrderAddresses(),
                    order.getOrderValues(),
                    order.getOrderBytes32(),
                    order.getSignaturesR(),
                    order.getSignaturesS(),
                    order.getSignaturesV(),
                );

                const receipt = await web3.eth.getTransactionReceipt(txHash);
                const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

                expect(errorLog).to.deep.equal(LogError(
                    kernel.address,
                    errorCode,
                    order.getDebtorSignatureHash(),
                ));
            };

            describe("...where there is no underwriter, but underwriter fee is nonzero", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        underwriter: NULL_ADDRESS,
                        underwriterFee: Units.ether(0.001),
                        underwriterRiskRating: new BigNumber(0),
                    });
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT);
                });
            });

            describe("...where there is no relayer, but relayer fee is nonzero", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: Units.ether(0.003),
                        underwriterFee: new BigNumber(0),
                    });
                });

                it("should return UNSPECIFIED_FEE_RECIPIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT);
                });
            });

            describe("...when creditor + debtor fees < underwriter + relayer fees", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.001),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                });

                it("should return INSUFFICIENT_FEES error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_FEES);
                });
            });

            describe("...when creditorFee + principal > 0, but 0x proxy does not have sufficient allowance", () => {
                before(async () => {
                    await resetMocks();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()));
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        zeroExTokenTransferProxy.address,
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()).minus(1),
                    );

                    debtOrder = await orderFactory.generateDebtOrder();
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT);
                });
            });

            describe("...when creditorFee + principal > 0, but creditor does not have sufficient balance", () => {
                before(async () => {
                    await resetMocks();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(debtOrder.getCreditor(),
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()).minus(1));
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        debtOrder.getCreditor(),
                        zeroExTokenTransferProxy.address,
                        debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()),
                    );

                    debtOrder = await orderFactory.generateDebtOrder();
                });

                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT);
                });
            });

            describe("...when debtorFee > principal", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        debtorFee: Units.ether(1.1),
                        principalAmount: Units.ether(1),
                    });
                });

                it("should return INSUFFICIENT_PRINCIPAL error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_INSUFFICIENT_PRINCIPAL);
                });
            });

            describe("...when order has expired", () => {
                before(async () => {
                    await resetMocks();
                    debtOrder = await orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new BigNumber(moment().subtract(1, "days").unix()),
                    });
                });

                it("should return EXPIRED error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_EXPIRED);
                });
            });

            describe("...when debt order has already been filled", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

                    await mockDebtToken.mockOwnerOfFor.sendTransactionAsync(
                        new BigNumber(debtOrder.getIssuanceCommitment().getHash()),
                        CREDITOR_1,
                    );
                });

                it("should return DEBT_ISSUED error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.DEBT_ISSUED);
                });
            });

            describe("...when issuance has been cancelled", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

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
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ISSUANCE_CANCELLED);
                });
            });

            describe("...when debt order has been cancelled", () => {
                before(async () => {
                    await resetMocks();

                    debtOrder = await orderFactory.generateDebtOrder();

                    await kernel.cancelDebtOrder.sendTransactionAsync(
                        debtOrder.getOrderAddresses(),
                        debtOrder.getOrderValues(),
                        debtOrder.getOrderBytes32(),
                        { from: debtOrder.getDebtor() },
                    );
                });

                it("should return ORDER_INVALID_CANCELLED error", async () => {
                    await testShouldReturnError(debtOrder,
                        DebtKernelErrorCodes.ORDER_INVALID_CANCELLED);
                });
            });
        });

        describe("User fills valid, consensual debt order", () => {
            before(async () => {
                debtOrder = await orderFactory.generateDebtOrder();
                await testOrderFill("...with underwriter and relayer", debtOrder);

                debtOrder = await orderFactory.generateDebtOrder({
                    creditorFee: new BigNumber(0),
                    debtorFee: new BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new BigNumber(0),
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new BigNumber(0),
                    underwriterRiskRating: new BigNumber(0),
                });
                await testOrderFill("...with neither underwriter nor relayer", debtOrder);

                debtOrder = await orderFactory.generateDebtOrder({
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new BigNumber(0),
                    underwriterRiskRating: new BigNumber(0),
                });
                await testOrderFill("...with relayer but no underwriter", debtOrder);

                debtOrder = await orderFactory.generateDebtOrder({
                    relayer: NULL_ADDRESS,
                    relayerFee: new BigNumber(0),
                    underwriterFee: defaultOrderParams.creditorFee
                        .plus(defaultOrderParams.debtorFee),
                });
                await testOrderFill("...with underwriter but no relayer", debtOrder);

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
                await testOrderFill("...with no principal and no creditor / debtor fees", debtOrder);

                debtOrder = await orderFactory.generateDebtOrder({
                    creditorFee: Units.ether(0.002),
                    debtorFee: new BigNumber(0),
                    principalAmount: new BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new BigNumber(0),
                    underwriter: UNDERWRITER,
                    underwriterFee: Units.ether(0.002),
                });
                await testOrderFill("...with no principal and nonzero creditor fee", debtOrder);

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
                await testOrderFill("...when creditor and debtor are same address", debtOrder);
            });

            it("[required placeholder for mocha to allow dynamically defined tests]", () => {
                // No-op
            });
        });
    });
});
