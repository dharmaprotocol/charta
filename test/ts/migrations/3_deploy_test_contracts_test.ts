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

// Import our set of test Contracts
import { DummyContractContract } from "../../../types/generated/dummy_contract";
import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockERC721TokenContract } from "../../../types/generated/mock_e_r_c721_token";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockTermsContractContract } from "../../../types/generated/mock_terms_contract";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { MintableNonFungibleTokenContract } from "../../../types/generated/mintable_non_fungible_token";

import { TokenRegistryContract } from "../../../types/generated/token_registry";

contract("Migration #3: Deploying Test Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let dummyContract: DummyContractContract;
    let mockDebtRegistry: MockDebtRegistryContract;
    let mockERC20Token: MockERC20TokenContract;
    let mockERC721Token: MockERC721TokenContract;
    let mockDebtTokenContract: MockDebtTokenContract;
    let mockTermsContract: MockTermsContractContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let mintableNonFungibleToken: MintableNonFungibleTokenContract;
    let tokenRegistry: TokenRegistryContract;
});
