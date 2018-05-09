// External libraries
import * as ABIDecoder from "abi-decoder";
import { BigNumber } from "bignumber.js";
import { expect } from "chai";

// Test Utils
import { REVERT_ERROR } from "../../../../test_utils/constants";

// Scenario runners
import { RegisterTermStartScenario } from "../scenarios";

// Logs
import { LogSimpleInterestTermStart } from "../../../../logs/simple_interest_terms_contract";

// Runners
import { CollateralizedSimpleInterestTermsContractRunner } from "./collateralized_simple_interest_terms_contract";
import { CollateralLocked } from "../../../../logs/collateralized_contract";

export class RegisterTermStartRunner extends CollateralizedSimpleInterestTermsContractRunner {
    public testScenario(scenario: RegisterTermStartScenario) {
        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                // Reset the collateralizer contract's balance for each example.
                await this.contracts.dummyZRXToken.setBalance.sendTransactionAsync(
                    this.contracts.collateralizerContract.address,
                    new BigNumber(0),
                    {
                        from: this.accounts.CONTRACT_OWNER,
                    },
                );

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

                if (!scenario.permissionToCollateralize) {
                    await this.contracts.collateralizerContract.revokeCollateralizeAuthorization.sendTransactionAsync(
                        this.contracts.collateralizedSimpleInterestTermsContract.address,
                        { from: this.accounts.CONTRACT_OWNER },
                    );
                }

                if (scenario.invokedByDebtKernel && !scenario.reverts) {
                    const latestBlockTime = await this.web3Utils.getLatestBlockTime();

                    // Fill the debt order, thereby invoking registerTermsStart from the debt kernel.
                    txHash = await this.fillDebtOrder();
                }

                // Setup ABI decoder in order to decode logs.
                ABIDecoder.addABI(this.contracts.collateralizedSimpleInterestTermsContract.abi);
                ABIDecoder.addABI(this.contracts.collateralizerContract.abi);
            });

            after(async () => {
                if (!scenario.permissionToCollateralize) {
                    await this.contracts.collateralizerContract.addAuthorizedCollateralizeAgent.sendTransactionAsync(
                        this.contracts.collateralizedSimpleInterestTermsContract.address,
                        { from: this.accounts.CONTRACT_OWNER },
                    );
                }

                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.contracts.collateralizedSimpleInterestTermsContract.abi);
                ABIDecoder.removeABI(this.contracts.collateralizerContract.abi);
            });

            if (scenario.succeeds) {
                it("should emit a LogSimpleInterestTermStart event", async () => {
                    const { collateralizedSimpleInterestTermsContract } = this.contracts;
                    const debtOrder = this.debtOrder;

                    const expectedLog = LogSimpleInterestTermStart(
                        collateralizedSimpleInterestTermsContract.address,
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

                it("should emit a CollateralLocked event", async () => {
                    const { collateralizerContract } = this.contracts;

                    const expectedLog = CollateralLocked(
                        collateralizerContract.address,
                        this.agreementId,
                        this.contracts.dummyZRXToken.address,
                        scenario.collateralAmount,
                    );

                    const returnedLog = await this.getLogs(txHash, "CollateralLocked");

                    expect(returnedLog).to.deep.equal(expectedLog);
                });

                it("should decrement the balance for the debtor by the collateral amount", async () => {
                    const balance = await this.contracts.dummyZRXToken.balanceOf.callAsync(
                        this.accounts.DEBTOR_1,
                    );

                    expect(balance.toString()).to.equal(
                        scenario.collateralTokenBalance.sub(scenario.collateralAmount).toString(),
                    );
                });

                it("should increment the collateralizer balance by the collateral amount", async () => {
                    const balance = await this.contracts.dummyZRXToken.balanceOf.callAsync(
                        this.contracts.collateralizerContract.address,
                    );

                    expect(balance.toString()).to.equal(scenario.collateralAmount.toString());
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
        const { collateralizedSimpleInterestTermsContract } = this.contracts;

        return collateralizedSimpleInterestTermsContract.registerTermStart.sendTransactionAsync(
            this.agreementId,
            DEBTOR_1,
            { from: UNDERWRITER },
        );
    }
}
