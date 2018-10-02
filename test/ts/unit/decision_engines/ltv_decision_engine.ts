// External Libraries
import * as chai from "chai";
import * as moment from "moment";
import * as _ from "lodash";
// Test Utils
import ChaiSetup from "../../test_utils/chai_setup";
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import { Web3Utils } from "../../../../utils/web3_utils";
import { LTVDecisionEngineContract } from "../../../../types/generated/l_t_v_decision_engine";
import { BigNumber } from "bignumber.js";

import { SignableCreditorCommitment } from "./signable_creditor_commitment";

import { LTVCreditorCommitmentParams, LTVScenario } from "./ltv_creditor_commitment_params";

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

async function generateTimestamp(daysInFuture = 30) {
    const latestBlockTime = await web3Utils.getLatestBlockTime();

    return new BigNumber(
        moment
            .unix(latestBlockTime)
            .add(daysInFuture, "days")
            .unix(),
    );
}

contract("LTV Decision Engine (unit)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const PRICE_FEED_OPERATOR = ACCOUNTS[1];
    const DEBTOR = ACCOUNTS[2];
    const CREDITOR = ACCOUNTS[3];

    const PRINCIPAL_TOKEN = ACCOUNTS[4];
    const COLLATERAL_TOKEN = ACCOUNTS[5];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let decisionEngine: LTVDecisionEngineContract;

    before(async () => {
        decisionEngine = await LTVDecisionEngineContract.deployed(web3, TX_DEFAULTS);
    });

    describe("#isExpired", () => {
        describe("when given a date in the future", () => {
            it("returns false", async () => {
                const result = await decisionEngine.isExpired.callAsync(
                    await generateTimestamp(),
                );

                expect(result).to.eq(false);
            });
        });

        describe("when given a date in the past", () => {
            it("returns true", async () => {
                const result = await decisionEngine.isExpired.callAsync(
                    await generateTimestamp(-10),
                );

                expect(result).to.eq(true);
            });
        });
    });

    describe("#isValidSignature", () => {
        let validParams: LTVCreditorCommitmentParams;

        before(async () => {
            validParams = {
                maxLTV: new BigNumber(88),
                priceFeedOperator: PRICE_FEED_OPERATOR,
                decisionEngine: decisionEngine.address,
                collateralToken: COLLATERAL_TOKEN,
                principalToken: PRINCIPAL_TOKEN,
                principalAmount: new BigNumber(1),
                expirationTimestamp: await generateTimestamp(),
            };
        });

        describe("when given a valid signature", () => {
            it("returns true", async () => {
                const hash = SignableCreditorCommitment.getHashForParams(validParams);

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

        describe("when given an invalid signature", () => {
            it("returns false", async () => {
                // We will sign these parameters, and pass the signature to #isValidSignature.
                const hashForSignedParams = SignableCreditorCommitment.getHashForParams(validParams);
                // We will pass this hash to #isValidSignature.
                const unsignedParams = _.extend(validParams, { maxLTV: 87 });
                const hashForUnsignedParams = SignableCreditorCommitment.getHashForParams(unsignedParams);

                const commitmentForSignedParams = new SignableCreditorCommitment(hashForSignedParams);
                const signature = await commitmentForSignedParams.getSignature(web3, CREDITOR);

                // The incorrect signature is used
                const isValid = await decisionEngine.isValidSignature.callAsync(
                    CREDITOR,
                    hashForUnsignedParams,
                    signature.v,
                    signature.r,
                    signature.s,
                );

                expect(isValid).to.eq(false);
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
        let evaluateScenario: LTVScenario;
        let defaultCommitmentParams: LTVCreditorCommitmentParams;

        before(async () => {
            const timestamp = await generateTimestamp();

            defaultCommitmentParams = {
                priceFeedOperator: PRICE_FEED_OPERATOR,
                collateralToken: COLLATERAL_TOKEN,
                principalToken: PRINCIPAL_TOKEN,
                principalAmount: new BigNumber(1),
                maxLTV: new BigNumber(88),
                decisionEngine: decisionEngine.address,
                expirationTimestamp: timestamp,
            };
        });

        describe("when given a ratio that is lower than the specified LTV", () => {
            before(async () => {
                const hash = SignableCreditorCommitment.getHashForParams(
                    defaultCommitmentParams,
                );

                const commitment = new SignableCreditorCommitment(hash);

                const signature = await commitment.getSignature(web3, CREDITOR);

                evaluateScenario = {
                    ...defaultCommitmentParams,
                    creditor: CREDITOR,
                    principalTokenPrice: new BigNumber(13),
                    collateralTokenPrice: new BigNumber(15),
                    principalAmount: new BigNumber(1),
                    collateralAmount: new BigNumber(1),
                    creditorCommitmentHash: hash,
                    creditorSignature: signature,
                    txData: TX_DEFAULTS,
                };
            });

            it("returns true", async () => {
                const result = await decisionEngine.evaluate.callAsync(
                    evaluateScenario.priceFeedOperator,
                    evaluateScenario.principalTokenPrice,
                    evaluateScenario.collateralTokenPrice,
                    evaluateScenario.principalAmount,
                    evaluateScenario.collateralAmount,
                    evaluateScenario.maxLTV,
                    evaluateScenario.expirationTimestamp,
                    evaluateScenario.creditor,
                    evaluateScenario.creditorCommitmentHash,
                    evaluateScenario.creditorSignature.v,
                    evaluateScenario.creditorSignature.r,
                    evaluateScenario.creditorSignature.s,
                );

                expect(result).to.eq(true);
            });
        });

        describe("when given a ratio that is higher than the specified LTV", () => {
            before(async () => {
                const timestamp = await generateTimestamp();

                const commitmentParams = {
                    ...defaultCommitmentParams,
                    maxLTV: new BigNumber(86),
                };

                const hash = SignableCreditorCommitment.getHashForParams(
                    commitmentParams,
                );

                const commitment = new SignableCreditorCommitment(hash);

                const signature = await commitment.getSignature(web3, CREDITOR);

                evaluateScenario = {
                    ...commitmentParams,
                    creditor: CREDITOR,
                    principalTokenPrice: new BigNumber(13),
                    collateralTokenPrice: new BigNumber(15),
                    principalAmount: new BigNumber(1),
                    collateralAmount: new BigNumber(1),
                    expirationTimestamp: timestamp,
                    creditorCommitmentHash: hash,
                    creditorSignature: signature,
                    txData: TX_DEFAULTS,
                };
            });

            it("returns false", async () => {
                const result = await decisionEngine.evaluate.callAsync(
                    evaluateScenario.priceFeedOperator,
                    evaluateScenario.principalTokenPrice,
                    evaluateScenario.collateralTokenPrice,
                    evaluateScenario.principalAmount,
                    evaluateScenario.collateralAmount,
                    evaluateScenario.maxLTV,
                    evaluateScenario.expirationTimestamp,
                    evaluateScenario.creditor,
                    evaluateScenario.creditorCommitmentHash,
                    evaluateScenario.creditorSignature.v,
                    evaluateScenario.creditorSignature.r,
                    evaluateScenario.creditorSignature.s,
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
});
