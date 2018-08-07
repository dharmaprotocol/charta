import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";

// Scenarios
import { UnpackParametersFromBytesScenario } from "./";

// Currently the CollateralizedSimpleInterestTermsContract only returns values for simple terms. I.E.
// it just inherits unpackParametersFromBytes from SimpleInterestTermsContract.
const simpleTerms = {
    principalTokenIndex: new BigNumber(0),
    principalAmount: Units.ether(1),
    interestRateFixedPoint: Units.interestRateFixedPoint(2.5),
    amortizationUnitType: new BigNumber(1),
    termLengthUnits: new BigNumber(4),
};

export const UNPACK_PARAMETERS_FROM_BYTES_SCENARIOS: UnpackParametersFromBytesScenario[] = [
    {
        input: "0x00000000000de0b6b3a76400000061a810004000000000000000000000000000",
        expectedTerms: simpleTerms,
    },
    {
        input: "0x01000000000de0b6b3a76400000061a810004000000000000000000000000000",
        expectedTerms: {
            ...simpleTerms,
            principalTokenIndex: new BigNumber(1),
        },
    },
    {
        input: "0x00000000001bc16d674ec800000061a810004000000000000000000000000000",
        expectedTerms: {
            ...simpleTerms,
            principalAmount: Units.ether(2),
        },
    },
    {
        input: "0x00000000000de0b6b3a76400000088b810004000000000000000000000000000",
        expectedTerms: {
            ...simpleTerms,
            interestRateFixedPoint: Units.interestRateFixedPoint(3.5),
        },
    },
    {
        input: "0x00000000000de0b6b3a76400000061a820004000000000000000000000000000",
        expectedTerms: {
            ...simpleTerms,
            amortizationUnitType: new BigNumber(2),
        },
    },
    {
        input: "0x00000000000de0b6b3a76400000061a810005000000000000000000000000000",
        expectedTerms: {
            ...simpleTerms,
            termLengthUnits: new BigNumber(5),
        },
    },
];
