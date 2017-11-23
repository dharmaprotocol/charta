var Migrations = artifacts.require("Migrations");

module.exports = function(deployer: any) {
  deployer.deploy(Migrations);
};
