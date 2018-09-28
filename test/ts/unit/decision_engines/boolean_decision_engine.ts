// External Libraries
import * as chai from "chai";
// Test Utils
import ChaiSetup from "../../test_utils/chai_setup";
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import { Web3Utils } from "../../../../utils/web3_utils";
// Types
// Logs
// Factories
// Wrappers
// Constants

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up utils
const web3Utils = new Web3Utils(web3);

const ltvDecisionEngine = artifacts.require("LTVDecisionEngine");

contract("LTV Decision Engine (unit)", async (ACCOUNTS) => {
    describe("when given a ratio that is lower than the specified LTV", () => {
        it("returns false", () => {
            // STUB.
        });
    });

    describe("when given a ratio that is higher than the specified LTV", () => {
        it("returns true", () => {
            // STUB.
        });
    });

    describe("when given a collateral price that is not signed by the price feed operator", () => {
        it("reverts", () => {
            // STUB.
        });

        it("logs and error that the price was not signed", () => {

        });
    });

    describe("when given a principal price that is not signed by the price feed operator", () => {
        it("reverts the transaction", () => {
            // STUB
        });

        it("throws an error that the price was not signed", () => {
            // STUB.
        });
    });
});
