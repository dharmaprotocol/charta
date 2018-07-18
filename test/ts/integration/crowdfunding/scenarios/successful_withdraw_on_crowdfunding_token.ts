// Scenarios
import {
    DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
    WithdrawOnCrowdfundingTokenScenario,
} from "./";

export const SUCCESSFUL_WITHDRAW_ON_CROWDFUNDING_TOKEN_SCENARIOS: WithdrawOnCrowdfundingTokenScenario[] = [
    {
        description: "when a crowdfunding token is withdrawn on",
        ...DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
    },
];
