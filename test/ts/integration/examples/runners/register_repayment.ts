// External libraries
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { expect } from "chai";
import { BigNumber } from "bignumber.js";

// Test Utils
import { REVERT_ERROR } from "../../../test_utils/constants";

// Scenario runners
import { RegisterRepaymentScenario, TermsParams, TestAccounts, TestContracts } from "../runners";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";

// Logs
import { LogRegisterRepayment } from "../../../logs/simple_interest_terms_contract";

export class RegisterRepaymentRunner {
    private accounts: TestAccounts;
    private contracts: TestContracts;
    private termsParams: TermsParams;
    private debtOrder: SignedDebtOrder;

    constructor() {
        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(
        testAccounts: TestAccounts, testContracts: TestContracts, debtOrder: SignedDebtOrder, termsParams: TermsParams
    ) {
        this.accounts = testAccounts;
        this.contracts = testContracts;
        this.debtOrder = debtOrder;
        this.termsParams = termsParams;
    }

    public testScenario(scenario: RegisterRepaymentScenario) {
        let txHash: string;
        let dummyREPToken: DummyTokenContract;
        let dummyZRXToken: DummyTokenContract;

        describe(scenario.description, () => {

            before(async () => {
                const {
                    CONTRACT_OWNER,
                    DEBTOR_1,
                } = this.accounts;

                const {
                    tokenTransferProxy,
                    simpleInterestTermsContract,
                    dummyTokenRegistryContract,
                } = this.contracts;

                dummyREPToken = this.contracts.dummyREPToken;

                const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

                const dummyZRXTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
                    "ZRX",
                );

                const principalToken = scenario.principalToken(dummyREPToken);

                dummyZRXToken = await DummyTokenContract.at(dummyZRXTokenAddress, web3, TX_DEFAULTS);

                await this.fillDebtOrder();

                await principalToken.setBalance.sendTransactionAsync(DEBTOR_1, scenario.repaymentAmount, {
                    from: CONTRACT_OWNER,
                });

                await principalToken.approve.sendTransactionAsync(
                    tokenTransferProxy.address,
                    scenario.repaymentAmount,
                    { from: DEBTOR_1 },
                );

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(simpleInterestTermsContract.abi);
            });

            after(() => {
                const { simpleInterestTermsContract } = this.contracts;

                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(simpleInterestTermsContract.abi);
            });

            if (scenario.succeeds) {
                before(async () => {
                    if (scenario.repayFromRouter) {
                        txHash = await this.repayWithRouter(
                            scenario.repaymentAmount,
                            scenario.repaymentToken(dummyREPToken, dummyZRXToken).address,
                        );
                    }
                });

                it("should emit a LogRegisterRepayment event", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const { AGREEMENT_ID } = this.termsParams;
                    const { DEBTOR_1, CREDITOR_1 } = this.accounts;
                    const debtOrder = this.debtOrder;

                    const returnedLog = await this.getLogs(txHash, "LogRegisterRepayment");

                    const expectedLog = LogRegisterRepayment(
                        simpleInterestTermsContract.address,
                        AGREEMENT_ID,
                        DEBTOR_1,
                        CREDITOR_1,
                        scenario.repaymentAmount,
                        debtOrder.getPrincipalTokenAddress(),
                    );

                    expect(returnedLog).to.deep.equal(expectedLog);
                });

                it("should record the repayment", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const { AGREEMENT_ID } = this.termsParams;

                    await expect(
                        simpleInterestTermsContract.getValueRepaidToDate.callAsync(AGREEMENT_ID),
                    ).to.eventually.bignumber.equal(scenario.repaymentAmount);
                });
            } else {
                if (scenario.reverts) {
                    it("should revert the transaction", async () => {
                        // The transaction can be reverted via the router, or the terms contract itself.
                        let transaction;

                        if (scenario.repayFromRouter) {
                            transaction = this.repayWithRouter(
                                scenario.repaymentAmount,
                                scenario.repaymentToken(dummyREPToken, dummyZRXToken).address,
                            );
                        } else {
                            // The transaction is attempted on the terms contract itself.
                            transaction = this.registerRepayment(scenario.repaymentAmount);
                        }

                        await expect(transaction).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                }

                it("should not record a repayment", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const { AGREEMENT_ID } = this.termsParams;

                    await expect(
                        simpleInterestTermsContract.getValueRepaidToDate.callAsync(AGREEMENT_ID),
                    ).to.eventually.bignumber.equal(0);
                });
            }
        });
    }

    // Calls registerRepayment() directly on the terms contract.
    private registerRepayment(amount: BigNumber) {
        const { simpleInterestTermsContract } = this.contracts;
        const { AGREEMENT_ID } = this.termsParams;
        const { DEBTOR_1, CREDITOR_1 } = this.accounts;
        const debtOrder = this.debtOrder;

        return simpleInterestTermsContract.registerRepayment.sendTransactionAsync(
            AGREEMENT_ID,
            DEBTOR_1,
            CREDITOR_1,
            amount,
            debtOrder.getPrincipalTokenAddress(),
            {from: DEBTOR_1},
        );
    }

    private repayWithRouter(amount: BigNumber, tokenAddress: string) {
        const { repaymentRouter } = this.contracts;
        const { AGREEMENT_ID } = this.termsParams;
        const { DEBTOR_1 } = this.accounts;

        return repaymentRouter.repay.sendTransactionAsync(
            AGREEMENT_ID,
            amount,
            tokenAddress,
            { from: DEBTOR_1 },
        );
    }

    private async getLogs(txHash: string, event: string) {
        const receipt = await web3.eth.getTransactionReceipt(txHash);

        return _.find(
            ABIDecoder.decodeLogs(receipt.logs),
            { name: event },
        );
    }

    private fillDebtOrder() {
        const { UNDERWRITER } = this.accounts;
        const { kernel } = this.contracts;
        const debtOrder = this.debtOrder;

        return kernel.fillDebtOrder.sendTransactionAsync(
            debtOrder.getCreditor(),
            debtOrder.getOrderAddresses(),
            debtOrder.getOrderValues(),
            debtOrder.getOrderBytes32(),
            debtOrder.getSignaturesV(),
            debtOrder.getSignaturesR(),
            debtOrder.getSignaturesS(),
            { from: UNDERWRITER },
        );
    }
}
