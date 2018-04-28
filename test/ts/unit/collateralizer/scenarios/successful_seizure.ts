import { SeizeCollateralScenario, TestContracts } from "../runners/";

// external
import { BigNumber } from "bignumber.js";
import * as moment from "moment";

// utils
import * as Units from "../../../test_utils/units";

const defaultArgs = {
    collateralAmount: Units.ether(1),
    gracePeriodInDays: new BigNumber(7),
    valueRepaidToDate: Units.ether(0),
    expectedRepaymentValueSchedule: [
        {
            timestamp: (latestBlockTime: number) =>
                moment
                    .unix(latestBlockTime)
                    .subtract(8, "days")
                    .unix(),
            expectedRepaymentValue: Units.ether(0.5),
        },
    ],
    termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
    beneficiary: (originalBeneficiary: string, other: string) => originalBeneficiary,
    from: (beneficiary: string, other: string) => beneficiary,
    debtAgreementExists: true,
    debtAgreementCollateralized: true,
    validTermsContract: true,
    succeeds: true,
};

export const SUCCESSFUL_SEIZURE_SCENARIOS: SeizeCollateralScenario[] = [
    {
        description:
            "(Grace Period = 0 Days) Debt entered default > grace period's length ago, no repayments since",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(0),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(1, "hours")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #1"),
    },
    {
        description:
            "(Grace Period = 0 Days) Debt entered default > grace period's length ago, from non-beneficiary",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(0),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(1, "hours")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        from: (beneficiary: string, other: string) => other,
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #2"),
    },
    {
        description:
            "(Grace Period = 0 Days) Debt entered default > grace period's length ago, insufficient repayment since",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(0),
        valueRepaidToDate: Units.ether(0.5).minus(1),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(1, "hours")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #3"),
    },
    {
        description:
            "(Grace Period = 7 Days) Debt entered default > grace period's length ago, no repayments since",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(7),
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #4"),
    },
    {
        description:
            "(Grace Period = 7 Days) Debt entered default > grace period's length ago, from non-beneficiary",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(7),
        from: (beneficiary: string, other: string) => other,
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #5"),
    },
    {
        description:
            "(Grace Period = 7 Days) Debt entered default > grace period's length ago, insufficient repayments since",
        ...defaultArgs,
        valueRepaidToDate: Units.ether(0.5).minus(1),
        gracePeriodInDays: new BigNumber(7),
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #6"),
    },
    {
        description:
            "(Grace Period = 90 Days) Debt entered default > grace period's length ago, no repayments since",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(90),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(91, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #7"),
    },
    {
        description:
            "(Grace Period = 90 Days) Debt entered default > grace period's length ago, from non-beneficiary",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(90),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(91, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        from: (beneficiary: string, other: string) => other,
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #8"),
    },
    {
        description:
            "(Grace Period = 90 Days) Debt entered default > grace period's length ago, insufficient repayments since",
        ...defaultArgs,
        valueRepaidToDate: Units.ether(0.5).minus(1),
        gracePeriodInDays: new BigNumber(90),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(91, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        agreementId: web3.sha3("Arbitrary 32 byte id for successful seizure scenario #9"),
    },
];
