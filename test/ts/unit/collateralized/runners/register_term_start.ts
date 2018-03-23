// modules
import { expect } from "chai";
import * as ABIDecoder from "abi-decoder";
import { compact } from "lodash";

// wrappers
import { MockCollateralizedTermsContractContract } from "types/generated/mock_collateralized_terms_contract";
import { MockDebtRegistryContract } from "types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "types/generated/mock_token_registry";

// scenarios
import { RegisterTermStartScenario, TestAccounts, TestContracts } from "./";

// utils
import { REVERT_ERROR } from "../../../test_utils/constants";

// logs
import { CollateralLocked } from "../../../logs/collateralized_contract";

export class RegisterTermStartRunner {
    private contracts: TestContracts;
    private accounts: TestAccounts;

    constructor() {
        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(contracts: TestContracts, accounts: TestAccounts) {
        this.contracts = contracts;
        this.accounts = accounts;
    }

    public testScenario(scenario: RegisterTermStartScenario) {
        let ATTACKER: string;
        let COLLATERALIZER: string;
        let MOCK_DEBT_KERNEL_ADDRESS: string;

        let mockCollateralizedTermsContract: MockCollateralizedTermsContractContract;
        let mockDebtRegistry: MockDebtRegistryContract;
        let mockCollateralToken: MockERC20TokenContract;
        let mockTokenRegistry: MockTokenRegistryContract;

        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                ATTACKER = this.accounts.ATTACKER;
                COLLATERALIZER = this.accounts.COLLATERALIZER;
                MOCK_DEBT_KERNEL_ADDRESS = this.accounts.MOCK_DEBT_KERNEL_ADDRESS;

                mockCollateralizedTermsContract = this.contracts.mockCollateralizedTermsContract;
                mockDebtRegistry = this.contracts.mockDebtRegistry;
                mockCollateralToken = this.contracts.mockCollateralToken;
                mockTokenRegistry = this.contracts.mockTokenRegistry;

                await mockDebtRegistry.reset.sendTransactionAsync();
                await mockCollateralToken.reset.sendTransactionAsync();
                await mockTokenRegistry.reset.sendTransactionAsync();

                // Mock the collateral token's presence in the token registry at
                // the specified index
                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    scenario.collateralTokenIndexInRegistry,
                    mockCollateralToken.address,
                );

                // Mock collateral token's balance for collateralizer
                await mockCollateralToken.mockBalanceOfFor.sendTransactionAsync(
                    COLLATERALIZER,
                    scenario.collateralTokenBalance,
                );

                // Mock collateral token's allowance for collateralizer
                await mockCollateralToken.mockAllowanceFor.sendTransactionAsync(
                    COLLATERALIZER,
                    mockCollateralizedTermsContract.address,
                    scenario.collateralTokenAllowance,
                );

                // Mock `debtRegistry.getTerms` return value
                await mockDebtRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    scenario.agreementId,
                    scenario.termsContract(mockCollateralizedTermsContract.address, ATTACKER),
                    scenario.termsContractParameters,
                );

                ABIDecoder.addABI(mockCollateralizedTermsContract.abi);
            });

            after(() => {
                ABIDecoder.removeABI(mockCollateralizedTermsContract.abi);
            });

            if (scenario.succeeds) {
                it("should register without throwing", async () => {
                    txHash = await mockCollateralizedTermsContract.registerTermStart.sendTransactionAsync(
                        scenario.agreementId,
                        COLLATERALIZER,
                        { from: scenario.from(MOCK_DEBT_KERNEL_ADDRESS, ATTACKER) },
                    );

                    expect(true);
                });

                it("should store record of collateralization", async () => {
                    await expect(
                        mockCollateralizedTermsContract.agreementToCollateralizer.callAsync(
                            scenario.agreementId,
                        ),
                    ).to.eventually.equal(COLLATERALIZER);
                });

                it("should emit log that collateral has been secured", async () => {
                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    const [collateralLockedLog] = compact(ABIDecoder.decodeLogs(receipt.logs));

                    expect(collateralLockedLog).to.deep.equal(
                        CollateralLocked(
                            mockCollateralizedTermsContract.address,
                            scenario.agreementId,
                            mockCollateralToken.address,
                            scenario.expectedCollateralAmount,
                        ),
                    );
                });

                it("should transfer collateral from collateralizer to terms contract", async () => {
                    await expect(
                        mockCollateralToken.wasTransferFromCalledWith.callAsync(
                            COLLATERALIZER,
                            mockCollateralizedTermsContract.address,
                            scenario.expectedCollateralAmount,
                        ),
                    ).to.eventually.be.true;
                });

                it("should throw on subsequent calls with same agreement id", async () => {
                    await expect(
                        mockCollateralizedTermsContract.registerTermStart.sendTransactionAsync(
                            scenario.agreementId,
                            COLLATERALIZER,
                            { from: scenario.from(MOCK_DEBT_KERNEL_ADDRESS, ATTACKER) },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            } else {
                it("should throw", async () => {
                    await expect(
                        mockCollateralizedTermsContract.registerTermStart.sendTransactionAsync(
                            scenario.agreementId,
                            COLLATERALIZER,
                            { from: scenario.from(MOCK_DEBT_KERNEL_ADDRESS, ATTACKER) },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            }
        });
    }
}
