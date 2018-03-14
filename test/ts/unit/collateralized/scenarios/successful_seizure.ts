import { SeizeCollateralScenario, TestContracts } from "../runners/";

// external
import { BigNumber } from "bignumber.js";
import * as moment from "moment";

// utils
import * as Units from "../../../test_utils/units";

const defaultArgs = {
    collateralAmount: Units.ether(1),
    gracePeriodInDays: new BigNumber(7),
    valueRepaidToDate: Units.ether(0.4),
    expectedRepaymentValueSchedule: [
        {
            timestamp: moment()
                .subtract(8, "days")
                .unix(),
            expectedRepaymentValue: Units.ether(0.5),
        },
    ],
    beneficiary: (originalBeneficiary: string, other: string) => originalBeneficiary,
    succeeds: true,
};

export const SUCCESSFUL_SEIZURE: SeizeCollateralScenario[] = [
    {
        description: "Debt entered default > grace period's length ago, no repayments since",
        ...defaultArgs,
        agreementId: web3.sha3("Arbitrary 32 byte id for unsuccessful scenario #1"),
        from: (beneficiary: string, other: string) => beneficiary,
    },
];
