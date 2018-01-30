import {DummyTokenRegistryContract} from "../types/generated/dummy_token_registry";

const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DummyToken = artifacts.require("DummyToken");
const DummyTokenRegistry = artifacts.require("DummyTokenRegistry");
const MockDebtRegistry = artifacts.require("MockDebtRegistry");
const MockZeroExExchange = artifacts.require("MockZeroExExchange");
const MockERC20Token = artifacts.require("MockERC20Token");
const MockERC721Token = artifacts.require("MockERC721Token");
const MockDebtToken = artifacts.require("MockDebtToken");
const MockTermsContract = artifacts.require("MockTermsContract");
const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
const MintableNonFungibleToken = artifacts.require("MintableNonFungibleToken");

const DUMMY_TOKEN_SUPPLY = 10 ** 27;
const DUMMY_TOKEN_DECIMALS = 18;

module.exports = (deployer: any, network: string, accounts: string[]) => {
    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    if (network !== "live") {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockZeroExExchange);
        deployer.deploy(MockERC20Token);
        deployer.deploy(MockERC721Token);
        deployer.deploy(MockDebtToken);
        deployer.deploy(MockTermsContract);
        deployer.deploy(MockTokenTransferProxyContract);
        deployer.deploy(MintableNonFungibleToken);
        deployer.deploy(DummyTokenRegistry).then(async () => {
            const dummyTokenRegistry = await DummyTokenRegistryContract.at(DummyTokenRegistry.address,
                web3, TX_DEFAULTS);

            const dummyREPToken = await DummyToken.new(
                "Augur REP",
                "REP",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await dummyTokenRegistry.setTokenAddress.sendTransactionAsync("REP", dummyREPToken.address);

            const dummyMKRToken = await DummyToken.new(
                "Maker DAO",
                "MKR",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await dummyTokenRegistry.setTokenAddress.sendTransactionAsync("MKR", dummyMKRToken.address);

            const dummyZRXToken = await DummyToken.new(
                "0x Token",
                "ZRX",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await dummyTokenRegistry.setTokenAddress.sendTransactionAsync("ZRX", dummyZRXToken.address);
        });
    }
};
