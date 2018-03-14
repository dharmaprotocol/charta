// modules
import { expect } from "chai";
import * as ABIDecoder from "abi-decoder";
import { compact } from "lodash";
import { BigNumber } from "bignumber.js";

// wrappers
import { DummyCollateralizedContractContract } from "types/generated/dummy_collateralized_contract";
import { MockDebtRegistryContract } from "types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "types/generated/mock_token_registry";

// scenarios
import { SeizeCollateralScenario, TestAccounts, TestContracts } from "./";

// utils
import { NULL_ADDRESS, REVERT_ERROR } from "../../../test_utils/constants";

// logs
import { CollateralSeized } from "../../../logs/collateralized_contract";

export class SeizeCollateralRunner {
    private contracts: TestContracts;
    private accounts: TestAccounts;

    constructor() {
        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(contracts: TestContracts, accounts: TestAccounts) {
        this.contracts = contracts;
        this.accounts = accounts;
    }

    public testScenario(scenario: SeizeCollateralScenario) {
        let dummyCollateralizedContract: DummyCollateralizedContractContract;
        let mockDebtRegistry: MockDebtRegistryContract;
        let mockCollateralToken: MockERC20TokenContract;
        let mockTokenRegistry: MockTokenRegistryContract;

        let COLLATERALIZER: string;
        let BENEFICIARY_1: string;
        let BENEFICIARY_2: string;
        let ATTACKER: string;

        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                dummyCollateralizedContract = this.contracts.dummyCollateralizedContract;
                mockDebtRegistry = this.contracts.mockDebtRegistry;
                mockCollateralToken = this.contracts.mockCollateralToken;
                mockTokenRegistry = this.contracts.mockTokenRegistry;

                COLLATERALIZER = this.accounts.COLLATERALIZER;
                BENEFICIARY_1 = this.accounts.BENEFICIARY_1;
                BENEFICIARY_2 = this.accounts.BENEFICIARY_2;
                ATTACKER = this.accounts.ATTACKER;

                await mockDebtRegistry.reset.sendTransactionAsync();
                await mockCollateralToken.reset.sendTransactionAsync();
                await mockTokenRegistry.reset.sendTransactionAsync();

                // We mock the collateralized agreement by taking the following steps:

                // 1.  Mocking the collateral token as being placed at index 0
                //        in the token registry
                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    new BigNumber(0),
                    mockCollateralToken.address,
                );

                // 2.  Packing that index and other collateralization parameters
                //      into a terms contract parameter string.
                const termsContractParameters = this.packTermsContractParameters(
                    new BigNumber(0),
                    scenario.collateralAmount,
                    scenario.gracePeriodInDays,
                );

                // 2. Mocking the terms of the debt agreement to correspond to the
                //      collateralized terms contract and our generated parameters
                await mockDebtRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    scenario.agreementId,
                    dummyCollateralizedContract.address,
                    termsContractParameters,
                );

                // 3. Mocking the debt's current beneficiary
                await mockDebtRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                    scenario.agreementId,
                    scenario.beneficiary(BENEFICIARY_1, BENEFICIARY_2),
                );

                // 4. Mocking the current "collateralizer" value associated with the agreement
                //      id to be non-zero, indicating that the agreement has begun and
                //      the collateral has been pulled.
                await dummyCollateralizedContract.setDummyAgreementCollateralizer.sendTransactionAsync(
                    scenario.agreementId,
                    COLLATERALIZER,
                );

                // 5. Mocking the expected repayment schedule for the agreement id
                for (const repaymentDate of scenario.expectedRepaymentValueSchedule) {
                    await dummyCollateralizedContract.mockExpectedRepaymentValue.sendTransactionAsync(
                        scenario.agreementId,
                        new BigNumber(repaymentDate.timestamp),
                        repaymentDate.expectedRepaymentValue,
                    );
                }

                // 6.  Mocking the current value repaid to date
                await dummyCollateralizedContract.setDummyValueRepaid.sendTransactionAsync(
                    scenario.agreementId,
                    scenario.valueRepaidToDate,
                );

                ABIDecoder.addABI(dummyCollateralizedContract.abi);
            });

            after(() => {
                ABIDecoder.removeABI(dummyCollateralizedContract.abi);
            });

            if (scenario.succeeds) {
                it("should not throw", async () => {
                    txHash = await dummyCollateralizedContract.seizeCollateral.sendTransactionAsync(
                        scenario.agreementId,
                        { from: scenario.from(BENEFICIARY_1, BENEFICIARY_2) },
                    );

                    expect(true);
                });

                it("should erase record of current collateralization", async () => {
                    await expect(
                        dummyCollateralizedContract.agreementToCollateralizer.callAsync(
                            scenario.agreementId,
                        ),
                    ).to.eventually.equal(NULL_ADDRESS);
                });

                it("should emit log that collateral has been seized", async () => {
                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    const [CollateralSeizedLog] = compact(ABIDecoder.decodeLogs(receipt.logs));

                    expect(CollateralSeizedLog).to.deep.equal(
                        CollateralSeized(
                            dummyCollateralizedContract.address,
                            scenario.agreementId,
                            scenario.beneficiary(BENEFICIARY_1, BENEFICIARY_2),
                            mockCollateralToken.address,
                            scenario.collateralAmount,
                        ),
                    );
                });

                it("should transfer collateral from collateralizer to terms contract", async () => {
                    await expect(
                        mockCollateralToken.wasTransferCalledWith.callAsync(
                            scenario.beneficiary(BENEFICIARY_1, BENEFICIARY_2),
                            scenario.collateralAmount,
                        ),
                    ).to.eventually.be.true;
                });
            } else {
                it("should throw", async () => {
                    await expect(
                        dummyCollateralizedContract.seizeCollateral.sendTransactionAsync(
                            scenario.agreementId,
                            { from: scenario.from(BENEFICIARY_1, ATTACKER) },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            }
        });
    }

    private packTermsContractParameters(
        collateralTokenIndex: BigNumber,
        collateralAmount: BigNumber,
        gracePeriodInDays: BigNumber,
    ): string {
        const { mockTokenRegistry } = this.contracts;

        const encodedCollateralToken = collateralTokenIndex.toString(16).padStart(2, "0");
        const encodedCollateralAmount = collateralAmount.toString(16).padStart(23, "0");
        const encodedGracePeriodInDays = gracePeriodInDays.toString(16).padStart(2, "0");

        const packedCollateralParameters =
            encodedCollateralToken + encodedCollateralAmount + encodedGracePeriodInDays;

        return `0x${packedCollateralParameters.padStart(64, "0")}`;
    }
}
