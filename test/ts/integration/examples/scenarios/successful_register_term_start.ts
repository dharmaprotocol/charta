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
    invokedByDebtKernel: true,
    succeeds: true,
};

export const SUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked by the filling of a debt order",
        ...defaultArgs,
    },
    {
        description: "when the interest rate is 0",
        ...defaultArgs,
        interestRate: Units.percent(0),
    },
    {
        description: "when the interest rate is 100",
        ...defaultArgs,
        interestRate: Units.percent(100),
    },
    {
        description: "when the terms length is 0",
        ...defaultArgs,
        termLengthUnits: new BigNumber(0),
    },
    {
        description: "when the terms length is 100",
        ...defaultArgs,
        termLengthUnits: new BigNumber(0),
    },
    {
        description: "when the amortization unit type is 4",
        ...defaultArgs,
        amortizationUnitType: new BigNumber(4),
    },
];
