import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { RegisterTermStartScenario } from "../runners";

// Factories
import { SimpleInterestContractTerms, SimpleInterestParameters } from "../../../../factories/terms_contract_parameters";

const defaultArgs = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
    succeeds: false,
    invokedByDebtKernel: true,
    termsContractParameters: (terms: SimpleInterestContractTerms) => SimpleInterestParameters.pack(terms),
};

export const UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS: RegisterTermStartScenario[] = [
    {
        description: "when invoked outside of the debt kernel",
        ...defaultArgs,
        invokedByDebtKernel: false,
    },
    {
        description: "when the amortization unit type is 5",
        ...defaultArgs,
        amortizationUnitType: new BigNumber(5),
    },
    {
        description: "when the principal amount is 0",
        ...defaultArgs,
        principalAmount: new BigNumber(0),
    },
    {
        description: "when the terms contract parameters are malformed",
        ...defaultArgs,
        termsContractParameters: (terms: SimpleInterestContractTerms) => "0xf10111",
    },
];
