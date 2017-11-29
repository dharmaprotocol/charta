const Permissions = artifacts.require("Permissions");
const DummyContract = artifacts.require("DummyContract");
const DebtRegistry = artifacts.require("DebtRegistry");

module.exports = (deployer: any) => {
  deployer.deploy(DebtRegistry);
  deployer.deploy(Permissions);
  deployer.link(Permissions, DummyContract);
  deployer.deploy(DummyContract);
};
