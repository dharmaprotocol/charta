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

ChaiSetup.configure();

const expect = chai.expect;
const web3Utils = new Web3Utils(web3);

contract("Migration #4: Deploying Terms Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let collateralizedTermsContract: CollateralizedTermsContract;
    let incompatibleTermsContract: IncompatibleTermsContract;
    let collateralizer: Collateralizer;

    describe("Deployment", () => {
        it("should deploy `SimpleInterestTermsContract` to the current network", async () => {
            const simpleInterestTermsContract = await SimpleInterestTermsContract.deployed(
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
            incompatibleTermsContract = await IncompatibleTermsContract.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(incompatibleTermsContract.address)).to
                .eventually.be.true;
        });

        it("should deploy `Collateralizer` to the current network", async () => {
            collateralizer = await Collateralizer.deployed(web3, TX_DEFAULTS);

            expect(web3Utils.doesContractExistAtAddressAsync(collateralizer.address)).to.eventually
                .be.true;
        });
    });
});
