import * as chai from "chai";
import * as Units from "../test_utils/units";
import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";
import * as _ from "lodash";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

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
            expect(wallet.address).to.not.be.null;
        });

        it("should deploy the `DebtRegistry` contract to the current network", async () => {
            debtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);
            expect(debtRegistry.address).to.not.be.null;
        });

        it("should deploy the `RepaymentRouter` contract to the current network", async () => {
            repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);
            expect(repaymentRouter.address).to.not.be.null;
        });

        it("should deploy the `DebtToken` contract to the current network", async () => {
            debtToken = await DebtTokenContract.deployed(web3, TX_DEFAULTS);
            expect(debtToken.address).to.not.be.null;
        });

        it("should deploy the `TokenTransferProxy` contract to the current network", async () => {
            tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
            expect(tokenTransferProxy.address).to.not.be.null;
        });

        it("should deploy the `DebtKernel` contract to the current network", async () => {
            debtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);
            expect(debtKernel.address).to.not.be.null;
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
        it("lists the correct accounts as owner", async () => {
            _.forEach(ACCOUNTS, (value: any, i: number) => {
                expect(wallet.isOwner.callAsync(value)).to.eventually.be.true;
            });
        });

        it("lists the correct number of required authorizations", async () => {
            const requiredComputed = new BigNumber(ACCOUNTS.length / 2);
            expect(wallet.required.callAsync()).to.eventually.bignumber.equal(requiredComputed);
        });
    });
});
