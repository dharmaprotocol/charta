import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { RegisterRepaymentScenario } from "../runners/";

// Wrappers
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

const defaultArgs = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    repaymentAmount: Units.ether(1.29),
    repaymentToken: (principalToken: DummyTokenContract, otherToken: DummyTokenContract) => principalToken,
    debtOrder: (debtOrder: SignedDebtOrder) => debtOrder,
    repayFromRouter: true,
    succeeds: true,
    reverts: false,
};

export const SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS: RegisterRepaymentScenario[] = [
    {
        description: "when called with valid args from the RepaymentRouter",
        ...defaultArgs,
    },
    {
        description: "when payment is greater than the principal amount",
        ...defaultArgs,
        repaymentAmount: defaultArgs.principalAmount.add(1),
    },
    {
        description: "when payment is less than the principal amount",
        ...defaultArgs,
        repaymentAmount: defaultArgs.principalAmount.sub(1),
    },
];
