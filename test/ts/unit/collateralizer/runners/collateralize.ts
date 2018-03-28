// modules
import { expect } from "chai";
import * as ABIDecoder from "abi-decoder";
import { compact } from "lodash";
import * as Units from "../../../test_utils/units";

// wrappers
import { CollateralizerContract } from "types/generated/collateralizer";
import { MockDebtRegistryContract } from "types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "types/generated/mock_token_registry";


// scenarios
import {CollateralizeScenario, TestAccounts, TestContracts} from "./";

// utils
import { REVERT_ERROR } from "../../../test_utils/constants";

// logs
import { CollateralLocked } from "../../../logs/collateralized_contract";

export class CollateralizeRunner {
    private contracts: TestContracts;
    private accounts: TestAccounts;

    constructor() {
        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(contracts: TestContracts, accounts: TestAccounts) {
        this.contracts = contracts;
        this.accounts = accounts;
    }

    public testScenario(scenario: CollateralizeScenario) {
        let ATTACKER: string;
        let COLLATERALIZER: string;
        let MOCK_DEBT_KERNEL_ADDRESS: string;
        let MOCK_TERMS_CONTRACT_ADDRESS: string;

        let collateralizer: CollateralizerContract;
        let mockDebtRegistry: MockDebtRegistryContract;
        let mockCollateralToken: MockERC20TokenContract;
        let mockTokenRegistry: MockTokenRegistryContract;

        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                ATTACKER = this.accounts.ATTACKER;
                COLLATERALIZER = this.accounts.COLLATERALIZER;
                MOCK_DEBT_KERNEL_ADDRESS = this.accounts.MOCK_DEBT_KERNEL_ADDRESS;
                MOCK_TERMS_CONTRACT_ADDRESS = this.accounts.MOCK_TERMS_CONTRACT_ADDRESS;

                collateralizer = this.contracts.collateralizer;
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
                    collateralizer.address,
                    scenario.collateralTokenAllowance,
                );

                // Mock `debtRegistry.getTerms` return value
                await mockDebtRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                    scenario.agreementId,
                    scenario.termsContract(MOCK_TERMS_CONTRACT_ADDRESS, ATTACKER),
                    scenario.termsContractParameters,
                );

                // Mock the collateral token's presence in the token registry at
                // the specified index
                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    scenario.collateralTokenIndexInRegistry,
                    this.contracts.mockCollateralToken.address,
                );

                // Mock collateral token's allowance for proxy.
                await this.contracts.mockCollateralToken.mockAllowanceFor.sendTransactionAsync(
                    COLLATERALIZER,
                    this.contracts.mockTokenTransferProxy.address,
                    Units.ether(1),
                );

                ABIDecoder.addABI(collateralizer.abi);
            });

            after(() => {
                ABIDecoder.removeABI(collateralizer.abi);
            });

            if (scenario.succeeds) {
                it("should return a valid transaction hash", async () => {
                    const result = await collateralizer.collateralize.sendTransactionAsync(
                        scenario.agreementId,
                        COLLATERALIZER,
                        { from: scenario.from(MOCK_TERMS_CONTRACT_ADDRESS, ATTACKER) },
                    );

                    expect(result.length).to.equal(66);
                });
            }
        });
    }
}
