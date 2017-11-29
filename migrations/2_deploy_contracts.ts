var TestContract = artifacts.require("DebtKernel");

module.exports = function(deployer: any) {
  deployer.deploy(TestContract);
};
