import { BigNumber } from "bignumber.js";
import * as Units from "../../../test_utils/units";

// Scenarios
import {
    DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
    WithdrawOnCrowdfundingTokenScenario,
} from "./";

export const SUCCESSFUL_WITHDRAW_ON_CROWDFUNDING_TOKEN_SCENARIOS: WithdrawOnCrowdfundingTokenScenario[] = [
    {
        ...DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
        description: "when there is a single repayment and a single token holder",
    },
    {
        ...DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
        description: "when there is a single repayment and multiple token holders",
        tokenDistribution: [new BigNumber(900), new BigNumber(600), new BigNumber(300)],
    },
    {
        ...DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
        description: "when there are multiple repayments and a single token holder",
        repaymentAmounts: [Units.ether(0.25), Units.ether(0.25), Units.ether(0.25)],
    },
    {
        ...DEFAULT_WITHDRAW_ON_CROWDFUNDING_TOKEN_ARGS,
        description: "when there are multiple repayments and multiple token holders",
        repaymentAmounts: [Units.ether(0.3), Units.ether(0.3)],
        tokenDistribution: [new BigNumber(900), new BigNumber(600), new BigNumber(300)],
    },
];
