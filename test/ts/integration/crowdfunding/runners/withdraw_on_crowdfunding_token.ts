// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";
import { BigNumber } from "bignumber.js";

// Wrappers
import { CrowdfundingTokenContract } from "../../../../../types/generated/crowdfunding_token";

// Test Utils
import { Web3Utils } from "../../../../../utils/web3_utils";
import { REVERT_ERROR } from "../../../test_utils/constants";

// Scenario runners
import { WithdrawOnCrowdfundingTokenScenario } from "../scenarios";

// Logs
import { LogSimpleInterestTermStart } from "../../../logs/simple_interest_terms_contract";

// Runners
import { CrowdfundingRunner } from "./crowdfunding";

const web3Utils = new Web3Utils(web3);

export class WithdrawOnCrowdfundingTokenRunner extends CrowdfundingRunner {
    protected crowdfundingToken: CrowdfundingTokenContract;

    public testScenario(scenario: WithdrawOnCrowdfundingTokenScenario) {
        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                if (scenario.invokedByDebtKernel && !scenario.reverts) {
                    // Fill the debt order
                    await this.fillDebtOrder();

                    // Transfer the DebtToken to the CrowdfundingTokenRegistry
                    await this.transferDebtTokenToCrowdfundingTokenRegistry(scenario);

                    // Locate the CrowdfundingToken that is deployed as a result of the above transfer
                    await this.findCrowdfundingToken();

                    // Mint and distrbute tokens
                    await this.mintTokens();

                    // make a repayment to the DebtToken
                    await this.makeRepayment(scenario);

                    // register the repayment with the CrowdfundingToken
                    await this.registerRepayment(scenario);
                }

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.crowdfundingToken.abi);
            });

            after(() => {
                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.crowdfundingToken.abi);
            });

            if (scenario.succeeds) {
                it("should return the correct current withdrawal allowance");

                it("should allow the token owner to withdraw up to their current withdrawal allowance", async () => {
                    // TODO: add multiple token holders logic to scenarios

                    const { DEBTOR_1 } = this.accounts;
                    const { dummyREPToken } = this.contracts;

                    // TODO: add logic around calculating withdrawal allowance
                    const withdrawalAllowance = scenario.repaymentAmount;

                    const balanceBeforeWithdrawal = await dummyREPToken.balanceOf.callAsync(
                        DEBTOR_1,
                    );

                    await this.crowdfundingToken.withdraw.sendTransactionAsync(
                        new BigNumber(0),
                        new BigNumber(0),
                        {
                            from: DEBTOR_1,
                        },
                    );

                    const balanceAfterWithdrawal = await dummyREPToken.balanceOf.callAsync(
                        DEBTOR_1,
                    );

                    expect(balanceAfterWithdrawal.minus(withdrawalAllowance)).to.bignumber.equal(
                        balanceBeforeWithdrawal,
                    );
                });
            }
        });
    }

    protected async makeRepayment(scenario: WithdrawOnCrowdfundingTokenScenario) {
        const { CONTRACT_OWNER, CREDITOR_1 } = this.accounts;
        const { dummyREPToken, repaymentRouter } = this.contracts;

        await dummyREPToken.setBalance.sendTransactionAsync(CREDITOR_1, scenario.repaymentAmount, {
            from: CONTRACT_OWNER,
        });

        await repaymentRouter.repay.sendTransactionAsync(
            this.agreementId,
            scenario.repaymentAmount,
            dummyREPToken.address,
            { from: CREDITOR_1 },
        );
    }

    protected async registerRepayment(scenario: WithdrawOnCrowdfundingTokenScenario) {
        const { CREDITOR_1 } = this.accounts;

        await this.crowdfundingToken.registerRepayment.sendTransactionAsync(
            scenario.repaymentAmount,
            { from: CREDITOR_1 },
        );
    }

    protected async findCrowdfundingToken() {
        const { crowdfundingTokenRegistry } = this.contracts;
        const { CONTRACT_OWNER } = this.accounts;

        const agreementId = new BigNumber(this.agreementId);

        const crowdfundingTokenAddress = await crowdfundingTokenRegistry.crowdfundingTokens.callAsync(
            agreementId,
        );

        this.crowdfundingToken = await CrowdfundingTokenContract.at(
            crowdfundingTokenAddress,
            web3,
            {
                from: CONTRACT_OWNER,
                gas: 4000000,
            },
        );
    }

    protected async mintTokens() {
        const { CREDITOR_1, DEBTOR_1 } = this.accounts;

        // TODO: add mint logic to scenarios
        const mintAmount = new BigNumber(1000);

        await this.crowdfundingToken.generateTokens.sendTransactionAsync(DEBTOR_1, mintAmount, {
            from: CREDITOR_1,
        });
    }
}
