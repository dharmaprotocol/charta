import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { RegisterTermStartScenario } from "../runners";

// Factories
import { SimpleInterestContractTerms, SimpleInterestParameters } from "../../../../factories/terms_contract_parameters";

// These default args by themselves will fail (i.e. registering term start will succeed), so each
// scenario should modify one property, such that the test fails.
const defaultArgs = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    invokedByDebtKernel: true,
    succeeds: false,
    reverts: false,
    termsContractParameters: (terms: SimpleInterestContractTerms) => SimpleInterestParameters.pack(terms),
};

export const UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked outside of the debt kernel",
        ...defaultArgs,
        reverts: true,
        invokedByDebtKernel: false,
    },
    {
        description: "when the amortization unit type is 5",
        ...defaultArgs,
        reverts: true,
        amortizationUnitType: new BigNumber(5),
    },
    {
        description: "when the principal amount is 0",
        ...defaultArgs,
        principalAmount: new BigNumber(0),
    },
    {
        description: "when there is no token at the given token index in the terms contract parameters",
        ...defaultArgs,
        reverts: true,
        principalTokenIndex: new BigNumber(23),
    },
];
