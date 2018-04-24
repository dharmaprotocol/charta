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
    const MockCollateralizedTermsContract = artifacts.require("MockCollateralizedTermsContract");
    const MockTokenRegistry = artifacts.require("MockTokenRegistry");
    const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
    const TokenRegistry = artifacts.require("TokenRegistry");

    const OWNER = accounts[0];

    if (network !== CONSTANTS.LIVE_NETWORK_ID) {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockERC20Token);
        deployer.deploy(MockERC721Token);
        deployer.deploy(MockERC721Receiver);
        deployer.deploy(MockDebtToken);
        deployer.deploy(MockTermsContract);
        deployer.deploy(MockCollateralizedTermsContract);
        deployer.deploy(MockTokenTransferProxyContract);
        deployer.deploy(MockTokenRegistry);
        deployer.deploy(TokenRegistry).then(async () => {
            const tokenRegistry = await TokenRegistry.deployed();

            // Create Dummy Tokens and add them to the registry.
            await Promise.all(
                CONSTANTS.TOKEN_LIST.map(async (token) => {
                    const {name, symbol, decimals} = token;

                    const dummyToken = await DummyToken.new(
                        name,
                        symbol,
                        decimals,
                        CONSTANTS.DUMMY_TOKEN_SUPPLY
                    );

                    return tokenRegistry.setTokenAttributes(
                        symbol,
                        dummyToken.address,
                        name,
                        decimals,
                        {from: OWNER}
                    );
                })
            );
        });
    }
};
