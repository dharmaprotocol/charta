import * as chai from "chai";
import * as Web3 from "web3";

import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { MockTokenRegistryContract } from "../../../types/generated/mock_token_registry";
import { CollateralizerContract } from "../../../types/generated/collateralizer";

import { ContractRegistryContract } from "../../../types/generated/contract_registry";

import ChaiSetup from "../test_utils/chai_setup";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const contractRegistryArtifact = artifacts.require("ContractRegistry");

contract("Contract Registry (Unit Tests)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let debtKernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let mockDebtRegistry: MockDebtRegistryContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let mockTokenRegistry: MockTokenRegistryContract;
    let collateralizer: CollateralizerContract;

    let contractRegistry: ContractRegistryContract;

    before(async () => {
        debtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        mockDebtRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        mockTokenRegistry = await MockTokenRegistryContract.deployed(web3, TX_DEFAULTS);
        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        collateralizer = await CollateralizerContract.deployed(web3, TX_DEFAULTS);

        const contractRegistryTruffle = await contractRegistryArtifact.new(
            collateralizer.address,
            debtKernel.address,
            mockDebtRegistry.address,
            mockDebtToken.address,
            repaymentRouter.address,
            mockTokenRegistry.address,
            mockTokenTransferProxy.address,
            { from: CONTRACT_OWNER },
        );

        const contractRegistryAsWeb3Contract = web3.eth
            .contract(contractRegistryArtifact.abi)
            .at(contractRegistryTruffle.address);

        contractRegistry = new ContractRegistryContract(
            contractRegistryAsWeb3Contract,
            TX_DEFAULTS,
        );

    });
});
