const Migrations = artifacts.require("Migrations.sol");

module.exports = (deployer: any) => {
  deployer.deploy(Migrations);
};
