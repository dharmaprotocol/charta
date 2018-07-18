import { BigNumber } from "bignumber.js";

// Scenarios
import { CreateCrowdfundingTokenScenario, DEFAULT_CREATE_CROWDFUNDING_TOKEN_ARGS } from "./";

export const SUCCESSFUL_CREATE_CROWDFUNDING_TOKEN_SCENARIOS: CreateCrowdfundingTokenScenario[] = [
    {
        description: "when a crowdfunding token is successfully created",
        ...DEFAULT_CREATE_CROWDFUNDING_TOKEN_ARGS,
    },
];
