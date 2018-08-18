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
    const ERC721Collateralizer = artifacts.require("ERC721Collateralizer");

    deployer.deploy(IncompatibleTermsContract);
    deployer.deploy(SimpleInterestTermsContract, ContractRegistry.address);
    deployer.deploy(CollateralizedSimpleInterestTermsContract, ContractRegistry.address);
    deployer.deploy(
        ERC721CollateralizedSimpleInterestTermsContract,
        ContractRegistry.address,
        ERC721Collateralizer.address,
    );
};
