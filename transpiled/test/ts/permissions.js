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
const chai_setup_js_1 = require("./test_utils/chai_setup.js");
chai_setup_js_1.chaiSetup.configure();
const expect = chai.expect;
const permissionsLibraryContract = artifacts.require("PermissionsLib");
const dummyContract = artifacts.require("DummyContract");
contract("Permissions", (ACCOUNTS) => {
    const USER = ACCOUNTS[0];
    const AGENTS = [ACCOUNTS[1], ACCOUNTS[2], ACCOUNTS[3]];
    const INQUIRER = ACCOUNTS[4];
    let permissionsLibrary;
    before(() => __awaiter(this, void 0, void 0, function* () {
        permissionsLibrary = yield permissionsLibraryContract.deployed();
    }));
    /**
     * Class of tests for ensurings on the library contract *itself*
     * don't affect the state of permissions across the rest of the contracts.
     */
    describe("Library -- Contract", () => __awaiter(this, void 0, void 0, function* () {
        it("should not publicly expose authorization function", () => __awaiter(this, void 0, void 0, function* () {
            const authorizeF = () => {
                permissionsLibrary.authorize("0x", USER);
            };
            expect(authorizeF)
                .to.throw(TypeError, /not a function/);
        }));
        it("should not publicly expose revocation function", () => __awaiter(this, void 0, void 0, function* () {
            const revokeF = () => {
                permissionsLibrary.revokeAuthorization("0x", USER);
            };
            expect(revokeF)
                .to.throw(TypeError, /not a function/);
        }));
    }));
    /**
     * Class of tests for ensurings on clients of the library contract
     * have correct functionality.
     *
     * Dummy Contract has two separate Permission sets.  We use three different
     * agents to test expected functionality.
     */
    describe("Library -- Client", () => __awaiter(this, void 0, void 0, function* () {
        let dummyContractInstance;
        before(() => __awaiter(this, void 0, void 0, function* () {
            dummyContractInstance = yield dummyContract.deployed();
        }));
        it("should start with empty permission sets", () => __awaiter(this, void 0, void 0, function* () {
            expect(dummyContractInstance.getFirstSetAuthorizedAgents())
                .to.eventually.deep.equal([]);
        }));
        describe("authorizations", () => {
            it("starts with all agents unauthorized", () => __awaiter(this, void 0, void 0, function* () {
                const firstSetPromises = AGENTS.map((agent) => {
                    return dummyContractInstance.isAuthorizedInFirstSet(agent)
                        .should.eventually.equal(false);
                });
                const secondSetPromises = AGENTS.map((agent) => {
                    return dummyContractInstance.isAuthorizedInSecondSet(agent)
                        .should.eventually.equal(false);
                });
                return Promise.all([...firstSetPromises, ...secondSetPromises]);
            }));
            describe("user authorizes first agent in first set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.authorizeInFirstSet(AGENTS[0]);
                }));
                it("authorizes first agent in first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[0])).to.eventually.equal(true);
                }));
                it("doesn't authorize first agent in second set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[0])).to.eventually.equal(false);
                }));
                it("returns correct authorized agents for first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[0]]);
                }));
            });
            describe("user authorizes second agent in first set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.authorizeInFirstSet(AGENTS[1]);
                }));
                it("authorizes second agent in first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[1])).to.eventually.equal(true);
                }));
                it("maintains first agent authorization in first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[0])).to.eventually.equal(true);
                }));
                it("doesn't authorize second agent in second set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[1])).to.eventually.equal(false);
                }));
                it("returns correct authorized agents for first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[0], AGENTS[1]]);
                }));
            });
            describe("user authorizes third agent in first set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.authorizeInFirstSet(AGENTS[2]);
                }));
                it("authorizes third agent in first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[2])).to.eventually.equal(true);
                }));
                it("doesn't authorize third agent in second set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[2])).to.eventually.equal(false);
                }));
                it("returns correct authorized agents for second set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually
                        .deep.equal([AGENTS[0], AGENTS[1], AGENTS[2]]);
                }));
            });
            describe("user authorizes third agent in second set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.authorizeInSecondSet(AGENTS[2]);
                }));
                it("authorizes third agent in second set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[2])).to.eventually.equal(true);
                }));
                it("maintains third agent authorization in first set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[2])).to.eventually.equal(true);
                }));
                it("returns correct authorized agents for second set", () => __awaiter(this, void 0, void 0, function* () {
                    expect(dummyContractInstance
                        .getSecondSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[2]]);
                }));
            });
        });
        describe("revocations", () => {
            describe("user revokes second agent in first set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.revokeInFirstSet(AGENTS[1]);
                }));
                it("revokes second agent in first set", () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[1])).to.eventually.equal(false);
                });
                it("returns correct authorized agents for first set", () => {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[0], AGENTS[2]]);
                });
            });
            describe("user revokes third agent in first set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.revokeInFirstSet(AGENTS[2]);
                }));
                it("revokes third agent in first set", () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[2])).to.eventually.equal(false);
                });
                it("maintains third agent authorization in second set", () => {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[2])).to.eventually.equal(true);
                });
                it("returns correct authorized agents for first set", () => {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[0]]);
                });
            });
            describe("user revokes third agent in second set", () => {
                before(() => __awaiter(this, void 0, void 0, function* () {
                    yield dummyContractInstance.revokeInSecondSet(AGENTS[2]);
                }));
                it("revokes third agent in first set", () => {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[2])).to.eventually.equal(false);
                });
                it("returns correct authorized agents for first set", () => {
                    expect(dummyContractInstance
                        .getSecondSetAuthorizedAgents())
                        .to.eventually.deep.equal([]);
                });
            });
        });
    }));
});
//# sourceMappingURL=permissions.js.map