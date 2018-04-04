// External libraries
import * as ABIDecoder from "abi-decoder";
import * as _ from "lodash";
import { BigNumber } from "bignumber.js";
import * as Units from "../../../../test_utils/units";
import * as moment from "moment";

// Scenario runners
import { RegisterRepaymentScenario, RegisterTermStartScenario, TestAccounts, TestContracts } from "./";

// Wrappers
import { SignedDebtOrder } from "../../../../../../types/kernel/debt_order";
import { DummyTokenContract } from "../../../../../../types/generated/dummy_token";

// Logs
import { SimpleInterestParameters } from "../../../../factories/terms_contract_parameters";
import { DebtOrderFactory } from "../../../../factories/debt_order_factory";

const DEFAULT_GAS_AMOUNT = 4712388;

export abstract class SimpleInterestTermsContractRunner {
    protected accounts: TestAccounts;
    protected contracts: TestContracts;
    protected debtOrder: SignedDebtOrder;
    protected agreementId: string;

    constructor() {
        this.testScenario = this.testScenario.bind(this);
    }

    public initialize(testAccounts: TestAccounts, testContracts: TestContracts) {
        this.accounts = testAccounts;
        this.contracts = testContracts;
    }

    public abstract testScenario(scenario: RegisterRepaymentScenario | RegisterTermStartScenario): void;

    protected async getLogs(txHash: string, event: string) {
        const receipt = await web3.eth.getTransactionReceipt(txHash);

        return _.find(
            ABIDecoder.decodeLogs(receipt.logs),
            { name: event },
        );
    }

    protected fillDebtOrder() {
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

    protected async setupDebtOrder(scenario: RegisterRepaymentScenario | RegisterTermStartScenario) {
        const {
            simpleInterestTermsContract,
            kernel,
            repaymentRouter,
            debtTokenContract,
            dummyREPToken,
        } = this.contracts;

        const { DEBTOR_1, CREDITOR_1, UNDERWRITER, RELAYER } = this.accounts;

        const termsContractParameters = SimpleInterestParameters.pack({
            principalTokenIndex: scenario.principalTokenIndex,
            principalAmount: scenario.principalAmount,
            interestRate: scenario.interestRate,
            amortizationUnitType: scenario.amortizationUnitType,
            termLengthUnits: scenario.termLengthUnits,
        });

        const defaultOrderParams = {
            creditor: CREDITOR_1,
            creditorFee: Units.ether(0.002),
            debtKernelContract: kernel.address,
            debtOrderVersion: kernel.address,
            debtTokenContract: debtTokenContract.address,
            debtor: DEBTOR_1,
            debtorFee: Units.ether(0.001),
            expirationTimestampInSec: new BigNumber(
                moment()
                    .add(1, "days")
                    .unix(),
            ),
            issuanceVersion: repaymentRouter.address,
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
            principalAmount: scenario.principalAmount,
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: simpleInterestTermsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
        };

        const orderFactory = new DebtOrderFactory(defaultOrderParams);

        const debtOrder = await orderFactory.generateDebtOrder();
        const agreementId = debtOrder.getIssuanceCommitment().getHash();

        this.debtOrder = debtOrder;
        this.agreementId = agreementId;

        await this.setBalances();
    }

    protected async setBalances() {
        const {
            tokenTransferProxy,
        } = this.contracts;

        const { CONTRACT_OWNER } = this.accounts;
        const debtOrder = this.debtOrder;

        const token = await DummyTokenContract.at(
            debtOrder.getPrincipalTokenAddress(),
            web3,
            { from: CONTRACT_OWNER, gas: DEFAULT_GAS_AMOUNT },
        );

        const debtor = debtOrder.getDebtor();
        const creditor = debtOrder.getCreditor();

        await token.setBalance.sendTransactionAsync(debtor, new BigNumber(0), {
            from: CONTRACT_OWNER,
        });
        await token.approve.sendTransactionAsync(tokenTransferProxy.address, new BigNumber(0), {
            from: debtor,
        });

        const creditorBalanceAndAllowance = debtOrder
            .getPrincipalAmount()
            .plus(debtOrder.getCreditorFee());

        await token.setBalance.sendTransactionAsync(creditor, creditorBalanceAndAllowance, {
            from: CONTRACT_OWNER,
        });

        await token.approve.sendTransactionAsync(
            tokenTransferProxy.address,
            creditorBalanceAndAllowance,
            { from: creditor },
        );
    }
}
