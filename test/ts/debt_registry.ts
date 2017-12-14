import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import {Address, Log} from "../../types/common";
import {
    DebtRegistryContractInstance,
    TransactionOptions,
    TransactionReturnPayload,
} from "../../types/contracts";
import {DebtRegistryEntry} from "../../types/registry/entry";
import {
    LogAddAuthorizedEditAgent,
    LogAddAuthorizedInsertAgent,
    LogModifyEntryCreditor,
    LogRevokeEditAgentAuthorization,
    LogRevokeInsertAgentAuthorization,
} from "../../types/registry/logs";
import {chaiSetup} from "./test_utils/chai_setup.js";
import {INVALID_OPCODE, REVERT_ERROR} from "./test_utils/constants";

chaiSetup.configure();
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

    let registry: DebtRegistryContractInstance;
    let termsContractAddress: Address;

    // We define utility funcitons for the primary state-changing
    // operations permitted on the registry.
    let generateEntryFn: () => DebtRegistryEntry;
    let insertEntryFn: (entry: DebtRegistryEntry,
                        options?: TransactionOptions)
        => Promise<TransactionReturnPayload>;
    let modifyEntryCreditorFn: (entry: DebtRegistryEntry,
                                newOwner: Address,
                                options?: TransactionOptions)
        => Promise<TransactionReturnPayload>;

    const ARBITRARY_TERMS_CONTRACT_PARAMS
        = "arbitrary terms contract param string";

    before(async () => {
        registry = await debtRegistryContract.deployed();
        termsContractAddress = registry.address;

        // DebtRegistryEntries are given a random salt on construction --
        // we use the following function to generate arbitrary
        // DebtRegistryEntries without hash collisions.
        generateEntryFn = () => {
            return new DebtRegistryEntry({
                creditor: CREDITOR_1,
                termsContract: TERMS_CONTRACT_ADDRESS,
                termsContractParameters: "arbitrary terms contract param string",
                version: "0.1.0",
            });
        };

        insertEntryFn = async (entry: DebtRegistryEntry,
                               options?: TransactionOptions) => {
            return registry.insert(
                entry.getVersion(),
                entry.getCreditor(),
                entry.getTermsContract(),
                entry.getTermsContractParameters(),
                entry.getSalt(),
                options,
            );
        };

        modifyEntryCreditorFn = async (entry: DebtRegistryEntry,
                                       newCreditor: Address,
                                       options?: TransactionOptions) => {
            return registry.modifyCreditor(
                entry.getEntryHash(),
                newCreditor,
                options,
            );
        };
    });

    describe("before owner authorizes agents for editing registry", () => {
        it("should throw if any user tries to insert entry", async () => {
            await expect(insertEntryFn(generateEntryFn()))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        it("should throw if any user tries to edit entry", async () => {
            await expect(modifyEntryCreditorFn(generateEntryFn(), AGENT_1))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });
    });

    describe("owner authorizes agent(s) for inserting entries", () => {
        describe("first agent", () => {
            let res: TransactionReturnPayload;

            before(async () => {
                res = await registry.addAuthorizedInsertAgent(AGENT_1);
            });

            it("should emit log saying first agent authorized", async () => {
                const logReturned = res.logs[0] as Log;
                const logExpected = LogAddAuthorizedInsertAgent(AGENT_1) as Log;

                expect(logReturned).to.solidityLogs.equal(logExpected);
            });

            it("should return first agent as authorized", async () => {
                await expect(registry.getAuthorizedInsertAgents())
                    .to.eventually.deep.equal([AGENT_1]);
            });
        });

        describe("second agent", () => {
            let res: TransactionReturnPayload;

            before(async () => {
                res = await registry.addAuthorizedInsertAgent(AGENT_2);
            });

            it("should emit log saying second agent authorized", async () => {
                const logReturned = res.logs[0] as Log;
                const logExpected = LogAddAuthorizedInsertAgent(AGENT_2) as Log;

                expect(logReturned).to.solidityLogs.equal(logExpected);
            });

            it("should return both first and second agents authorized", async () => {
                await expect(registry.getAuthorizedInsertAgents())
                    .to.eventually.deep.equal([AGENT_1, AGENT_2]);
            });
        });

        it("should throw when unauthorized attacker inserts entry", async () => {
            await expect(insertEntryFn(generateEntryFn(), { from: AGENT_3 }))
                .to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        describe("first agent inserts new entry into registry", () => {
            let res: TransactionReturnPayload;
            let entry: DebtRegistryEntry;

            before(async () => {
                entry = generateEntryFn();
                res = await insertEntryFn(entry, { from: AGENT_1 });
            });

            it("should emit a log saying the debt is inserted", async () => {
                const logReturned = res.logs[0] as Log;
                const logExpected = entry.getLogInsertEntry() as Log;

                expect(logReturned).to.solidityLogs.equal(logExpected);
            });

            it("should make entry retrievable by its hash", async () => {
                await expect(registry.get(entry.getEntryHash()))
                    .to.eventually.deep.equal([
                        entry.getVersion(),
                        entry.getCreditor(),
                        entry.getTermsContract(),
                        entry.getTermsContractParameters(),
                ]);
            });

            it("should return the correctly hashed terms contract parameters", async () => {
                await expect(registry.getTermsContractParametersHash(entry.getEntryHash()))
                    .to.eventually.equal(entry.getTermsContractParametersHash());
            });

            it("should throw when first agent tries editing entry", async () => {
                await expect(modifyEntryCreditorFn(entry, AGENT_1, { from: AGENT_1 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("second agent inserts new entry into registry", () => {
            let res: TransactionReturnPayload;
            let entry: DebtRegistryEntry;

            before(async () => {
                entry = generateEntryFn();
                res = await insertEntryFn(entry, { from: AGENT_2 });
            });

            it("should emit a log saying the debt is inserted", async () => {
                const logReturned = res.logs[0] as Log;
                const logExpected = entry.getLogInsertEntry() as Log;

                expect(logReturned).to.solidityLogs.equal(logExpected);
            });

            it("should make entry retrievable by its hash", async () => {
                await expect(registry.get(entry.getEntryHash()))
                    .to.eventually.deep.equal([
                        entry.getVersion(),
                        entry.getCreditor(),
                        entry.getTermsContract(),
                        entry.getTermsContractParameters(),
                ]);
            });

            it("should throw when second agent tries editing entry", async () => {
                await expect(modifyEntryCreditorFn(entry, AGENT_2, { from: AGENT_2 }))
                    .to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner authorizes agent(s) for editing entries", () => {
            describe("third agent", () => {
                let res: TransactionReturnPayload;

                before(async () => {
                    res = await registry.addAuthorizedEditAgent(AGENT_3);
                });

                it("should emit log saying third agent authorized", async () => {
                    const logReturned = res.logs[0] as Log;
                    const logExpected = LogAddAuthorizedEditAgent(AGENT_3) as Log;

                    expect(logReturned).to.solidityLogs.equal(logExpected);
                });

                it("should return first agent as authorized", async () => {
                    await expect(registry.getAuthorizedEditAgents())
                        .to.eventually.deep.equal([AGENT_3]);
                });
            });

            describe("fourth agent", () => {
                let res: TransactionReturnPayload;

                before(async () => {
                    res = await registry.addAuthorizedEditAgent(AGENT_4);
                });

                it("should emit log saying third agent authorized", async () => {
                    const logReturned = res.logs[0] as Log;
                    const logExpected = LogAddAuthorizedEditAgent(AGENT_4) as Log;

                    expect(logReturned).to.solidityLogs.equal(logExpected);
                });

                it("should return first agent as authorized", async () => {
                    await expect(registry.getAuthorizedEditAgents())
                        .to.eventually.deep.equal([AGENT_3, AGENT_4]);
                });
            });

            it("should throw when unauthorized attacker edits entry", async () => {
                const entry = generateEntryFn();
                await insertEntryFn(entry, { from: AGENT_1 });
                await expect(modifyEntryCreditorFn(generateEntryFn(), AGENT_2,
                    { from: AGENT_2 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            describe("third agent edits existing entry in registry", () => {
                let res: TransactionReturnPayload;
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    res = await modifyEntryCreditorFn(entry,
                        CREDITOR_2, { from: AGENT_3 });
                });

                it("should emit a log saying the debt is edited", () => {
                    const logReturned = res.logs[0] as Log;
                    const logExpected = LogModifyEntryCreditor(
                        entry.getEntryHash(),
                        entry.getCreditor(),
                        CREDITOR_2,
                    ) as Log;

                    expect(logReturned).to.solidityLogs.equal(logExpected);
                });

                it("should reflect changes in stored entry", async () => {
                    const returnedEntry =
                        await registry.get(entry.getEntryHash());
                    const creditor = returnedEntry[1];
                    expect(creditor).to.equal(CREDITOR_2);
                });
            });

            describe("fourth agent edits existing entry in registry", () => {
                let res: TransactionReturnPayload;
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    res = await modifyEntryCreditorFn(entry,
                        CREDITOR_2, { from: AGENT_4 });
                });

                it("should emit a log saying the debt is edited", () => {
                    const logReturned = res.logs[0] as Log;
                    const logExpected = LogModifyEntryCreditor(
                        entry.getEntryHash(),
                        entry.getCreditor(),
                        CREDITOR_2,
                    ) as Log;

                    expect(logReturned).to.solidityLogs.equal(logExpected);
                });

                it("should reflect changes in stored entry", async () => {
                    const returnedEntry =
                        await registry.get(entry.getEntryHash());
                    const creditor = returnedEntry[1];
                    expect(creditor).to.equal(CREDITOR_2);
                });
            });

            it("should throw when third agent tries inserting entry", async () => {
                await expect(insertEntryFn(generateEntryFn(),
                    { from: AGENT_3 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            it("should throw when fourth agent tries inserting entry", async () => {
                await expect(insertEntryFn(generateEntryFn(),
                    { from: AGENT_4 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner revokes second agent from inserting entries", () => {
            let res: TransactionReturnPayload;

            before(async () => {
                res = await registry.revokeInsertAgentAuthorization(AGENT_2,
                    { from: CONTRACT_OWNER});
            });

            it("should emit log saying agent authorization revoked", async () => {
                const logReturned = res.logs[0] as Log;
                const logExpected =
                    LogRevokeInsertAgentAuthorization(AGENT_2) as Log;

                expect(logReturned).to.solidityLogs.equal(logExpected);
            });

            it("should return second agent as unauthorized", async () => {
                await expect(registry.getAuthorizedInsertAgents())
                    .to.eventually.deep.equal([AGENT_1]);
            });

            it("should throw when second agent inserts entry", async () => {
                await expect(insertEntryFn(generateEntryFn(),
                    { from: AGENT_2 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner revokes third agent from editing entries", () => {
            let res: TransactionReturnPayload;

            before(async () => {
                res = await registry.revokeEditAgentAuthorization(AGENT_3,
                    { from: CONTRACT_OWNER});
            });

            it("should emit log saying agent authorization revoked", async () => {
                const logReturned = res.logs[0] as Log;
                const logExpected =
                    LogRevokeEditAgentAuthorization(AGENT_3) as Log;

                expect(logReturned).to.solidityLogs.equal(logExpected);
            });

            it("should return third agent as unauthorized", async () => {
                await expect(registry.getAuthorizedEditAgents())
                    .to.eventually.deep.equal([AGENT_4]);
            });

            it("should throw when third agent edits entry", async () => {
                await insertEntryFn(generateEntryFn(), { from: AGENT_1 });
                await expect(modifyEntryCreditorFn(generateEntryFn(), CREDITOR_2,
                    { from: AGENT_3 })).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("Global Invariants", () => {
            describe("No hash collisions on inserts", () => {
                it("should throw on hash collision insert", async () => {
                    const entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    await expect(insertEntryFn(entry,
                        { from: AGENT_1 })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("No edits on non-existent entries", () => {
                it("should throw on non-existent entry edit", async () => {
                    const entry = generateEntryFn();
                    await expect(modifyEntryCreditorFn(entry, CREDITOR_2,
                        { from: AGENT_4 })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Only owner can authorize and revoke agents", () => {
                it("should throw if non-owner authorizes agent", async () => {
                    await expect(registry.addAuthorizedInsertAgent(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                    await expect(registry.addAuthorizedEditAgent(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw if non-owner revokes agent", async () => {
                    await expect(registry.revokeInsertAgentAuthorization(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                    await expect(registry.revokeEditAgentAuthorization(ATTACKER,
                        { from: ATTACKER })).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Only owner can transfer ownership", () => {
                it("should throw if non-owner transfers ownership", async () => {
                    await expect(registry.transferOwnership(ATTACKER,
                        { from: ATTACKER })).to.eventually.be
                        .rejectedWith(REVERT_ERROR);
                });

                it("should let owner transfer ownership", async () => {
                    await registry.transferOwnership(NEW_CONTRACT_OWNER,
                        { from: CONTRACT_OWNER });
                    await expect(registry.owner()).to.eventually
                        .equal(NEW_CONTRACT_OWNER);
                });
            });
        });
    });
    // TODO: Add escape hatch tests
});
