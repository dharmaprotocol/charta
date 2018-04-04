import * as Units from "../../../test_utils/units";

// Scenarios
import { RegisterRepaymentScenario } from "../runners/index";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";

export const UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS: RegisterRepaymentScenario[] = [
    {
        description: "when called from outside the RepaymentRouter",
        repaymentAmount: Units.ether(1.29),
        principalToken: (principalToken: DummyTokenContract) => principalToken,
        repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => principalToken,
        debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
        repayFromRouter: false,
        succeeds: false,
        reverts: true,
    },
    {
        description: "when payment is attempted with the incorrect token",
        repaymentAmount: Units.ether(1.29),
        principalToken: (principalToken: DummyTokenContract) => principalToken,
        repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => otherToken,
        debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
        repayFromRouter: true,
        succeeds: false,
        reverts: false,
    },
];
