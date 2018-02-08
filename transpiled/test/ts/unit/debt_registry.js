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
const utils = require("../test_utils/utils");
const debt_registry_1 = require("../../../types/generated/debt_registry");
const entry_1 = require("../../../types/registry/entry");
const debt_registry_2 = require("../logs/debt_registry");
const bignumber_setup_1 = require("../test_utils/bignumber_setup");
const chai_setup_1 = require("../test_utils/chai_setup");
const constants_1 = require("../test_utils/constants");
// Set up Chai
chai_setup_1.default.configure();
const expect = chai.expect;
// Configure BigNumber exponentiation
bignumber_setup_1.BigNumberSetup.configure();
const repaymentRouterContract = artifacts.require("RepaymentRouter");
const debtRegistryContract = artifacts.require("DebtRegistry");
const termsContract = artifacts.require("SimpleInterestTermsContract");
contract("Debt Registry (Unit Tests)", (ACCOUNTS) => __awaiter(this, void 0, void 0, function* () {
    const CONTRACT_OWNER = ACCOUNTS[0];
    // We choose arbitrary addresses to represent data fields in the registry
    // entries.
    const BENEFICIARY_1 = ACCOUNTS[1];
    const BENEFICIARY_2 = ACCOUNTS[2];
    const DEBTOR = ACCOUNTS[3];
    const UNDERWRITER = ACCOUNTS[4];
    const TERMS_CONTRACT_ADDRESS = ACCOUNTS[5];
    // We choose arbitrary addresses to represent the various contracts
    // that have / lack permission to make changes to the registry.
    const AGENT_1 = ACCOUNTS[6];
    const AGENT_2 = ACCOUNTS[7];
    const AGENT_3 = ACCOUNTS[8];
    const AGENT_4 = ACCOUNTS[9];
    const ATTACKER = ACCOUNTS[10];
    const NEW_CONTRACT_OWNER = ACCOUNTS[11];
    let registry;
    // We define utility funcitons for the primary state-changing
    // operations permitted on the registry.
    let generateEntryFn;
    let insertEntryFn;
    let modifyEntryBeneficiaryFn;
    const ARBITRARY_TERMS_CONTRACT_PARAMS = web3.sha3("arbitrary terms contract param string");
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    before(() => __awaiter(this, void 0, void 0, function* () {
        const registryTruffleContract = yield debtRegistryContract.deployed();
        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const registryWeb3Contract = web3.eth
            .contract(debtRegistryContract.abi).at(registryTruffleContract.address);
        registry = new debt_registry_1.DebtRegistryContract(registryWeb3Contract, TX_DEFAULTS);
        // The version of an entry is mapped to the address of
        // the current RepaymentRouter used in the debt agreement
        const repaymentRouter = yield repaymentRouterContract.deployed();
        const VERSION = repaymentRouter.address;
        // DebtRegistryEntries are given a random salt on construction --
        // we use the following function to generate arbitrary
        // DebtRegistryEntries without hash collisions.
        generateEntryFn = () => {
            return new entry_1.DebtRegistryEntry({
                beneficiary: BENEFICIARY_1,
                debtor: DEBTOR,
                termsContract: TERMS_CONTRACT_ADDRESS,
                termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS,
                underwriter: UNDERWRITER,
                underwriterRiskRating: Units.percent(5),
                version: VERSION,
            });
        };
        insertEntryFn = (entry, options) => __awaiter(this, void 0, void 0, function* () {
            return registry.insert.sendTransactionAsync(entry.getVersion(), entry.getBeneficiary(), entry.getDebtor(), entry.getUnderwriter(), entry.getUnderwriterRiskRating(), entry.getTermsContract(), entry.getTermsContractParameters(), entry.getSalt(), options);
        });
        modifyEntryBeneficiaryFn = (entry, newBeneficiary, options) => __awaiter(this, void 0, void 0, function* () {
            return registry.modifyBeneficiary.sendTransactionAsync(entry.getIssuanceHash(), newBeneficiary, options);
        });
        // Initialize ABI Decoder for deciphering log receipts
        ABIDecoder.addABI(debtRegistryContract.abi);
    }));
    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtRegistryContract.abi);
    });
    describe("before owner authorizes agents for editing registry", () => {
        it("should throw if any user tries to insert entry", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(insertEntryFn(generateEntryFn()))
                .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
        }));
        it("should throw if any user tries to edit entry", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(modifyEntryBeneficiaryFn(generateEntryFn(), AGENT_1))
                .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
        }));
    });
    describe("owner authorizes agent(s) for inserting entries", () => {
        describe("first agent", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                const txHash = yield registry.addAuthorizedInsertAgent
                    .sendTransactionAsync(AGENT_1);
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit log saying first agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_registry_2.LogAddAuthorizedInsertAgent(registry.address, AGENT_1);
                expect(logReturned).to.deep.equal(logExpected);
            }));
            it("should return first agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedInsertAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_1]);
            }));
        });
        describe("second agent", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                const txHash = yield registry.addAuthorizedInsertAgent
                    .sendTransactionAsync(AGENT_2);
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit log saying second agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_registry_2.LogAddAuthorizedInsertAgent(registry.address, AGENT_2);
                expect(logReturned).to.deep.equal(logExpected);
            }));
            it("should return both first and second agents authorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedInsertAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_1, AGENT_2]);
            }));
        });
        it("should throw when unauthorized attacker inserts entry", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(insertEntryFn(generateEntryFn(), { from: AGENT_3 }))
                .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
        }));
        describe("first agent inserts new entry into registry", () => {
            let res;
            let entry;
            before(() => __awaiter(this, void 0, void 0, function* () {
                entry = generateEntryFn();
                const txHash = yield insertEntryFn(entry, { from: AGENT_1 });
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit a log saying the debt is inserted", () => __awaiter(this, void 0, void 0, function* () {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_registry_2.LogInsertEntry(registry.address, entry);
                expect(logReturned).to.deep.equal(logExpected);
            }));
            it("should make entry retrievable by its hash", () => __awaiter(this, void 0, void 0, function* () {
                const retrievedEntry = yield registry.get.callAsync(entry.getIssuanceHash());
                const expectedEntry = [
                    entry.getVersion(),
                    entry.getBeneficiary(),
                    entry.getUnderwriter(),
                    entry.getUnderwriterRiskRating(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                    res.blockNumber,
                ];
                _.forEach(retrievedEntry, (value, i) => {
                    if (utils.isBigNumber(value)) {
                        expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                    }
                    else {
                        expect(value).to.equal(expectedEntry[i]);
                    }
                });
            }));
            it("should throw when first agent tries editing entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(modifyEntryBeneficiaryFn(entry, AGENT_1, { from: AGENT_1 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("second agent inserts new entry into registry", () => {
            let res;
            let entry;
            before(() => __awaiter(this, void 0, void 0, function* () {
                entry = generateEntryFn();
                const txHash = yield insertEntryFn(entry, { from: AGENT_2 });
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit a log saying the debt is inserted", () => __awaiter(this, void 0, void 0, function* () {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_registry_2.LogInsertEntry(registry.address, entry);
                expect(logReturned).to.deep.equal(logExpected);
            }));
            it("should make entry retrievable by its hash", () => __awaiter(this, void 0, void 0, function* () {
                const retrievedEntry = yield registry.get.callAsync(entry.getIssuanceHash());
                const expectedEntry = [
                    entry.getVersion(),
                    entry.getBeneficiary(),
                    entry.getUnderwriter(),
                    entry.getUnderwriterRiskRating(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                    res.blockNumber,
                ];
                _.forEach(retrievedEntry, (value, i) => {
                    if (utils.isBigNumber(value)) {
                        expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                    }
                    else {
                        expect(value).to.equal(expectedEntry[i]);
                    }
                });
            }));
            it("should throw when second agent tries editing entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(modifyEntryBeneficiaryFn(entry, AGENT_2, { from: AGENT_2 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner authorizes agent(s) for editing entries", () => {
            describe("third agent", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield registry.addAuthorizedEditAgent.sendTransactionAsync(AGENT_3);
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should emit log saying third agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_registry_2.LogAddAuthorizedEditAgent(registry.address, AGENT_3);
                    expect(logReturned).to.deep.equal(logExpected);
                }));
                it("should return first agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.getAuthorizedEditAgents.callAsync())
                        .to.eventually.deep.equal([AGENT_3]);
                }));
            });
            describe("fourth agent", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    const txHash = yield registry.addAuthorizedEditAgent.sendTransactionAsync(AGENT_4);
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should emit log saying third agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_registry_2.LogAddAuthorizedEditAgent(registry.address, AGENT_4);
                    expect(logReturned).to.deep.equal(logExpected);
                }));
                it("should return first agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.getAuthorizedEditAgents.callAsync())
                        .to.eventually.deep.equal([AGENT_3, AGENT_4]);
                }));
            });
            it("should throw when unauthorized attacker edits entry", () => __awaiter(this, void 0, void 0, function* () {
                const entry = generateEntryFn();
                yield insertEntryFn(entry, { from: AGENT_1 });
                yield expect(modifyEntryBeneficiaryFn(generateEntryFn(), AGENT_2, { from: AGENT_2 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
            describe("third agent edits existing entry in registry", () => {
                let res;
                let entry;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    entry = generateEntryFn();
                    yield insertEntryFn(entry, { from: AGENT_1 });
                    const txHash = yield modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, { from: AGENT_3 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should emit a log saying the debt is edited", () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_registry_2.LogModifyEntryBeneficiary(registry.address, entry.getIssuanceHash(), entry.getBeneficiary(), BENEFICIARY_2);
                    expect(logReturned).to.deep.equal(logExpected);
                });
                it("should reflect changes in stored entry", () => __awaiter(this, void 0, void 0, function* () {
                    const returnedEntry = yield registry.get.callAsync(entry.getIssuanceHash());
                    const beneficiary = returnedEntry[1];
                    expect(beneficiary).to.equal(BENEFICIARY_2);
                }));
            });
            describe("fourth agent edits existing entry in registry", () => {
                let res;
                let entry;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    entry = generateEntryFn();
                    yield insertEntryFn(entry, { from: AGENT_1 });
                    const txHash = yield modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, { from: AGENT_4 });
                    res = yield web3.eth.getTransactionReceipt(txHash);
                }));
                it("should emit a log saying the debt is edited", () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = debt_registry_2.LogModifyEntryBeneficiary(registry.address, entry.getIssuanceHash(), entry.getBeneficiary(), BENEFICIARY_2);
                    expect(logReturned).to.deep.equal(logExpected);
                });
                it("should reflect changes in stored entry", () => __awaiter(this, void 0, void 0, function* () {
                    const returnedEntry = yield registry.get.callAsync(entry.getIssuanceHash());
                    const beneficiary = returnedEntry[1];
                    expect(beneficiary).to.equal(BENEFICIARY_2);
                }));
            });
            it("should throw when third agent tries inserting entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(insertEntryFn(generateEntryFn(), { from: AGENT_3 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
            it("should throw when fourth agent tries inserting entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(insertEntryFn(generateEntryFn(), { from: AGENT_4 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner revokes second agent from inserting entries", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                const txHash = yield registry.revokeInsertAgentAuthorization.sendTransactionAsync(AGENT_2, { from: CONTRACT_OWNER });
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit log saying agent authorization revoked", () => __awaiter(this, void 0, void 0, function* () {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_registry_2.LogRevokeInsertAgentAuthorization(registry.address, AGENT_2);
                expect(logReturned).to.deep.equal(logExpected);
            }));
            it("should return second agent as unauthorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedInsertAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_1]);
            }));
            it("should throw when second agent inserts entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(insertEntryFn(generateEntryFn(), { from: AGENT_2 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner revokes third agent from editing entries", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                const txHash = yield registry.revokeEditAgentAuthorization.sendTransactionAsync(AGENT_3, { from: CONTRACT_OWNER });
                res = yield web3.eth.getTransactionReceipt(txHash);
            }));
            it("should emit log saying agent authorization revoked", () => __awaiter(this, void 0, void 0, function* () {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = debt_registry_2.LogRevokeEditAgentAuthorization(registry.address, AGENT_3);
                expect(logReturned).to.deep.equal(logExpected);
            }));
            it("should return third agent as unauthorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedEditAgents.callAsync())
                    .to.eventually.deep.equal([AGENT_4]);
            }));
            it("should throw when third agent edits entry", () => __awaiter(this, void 0, void 0, function* () {
                yield insertEntryFn(generateEntryFn(), { from: AGENT_1 });
                yield expect(modifyEntryBeneficiaryFn(generateEntryFn(), BENEFICIARY_2, { from: AGENT_3 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("Global Invariants", () => {
            describe("No hash collisions on inserts", () => {
                it("should throw on hash collision insert", () => __awaiter(this, void 0, void 0, function* () {
                    const entry = generateEntryFn();
                    yield insertEntryFn(entry, { from: AGENT_1 });
                    yield expect(insertEntryFn(entry, { from: AGENT_1 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("No edits on non-existent entries", () => {
                it("should throw on non-existent entry edit", () => __awaiter(this, void 0, void 0, function* () {
                    const entry = generateEntryFn();
                    yield expect(modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, { from: AGENT_4 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("No inserts when debt registry is paused", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield registry.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                after(() => __awaiter(this, void 0, void 0, function* () {
                    yield registry.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    const entry = generateEntryFn();
                    yield expect(insertEntryFn(entry))
                        .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("No edits when debt registry is paused", () => {
                let entry;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    entry = generateEntryFn();
                    yield insertEntryFn(entry, { from: AGENT_1 });
                    yield registry.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                after(() => __awaiter(this, void 0, void 0, function* () {
                    yield registry.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                }));
                it("should throw", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, { from: AGENT_1 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("Only owner can authorize and revoke agents", () => {
                it("should throw if non-owner authorizes agent", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.addAuthorizedInsertAgent.sendTransactionAsync(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                    yield expect(registry.addAuthorizedEditAgent.sendTransactionAsync(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
                it("should throw if non-owner revokes agent", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.revokeInsertAgentAuthorization.sendTransactionAsync(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                    yield expect(registry.revokeEditAgentAuthorization.sendTransactionAsync(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("Only owner can transfer ownership", () => {
                it("should throw if non-owner transfers ownership", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.transferOwnership.sendTransactionAsync(ATTACKER, { from: ATTACKER })).to.eventually.be
                        .rejectedWith(constants_1.REVERT_ERROR);
                }));
                it("should let owner transfer ownership", () => __awaiter(this, void 0, void 0, function* () {
                    yield registry.transferOwnership.sendTransactionAsync(NEW_CONTRACT_OWNER, { from: CONTRACT_OWNER });
                    yield expect(registry.owner.callAsync()).to.eventually
                        .equal(NEW_CONTRACT_OWNER);
                }));
            });
        });
    });
}));
//# sourceMappingURL=debt_registry.js.map