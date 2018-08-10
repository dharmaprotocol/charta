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
import { CollateralLocked } from "../../../../logs/collateralized_contract";
// Runners
import { ERC721CollateralizedSimpleInterestTermsContractRunner } from "./erc_721_collateralized_simple_interest_terms_contract";

export class RegisterTermStartRunner extends ERC721CollateralizedSimpleInterestTermsContractRunner {
    public testScenario(scenario: RegisterTermStartScenario) {
        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                // if (!scenario.permissionToCollateralize) {
                //     await this.contracts.erc721CollateralizerContract.revokeCollateralizeAuthorization
                //         .sendTransactionAsync(
                //             this.contracts.erc721CollateralizedSimpleInterestTermsContract.address,
                //             { from: this.accounts.CONTRACT_OWNER },
                //         );
                // }

                if (scenario.invokedByDebtKernel && !scenario.reverts) {
                    // const latestBlockTime = await this.web3Utils.getLatestBlockTime();

                    // Fill the debt order, thereby invoking registerTermsStart from the debt kernel.
                    txHash = await this.fillDebtOrder();
                }

                // Setup ABI decoder in order to decode logs.
                ABIDecoder.addABI(this.contracts.erc721CollateralizedSimpleInterestTermsContract.abi);
                ABIDecoder.addABI(this.contracts.erc721CollateralizerContract.abi);
            });

            after(async () => {
                // if (!scenario.permissionToCollateralize) {
                //     await this.contracts.erc721CollateralizerContract.addAuthorizedCollateralizeAgent.sendTransactionAsync(
                //         this.contracts.erc721CollateralizedSimpleInterestTermsContract.address,
                //         { from: this.accounts.CONTRACT_OWNER },
                //     );
                // }

                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.contracts.erc721CollateralizedSimpleInterestTermsContract.abi);
                ABIDecoder.removeABI(this.contracts.erc721CollateralizerContract.abi);
            });

            if (scenario.succeeds) {
                it("should emit a LogSimpleInterestTermStart event", async () => {
                    const { erc721CollateralizedSimpleInterestTermsContract } = this.contracts;
                    const debtOrder = this.debtOrder;

                    const expectedLog = LogSimpleInterestTermStart(
                        erc721CollateralizedSimpleInterestTermsContract.address,
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
                    const { erc721CollateralizerContract } = this.contracts;

                    const expectedLog = CollateralLocked(
                        erc721CollateralizerContract.address,
                        this.agreementId,
                        this.contracts.erc721TokenContract.address,
                        scenario.collateralId,
                    );

                    const returnedLog = await this.getLogs(txHash, "CollateralLocked");

                    expect(expectedLog).to.deep.equal(returnedLog);
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
        const { erc721CollateralizedSimpleInterestTermsContract } = this.contracts;

        return erc721CollateralizedSimpleInterestTermsContract.registerTermStart.sendTransactionAsync(
            this.agreementId,
            DEBTOR_1,
            { from: UNDERWRITER },
        );
    }
}
