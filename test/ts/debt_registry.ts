import * as BigNumber from "bignumber.js";
import * as chai from "chai";
import {DebtRegistryContractInstance} from "../../types/contracts";
import {chaiSetup} from "./utils/chai_setup.js";

chaiSetup.configure();
const expect = chai.expect;

const debtRegistryContract = artifacts.require("DebtRegistry");

contract("Debt Registry", (accounts) => {
    let registry: DebtRegistryContractInstance;

    before(async () => {
        registry = await debtRegistryContract.deployed();
    });
});
