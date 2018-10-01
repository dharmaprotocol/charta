// External Libraries
import * as chai from "chai";
import * as moment from "moment";
// Test Utils
import ChaiSetup from "../../test_utils/chai_setup";
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import { Web3Utils } from "../../../../utils/web3_utils";
import { LTVDecisionEngineContract } from "../../../../types/generated/l_t_v_decision_engine";
import { BigNumber } from "bignumber.js";

import { SignableCreditorCommitment } from "./signable_creditor_commitment";

import { LTVCreditorCommitmentParams } from "./ltv_creditor_commitment_params";

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

contract("LTV Decision Engine (unit)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const PRICE_FEED_OPERATOR = ACCOUNTS[1];
    const DEBTOR = ACCOUNTS[2];
    const CREDITOR = ACCOUNTS[3];

    const PRINCIPAL_TOKEN = ACCOUNTS[4];
    const COLLATERAL_TOKEN = ACCOUNTS[5];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let decisionEngine: LTVDecisionEngineContract;

    let latestBlockTime: number;

    before(async () => {
        decisionEngine = await LTVDecisionEngineContract.deployed(web3, TX_DEFAULTS);
        latestBlockTime = await web3Utils.getLatestBlockTime();
    });

    describe("#isValidSignature", () => {
        describe("when given a valid signature", () => {
            it.only("returns true", async () => {
                const params: LTVCreditorCommitmentParams = {
                    maxLTV: new BigNumber(88),
                    priceFeedOperator: PRICE_FEED_OPERATOR,
                    decisionEngine: decisionEngine.address,
                    collateralToken: COLLATERAL_TOKEN,
                    principalToken: PRINCIPAL_TOKEN,
                    principalAmount: new BigNumber(1),
                    expirationTimestamp: new BigNumber(
                        moment
                            .unix(latestBlockTime)
                            .add(30, "days")
                            .unix(),
                    ),
                };

                const hash = SignableCreditorCommitment.getHashForParams(params);

                const commitment = new SignableCreditorCommitment(hash);

                const signature = await commitment.getSignature(web3, CREDITOR);

                const isValid = await decisionEngine.isValidSignature.callAsync(
                    CREDITOR,
                    hash,
                    signature.v,
                    signature.r,
                    signature.s,
                );

                expect(isValid).to.eq(true);
            });
        });
    });

    describe("#computeLTV", () => {
        describe("when given a principal price of 13 and collateral price of 15", () => {
            describe("when given an principal amount of 1 and a collateral price of 1", () => {
                it("returns 8666", async () => {
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

                    expect(result.toString()).to.eq("8666");
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

        describe("when given a creditor signature that is invalid", () => {
            it("returns false", () => {
                // STUB.
            });

            it("logs an error that the creditor signature is invalid", () => {
                // STUB
            });
        });

        describe("when given a collateral price that is not signed by the price feed operator", () => {
            it("reverts", () => {
                // STUB.
            });

            it("logs and error that the price was not signed", () => {
                // STUB.
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
