// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";
import { BigNumber } from "bignumber.js";

// Test Utils
import { REVERT_ERROR } from "../../../../test_utils/constants";

// Scenario runners
import { RegisterRepaymentScenario } from "./";

// Wrappers
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

// Logs
import { LogRegisterRepayment } from "../../../../logs/simple_interest_terms_contract";

// Runners
import { SimpleInterestTermsContractRunner } from "./simple_interest_terms_contract_runner";

export class RegisterRepaymentRunner extends SimpleInterestTermsContractRunner {
    public testScenario(scenario: RegisterRepaymentScenario) {
        let txHash: string;
        let dummyREPToken: DummyTokenContract;
        let dummyZRXToken: DummyTokenContract;

        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                dummyZRXToken = await this.setupDummyZRXToken();
                dummyREPToken = this.contracts.dummyREPToken;

                const {
                    CONTRACT_OWNER,
                    DEBTOR_1,
                } = this.accounts;

                const {
                    tokenTransferProxy,
                    simpleInterestTermsContract,
                } = this.contracts;

                // Fill a debt order, against which to test repayments.
                await this.fillDebtOrder();

                const principalToken = scenario.principalToken(dummyREPToken);

                await principalToken.setBalance.sendTransactionAsync(DEBTOR_1, scenario.repaymentAmount, {
                    from: CONTRACT_OWNER,
                });

                await principalToken.approve.sendTransactionAsync(
                    tokenTransferProxy.address,
                    scenario.repaymentAmount,
                    { from: DEBTOR_1 },
                );

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(simpleInterestTermsContract.abi);
            });

            after(() => {
                ABIDecoder.removeABI(this.contracts.simpleInterestTermsContract.abi);
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
                before(async () => {
                    txHash = await this.repayWithRouter(
                        scenario.repaymentAmount,
                        scenario.repaymentToken(dummyREPToken, dummyZRXToken).address,
                    );
                });
            }

            if (scenario.succeeds) {
                it("should emit a LogRegisterRepayment event", async () => {
                    const { DEBTOR_1, CREDITOR_1 } = this.accounts;

                    const returnedLog = await this.getLogs(txHash, "LogRegisterRepayment");

                    const expectedLog = LogRegisterRepayment(
                        this.contracts.simpleInterestTermsContract.address,
                        this.agreementId,
                        DEBTOR_1,
                        CREDITOR_1,
                        scenario.repaymentAmount,
                        this.debtOrder.getPrincipalTokenAddress(),
                    );

                    expect(returnedLog).to.deep.equal(expectedLog);
                });

                it("should record the repayment", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const agreementId = this.agreementId;

                    await expect(
                        simpleInterestTermsContract.getValueRepaidToDate.callAsync(agreementId),
                    ).to.eventually.bignumber.equal(scenario.repaymentAmount);
                });
            } else {
                it("should not record a repayment", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const agreementId = this.agreementId;

                    await expect(
                        simpleInterestTermsContract.getValueRepaidToDate.callAsync(agreementId),
                    ).to.eventually.bignumber.equal(0);
                });
            }
        });
    }

    // Calls registerRepayment() directly on the terms contract.
    private registerRepayment(amount: BigNumber) {
        const { simpleInterestTermsContract } = this.contracts;
        const { DEBTOR_1, CREDITOR_1 } = this.accounts;

        return simpleInterestTermsContract.registerRepayment.sendTransactionAsync(
            this.agreementId,
            DEBTOR_1,
            CREDITOR_1,
            amount,
            this.debtOrder.getPrincipalTokenAddress(),
            {from: DEBTOR_1},
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

    private async setupDummyZRXToken(): Promise<DummyTokenContract> {
        const dummyZRXTokenAddress = await this.contracts.dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "ZRX",
        );

        return DummyTokenContract.at(
            dummyZRXTokenAddress,
            web3,
            { from: this.accounts.CONTRACT_OWNER, gas: 4712388 },
        );
    }
}
