import * as chai from "chai";
import * as Units from "../test_utils/units";
import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import * as _ from "lodash";
import { Web3Utils } from "../../../utils/web3_utils";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

const web3Utils = new Web3Utils(web3);

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Dharma Contracts
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { ContractRegistryContract } from "../../../types/generated/contract_registry";
import { CollateralizerContract } from "../../../types/generated/collateralizer";
import { TokenRegistryContract } from "../../../types/generated/token_registry";

import { NULL_ADDRESS } from "../test_utils/constants";
import { TOKEN_LIST } from "../../../migrations/migration_constants";

contract("Migration #2: Deploying Dharma Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let wallet: DharmaMultiSigWalletContract;
    let debtToken: DebtTokenContract;
    let debtRegistry: DebtRegistryContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let repaymentRouter: RepaymentRouterContract;
    let debtKernel: DebtKernelContract;
    let collateralizer: CollateralizerContract;
    let contractRegistry: ContractRegistryContract;
    let tokenRegistry: TokenRegistryContract;

    before(async () => {
        wallet = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
        debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
        debtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
        collateralizer = await CollateralizerContract.deployed(web3, TX_DEFAULTS);
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        tokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Deployment", () => {
        it("should deploy the `DharmaMultiSigWallet` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(wallet.address)).to.eventually.be
                .true;
        });

        it("should deploy the `DebtRegistry` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(debtRegistry.address)).to
                .eventually.be.true;
        });

        it("should deploy the `RepaymentRouter` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(repaymentRouter.address)).to
                .eventually.be.true;
        });

        it("should deploy the `DebtToken` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(debtToken.address)).to.eventually
                .be.true;
        });

        it("should deploy the `TokenTransferProxy` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(tokenTransferProxy.address)).to
                .eventually.be.true;
        });

        it("should deploy the `DebtKernel` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(debtKernel.address)).to
                .eventually.be.true;
        });

        it("should deploy the `Collateralizer` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(collateralizer.address)).to
                .eventually.be.true;
        });

        it("should deploy the `ContractRegistry` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(contractRegistry.address)).to
                .eventually.be.true;
        });

        it("should deploy the `TokenRegistry` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(tokenRegistry.address)).to
                .eventually.be.true;
        });
    });

    describe("#DebtToken", () => {
        it("references the deployed instance of the debt registry", async () => {
            await expect(debtToken.registry.callAsync()).to.eventually.equal(debtRegistry.address);
        });
    });

    describe("#RepaymentRouter", () => {
        it("references the deployed instance of the debt registry", async () => {
            await expect(repaymentRouter.debtRegistry.callAsync()).to.eventually.equal(
                debtRegistry.address,
            );
        });
        it("references the deployed instance of the token transfer proxy", async () => {
            await expect(repaymentRouter.tokenTransferProxy.callAsync()).to.eventually.equal(
                tokenTransferProxy.address,
            );
        });
    });

    describe("#DebtKernel", () => {
        it("references the deployed instance of the token transfer proxy", async () => {
            await expect(debtKernel.TOKEN_TRANSFER_PROXY.callAsync()).to.eventually.equal(
                tokenTransferProxy.address,
            );
        });
    });

    describe("#DharmaMultiSigWallet", () => {
        const contractOwners = ACCOUNTS.slice(0, 5);
        const required = new BigNumber(3);

        it("lists the correct accounts as owner", async () => {
            await Promise.all(
                contractOwners.map(async (owner) => {
                    return expect(wallet.isOwner.callAsync(owner)).to.eventually.be.true;
                }),
            );
        });

        it("lists the exact set of owners", async () => {
            await expect(wallet.getOwners.callAsync()).to.eventually.deep.equal(contractOwners);
        });

        it("lists the correct number of required authorizations", async () => {
            await expect(wallet.required.callAsync()).to.eventually.bignumber.equal(required);
        });

        it("lists the correct value for the timelock (in seconds)", async () => {
            await expect(wallet.timelockInSeconds.callAsync()).to.eventually.bignumber.equal(
                new BigNumber(60 * 60 * 24 * 7),
            );
        });
    });

    describe("#Collateralizer", () => {
        it("references the deployed instance of the debt registry", async () => {
            await expect(collateralizer.debtRegistry.callAsync()).to.eventually.equal(
                debtRegistry.address,
            );
        });

        it("references the deployed instance of the token transfer proxy", async () => {
            await expect(collateralizer.tokenTransferProxy.callAsync()).to.eventually.equal(
                tokenTransferProxy.address,
            );
        });

        it("references the deployed instance of the token registry", async () => {
            await expect(collateralizer.tokenRegistry.callAsync()).to.eventually.equal(
                tokenRegistry.address,
            );
        });
    });

    describe("#TokenRegistry", () => {
        it("should populate the registry with a set of dummy tokens", async () => {
            TOKEN_LIST.forEach(async (token) => {
                await expect(
                    tokenRegistry.getTokenAddressBySymbol.callAsync(token.symbol),
                ).to.eventually.not.equal(NULL_ADDRESS);
            });
        });
    });

    describe("#ContractRegistry", () => {
        it("references the deployed instance of the collateralizer", async () => {
            await expect(contractRegistry.collateralizer.callAsync()).to.eventually.equal(
                collateralizer.address,
            );
        });

        it("references the deployed instance of the debt kernel", async () => {
            await expect(contractRegistry.debtKernel.callAsync()).to.eventually.equal(
                debtKernel.address,
            );
        });

        it("references the deployed instance of the debt registry", async () => {
            await expect(contractRegistry.debtRegistry.callAsync()).to.eventually.equal(
                debtRegistry.address,
            );
        });

        it("references the deployed instance of the debt token", async () => {
            await expect(contractRegistry.debtToken.callAsync()).to.eventually.equal(
                debtToken.address,
            );
        });

        it("references the deployed instance of the repayment router", async () => {
            await expect(contractRegistry.repaymentRouter.callAsync()).to.eventually.equal(
                repaymentRouter.address,
            );
        });

        it("references the deployed instance of the token registry", async () => {
            await expect(contractRegistry.tokenRegistry.callAsync()).to.eventually.equal(
                tokenRegistry.address,
            );
        });

        it("references the deployed instance of the token transfer proxy", async () => {
            await expect(contractRegistry.tokenTransferProxy.callAsync()).to.eventually.equal(
                tokenTransferProxy.address,
            );
        });
    });
});
