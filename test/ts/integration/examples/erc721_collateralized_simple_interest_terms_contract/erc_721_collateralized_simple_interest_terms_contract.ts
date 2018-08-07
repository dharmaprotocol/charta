// Test Utils
import { BigNumberSetup } from "../../../test_utils/bignumber_setup";
import ChaiSetup from "../../../test_utils/chai_setup";

// Wrappers
import { DebtKernelContract } from "../../../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";
import { RepaymentRouterContract } from "../../../../../types/generated/repayment_router";
import { CollateralizedSimpleInterestTermsContractContract } from "../../../../../types/generated/collateralized_simple_interest_terms_contract";
import { TokenRegistryContract } from "../../../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../../../types/generated/token_transfer_proxy";
import { CollateralizerContract } from "../../../../../types/generated/collateralizer";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();

// Scenarios
import { SUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS } from "./scenarios/successful_register_repayment";
import { UNSUCCESSFUL_REGISTER_REPAYMENT_SCENARIOS } from "./scenarios/unsuccessful_register_repayment";
import { SUCCESSFUL_REGISTER_TERM_START_SCENARIOS } from "./scenarios/successful_register_term_start";
import { UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS } from "./scenarios/unsuccessful_register_term_start";
import { UNPACK_PARAMETERS_FROM_BYTES_SCENARIOS } from "./scenarios/unpack_parameters_from_bytes";

// Scenario Runners
import {
    RegisterRepaymentRunner,
    RegisterTermStartRunner,
    UnpackParametersFromBytesRunner,
} from "./runners";

contract("Collateralized Simple Interest Terms Contract (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let collateralizedSimpleInterestTermsContract: CollateralizedSimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;
    let dummyTokenRegistryContract: TokenRegistryContract;
    let collateralizerContract: CollateralizerContract;

    let dummyREPToken: DummyTokenContract;
    let dummyZRXToken: DummyTokenContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const DEBTOR_1 = ACCOUNTS[5];
    const CREDITOR_1 = ACCOUNTS[8];
    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const registerRepaymentRunner = new RegisterRepaymentRunner(web3);
    const registerTermStartRunner = new RegisterTermStartRunner(web3);
    const unpackParametersFromBytes = new UnpackParametersFromBytesRunner();

    before(async () => {
        dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );
        const dummyZRXTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "ZRX",
        );

        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);
        dummyZRXToken = await DummyTokenContract.at(dummyZRXTokenAddress, web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

        collateralizedSimpleInterestTermsContract = await CollateralizedSimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );

        collateralizerContract = await CollateralizerContract.deployed(web3, TX_DEFAULTS);

        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        const testAccounts = {
            UNDERWRITER,
            CONTRACT_OWNER,
            DEBTOR_1,
            CREDITOR_1,
            RELAYER,
        };

        const testContracts = {
            collateralizerContract,
            tokenTransferProxy,
            kernel,
            dummyREPToken,
            dummyZRXToken,
            collateralizedSimpleInterestTermsContract,
            repaymentRouter,
            dummyTokenRegistryContract,
            debtTokenContract,
        };

        registerRepaymentRunner.initialize(testAccounts, testContracts);
        registerTermStartRunner.initialize(testAccounts, testContracts);
        unpackParametersFromBytes.initialize(collateralizedSimpleInterestTermsContract);
    });

    describe("#registerTermStart", () => {
        describe("Successful register term start", () => {
            SUCCESSFUL_REGISTER_TERM_START_SCENARIOS.forEach(registerTermStartRunner.testScenario);
        });

        describe("Unsuccessful register term start", () => {
            UNSUCCESSFUL_REGISTER_TERM_START_SCENARIOS.forEach(
                registerTermStartRunner.testScenario,
            );
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

    describe("#unpackParametersFromBytes", () => {
        UNPACK_PARAMETERS_FROM_BYTES_SCENARIOS.forEach(unpackParametersFromBytes.testScenario);
    });
});
