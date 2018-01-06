const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const MockDebtRegistry = artifacts.require("MockDebtRegistry")

module.exports = (deployer: any, network: string,) => {
    if (network != "live") {
        deployer.link(PermissionsLib, DummyContract);
        deployer.deploy(DummyContract);
        deployer.deploy(MockDebtRegistry);
    }
};
