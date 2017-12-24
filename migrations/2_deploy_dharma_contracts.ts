const PermissionsLib = artifacts.require("PermissionsLib");
const DummyContract = artifacts.require("DummyContract");
const DebtRegistry = artifacts.require("DebtRegistry");
const DebtToken = artifacts.require("DebtToken");
const DebtKernel = artifacts.require("DebtKernel");
const RepaymentRouter = artifacts.require("RepaymentRouter");

module.exports = (deployer: any) => {
  deployer.deploy(DebtRegistry);
  deployer.deploy(PermissionsLib);
  deployer.link(PermissionsLib, DummyContract);
  deployer.deploy(DummyContract);
  deployer.link(PermissionsLib, DebtRegistry);
  deployer.deploy(DebtRegistry).then(() => {
    return deployer.deploy(DebtToken, DebtRegistry.address);
  });
  deployer.deploy(DebtKernel);
  deployer.deploy(RepaymentRouter);
};
