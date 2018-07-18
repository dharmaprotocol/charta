// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";

// Test Utils
import { REVERT_ERROR } from "../../../test_utils/constants";

// Scenario runners
import { CreateCrowdfundingTokenScenario } from "../scenarios";

// Logs
import { LogSimpleInterestTermStart } from "../../../logs/simple_interest_terms_contract";

// Runners
import { CrowdfundingRunner } from "./crowdfunding";

export class CreateCrowdfundingTokenRunner extends CrowdfundingRunner {
    public testScenario(scenario: CreateCrowdfundingTokenScenario) {
        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                if (scenario.invokedByDebtKernel && !scenario.reverts) {
                    // Fill the debt order
                    await this.fillDebtOrder();

                    // Transfer the DebtToken to the CrowdfundingTokenRegistry
                    await this.transferDebtTokenToCrowdfundingTokenRegistry(scenario);
                }

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.contracts.simpleInterestTermsContract.abi);
            });

            after(() => {
                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.contracts.simpleInterestTermsContract.abi);
            });

            if (scenario.succeeds) {
                it("should register the resulting CrowdfundingToken");

                it("should transfer ownership of the DebtToken to the CrowdfundingToken");
            }
        });
    }
}
