// External libraries
import { expect } from "chai";

// Scenarios
import { UnpackParametersFromBytesScenario } from "../scenarios/index";

// Wrappers
import { CollateralizedSimpleInterestTermsContractContract } from "../../../../../../types/generated/collateralized_simple_interest_terms_contract";

// This is testing a "pure" function, and so it does
// not need the setup provided in CollateralizedSimpleInterestTermsContractRunner.
export class UnpackParametersFromBytesRunner {
    private collateralizedSimpleInterestTermsContract: CollateralizedSimpleInterestTermsContractContract;

    constructor() {
        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(
        collateralizedSimpleInterestTermsContract: CollateralizedSimpleInterestTermsContractContract,
    ) {
        this.collateralizedSimpleInterestTermsContract = collateralizedSimpleInterestTermsContract;
    }

    public testScenario(scenario: UnpackParametersFromBytesScenario) {
        describe(`when given ${scenario.input}`, () => {
            it(`should return ${JSON.stringify(scenario.expectedTerms)}`, async () => {
                const result = await this.collateralizedSimpleInterestTermsContract.unpackParametersFromBytes.callAsync(
                    scenario.input,
                );

                // E.g. '["0","1000000000000000000","2500","1","4"]' - BigNumber components are stringified.
                const resultString = JSON.stringify(result);
                const expectedValuesString = JSON.stringify(Object.values(scenario.expectedTerms));

                expect(resultString).to.equal(expectedValuesString);
            });
        });
    }
}
