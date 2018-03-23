import { ReturnCollateralScenario, TestContracts } from "../runners/";

// external
import { BigNumber } from "bignumber.js";
import * as moment from "moment";

// utils
import * as Units from "../../../test_utils/units";

export const SUCCESSFUL_RETURN_SCENARIOS: ReturnCollateralScenario[] = [
    {
        description: "Debt's term has lapsed and debt has been repaid",
        collateralAmount: Units.ether(3),
        gracePeriodInDays: new BigNumber(7),
        valueRepaidToDate: Units.ether(1),
        expectedRepaymentValueSchedule: [
            {
                timestamp: moment()
                    .subtract(14, "days")
                    .unix(),
                expectedRepaymentValue: Units.ether(0.5),
            },
            {
                timestamp: moment()
                    .subtract(7, "days")
                    .unix(),
                expectedRepaymentValue: Units.ether(1),
            },
        ],
        termEndTimestamp: moment()
            .subtract(1, "hours")
            .unix(),
        termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
        from: (collateralizer: string, other: string) => collateralizer,
        debtAgreementExists: true,
        debtAgreementCollateralized: true,
        succeeds: true,
        agreementId: web3.sha3("Arbitrary 32 byte string for successful return scenario #1"),
    },
    {
        description:
            "Debt's term has lapsed and debt has been more than repaid, called by non-collateralizer",
        collateralAmount: Units.ether(0.5),
        gracePeriodInDays: new BigNumber(3),
        valueRepaidToDate: Units.ether(3),
        expectedRepaymentValueSchedule: [
            {
                timestamp: moment()
                    .subtract(7, "days")
                    .unix(),
                expectedRepaymentValue: Units.ether(2),
            },
        ],
        termEndTimestamp: moment()
            .subtract(10, "days")
            .unix(),
        termsContract: (collateralizedContract: string, attacker: string) => collateralizedContract,
        from: (collateralizer: string, other: string) => other,
        debtAgreementExists: true,
        debtAgreementCollateralized: true,
        succeeds: true,
        agreementId: web3.sha3("Arbitrary 32 byte string for successful return scenario #2"),
    },
];
