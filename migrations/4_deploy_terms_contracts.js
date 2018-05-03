module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenRegistry = artifacts.require("TokenRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
    const CollateralizedSimpleInterestTermsContract = artifacts.require(
        "CollateralizedSimpleInterestTermsContract",
    );
    const IncompatibleTermsContract = artifacts.require("IncompatibleTermsContract");
    const Collateralizer = artifacts.require("Collateralizer");

    return deployer.deploy(
        IncompatibleTermsContract,
        [
            SimpleInterestTermsContract,
            DebtKernel.address,
            DebtRegistry.address,
            TokenRegistry.address,
            RepaymentRouter.address,
        ],
        [
            CollateralizedSimpleInterestTermsContract,
            DebtKernel.address,
            DebtRegistry.address,
            TokenRegistry.address,
            RepaymentRouter.address,
            Collateralizer.address,
        ],
    );
};
