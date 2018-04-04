import { BigNumber } from "bignumber.js";
import * as Units from "../../../test_utils/units";

// Scenarios
import { RegisterTermStartScenario } from "../runners/index";

const defaultArgs = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
};

export const SUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked by the filling of a debt order",
        ...defaultArgs,
        invokedByDebtKernel: true,
        succeeds: true,
    },
];
