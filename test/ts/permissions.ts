import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import {DummyContractInstance,
    PermissionsLibraryContractInstance} from "../../types/contracts";
import {chaiSetup} from "./utils/chai_setup.js";
import {INVALID_OPCODE} from "./utils/constants.js";

chaiSetup.configure();
const expect = chai.expect;

const permissionsLibraryContract = artifacts.require("PermissionsLib");
const dummyContract = artifacts.require("DummyContract");

contract("Permissions", (ACCOUNTS) => {
    const USER = ACCOUNTS[0];
    const AGENTS = [ACCOUNTS[1], ACCOUNTS[2], ACCOUNTS[3]];
    const INQUIRER = ACCOUNTS[4];

    let permissionsLibrary: PermissionsLibraryContractInstance;

    before(async () => {
        permissionsLibrary = await permissionsLibraryContract.deployed();
    });

    /**
     * Class of tests for ensurings on the library contract *itself*
     * don't affect the state of permissions across the rest of the contracts.
     */
    describe("Library -- Contract", async () => {
        it("should not publicly expose authorization function", async () => {
            const authorizeF = () => {
                permissionsLibrary.authorize("0x", USER);
            };

            expect(authorizeF)
                .to.throw(TypeError, /not a function/);
        });

        it("should not publicly expose revocation function", async () => {
            const revokeF = () => {
                permissionsLibrary.revokeAuthorization("0x", USER);
            };

            expect(revokeF)
                .to.throw(TypeError, /not a function/);
        });
    });

    /**
     * Class of tests for ensurings on clients of the library contract
     * have correct functionality.
     *
     * Dummy Contract has two separate Permission sets.  We use three different
     * agents to test expected functionality.
     */
    describe("Library -- Client", async () => {
        let dummyContractInstance: DummyContractInstance;

        before(async () => {
            dummyContractInstance = await dummyContract.deployed();
        });

        it("should start with empty permission sets", async () => {
            expect(dummyContractInstance.getFirstSetAuthorizedAgents())
                .to.eventually.deep.equal([]);
        });

        describe("authorizations", () => {
            it("starts with all agents unauthorized", async () => {
                const firstSetPromises = AGENTS.map((agent) => {
                    return dummyContractInstance.isAuthorizedInFirstSet(agent)
                        .should.eventually.equal(false);
                });
                const secondSetPromises = AGENTS.map((agent) => {
                    return dummyContractInstance.isAuthorizedInSecondSet(agent)
                        .should.eventually.equal(false);
                });

                return Promise.all([...firstSetPromises, ...secondSetPromises]);
            });

            describe("user authorizes first agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet(AGENTS[0]);
                });

                it("authorizes first agent in first set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[0])).to.eventually.equal(true);
                });

                it("doesn't authorize first agent in second set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[0])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[0]]);
                });
            });

            describe("user authorizes second agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet(AGENTS[1]);
                });

                it("authorizes second agent in first set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[1])).to.eventually.equal(true);
                });

                it("maintains first agent authorization in first set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[0])).to.eventually.equal(true);
                });

                it("doesn't authorize second agent in second set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[1])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[0], AGENTS[1]]);
                });
            });

            describe("user authorizes third agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet(AGENTS[2]);
                });

                it("authorizes third agent in first set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[2])).to.eventually.equal(true);
                });

                it("doesn't authorize third agent in second set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[2])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for second set", async () => {
                    expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents())
                        .to.eventually
                        .deep.equal([AGENTS[0], AGENTS[1], AGENTS[2]]);
                });
            });

            describe("user authorizes third agent in second set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInSecondSet(AGENTS[2]);
                });

                it("authorizes third agent in second set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInSecondSet(AGENTS[2])).to.eventually.equal(true);
                });

                it("maintains third agent authorization in first set", async () => {
                    expect(dummyContractInstance
                        .isAuthorizedInFirstSet(AGENTS[2])).to.eventually.equal(true);
                });

                it("returns correct authorized agents for second set", async () => {
                    expect(dummyContractInstance
                        .getSecondSetAuthorizedAgents())
                        .to.eventually.deep.equal([AGENTS[2]]);
                });
            });
        });

        describe("revocations", () => {
            describe("user revokes second agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInFirstSet(AGENTS[1]);
                });

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
                before(async () => {
                    await dummyContractInstance.revokeInFirstSet(AGENTS[2]);
                });

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
                before(async () => {
                    await dummyContractInstance.revokeInSecondSet(AGENTS[2]);
                });

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
    });
});
