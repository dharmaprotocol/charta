const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const MockDebtRegistry = artifacts.require("MockDebtRegistry");
const MockZeroExExchange = artifacts.require("MockZeroExExchange");
const MockERC20Token = artifacts.require("MockERC20Token");
const MockERC721Token = artifacts.require("MockERC721Token");
const MockDebtToken = artifacts.require("MockDebtToken");
const MockTermsContract = artifacts.require("MockTermsContract");
const MockTokenTransferProxyContract = artifacts.require("MockTokenTransferProxy");
const MintableNonFungibleToken = artifacts.require("MintableNonFungibleToken");

module.exports = (deployer: any, network: string) => {
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
    }
};
