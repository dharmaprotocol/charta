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
import { DummyContractContract as DummyContract } from "../../../types/generated/dummy_contract";
import { MockDebtRegistryContract } from "../../../types/generated/mock_debt_registry";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockERC721TokenContract } from "../../../types/generated/mock_e_r_c721_token";
import { MockERC721ReceiverContract } from "../../../types/generated/mock_e_r_c721_receiver";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockTermsContractContract as MockTermsContract } from "../../../types/generated/mock_terms_contract";
import { MockCollateralizedTermsContractContract as MockCollateralizedTermsContract } from "../../../types/generated/mock_collateralized_terms_contract";
import { MockTokenRegistryContract } from "../../../types/generated/mock_token_registry";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";

contract("Migration #3: Deploying Test Contracts", async (ACCOUNTS) => {
    const CONTRACT_OWNER = ACCOUNTS[0];
    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4000000 };

    let dummyContract: DummyContract;
    let mockDebtRegistry: MockDebtRegistryContract;
    let mockERC20Token: MockERC20TokenContract;
    let mockERC721Token: MockERC721TokenContract;
    let mockERC721Receiver: MockERC721ReceiverContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockTermsContract: MockTermsContract;
    let mockCollateralizedTermsContract: MockCollateralizedTermsContract;
    let mockTokenRegistry: MockTokenRegistryContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;

    before(async () => {
        dummyContract = await DummyContract.deployed(web3, TX_DEFAULTS);
        mockDebtRegistry = await MockDebtRegistryContract.deployed(web3, TX_DEFAULTS);
        mockERC20Token = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);
        mockERC721Token = await MockERC721TokenContract.deployed(web3, TX_DEFAULTS);
        mockERC721Receiver = await MockERC721ReceiverContract.deployed(web3, TX_DEFAULTS);
        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        mockTermsContract = await MockTermsContract.deployed(web3, TX_DEFAULTS);
        mockCollateralizedTermsContract = await MockCollateralizedTermsContract.deployed(
            web3,
            TX_DEFAULTS,
        );
        mockTokenRegistry = await MockTokenRegistryContract.deployed(web3, TX_DEFAULTS);
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);
    });

    describe("Deployment", () => {
        it("should deploy the `DummyContract` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(dummyContract.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockDebtRegistry` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockDebtRegistry.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockERC20Token` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockERC20Token.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockERC721Token` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockERC721Token.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockERC721Receiver` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockERC721Receiver.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockDebtToken` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockDebtToken.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockTermsContract` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockTermsContract.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockCollateralizedTermsContract` contract to the current network", async () => {
            await expect(
                web3Utils.doesContractExistAtAddressAsync(mockCollateralizedTermsContract.address),
            ).to.eventually.be.true;
        });

        it("should deploy the `MockTokenRegistry` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockTokenRegistry.address)).to
                .eventually.be.true;
        });

        it("should deploy the `MockTokenTransferProxy` contract to the current network", async () => {
            await expect(web3Utils.doesContractExistAtAddressAsync(mockTokenTransferProxy.address))
                .to.eventually.be.true;
        });
    });
});
