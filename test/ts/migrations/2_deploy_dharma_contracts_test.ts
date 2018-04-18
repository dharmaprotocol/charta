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
import { MultiSigWalletContract } from "../../../types/generated/multi_sig_wallet";
import { DebtTokenContract } from "../../../types/generated/debt_token";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";

contract("Migration #2: Deploying Dharma Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let wallet: MultiSigWalletContract;
    let debtToken: DebtTokenContract;
    let debtRegistry: DebtRegistryContract;
    let tokenTransferProxy: TokenTransferProxyContract;
    let repaymentRouter: RepaymentRouterContract;
    let debtKernel: DebtKernelContract;

    /*
    Note(kayvon): we do make an implicit assumption here that the most recently
    deployed versions of our Dharma contracts are in fact the ones deployed
    during our migration process. These tests will break if and when we make
    changes to how we configure our test environment.
    */
    describe("Deployment", () => {
        it("should deploy the `MultiSigWallet` contract to the current network", async () => {
            wallet = await MultiSigWalletContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(wallet.address)).to.eventually.be.true;
        });

        it("should deploy the `DebtRegistry` contract to the current network", async () => {
            debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(debtRegistry.address)).to.eventually.be
                .true;
        });

        it("should deploy the `RepaymentRouter` contract to the current network", async () => {
            repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(repaymentRouter.address)).to.eventually
                .be.true;
        });

        it("should deploy the `DebtToken` contract to the current network", async () => {
            debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(debtToken.address)).to.eventually.be
                .true;
        });

        it("should deploy the `TokenTransferProxy` contract to the current network", async () => {
            tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(tokenTransferProxy.address)).to
                .eventually.be.true;
        });

        it("should deploy the `DebtKernel` contract to the current network", async () => {
            debtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(debtKernel.address)).to.eventually.be
                .true;
        });
    });

    describe("#DebtToken", () => {
        it("references the deployed instance of the debt registry", async () => {
            expect(debtToken.registry.callAsync()).to.eventually.equal(debtRegistry.address);
        });
    });

    describe("#RepaymentRouter", () => {
        it("references the deployed instance of the debt registry", async () => {
            expect(repaymentRouter.debtRegistry.callAsync()).to.eventually.equal(
                debtRegistry.address,
            );
        });
        it("references the deployed instance of the token transfer proxy", async () => {
            expect(repaymentRouter.tokenTransferProxy.callAsync()).to.eventually.equal(
                tokenTransferProxy.address,
            );
        });
    });

    describe("#DebtKernel", () => {
        it("references the deployed instance of the token transfer proxy", async () => {
            expect(debtKernel.TOKEN_TRANSFER_PROXY.callAsync()).to.eventually.equal(
                tokenTransferProxy.address,
            );
        });
    });

    describe("#MultiSigWallet", () => {
        const contractOwners = ACCOUNTS.slice(0, 5);

        it("lists the correct accounts as owner", async () => {
            _.forEach(contractOwners, (value: any, i: number) => {
                expect(wallet.isOwner.callAsync(value)).to.eventually.be.true;
            });
        });

        it("lists the correct number of required authorizations", async () => {
            const requiredComputed = new BigNumber(Math.ceil(contractOwners.length / 2));
            expect(wallet.required.callAsync()).to.eventually.bignumber.equal(requiredComputed);
        });
    });
});
