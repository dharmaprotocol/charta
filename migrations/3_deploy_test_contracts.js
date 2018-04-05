const CONSTANTS = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DummyContract = artifacts.require("DummyContract");
    const DummyToken = artifacts.require("DummyToken");
    const MockDebtRegistry = artifacts.require("MockDebtRegistry");
    const MockERC20Token = artifacts.require("MockERC20Token");
    const MockERC721Token = artifacts.require("MockERC721Token");
    const MockERC721Receiver = artifacts.require("MockERC721Receiver");
    const MockDebtToken = artifacts.require("MockDebtToken");
    const MockTermsContract = artifacts.require("MockTermsContract");
    const MockTokenRegistry = artifacts.require("MockTokenRegistry");
    const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
    const TokenRegistry = artifacts.require("TokenRegistry");

    OWNER = accounts[0];

    if (network !== CONSTANTS.LIVE_NETWORK_ID) {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockERC20Token);
        deployer.deploy(MockERC721Token);
        deployer.deploy(MockERC721Receiver);
        deployer.deploy(MockDebtToken);
        deployer.deploy(MockTermsContract);
        deployer.deploy(MockTokenTransferProxyContract);
        deployer.deploy(MockTokenRegistry);
        deployer.deploy(TokenRegistry).then(async () => {
            const tokenRegistry = await TokenRegistry.deployed();

            const dummyREPToken = await DummyToken.new(
                "Augur REP",
                CONSTANTS.REP_TOKEN_SYMBOL,
                CONSTANTS.DUMMY_TOKEN_DECIMALS,
                CONSTANTS.DUMMY_TOKEN_SUPPLY,
            );
            await tokenRegistry.setTokenAddress(CONSTANTS.REP_TOKEN_SYMBOL, dummyREPToken.address, {
                from: OWNER,
            });

            const dummyMKRToken = await DummyToken.new(
                "Maker DAO",
                CONSTANTS.MKR_TOKEN_SYMBOL,
                CONSTANTS.DUMMY_TOKEN_DECIMALS,
                CONSTANTS.DUMMY_TOKEN_SUPPLY,
            );
            await tokenRegistry.setTokenAddress(CONSTANTS.MKR_TOKEN_SYMBOL, dummyMKRToken.address, {
                from: OWNER,
            });

            const dummyZRXToken = await DummyToken.new(
                "0x Token",
                CONSTANTS.ZRX_TOKEN_SYMBOL,
                CONSTANTS.DUMMY_TOKEN_DECIMALS,
                CONSTANTS.DUMMY_TOKEN_SUPPLY,
            );
            await tokenRegistry.setTokenAddress(CONSTANTS.ZRX_TOKEN_SYMBOL, dummyZRXToken.address, {
                from: OWNER,
            });
        });
    } // TODO Add some sort of linking for live tokens to token registry
};
