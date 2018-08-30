import * as chai from "chai";
import { Web3Utils } from "../../../utils/web3_utils";

import ChaiSetup from "../test_utils/chai_setup";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const web3Utils = new Web3Utils(web3);

// Types
import { MigrationsContract } from "../../../types/generated/migrations";

contract("Migration #1: Deploying Migrations Contract", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let migrations: MigrationsContract;

    before(async () => {
        migrations = await MigrationsContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Deployment", () => {
        it("should deploy the `MigrationsContract` contract to the current network", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(migrations.address)
            ).to.eventually.be.true;
        });
    });
});
