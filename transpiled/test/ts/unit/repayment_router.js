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
const ABIDecoder = require("abi-decoder");
const chai = require("chai");
const _ = require("lodash");
const Units = require("../test_utils/units");
const bignumber_js_1 = require("bignumber.js");
const repayment_router_1 = require("../../../types/generated/repayment_router");
const mock_debt_registry_1 = require("../../../types/generated/mock_debt_registry");
const mock_e_r_c20_token_1 = require("../../../types/generated/mock_e_r_c20_token");
const mock_e_r_c721_token_1 = require("../../../types/generated/mock_e_r_c721_token");
const mock_terms_contract_1 = require("../../../types/generated/mock_terms_contract");
const mock_token_transfer_proxy_1 = require("../../../types/generated/mock_token_transfer_proxy");
const bignumber_setup_1 = require("../test_utils/bignumber_setup");
const chai_setup_1 = require("../test_utils/chai_setup");
const constants_1 = require("../test_utils/constants");
const repayment_router_2 = require("../logs/repayment_router");
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
const repaymentRouterContract = artifacts.require("RepaymentRouter");
contract("Repayment Router (Unit Tests)", (ACCOUNTS) => __awaiter(this, void 0, void 0, function* () {
    let router;
    let mockToken;
    let mockNonFungibleToken;
    let mockRegistry;
    let mockTermsContract;
    let mockTokenTransferProxy;
    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY = ACCOUNTS[2];
    const TERMS_CONTRACT_PARAMETERS = web3.sha3("any 32 byte hex value can represent the terms contract's parameters");
    const ARBITRARY_AGREEMENT_ID = web3.sha3("any 32 byte hex value can represent an agreement id");
    const NON_FUNGIBLE_TOKEN_ID = new bignumber_js_1.BigNumber(13);
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    before(() => __awaiter(this, void 0, void 0, function* () {
        mockRegistry = yield mock_debt_registry_1.MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockToken = yield mock_e_r_c20_token_1.MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockNonFungibleToken = yield mock_e_r_c721_token_1.MockERC721TokenContract.deployed(web3, TX_DEFAULTS);
        mockTermsContract = yield mock_terms_contract_1.MockTermsContractContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = yield mock_token_transfer_proxy_1.MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        const repaymentRouterTruffle = yield repaymentRouterContract.new(mockRegistry.address, mockTokenTransferProxy.address);
        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract = web3.eth.contract(repaymentRouterTruffle.abi).at(repaymentRouterTruffle.address);
        router = new repayment_router_1.RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);
        ABIDecoder.addABI(router.abi);
    }));
    after(() => {
        ABIDecoder.removeABI(router.abi);
    });
    describe("#repay", () => {
        describe("called for nonexistent debt agreement", () => {
            let errorLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NULL_ADDRESS);
                const txHash = yield router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, Units.ether(1), mockToken.address);
                const receipt = yield web3.eth.getTransactionReceipt(txHash);
                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 0 /* DEBT_AGREEMENT_NONEXISTENT */, ARBITRARY_AGREEMENT_ID));
            });
            it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(mockToken.wasTransferFromCalledWith.callAsync(NULL_ADDRESS, NULL_ADDRESS, Units.ether(1))).to.eventually.be.false;
            }));
            it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, NULL_ADDRESS, NULL_ADDRESS, Units.ether(1), mockToken.address)).to.eventually.be.false;
            }));
        });
        describe("called for issued debt agreement", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, BENEFICIARY);
                yield mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, mockTermsContract.address, TERMS_CONTRACT_PARAMETERS);
                yield mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, mockTermsContract.address);
            }));
            describe("...with insufficient balance for payment", () => {
                let errorLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1).minus(1));
                    yield mockToken.mockAllowanceFor.sendTransactionAsync(PAYER, router.address, Units.ether(1));
                    const txHash = yield router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, Units.ether(1), mockToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 1 /* PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT */, ARBITRARY_AGREEMENT_ID));
                });
                it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockToken.address, PAYER, BENEFICIARY, Units.ether(1))).to.eventually.be.false;
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, Units.ether(1), mockToken.address)).to.eventually.be.false;
                }));
            });
            describe("...with insufficient allowance for payment", () => {
                let errorLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1));
                    yield mockToken.mockAllowanceFor.sendTransactionAsync(PAYER, mockTokenTransferProxy.address, Units.ether(1).minus(1));
                    const txHash = yield router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, Units.ether(1), mockToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 1 /* PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT */, ARBITRARY_AGREEMENT_ID));
                });
                it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockToken.address, PAYER, BENEFICIARY, Units.ether(1))).to.eventually.be.false;
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, Units.ether(1), mockToken.address)).to.eventually.be.false;
                }));
            });
            describe("...with terms contract that does not register reports from router", () => {
                let errorLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1));
                    yield mockToken.mockAllowanceFor.sendTransactionAsync(PAYER, mockTokenTransferProxy.address, Units.ether(1));
                    yield mockTermsContract.mockRegisterRepaymentReturnValue.sendTransactionAsync(false);
                    const txHash = yield router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, Units.ether(1), mockToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 3 /* ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT */, ARBITRARY_AGREEMENT_ID));
                });
                it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockToken.address, PAYER, BENEFICIARY, Units.ether(1))).to.eventually.be.false;
                }));
            });
            describe("...with sufficient balance and allowance for payment", () => {
                let repaymentLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockToken.mockBalanceOfFor.sendTransactionAsync(PAYER, Units.ether(1));
                    yield mockToken.mockAllowanceFor.sendTransactionAsync(PAYER, mockTokenTransferProxy.address, Units.ether(1));
                    yield mockTermsContract.mockRegisterRepaymentReturnValue.sendTransactionAsync(true);
                    const txHash = yield router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, Units.ether(1), mockToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should transfer tokens of specified amount from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockToken.address, PAYER, BENEFICIARY, Units.ether(1))).to.eventually.be.true;
                }));
                it("should register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTermsContract.wasRegisterRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, Units.ether(1), mockToken.address)).to.eventually.be.true;
                }));
                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(repayment_router_2.LogRepayment(router.address, ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, Units.ether(1), mockToken.address));
                });
            });
        });
        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, Units.ether(1), NULL_ADDRESS, { from: PAYER }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("called with zero token amount", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repay.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, new bignumber_js_1.BigNumber(0), mockToken.address, { from: PAYER }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
        });
    });
    describe("#repayNFT", () => {
        describe("called for nonexistent debt agreement", () => {
            let errorLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NULL_ADDRESS);
                const txHash = yield router.repayNFT.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address);
                const receipt = yield web3.eth.getTransactionReceipt(txHash);
                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 0 /* DEBT_AGREEMENT_NONEXISTENT */, ARBITRARY_AGREEMENT_ID));
            });
            it("should not transfer token from payer", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockNonFungibleToken.address, NULL_ADDRESS, NULL_ADDRESS, NON_FUNGIBLE_TOKEN_ID)).to.eventually.be.false;
            }));
            it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(mockTermsContract.wasRegisterNFTRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, NULL_ADDRESS, NULL_ADDRESS, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address)).to.eventually.be.false;
            }));
        });
        describe("called for issued debt agreement", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield mockRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, BENEFICIARY);
                yield mockRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, mockTermsContract.address, TERMS_CONTRACT_PARAMETERS);
                yield mockRegistry.mockGetTermsContractReturnValueFor.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, mockTermsContract.address);
            }));
            describe("...with token that payer doesn't own", () => {
                let errorLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockNonFungibleToken.mockOwnerOfFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, NULL_ADDRESS);
                    const txHash = yield router.repayNFT.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 2 /* PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING */, ARBITRARY_AGREEMENT_ID));
                });
                it("should not transfer token from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockNonFungibleToken.address, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID)).to.eventually.be.false;
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTermsContract.wasRegisterNFTRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address)).to.eventually.be.false;
                }));
            });
            describe("...with token that router has not been approved to transfer", () => {
                let errorLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockNonFungibleToken.mockOwnerOfFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, PAYER);
                    yield mockNonFungibleToken.mockGetApprovedFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, NULL_ADDRESS);
                    const txHash = yield router.repayNFT.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 2 /* PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING */, ARBITRARY_AGREEMENT_ID));
                });
                it("should not transfer token from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockNonFungibleToken.address, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID)).to.eventually.be.false;
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTermsContract.wasRegisterNFTRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address)).to.eventually.be.false;
                }));
            });
            describe("...with terms contract that does not register reports from router", () => {
                let errorLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockNonFungibleToken.mockOwnerOfFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, PAYER);
                    yield mockNonFungibleToken.mockGetApprovedFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, mockTokenTransferProxy.address);
                    yield mockTermsContract.mockRegisterNFTRepaymentReturnValue.sendTransactionAsync(false);
                    const txHash = yield router.repayNFT.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 3 /* ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT */, ARBITRARY_AGREEMENT_ID));
                });
                it("should not transfer token from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockNonFungibleToken.address, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID)).to.eventually.be.false;
                }));
            });
            describe("...with token that payer owns and has approved router to transfer", () => {
                let repaymentLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield mockNonFungibleToken.mockOwnerOfFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, PAYER);
                    yield mockNonFungibleToken.mockGetApprovedFor.sendTransactionAsync(NON_FUNGIBLE_TOKEN_ID, mockTokenTransferProxy.address);
                    yield mockTermsContract.mockRegisterNFTRepaymentReturnValue.sendTransactionAsync(true);
                    const txHash = yield router.repayNFT.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address, { from: PAYER });
                    const receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should transfer token from payer to beneficiary", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(mockNonFungibleToken.address, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID)).to.eventually.be.true;
                }));
                it("should register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(mockTermsContract.wasRegisterNFTRepaymentCalledWith.callAsync(ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address)).to.eventually.be.true;
                }));
                it("should emit repayment log", () => __awaiter(this, void 0, void 0, function* () {
                    expect(repaymentLog).to.deep.equal(repayment_router_2.LogNFTRepayment(router.address, ARBITRARY_AGREEMENT_ID, PAYER, BENEFICIARY, NON_FUNGIBLE_TOKEN_ID, mockNonFungibleToken.address));
                }));
            });
        });
        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repayNFT.sendTransactionAsync(ARBITRARY_AGREEMENT_ID, NON_FUNGIBLE_TOKEN_ID, NULL_ADDRESS))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
        });
    });
}));
//# sourceMappingURL=repayment_router.js.map