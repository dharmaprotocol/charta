// External Libraries
import * as chai from "chai";
// Test Utils
import ChaiSetup from "../../test_utils/chai_setup";
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import { Web3Utils } from "../../../../utils/web3_utils";
import { LTVDecisionEngineContract } from "../../../../types/generated/l_t_v_decision_engine";
import { TxData } from "../../../../types/common";
import { BigNumber } from "bignumber.js";
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

interface EvaluateParams {
    priceFeedOperator: string;
    creditor: string;
    principalTokenPrice: BigNumber;
    collateralTokenPrice: BigNumber;
    principalAmount: BigNumber;
    collateralAmount: BigNumber;
    maxLTV: BigNumber;
    creditorSignature: string;
    expirationTimestamp: BigNumber;
    txData: TxData;
}

contract("LTV Decision Engine (unit)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const PRICE_FEED_OPERATOR = ACCOUNTS[1];
    const DEBTOR = ACCOUNTS[2];
    const CREDITOR = ACCOUNTS[3];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let decisionEngine: LTVDecisionEngineContract;

    before(async () => {
        decisionEngine = await LTVDecisionEngineContract.deployed(web3, TX_DEFAULTS);
    });

    describe("#computeLTV", () => {
        describe("when given a principal price of 13 and collateral price of 15", () => {
            describe("when given an principal amount of 1 and a collateral price of 1", () => {
                it("returns 86", async () => {
                    const args = {
                        principalTokenPrice: new BigNumber(13),
                        collateralTokenPrice: new BigNumber(15),
                        principalAmount: new BigNumber(1),
                        collateralAmount: new BigNumber(1),
                    };

                    const result = await decisionEngine.computeLTV.callAsync(
                        args.principalTokenPrice,
                        args.collateralTokenPrice,
                        args.principalAmount,
                        args.collateralAmount,
                    );

                    expect(result.toString()).to.eq("86");
                });
            });
        });
    });

    describe("#evaluate", () => {
        let evaluateArgs: EvaluateParams;

        describe("when given a ratio that is lower than the specified LTV", () => {
            before(() => {
                evaluateArgs = {
                    priceFeedOperator: PRICE_FEED_OPERATOR,
                    creditor: CREDITOR,
                    // Specify an LTV of 87%
                    principalTokenPrice: new BigNumber(13),
                    collateralTokenPrice: new BigNumber(15),
                    principalAmount: new BigNumber(1),
                    collateralAmount: new BigNumber(1),
                    // Define the max LTV as 88%
                    maxLTV: new BigNumber(88),
                    creditorSignature: "x0x0",
                    expirationTimestamp: new BigNumber(123),
                    txData: TX_DEFAULTS,
                };
            });

            it("returns true", async () => {
                const result = await decisionEngine.evaluate.callAsync(
                    evaluateArgs.priceFeedOperator,
                    evaluateArgs.creditor,
                    evaluateArgs.principalTokenPrice,
                    evaluateArgs.collateralTokenPrice,
                    evaluateArgs.principalAmount,
                    evaluateArgs.collateralAmount,
                    evaluateArgs.maxLTV,
                    evaluateArgs.creditorSignature,
                    evaluateArgs.expirationTimestamp,
                );

                expect(result).to.eq(true);
            });
        });

        describe("when given a ratio that is higher than the specified LTV", () => {
            before(() => {
                evaluateArgs = {
                    priceFeedOperator: PRICE_FEED_OPERATOR,
                    creditor: CREDITOR,
                    // Specify an LTV of 87%
                    principalTokenPrice: new BigNumber(13),
                    collateralTokenPrice: new BigNumber(15),
                    principalAmount: new BigNumber(1),
                    collateralAmount: new BigNumber(1),
                    // Define the max LTV as 86%
                    maxLTV: new BigNumber(86),
                    creditorSignature: "x0x0",
                    expirationTimestamp: new BigNumber(123),
                    txData: TX_DEFAULTS,
                };
            });

            it("returns false", async () => {
                const result = await decisionEngine.evaluate.callAsync(
                    evaluateArgs.priceFeedOperator,
                    evaluateArgs.creditor,
                    evaluateArgs.principalTokenPrice,
                    evaluateArgs.collateralTokenPrice,
                    evaluateArgs.principalAmount,
                    evaluateArgs.collateralAmount,
                    evaluateArgs.maxLTV,
                    evaluateArgs.creditorSignature,
                    evaluateArgs.expirationTimestamp,
                );

                expect(result).to.eq(false);
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
})
;
