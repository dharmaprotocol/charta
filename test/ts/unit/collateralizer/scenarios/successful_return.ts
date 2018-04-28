import { ReturnCollateralScenario } from "../runners/";

// external
import { BigNumber } from "bignumber.js";
import * as moment from "moment";

// utils
import * as Units from "../../../test_utils/units";

const defaultArgs = {
    succeeds: true,
    debtAgreementExists: true,
    debtAgreementCollateralized: true,
    termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
    // Some time past the last date in the repayment schedule.
    termEndTimestamp: (latestBlockTime: number) =>
        moment
            .unix(latestBlockTime)
            .subtract(5, "days")
            .unix(),
};

export const SUCCESSFUL_RETURN_SCENARIOS: ReturnCollateralScenario[] = [
    {
        description: "Debt's term has lapsed and debt has been repaid",
        ...defaultArgs,
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
        from: (collateralizer: string, other: string) => collateralizer,
        agreementId: web3.sha3("Arbitrary 32 byte string for successful return scenario #1"),
    },
    {
        description:
            "Debt's term has lapsed and debt has been more than repaid, called by non-collateralizer",
        ...defaultArgs,
        collateralAmount: Units.ether(0.5),
        gracePeriodInDays: new BigNumber(3),
        valueRepaidToDate: Units.ether(3),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(7, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(2),
            },
        ],
        from: (collateralizer: string, other: string) => other,
        agreementId: web3.sha3("Arbitrary 32 byte string for successful return scenario #2"),
    },
    {
        description:
            "Debt's term has not yet lapsed, and debt has been fully repaid, called by non-collateralizer",
        ...defaultArgs,
        collateralAmount: Units.ether(0.5),
        gracePeriodInDays: new BigNumber(3),
        valueRepaidToDate: Units.ether(3),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .add(1, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(2),
            },
        ],
        from: (collateralizer: string, other: string) => other,
        termEndTimestamp: (latestBlockTime: number) =>
            moment
                .unix(latestBlockTime)
                .add(1, "days")
                .unix(),
        agreementId: web3.sha3("Arbitrary 32 byte string for unsuccessful return scenario #3"),
    },
];
