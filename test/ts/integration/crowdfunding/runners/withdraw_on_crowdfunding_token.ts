// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";
import { BigNumber } from "bignumber.js";
BigNumber.config({ DECIMAL_PLACES: 0, ROUNDING_MODE: BigNumber.ROUND_DOWN });

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
            let tokenHolders: string[];
            let startRepaymentIndex: BigNumber;
            let endRepaymentIndex: BigNumber;
            let initialWithdrawalAllowances: BigNumber[];

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
                    await this.mintTokens(scenario);

                    for (let i = 0; i < scenario.repaymentAmounts.length; i++) {
                        const repaymentAmount = scenario.repaymentAmounts[i];

                        // Make a repayment to the DebtToken
                        await this.makeRepayment(repaymentAmount);

                        // Register the repayment with the CrowdfundingToken
                        await this.registerRepayment(repaymentAmount);
                    }

                    const { TOKEN_HOLDER_1, TOKEN_HOLDER_2, TOKEN_HOLDER_3 } = this.accounts;

                    tokenHolders = [TOKEN_HOLDER_1, TOKEN_HOLDER_2, TOKEN_HOLDER_3];

                    startRepaymentIndex = new BigNumber(0);

                    endRepaymentIndex = new BigNumber(scenario.repaymentAmounts.length - 1);

                    initialWithdrawalAllowances = this.getInitialWithdrawalAllowances(scenario);
                }

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.crowdfundingToken.abi);
            });

            after(() => {
                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.crowdfundingToken.abi);
            });

            if (scenario.succeeds) {
                it("should return the correct current withdrawal allowance", async () => {
                    initialWithdrawalAllowances.forEach(async (withdrawalAllowance, index) => {
                        const tokenHolder = tokenHolders[index];

                        const returnedWithdrawalAllowance = await this.crowdfundingToken.getCurrentWithdrawalAllowance.callAsync(
                            tokenHolder,
                            startRepaymentIndex,
                            endRepaymentIndex,
                        );

                        expect(returnedWithdrawalAllowance).to.bignumber.equal(withdrawalAllowance);
                    });
                });

                it("should allow the token owner to withdraw their current withdrawal allowance", async () => {
                    const { dummyREPToken } = this.contracts;

                    initialWithdrawalAllowances.forEach(async (withdrawalAllowance, index) => {
                        const tokenHolder = tokenHolders[index];

                        const balanceBeforeWithdrawal = await dummyREPToken.balanceOf.callAsync(
                            tokenHolder,
                        );

                        await this.crowdfundingToken.withdraw.sendTransactionAsync(
                            startRepaymentIndex,
                            endRepaymentIndex,
                            {
                                from: tokenHolder,
                            },
                        );

                        const balanceAfterWithdrawal = await dummyREPToken.balanceOf.callAsync(
                            tokenHolder,
                        );

                        expect(
                            balanceAfterWithdrawal.minus(withdrawalAllowance),
                        ).to.bignumber.equal(balanceBeforeWithdrawal);
                    });
                });
            }
        });
    }

    protected async makeRepayment(repaymentAmount: BigNumber) {
        const { CONTRACT_OWNER, CREDITOR_1 } = this.accounts;
        const { dummyREPToken, repaymentRouter } = this.contracts;

        await dummyREPToken.setBalance.sendTransactionAsync(CREDITOR_1, repaymentAmount, {
            from: CONTRACT_OWNER,
        });

        await repaymentRouter.repay.sendTransactionAsync(
            this.agreementId,
            repaymentAmount,
            dummyREPToken.address,
            { from: CREDITOR_1 },
        );
    }

    protected async registerRepayment(repaymentAmount: BigNumber) {
        const { CREDITOR_1 } = this.accounts;

        await this.crowdfundingToken.registerRepayment.sendTransactionAsync(repaymentAmount, {
            from: CREDITOR_1,
        });
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

    protected async mintTokens(scenario: WithdrawOnCrowdfundingTokenScenario) {
        const { CREDITOR_1, TOKEN_HOLDER_1, TOKEN_HOLDER_2, TOKEN_HOLDER_3 } = this.accounts;

        const tokenHolders = [TOKEN_HOLDER_1, TOKEN_HOLDER_2, TOKEN_HOLDER_3];

        scenario.tokenDistribution.forEach(async (tokenAmount, index) => {
            await this.crowdfundingToken.generateTokens.sendTransactionAsync(
                tokenHolders[index],
                tokenAmount,
                {
                    from: CREDITOR_1,
                },
            );
        });
    }

    protected getInitialWithdrawalAllowances(scenario: WithdrawOnCrowdfundingTokenScenario) {
        const { repaymentAmounts, tokenDistribution } = scenario;

        const totalRepaymentAmount = this.getBigNumberArraySum(repaymentAmounts);

        const totalSupply = this.getBigNumberArraySum(tokenDistribution);

        return tokenDistribution.map((tokenAmount) =>
            totalRepaymentAmount.times(tokenAmount).div(totalSupply),
        );
    }

    protected getBigNumberArraySum(array: BigNumber[]) {
        return array.reduce((total, num) => total.plus(num), new BigNumber(0));
    }
}
