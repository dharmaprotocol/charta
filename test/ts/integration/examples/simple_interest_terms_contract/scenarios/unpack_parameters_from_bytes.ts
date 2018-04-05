import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { UnpackParametersFromBytesScenario } from "./";
import { SimpleInterestParameters } from "../../../../factories/terms_contract_parameters";

const defaultArgs = {
    expectedTerms: {
        principalTokenIndex: new BigNumber(0),
        principalAmount: Units.ether(1),
        interestRate: Units.percent(2.5),
        amortizationUnitType: new BigNumber(1),
        termLengthUnits: new BigNumber(4),
    },
};

export const UNPACK_PARAMETERS_FROM_BYTES_SCENARIOS: UnpackParametersFromBytesScenario[] = [
    {
        description: "when given '0x00000000000de0b6b3a76400000009c410004000000000000000000000000000'",
        ...defaultArgs,
        input: "0x00000000000de0b6b3a76400000009c410004000000000000000000000000000",
    },
];
