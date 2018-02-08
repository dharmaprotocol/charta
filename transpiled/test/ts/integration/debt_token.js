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
const bignumber_js_1 = require("bignumber.js");
const chai = require("chai");
const _ = require("lodash");
const Units = require("../test_utils/units");
const debt_registry_1 = require("../../../types/generated/debt_registry");
const debt_token_1 = require("../../../types/generated/debt_token");
const entry_1 = require("../../../types/registry/entry");
const debt_registry_2 = require("../logs/debt_registry");
const debt_token_2 = require("../logs/debt_token");
const bignumber_setup_1 = require("../test_utils/bignumber_setup");
const chai_setup_1 = require("../test_utils/chai_setup");
const constants_1 = require("../test_utils/constants");
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
const debtRegistryContract = artifacts.require("DebtRegistry");
const debtTokenContract = artifacts.require("DebtToken");
const repaymentRouterContract = artifacts.require("RepaymentRouter");
contract("Debt Token (Integration Tests)", (ACCOUNTS) => {
    let debtRegistry;
    let debtToken;
    let debtEntries;
    const NFT_NAME = "DebtToken";
    const NFT_SYMBOL = "DDT";
    const CONTRACT_OWNER = ACCOUNTS[0];
    const NON_CONTRACT_OWNER = ACCOUNTS[1];
    const AUTHORIZED_MINT_AGENT = ACCOUNTS[2];
    const UNAUTHORIZED_MINT_AGENT = ACCOUNTS[3];
    const TOKEN_OWNER_1 = ACCOUNTS[4];
    const TOKEN_OWNER_2 = ACCOUNTS[5];
    const TOKEN_OWNER_3 = ACCOUNTS[6];
    const TOKEN_OWNERS = [
        TOKEN_OWNER_1,
        TOKEN_OWNER_2,
        TOKEN_OWNER_3,
    ];
    const UNDERWRITER_1 = ACCOUNTS[7];
    const UNDERWRITER_2 = ACCOUNTS[8];
    const UNDERWRITER_3 = ACCOUNTS[9];
    const UNDERWRITERS = [
        UNDERWRITER_1,
        UNDERWRITER_2,
        UNDERWRITER_3,
    ];
    const BROKER = ACCOUNTS[10];
    const DEBTOR = ACCOUNTS[11];
    const INDEX_0 = new bignumber_js_1.BigNumber(0);
    const INDEX_1 = new bignumber_js_1.BigNumber(1);
    const INDEX_2 = new bignumber_js_1.BigNumber(2);
    const NONEXISTENT_TOKEN_ID = new bignumber_js_1.BigNumber(13);
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const ARBITRARY_TERMS_CONTRACT_PARAMS = [
        web3.sha3("#1: arbitrary terms contract param string"),
        web3.sha3("#2: arbitrary terms contract param string"),
        web3.sha3("#3: arbitrary terms contract param string"),
    ];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    const resetContracts = () => __awaiter(this, void 0, void 0, function* () {
        const debtRegistryTruffle = yield debtRegistryContract.new({ from: CONTRACT_OWNER });
        const debtTokenTruffle = yield debtTokenContract.new(debtRegistryTruffle.address, { from: CONTRACT_OWNER });
        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const debtRegistryWeb3Contract = web3.eth.contract(debtRegistryTruffle.abi).at(debtRegistryTruffle.address);
        const debtTokenWeb3Contract = web3.eth.contract(debtTokenTruffle.abi).at(debtTokenTruffle.address);
        debtRegistry = new debt_registry_1.DebtRegistryContract(debtRegistryWeb3Contract, TX_DEFAULTS);
        debtToken = new debt_token_1.DebtTokenContract(debtTokenWeb3Contract, TX_DEFAULTS);
        yield debtRegistry.addAuthorizedInsertAgent.sendTransactionAsync(debtToken.address, { from: CONTRACT_OWNER });
        yield debtRegistry.addAuthorizedEditAgent.sendTransactionAsync(debtToken.address, { from: CONTRACT_OWNER });
        const repaymentRouterContractInstance = yield repaymentRouterContract.deployed();
        debtEntries = _.map(TOKEN_OWNERS, (tokenOwner, i) => {
            return new entry_1.DebtRegistryEntry({
                beneficiary: tokenOwner,
                debtor: DEBTOR,
                termsContract: debtRegistry.address,
                termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS[i],
                underwriter: UNDERWRITERS[i],
                underwriterRiskRating: Units.percent(3.4),
                version: repaymentRouterContractInstance.address,
            });
        });
        // Initialize ABI Decoders for deciphering log receipts
        ABIDecoder.addABI(debtRegistryContract.abi);
        ABIDecoder.addABI(debtTokenContract.abi);
    });
    const initState = () => __awaiter(this, void 0, void 0, function* () {
        yield debtToken.addAuthorizedMintAgent.sendTransactionAsync(AUTHORIZED_MINT_AGENT, { from: CONTRACT_OWNER });
        const registryInsertPromises = _.map(debtEntries, (entry, i) => {
            return debtToken.create.sendTransactionAsync(entry.getVersion(), entry.getBeneficiary(), entry.getDebtor(), entry.getUnderwriter(), entry.getUnderwriterRiskRating(), entry.getTermsContract(), entry.getTermsContractParameters(), entry.getSalt(), { from: AUTHORIZED_MINT_AGENT });
        });
        yield Promise.all(registryInsertPromises);
    });
    const resetAndInitState = () => __awaiter(this, void 0, void 0, function* () {
        yield resetContracts();
        yield initState();
    });
    before(resetContracts);
    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtRegistryContract.abi);
        ABIDecoder.removeABI(debtTokenContract.abi);
    });
    describe("Permissions", () => {
        it("should initialize with no mint authorizations", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.getAuthorizedMintAgents.callAsync())
                .to.eventually.deep.equal([]);
        }));
        describe("non-owner adds mint authorization", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.addAuthorizedMintAgent
                    .sendTransactionAsync(UNAUTHORIZED_MINT_AGENT, { from: NON_CONTRACT_OWNER }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner adds mint authorization", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield debtToken.addAuthorizedMintAgent
                    .sendTransactionAsync(AUTHORIZED_MINT_AGENT, { from: CONTRACT_OWNER });
            }));
            it("should return agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.getAuthorizedMintAgents.callAsync())
                    .to.eventually.deep.equal([AUTHORIZED_MINT_AGENT]);
            }));
        });
    });
    describe("Minting", () => {
        describe("unauthorized agent tries to mint debt token", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.create.sendTransactionAsync(debtEntries[0].getVersion(), debtEntries[0].getBeneficiary(), debtEntries[0].getDebtor(), debtEntries[0].getUnderwriter(), debtEntries[0].getUnderwriterRiskRating(), debtEntries[0].getTermsContract(), debtEntries[0].getTermsContractParameters(), debtEntries[0].getSalt(), { from: UNAUTHORIZED_MINT_AGENT })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("authorized agent mints debt token", () => {
            describe("...when debt token is paused", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield debtToken.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                after(() => __awaiter(this, void 0, void 0, function* () {
                    yield debtToken.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.create.sendTransactionAsync(debtEntries[0].getVersion(), debtEntries[0].getBeneficiary(), debtEntries[0].getDebtor(), debtEntries[0].getUnderwriter(), debtEntries[0].getUnderwriterRiskRating(), debtEntries[0].getTermsContract(), debtEntries[0].getTermsContractParameters(), debtEntries[0].getSalt(), { from: AUTHORIZED_MINT_AGENT })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("...when debt token not paused", () => {
                let insertRegistryLog;
                let mintLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.create.sendTransactionAsync(debtEntries[0].getVersion(), debtEntries[0].getBeneficiary(), debtEntries[0].getDebtor(), debtEntries[0].getUnderwriter(), debtEntries[0].getUnderwriterRiskRating(), debtEntries[0].getTermsContract(), debtEntries[0].getTermsContractParameters(), debtEntries[0].getSalt(), { from: AUTHORIZED_MINT_AGENT });
                    const res = yield web3.eth.getTransactionReceipt(txHash);
                    [insertRegistryLog, mintLog] = ABIDecoder.decodeLogs(res.logs);
                }));
                it("should emit registry insert log event", () => {
                    const logExpected = debt_registry_2.LogInsertEntry(debtRegistry.address, debtEntries[0]);
                    expect(insertRegistryLog).to.deep.equal(logExpected);
                });
                it("should emit minting log event", () => {
                    const logExpected = debt_token_2.LogMint(debtToken.address, debtEntries[0].getBeneficiary(), debtEntries[0].getTokenId());
                    expect(mintLog).to.deep.equal(logExpected);
                });
                it("should increase total supply by 1", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.totalSupply.callAsync())
                        .to.eventually.bignumber.equal(1);
                }));
                it("should assign new token to creditor", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.bignumber.equal(debtEntries[0].getBeneficiary());
                }));
                it("should update owner's token list", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(debtEntries[0].getBeneficiary(), INDEX_0))
                        .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(debtEntries[0].getBeneficiary(), INDEX_1))
                        .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                }));
            });
        });
        describe("authorized agent mints second debt token to same creditor", () => {
            let res;
            let secondDebt;
            before(() => __awaiter(this, void 0, void 0, function* () {
                secondDebt = new entry_1.DebtRegistryEntry({
                    beneficiary: debtEntries[0].getBeneficiary(),
                    debtor: DEBTOR,
                    termsContract: debtEntries[1].getTermsContract(),
                    termsContractParameters: debtEntries[1].getTermsContractParameters(),
                    underwriter: debtEntries[1].getUnderwriter(),
                    underwriterRiskRating: debtEntries[1].getUnderwriterRiskRating(),
                    version: debtEntries[1].getVersion(),
                });
                const txHash = yield debtToken.create.sendTransactionAsync(secondDebt.getVersion(), secondDebt.getBeneficiary(), secondDebt.getDebtor(), secondDebt.getUnderwriter(), secondDebt.getUnderwriterRiskRating(), secondDebt.getTermsContract(), secondDebt.getTermsContractParameters(), secondDebt.getSalt(), { from: AUTHORIZED_MINT_AGENT });
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit minting log event", () => {
                const [insertRegistryLog, mintLog] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_token_2.LogMint(debtToken.address, secondDebt.getBeneficiary(), secondDebt.getTokenId());
                expect(mintLog).to.deep.equal(logExpected);
            });
            it("should increase total supply by 1", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.totalSupply.callAsync())
                    .to.eventually.bignumber.equal(2);
            }));
            it("should assign new token to creditor", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.ownerOf.callAsync(secondDebt.getTokenId()))
                    .to.eventually.bignumber.equal(secondDebt.getBeneficiary());
            }));
            it("should update owner's token list", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_1))
                    .to.eventually.bignumber.equal(secondDebt.getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex.callAsync(secondDebt.getBeneficiary(), INDEX_2))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
            }));
        });
        describe("authorized agent mints debt token that already exists", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.create.sendTransactionAsync(debtEntries[0].getVersion(), debtEntries[0].getBeneficiary(), debtEntries[0].getDebtor(), debtEntries[0].getUnderwriter(), debtEntries[0].getUnderwriterRiskRating(), debtEntries[0].getTermsContract(), debtEntries[0].getTermsContractParameters(), debtEntries[0].getSalt(), { from: AUTHORIZED_MINT_AGENT })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
    });
    describe("Flags", () => __awaiter(this, void 0, void 0, function* () {
        it("should expose implementsERC721 method", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.implementsERC721.callAsync()).to.eventually.equal(true);
        }));
    }));
    describe("General NFT Metadata", () => {
        it("should expose name variable", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.name.callAsync()).to.eventually.equal(NFT_NAME);
        }));
        it("should expose symbol variable", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.symbol.callAsync()).to.eventually.equal(NFT_SYMBOL);
        }));
    });
    describe("#totalSupply()", () => {
        before(resetAndInitState);
        it("should return 3 for total supply", () => __awaiter(this, void 0, void 0, function* () {
            const totalSupply = yield debtToken.totalSupply.callAsync();
            expect(totalSupply).to.bignumber.equal(3);
        }));
    });
    describe("#balanceOf()", () => {
        before(resetAndInitState);
        it("should return 1 for each owner's balance", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                .to.eventually.bignumber.equal(1);
            yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                .to.eventually.bignumber.equal(1);
            yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                .to.eventually.bignumber.equal(1);
        }));
    });
    describe("#tokenOfOwnerByIndex()", () => __awaiter(this, void 0, void 0, function* () {
        before(resetAndInitState);
        it("should return current token at index 0 for each user", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
                .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
            yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
                .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
            yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
                .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
        }));
        it("should throw if called at index > balanceOf.callAsync(owner)", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_1))
                .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
            yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1))
                .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
            yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1))
                .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
        }));
    }));
    describe("#transfer()", () => __awaiter(this, void 0, void 0, function* () {
        before(resetAndInitState);
        describe("user transfers token he doesn't own", () => __awaiter(this, void 0, void 0, function* () {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_1, debtEntries[1].getTokenId(), { from: TOKEN_OWNER_1 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        }));
        describe("user transfers token that doesn't exist", () => __awaiter(this, void 0, void 0, function* () {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_1, NONEXISTENT_TOKEN_ID, { from: TOKEN_OWNER_1 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        }));
        describe("user transfers token he owns", () => __awaiter(this, void 0, void 0, function* () {
            describe("...when debt token is paused", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield debtToken.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                after(() => __awaiter(this, void 0, void 0, function* () {
                    yield debtToken.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.transfer
                        .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("...when debt token not paused", () => {
                let modifyBeneficiaryLog;
                let transferLog;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.transfer
                        .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    const res = yield web3.eth.getTransactionReceipt(txHash);
                    [modifyBeneficiaryLog, , transferLog] = ABIDecoder.decodeLogs(res.logs);
                }));
                it("should emit registry modification log", () => __awaiter(this, void 0, void 0, function* () {
                    const logExpected = debt_registry_2.LogModifyEntryBeneficiary(debtRegistry.address, debtEntries[0].getIssuanceHash(), TOKEN_OWNER_1, TOKEN_OWNER_2);
                    expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
                }));
                it("should emit transfer log", () => __awaiter(this, void 0, void 0, function* () {
                    const logExpected = debt_token_2.LogTransfer(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_2, debtEntries[0].getTokenId());
                    expect(transferLog).to.deep.equal(logExpected);
                }));
                it("should belong to new owner", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_2);
                }));
                it("should update owners' token balances correctly", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                        .to.eventually.bignumber.equal(0);
                    yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                        .to.eventually.bignumber.equal(2);
                    yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                        .to.eventually.bignumber.equal(1);
                }));
                it("should update owners' iterable token lists", () => __awaiter(this, void 0, void 0, function* () {
                    // TOKEN_OWNER_1
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0)).to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                    // TOKEN_OWNER_2
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0)).to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1)).to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_2)).to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                    // TOKEN_OWNER_3
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0)).to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                    yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1)).to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                }));
            });
        }));
        describe("user transfers token he no longer owns", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 })).to.eventually.be
                    .rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user transfers token he owns to 0", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.transfer
                    .sendTransactionAsync(NULL_ADDRESS, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 })).to.eventually.be
                    .rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user transfers token he owns to himself", () => {
            let approvalLog;
            let transferLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                const txHash = yield debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 });
                const res = yield web3.eth.getTransactionReceipt(txHash);
                [approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
            }));
            it("should emit transfer log", () => __awaiter(this, void 0, void 0, function* () {
                const logExpected = debt_token_2.LogTransfer(debtToken.address, TOKEN_OWNER_2, TOKEN_OWNER_2, debtEntries[0].getTokenId());
                expect(transferLog).to.deep.equal(logExpected);
            }));
            it("should belong to same owner", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()))
                    .to.eventually.equal(TOKEN_OWNER_2);
            }));
            it("should maintain owners' token balances correctly", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                    .to.eventually.bignumber.equal(0);
                yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                    .to.eventually.bignumber.equal(2);
                yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                    .to.eventually.bignumber.equal(1);
            }));
            it("should not modify owners' iterable token lists", () => __awaiter(this, void 0, void 0, function* () {
                // TOKEN_OWNER_1
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_1, INDEX_0))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                // TOKEN_OWNER_2
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_1))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_2))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                // TOKEN_OWNER_3
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_3, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_3, INDEX_1))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
            }));
        });
        describe("user transfers token with outstanding approval", () => {
            let modifyBeneficiaryLog;
            let approvalLog;
            let transferLog;
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield debtToken.approve.sendTransactionAsync(TOKEN_OWNER_1, debtEntries[2].getTokenId(), { from: TOKEN_OWNER_3 });
                const txHash = yield debtToken.transfer
                    .sendTransactionAsync(TOKEN_OWNER_1, debtEntries[2].getTokenId(), { from: TOKEN_OWNER_3 });
                const res = yield web3.eth.getTransactionReceipt(txHash);
                [modifyBeneficiaryLog, approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
            }));
            it("should emit registry modification log", () => {
                const logExpected = debt_registry_2.LogModifyEntryBeneficiary(debtRegistry.address, debtEntries[2].getIssuanceHash(), TOKEN_OWNER_3, TOKEN_OWNER_1);
                expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
            });
            it("should emit approval clear log", () => {
                const logExpected = debt_token_2.LogApproval(debtToken.address, TOKEN_OWNER_3, NULL_ADDRESS, debtEntries[2].getTokenId());
                expect(approvalLog).to.deep.equal(logExpected);
            });
            it("should emit transfer log", () => {
                const logExpected = debt_token_2.LogTransfer(debtToken.address, TOKEN_OWNER_3, TOKEN_OWNER_1, debtEntries[2].getTokenId());
                expect(transferLog).to.deep.equal(logExpected);
            });
            it("should belong to new owner", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.ownerOf.callAsync(debtEntries[2].getTokenId()))
                    .to.eventually.equal(TOKEN_OWNER_1);
            }));
            it("should update owners' token balances correctly", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                    .to.eventually.bignumber.equal(1);
                yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                    .to.eventually.bignumber.equal(2);
                yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                    .to.eventually.bignumber.equal(0);
            }));
            it("should update owners' iterable token lists", () => __awaiter(this, void 0, void 0, function* () {
                // TOKEN_OWNER_1
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_1, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_1, INDEX_1))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                // TOKEN_OWNER_2
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_0))
                    .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_1))
                    .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_2, INDEX_2))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                // TOKEN_OWNER_3
                yield expect(debtToken.tokenOfOwnerByIndex
                    .callAsync(TOKEN_OWNER_3, INDEX_0))
                    .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
            }));
        });
    }));
    describe("#approve()", () => {
        before(resetAndInitState);
        describe("user approves transfer for token he doesn't own", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                expect(debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user approves transfer for nonexistent token", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                expect(debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2, NONEXISTENT_TOKEN_ID, { from: TOKEN_OWNER_2 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user approves himself for transferring token he owns", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                expect(debtToken.approve.sendTransactionAsync(TOKEN_OWNER_1, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user owns token", () => {
            describe("user clears unset approval", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.approve.sendTransactionAsync(NULL_ADDRESS, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should NOT emit approval event", () => __awaiter(this, void 0, void 0, function* () {
                    expect(res.logs.length).to.equal(0);
                }));
                it("should maintain cleared approval", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(NULL_ADDRESS);
                }));
            });
            describe("user sets new approval", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should return newly approved user as approved", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_2);
                }));
                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_token_2.LogApproval(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_2, debtEntries[0].getTokenId());
                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });
            describe("user changes token approval", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.approve.sendTransactionAsync(TOKEN_OWNER_3, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should return newly approved user as approved", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_3);
                }));
                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_token_2.LogApproval(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId());
                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });
            describe("user reaffirms approval", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.approve.sendTransactionAsync(TOKEN_OWNER_3, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should return same approved user as approved", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(TOKEN_OWNER_3);
                }));
                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_token_2.LogApproval(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId());
                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });
            describe("user clears set approval", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield debtToken.approve.sendTransactionAsync(NULL_ADDRESS, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should return newly approved user as approved", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.getApproved.callAsync(debtEntries[0].getTokenId()))
                        .to.eventually.equal(NULL_ADDRESS);
                }));
                it("should emit approval log", () => {
                    const [approvalLog] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_token_2.LogApproval(debtToken.address, TOKEN_OWNER_1, NULL_ADDRESS, debtEntries[0].getTokenId());
                    expect(approvalLog).to.deep.equal(logExpected);
                });
            });
        });
    });
    describe("#transferFrom()", () => {
        before(resetAndInitState);
        describe("user transfers token from owner w/o approval...", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_2, TOKEN_OWNER_3, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_3 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user transfers non-existent token", () => {
            it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_2, TOKEN_OWNER_3, NONEXISTENT_TOKEN_ID, { from: TOKEN_OWNER_3 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("user transfers token from owner w/ approval...", () => {
            before(() => __awaiter(this, void 0, void 0, function* () {
                yield debtToken.approve.sendTransactionAsync(TOKEN_OWNER_2, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_1 });
            }));
            describe("...from himself to himself", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_2, TOKEN_OWNER_2, debtEntries[1].getTokenId(), { from: TOKEN_OWNER_2 }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("...to null address", () => {
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_1, NULL_ADDRESS, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 }))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("...from other owner to himself", () => {
                describe("...when debt token is paused", () => {
                    before(() => __awaiter(this, void 0, void 0, function* () {
                        yield debtToken.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                    }));
                    after(() => __awaiter(this, void 0, void 0, function* () {
                        yield debtToken.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                    }));
                    it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                        yield expect(debtToken.transferFrom
                            .sendTransactionAsync(TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 }))
                            .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                    }));
                });
                describe("...when debt token not paused", () => {
                    let res;
                    let approvalLog;
                    let transferLog;
                    let modifyBeneficiaryLog;
                    before(() => __awaiter(this, void 0, void 0, function* () {
                        const txHash = yield debtToken.transferFrom.sendTransactionAsync(TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId(), { from: TOKEN_OWNER_2 });
                        res = yield web3.eth.getTransactionReceipt(txHash);
                        [modifyBeneficiaryLog, approvalLog, transferLog] = ABIDecoder.decodeLogs(res.logs);
                    }));
                    it("should emit registry modification log", () => __awaiter(this, void 0, void 0, function* () {
                        const logExpected = debt_registry_2.LogModifyEntryBeneficiary(debtRegistry.address, debtEntries[0].getIssuanceHash(), TOKEN_OWNER_1, TOKEN_OWNER_3);
                        expect(modifyBeneficiaryLog).to.deep.equal(logExpected);
                    }));
                    it("should emit approval clear log", () => {
                        const logExpected = debt_token_2.LogApproval(debtToken.address, TOKEN_OWNER_1, NULL_ADDRESS, debtEntries[0].getTokenId());
                        expect(approvalLog).to.deep.equal(logExpected);
                    });
                    it("should emit transfer log", () => {
                        const logExpected = debt_token_2.LogTransfer(debtToken.address, TOKEN_OWNER_1, TOKEN_OWNER_3, debtEntries[0].getTokenId());
                        expect(transferLog).to.deep.equal(logExpected);
                    });
                    it("should belong to new owner", () => __awaiter(this, void 0, void 0, function* () {
                        yield expect(debtToken.ownerOf.callAsync(debtEntries[0].getTokenId()))
                            .to.eventually.equal(TOKEN_OWNER_3);
                    }));
                    it("should update owners' token balances correctly", () => __awaiter(this, void 0, void 0, function* () {
                        yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_1))
                            .to.eventually.bignumber.equal(0);
                        yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_2))
                            .to.eventually.bignumber.equal(1);
                        yield expect(debtToken.balanceOf.callAsync(TOKEN_OWNER_3))
                            .to.eventually.bignumber.equal(2);
                    }));
                    it("should update owners' iterable token lists", () => __awaiter(this, void 0, void 0, function* () {
                        // TOKEN_OWNER_1
                        yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_1, INDEX_0))
                            .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                        // TOKEN_OWNER_2
                        yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_0))
                            .to.eventually.bignumber.equal(debtEntries[1].getTokenId());
                        yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_2, INDEX_1))
                            .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                        // TOKEN_OWNER_3
                        yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_0))
                            .to.eventually.bignumber.equal(debtEntries[2].getTokenId());
                        yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_1))
                            .to.eventually.bignumber.equal(debtEntries[0].getTokenId());
                        yield expect(debtToken.tokenOfOwnerByIndex.callAsync(TOKEN_OWNER_3, INDEX_2))
                            .to.eventually.be.rejectedWith(constants_1.INVALID_OPCODE);
                    }));
                });
            });
        });
    });
});
//# sourceMappingURL=debt_token.js.map