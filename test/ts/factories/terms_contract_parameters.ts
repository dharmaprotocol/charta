import { BigNumber } from "bignumber.js";

class TermsContractParameters {
    public static bitShiftLeft(target: BigNumber, numPlaces: number): BigNumber {
        const binaryTargetString = target.toString(2);
        const binaryTargetStringShifted = binaryTargetString + "0".repeat(numPlaces);

        return new BigNumber(binaryTargetStringShifted, 2);
    }
}

export class SimpleInterestParameters extends TermsContractParameters {
    public static pack(
        principalTokenIndex: BigNumber,
        principalPlusInterest: BigNumber,
        amortizationUnitType: BigNumber,
        termLength: BigNumber,
    ): string {
        const principalTokenIndexShifted = TermsContractParameters.bitShiftLeft(
            principalTokenIndex,
            248,
        );
        const principalPlusInterestShifted = TermsContractParameters.bitShiftLeft(
            principalPlusInterest,
            128,
        );
        const amortizationUnitTypeShifted = TermsContractParameters.bitShiftLeft(
            amortizationUnitType,
            124,
        );
        const termLengthShifted = TermsContractParameters.bitShiftLeft(termLength, 108);

        const baseTenParameters = principalTokenIndexShifted
            .plus(principalPlusInterestShifted)
            .plus(amortizationUnitTypeShifted)
            .plus(termLengthShifted);

        return `0x${baseTenParameters.toString(16).padStart(64, "0")}`;
    }
}
