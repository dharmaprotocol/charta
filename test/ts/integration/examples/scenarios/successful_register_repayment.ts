import * as Units from "../../../test_utils/units";

// Scenarios
import { RegisterRepaymentScenario } from "../runners/index";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";

export const SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS: RegisterRepaymentScenario[] = [
    {
        description: "when called from the RepaymentRouter",
        repaymentAmount: Units.ether(1.29),
        principalToken: (principalToken: DummyTokenContract) => principalToken,
        debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
        repayFromRouter: true,
        succeeds: true,
    },
];
