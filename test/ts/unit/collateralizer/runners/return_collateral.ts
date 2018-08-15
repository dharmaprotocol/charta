// External Libraries
import { expect } from "chai";
import * as ABIDecoder from "abi-decoder";
import { compact } from "lodash";
import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";

// Wrappers
import { CollateralizerContract } from "types/generated/collateralizer";
import { MockDebtRegistryContract } from "types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "types/generated/mock_e_r_c20_token";
import { MockTokenRegistryContract } from "types/generated/mock_token_registry";
import { MockTokenTransferProxyContract } from "types/generated/mock_token_transfer_proxy";
import { MockCollateralizedTermsContractContract } from "../../../../../types/generated/mock_collateralized_terms_contract";

// Test Scenarios
import { ReturnCollateralScenario, TestAccounts, TestContracts } from "./";

// Test Utils
import { NULL_ADDRESS, REVERT_ERROR } from "../../../test_utils/constants";
import { Web3Utils } from "../../../../../utils/web3_utils";

// Factories
import { CollateralizedSimpleInterestTermsParameters } from "../../../factories/terms_contract_parameters";

// Logs
import { CollateralReturned } from "../../../logs/collateralized_contract";

export class ReturnCollateralRunner {
    private contracts: TestContracts;
    private accounts: TestAccounts;
    private web3Utils: Web3Utils;

    constructor(web3: Web3) {
        this.web3Utils = new Web3Utils(web3);

        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(contracts: TestContracts, accounts: TestAccounts) {
        this.contracts = contracts;
        this.accounts = accounts;
    }

    public testScenario(scenario: ReturnCollateralScenario) {
        let COLLATERALIZER: string;
        let NON_COLLATERALIZER: string;
        let BENEFICIARY_1: string;
        let BENEFICIARY_2: string;
        let ATTACKER: string;

        let collateralizer: CollateralizerContract;
        let mockDebtRegistry: MockDebtRegistryContract;
        let mockCollateralToken: MockERC20TokenContract;
        let mockTokenRegistry: MockTokenRegistryContract;
        let mockTokenTransferProxy: MockTokenTransferProxyContract;
        let mockTermsContract: MockCollateralizedTermsContractContract;

        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                collateralizer = this.contracts.collateralizer;
                mockDebtRegistry = this.contracts.mockDebtRegistry;
                mockCollateralToken = this.contracts.mockCollateralToken;
                mockTokenRegistry = this.contracts.mockTokenRegistry;
                mockTokenTransferProxy = this.contracts.mockTokenTransferProxy;
                mockTermsContract = this.contracts.mockTermsContract;

                BENEFICIARY_1 = this.accounts.BENEFICIARY_1;
                BENEFICIARY_2 = this.accounts.BENEFICIARY_2;
                ATTACKER = this.accounts.ATTACKER;
                COLLATERALIZER = this.accounts.COLLATERALIZER;
                NON_COLLATERALIZER = this.accounts.NON_COLLATERALIZER;

                await mockDebtRegistry.reset.sendTransactionAsync();
                await mockCollateralToken.reset.sendTransactionAsync();
                await mockTokenRegistry.reset.sendTransactionAsync();

                const latestBlockTime = await this.web3Utils.getLatestBlockTime();

                // We mock the collateralized agreement by taking the following steps:
                // 1.  Mocking the collateral token as being placed at index 0
                //        in the token registry
                await mockTokenRegistry.mockGetTokenAddressByIndex.sendTransactionAsync(
                    new BigNumber(0),
                    mockCollateralToken.address,
                );

                // 2.  Packing that index and other collateralization parameters
                //      into a terms contract parameter string.
                const termsContractParameters = CollateralizedSimpleInterestTermsParameters.pack({
                    collateralTokenIndex: new BigNumber(0),
                    collateralAmount: scenario.collateralAmount,
                    gracePeriodInDays: scenario.gracePeriodInDays,
                });

                // 2. Mocking the terms of the debt agreement to correspond to the
                //      collateralized terms contract and our generated parameters
                //      (if agreement exists)
                if (scenario.debtAgreementExists) {
                    await mockDebtRegistry.mockGetTermsReturnValueFor.sendTransactionAsync(
                        scenario.agreementId,
                        scenario.termsContract(mockTermsContract.address, ATTACKER),
                        termsContractParameters,
                    );
                }

                // 3. Mocking the debt's current beneficiary
                //        (if agreement exists)
                if (scenario.debtAgreementExists) {
                    await mockDebtRegistry.mockGetBeneficiaryReturnValueFor.sendTransactionAsync(
                        scenario.agreementId,
                        BENEFICIARY_1,
                    );
                }

                /*
                    Actually perform collateralization before returning.
                 */
                // Mock collateral token's balance for collateralizer.
                await mockCollateralToken.mockBalanceOfFor.sendTransactionAsync(
                    COLLATERALIZER,
                    scenario.collateralAmount,
                );

                // Mock collateral token's allowance for proxy.
                await mockCollateralToken.mockAllowanceFor.sendTransactionAsync(
                    COLLATERALIZER,
                    mockTokenTransferProxy.address,
                    scenario.collateralAmount,
                );

                if (scenario.debtAgreementExists && scenario.debtAgreementCollateralized) {
                    await mockTermsContract.mockCallCollateralize.sendTransactionAsync(
                        collateralizer.address,
                        scenario.agreementId,
                        COLLATERALIZER,
                    );
                }

                // 5. Mocking the expected repayment schedule for the agreement id
                for (const repaymentDate of scenario.expectedRepaymentValueSchedule) {
                    await mockTermsContract.mockExpectedRepaymentValue.sendTransactionAsync(
                        scenario.agreementId,
                        new BigNumber(repaymentDate.timestamp(latestBlockTime)),
                        repaymentDate.expectedRepaymentValue,
                    );
                }

                // 6.  Mocking the current value repaid to date
                await mockTermsContract.mockDummyValueRepaid.sendTransactionAsync(
                    scenario.agreementId,
                    scenario.valueRepaidToDate,
                );

                // 7.  Mocking the debt term's ending timestamp
                await mockTermsContract.mockTermEndTimestamp.sendTransactionAsync(
                    scenario.agreementId,
                    new BigNumber(scenario.termEndTimestamp(latestBlockTime)),
                );

                if (typeof scenario.before !== "undefined") {
                    await scenario.before(collateralizer, mockTermsContract);
                }

                ABIDecoder.addABI(collateralizer.abi);
            });

