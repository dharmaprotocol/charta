// modules
import { expect } from "chai";
import * as ABIDecoder from "abi-decoder";
import { compact } from "lodash";

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
import {MockTokenTransferProxyContract} from "../../../../../types/generated/mock_token_transfer_proxy";

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
        let mockTokenTransferProxy: MockTokenTransferProxyContract;

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
                mockTokenTransferProxy = this.contracts.mockTokenTransferProxy;

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
                await mockCollateralToken.mockAllowanceFor.sendTransactionAsync(
                    COLLATERALIZER,
                    mockTokenTransferProxy.address,
                    scenario.collateralTokenAllowance,
                );

                ABIDecoder.addABI(collateralizer.abi);
            });

            after(() => {
                ABIDecoder.removeABI(collateralizer.abi);
            });

            if (scenario.succeeds) {
                it("should return a valid transaction hash", async () => {
                    txHash = await collateralizer.collateralize.sendTransactionAsync(
                        scenario.agreementId,
                        COLLATERALIZER,
                        { from: scenario.from(MOCK_TERMS_CONTRACT_ADDRESS, ATTACKER) },
                    );

                    expect(txHash.length).to.equal(66);
                });

                it("should store record of collateralization", async () => {
                    await expect(
                        collateralizer.agreementToCollateralizer.callAsync(
                            scenario.agreementId,
                        ),
                    ).to.eventually.equal(COLLATERALIZER);
                });

                it("should emit log that collateral has been secured", async () => {
                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    const [collateralLockedLog] = compact(ABIDecoder.decodeLogs(receipt.logs));

                    expect(collateralLockedLog).to.deep.equal(
                        CollateralLocked(
                            collateralizer.address,
                            scenario.agreementId,
                            mockCollateralToken.address,
                            scenario.expectedCollateralAmount,
                        ),
                    );
                });

                it("should transfer collateral from debtor to collateralizer contract via proxy", async () => {
                    await expect(
                        mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                            mockCollateralToken.address,
                            COLLATERALIZER,
                            collateralizer.address,
                            scenario.expectedCollateralAmount,
                        ),
                    ).to.eventually.be.true;
                });

                it("should throw on subsequent calls with same agreement id", async () => {
                    await expect(
                        collateralizer.collateralize.sendTransactionAsync(
                            scenario.agreementId,
                            COLLATERALIZER,
                            { from: scenario.from(MOCK_TERMS_CONTRACT_ADDRESS, ATTACKER) },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            } else {
                it("should throw", async () => {
                    await expect(
                        collateralizer.collateralize.sendTransactionAsync(
                            scenario.agreementId,
                            COLLATERALIZER,
                            { from: scenario.from(MOCK_TERMS_CONTRACT_ADDRESS, ATTACKER) },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            }
        });
    }
}
