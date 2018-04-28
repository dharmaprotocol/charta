// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";
import { BigNumber } from "bignumber.js";

// Test Utils
import { REVERT_ERROR } from "../../../../test_utils/constants";

// Scenario runners
import { RegisterRepaymentScenario } from "../scenarios";

// Wrappers
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

// Logs
import { LogRegisterRepayment } from "../../../../logs/simple_interest_terms_contract";

// Runners
import { CollateralizedSimpleInterestTermsContractRunner } from "./collateralized_simple_interest_terms_contract";

const DEFAULT_GAS_AMOUNT = 4712388;

export class RegisterRepaymentRunner extends CollateralizedSimpleInterestTermsContractRunner {
    public testScenario(scenario: RegisterRepaymentScenario) {
        let txHash: string;
        let dummyREPToken: DummyTokenContract;
        let dummyZRXToken: DummyTokenContract;
        let repaidAmountBefore: BigNumber;

        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                dummyZRXToken = this.contracts.dummyZRXToken;
                dummyREPToken = this.contracts.dummyREPToken;

                await this.contracts.dummyZRXToken.setBalance.sendTransactionAsync(
                    this.accounts.DEBTOR_1,
                    scenario.collateralTokenBalance,
                    {
                        from: this.accounts.CONTRACT_OWNER,
                    },
                );

                await this.contracts.dummyZRXToken.approve.sendTransactionAsync(
                    this.contracts.tokenTransferProxy.address,
                    scenario.collateralTokenAllowance,
                    { from: this.accounts.DEBTOR_1 },
                );

                const { CONTRACT_OWNER, DEBTOR_1 } = this.accounts;

                const {
                    tokenTransferProxy,
                    collateralizedSimpleInterestTermsContract,
                } = this.contracts;

                // Fill a debt order, against which to test repayments.
                await this.fillDebtOrder();

                await dummyREPToken.setBalance.sendTransactionAsync(
                    DEBTOR_1,
                    scenario.repaymentAmount,
                    {
                        from: CONTRACT_OWNER,
                    },
                );

                await dummyREPToken.approve.sendTransactionAsync(
                    tokenTransferProxy.address,
                    scenario.repaymentAmount,
                    { from: DEBTOR_1 },
                );

                repaidAmountBefore = await this.contracts.collateralizedSimpleInterestTermsContract.getValueRepaidToDate.callAsync(
                    this.agreementId,
                );

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(collateralizedSimpleInterestTermsContract.abi);
            });

            after(() => {
                ABIDecoder.removeABI(this.contracts.collateralizedSimpleInterestTermsContract.abi);
            });

            if (scenario.reverts) {
                it("should revert the transaction", async () => {
                    // The transaction can be reverted via the router, or the terms contract itself.
                    let transaction;

                    if (scenario.repayFromRouter) {
                        transaction = this.repayWithRouter(
                            scenario.repaymentAmount,
                            scenario.repaymentToken(dummyREPToken, dummyZRXToken).address,
                        );
                    } else {
                        // The transaction is attempted on the terms contract itself.
                        transaction = this.registerRepayment(scenario.repaymentAmount);
                    }

                    await expect(transaction).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            } else {
                // If the scenario does not revert, we can call the function and get the txHash.
                before(async () => {
                    txHash = await this.repayWithRouter(
                        scenario.repaymentAmount,
                        scenario.repaymentToken(dummyREPToken, dummyZRXToken).address,
                    );
                });
            }

            if (scenario.succeeds) {
                it("should record the repayment", async () => {
                    const { collateralizedSimpleInterestTermsContract } = this.contracts;
                    const agreementId = this.agreementId;

                    await expect(
                        collateralizedSimpleInterestTermsContract.getValueRepaidToDate.callAsync(
                            agreementId,
                        ),
                    ).to.eventually.bignumber.equal(
                        repaidAmountBefore.add(scenario.repaymentAmount),
                    );
                });

                it("should emit a LogRegisterRepayment event", async () => {
                    const { DEBTOR_1, CREDITOR_1 } = this.accounts;

                    const returnedLog = await this.getLogs(txHash, "LogRegisterRepayment");

                    const expectedLog = LogRegisterRepayment(
                        this.contracts.collateralizedSimpleInterestTermsContract.address,
                        this.agreementId,
                        DEBTOR_1,
                        CREDITOR_1,
                        scenario.repaymentAmount,
                        this.debtOrder.getPrincipalTokenAddress(),
                    );

                    expect(returnedLog).to.deep.equal(expectedLog);
                });
            } else {
                // A repayment should never be recorded if the scenario fails.
                it("should not record a repayment", async () => {
                    const { collateralizedSimpleInterestTermsContract } = this.contracts;
                    const agreementId = this.agreementId;

                    await expect(
                        collateralizedSimpleInterestTermsContract.getValueRepaidToDate.callAsync(
                            agreementId,
                        ),
                    ).to.eventually.bignumber.equal(repaidAmountBefore);
                });

                // If the scenario does not revert, we can check the logs from the txHash to
                // ensure that no logs were emitted for repayments.
                if (!scenario.reverts) {
                    it("should not emit a LogRegisterRepayment event", async () => {
                        const returnedLog = await this.getLogs(txHash, "LogRegisterRepayment");

                        expect(returnedLog).to.be.undefined;
                    });
                }
            }
        });
    }

    // Calls registerRepayment() directly on the terms contract.
    private registerRepayment(amount: BigNumber) {
        const { collateralizedSimpleInterestTermsContract } = this.contracts;
        const { DEBTOR_1, CREDITOR_1 } = this.accounts;

        return collateralizedSimpleInterestTermsContract.registerRepayment.sendTransactionAsync(
            this.agreementId,
            DEBTOR_1,
            CREDITOR_1,
            amount,
            this.debtOrder.getPrincipalTokenAddress(),
            { from: DEBTOR_1 },
        );
    }

    private repayWithRouter(amount: BigNumber, tokenAddress: string) {
        return this.contracts.repaymentRouter.repay.sendTransactionAsync(
            this.agreementId,
            amount,
            tokenAddress,
            { from: this.accounts.DEBTOR_1 },
        );
    }
}
