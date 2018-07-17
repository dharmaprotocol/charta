import { BigNumber } from "bignumber.js";

// Scenarios
import { CreateCrowdfundingTokenScenario, DEFAULT_CREATE_CROWDFUNDING_TOKEN_ARGS } from "./";

export const SUCCESSFUL_CREATE_CROWDFUNDING_TOKEN_SCENARIOS: CreateCrowdfundingTokenScenario[] = [
    {
        description: "when invoked by the filling of a debt order",
        ...DEFAULT_CREATE_CROWDFUNDING_TOKEN_ARGS,
    },
];
