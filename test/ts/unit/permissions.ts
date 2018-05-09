import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import * as Web3 from "web3";

import { DummyContractContract } from "../../../types/generated/dummy_contract";

import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE } from "../test_utils/constants.js";

import { AuthorizationRevoked, Authorized, EventNames } from "../logs/permissions_lib";
import { queryLogsForEvent } from "../logs/log_utils";

ChaiSetup.configure();
const expect = chai.expect;

const permissionsLibraryContract = artifacts.require("PermissionsLib");
const dummyContract = artifacts.require("DummyContract");

contract("Permissions", (ACCOUNTS) => {
    const USER = ACCOUNTS[0];
    const AGENT_1 = ACCOUNTS[1];
    const AGENT_2 = ACCOUNTS[2];
    const AGENT_3 = ACCOUNTS[3];
    const AGENTS = [AGENT_1, AGENT_2, AGENT_3];
    const INQUIRER = ACCOUNTS[4];

    const TX_DEFAULTS = { from: USER, gas: 4000000 };

    let permissionsLibrary: Web3.ContractInstance;

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

            expect(authorizeF).to.throw(TypeError, /not a function/);
        });

        it("should not publicly expose revocation function", async () => {
            const revokeF = () => {
                permissionsLibrary.revokeAuthorization("0x", USER);
            };

            expect(revokeF).to.throw(TypeError, /not a function/);
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
        let dummyContractInstance: DummyContractContract;

        before(async () => {
            const dummyContractTruffleInstance = await dummyContract.deployed();
            const dummyContractWeb3Contract = web3.eth
                .contract(dummyContractTruffleInstance.abi)
                .at(dummyContractTruffleInstance.address);
            dummyContractInstance = new DummyContractContract(
                dummyContractWeb3Contract,
                TX_DEFAULTS,
            );
        });

        describe("events", () => {
            before(() => {
                // Initialize ABI Decoder for deciphering log receipts.
                ABIDecoder.addABI(dummyContract.abi);
            });

            after(() => {
                // Tear down ABIDecoder before next set of tests.
                ABIDecoder.removeABI(dummyContract.abi);
            });

            it("should emit an event when an agent is authorized", async () => {
                const txHash = await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(
                    AGENT_1,
                );

                const expectedLogEntry = Authorized(
                    dummyContractInstance.address,
                    AGENT_1,
                    "dummy-contract-first-set",
                );
                const resultingLog = await queryLogsForEvent(txHash, EventNames.Authorized);
                expect(resultingLog).to.deep.equal(expectedLogEntry);
            });

            it("should emit an event when an agent's authorization is revoked", async () => {
                const txHash = await dummyContractInstance.revokeInFirstSet.sendTransactionAsync(
                    AGENT_1,
                );

                const expectedLogEntry = AuthorizationRevoked(
                    dummyContractInstance.address,
                    AGENT_1,
                    "dummy-contract-first-set",
                );
                const resultingLog = await queryLogsForEvent(
                    txHash,
                    EventNames.AuthorizationRevoked,
                );
                expect(resultingLog).to.deep.equal(expectedLogEntry);
            });
        });

        it("should start with empty permission sets", async () => {
            await expect(
                dummyContractInstance.getFirstSetAuthorizedAgents.callAsync(),
            ).to.eventually.deep.equal([]);
        });

        describe("authorizations", () => {
            it("starts with all agents unauthorized", async () => {
                const firstSetPromises = AGENTS.map((agent) => {
                    return expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(agent),
                    ).to.eventually.equal(false);
                });
                const secondSetPromises = AGENTS.map((agent) => {
                    return expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(agent),
                    ).to.eventually.equal(false);
                });

                return Promise.all([...firstSetPromises, ...secondSetPromises]);
            });

            describe("user authorizes first agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(AGENTS[0]);
                });

                it("authorizes first agent in first set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[0]),
                    ).to.eventually.equal(true);
                });

                it("doesn't authorize first agent in second set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[0]),
                    ).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    expect(
                        dummyContractInstance.getFirstSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENTS[0]]);
                });
            });

            describe("user authorizes second agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(AGENTS[1]);
                });

                it("authorizes second agent in first set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[1]),
                    ).to.eventually.equal(true);
                });

                it("maintains first agent authorization in first set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[0]),
                    ).to.eventually.equal(true);
                });

                it("doesn't authorize second agent in second set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[1]),
                    ).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    expect(
                        dummyContractInstance.getFirstSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENTS[0], AGENTS[1]]);
                });
            });

            describe("user authorizes third agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(AGENTS[2]);
                });

                it("authorizes third agent in first set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(true);
                });

                it("doesn't authorize third agent in second set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(false);
                });

                it("returns correct authorized agents for second set", async () => {
                    expect(
                        dummyContractInstance.getFirstSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENTS[0], AGENTS[1], AGENTS[2]]);
                });
            });

            describe("user authorizes third agent in second set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInSecondSet.sendTransactionAsync(
                        AGENTS[2],
                    );
                });

                it("authorizes third agent in second set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(true);
                });

                it("maintains third agent authorization in first set", async () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(true);
                });

                it("returns correct authorized agents for second set", async () => {
                    expect(
                        dummyContractInstance.getSecondSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENTS[2]]);
                });
            });
        });

        describe("revocations", () => {
            describe("user revokes second agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInFirstSet.sendTransactionAsync(AGENTS[1]);
                });

                it("revokes second agent in first set", () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[1]),
                    ).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", () => {
                    expect(
                        dummyContractInstance.getFirstSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENTS[0], AGENTS[2]]);
                });
            });

            describe("user revokes third agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInFirstSet.sendTransactionAsync(AGENTS[2]);
                });

                it("revokes third agent in first set", () => {
                    expect(
                        dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(false);
                });

                it("maintains third agent authorization in second set", () => {
                    expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(true);
                });

                it("returns correct authorized agents for first set", () => {
                    expect(
                        dummyContractInstance.getFirstSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENTS[0]]);
                });
            });

            describe("user revokes third agent in second set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInSecondSet.sendTransactionAsync(AGENTS[2]);
                });

                it("revokes third agent in first set", () => {
                    expect(
                        dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[2]),
                    ).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", () => {
                    expect(
                        dummyContractInstance.getSecondSetAuthorizedAgents.callAsync(),
                    ).to.eventually.deep.equal([]);
                });
            });
        });
    });
});
