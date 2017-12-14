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
const chai = require("chai");
const entry_1 = require("../../types/registry/entry");
const logs_1 = require("../../types/registry/logs");
const chai_setup_js_1 = require("./test_utils/chai_setup.js");
const constants_1 = require("./test_utils/constants");
chai_setup_js_1.chaiSetup.configure();
const expect = chai.expect;
const debtRegistryContract = artifacts.require("DebtRegistry");
contract("Debt Registry", (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    // We choose arbitrary addresses to represent data fields in the registry
    // entries.
    const CREDITOR_1 = ACCOUNTS[1];
    const CREDITOR_2 = ACCOUNTS[2];
    const TERMS_CONTRACT_ADDRESS = ACCOUNTS[3];
    // We choose arbitrary addresses to represent the various contracts
    // that have / lack permission to make changes to the registry.
    const AGENT_1 = ACCOUNTS[4];
    const AGENT_2 = ACCOUNTS[5];
    const AGENT_3 = ACCOUNTS[6];
    const AGENT_4 = ACCOUNTS[7];
    const ATTACKER = ACCOUNTS[8];
    const NEW_CONTRACT_OWNER = ACCOUNTS[9];
    let registry;
    let termsContractAddress;
    // We define utility funcitons for the primary state-changing
    // operations permitted on the registry.
    let generateEntryFn;
    let insertEntryFn;
    let modifyEntryCreditorFn;
    const ARBITRARY_TERMS_CONTRACT_PARAMS = "arbitrary terms contract param string";
    before(() => __awaiter(this, void 0, void 0, function* () {
        registry = yield debtRegistryContract.deployed();
        termsContractAddress = registry.address;
        // DebtRegistryEntries are given a random salt on construction --
        // we use the following function to generate arbitrary
        // DebtRegistryEntries without hash collisions.
        generateEntryFn = () => {
            return new entry_1.DebtRegistryEntry({
                creditor: CREDITOR_1,
                termsContract: TERMS_CONTRACT_ADDRESS,
                termsContractParameters: "arbitrary terms contract param string",
                version: "0.1.0",
            });
        };
        insertEntryFn = (entry, options) => __awaiter(this, void 0, void 0, function* () {
            return registry.insert(entry.getVersion(), entry.getCreditor(), entry.getTermsContract(), entry.getTermsContractParameters(), entry.getSalt(), options);
        });
        modifyEntryCreditorFn = (entry, newCreditor, options) => __awaiter(this, void 0, void 0, function* () {
            return registry.modifyCreditor(entry.getEntryHash(), newCreditor, options);
        });
    }));
    describe("before owner authorizes agents for editing registry", () => {
        it("should throw if any user tries to insert entry", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(insertEntryFn(generateEntryFn()))
                .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
        }));
        it("should throw if any user tries to edit entry", () => __awaiter(this, void 0, void 0, function* () {
            yield expect(modifyEntryCreditorFn(generateEntryFn(), AGENT_1))
                .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
        }));
    });
    describe("owner authorizes agent(s) for inserting entries", () => {
        describe("first agent", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                res = yield registry.addAuthorizedInsertAgent(AGENT_1);
            }));
            it("should emit log saying first agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                const logReturned = res.logs[0];
                const logExpected = logs_1.LogAddAuthorizedInsertAgent(AGENT_1);
                expect(logReturned).to.solidityLogs.equal(logExpected);
            }));
            it("should return first agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedInsertAgents())
                    .to.eventually.deep.equal([AGENT_1]);
            }));
        });
        describe("second agent", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                res = yield registry.addAuthorizedInsertAgent(AGENT_2);
            }));
            it("should emit log saying second agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                const logReturned = res.logs[0];
                const logExpected = logs_1.LogAddAuthorizedInsertAgent(AGENT_2);
                expect(logReturned).to.solidityLogs.equal(logExpected);
            }));
            it("should return both first and second agents authorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedInsertAgents())
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
                res = yield insertEntryFn(entry, { from: AGENT_1 });
            }));
            it("should emit a log saying the debt is inserted", () => __awaiter(this, void 0, void 0, function* () {
                const logReturned = res.logs[0];
                const logExpected = entry.getLogInsertEntry();
                expect(logReturned).to.solidityLogs.equal(logExpected);
            }));
            it("should make entry retrievable by its hash", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.get(entry.getEntryHash()))
                    .to.eventually.deep.equal([
                    entry.getVersion(),
                    entry.getCreditor(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                ]);
            }));
            it("should return the correctly hashed terms contract parameters", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getTermsContractParametersHash(entry.getEntryHash()))
                    .to.eventually.equal(entry.getTermsContractParametersHash());
            }));
            it("should throw when first agent tries editing entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(modifyEntryCreditorFn(entry, AGENT_1, { from: AGENT_1 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("second agent inserts new entry into registry", () => {
            let res;
            let entry;
            before(() => __awaiter(this, void 0, void 0, function* () {
                entry = generateEntryFn();
                res = yield insertEntryFn(entry, { from: AGENT_2 });
            }));
            it("should emit a log saying the debt is inserted", () => __awaiter(this, void 0, void 0, function* () {
                const logReturned = res.logs[0];
                const logExpected = entry.getLogInsertEntry();
                expect(logReturned).to.solidityLogs.equal(logExpected);
            }));
            it("should make entry retrievable by its hash", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.get(entry.getEntryHash()))
                    .to.eventually.deep.equal([
                    entry.getVersion(),
                    entry.getCreditor(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                ]);
            }));
            it("should throw when second agent tries editing entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(modifyEntryCreditorFn(entry, AGENT_2, { from: AGENT_2 }))
                    .to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner authorizes agent(s) for editing entries", () => {
            describe("third agent", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    res = yield registry.addAuthorizedEditAgent(AGENT_3);
                }));
                it("should emit log saying third agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                    const logReturned = res.logs[0];
                    const logExpected = logs_1.LogAddAuthorizedEditAgent(AGENT_3);
                    expect(logReturned).to.solidityLogs.equal(logExpected);
                }));
                it("should return first agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.getAuthorizedEditAgents())
                        .to.eventually.deep.equal([AGENT_3]);
                }));
            });
            describe("fourth agent", () => {
                let res;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    res = yield registry.addAuthorizedEditAgent(AGENT_4);
                }));
                it("should emit log saying third agent authorized", () => __awaiter(this, void 0, void 0, function* () {
                    const logReturned = res.logs[0];
                    const logExpected = logs_1.LogAddAuthorizedEditAgent(AGENT_4);
                    expect(logReturned).to.solidityLogs.equal(logExpected);
                }));
                it("should return first agent as authorized", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.getAuthorizedEditAgents())
                        .to.eventually.deep.equal([AGENT_3, AGENT_4]);
                }));
            });
            it("should throw when unauthorized attacker edits entry", () => __awaiter(this, void 0, void 0, function* () {
                const entry = generateEntryFn();
                yield insertEntryFn(entry, { from: AGENT_1 });
                yield expect(modifyEntryCreditorFn(generateEntryFn(), AGENT_2, { from: AGENT_2 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
            describe("third agent edits existing entry in registry", () => {
                let res;
                let entry;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    entry = generateEntryFn();
                    yield insertEntryFn(entry, { from: AGENT_1 });
                    res = yield modifyEntryCreditorFn(entry, CREDITOR_2, { from: AGENT_3 });
                }));
                it("should emit a log saying the debt is edited", () => {
                    const logReturned = res.logs[0];
                    const logExpected = logs_1.LogModifyEntryCreditor(entry.getEntryHash(), entry.getCreditor(), CREDITOR_2);
                    expect(logReturned).to.solidityLogs.equal(logExpected);
                });
                it("should reflect changes in stored entry", () => __awaiter(this, void 0, void 0, function* () {
                    const returnedEntry = yield registry.get(entry.getEntryHash());
                    const creditor = returnedEntry[1];
                    expect(creditor).to.equal(CREDITOR_2);
                }));
            });
            describe("fourth agent edits existing entry in registry", () => {
                let res;
                let entry;
                before(() => __awaiter(this, void 0, void 0, function* () {
                    entry = generateEntryFn();
                    yield insertEntryFn(entry, { from: AGENT_1 });
                    res = yield modifyEntryCreditorFn(entry, CREDITOR_2, { from: AGENT_4 });
                }));
                it("should emit a log saying the debt is edited", () => {
                    const logReturned = res.logs[0];
                    const logExpected = logs_1.LogModifyEntryCreditor(entry.getEntryHash(), entry.getCreditor(), CREDITOR_2);
                    expect(logReturned).to.solidityLogs.equal(logExpected);
                });
                it("should reflect changes in stored entry", () => __awaiter(this, void 0, void 0, function* () {
                    const returnedEntry = yield registry.get(entry.getEntryHash());
                    const creditor = returnedEntry[1];
                    expect(creditor).to.equal(CREDITOR_2);
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
                res = yield registry.revokeInsertAgentAuthorization(AGENT_2, { from: CONTRACT_OWNER });
            }));
            it("should emit log saying agent authorization revoked", () => __awaiter(this, void 0, void 0, function* () {
                const logReturned = res.logs[0];
                const logExpected = logs_1.LogRevokeInsertAgentAuthorization(AGENT_2);
                expect(logReturned).to.solidityLogs.equal(logExpected);
            }));
            it("should return second agent as unauthorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedInsertAgents())
                    .to.eventually.deep.equal([AGENT_1]);
            }));
            it("should throw when second agent inserts entry", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(insertEntryFn(generateEntryFn(), { from: AGENT_2 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
            }));
        });
        describe("owner revokes third agent from editing entries", () => {
            let res;
            before(() => __awaiter(this, void 0, void 0, function* () {
                res = yield registry.revokeEditAgentAuthorization(AGENT_3, { from: CONTRACT_OWNER });
            }));
            it("should emit log saying agent authorization revoked", () => __awaiter(this, void 0, void 0, function* () {
                const logReturned = res.logs[0];
                const logExpected = logs_1.LogRevokeEditAgentAuthorization(AGENT_3);
                expect(logReturned).to.solidityLogs.equal(logExpected);
            }));
            it("should return third agent as unauthorized", () => __awaiter(this, void 0, void 0, function* () {
                yield expect(registry.getAuthorizedEditAgents())
                    .to.eventually.deep.equal([AGENT_4]);
            }));
            it("should throw when third agent edits entry", () => __awaiter(this, void 0, void 0, function* () {
                yield insertEntryFn(generateEntryFn(), { from: AGENT_1 });
                yield expect(modifyEntryCreditorFn(generateEntryFn(), CREDITOR_2, { from: AGENT_3 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
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
                    yield expect(modifyEntryCreditorFn(entry, CREDITOR_2, { from: AGENT_4 })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("Only owner can authorize and revoke agents", () => {
                it("should throw if non-owner authorizes agent", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.addAuthorizedInsertAgent(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                    yield expect(registry.addAuthorizedEditAgent(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
                it("should throw if non-owner revokes agent", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.revokeInsertAgentAuthorization(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                    yield expect(registry.revokeEditAgentAuthorization(ATTACKER, { from: ATTACKER })).to.eventually.be.rejectedWith(constants_1.REVERT_ERROR);
                }));
            });
            describe("Only owner can transfer ownership", () => {
                it("should throw if non-owner transfers ownership", () => __awaiter(this, void 0, void 0, function* () {
                    yield expect(registry.transferOwnership(ATTACKER, { from: ATTACKER })).to.eventually.be
                        .rejectedWith(constants_1.REVERT_ERROR);
                }));
                it("should let owner transfer ownership", () => __awaiter(this, void 0, void 0, function* () {
                    yield registry.transferOwnership(NEW_CONTRACT_OWNER, { from: CONTRACT_OWNER });
                    yield expect(registry.owner()).to.eventually
                        .equal(NEW_CONTRACT_OWNER);
                }));
            });
        });
    });
    // TODO: Add escape hatch tests
});
//# sourceMappingURL=debt_registry.js.map