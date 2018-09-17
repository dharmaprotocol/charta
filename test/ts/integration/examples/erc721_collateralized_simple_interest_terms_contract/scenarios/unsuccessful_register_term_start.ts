import { BigNumber } from "bignumber.js";

import { DEFAULT_REGISTER_TERM_START_ARGS, RegisterTermStartScenario } from "./";

// These default args by themselves will fail (i.e. registering term start will succeed), so each
// scenario should modify one property, such that the test fails.
const defaultArgs = DEFAULT_REGISTER_TERM_START_ARGS;
defaultArgs.succeeds = false;

export const UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked outside of the debt kernel",
        ...defaultArgs,
        invokedByDebtKernel: false,
        reverts: true,
    },
    {
        description: "when the amortization unit type is 5",
        ...defaultArgs,
        amortizationUnitType: new BigNumber(5),
        reverts: true,
    },
    {
        description: "when the principal amount is 0",
        ...defaultArgs,
        principalAmount: new BigNumber(0),
    },
    {
        description:
            "when there is no token at the given token index in the terms contract parameters",
        ...defaultArgs,
        principalTokenInRegistry: false,
        reverts: true,
    },
    {
        description: "when there is no token at the given token index in the collateral parameters",
        ...defaultArgs,
        collateralTokenInRegistry: false,
        reverts: true,
    },
];