            after(() => {
                ABIDecoder.removeABI(collateralizer.abi);
            });

            if (scenario.succeeds) {
                it("should not throw", async () => {
                    txHash = await collateralizer.returnCollateral.sendTransactionAsync(
                        scenario.agreementId,
                        { from: scenario.from(COLLATERALIZER, NON_COLLATERALIZER) },
                    );

                    expect(txHash.length).to.equal(66);
                });

                it("should erase record of current collateralization", async () => {
                    await expect(
                        collateralizer.agreementToCollateralizer.callAsync(scenario.agreementId),
                    ).to.eventually.equal(NULL_ADDRESS);
                });

                it("should emit log that collateral has been returned", async () => {
                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    const [CollateralReturnedLog] = compact(ABIDecoder.decodeLogs(receipt.logs));

                    expect(CollateralReturnedLog).to.deep.equal(
                        CollateralReturned(
                            collateralizer.address,
                            scenario.agreementId,
                            COLLATERALIZER,
                            mockCollateralToken.address,
                            scenario.collateralAmount,
                        ),
                    );
                });

                it("should transfer collateral from collateralizer contract to owner", async () => {
                    await expect(
                        mockCollateralToken.wasTransferCalledWith.callAsync(
                            COLLATERALIZER,
                            scenario.collateralAmount,
                        ),
                    ).to.eventually.be.true;
                });
            } else {
                it("should throw", async () => {
                    await expect(
                        collateralizer.returnCollateral.sendTransactionAsync(scenario.agreementId, {
                            from: scenario.from(COLLATERALIZER, NON_COLLATERALIZER),
                        }),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            }
        });
    }
}
