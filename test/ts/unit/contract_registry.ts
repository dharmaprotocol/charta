import * as ABIDecoder from "abi-decoder";
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

        ABIDecoder.addABI(contractRegistry.abi);
    });

    after(() => {
        ABIDecoder.removeABI(contractRegistry.abi);
    });

    describe("Initialization", () => {
        it("points to the collateralizer passed in through the constructor", async () => {
            await expect(contractRegistry.collateralizer.callAsync()).to.eventually.equal(
                collateralizer.address,
            );
        });
        it("points to the debt kernel passed in through the constructor", async () => {
            await expect(contractRegistry.debtKernel.callAsync()).to.eventually.equal(
                debtKernel.address,
            );
        });
        it("points to the debt registry passed in through the constructor", async () => {
            await expect(contractRegistry.debtRegistry.callAsync()).to.eventually.equal(
                mockDebtRegistry.address,
            );
        });
        it("points to the debt token passed in through the constructor", async () => {
            await expect(contractRegistry.debtToken.callAsync()).to.eventually.equal(
                mockDebtToken.address,
            );
        });
        it("points to the repayment router passed in through the constructor", async () => {
            await expect(contractRegistry.repaymentRouter.callAsync()).to.eventually.equal(
                repaymentRouter.address,
            );
        });
        it("points to the token registry passed in through the constructor", async () => {
            await expect(contractRegistry.tokenRegistry.callAsync()).to.eventually.equal(
                mockTokenRegistry.address,
            );
        });
        it("points to the token transfer proxy passed in through the constructor", async () => {
            await expect(contractRegistry.tokenTransferProxy.callAsync()).to.eventually.equal(
                mockTokenTransferProxy.address,
            );
        });
    });
});
