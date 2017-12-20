import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import * as ABIDecoder from "abi-decoder";

import {DummyContractContract} from "../../types/dummy_contract";
import {PermissionsLibContract} from "../../types/permissions_lib";
import {BigNumberSetup} from "./test_utils/bignumber_setup";
import {chaiSetup} from "./test_utils/chai_setup.js";
import {INVALID_OPCODE} from "./test_utils/constants.js";

// Set up Chai
chaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

const permissionsLibraryContract = artifacts.require("PermissionsLib");
const dummyContract = artifacts.require("DummyContract");

// Initialize ABI Decoder for deciphering log receipts
ABIDecoder.addABI(dummyContract.abi);

contract("Permissions", async (ACCOUNTS) => {
    const USER = ACCOUNTS[0];
    const AGENTS = [ACCOUNTS[1], ACCOUNTS[2], ACCOUNTS[3]];
    const INQUIRER = ACCOUNTS[4];

    const TX_DEFAULTS = { from: USER, gas: 4000000 };

    let permissionsLibrary: PermissionsLibContract;

    before(async () => {
        permissionsLibrary = await permissionsLibraryContract.deployed();
    });

    /**
     * Dummy Contract has two separate Permission sets.  We use three different
     * agents to test expected functionality.
     */
    describe("Library -- Client", async () => {
        let dummyContractInstance: DummyContractContract;

        before(async () => {
            const dummyContractTruffle = await dummyContract.deployed();

            // The typings we use ingest vanilla Web3 contracts, so we convert the
            // contract instance deployed by truffle into a Web3 contract instance
            const dummyContractWeb3Contract =
                web3.eth.contract(dummyContractTruffle.abi)
                    .at(dummyContractTruffle.address);

            dummyContractInstance = new DummyContractContract(dummyContractTruffle, TX_DEFAULTS);
        });

        it("should start with empty permission sets", async () => {
            await expect(dummyContractInstance.getFirstSetAuthorizedAgents.callAsync())
                .to.eventually.deep.equal([]);
        });

        describe("authorizations", () => {
            it("starts with all agents unauthorized", async () => {
                for (let i = 0; i < AGENTS.length; i++) {
                    const authorized = await dummyContractInstance.isAuthorizedInFirstSet.callAsync(AGENTS[i])
                    expect(authorized).to.be.false;
                }
                for (let i = 0; i < AGENTS.length; i++) {
                    const authorized = await dummyContractInstance.isAuthorizedInSecondSet.callAsync(AGENTS[i])
                    expect(authorized).to.be.false;
                }
            });

            describe("user authorizes first agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(AGENTS[0], { from: USER });
                });

                it("authorizes first agent in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[0])).to.eventually.equal(true);
                });

                it("doesn't authorize first agent in second set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInSecondSet.callAsync(AGENTS[0])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    await expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents.callAsync())
                        .to.eventually.deep.equal([AGENTS[0]]);
                });
            });

            describe("user authorizes second agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(AGENTS[1]);
                });

                it("authorizes second agent in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[1])).to.eventually.equal(true);
                });

                it("maintains first agent authorization in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[0])).to.eventually.equal(true);
                });

                it("doesn't authorize second agent in second set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInSecondSet.callAsync(AGENTS[1])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    await expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents.callAsync())
                        .to.eventually.deep.equal([AGENTS[0], AGENTS[1]]);
                });
            });

            describe("user authorizes third agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInFirstSet.sendTransactionAsync(AGENTS[2]);
                });

                it("authorizes third agent in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[2])).to.eventually.equal(true);
                });

                it("doesn't authorize third agent in second set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInSecondSet.callAsync(AGENTS[2])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for second set", async () => {
                    await expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents.callAsync())
                        .to.eventually
                        .deep.equal([AGENTS[0], AGENTS[1], AGENTS[2]]);
                });
            });

            describe("user authorizes third agent in second set", () => {
                before(async () => {
                    await dummyContractInstance.authorizeInSecondSet.sendTransactionAsync(AGENTS[2]);
                });

                it("authorizes third agent in second set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInSecondSet.callAsync(AGENTS[2])).to.eventually.equal(true);
                });

                it("maintains third agent authorization in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[2])).to.eventually.equal(true);
                });

                it("returns correct authorized agents for second set", async () => {
                    await expect(dummyContractInstance
                        .getSecondSetAuthorizedAgents.callAsync())
                        .to.eventually.deep.equal([AGENTS[2]]);
                });
            });
        });

        describe("revocations", () => {
            describe("user revokes second agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInFirstSet.sendTransactionAsync(AGENTS[1]);
                });

                it("revokes second agent in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[1])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    await expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents.callAsync())
                        .to.eventually.deep.equal([AGENTS[0], AGENTS[2]]);
                });
            });

            describe("user revokes third agent in first set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInFirstSet.sendTransactionAsync(AGENTS[2]);
                });

                it("revokes third agent in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInFirstSet.callAsync(AGENTS[2])).to.eventually.equal(false);
                });

                it("maintains third agent authorization in second set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInSecondSet.callAsync(AGENTS[2])).to.eventually.equal(true);
                });

                it("returns correct authorized agents for first set", async () => {
                    await expect(dummyContractInstance
                        .getFirstSetAuthorizedAgents.callAsync())
                        .to.eventually.deep.equal([AGENTS[0]]);
                });
            });

            describe("user revokes third agent in second set", () => {
                before(async () => {
                    await dummyContractInstance.revokeInSecondSet.sendTransactionAsync(AGENTS[2]);
                });

                it("revokes third agent in first set", async () => {
                    await expect(dummyContractInstance
                        .isAuthorizedInSecondSet.callAsync(AGENTS[2])).to.eventually.equal(false);
                });

                it("returns correct authorized agents for first set", async () => {
                    await expect(dummyContractInstance
                        .getSecondSetAuthorizedAgents.callAsync())
                        .to.eventually.deep.equal([]);
                });
            });
        });
    });
});
