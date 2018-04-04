import * as Units from "../../../../test_utils/units";
import { BigNumber } from "bignumber.js";

// Scenarios
import { RegisterRepaymentScenario } from "../runners";

// Wrappers
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

// These default args by themselves will fail (the repayment will succeed), so each
// scenario should modify one property, such that the test fails.
const defaultArgs = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    succeeds: false,
};

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
        repayFromRouter: true,
        reverts: false,
    },
];
