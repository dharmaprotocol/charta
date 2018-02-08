"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
const ABIDecoder = require("abi-decoder");
const chai = require("chai");
const _ = require("lodash");
const moment = require("moment");
const Units = require("../test_utils/units");
const debt_kernel_1 = require("../logs/debt_kernel");
const debt_kernel_2 = require("../../../types/generated/debt_kernel");
const mock_debt_token_1 = require("../../../types/generated/mock_debt_token");
const mock_e_r_c20_token_1 = require("../../../types/generated/mock_e_r_c20_token");
const mock_token_transfer_proxy_1 = require("../../../types/generated/mock_token_transfer_proxy");
const repayment_router_1 = require("../../../types/generated/repayment_router");
const bignumber_setup_1 = require("../test_utils/bignumber_setup");
const chai_setup_1 = require("../test_utils/chai_setup");
const constants_1 = require("../test_utils/constants");
const debt_order_factory_1 = require("../factories/debt_order_factory");
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
const debtKernelContract = artifacts.require("DebtKernel");
const mockDebtTokenContract = artifacts.require("MockDebtToken");
contract("Debt Kernel (Unit Tests)", (ACCOUNTS) => __awaiter(this, void 0, void 0, function* () {
    let kernel;
    let repaymentRouter;
    let mockDebtToken;
    let mockPrincipalToken;
    let mockTokenTransferProxy;
    let orderFactory;
    let defaultOrderParams;
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
    const reset = () => __awaiter(this, void 0, void 0, function* () {
        mockTokenTransferProxy = yield mock_token_transfer_proxy_1.MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        const kernelContractInstance = yield debtKernelContract.new(mockTokenTransferProxy.address);
        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const web3ContractInstance = web3.eth.contract(debtKernelContract.abi).at(kernelContractInstance.address);
        kernel = new debt_kernel_2.DebtKernelContract(web3ContractInstance, TX_DEFAULTS);
        // Load current Repayment Router for use as a version address in the Issuance
        // commitments
        repaymentRouter = yield repayment_router_1.RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        mockDebtToken = yield mock_debt_token_1.MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        mockPrincipalToken = yield mock_e_r_c20_token_1.MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: mockDebtToken.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new bignumber_js_1.BigNumber(moment().add(1, "days").unix()),
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
        };
        orderFactory = new debt_order_factory_1.DebtOrderFactory(defaultOrderParams);
        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(mockDebtTokenContract.abi);
    });
    before(reset);
    describe("Initialization & Upgrades", () => __awaiter(this, void 0, void 0, function* () {
        describe("non-owner sets debt token contract pointer", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                expect(kernel.setDebtToken.sendTransactionAsync(ATTACKER, { from: ATTACKER }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner updates debt token contract pointer", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield kernel.setDebtToken
                    .sendTransactionAsync(mockDebtToken.address, { from: CONTRACT_OWNER });
            }));
            it("should point to new debt token contract", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(kernel.debtToken.callAsync())
                    .to.eventually.equal(mockDebtToken.address);
            }));
        });
    }));
    describe("#fillDebtOrder", () => {
        let debtOrder;
        const testShouldReturnError = (order, errorCode, signaturesR, signaturesS, signaturesV) => __awaiter(this, void 0, void 0, function* () {
            const txHash = yield kernel.fillDebtOrder.sendTransactionAsync(order.getCreditor(), order.getOrderAddresses(), order.getOrderValues(), order.getOrderBytes32(), signaturesV || order.getSignaturesV(), signaturesR || order.getSignaturesR(), signaturesS || order.getSignaturesS());
            const receipt = yield web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            expect(errorLog).to.deep.equal(debt_kernel_1.LogError(kernel.address, errorCode, order.getDebtOrderHash()));
        });
        const resetMocks = () => __awaiter(this, void 0, void 0, function* () {
            yield mockDebtToken.reset.sendTransactionAsync();
            yield mockTokenTransferProxy.reset.sendTransactionAsync();
            yield mockPrincipalToken.reset.sendTransactionAsync();
        });
        const testOrderFill = (filler, setupDebtOrder) => {
            return () => {
                let orderFilledLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield setupDebtOrder();
                    yield mockDebtToken.reset.sendTransactionAsync();
                    yield mockDebtToken.mockCreateReturnValue.sendTransactionAsync(new bignumber_js_1.BigNumber(debtOrder.getIssuanceCommitment().getHash()));
                    yield mockPrincipalToken.reset.sendTransactionAsync();
                    yield mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(debtOrder.getCreditor(), debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()));
                    yield mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(debtOrder.getCreditor(), mockTokenTransferProxy.address, debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()));
                    const txHash = yield kernel.fillDebtOrder.sendTransactionAsync(debtOrder.getCreditor(), debtOrder.getOrderAddresses(), debtOrder.getOrderValues(), debtOrder.getOrderBytes32(), debtOrder.getSignaturesV(), debtOrder.getSignaturesR(), debtOrder.getSignaturesS(), { from: filler });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [orderFilledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should mint debt token to creditor with issuance parameters", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockDebtToken.wasCreateCalledWith.callAsync(debtOrder.getIssuanceCommitment().getVersion(), debtOrder.getCreditor(), debtOrder.getDebtor(), debtOrder.getIssuanceCommitment().getUnderwriter(), debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(), debtOrder.getIssuanceCommitment().getTermsContract(), debtOrder.getIssuanceCommitment().getTermsContractParameters(), debtOrder.getIssuanceCommitment().getSalt())).to.eventually.be.true;
                }));
                it("should transfer underwriter fee to underwriter", () => __awaiter(this, void 0, void 0, function* () {
                    if (debtOrder.getIssuanceCommitment().getUnderwriter() !== NULL_ADDRESS) {
                        yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockPrincipalToken.address, debtOrder.getCreditor(), debtOrder.getIssuanceCommitment().getUnderwriter(), debtOrder.getUnderwriterFee())).to.eventually.be.true;
                    }
                }));
                it("should transfer relayer fee to relayer", () => __awaiter(this, void 0, void 0, function* () {
                    if (debtOrder.getRelayer() !== NULL_ADDRESS) {
                        yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockPrincipalToken.address, debtOrder.getCreditor(), debtOrder.getRelayer(), debtOrder.getRelayerFee())).to.eventually.be.true;
                    }
                }));
                it("should transfer principal minus debtorFee to debtor", () => __awaiter(this, void 0, void 0, function* () {
                    if (debtOrder.getPrincipalAmount().greaterThan(0)) {
                        yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockPrincipalToken.address, debtOrder.getCreditor(), debtOrder.getDebtor(), debtOrder.getPrincipalAmount().minus(debtOrder.getDebtorFee())))
                            .to.eventually.be.true;
                    }
                }));
                it("should emit order filled log", () => {
                    expect(orderFilledLog).to.deep.equal(debt_kernel_1.LogDebtOrderFilled(kernel.address, debtOrder.getIssuanceCommitment().getHash(), debtOrder.getPrincipalAmount(), debtOrder.getPrincipalTokenAddress(), debtOrder.getIssuanceCommitment().getUnderwriter(), debtOrder.getUnderwriterFee(), debtOrder.getRelayer(), debtOrder.getRelayerFee()));
                });
            };
        };
        describe("User fills valid, consensual debt order", () => {
            describe("...with underwriter and relayer", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder();
            })));
            describe("...with neither underwriter nor relayer", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    creditorFee: new bignumber_js_1.BigNumber(0),
                    debtorFee: new bignumber_js_1.BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new bignumber_js_1.BigNumber(0),
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new bignumber_js_1.BigNumber(0),
                    underwriterRiskRating: new bignumber_js_1.BigNumber(0),
                });
            })));
            describe("...with relayer but no underwriter", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    creditorFee: defaultOrderParams.relayerFee.dividedBy(2),
                    debtorFee: defaultOrderParams.relayerFee.dividedBy(2),
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new bignumber_js_1.BigNumber(0),
                    underwriterRiskRating: new bignumber_js_1.BigNumber(0),
                });
            })));
            describe("...with underwriter but no relayer", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    relayer: NULL_ADDRESS,
                    relayerFee: new bignumber_js_1.BigNumber(0),
                    underwriterFee: defaultOrderParams.creditorFee
                        .plus(defaultOrderParams.debtorFee),
                });
            })));
            describe("...with no principal and no creditor / debtor fees", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    creditorFee: new bignumber_js_1.BigNumber(0),
                    debtorFee: new bignumber_js_1.BigNumber(0),
                    principalAmount: new bignumber_js_1.BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new bignumber_js_1.BigNumber(0),
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new bignumber_js_1.BigNumber(0),
                    underwriterRiskRating: new bignumber_js_1.BigNumber(0),
                });
            })));
            describe("...with no principal and nonzero creditor fee", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    creditorFee: Units.ether(0.002),
                    debtorFee: new bignumber_js_1.BigNumber(0),
                    principalAmount: new bignumber_js_1.BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new bignumber_js_1.BigNumber(0),
                    underwriter: UNDERWRITER,
                    underwriterFee: Units.ether(0.002),
                });
            })));
            describe("...when creditor and debtor are same address", testOrderFill(CONTRACT_OWNER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    creditor: CREDITOR_1,
                    creditorFee: new bignumber_js_1.BigNumber(0),
                    debtor: CREDITOR_1,
                    debtorFee: new bignumber_js_1.BigNumber(0),
                    orderSignatories: {
                        creditor: CREDITOR_1,
                        debtor: CREDITOR_1,
                    },
                    principalAmount: new bignumber_js_1.BigNumber(0),
                    relayer: NULL_ADDRESS,
                    relayerFee: new bignumber_js_1.BigNumber(0),
                    underwriter: NULL_ADDRESS,
                    underwriterFee: new bignumber_js_1.BigNumber(0),
                    underwriterRiskRating: new bignumber_js_1.BigNumber(0),
                });
            })));
            describe("...when submitted by creditor *without* creditor signature attached", testOrderFill(CREDITOR_1, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    creditor: CREDITOR_1,
                    orderSignatories: {
                        debtor: DEBTOR_1,
                        underwriter: UNDERWRITER,
                    },
                });
            })));
            describe("...when submitted by debtor *without* debtor signature attached", testOrderFill(DEBTOR_1, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    debtor: DEBTOR_1,
                    orderSignatories: {
                        creditor: CREDITOR_1,
                        underwriter: UNDERWRITER,
                    },
                });
            })));
            describe("...when submitted by underwriter *without* underwriter signature attached", testOrderFill(UNDERWRITER, () => __awaiter(this, void 0, void 0, function* () {
                debtOrder = yield orderFactory.generateDebtOrder({
                    orderSignatories: {
                        creditor: CREDITOR_1,
                        debtor: DEBTOR_1,
                    },
                    underwriter: UNDERWRITER,
                });
            })));
        });
        describe("User fills invalid debt order", () => {
            describe("...where there is no underwriter, but underwriter fee is nonzero", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder({
                        creditorFee: defaultOrderParams.relayerFee.plus(Units.ether(0.001)).dividedBy(2),
                        debtorFee: defaultOrderParams.relayerFee.plus(Units.ether(0.001)).dividedBy(2),
                        underwriter: NULL_ADDRESS,
                        underwriterFee: Units.ether(0.001),
                        underwriterRiskRating: new bignumber_js_1.BigNumber(0),
                    });
                }));
                it("should return UNSPECIFIED_FEE_RECIPIENT error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 6 /* ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT */);
                }));
            });
            describe("...where there is no relayer, but relayer fee is nonzero", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        relayerFee: Units.ether(0.003),
                        underwriterFee: new bignumber_js_1.BigNumber(0),
                    });
                }));
                it("should return UNSPECIFIED_FEE_RECIPIENT error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 6 /* ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT */);
                }));
            });
            describe("...when creditor + debtor fees < underwriter + relayer fees", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.001),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                }));
                it("should return INSUFFICIENT_OR_EXCESSIVE_FEES error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 4 /* ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES */);
                }));
            });
            describe("...when creditor + debtor fees > underwriter + relayer fees", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.006),
                        debtorFee: Units.ether(0.001),
                        relayerFee: Units.ether(0.0025),
                        underwriterFee: Units.ether(0.0025),
                    });
                }));
                it("should return INSUFFICIENT_OR_EXCESSIVE_FEES error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 4 /* ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES */);
                }));
            });
            describe("...when creditorFee + principal > 0, but transfer proxy has insufficient allowance", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    yield mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(debtOrder.getCreditor(), debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()));
                    yield mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(debtOrder.getCreditor(), mockTokenTransferProxy.address, debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()).minus(Units.ether(0.5)));
                    debtOrder = yield orderFactory.generateDebtOrder();
                }));
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 8 /* CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT */);
                }));
            });
            describe("...when creditorFee + principal > 0, but creditor does not have sufficient balance", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    yield mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(debtOrder.getCreditor(), debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()).minus(1));
                    yield mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(debtOrder.getCreditor(), mockTokenTransferProxy.address, debtOrder.getPrincipalAmount().plus(debtOrder.getCreditorFee()));
                    debtOrder = yield orderFactory.generateDebtOrder();
                }));
                it("should return CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 8 /* CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT */);
                }));
            });
            describe("...when debtorFee > principal", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder({
                        creditorFee: new bignumber_js_1.BigNumber(0),
                        debtorFee: Units.ether(1.1),
                        principalAmount: Units.ether(1),
                        relayerFee: Units.ether(0.55),
                        underwriterFee: Units.ether(0.55),
                    });
                }));
                it("should return INSUFFICIENT_PRINCIPAL error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 5 /* ORDER_INVALID_INSUFFICIENT_PRINCIPAL */);
                }));
            });
            describe("...when order has expired", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new bignumber_js_1.BigNumber(moment().subtract(1, "days").unix()),
                    });
                }));
                it("should return EXPIRED error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 1 /* ORDER_INVALID_EXPIRED */);
                }));
            });
            describe("...when debt order has already been filled", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder();
                    yield mockDebtToken.mockOwnerOfFor.sendTransactionAsync(new bignumber_js_1.BigNumber(debtOrder.getIssuanceCommitment().getHash()), CREDITOR_1);
                }));
                it("should return DEBT_ISSUED error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 0 /* DEBT_ISSUED */);
                }));
            });
            describe("...when issuance has been cancelled", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder();
                    yield kernel.cancelIssuance.sendTransactionAsync(debtOrder.getIssuanceCommitment().getVersion(), debtOrder.getIssuanceCommitment().getDebtor(), debtOrder.getIssuanceCommitment().getTermsContract(), debtOrder.getIssuanceCommitment().getTermsContractParameters(), debtOrder.getIssuanceCommitment().getUnderwriter(), debtOrder.getIssuanceCommitment().getUnderwriterRiskRating(), debtOrder.getIssuanceCommitment().getSalt(), { from: debtOrder.getIssuanceCommitment().getUnderwriter() });
                }));
                it("should return ISSUANCE_CANCELLED error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 2 /* ISSUANCE_CANCELLED */);
                }));
            });
            describe("...when debt order has been cancelled", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield resetMocks();
                    debtOrder = yield orderFactory.generateDebtOrder();
                    yield kernel.cancelDebtOrder.sendTransactionAsync(debtOrder.getOrderAddresses(), debtOrder.getOrderValues(), debtOrder.getOrderBytes32(), { from: debtOrder.getDebtor() });
                }));
                it("should return ORDER_INVALID_CANCELLED error", () => __awaiter(this, void 0, void 0, function* () {
                    yield testShouldReturnError(debtOrder, 3 /* ORDER_INVALID_CANCELLED */);
                }));
            });
        });
        describe("User fills valid, nonconsensual debt order", () => {
            let order;
            let mismatchedOrder;
            const getMismatchedSignatures = (debtorsDebtOrder, creditorsDebtOrder, underwritersDebtOrder) => __awaiter(this, void 0, void 0, function* () {
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
            });
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield resetMocks();
                order = yield orderFactory.generateDebtOrder();
                yield mockDebtToken.mockCreateReturnValue.sendTransactionAsync(new bignumber_js_1.BigNumber(order.getIssuanceCommitment().getHash()));
                yield mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(order.getCreditor(), order.getPrincipalAmount().plus(order.getCreditorFee()));
                yield mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(order.getCreditor(), mockTokenTransferProxy.address, order.getPrincipalAmount().plus(order.getCreditorFee()));
            }));
            describe("...with mismatched issuance parameters", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        termsContract: MALICIOUS_TERMS_CONTRACTS,
                    });
                }));
                describe("creditor's signature commits to issuance parameters =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to issuance parameters =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("underwriter's signature commits to issuance parameters =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, order, mismatchedOrder);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched underwriter fee", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        underwriterFee: Units.ether(0.001),
                    });
                }));
                describe("creditor's signature commits to underwriter fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to underwriter fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("underwriter's signature commits to underwriter fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, order, mismatchedOrder);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched 0x exchange contract", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        zeroExExchangeContract: MALICIOUS_EXCHANGE_CONTRACT,
                    });
                }));
                describe("creditor's signature commits to 0x exchange contract =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to 0x exchange contract =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched underwriter", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        salt: order.getIssuanceCommitment().getSalt(),
                        underwriter: ATTACKER,
                    });
                }));
                describe("creditor's signature commits to underwriter =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to underwriter =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("underwriter's signature commits to underwriter =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, order, mismatchedOrder);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched principal amount", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        principalAmount: Units.ether(1.1),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to principal amount =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to principal amount =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("underwriter's signature commits to principal amount =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, order, mismatchedOrder);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched principal token", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        principalTokenAddress: NULL_ADDRESS,
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to principal token =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to principal token =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("underwriter's signature commits to principal token =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, order, mismatchedOrder);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched debtor fee", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        debtorFee: Units.ether(0.0004),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to debtor fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to debtor fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched creditor fee", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        creditorFee: Units.ether(0.0004),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to creditor fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to creditor fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched relayer", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        relayer: NULL_ADDRESS,
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to relayer =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to relayer =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched relayer fee", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        relayerFee: new bignumber_js_1.BigNumber(0),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to relayer fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to relayer fee =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
            describe("...with mismatched expiration", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    mismatchedOrder = yield orderFactory.generateDebtOrder({
                        expirationTimestampInSec: new bignumber_js_1.BigNumber(moment().add(2, "days").unix()),
                        salt: order.getIssuanceCommitment().getSalt(),
                    });
                }));
                describe("creditor's signature commits to expiration =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, mismatchedOrder, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("debtor's signature commits to expiration =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(mismatchedOrder, order, order);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
                describe("underwriter's signature commits to expiration =/= order's", () => __awaiter(this, void 0, void 0, function* () {
                    it("should return ORDER_INVALID_NON_CONSENSUAL error", () => __awaiter(this, void 0, void 0, function* () {
                        const [signaturesR, signaturesS, signaturesV] = yield getMismatchedSignatures(order, order, mismatchedOrder);
                        yield testShouldReturnError(order, 7 /* ORDER_INVALID_NON_CONSENSUAL */, signaturesR, signaturesS, signaturesV);
                    }));
                }));
            });
        });
    });
    describe("#cancelIssuance", () => {
        let order;
        describe("user who is neither debtor nor underwriter cancels order", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                order = yield orderFactory.generateDebtOrder();
            }));
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(kernel.cancelIssuance.sendTransactionAsync(order.getIssuanceCommitment().getVersion(), order.getIssuanceCommitment().getDebtor(), order.getIssuanceCommitment().getTermsContract(), order.getIssuanceCommitment().getTermsContractParameters(), order.getIssuanceCommitment().getUnderwriter(), order.getIssuanceCommitment().getUnderwriterRiskRating(), order.getIssuanceCommitment().getSalt(), { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("debtor cancels issuance", () => {
            let issuanceCancelledLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                order = yield orderFactory.generateDebtOrder();
                const txHash = yield kernel.cancelIssuance.sendTransactionAsync(order.getIssuanceCommitment().getVersion(), order.getIssuanceCommitment().getDebtor(), order.getIssuanceCommitment().getTermsContract(), order.getIssuanceCommitment().getTermsContractParameters(), order.getIssuanceCommitment().getUnderwriter(), order.getIssuanceCommitment().getUnderwriterRiskRating(), order.getIssuanceCommitment().getSalt(), { from: order.getIssuanceCommitment().getDebtor() });
                const receipt = yield web3.eth.getTransactionReceipt(txHash);
                [issuanceCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should emit issuance cancellation log", () => {
                expect(issuanceCancelledLog).to.deep.equal(debt_kernel_1.LogIssuanceCancelled(kernel.address, order.getIssuanceCommitment().getHash(), order.getIssuanceCommitment().getDebtor()));
            });
            it("should return issuance as cancelled", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(kernel.issuanceCancelled
                    .callAsync(order.getIssuanceCommitment().getHash()))
                    .to.eventually.be.true;
            }));
        });
        describe("underwriter cancels issuance", () => {
            let issuanceCancelledLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                order = yield orderFactory.generateDebtOrder();
                const txHash = yield kernel.cancelIssuance.sendTransactionAsync(order.getIssuanceCommitment().getVersion(), order.getIssuanceCommitment().getDebtor(), order.getIssuanceCommitment().getTermsContract(), order.getIssuanceCommitment().getTermsContractParameters(), order.getIssuanceCommitment().getUnderwriter(), order.getIssuanceCommitment().getUnderwriterRiskRating(), order.getIssuanceCommitment().getSalt(), { from: order.getIssuanceCommitment().getUnderwriter() });
                const receipt = yield web3.eth.getTransactionReceipt(txHash);
                [issuanceCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should emit issuance cancellation log", () => {
                expect(issuanceCancelledLog).to.deep.equal(debt_kernel_1.LogIssuanceCancelled(kernel.address, order.getIssuanceCommitment().getHash(), order.getIssuanceCommitment().getUnderwriter()));
            });
            it("should return issuance as cancelled", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(kernel.issuanceCancelled
                    .callAsync(order.getIssuanceCommitment().getHash()))
                    .to.eventually.be.true;
            }));
        });
    });
    describe("#cancelDebtOrder", () => {
        let order;
        describe("user who is not debtor cancels order", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                order = yield orderFactory.generateDebtOrder();
            }));
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(kernel.cancelDebtOrder.sendTransactionAsync(order.getOrderAddresses(), order.getOrderValues(), order.getOrderBytes32(), { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("debtor cancels debtor", () => {
            let debtOrderCancelledLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                order = yield orderFactory.generateDebtOrder();
                const txHash = yield kernel.cancelDebtOrder.sendTransactionAsync(order.getOrderAddresses(), order.getOrderValues(), order.getOrderBytes32(), { from: order.getIssuanceCommitment().getDebtor() });
                const receipt = yield web3.eth.getTransactionReceipt(txHash);
                [debtOrderCancelledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should emit debt order cancellation log", () => {
                expect(debtOrderCancelledLog).to.deep.equal(debt_kernel_1.LogDebtOrderCancelled(kernel.address, order.getDebtOrderHash(), order.getIssuanceCommitment().getDebtor()));
            });
            it("should return debt order as cancelled", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(kernel.debtOrderCancelled
                    .callAsync(order.getDebtOrderHash()))
                    .to.eventually.be.true;
            }));
        });
    });
}));
//# sourceMappingURL=debt_kernel.js.map