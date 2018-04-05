// Wrappers
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

import { DEFAULT_REGISTER_REPAYMENT_ARGS, RegisterRepaymentScenario } from "./";

// These default args by themselves will fail (the repayment will succeed), so each
// scenario should modify one property, such that the test fails.
const defaultArgs = DEFAULT_REGISTER_REPAYMENT_ARGS;
defaultArgs.succeeds = false;

export const UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS: RegisterRepaymentScenario[] = [
    {
        description: "when called from outside the RepaymentRouter",
        ...defaultArgs,
        repayFromRouter: false,
        reverts: true,
    },
    {
        description: "when payment is attempted with the incorrect token",
        ...defaultArgs,
        repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => otherToken,
    },
];
