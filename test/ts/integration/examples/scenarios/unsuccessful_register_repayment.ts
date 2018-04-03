import * as Units from "../../../test_utils/units";
import { BigNumber } from "bignumber.js";

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
        debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
        repayFromRouter: false,
        succeeds: false,
    },
];
