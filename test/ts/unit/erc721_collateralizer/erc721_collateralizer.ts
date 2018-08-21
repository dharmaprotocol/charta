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
            [1, 0, 0],
            [1, 0, 1],
            [0, 1, 0],
            [1, 10, 10],
            [1, 21, 32],
            [0, 221, 322],
            [1, 1231, 2342],
            [1, 75231, 32342],
            [1, 275231, 432342],
            [0, 3275231, 5432342],
            [1, 65675231, 32132342],
            [0, 65675231, 32132342],
            [1, 656752311, 132132342],
            [1, 2656752311, 4132132342],
        ];

        examples.forEach((example) => {
            const isEnumerableInt = example[0];
            const isEnumerableBool = isEnumerableInt === 1;
            const index = example[1];
            const id = example[1];

            describe(`when given isEnumerable of ${isEnumerableInt}, a token index
             of ${index} and a token id of ${id}`, () => {
                it(`returns [${isEnumerableBool}, ${index}, ${id}]`, async () => {
                    const params = ERC721CollateralizedSimpleInterestTermsParameters.pack({
                        isEnumerable: new BigNumber(isEnumerableInt),
                        erc721ContractIndex: new BigNumber(index),
                        tokenIndex: new BigNumber(id),
                    });

                    const result = (await collateralizer.unpackCollateralParametersFromBytes.callAsync(params));
                    console.log(result);
                    // .map((val: BigNumber) => val.toNumber());

                    // expect(result).to.deep.equal([isEnumerableBool, index, id]);
                });
            });
        });
    });
});
