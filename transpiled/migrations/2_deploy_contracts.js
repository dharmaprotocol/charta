const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DebtRegistry = artifacts.require("DebtRegistry");
module.exports = (deployer) => {
    deployer.deploy(DebtRegistry);
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DummyContract);
    deployer.deploy(DummyContract);
    deployer.link(PermissionsLib, DebtRegistry);
    deployer.deploy(DebtRegistry);
};
//# sourceMappingURL=2_deploy_contracts.js.map