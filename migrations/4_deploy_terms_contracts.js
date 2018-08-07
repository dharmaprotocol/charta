module.exports = (deployer, network, accounts) => {
    const ContractRegistry = artifacts.require("ContractRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
    const CollateralizedSimpleInterestTermsContract = artifacts.require(
        "CollateralizedSimpleInterestTermsContract",
    );
    const ERC721CollateralizedSimpleInterestTermsContract = artifacts.require(
        "ERC721CollateralizedSimpleInterestTermsContract",
    );
    const IncompatibleTermsContract = artifacts.require("IncompatibleTermsContract");

    deployer.deploy(IncompatibleTermsContract);
    deployer.deploy(SimpleInterestTermsContract, ContractRegistry.address);
    deployer.deploy(CollateralizedSimpleInterestTermsContract, ContractRegistry.address);
    deployer.deploy(ERC721CollateralizedSimpleInterestTermsContract, ContractRegistry.address);
};
