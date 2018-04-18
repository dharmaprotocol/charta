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

ChaiSetup.configure();

const expect = chai.expect;
const web3Utils = new Web3Utils(web3);

contract("Migration #4: Deploying Terms Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let collateralizer: Collateralizer;

    describe("Deployment", () => {
        before(async () => {
            collateralizer = await Collateralizer.deployed(web3, TX_DEFAULTS);
        });

        it("should deploy `SimpleInterestTermsContract` to the current network", async () => {
            const simpleInterestTermsContract = await SimpleInterestTermsContract.deployed(
                web3,
                TX_DEFAULTS,
            );

            expect(web3Utils.doesContractExistAtAddressAsync(simpleInterestTermsContract.address))
                .to.eventually.be.true;
        });

        it("should deploy `CollateralizedSimpleInterestTermsContract` to the current network", async () => {
            const collateralizedTermsContract = await CollateralizedTermsContract.deployed(
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
    });
});
