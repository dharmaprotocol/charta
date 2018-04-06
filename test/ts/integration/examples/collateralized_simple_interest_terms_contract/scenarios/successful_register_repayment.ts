// Scenarios
import { DEFAULT_REGISTER_REPAYMENT_ARGS, RegisterRepaymentScenario } from "./";

export const SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS: RegisterRepaymentScenario[] = [
    {
        description: "when called with valid args from the RepaymentRouter",
        ...DEFAULT_REGISTER_REPAYMENT_ARGS,
    },
    {
        description: "when payment is greater than the principal amount",
        ...DEFAULT_REGISTER_REPAYMENT_ARGS,
        repaymentAmount: DEFAULT_REGISTER_REPAYMENT_ARGS.principalAmount.add(1),
    },
    {
        description: "when payment is less than the principal amount",
        ...DEFAULT_REGISTER_REPAYMENT_ARGS,
        repaymentAmount: DEFAULT_REGISTER_REPAYMENT_ARGS.principalAmount.sub(1),
    },
];
