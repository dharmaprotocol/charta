import { SeizeCollateralScenario } from "../runners/";

// external
import { BigNumber } from "bignumber.js";
import * as moment from "moment";
import * as _ from "lodash";

// utils
import * as Units from "../../../test_utils/units";

// wrappers
import { CollateralizerContract } from "types/generated/collateralizer";
import { MockCollateralizedTermsContractContract } from "types/generated/mock_collateralized_terms_contract";

const defaultArgs = {
    collateralAmount: Units.ether(1),
    gracePeriodInDays: new BigNumber(7),
    valueRepaidToDate: Units.ether(0.5).minus(1),
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
    succeeds: false,
};

export const UNSUCCESSFUL_SEIZURE_SCENARIOS: SeizeCollateralScenario[] = [
    {
        description: "Debt agreement does not exist",
        ...defaultArgs,
        debtAgreementExists: false,
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #0"),
    },
    {
        description: "Debt agreement does not point to collateralized terms contract",
        ...defaultArgs,
        termsContract: (collateralizedContract: string, attacker: string) => attacker,
        validTermsContract: false,
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #1"),
    },
    {
        description:
            "Debt agreement points to collateralized terms contract but was never itself collateralized",
        ...defaultArgs,
        debtAgreementCollateralized: false,
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #2"),
    },
    {
        description: "(Grace Period = 0 Days) Debt is not currently in state of default",
        ...defaultArgs,
        valueRepaidToDate: _.last(defaultArgs.expectedRepaymentValueSchedule)
            .expectedRepaymentValue,
        gracePeriodInDays: new BigNumber(0),
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #3"),
    },
    {
        description: "(Grace Period = 7 Days) Debt is not currently in state of default",
        ...defaultArgs,
        valueRepaidToDate: _.last(defaultArgs.expectedRepaymentValueSchedule)
            .expectedRepaymentValue,
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #4"),
    },
    {
        description:
            "(Grace Period = 7 Days) Debt is currently in default, but grace period has not elapsed",
        ...defaultArgs,
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(6, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #5"),
    },
    {
        description: "(Grace Period = 90 Days) Debt is not currently in state of default",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(90),
        valueRepaidToDate: Units.ether(0.5),
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #6"),
    },
    {
        description:
            "(Grace Period = 90 Days) Debt is currently in default, but grace period has not elapsed",
        ...defaultArgs,
        gracePeriodInDays: new BigNumber(90),
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(89, "days")
                        .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
        ],
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #7"),
    },
    {
        description: "Collateral has already been seized",
        ...defaultArgs,
        before: async (collateralizerContract: CollateralizerContract) => {
            await collateralizerContract.seizeCollateral.sendTransactionAsync(
                web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #8"),
            );
        },
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #8"),
    },
    {
        description: "Collateral has already been returned",
        ...defaultArgs,
        valueRepaidToDate: Units.ether(0.5),
        before: async (
            collateralizerContract: CollateralizerContract,
            termsContract: MockCollateralizedTermsContractContract,
        ) => {
            const agreementId = web3.sha3(
                "Arbitrary 32 byte id for unsuccessful seizure scenario #9",
            );

            // Mock the debt term's ending timestamp as having lapsed so that we can return collateral
            await termsContract.mockTermEndTimestamp.sendTransactionAsync(
                agreementId,
                new BigNumber(0),
            );

            await collateralizerContract.returnCollateral.sendTransactionAsync(agreementId);
        },
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #9"),
    },
    {
        description: "Expected repayment and value repaid to date both at 0",
        ...defaultArgs,
        expectedRepaymentValueSchedule: [
            {
                timestamp: (latestBlockTime: number) =>
                    moment
                        .unix(latestBlockTime)
                        .subtract(6, "days")
                        .unix(),
                expectedRepaymentValue: new BigNumber(0),
            },
        ],
        valueRepaidToDate: new BigNumber(0),
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful seizure scenario #10"),
    },
];
