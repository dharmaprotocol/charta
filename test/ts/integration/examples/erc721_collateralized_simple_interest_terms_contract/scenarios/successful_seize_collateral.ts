import { BigNumber } from "bignumber.js";

import { DEFAULT_SEIZE_COLLATERAL_ARGS, SeizeCollateralScenario } from "./";

export const SUCCESSFUL_SEIZE_COLLATERAL_SCENARIOS: SeizeCollateralScenario[] = [
    {
        ...DEFAULT_SEIZE_COLLATERAL_ARGS,
        description: "when the loan is in default",
        succeeds: true,
        collateralId: new BigNumber(20),
        // Amortization in hours.
        amortizationUnitType: new BigNumber(0),
        // Loan ends in 1 hour.
        termLengthUnits: new BigNumber(1),
        // 2 hours have passed since the loan was filled.
        secondsSinceFill: 60 * 60 * 2,
        repaymentAmount: new BigNumber(0),
    },
];
