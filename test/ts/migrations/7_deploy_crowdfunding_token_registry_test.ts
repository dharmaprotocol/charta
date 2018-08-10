// External Libraries
import * as chai from "chai";

// Utils
import { Web3Utils } from "../../../utils/web3_utils";
import ChaiSetup from "../test_utils/chai_setup";

// Contract Registry
import { ContractRegistryContract } from "../../../types/generated/contract_registry";

// CrowdfundingTokenRegistry
import { CrowdfundingTokenRegistryContract } from "../../../types/generated/crowdfunding_token_registry";

ChaiSetup.configure();

const expect = chai.expect;
const web3Utils = new Web3Utils(web3);

contract("Migration #7: Deploying Crowdfunding Token Registry", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let contractRegistry: ContractRegistryContract;

    let crowdfundingTokenRegistry: CrowdfundingTokenRegistryContract;

    before(async () => {
        // Contract registry
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);

        // CrowdfundingTokenRegistry
        crowdfundingTokenRegistry = await CrowdfundingTokenRegistryContract.deployed(
            web3,
            TX_DEFAULTS,
        );
    });

    describe("#SimpleInterestTermsContract", () => {
        it("should be deployed to the current network", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(crowdfundingTokenRegistry.address),
            ).to.eventually.be.true;
        });

        it("references the deployed instance of the contract registry", async () => {
            await expect(
                crowdfundingTokenRegistry.contractRegistryAddress.callAsync(),
            ).to.eventually.equal(contractRegistry.address);
        });
    });
});
