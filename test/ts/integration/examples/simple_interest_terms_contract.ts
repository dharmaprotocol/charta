// External Libraries
import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as moment from "moment";
import { BigNumber } from "bignumber.js";
import * as _ from "lodash";

// Test Utils
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import ChaiSetup from "../../test_utils/chai_setup";
import * as Units from "../../test_utils/units";

// Wrappers
import { SignedDebtOrder } from "../../../../types/kernel/debt_order";
import { DebtKernelContract } from "../../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../../types/generated/dummy_token";
import { IncompatibleTermsContractContract } from "../../../../types/generated/incompatible_terms_contract";
import { RepaymentRouterContract } from "../../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../../types/generated/token_transfer_proxy";

// Factories
import { DebtOrderFactory } from "../../factories/debt_order_factory";
import { SimpleInterestParameters } from "../../factories/terms_contract_parameters";

// Constants
import { REVERT_ERROR } from "../../test_utils/constants";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const debtKernelContract = artifacts.require("DebtKernel");

// Scenarios
import { SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS } from "./scenarios/successful_register_repayment";
import { UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS } from "./scenarios/unsuccessful_register_repayment";

// Scenario Runners
import { RegisterRepaymentRunner, RegisterTermStartRunner } from "./runners";
import {LogSimpleInterestTermStart} from "../../logs/simple_interest_terms_contract";
import {SUCCESSFUL_REGISTER_TERM_START_SCENARIOS} from "./scenarios/successful_term_start";
import {UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS} from "./scenarios/unsuccessful_term_start";

contract("Simple Interest Terms Contract (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;

    let dummyREPToken: DummyTokenContract;

    let incompatibleTermsContractAddress: string;

    let defaultOrderParams: { [key: string]: any };
    let orderFactory: DebtOrderFactory;

    let debtOrder: SignedDebtOrder;
    let agreementId: string;

    const CONTRACT_OWNER = ACCOUNTS[0];

    const DEBTOR_1 = ACCOUNTS[5];

    const CREDITOR_1 = ACCOUNTS[8];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const REP_INDEX = new BigNumber(0);
    const PRINCIPAL_AMOUNT = Units.ether(1);
    const INTEREST_RATE = Units.percent(2.5);
    const AMORTIZATION_UNIT_TYPE = new BigNumber(1);
    const TERM_LENGTH_UNITS = new BigNumber(4);

    const registerRepaymentRunner = new RegisterRepaymentRunner();
    const registerTermStartRunner = new RegisterTermStartRunner();

    const reset = async () => {
        const dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );

        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        const incompatibleTermsContract = await IncompatibleTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        incompatibleTermsContractAddress = incompatibleTermsContract.address;

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        const termsContractParameters = SimpleInterestParameters.pack(
            REP_INDEX,
            PRINCIPAL_AMOUNT,
            INTEREST_RATE,
            AMORTIZATION_UNIT_TYPE,
            TERM_LENGTH_UNITS,
        );

        defaultOrderParams = {
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
            principalAmount: Units.ether(1),
            principalTokenAddress: dummyREPToken.address,
            relayer: RELAYER,
            relayerFee: Units.ether(0.0015),
            termsContract: simpleInterestTermsContract.address,
            termsContractParameters,
            underwriter: UNDERWRITER,
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.percent(1.35),
        };

        orderFactory = new DebtOrderFactory(defaultOrderParams);

        debtOrder = await orderFactory.generateDebtOrder();
        agreementId = debtOrder.getIssuanceCommitment().getHash();

        /*
         * Set balances for filling a debt order successfully.
         */

        const token = await DummyTokenContract.at(
            debtOrder.getPrincipalTokenAddress(),
            web3,
            TX_DEFAULTS,
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
    };

    before(reset);

    before(() => {
        const testAccounts = {
            UNDERWRITER,
            CONTRACT_OWNER,
            DEBTOR_1,
            CREDITOR_1,
        };

        const testContracts = {
            tokenTransferProxy,
            kernel,
            dummyREPToken,
            simpleInterestTermsContract,
            repaymentRouter,
        };

        const termsParams = {
            AGREEMENT_ID: agreementId,
            PRINCIPAL_AMOUNT,
            INTEREST_RATE,
            AMORTIZATION_UNIT_TYPE,
            TERM_LENGTH_UNITS,
        };

        registerRepaymentRunner.initialize(testAccounts, testContracts, debtOrder, termsParams);
        registerTermStartRunner.initialize(testAccounts, testContracts, debtOrder, termsParams);
    });

    describe("#registerTermStart", () => {
        describe("Successful register term state", () => {
            SUCCESSFUL_REGISTER_TERM_START_SCENARIOS.forEach(registerTermStartRunner.testScenario);
        });

        describe("Unsuccessful register term state", () => {
            UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS.forEach(registerTermStartRunner.testScenario);
        });
    });

    describe("#registerRepayment", () => {
        describe("Successful register repayment", () => {
            SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS.forEach(registerRepaymentRunner.testScenario);
        });

        describe("Unsuccessful register repayment", () => {
            UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS.forEach(registerRepaymentRunner.testScenario);
        });
    });
});
