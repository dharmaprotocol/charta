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
import { ContractRegistryContract } from "../../../types/generated/contract_registry";
import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { DharmaMultiSigWalletContract } from "../../../types/generated/dharma_multi_sig_wallet";
import { TokenTransferProxyContract } from "../../../types/generated/token_transfer_proxy";

import { NULL_ADDRESS } from "../test_utils/constants";

contract("Migration #8: Deploy Creditor Proxy", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let contractRegistry: ContractRegistryContract;
    let creditorProxy: CreditorProxyContract;
    let wallet: DharmaMultiSigWalletContract;
    let tokenTransferProxy: TokenTransferProxyContract;

    before(async () => {
        contractRegistry = await ContractRegistryContract.deployed(web3, TX_DEFAULTS);
        creditorProxy = await CreditorProxyContract.deployed(web3, TX_DEFAULTS);
        wallet = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
        tokenTransferProxy = await TokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Deployment", () => {
        it("should deploy the `CreditorProxy` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(creditorProxy.address)).to
                .eventually.be.true;
        });
    });

    describe("#CreditorProxy", () => {
        it("references the deployed instance of the contract registry", async () => {
            await expect(creditorProxy.contractRegistry.callAsync()).to.eventually.equal(
                contractRegistry.address,
            );
        });
    });
});
