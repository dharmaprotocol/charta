module.exports = (deployer) => {
    const ContractRegistry = artifacts.require("ContractRegistry");

    const CrowdfundingTokenRegistry = artifacts.require("CrowdfundingTokenRegistry");

    deployer.deploy(CrowdfundingTokenRegistry, ContractRegistry.address);
};
