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
const moment = require("moment");
const Units = require("../test_utils/units");
const bignumber_js_1 = require("bignumber.js");
const debt_kernel_1 = require("../../../types/generated/debt_kernel");
const debt_registry_1 = require("../../../types/generated/debt_registry");
const debt_token_1 = require("../../../types/generated/debt_token");
const dummy_token_1 = require("../../../types/generated/dummy_token");
const token_registry_1 = require("../../../types/generated/token_registry");
const mintable_non_fungible_token_1 = require("../../../types/generated/mintable_non_fungible_token");
const n_f_t_terms_contract_1 = require("../../../types/generated/n_f_t_terms_contract");
const repayment_router_1 = require("../../../types/generated/repayment_router");
const simple_interest_terms_contract_1 = require("../../../types/generated/simple_interest_terms_contract");
const token_transfer_proxy_1 = require("../../../types/generated/token_transfer_proxy");
const debt_order_factory_1 = require("../factories/debt_order_factory");
const bignumber_setup_1 = require("../test_utils/bignumber_setup");
const chai_setup_1 = require("../test_utils/chai_setup");
const constants_1 = require("../test_utils/constants");
const repayment_router_2 = require("../logs/repayment_router");
const leftPad = require("left-pad");
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
const simpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
const nftTermsContract = artifacts.require("NFTTermsContract");
const repaymentRouterContract = artifacts.require("RepaymentRouter");
contract("Repayment Router (Integration Tests)", (ACCOUNTS) => __awaiter(this, void 0, void 0, function* () {
    let router;
    let kernel;
    let debtToken;
    let principalToken;
    let principalNFT;
    let termsContract;
    let termsContractNFT;
    let tokenTransferProxy;
    let orderFactory;
    let order;
    let agreementId;
    const CONTRACT_OWNER = ACCOUNTS[0];
    const PAYER = ACCOUNTS[1];
    const BENEFICIARY_1 = ACCOUNTS[2];
    const BENEFICIARY_2 = ACCOUNTS[3];
    const DEBTOR = ACCOUNTS[4];
    const UNDERWRITER = ACCOUNTS[5];
    const RELAYER = ACCOUNTS[6];
    const EXAMPLE_NFT_ID = new bignumber_js_1.BigNumber(13);
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    before(() => __awaiter(this, void 0, void 0, function* () {
        const dummyTokenRegistryContract = yield token_registry_1.TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const dummyREPTokenAddress = yield dummyTokenRegistryContract.getTokenAddress.callAsync("REP");
        principalToken = yield dummy_token_1.DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);
        principalNFT = yield mintable_non_fungible_token_1.MintableNonFungibleTokenContract.deployed(web3, TX_DEFAULTS);
        kernel = yield debt_kernel_1.DebtKernelContract.deployed(web3, TX_DEFAULTS);
        debtToken = yield debt_token_1.DebtTokenContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = yield token_transfer_proxy_1.TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        yield principalToken.setBalance.sendTransactionAsync(BENEFICIARY_1, Units.ether(100));
        yield principalToken.setBalance.sendTransactionAsync(BENEFICIARY_2, Units.ether(100));
        yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(100), { from: BENEFICIARY_1 });
        yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(100), { from: BENEFICIARY_2 });
        const debtRegistry = yield debt_registry_1.DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        const repaymentRouterTruffle = yield repaymentRouterContract.new(debtRegistry.address, tokenTransferProxy.address);
        const termsContractTruffle = yield simpleInterestTermsContract.new(debtRegistry.address, principalToken.address, repaymentRouterTruffle.address);
        const termsContractNftTruffle = yield nftTermsContract.new(debtRegistry.address, principalNFT.address, repaymentRouterTruffle.address);
        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const repaymentRouterWeb3Contract = web3.eth.contract(repaymentRouterTruffle.abi).at(repaymentRouterTruffle.address);
        const termsContractWeb3Contract = web3.eth.contract(simpleInterestTermsContract.abi).at(termsContractTruffle.address);
        const termsContractNftWeb3Contract = web3.eth.contract(nftTermsContract.abi).at(termsContractNftTruffle.address);
        router = new repayment_router_1.RepaymentRouterContract(repaymentRouterWeb3Contract, TX_DEFAULTS);
        termsContract = new simple_interest_terms_contract_1.SimpleInterestTermsContractContract(termsContractWeb3Contract, TX_DEFAULTS);
        termsContractNFT = new n_f_t_terms_contract_1.NFTTermsContractContract(termsContractNftWeb3Contract, TX_DEFAULTS);
        yield tokenTransferProxy.addAuthorizedTransferAgent.sendTransactionAsync(router.address);
        const termLengthInBlocks = 43200;
        const principalPlusInterest = Units.ether(1.1);
        const uint16PrincipalPlusInterest = leftPad(web3.toHex(principalPlusInterest).substr(2), 32, "0");
        const uint16TermLength = leftPad(web3.toHex(termLengthInBlocks).substr(2), 32, "0");
        const termsContractParameters = "0x" + uint16PrincipalPlusInterest + uint16TermLength;
        const defaultOrderParams = {
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtToken.address,
            debtor: DEBTOR,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new bignumber_js_1.BigNumber(moment().add(1, "days").unix()),
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
            underwriterRiskRating: Units.percent(1.35),
        };
        orderFactory = new debt_order_factory_1.DebtOrderFactory(defaultOrderParams);
        order = yield orderFactory.generateDebtOrder();
        agreementId = order.getIssuanceCommitment().getHash();
        ABIDecoder.addABI(router.abi);
    }));
    after(() => {
        ABIDecoder.removeABI(router.abi);
    });
    describe("#repay", () => {
        let receipt;
        let errorLog;
        let payerBalanceBefore;
        let beneficiaryBalanceBefore;
        describe("called for nonexistent debt agreement", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                payerBalanceBefore = yield principalToken.balanceOf.callAsync(PAYER);
                beneficiaryBalanceBefore = yield principalToken.balanceOf.callAsync(BENEFICIARY_1);
                const txHash = yield router.repay.sendTransactionAsync(agreementId, Units.ether(1.1), principalToken.address);
                receipt = yield web3.eth.getTransactionReceipt(txHash);
                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 0 /* DEBT_AGREEMENT_NONEXISTENT */, agreementId));
            });
            it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(principalToken.balanceOf.callAsync(PAYER))
                    .to.eventually.bignumber.equal(payerBalanceBefore);
                yield expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                    .to.eventually.bignumber.equal(beneficiaryBalanceBefore);
            }));
            it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(termsContract.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber))).to.eventually.bignumber.equal(0);
            }));
        });
        describe("called for issued debt agreement", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield kernel.fillDebtOrder.sendTransactionAsync(BENEFICIARY_1, order.getOrderAddresses(), order.getOrderValues(), order.getOrderBytes32(), order.getSignaturesV(), order.getSignaturesR(), order.getSignaturesS());
            }));
            describe("...when repayment router is paused", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield router.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                after(() => __awaiter(this, void 0, void 0, function* () {
                    yield router.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repay.sendTransactionAsync(agreementId, Units.ether(1.1), principalToken.address, { from: PAYER }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("...with insufficient balance for payment", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    payerBalanceBefore = yield principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = yield principalToken.balanceOf.callAsync(BENEFICIARY_1);
                    const txHash = yield router.repay.sendTransactionAsync(agreementId, Units.ether(1.1), principalToken.address, { from: PAYER });
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 1 /* PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT */, agreementId));
                });
                it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(PAYER))
                        .to.eventually.bignumber.equal(payerBalanceBefore);
                    yield expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                        .to.eventually.bignumber.equal(beneficiaryBalanceBefore);
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(termsContract.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber))).to.eventually.bignumber.equal(0);
                }));
            });
            describe("...with insufficient allowance for payment", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield principalToken.setBalance.sendTransactionAsync(PAYER, Units.ether(1.1), { from: CONTRACT_OWNER });
                    yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(1), { from: PAYER });
                    payerBalanceBefore = yield principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = yield principalToken.balanceOf.callAsync(BENEFICIARY_1);
                    const txHash = yield router.repay.sendTransactionAsync(agreementId, Units.ether(1.1), principalToken.address, { from: PAYER });
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 1 /* PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT */, agreementId));
                });
                it("should not transfer tokens from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(PAYER))
                        .to.eventually.bignumber.equal(payerBalanceBefore);
                    yield expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                        .to.eventually.bignumber.equal(beneficiaryBalanceBefore);
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(termsContract.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber))).to.eventually.bignumber.equal(0);
                }));
            });
            describe("...with sufficient balance and allowance for payment", () => {
                let repaymentLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield principalToken.setBalance.sendTransactionAsync(PAYER, Units.ether(1.1), { from: CONTRACT_OWNER });
                    yield principalToken.approve.sendTransactionAsync(tokenTransferProxy.address, Units.ether(1.1), { from: PAYER });
                    payerBalanceBefore = yield principalToken.balanceOf.callAsync(PAYER);
                    beneficiaryBalanceBefore = yield principalToken.balanceOf.callAsync(BENEFICIARY_1);
                    const txHash = yield router.repay.sendTransactionAsync(agreementId, Units.ether(1.1), principalToken.address, { from: PAYER });
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should transfer tokens of specified amount from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalToken.balanceOf.callAsync(PAYER))
                        .to.eventually.bignumber.equal(payerBalanceBefore.minus(Units.ether(1.1)));
                    yield expect(principalToken.balanceOf.callAsync(BENEFICIARY_1))
                        .to.eventually.bignumber.equal(beneficiaryBalanceBefore.plus(Units.ether(1.1)));
                }));
                it("should register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(termsContract.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber)))
                        .to.eventually.bignumber.equal(Units.ether(1.1));
                }));
                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(repayment_router_2.LogRepayment(router.address, agreementId, PAYER, BENEFICIARY_1, Units.ether(1.1), principalToken.address));
                });
            });
        });
        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repay.sendTransactionAsync(agreementId, Units.ether(1), NULL_ADDRESS, { from: PAYER }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("called with zero token amount", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repay.sendTransactionAsync(agreementId, new bignumber_js_1.BigNumber(0), principalToken.address, { from: PAYER }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
        });
    });
    describe("#repayNFT", () => {
        let nftOwnershipBefore;
        let receipt;
        let errorLog;
        let repaymentLog;
        before(() => __awaiter(this, void 0, void 0, function* () {
            // reset debt order to one that points to NFT terms contract
            order = yield orderFactory.generateDebtOrder({
                termsContract: termsContractNFT.address,
                termsContractParameters: "0x" + leftPad(web3.toHex(EXAMPLE_NFT_ID).substr(2), 64, "0"),
            });
            agreementId = order.getIssuanceCommitment().getHash();
            yield principalNFT.mint.sendTransactionAsync(CONTRACT_OWNER, EXAMPLE_NFT_ID);
        }));
        describe("called for nonexistent debt agreement", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                nftOwnershipBefore = yield principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID);
                const txHash = yield router.repayNFT.sendTransactionAsync(agreementId, EXAMPLE_NFT_ID, principalNFT.address);
                receipt = yield web3.eth.getTransactionReceipt(txHash);
                [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
            }));
            it("should return DEBT_AGREEMENT_NONEXISTENT error", () => {
                expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 0 /* DEBT_AGREEMENT_NONEXISTENT */, agreementId));
            });
            it("should not transfer token from owner", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                    .to.eventually.equal(CONTRACT_OWNER);
            }));
            it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(termsContractNFT.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber))).to.eventually.bignumber.equal(0);
            }));
        });
        describe("called for issued debt agreement", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield kernel.fillDebtOrder.sendTransactionAsync(BENEFICIARY_1, order.getOrderAddresses(), order.getOrderValues(), order.getOrderBytes32(), order.getSignaturesV(), order.getSignaturesR(), order.getSignaturesS());
                yield debtToken.transfer.sendTransactionAsync(BENEFICIARY_2, new bignumber_js_1.BigNumber(agreementId), { from: BENEFICIARY_1 });
            }));
            describe("...when repayment router is paused", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield router.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                after(() => __awaiter(this, void 0, void 0, function* () {
                    yield router.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repayNFT.sendTransactionAsync(agreementId, EXAMPLE_NFT_ID, principalNFT.address, { from: PAYER }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("...with token that payer doesn't own", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    nftOwnershipBefore = yield principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID);
                    const txHash = yield router.repayNFT.sendTransactionAsync(agreementId, EXAMPLE_NFT_ID, principalNFT.address, { from: PAYER });
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 2 /* PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING */, agreementId));
                });
                it("should not transfer token from owner", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                        .to.eventually.equal(CONTRACT_OWNER);
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(termsContractNFT.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber))).to.eventually.bignumber.equal(0);
                }));
            });
            describe("...with token that router has not been approved to transfer", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield principalNFT.transfer.sendTransactionAsync(PAYER, EXAMPLE_NFT_ID, { from: CONTRACT_OWNER });
                    const txHash = yield router.repayNFT.sendTransactionAsync(agreementId, EXAMPLE_NFT_ID, principalNFT.address, { from: PAYER });
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should return PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING error", () => {
                    expect(errorLog).to.deep.equal(repayment_router_2.LogError(router.address, 2 /* PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING */, agreementId));
                });
                it("should not transfer token from owner", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                        .to.eventually.equal(PAYER);
                }));
                it("should not register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(termsContractNFT.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber))).to.eventually.bignumber.equal(0);
                }));
            });
            describe("...with token that payer owns and has approved router to transfer", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield principalNFT.approve.sendTransactionAsync(tokenTransferProxy.address, EXAMPLE_NFT_ID, { from: PAYER });
                    const txHash = yield router.repayNFT.sendTransactionAsync(agreementId, EXAMPLE_NFT_ID, principalNFT.address, { from: PAYER });
                    receipt = yield web3.eth.getTransactionReceipt(txHash);
                    [repaymentLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                }));
                it("should transfer tokens of specified amount from payer", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(principalNFT.ownerOf.callAsync(EXAMPLE_NFT_ID))
                        .to.eventually.equal(BENEFICIARY_2);
                }));
                it("should register repayment with terms contract", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(termsContractNFT.getValueRepaid.callAsync(agreementId, new bignumber_js_1.BigNumber(receipt.blockNumber)))
                        .to.eventually.bignumber.equal(1);
                }));
                it("should emit repayment log", () => {
                    expect(repaymentLog).to.deep.equal(repayment_router_2.LogNFTRepayment(router.address, agreementId, PAYER, BENEFICIARY_2, EXAMPLE_NFT_ID, principalNFT.address));
                });
            });
        });
        describe("Global Invariants", () => {
            describe("called with null token address", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(router.repayNFT.sendTransactionAsync(agreementId, EXAMPLE_NFT_ID, NULL_ADDRESS))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
        });
    });
}));
//# sourceMappingURL=repayment_router.js.map