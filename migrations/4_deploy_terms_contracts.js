module.exports = (deployer, network, accounts) => {
    const ContractRegistry = artifacts.require("ContractRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
    const CollateralizedSimpleInterestTermsContract = artifacts.require(
        "CollateralizedSimpleInterestTermsContract",
    );
    const IncompatibleTermsContract = artifacts.require("IncompatibleTermsContract");

    return deployer.deploy(
        IncompatibleTermsContract,
        [SimpleInterestTermsContract, ContractRegistry.address],
        [CollateralizedSimpleInterestTermsContract, ContractRegistry.address],
    );
};
