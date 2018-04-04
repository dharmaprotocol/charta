import { BigNumber } from "bignumber.js";

export interface SimpleInterestContractTerms {
    principalTokenIndex: BigNumber;
    principalAmount: BigNumber;
    interestRate: BigNumber;
    amortizationUnitType: BigNumber;
    termLengthUnits: BigNumber;
}

class TermsContractParameters {
    public static bitShiftLeft(target: BigNumber, numPlaces: number): BigNumber {
        const binaryTargetString = target.toString(2);
        const binaryTargetStringShifted = binaryTargetString + "0".repeat(numPlaces);

        return new BigNumber(binaryTargetStringShifted, 2);
    }
}

export class SimpleInterestParameters extends TermsContractParameters {
    public static pack(terms: SimpleInterestContractTerms): string {
        const principalTokenIndexShifted = TermsContractParameters.bitShiftLeft(
            terms.principalTokenIndex,
            248,
        );

        const principalAmountShifted = TermsContractParameters.bitShiftLeft(terms.principalAmount, 152);

        const interestRateShifted = TermsContractParameters.bitShiftLeft(terms.interestRate, 128);

        const amortizationUnitTypeShifted = TermsContractParameters.bitShiftLeft(
            terms.amortizationUnitType,
            124,
        );
        const termLengthShifted = TermsContractParameters.bitShiftLeft(terms.termLengthUnits, 108);

        const baseTenParameters = principalTokenIndexShifted
            .plus(principalAmountShifted)
            .plus(interestRateShifted)
            .plus(amortizationUnitTypeShifted)
            .plus(termLengthShifted);

        return `0x${baseTenParameters.toString(16).padStart(64, "0")}`;
    }
}
