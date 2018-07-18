// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";
import { BigNumber } from "bignumber.js";

// Test Utils
import { Web3Utils } from "../../../../../utils/web3_utils";
import { REVERT_ERROR } from "../../../test_utils/constants";

// Scenario runners
import { CreateCrowdfundingTokenScenario } from "../scenarios";

// Logs
import { LogSimpleInterestTermStart } from "../../../logs/simple_interest_terms_contract";

// Runners
import { CrowdfundingRunner } from "./crowdfunding";

const web3Utils = new Web3Utils(web3);

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
                let agreementId: BigNumber;
                let crowdfundingTokenAddress: string;

                before(async () => {
                    const { crowdfundingTokenRegistry } = this.contracts;

                    agreementId = new BigNumber(this.agreementId);

                    crowdfundingTokenAddress = await crowdfundingTokenRegistry.crowdfundingTokens.callAsync(
                        agreementId,
                    );
                });

                it("should deploy and register a CrowdfundingToken", async () => {
                    await expect(
                        web3Utils.doesContractExistAtAddressAsync(crowdfundingTokenAddress),
                    ).to.eventually.be.true;
                });

                it("should transfer ownership of the DebtToken to the CrowdfundingToken", async () => {
                    const { debtTokenContract } = this.contracts;

                    await expect(
                        debtTokenContract.ownerOf.callAsync(agreementId),
                    ).to.eventually.equal(crowdfundingTokenAddress);
                });
            }
        });
    }
}
