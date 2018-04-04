import * as Units from "../../../test_utils/units";
import { BigNumber } from "bignumber.js";

// Scenarios
import { RegisterRepaymentScenario } from "../runners/index";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";

const defaultArgs = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
};

export const UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS: RegisterRepaymentScenario[] = [
    {
        description: "when called from outside the RepaymentRouter",
        ...defaultArgs,
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
        ...defaultArgs,
        repaymentAmount: Units.ether(1.29),
        principalToken: (principalToken: DummyTokenContract) => principalToken,
        repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => otherToken,
        debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
        repayFromRouter: true,
        succeeds: false,
        reverts: false,
    },
];
