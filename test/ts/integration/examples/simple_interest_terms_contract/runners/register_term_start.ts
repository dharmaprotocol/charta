// External libraries
import * as ABIDecoder from "abi-decoder";
import { expect } from "chai";

// Test Utils
import { REVERT_ERROR } from "../../../../test_utils/constants";

// Scenario runners
import { RegisterTermStartScenario } from "../scenarios";

// Logs
import { LogSimpleInterestTermStart } from "../../../../logs/simple_interest_terms_contract";

// Runners
import { SimpleInterestTermsContractRunner } from "./simple_interest_terms_contract";

export class RegisterTermStartRunner extends SimpleInterestTermsContractRunner {
    public testScenario(scenario: RegisterTermStartScenario) {
        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                if (scenario.invokedByDebtKernel && !scenario.reverts) {
                    // Fill the debt order, thereby invoking registerTermsStart from the debt kernel.
                    txHash = await this.fillDebtOrder();
                }

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.contracts.simpleInterestTermsContract.abi);
            });

            after(() => {
                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.contracts.simpleInterestTermsContract.abi);
            });

            if (scenario.succeeds) {
                it("should emit a LogSimpleInterestTermStart event", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const debtOrder = this.debtOrder;

                    const expectedLog = LogSimpleInterestTermStart(
                        simpleInterestTermsContract.address,
                        this.agreementId,
                        debtOrder.getPrincipalTokenAddress(),
                        debtOrder.getPrincipalAmount(),
                        scenario.interestRateFixedPoint,
                        scenario.amortizationUnitType,
                        scenario.termLengthUnits,
                    );

                    const returnedLog = await this.getLogs(txHash, "LogSimpleInterestTermStart");
                    expect(returnedLog).to.deep.equal(expectedLog);
                });
            } else {
                if (scenario.reverts) {
                    it("should revert the transaction", async () => {
                        if (!scenario.invokedByDebtKernel) {
                            expect(this.registerTermsStart()).to.eventually.be.rejectedWith(
                                REVERT_ERROR,
                            );
                        } else {
                            expect(this.fillDebtOrder()).to.eventually.be.rejectedWith(
                                REVERT_ERROR,
                            );
                        }
                    });
                } else {
                    it("should not emit a LogSimpleInterestTermStart event", async () => {
                        const returnedLog = await this.getLogs(
                            txHash,
                            "LogSimpleInterestTermStart",
                        );

                        expect(returnedLog).to.be.undefined;
                    });
                }
            }
        });
    }

    private registerTermsStart() {
        const { DEBTOR_1, UNDERWRITER } = this.accounts;
        const { simpleInterestTermsContract } = this.contracts;

        return simpleInterestTermsContract.registerTermStart.sendTransactionAsync(
            this.agreementId,
            DEBTOR_1,
            { from: UNDERWRITER },
        );
    }
}
