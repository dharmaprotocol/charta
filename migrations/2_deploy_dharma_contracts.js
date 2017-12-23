const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DebtRegistry = artifacts.require("DebtRegistry");
const DebtToken = artifacts.require("DebtToken");
const RepaymentRouter = artifacts.require("RepaymentRouter");

module.exports = (deployer) => {
  deployer.deploy(DebtRegistry);
  deployer.deploy(PermissionsLib);
  deployer.link(PermissionsLib, DummyContract);
  deployer.deploy(DummyContract);
  deployer.link(PermissionsLib, DebtRegistry);
  deployer.deploy(DebtRegistry);
  deployer.deploy(DebtToken);
  deployer.deploy(RepaymentRouter);
};
