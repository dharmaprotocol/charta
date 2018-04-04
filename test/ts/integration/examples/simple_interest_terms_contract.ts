// Test Utils
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import ChaiSetup from "../../test_utils/chai_setup";

// Wrappers
import { DebtKernelContract } from "../../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../../types/generated/dummy_token";
import { RepaymentRouterContract } from "../../../../types/generated/repayment_router";
import { SimpleInterestTermsContractContract } from "../../../../types/generated/simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../../types/generated/token_transfer_proxy";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();

// Scenarios
import { SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS } from "./scenarios/successful_register_repayment";
import { UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS } from "./scenarios/unsuccessful_register_repayment";
import { SUCCESSFUL_REGISTER_TERM_START_SCENARIOS } from "./scenarios/successful_register_term_start";
import { UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS } from "./scenarios/unsuccessful_register_term_start";

// Scenario Runners
import { RegisterRepaymentRunner, RegisterTermStartRunner } from "./runners";

contract("Simple Interest Terms Contract (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;
    let dummyTokenRegistryContract: TokenRegistryContract;

    let dummyREPToken: DummyTokenContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const DEBTOR_1 = ACCOUNTS[5];
    const CREDITOR_1 = ACCOUNTS[8];
    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const registerRepaymentRunner = new RegisterRepaymentRunner();
    const registerTermStartRunner = new RegisterTermStartRunner();

    before(async () => {
        dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );

        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
    });

    before(() => {
        const testAccounts = {
            UNDERWRITER,
            CONTRACT_OWNER,
            DEBTOR_1,
            CREDITOR_1,
            RELAYER,
        };

        const testContracts = {
            tokenTransferProxy,
            kernel,
            dummyREPToken,
            simpleInterestTermsContract,
            repaymentRouter,
            dummyTokenRegistryContract,
            debtTokenContract,
        };

        registerRepaymentRunner.initialize(testAccounts, testContracts);
        registerTermStartRunner.initialize(testAccounts, testContracts);
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
        describe("Unsuccessful register repayment", () => {
            UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS.forEach(registerRepaymentRunner.testScenario);
        });

        describe("Successful register repayment", () => {
            SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS.forEach(registerRepaymentRunner.testScenario);
        });
    });
});
