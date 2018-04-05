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

        const principalAmountShifted = TermsContractParameters.bitShiftLeft(
            terms.principalAmount,
            152,
        );

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

export class CollateralizedSimpleInterestTermsParameters extends TermsContractParameters {
    public static pack(
        collateralTokenIndex: BigNumber,
        collateralAmount: BigNumber,
        gracePeriodInDays: BigNumber,
    ): string {
        const encodedCollateralToken = collateralTokenIndex.toString(16).padStart(2, "0");
        const encodedCollateralAmount = collateralAmount.toString(16).padStart(23, "0");
        const encodedGracePeriodInDays = gracePeriodInDays.toString(16).padStart(2, "0");

        const packedCollateralParameters =
            encodedCollateralToken + encodedCollateralAmount + encodedGracePeriodInDays;

        return `0x${packedCollateralParameters.padStart(64, "0")}`;
    }
}
