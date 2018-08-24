module.exports = (deployer, network, accounts) => {
    const ContractRegistry = artifacts.require("ContractRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
    const CollateralizedSimpleInterestTermsContract = artifacts.require(
        "CollateralizedSimpleInterestTermsContract",
    );
    const IncompatibleTermsContract = artifacts.require("IncompatibleTermsContract");

    deployer.deploy(IncompatibleTermsContract);
    deployer.deploy(SimpleInterestTermsContract, ContractRegistry.address);
    deployer.deploy(CollateralizedSimpleInterestTermsContract, ContractRegistry.address);
};
