// External libraries
import * as ABIDecoder from "abi-decoder";
import * as Web3 from "web3";
import { BigNumber } from "bignumber.js";
import { expect } from "chai";

// Scenarios
import { SeizeCollateralScenario } from "../scenarios";

// Logs
import { ERC721CollateralSeized } from "../../../../logs/collateralized_contract";

// Runners
import {
    ERC721CollateralizedSimpleInterestTermsContractRunner as Runner,
} from "./erc_721_collateralized_simple_interest_terms_contract";

// Types
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

// Test utils
import { REVERT_ERROR } from "../../../../test_utils/constants";

export class SeizeCollateralRunner extends Runner {
    constructor(web3: Web3) {
        super(web3);
    }

    public testScenario(scenario: SeizeCollateralScenario) {
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

                if (scenario.secondsSinceFill) {
                    await this.web3Utils.increaseTime(scenario.secondsSinceFill);
                }
                
                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.contracts.erc721CollateralizerContract.abi);
            });

            after(() => {
                ABIDecoder.removeABI(this.contracts.erc721CollateralizerContract.abi);
            });

            if (scenario.reverts) {
                it("should revert the transaction", async () => {
                    const transaction = this.contracts.erc721CollateralizerContract.seizeCollateral
                        .sendTransactionAsync(this.agreementId);

                    await expect(transaction).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            } else {
                // If the scenario does not revert, we can call the function and get the txHash.
                before(async () => {
                    txHash = await this.contracts.erc721CollateralizerContract.seizeCollateral
                        .sendTransactionAsync(this.agreementId);
                });
            }

            if (scenario.succeeds) {
                it("should transfer the collateral to the creditor", async () => {
                    const { CREDITOR_1 } = this.accounts;

                    const contract = this.collateralContract(scenario);

                    const owner = await contract.ownerOf.callAsync(scenario.collateralId);

                    expect(owner).to.equal(CREDITOR_1);
                });

                it("should emit a CollateralSeized event", async () => {
                    const { CREDITOR_1 } = this.accounts;

                    const { erc721CollateralizerContract } = this.contracts;

                    const contract = this.collateralContract(scenario);

                    const returnedLog = await this.getLogs(txHash, "CollateralSeized");

                    const expectedLog = ERC721CollateralSeized(
                        erc721CollateralizerContract.address,
                        this.agreementId,
                        CREDITOR_1,
                        contract.address,
                        scenario.collateralId,
                    );

                    expect(returnedLog).to.deep.equal(expectedLog);
                });
            } else {
                it("should keep ownership of the collateral", async () => {
                    const contract = this.collateralContract(scenario);

                    const owner = await contract.ownerOf.callAsync(scenario.collateralId);

                    expect(owner).to.equal(this.contracts.erc721CollateralizerContract.address);
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
