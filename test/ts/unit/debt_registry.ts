import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import * as _ from "lodash";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";
import { isBigNumber } from "../test_utils/format";

import { Address, Bytes32, TxData, TxDataPayable, UInt } from "../../../types/common";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { DebtRegistryEntry } from "../../../types/registry/entry";
import { LogInsertEntry, LogModifyEntryBeneficiary } from "../logs/debt_registry";
import { AuthorizationRevoked, Authorized, EventNames } from "../logs/permissions_lib";
import { queryLogsForEvent } from "../logs/log_utils";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { INVALID_OPCODE, REVERT_ERROR } from "../test_utils/constants";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const repaymentRouterContract = artifacts.require("RepaymentRouter");
const debtRegistryContract = artifacts.require("DebtRegistry");
const termsContract = artifacts.require("SimpleInterestTermsContract");

contract("Debt Registry (Unit Tests)", async (ACCOUNTS) => {
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

    let registry: DebtRegistryContract;

    // We define utility functions for the primary state-changing
    // operations permitted on the registry.
    let generateEntryFn: (beneficiary?: string) => DebtRegistryEntry;
    let insertEntryFn: (entry: DebtRegistryEntry, options?: TxDataPayable) => Promise<string>;
    let modifyEntryBeneficiaryFn: (
        entry: DebtRegistryEntry,
        newOwner: Address,
        options?: TxDataPayable,
    ) => Promise<string>;

    const ARBITRARY_TERMS_CONTRACT_PARAMS = web3.sha3("arbitrary terms contract param string");
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    before(async () => {
        const registryTruffleContract = await debtRegistryContract.new();

        // The typings we use ingest vanilla Web3 contracts, so we convert the
        // contract instance deployed by truffle into a Web3 contract instance
        const registryWeb3Contract = web3.eth
            .contract(debtRegistryContract.abi)
            .at(registryTruffleContract.address);

        registry = new DebtRegistryContract(registryWeb3Contract, TX_DEFAULTS);

        // The version of an entry is mapped to the address of
        // the current RepaymentRouter used in the debt agreement
        const repaymentRouter = await repaymentRouterContract.deployed();
        const VERSION = repaymentRouter.address;

        // DebtRegistryEntries are given a random salt on construction --
        // we use the following function to generate arbitrary
        // DebtRegistryEntries without hash collisions.
        generateEntryFn = (beneficiary: string = BENEFICIARY_1) => {
            return new DebtRegistryEntry({
                beneficiary,
                debtor: DEBTOR,
                termsContract: TERMS_CONTRACT_ADDRESS,
                termsContractParameters: ARBITRARY_TERMS_CONTRACT_PARAMS,
                underwriter: UNDERWRITER,
                underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(5),
                version: VERSION,
            });
        };

        insertEntryFn = async (entry: DebtRegistryEntry, options?: TxDataPayable) => {
            return registry.insert.sendTransactionAsync(
                entry.getVersion(),
                entry.getBeneficiary(),
                entry.getDebtor(),
                entry.getUnderwriter(),
                entry.getUnderwriterRiskRating(),
                entry.getTermsContract(),
                entry.getTermsContractParameters(),
                entry.getSalt(),
                options,
            );
        };

        modifyEntryBeneficiaryFn = async (
            entry: DebtRegistryEntry,
            newBeneficiary: Address,
            options?: TxDataPayable,
        ) => {
            return registry.modifyBeneficiary.sendTransactionAsync(
                entry.getIssuanceHash(),
                newBeneficiary,
                options,
            );
        };

        // Initialize ABI Decoder for deciphering log receipts
        ABIDecoder.addABI(debtRegistryContract.abi);
    });

    after(() => {
        // Tear down ABIDecoder before next set of tests
        ABIDecoder.removeABI(debtRegistryContract.abi);
    });

    describe("before owner authorizes agents for editing registry", () => {
        it("should throw if any user tries to insert entry", async () => {
            await expect(insertEntryFn(generateEntryFn())).to.eventually.be.rejectedWith(
                REVERT_ERROR,
            );
        });

        it("should throw if any user tries to edit entry", async () => {
            await expect(
                modifyEntryBeneficiaryFn(generateEntryFn(), AGENT_1),
            ).to.eventually.be.rejectedWith(REVERT_ERROR);
        });
    });

    describe("owner authorizes agent(s) for inserting entries", () => {
        const expectedDebtorsDebts: string[] = [];

        describe("first agent", () => {
            let txHash: string;

            before(async () => {
                txHash = await registry.addAuthorizedInsertAgent.sendTransactionAsync(AGENT_1);
            });

            it("should emit log broadcasting authorization to insert", async () => {
                const expectedLogEntry = Authorized(
                    registry.address,
                    AGENT_1,
                    "debt-registry-insert",
                );
                const queryResult = await queryLogsForEvent(txHash, EventNames.Authorized);
                expect(queryResult).to.deep.equal(expectedLogEntry);
            });

            it("should return first agent as authorized", async () => {
                await expect(
                    registry.getAuthorizedInsertAgents.callAsync(),
                ).to.eventually.deep.equal([AGENT_1]);
            });
        });

        describe("second agent", () => {
            let txHash: string;

            before(async () => {
                txHash = await registry.addAuthorizedInsertAgent.sendTransactionAsync(AGENT_2);
            });

            it("should emit log broadcasting authorization to insert", async () => {
                const expectedLogEntry = Authorized(
                    registry.address,
                    AGENT_2,
                    "debt-registry-insert",
                );
                const queryResult = await queryLogsForEvent(txHash, EventNames.Authorized);
                expect(queryResult).to.deep.equal(expectedLogEntry);
            });

            it("should return both first and second agents authorized", async () => {
                await expect(
                    registry.getAuthorizedInsertAgents.callAsync(),
                ).to.eventually.deep.equal([AGENT_1, AGENT_2]);
            });
        });

        it("should throw when unauthorized attacker inserts entry", async () => {
            await expect(
                insertEntryFn(generateEntryFn(), { from: AGENT_3 }),
            ).to.eventually.be.rejectedWith(REVERT_ERROR);
        });

        describe("first agent inserts new entry into registry", () => {
            let res: Web3.TransactionReceipt;
            let entry: DebtRegistryEntry;
            let block: Web3.BlockWithoutTransactionData;

            before(async () => {
                entry = generateEntryFn();
                const txHash = await insertEntryFn(entry, { from: AGENT_1 });
                expectedDebtorsDebts.push(entry.getIssuanceHash());
                res = await web3.eth.getTransactionReceipt(txHash);
                block = await web3.eth.getBlock(res.blockNumber);
            });

            it("should emit a log saying the debt is inserted", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogInsertEntry(registry.address, entry);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should make entry retrievable by its hash", async () => {
                const retrievedEntry = await registry.get.callAsync(entry.getIssuanceHash());
                const expectedEntry = [
                    entry.getVersion(),
                    entry.getBeneficiary(),
                    entry.getUnderwriter(),
                    entry.getUnderwriterRiskRating(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                    block.timestamp,
                ];

                _.forEach(retrievedEntry, (value: any, i: number) => {
                    if (isBigNumber(value)) {
                        expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                    } else {
                        expect(value).to.equal(expectedEntry[i]);
                    }
                });
            });

            it("should add entry's issuance hash to first agent's list of debts", async () => {
                await expect(
                    registry.getDebtorsDebts.callAsync(entry.getDebtor()),
                ).to.eventually.deep.equal(expectedDebtorsDebts);
            });

            it("should throw when first agent tries editing entry", async () => {
                await expect(
                    modifyEntryBeneficiaryFn(entry, AGENT_1, { from: AGENT_1 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("second agent inserts new entry into registry", () => {
            let res: Web3.TransactionReceipt;
            let entry: DebtRegistryEntry;
            let block: Web3.BlockWithoutTransactionData;

            before(async () => {
                entry = generateEntryFn();
                const txHash = await insertEntryFn(entry, { from: AGENT_2 });
                expectedDebtorsDebts.push(entry.getIssuanceHash());
                res = await web3.eth.getTransactionReceipt(txHash);
                block = await web3.eth.getBlock(res.blockNumber);
            });

            it("should emit a log saying the debt is inserted", async () => {
                const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                const logExpected = LogInsertEntry(registry.address, entry);

                expect(logReturned).to.deep.equal(logExpected);
            });

            it("should make entry retrievable by its hash", async () => {
                const retrievedEntry = await registry.get.callAsync(entry.getIssuanceHash());
                const expectedEntry = [
                    entry.getVersion(),
                    entry.getBeneficiary(),
                    entry.getUnderwriter(),
                    entry.getUnderwriterRiskRating(),
                    entry.getTermsContract(),
                    entry.getTermsContractParameters(),
                    block.timestamp,
                ];

                _.forEach(retrievedEntry, (value: any, i: number) => {
                    if (isBigNumber(value)) {
                        expect(value).to.bignumber.deep.equal(expectedEntry[i]);
                    } else {
                        expect(value).to.equal(expectedEntry[i]);
                    }
                });
            });

            it("should add entry's issuance hash to debtor's list of debts", async () => {
                await expect(
                    registry.getDebtorsDebts.callAsync(entry.getDebtor()),
                ).to.eventually.deep.equal(expectedDebtorsDebts);
            });

            it("should throw when second agent tries editing entry", async () => {
                await expect(
                    modifyEntryBeneficiaryFn(entry, AGENT_2, { from: AGENT_2 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner authorizes agent(s) for editing entries", () => {
            describe("third agent", () => {
                let txHash: string;

                before(async () => {
                    txHash = await registry.addAuthorizedEditAgent.sendTransactionAsync(AGENT_3);
                });

                it("should emit log broadcasting authorization to edit", async () => {
                    const expectedLogEntry = Authorized(
                        registry.address,
                        AGENT_3,
                        "debt-registry-edit",
                    );
                    const queryResult = await queryLogsForEvent(txHash, EventNames.Authorized);
                    expect(queryResult).to.deep.equal(expectedLogEntry);
                });

                it("should return first agent as authorized", async () => {
                    await expect(
                        registry.getAuthorizedEditAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENT_3]);
                });
            });

            describe("fourth agent", () => {
                let txHash: string;

                before(async () => {
                    txHash = await registry.addAuthorizedEditAgent.sendTransactionAsync(AGENT_4);
                });

                it("should emit log broadcasting authorization to edit", async () => {
                    const expectedLogEntry = Authorized(
                        registry.address,
                        AGENT_4,
                        "debt-registry-edit",
                    );
                    const queryResult = await queryLogsForEvent(txHash, EventNames.Authorized);
                    expect(queryResult).to.deep.equal(expectedLogEntry);
                });

                it("should return third and fourth agent as authorized", async () => {
                    await expect(
                        registry.getAuthorizedEditAgents.callAsync(),
                    ).to.eventually.deep.equal([AGENT_3, AGENT_4]);
                });
            });

            it("should throw when unauthorized attacker edits entry", async () => {
                const entry = generateEntryFn();
                await insertEntryFn(entry, { from: AGENT_1 });
                await expect(
                    modifyEntryBeneficiaryFn(generateEntryFn(), AGENT_2, { from: AGENT_2 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            describe("third agent edits existing entry in registry", () => {
                let res: Web3.TransactionReceipt;
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    const txHash = await modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, {
                        from: AGENT_3,
                    });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit a log saying the debt is edited", () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogModifyEntryBeneficiary(
                        registry.address,
                        entry.getIssuanceHash(),
                        entry.getBeneficiary(),
                        BENEFICIARY_2,
                    );

                    expect(logReturned).to.deep.equal(logExpected);
                });

                it("should reflect changes in stored entry", async () => {
                    const returnedEntry = await registry.get.callAsync(entry.getIssuanceHash());
                    const beneficiary = returnedEntry[1];
                    expect(beneficiary).to.equal(BENEFICIARY_2);
                });
            });

            describe("fourth agent edits existing entry in registry", () => {
                let res: Web3.TransactionReceipt;
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    const txHash = await modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, {
                        from: AGENT_4,
                    });
                    res = await web3.eth.getTransactionReceipt(txHash);
                });

                it("should emit a log saying the debt is edited", () => {
                    const [logReturned] = ABIDecoder.decodeLogs(res.logs);
                    const logExpected = LogModifyEntryBeneficiary(
                        registry.address,
                        entry.getIssuanceHash(),
                        entry.getBeneficiary(),
                        BENEFICIARY_2,
                    );

                    expect(logReturned).to.deep.equal(logExpected);
                });

                it("should reflect changes in stored entry", async () => {
                    const returnedEntry = await registry.get.callAsync(entry.getIssuanceHash());
                    const beneficiary = returnedEntry[1];
                    expect(beneficiary).to.equal(BENEFICIARY_2);
                });
            });

            it("should throw when third agent tries inserting entry", async () => {
                await expect(
                    insertEntryFn(generateEntryFn(), { from: AGENT_3 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            it("should throw when fourth agent tries inserting entry", async () => {
                await expect(
                    insertEntryFn(generateEntryFn(), { from: AGENT_4 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });

            describe("the beneficiary specified is null", () => {
                it("should throw when the second agent attempts to inserts a new entry", async () => {
                    await expect(
                        insertEntryFn(generateEntryFn(NULL_ADDRESS), { from: AGENT_2 }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw when the first agent attempts to insert a new entry", async () => {
                    await expect(
                        insertEntryFn(generateEntryFn(NULL_ADDRESS), { from: AGENT_1 }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw when third agent tries to modify an entry", async () => {
                    await expect(
                        modifyEntryBeneficiaryFn(generateEntryFn(NULL_ADDRESS), AGENT_3),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw when fourth agent tries to modify an entry", async () => {
                    await expect(
                        modifyEntryBeneficiaryFn(generateEntryFn(NULL_ADDRESS), AGENT_4),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });
        });

        describe("owner revokes second agent from inserting entries", () => {
            let txHash: string;

            before(async () => {
                txHash = await registry.revokeInsertAgentAuthorization.sendTransactionAsync(
                    AGENT_2,
                    {
                        from: CONTRACT_OWNER,
                    },
                );
            });

            it("should emit log broadcasting revocation of insert permissions", async () => {
                const expectedLogEntry = AuthorizationRevoked(
                    registry.address,
                    AGENT_2,
                    "debt-registry-insert",
                );
                const queryResult = await queryLogsForEvent(
                    txHash,
                    EventNames.AuthorizationRevoked,
                );
                expect(queryResult).to.deep.equal(expectedLogEntry);
            });

            it("should return second agent as unauthorized", async () => {
                await expect(
                    registry.getAuthorizedInsertAgents.callAsync(),
                ).to.eventually.deep.equal([AGENT_1]);
            });

            it("should throw when second agent inserts entry", async () => {
                await expect(
                    insertEntryFn(generateEntryFn(), { from: AGENT_2 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("owner revokes third agent from editing entries", () => {
            let txHash: string;

            before(async () => {
                txHash = await registry.revokeEditAgentAuthorization.sendTransactionAsync(AGENT_3, {
                    from: CONTRACT_OWNER,
                });
            });

            it("should emit log broadcasting revocation of insert permissions", async () => {
                const expectedLogEntry = AuthorizationRevoked(
                    registry.address,
                    AGENT_3,
                    "debt-registry-edit",
                );
                const queryResult = await queryLogsForEvent(
                    txHash,
                    EventNames.AuthorizationRevoked,
                );
                expect(queryResult).to.deep.equal(expectedLogEntry);
            });

            it("should return third agent as unauthorized", async () => {
                await expect(registry.getAuthorizedEditAgents.callAsync()).to.eventually.deep.equal(
                    [AGENT_4],
                );
            });

            it("should throw when third agent edits entry", async () => {
                await insertEntryFn(generateEntryFn(), { from: AGENT_1 });
                await expect(
                    modifyEntryBeneficiaryFn(generateEntryFn(), BENEFICIARY_2, { from: AGENT_3 }),
                ).to.eventually.be.rejectedWith(REVERT_ERROR);
            });
        });

        describe("Global Invariants", () => {
            describe("No hash collisions on inserts", () => {
                it("should throw on hash collision insert", async () => {
                    const entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });
                    await expect(
                        insertEntryFn(entry, { from: AGENT_1 }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Queries tied to non-existent debt agreements", () => {
                it("should throw when querying for TermsContractParameters", async () => {
                    const NON_EXISTENT_AGREEMENT_ID = web3.sha3("this agreement id does not exist");
                    await expect(
                        registry.getTermsContractParameters.callAsync(NON_EXISTENT_AGREEMENT_ID),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("No edits on non-existent entries", () => {
                it("should throw on non-existent entry edit", async () => {
                    const entry = generateEntryFn();
                    await expect(
                        modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, { from: AGENT_4 }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("No inserts when debt registry is paused", () => {
                before(async () => {
                    await registry.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await registry.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    const entry = generateEntryFn();
                    await expect(insertEntryFn(entry)).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("No edits when debt registry is paused", () => {
                let entry: DebtRegistryEntry;

                before(async () => {
                    entry = generateEntryFn();
                    await insertEntryFn(entry, { from: AGENT_1 });

                    await registry.pause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                after(async () => {
                    await registry.unpause.sendTransactionAsync({ from: CONTRACT_OWNER });
                });

                it("should throw", async () => {
                    await expect(
                        modifyEntryBeneficiaryFn(entry, BENEFICIARY_2, { from: AGENT_1 }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Only owner can authorize and revoke agents", () => {
                it("should throw if non-owner authorizes agent", async () => {
                    await expect(
                        registry.addAuthorizedInsertAgent.sendTransactionAsync(ATTACKER, {
                            from: ATTACKER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    await expect(
                        registry.addAuthorizedEditAgent.sendTransactionAsync(ATTACKER, {
                            from: ATTACKER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should throw if non-owner revokes agent", async () => {
                    await expect(
                        registry.revokeInsertAgentAuthorization.sendTransactionAsync(ATTACKER, {
                            from: ATTACKER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                    await expect(
                        registry.revokeEditAgentAuthorization.sendTransactionAsync(ATTACKER, {
                            from: ATTACKER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            });

            describe("Only owner can transfer ownership", () => {
                it("should throw if non-owner transfers ownership", async () => {
                    await expect(
                        registry.transferOwnership.sendTransactionAsync(ATTACKER, {
                            from: ATTACKER,
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });

                it("should let owner transfer ownership", async () => {
                    await registry.transferOwnership.sendTransactionAsync(NEW_CONTRACT_OWNER, {
                        from: CONTRACT_OWNER,
                    });
                    await expect(registry.owner.callAsync()).to.eventually.equal(
                        NEW_CONTRACT_OWNER,
                    );
                });
            });
        });
    });
});
