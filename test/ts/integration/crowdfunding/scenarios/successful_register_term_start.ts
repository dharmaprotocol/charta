import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { DEFAULT_REGISTER_TERM_START_ARGS, RegisterTermStartScenario } from "./";

export const SUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked by the filling of a debt order",
        ...DEFAULT_REGISTER_TERM_START_ARGS,
    },
    {
        description: "when the interest rate is 0",
        ...DEFAULT_REGISTER_TERM_START_ARGS,
        interestRateFixedPoint: Units.interestRateFixedPoint(0),
    },
    {
        description: "when the interest rate is 100",
        ...DEFAULT_REGISTER_TERM_START_ARGS,
        interestRateFixedPoint: Units.interestRateFixedPoint(100),
    },
    {
        description: "when the terms length is 0",
        ...DEFAULT_REGISTER_TERM_START_ARGS,
        termLengthUnits: new BigNumber(0),
    },
    {
        description: "when the terms length is 100",
        ...DEFAULT_REGISTER_TERM_START_ARGS,
        termLengthUnits: new BigNumber(100),
    },
    {
        description: "when the amortization unit type is 4",
        ...DEFAULT_REGISTER_TERM_START_ARGS,
        amortizationUnitType: new BigNumber(4),
    },
];
