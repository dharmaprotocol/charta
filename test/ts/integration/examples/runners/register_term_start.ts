// External libraries
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { expect } from "chai";

// Scenario runners
import { RegisterTermStartScenario, TermsParams, TestAccounts, TestContracts } from "../runners";

// Wrappers
import { SignedDebtOrder } from "../../../../../types/kernel/debt_order";

// Logs
import { LogSimpleInterestTermStart } from "../../../logs/simple_interest_terms_contract";
import { REVERT_ERROR } from "../../../test_utils/constants";

export class RegisterTermStartRunner {
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

    public testScenario(scenario: RegisterTermStartScenario) {
        let txHash: string;

        describe(scenario.description, () => {
            before(async () => {
                if (scenario.invokedByDebtKernel) {
                    // Fill the debt order, thereby invoking registerTermsStart from the debt kernel.
                    txHash = await this.fillDebtOrder();
                }

                // Setup ABI decoder in order to decode logs
                ABIDecoder.addABI(this.contracts.simpleInterestTermsContract.abi);
            });

            after(() => {
                // Tear down ABIDecoder before next set of tests
                ABIDecoder.removeABI(this.contracts.simpleInterestTermsContract.abi);
            });

            if (scenario.succeeds) {
                it("should emit a LogSimpleInterestTermStart event", async () => {
                    const { simpleInterestTermsContract } = this.contracts;
                    const {
                        AGREEMENT_ID,
                        INTEREST_RATE,
                        AMORTIZATION_UNIT_TYPE,
                        TERM_LENGTH_UNITS,
                    } = this.termsParams;

                    const debtOrder = this.debtOrder;

                    const expectedLog = LogSimpleInterestTermStart(
                        simpleInterestTermsContract.address,
                        AGREEMENT_ID,
                        debtOrder.getPrincipalTokenAddress(),
                        debtOrder.getPrincipalAmount(),
                        INTEREST_RATE,
                        AMORTIZATION_UNIT_TYPE,
                        TERM_LENGTH_UNITS,
                    );

                    const returnedLog = await this.getLogs(txHash, "LogSimpleInterestTermStart");
                    expect(returnedLog).to.deep.equal(expectedLog);
                });
            } else {
                // If registerTermsStart is not invoked by the debt kernel, the transaction should be reverted.
                if (!scenario.invokedByDebtKernel) {
                    it("should revert the transaction", async () => {
                        expect(this.registerTermsStart()).to.eventually.be.rejectedWith(REVERT_ERROR);
                    });
                }
            }
        });
    }

    private registerTermsStart() {
        const { AGREEMENT_ID } = this.termsParams;
        const { DEBTOR_1, UNDERWRITER } = this.accounts;
        const { simpleInterestTermsContract } = this.contracts;

        return simpleInterestTermsContract.registerTermStart.sendTransactionAsync(
            AGREEMENT_ID,
            DEBTOR_1,
            { from: UNDERWRITER },
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

    private async getLogs(txHash: string, event: string) {
        const receipt = await web3.eth.getTransactionReceipt(txHash);

        return _.find(
            ABIDecoder.decodeLogs(receipt.logs),
            { name: event },
        );
    }
}
