module.exports = (deployer, network, accounts) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DummyContract = artifacts.require("DummyContract");
    const DummyToken = artifacts.require("DummyToken");
    const MockDebtRegistry = artifacts.require("MockDebtRegistry");
    const MockERC20Token = artifacts.require("MockERC20Token");
    const MockERC721Token = artifacts.require("MockERC721Token");
    const MockDebtToken = artifacts.require("MockDebtToken");
    const MockTermsContract = artifacts.require("MockTermsContract");
    const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
    const MintableNonFungibleToken = artifacts.require("MintableNonFungibleToken");
    const TokenRegistry = artifacts.require("TokenRegistry");

    const DUMMY_TOKEN_SUPPLY = 10 ** 27;
    const DUMMY_TOKEN_DECIMALS = 18;

    if (network !== "live") {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockERC20Token);
        deployer.deploy(MockERC721Token);
        deployer.deploy(MockDebtToken);
        deployer.deploy(MockTermsContract);
        deployer.deploy(MockTokenTransferProxyContract);
        deployer.deploy(MintableNonFungibleToken);
        deployer.deploy(TokenRegistry).then(async () => {
            const tokenRegistry = await TokenRegistry.deployed();

            const dummyREPToken = await DummyToken.new(
                "Augur REP",
                "REP",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await tokenRegistry.setTokenAddress("REP", dummyREPToken.address,
                { from: accounts[0] });

            const dummyMKRToken = await DummyToken.new(
                "Maker DAO",
                "MKR",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await tokenRegistry.setTokenAddress("MKR", dummyMKRToken.address,
                { from: accounts[0] });

            const dummyZRXToken = await DummyToken.new(
                "0x Token",
                "ZRX",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await tokenRegistry.setTokenAddress("ZRX", dummyZRXToken.address,
                { from: accounts[0] });
        });
    } // TODO Add some sort of linking for live tokens to token registry
};
