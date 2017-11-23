var TestContract = artifacts.require("TestContract");

module.exports = function(deployer: any) {
  deployer.deploy(TestContract);
};
