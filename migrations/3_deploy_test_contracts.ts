module.exports = (deployer: any, network: string, accounts: string[]) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DummyContract = artifacts.require("DummyContract");
    const DummyToken = artifacts.require("DummyToken");
    const DummyTokenRegistry = artifacts.require("DummyTokenRegistry");
    const MockDebtRegistry = artifacts.require("MockDebtRegistry");
    const MockERC20Token = artifacts.require("MockERC20Token");
    const MockERC721Token = artifacts.require("MockERC721Token");
    const MockDebtToken = artifacts.require("MockDebtToken");
    const MockTermsContract = artifacts.require("MockTermsContract");
    const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
    const MintableNonFungibleToken = artifacts.require("MintableNonFungibleToken");

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
        deployer.deploy(DummyTokenRegistry).then(async () => {
            const dummyTokenRegistry = await DummyTokenRegistry.deployed();
            const dummyREPToken = await DummyToken.new(
                "Augur REP",
                "REP",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await dummyTokenRegistry.setTokenAddress("REP", dummyREPToken.address);

            const dummyMKRToken = await DummyToken.new(
                "Maker DAO",
                "MKR",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await dummyTokenRegistry.setTokenAddress("MKR", dummyMKRToken.address);

            const dummyZRXToken = await DummyToken.new(
                "0x Token",
                "ZRX",
                DUMMY_TOKEN_DECIMALS,
                DUMMY_TOKEN_SUPPLY,
            );
            await dummyTokenRegistry.setTokenAddress("ZRX", dummyZRXToken.address);
        });
    }
};
