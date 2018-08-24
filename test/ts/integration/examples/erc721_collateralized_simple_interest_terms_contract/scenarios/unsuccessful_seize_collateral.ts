import { BigNumber } from "bignumber.js";
import * as _ from "lodash";

import * as Units from "../../../../test_utils/units";

import { DEFAULT_SEIZE_COLLATERAL_ARGS, SeizeCollateralScenario } from "./";

const greaterRepaymentAmount = _.clone(DEFAULT_SEIZE_COLLATERAL_ARGS.repaymentAmount)
    .add(Units.ether(1));

const DEFAULT_UNSUCCESSFUL_SEIZE_ARGS = {
    succeeds: false,
    reverts: true,
    // Amortization in hours.
    amortizationUnitType: new BigNumber(0),
    // Loan ends in 1 hour.
    termLengthUnits: new BigNumber(1),
};

export const UNSUCCESSFUL_SEIZE_COLLATERAL_SCENARIOS: SeizeCollateralScenario[] = [
    {
        ...DEFAULT_SEIZE_COLLATERAL_ARGS,
        ...DEFAULT_UNSUCCESSFUL_SEIZE_ARGS,
        description: "when the loan has been repaid",
        collateralId: new BigNumber(21),
        // 2 hours have passed since the loan was filled.
        secondsSinceFill: 60 * 60 * 2,
        repaymentAmount: greaterRepaymentAmount,
    },
    {
        ...DEFAULT_SEIZE_COLLATERAL_ARGS,
        ...DEFAULT_UNSUCCESSFUL_SEIZE_ARGS,
        description: "when the debt is not yet in default",
        collateralId: new BigNumber(22),
        // 30 minutes have passed since the loan was filled.
        secondsSinceFill: 60 * 30,
        repaymentAmount: new BigNumber(0),
    },
];
