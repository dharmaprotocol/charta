// External Libraries
import * as chai from "chai";

// Utils
import { Web3Utils } from "../../../utils/web3_utils";
import ChaiSetup from "../test_utils/chai_setup";

// Terms Contracts
import { SimpleInterestTermsContractContract as SimpleInterestTermsContract } from "../../../types/generated/simple_interest_terms_contract";
import { CollateralizedSimpleInterestTermsContractContract as CollateralizedTermsContract } from "../../../types/generated/collateralized_simple_interest_terms_contract";
import { IncompatibleTermsContractContract as IncompatibleTermsContract } from "../../../types/generated/incompatible_terms_contract";

// Contract Registry
import { ContractRegistryContract } from "../../../types/generated/contract_registry";

ChaiSetup.configure();

const expect = chai.expect;
const web3Utils = new Web3Utils(web3);

contract("Migration #4: Deploying Terms Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let simpleInterestTermsContract: SimpleInterestTermsContract;
    let collateralizedTermsContract: CollateralizedTermsContract;
    let incompatibleTermsContract: IncompatibleTermsContract;

    let contractRegistry: ContractRegistryContract;

    before(async () => {
        // Terms contracts.
        simpleInterestTermsContract = await SimpleInterestTermsContract.deployed(web3, TX_DEFAULTS);
        collateralizedTermsContract = await CollateralizedTermsContract.deployed(web3, TX_DEFAULTS);
        incompatibleTermsContract = await IncompatibleTermsContract.deployed(web3, TX_DEFAULTS);

        // Contract registry.
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
    });

    describe("#IncompatibleTermsContract", () => {
        it("should be deployed to the current network", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(incompatibleTermsContract.address),
            ).to.eventually.be.true;
        });
    });

    describe("#SimpleInterestTermsContract", () => {
        it("should be deployed to the current network", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(simpleInterestTermsContract.address),
            ).to.eventually.be.true;
        });

        it("references the deployed instance of the contract registry", async () => {
            await expect(
                simpleInterestTermsContract.contractRegistry.callAsync(),
            ).to.eventually.equal(contractRegistry.address);
        });
    });

    describe("#CollateralizedSimpleInterestTermsContract", () => {
        it("should be deployed to the current network", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(collateralizedTermsContract.address),
            ).to.eventually.be.true;
        });

        it("references the deployed instance of the contract registry", async () => {
            await expect(
                collateralizedTermsContract.contractRegistry.callAsync(),
            ).to.eventually.equal(contractRegistry.address);
        });
    });
});
