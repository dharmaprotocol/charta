// External libraries
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { expect } from "chai";

// Test Utils
import * as Units from "../../../test_utils/units";

// Scenario runners
import { RegisterRepaymentScenario, TermsParams, TestAccounts, TestContracts } from "../runners";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";

// Logs
import { LogRegisterRepayment } from "../../../logs/simple_interest_terms_contract";
import {REVERT_ERROR} from "../../../test_utils/constants";

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

        describe(scenario.description, () => {
            before(async () => {
                const {
                    CONTRACT_OWNER,
                    UNDERWRITER,
                    DEBTOR_1,
                } = this.accounts;

                const {
                    kernel,
                    tokenTransferProxy,
                    dummyREPToken,
                    simpleInterestTermsContract,
                    repaymentRouter,
                } = this.contracts;

                const {
                    AGREEMENT_ID,
                } = this.termsParams;

                const debtOrder = scenario.debtOrder(this.debtOrder);
                const principalToken = scenario.principalToken(dummyREPToken);

                await kernel.fillDebtOrder.sendTransactionAsync(
                    debtOrder.getCreditor(),
                    debtOrder.getOrderAddresses(),
                    debtOrder.getOrderValues(),
                    debtOrder.getOrderBytes32(),
                    debtOrder.getSignaturesV(),
                    debtOrder.getSignaturesR(),
                    debtOrder.getSignaturesS(),
                    { from: UNDERWRITER },
                );

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

                if (scenario.repayFromRouter) {
                    txHash = await repaymentRouter.repay.sendTransactionAsync(
                        AGREEMENT_ID,
                        scenario.repaymentAmount,
                        debtOrder.getPrincipalTokenAddress(),
                        { from: DEBTOR_1 },
                    );
                }
            });

            if (scenario.succeeds) {
                it("should emit a LogRegisterRepayment event", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const { AGREEMENT_ID } = this.termsParams;
                    const { DEBTOR_1, CREDITOR_1 } = this.accounts;
                    const debtOrder = this.debtOrder;

                    const receipt = await web3.eth.getTransactionReceipt(txHash);

                    const returnedLog = _.find(
                        ABIDecoder.decodeLogs(receipt.logs),
                        { name: "LogRegisterRepayment" },
                    );

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
                it("should revert the transaction", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const { AGREEMENT_ID } = this.termsParams;
                    const { DEBTOR_1, CREDITOR_1 } = this.accounts;
                    const debtOrder = this.debtOrder;

                    await expect(
                        simpleInterestTermsContract.registerRepayment.sendTransactionAsync(
                            AGREEMENT_ID,
                            DEBTOR_1,
                            CREDITOR_1,
                            scenario.repaymentAmount,
                            debtOrder.getPrincipalTokenAddress(),
                            { from: DEBTOR_1 },
                        ),
                    ).to.eventually.be.rejectedWith(REVERT_ERROR);
                });
            }
        });
    }
}
