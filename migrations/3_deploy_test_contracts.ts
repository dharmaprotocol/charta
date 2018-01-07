const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const MockDebtRegistry = artifacts.require("MockDebtRegistry")
const MockZeroExExchange = artifacts.require("MockZeroExExchange")
const MockERC20Token = artifacts.require("MockERC20Token");

module.exports = (deployer: any, network: string) => {
    if (network != "live") {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
        deployer.deploy(MockZeroExExchange);
        deployer.deploy(MockERC20Token);
    }
};
