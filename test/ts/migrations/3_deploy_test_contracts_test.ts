import * as chai from "chai";
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

import { TokenRegistryContract } from "../../../types/generated/token_registry";

contract("Migration #3: Deploying Test Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };
    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";
    const REP_TOKEN_SYMBOL = "REP";
    const MKR_TOKEN_SYMBOL = "MKR";
    const ZRX_TOKEN_SYMBOL = "ZRX";
    const WRAPPED_ETH_SYMBOL = "WETH";

    let dummyContract: DummyContractContract;
    let mockDebtRegistry: MockDebtRegistryContract;
    let mockERC20Token: MockERC20TokenContract;
    let mockERC721Token: MockERC721TokenContract;
    let mockDebtTokenContract: MockDebtTokenContract;
    let mockTermsContract: MockTermsContractContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let tokenRegistry: TokenRegistryContract;

    describe("Deployment", () => {
        it("should deploy the `DummyContract` contract to the current network", async () => {
            dummyContract = await DummyContractContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(dummyContract.address)).to.eventually
                .be.true;
        });

        it("should deploy the `MockDebtRegistry` contract to the current network", async () => {
            mockDebtRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(mockDebtRegistry.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockERC20Token` contract to the current network", async () => {
            mockERC20Token = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(mockERC20Token.address)).to.eventually
                .be.true;
        });

        it("should deploy the `MockERC721Token` contract to the current network", async () => {
            mockERC721Token = await MockERC721TokenContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(mockERC721Token.address)).to.eventually
                .be.true;
        });

        it("should deploy the `MockDebtToken` contract to the current network", async () => {
            mockDebtTokenContract = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(mockDebtTokenContract.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockTermsContract` contract to the current network", async () => {
            mockTermsContract = await MockTermsContractContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(mockDebtTokenContract.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockTokenTransferProxy` contract to the current network", async () => {
            mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(
                web3,
                TX_DEFAULTS,
            );
            expect(web3Utils.doesContractExistAtAddressAsync(mockTokenTransferProxy.address)).to
                .eventually.be.true;
        });

        it("should deploy the `TokenRegistry` contract to the current network", async () => {
            tokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);
            expect(web3Utils.doesContractExistAtAddressAsync(tokenRegistry.address)).to.eventually
                .be.true;
        });
    });

    describe("#TokenRegistry", () => {
        it("should register the address for Augur's REP token", async () => {
            expect(
                tokenRegistry.getTokenAddressBySymbol.callAsync(REP_TOKEN_SYMBOL),
            ).to.eventually.not.equal(NULL_ADDRESS);
        });

        it("should register the address for Maker's MKR token", async () => {
            expect(
                tokenRegistry.getTokenAddressBySymbol.callAsync(MKR_TOKEN_SYMBOL),
            ).to.eventually.not.equal(NULL_ADDRESS);
        });

        it("should register the address for 0x's ZRX token", async () => {
            expect(
                tokenRegistry.getTokenAddressBySymbol.callAsync(ZRX_TOKEN_SYMBOL),
            ).to.eventually.not.equal(NULL_ADDRESS);
        });

        it("should register the address for the wrapped ETH token", async () => {
            expect(
                tokenRegistry.getTokenAddressBySymbol.callAsync(WRAPPED_ETH_SYMBOL),
            ).to.eventually.not.equal(NULL_ADDRESS);
        });

        it("should register the name for the wrapped ETH token, accessible by symbol", async () => {
            await expect(
                tokenRegistry.getTokenNameBySymbol.callAsync(WRAPPED_ETH_SYMBOL),
            ).to.eventually.equal("Canonical Wrapped Ether");
        });
    });
});
