// Test Utils
import { BigNumberSetup } from "../../../test_utils/bignumber_setup";
import ChaiSetup from "../../../test_utils/chai_setup";

// Wrappers
import { DebtKernelContract } from "../../../../../types/generated/debt_kernel";
import { DebtRegistryContract } from "../../../../../types/generated/debt_registry";
import { DebtTokenContract } from "../../../../../types/generated/debt_token";
import { DummyTokenContract } from "../../../../../types/generated/dummy_token";
import { ERC721CollateralizerContract } from "../../../../../types/generated/e_r_c721_collateralizer";
import {
    ERC721CollateralizedSimpleInterestTermsContractContract as TermsContract,
} from "../../../../../types/generated/e_r_c721_collateralized_simple_interest_terms_contract";
import { RepaymentRouterContract } from "../../../../../types/generated/repayment_router";
import { TokenRegistryContract } from "../../../../../types/generated/token_registry";
import { TokenTransferProxyContract } from "../../../../../types/generated/token_transfer_proxy";
import { MintableERC721TokenContract } from "../../../../../types/generated/mintable_e_r_c721_token";
import { DharmaMultiSigWalletContract } from "../../../../../types/generated/dharma_multi_sig_wallet";
import { ERC721TokenRegistryContract } from "../../../../../types/generated/e_r_c721_token_registry";

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

// Utils
import { multiSigExecuteAfterTimelock } from "../../../test_utils/multisig";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();

contract("ERC721 Collateralized Simple Interest Terms Contract (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let erc721CollateralizedSimpleInterestTermsContract: TermsContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;
    let dummyTokenRegistryContract: TokenRegistryContract;
    let erc721CollateralizerContract: ERC721CollateralizerContract;

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

        erc721CollateralizedSimpleInterestTermsContract = await TermsContract.deployed(web3, TX_DEFAULTS);

        erc721CollateralizerContract = await ERC721CollateralizerContract.deployed(web3, TX_DEFAULTS);

        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        // Set up a mintable ERC721 token.
        const erc721TokenContract = await MintableERC721TokenContract.deployed(web3, TX_DEFAULTS);
        const tokenAddress = erc721TokenContract.address;
        const tokenName = await erc721TokenContract.name.callAsync();
        const tokenSymbol = await erc721TokenContract.symbol.callAsync();

        // Add the mintable token to the registry.
        const erc721TokenRegistry = await ERC721TokenRegistryContract.deployed(web3, TX_DEFAULTS);
        const multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        await multiSigExecuteAfterTimelock(
            web3,
            multiSig,
            erc721TokenRegistry,
            "setTokenAttributes",
            ACCOUNTS,
            [tokenSymbol, tokenAddress, tokenName],
        );

        const testAccounts = {
            UNDERWRITER,
            CONTRACT_OWNER,
            DEBTOR_1,
            CREDITOR_1,
            RELAYER,
        };

        const testContracts = {
            erc721CollateralizerContract,
            tokenTransferProxy,
            kernel,
            dummyREPToken,
            dummyZRXToken,
            erc721CollateralizedSimpleInterestTermsContract,
            repaymentRouter,
            dummyTokenRegistryContract,
            debtTokenContract,
            erc721TokenRegistry,
            erc721TokenContract,
        };

        registerRepaymentRunner.initialize(testAccounts, testContracts, ACCOUNTS);
        registerTermStartRunner.initialize(testAccounts, testContracts, ACCOUNTS);
        unpackParametersFromBytes.initialize(erc721CollateralizedSimpleInterestTermsContract);
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
