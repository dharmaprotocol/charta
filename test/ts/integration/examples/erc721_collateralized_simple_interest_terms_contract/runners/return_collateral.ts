// External libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import { BigNumber } from "bignumber.js";
import { expect } from "chai";

// Scenarios
import { ReturnCollateralScenario } from "../scenarios";

// Logs
import { ERC721CollateralReturned } from "../../../../logs/collateralized_contract";

// Runners
import {
    ERC721CollateralizedSimpleInterestTermsContractRunner as Runner,
} from "./erc_721_collateralized_simple_interest_terms_contract";

// Types
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

// Test utils
import { REVERT_ERROR } from "../../../../test_utils/constants";

export class ReturnCollateralRunner extends Runner {
    constructor(web3: Web3) {
        super(web3);
    }

    public testScenario(scenario: ReturnCollateralScenario) {
        let txHash: string;
        let dummyREPToken: DummyTokenContract;
        let dummyZRXToken: DummyTokenContract;

        describe(scenario.description, () => {
            before(async () => {
                await this.setupDebtOrder(scenario);

                dummyZRXToken = this.contracts.dummyZRXToken;
                dummyREPToken = this.contracts.dummyREPToken;

                const { CONTRACT_OWNER, DEBTOR_1 } = this.accounts;

                const { tokenTransferProxy } = this.contracts;

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

                if (scenario.repaymentAmount.greaterThan(0)) {
                    await this.repayWithRouter(
                        scenario.repaymentAmount,
                        dummyREPToken.address,
                    );
                }

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.contracts.erc721CollateralizerContract.abi);
            });

            after(() => {
                ABIDecoder.removeABI(this.contracts.erc721CollateralizerContract.abi);
            });

            if (scenario.reverts) {
                it("should revert the transaction", async () => {
                    const transaction = this.contracts.erc721CollateralizerContract.returnCollateral
                        .sendTransactionAsync(this.agreementId);

                    await expect(transaction).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            } else {
                // If the scenario does not revert, we can call the function and get the txHash.
                before(async () => {
                    txHash = await this.contracts.erc721CollateralizerContract.returnCollateral
                        .sendTransactionAsync(this.agreementId);
                });
            }

            if (scenario.succeeds) {
                it("should return the collateral to the debtor", async () => {
                    const { DEBTOR_1 } = this.accounts;

                    const {
                        erc721TokenContract,
                        cryptoKittyContract,
                    } = this.contracts;

                    const contract = scenario.isCryptoKitty
                        ? cryptoKittyContract
                        : erc721TokenContract;

                    const owner = await contract.ownerOf.callAsync(scenario.collateralId);
                    expect(owner).to.equal(DEBTOR_1);
                });

                it("should emit a CollateralReturned event", async () => {
                    const { DEBTOR_1 } = this.accounts;

                    const {
                        erc721CollateralizerContract,
                        erc721TokenContract,
                        cryptoKittyContract,
                    } = this.contracts;

                    const contractAddress = scenario.isCryptoKitty
                        ? cryptoKittyContract.address
                        : erc721TokenContract.address;

                    const returnedLog = await this.getLogs(txHash, "CollateralReturned");

                    const expectedLog = ERC721CollateralReturned(
                        erc721CollateralizerContract.address,
                        this.agreementId,
                        DEBTOR_1,
                        contractAddress,
                        scenario.collateralId,
                    );

                    expect(returnedLog).to.deep.equal(expectedLog);
                });
            } else {
                it("should keep ownership of the collateral", async () => {
                    const {
                        erc721TokenContract,
                        cryptoKittyContract,
                        erc721CollateralizerContract,
                    } = this.contracts;

                    const contract = scenario.isCryptoKitty
                        ? cryptoKittyContract
                        : erc721TokenContract;

                    const owner = await contract.ownerOf.callAsync(scenario.collateralId);
                    expect(owner).to.equal(erc721CollateralizerContract.address);
                });
            }
        });
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
