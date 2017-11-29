const Migrations = artifacts.require("Migrations");

module.exports = (deployer: any) => {
  deployer.deploy(Migrations);
};
