import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import {DummyContractInstance,
    PermissionsLibraryContractInstance} from "../../types/contracts";
import {chaiSetup} from "./utils/chai_setup.js";
import {INVALID_OPCODE} from "./utils/constants.js";

chaiSetup.configure();
const expect = chai.expect;

const permissionsLibraryContract = artifacts.require("Permissions");
const dummyContract = artifacts.require("DummyContract");

contract("Permissions", (ACCOUNTS) => {
    const OWNER = ACCOUNTS[0];
    const PERMITTED_AGENT_0 = ACCOUNTS[1];
    const PERMITTED_AGENT_1 = ACCOUNTS[2];
    const PERMITTED_AGENT_2 = ACCOUNTS[3];
    const INQUIRER = ACCOUNTS[4];

    let permissionsLibrary: PermissionsLibraryContractInstance;

    before(async () => {
        permissionsLibrary = await permissionsLibraryContract.deployed();
    });

    /**
     * Class of tests for ensuring calls on the library contract *itself*
     * don't affect the state of permissions across the rest of the contracts.
     */
    describe("Library -- Contract", async () => {
        it("should throw when anyone adds authorized agent", async () => {
            ACCOUNTS.forEach((account) => {
                expect(permissionsLibrary.authorize(OWNER, { from: account }))
                    .to.be.rejectedWith(INVALID_OPCODE);
            });
        });

        it("should return empty authorized agents list", async () => {
            expect(permissionsLibrary.getAuthorizedAgents())
                .to.eventually.equal([]);
        });
    });

    /**
     * Class of tests for ensuring calls on clients of the library contract
     * have correct functionality.
     */
    // describe("Library -- Client", async () => {
    //
    // })
});
