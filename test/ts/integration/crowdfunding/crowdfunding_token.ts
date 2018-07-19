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
import { CrowdfundingTokenRegistryContract } from "../../../../types/generated/crowdfunding_token_registry";
import { ContractRegistryContract } from "../../../../types/generated/contract_registry";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();

// Scenarios
// tslint:disable-next-line
import { SUCCESSFUL_WITHDRAW_ON_CROWDFUNDING_TOKEN_SCENARIOS } from "./scenarios/successful_withdraw_on_crowdfunding_token";

// Scenario Runners
import { WithdrawOnCrowdfundingTokenRunner } from "./runners";

const crowdfundingTokenRegistryArtifact = artifacts.require("CrowdfundingTokenRegistry");

contract("Crowdfunding Token (Integration Tests)", async (ACCOUNTS) => {
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let simpleInterestTermsContract: SimpleInterestTermsContractContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let debtTokenContract: DebtTokenContract;
    let debtRegistryContract: DebtRegistryContract;
    let dummyTokenRegistryContract: TokenRegistryContract;
    let crowdfundingTokenRegistry: CrowdfundingTokenRegistryContract;
    let contractRegistry: ContractRegistryContract;

    let dummyREPToken: DummyTokenContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const DEBTOR_1 = ACCOUNTS[5];
    const CREDITOR_1 = ACCOUNTS[8];
    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const withdrawOnCrowdfundingTokenRunner = new WithdrawOnCrowdfundingTokenRunner(web3);

    before(async () => {
        dummyTokenRegistryContract = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

        const dummyREPTokenAddress = await dummyTokenRegistryContract.getTokenAddressBySymbol.callAsync(
            "REP",
        );

        dummyREPToken = await DummyTokenContract.at(dummyREPTokenAddress, web3, TX_DEFAULTS);

        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);

        debtTokenContract = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        debtRegistryContract = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        simpleInterestTermsContract = await SimpleInterestTermsContractContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        kernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        // deploy the CrowdfundingTokenRegistry contract
        const crowdfundingTokenRegistryTruffle = await crowdfundingTokenRegistryArtifact.new(
            contractRegistry.address,
            {
                from: CONTRACT_OWNER,
            },
        );

        const crowdfundingTokenRegistryAsWeb3Contract = web3.eth
            .contract(crowdfundingTokenRegistryArtifact.abi)
            .at(crowdfundingTokenRegistryTruffle.address);

        crowdfundingTokenRegistry = new CrowdfundingTokenRegistryContract(
            crowdfundingTokenRegistryAsWeb3Contract,
            TX_DEFAULTS,
        );
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
            debtTokenContract,
            dummyREPToken,
            dummyTokenRegistryContract,
            kernel,
            repaymentRouter,
            simpleInterestTermsContract,
            tokenTransferProxy,
            crowdfundingTokenRegistry,
        };

        withdrawOnCrowdfundingTokenRunner.initialize(testAccounts, testContracts);
    });

    describe("#createCrowdfundingTokenRunner", () => {
        describe("Successfully create CrowdfundingToken", () => {
            SUCCESSFUL_WITHDRAW_ON_CROWDFUNDING_TOKEN_SCENARIOS.forEach(
                withdrawOnCrowdfundingTokenRunner.testScenario,
            );
        });
    });
});
