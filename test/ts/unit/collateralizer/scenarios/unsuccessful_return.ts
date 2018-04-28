import { ReturnCollateralScenario } from "../runners/";

// external
import { BigNumber } from "bignumber.js";
import * as moment from "moment";
import * as _ from "lodash";

// utils
import * as Units from "../../../test_utils/units";

// wrappers
import { CollateralizerContract } from "types/generated/collateralizer";
import { MockCollateralizedTermsContractContract } from "../../../../../types/generated/mock_collateralized_terms_contract";

const defaultArgs = {
    collateralAmount: Units.ether(3),
    gracePeriodInDays: new BigNumber(7),
    valueRepaidToDate: Units.ether(1),
    expectedRepaymentValueSchedule: [
        {
            timestamp: (latestBlockTime: number) =>
                moment
                    .unix(latestBlockTime)
                    .subtract(14, "days")
                    .unix(),
            expectedRepaymentValue: Units.ether(0.5),
        },
        {
            timestamp: (latestBlockTime: number) =>
                moment
                    .unix(latestBlockTime)
                    .subtract(7, "days")
                    .unix(),
            expectedRepaymentValue: Units.ether(1),
        },
    ],
    termEndTimestamp: (latestBlockTime: number) =>
        moment
            .unix(latestBlockTime)
            .subtract(1, "hours")
            .unix(),
    termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
    from: (collateralizer: string, other: string) => collateralizer,
    debtAgreementExists: true,
    debtAgreementCollateralized: true,
    succeeds: false,
};

export const UNSUCCESSFUL_RETURN_SCENARIOS: ReturnCollateralScenario[] = [
    {
        description: "Debt agreement does not exist",
        ...defaultArgs,
        debtAgreementExists: false,
        agreementId: web3.sha3("Arbitrary 32 byte string for unsuccessful return scenario #1"),
    },
    {
        description: "Debt agreement is not collateralized in this contract",
        ...defaultArgs,
        debtAgreementCollateralized: false,
        agreementId: web3.sha3("Arbitrary 32 byte string for unsuccessful return scenario #2"),
    },
    {
        description: "Debt's term has lapsed BUT debt has NOT been repaid",
        ...defaultArgs,
        valueRepaidToDate: Units.ether(0),
        agreementId: web3.sha3("Arbitrary 32 byte string for unsuccessful return scenario #4"),
    },
    {
        description: "Debt's term has lapsed BUT debt has only PARTIALLY been repaid",
        ...defaultArgs,
        valueRepaidToDate: _.last(
            defaultArgs.expectedRepaymentValueSchedule,
        ).expectedRepaymentValue.minus(1),
        agreementId: web3.sha3("Arbitrary 32 byte string for unsuccessful return scenario #5"),
    },
    {
        description: "Debt's term has lapsed BUT collateral has already been seized",
        ...defaultArgs,
        valueRepaidToDate: Units.ether(0),
        before: async (
            collateralizerContract: CollateralizerContract,
            termsContract: MockCollateralizedTermsContractContract,
        ) => {
            const agreementId = web3.sha3(
                "Arbitrary 32 byte string for unsuccessful return scenario #6",
            );

            await collateralizerContract.seizeCollateral.sendTransactionAsync(agreementId);

            // We mock the debt as subsequently having been repaid
            await termsContract.mockDummyValueRepaid.sendTransactionAsync(
                agreementId,
                Units.ether(1),
            );
        },
        agreementId: web3.sha3("Arbitrary 32 byte string for unsuccessful return scenario #6"),
    },
];
