// External Libraries
import * as chai from "chai";

import { BigNumber } from "bignumber.js";

// Utils
import { BigNumberSetup } from "../../test_utils/bignumber_setup";
import ChaiSetup from "../../test_utils/chai_setup";

import { ERC721CollateralizerContract } from "../../../../types/generated/e_r_c721_collateralizer";
import { ERC721CollateralizedSimpleInterestTermsParameters } from "../../factories/terms_contract_parameters";

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Configure BigNumber exponentiation
BigNumberSetup.configure();

contract("ERC721Collateralizer (Unit Tests)", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let collateralizer: ERC721CollateralizerContract;

    before(async () => {
       collateralizer = await ERC721CollateralizerContract.deployed(web3, TX_DEFAULTS);
    });

    describe("#unpackCollateralParametersFromBytes", () => {
        // A list of sets of progressively greater ids and indexes.
        const examples = [
            [0, 0],
            [0, 1],
            [1, 0],
            [10, 10],
            [21, 32],
            [221, 322],
            [1231, 2342],
            [75231, 32342],
            [275231, 432342],
            [3275231, 5432342],
            [65675231, 32132342],
            [65675231, 32132342],
            [656752311, 132132342],
            [2656752311, 4132132342],
        ];

        examples.forEach((example) => {
            const index = example[0];
            const id = example[1];

            describe(`when given a token index of ${index} and a token id of ${id}`, () => {
                it (`returns [${index}, ${id}]`, async () => {
                    const params = ERC721CollateralizedSimpleInterestTermsParameters.pack({
                        collateralTokenIndex: new BigNumber(index),
                        tokenId: new BigNumber(id),
                    });

                    const result = (await collateralizer.unpackCollateralParametersFromBytes.callAsync(params))
                        .map((val: BigNumber) => val.toNumber());

                    expect(result).to.deep.equal([index, id]);
                });
            });
        });
    });
});
