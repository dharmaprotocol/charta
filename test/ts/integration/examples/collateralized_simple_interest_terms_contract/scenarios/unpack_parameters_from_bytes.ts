import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { UnpackParametersFromBytesScenario } from "./";

const defaultTerms = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRate: Units.percent(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
};

export const UNPACK_PARAMETERS_FROM_BYTES_SCENARIOS: UnpackParametersFromBytesScenario[] = [
    {
        input: "0x00000000000de0b6b3a76400000009c410004000000000000000000000000000",
        expectedTerms: defaultTerms,
    },
    {
        input: "0x01000000000de0b6b3a76400000009c410004000000000000000000000000000",
        expectedTerms: {
            ...defaultTerms,
            principalTokenIndex: new BigNumber(1),
        },
    },
    {
        input: "0x00000000001bc16d674ec800000009c410004000000000000000000000000000",
        expectedTerms: {
            ...defaultTerms,
            principalAmount: Units.ether(2),
        },
    },
    {
        input: "0x00000000000de0b6b3a7640000000dac10004000000000000000000000000000",
        expectedTerms: {
            ...defaultTerms,
            interestRate: Units.percent(3.5),
        },
    },
    {
        input: "0x00000000000de0b6b3a76400000009c420004000000000000000000000000000",
        expectedTerms: {
            ...defaultTerms,
            amortizationUnitType: new BigNumber(2),
        },
    },
    {
        input: "0x00000000000de0b6b3a76400000009c410005000000000000000000000000000",
        expectedTerms: {
            ...defaultTerms,
            termLengthUnits: new BigNumber(5),
        },
    },
];
