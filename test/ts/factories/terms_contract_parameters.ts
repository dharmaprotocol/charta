import { BigNumber } from "bignumber.js";

export interface SimpleInterestContractTerms {
    principalTokenIndex: BigNumber;
    principalAmount: BigNumber;
    interestRateFixedPoint: BigNumber;
    amortizationUnitType: BigNumber;
    termLengthUnits: BigNumber;
}

export interface CollateralizedContractTerms {
    collateralTokenIndex: BigNumber;
    collateralAmount: BigNumber;
    gracePeriodInDays: BigNumber;
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

        const interestRateShifted = TermsContractParameters.bitShiftLeft(
            terms.interestRateFixedPoint,
            128,
        );

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
        collateralTerms: CollateralizedContractTerms,
        // Optionally, get the full contract terms parameters string by providing the contract terms.
        contractTerms?: SimpleInterestContractTerms,
    ): string {
        const encodedCollateralToken = collateralTerms.collateralTokenIndex
            .toString(16)
            .padStart(2, "0");
        const encodedCollateralAmount = collateralTerms.collateralAmount
            .toString(16)
            .padStart(23, "0");
        const encodedGracePeriodInDays = collateralTerms.gracePeriodInDays
            .toString(16)
            .padStart(2, "0");

        const packedCollateralParameters =
            encodedCollateralToken + encodedCollateralAmount + encodedGracePeriodInDays;

        if (contractTerms) {
            const packedTermsParameters = SimpleInterestParameters.pack(contractTerms);
            return `${packedTermsParameters.substr(0, 39)}${packedCollateralParameters.padStart(
                27,
                "0",
            )}`;
        } else {
            return `0x${packedCollateralParameters.padStart(64, "0")}`;
        }
    }
}
