// External Libraries
import * as chai from "chai";

// Utils
import { Web3Utils } from "../../../utils/web3_utils";
import ChaiSetup from "../test_utils/chai_setup";

// Wrappers
import { SimpleInterestTermsContractContract as SimpleInterestTermsContract } from "../../../types/generated/simple_interest_terms_contract";
import { CollateralizedSimpleInterestTermsContractContract as CollateralizedTermsContract } from "../../../types/generated/collateralized_simple_interest_terms_contract";
import { IncompatibleTermsContractContract as IncompatibleTermsContract } from "../../../types/generated/incompatible_terms_contract";
import { CollateralizerContract as Collateralizer } from "../../../types/generated/collateralizer";
import { DebtRegistryContract } from "../../../types/generated/debt_registry";
import { TokenRegistryContract } from "../../../types/generated/token_registry";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";

ChaiSetup.configure();

const expect = chai.expect;
const web3Utils = new Web3Utils(web3);

contract("Migration #4: Deploying Terms Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let collateralizer: Collateralizer;
    let simpleInterestTermsContract: SimpleInterestTermsContract;
    let collateralizedTermsContract: CollateralizedTermsContract;

    describe("Deployment", () => {
        before(async () => {
            collateralizer = await Collateralizer.deployed(web3, TX_DEFAULTS);
        });

        it("should deploy `SimpleInterestTermsContract` to the current network", async () => {
            simpleInterestTermsContract = await SimpleInterestTermsContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(web3Utils.doesContractExistAtAddressAsync(simpleInterestTermsContract.address))
                .to.eventually.be.true;
        });

        it("should deploy `CollateralizedSimpleInterestTermsContract` to the current network", async () => {
            collateralizedTermsContract = await CollateralizedTermsContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizedTermsContract.address))
                .to.eventually.be.true;
        });

        it("should deploy `IncompatibleTermsContract` to the current network", async () => {
            const incompatibleTermsContract = await IncompatibleTermsContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(web3Utils.doesContractExistAtAddressAsync(incompatibleTermsContract.address)).to
                .eventually.be.true;
        });

        it("should deploy `Collateralizer` to the current network", async () => {
            expect(web3Utils.doesContractExistAtAddressAsync(collateralizer.address)).to.eventually
                .be.true;
        });

        it("should initialize the collateralizer with the correct DebtRegistry", async () => {
            const collateralizerDebtRegistry = await collateralizer.debtRegistry.callAsync();
            const deployedDebtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizerDebtRegistry)).to
                .eventually.be.true;

            expect(collateralizerDebtRegistry).to.equal(deployedDebtRegistry.address);
        });

        it("should initialize the collateralizer with the correct TokenTransferProxy", async () => {
            const collateralizerTokenTransferProxy = await collateralizer.tokenTransferProxy.callAsync();
            const deployedTokenTransferProxy = await TokenTransferProxyContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizerTokenTransferProxy)).to
                .eventually.be.true;

            expect(collateralizerTokenTransferProxy).to.equal(deployedTokenTransferProxy.address);
        });

        it("should initialize the collateralizer with the correct DebtRegistry", async () => {
            const collateralizerDebtRegistry = await collateralizer.debtRegistry.callAsync();
            const deployedDebtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizerDebtRegistry)).to
                .eventually.be.true;

            expect(collateralizerDebtRegistry).to.equal(deployedDebtRegistry.address);
        });

        it("should initialize the collateralizer with the correct TokenRegistry", async () => {
            const collateralizerTokenRegistry = await collateralizer.tokenRegistry.callAsync();
            const deployedTokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizerTokenRegistry)).to
                .eventually.be.true;

            expect(collateralizerTokenRegistry).to.equal(deployedTokenRegistry.address);
        });

        it("should initialize the collateralizer with the correct DebtKernel address", async () => {
            const collateralizerDebtKernel = await collateralizer.debtKernelAddress.callAsync();
            const deployedDebtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizerDebtKernel)).to
                .eventually.be.true;

            expect(collateralizerDebtKernel).to.equal(deployedDebtKernel.address);
        });

        it("should initialize `SimpleInterestTermsContract` with the correct DebtKernel address", async () => {
            const simpleInterestDebtKernel = await simpleInterestTermsContract.debtKernel.callAsync();
            const deployedDebtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(simpleInterestDebtKernel)).to
                .eventually.be.true;

            expect(simpleInterestDebtKernel).to.equal(deployedDebtKernel.address);
        });

        it("should initialize `SimpleInterestTermsContract` with the correct DebtRegistry address", async () => {
            const simpleInterestDebtRegistry = await simpleInterestTermsContract.debtRegistry.callAsync();
            const deployedDebtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(simpleInterestDebtRegistry)).to
                .eventually.be.true;

            expect(simpleInterestDebtRegistry).to.equal(deployedDebtRegistry.address);
        });

        it("should initialize `SimpleInterestTermsContract` with the correct TokenRegistry address", async () => {
            const simpleInterestTokenRegistry = await simpleInterestTermsContract.tokenRegistry.callAsync();
            const deployedTokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(simpleInterestTokenRegistry)).to
                .eventually.be.true;

            expect(simpleInterestTokenRegistry).to.equal(deployedTokenRegistry.address);
        });

        it("should initialize `SimpleInterestTermsContract` with the correct RepaymentRouter address", async () => {
            const simpleInterestRepaymentRouter = await simpleInterestTermsContract.repaymentRouter.callAsync();
            const deployedRepaymentRouter = await RepaymentRouterContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(web3Utils.doesContractExistAtAddressAsync(simpleInterestRepaymentRouter)).to
                .eventually.be.true;

            expect(simpleInterestRepaymentRouter).to.equal(deployedRepaymentRouter.address);
        });

        it("should initialize `CollateralizedSimpleInterestTermsContract` with the correct DebtKernel address", async () => {
            const collateralizedSimpleInterestDebtKernel = await collateralizedTermsContract.debtKernel.callAsync();
            const deployedDebtKernel = await DebtKernelContract.deployed(web3, TX_DEFAULTS);

            expect(
                web3Utils.doesContractExistAtAddressAsync(collateralizedSimpleInterestDebtKernel),
            ).to.eventually.be.true;

            expect(collateralizedSimpleInterestDebtKernel).to.equal(deployedDebtKernel.address);
        });

        it("should initialize `CollateralizedSimpleInterestTermsContract` with the correct DebtRegistry address", async () => {
            const collateralizedSimpleInterestDebtRegistry = await collateralizedTermsContract.debtRegistry.callAsync();
            const deployedDebtRegistry = await DebtRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(
                web3Utils.doesContractExistAtAddressAsync(collateralizedSimpleInterestDebtRegistry),
            ).to.eventually.be.true;

            expect(collateralizedSimpleInterestDebtRegistry).to.equal(deployedDebtRegistry.address);
        });

        it("should initialize `CollateralizedSimpleInterestTermsContract` with the correct TokenRegistry address", async () => {
            const collateralizedSimpleInterestTokenRegistry = await collateralizedTermsContract.tokenRegistry.callAsync();
            const deployedTokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

            expect(
                web3Utils.doesContractExistAtAddressAsync(
                    collateralizedSimpleInterestTokenRegistry,
                ),
            ).to.eventually.be.true;

            expect(collateralizedSimpleInterestTokenRegistry).to.equal(
                deployedTokenRegistry.address,
            );
        });

        it("should initialize `CollateralizedSimpleInterestTermsContract` with the correct RepaymentRouter address", async () => {
            const collateralizedSimpleInterestRepaymentRouter = await collateralizedTermsContract.repaymentRouter.callAsync();
            const deployedRepaymentRouter = await RepaymentRouterContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(
                web3Utils.doesContractExistAtAddressAsync(
                    collateralizedSimpleInterestRepaymentRouter,
                ),
            ).to.eventually.be.true;

            expect(collateralizedSimpleInterestRepaymentRouter).to.equal(
                deployedRepaymentRouter.address,
            );
        });

        it("should initialize `CollateralizedSimpleInterestTermsContract` with the correct Collateralizer address", async () => {
            const collateralizedSimpleInterestCollateralizer = await collateralizedTermsContract.collateralizer.callAsync();
            const deployedCollateralizer = await Collateralizer.deployed(web3, TX_DEFAULTS);

            expect(
                web3Utils.doesContractExistAtAddressAsync(
                    collateralizedSimpleInterestCollateralizer,
                ),
            ).to.eventually.be.true;

            expect(collateralizedSimpleInterestCollateralizer).to.equal(
                deployedCollateralizer.address,
            );
        });
    });
});
