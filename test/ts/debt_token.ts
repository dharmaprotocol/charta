import {
    DebtRegistryContractInstance,
    DebtTokenContractInstance,
} from "../../types/contracts";
import {chaiSetup} from "./test_utils/chai_setup.js";

chaiSetup.configure();
const expect = chai.expect;

const debtTokenContract = artifacts.require("DebtToken");
const debtRegistryContract = artifacts.require("DebtRegistry");

contract("Debt Token", (ACCOUNTS) => {
    let token: DebtTokenContractInstance;
    let registry: DebtRegistryContractInstance;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const TOKEN_HOLDER_1 = ACCOUNTS[1];
    const TOKEN_HOLDER_2 = ACCOUNTS[2];
    const TOKEN_HOLDER_3 = ACCOUNTS[3];

    before(async () => {
        token = await debtTokenContract.deployed();
        registry = await debtRegistryContract.deployed();
    });

    describe("initialization by contract owner", async () => {
        it("should link DebtToken to DebtRegistry address");
        it("should authorize DebtToken to edit registry");
        it("should not authorize DebtToken to insert into registry");
    });

    describe("getters", async () => {

    });

    describe("#transfer()")
});
