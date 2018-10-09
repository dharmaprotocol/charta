import * as chai from "chai";
import * as Units from "../test_utils/units";
import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import * as _ from "lodash";
import { Web3Utils } from "../../../utils/web3_utils";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const web3Utils = new Web3Utils(web3);

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Dharma Contracts
import { LTVDecisionEngineContract } from "../../../types/generated/l_t_v_decision_engine";

contract("Migration #8: Deploy Creditor Proxy", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let decisionEngine: LTVDecisionEngineContract;

    before(async () => {
        decisionEngine = await LTVDecisionEngineContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Deployment", () => {
        it("should deploy the `LTVDecisionEngine` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(decisionEngine.address)).to
                .eventually.be.true;
        });
    });
});
