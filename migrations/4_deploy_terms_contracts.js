module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenRegistry = artifacts.require("TokenRegistry");
    const SimpleInterestTermsContract = artifacts.require("SimpleInterestTermsContract");
    const CompoundInterestTermsContract = artifacts.require("CompoundInterestTermsContract");
    const CollateralizedSimpleInterestTermsContract = artifacts.require(
        "CollateralizedSimpleInterestTermsContract",
    );
    const CollateralizedCompoundInterestTermsContract = artifacts.require(
        "CompoundInterestTermsContract",
    );
    const IncompatibleTermsContract = artifacts.require("IncompatibleTermsContract");

    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.deploy(IncompatibleTermsContract);

    deployer.deploy(
        SimpleInterestTermsContract,
        DebtKernel.address,
        DebtRegistry.address,
        TokenRegistry.address,
        RepaymentRouter.address,
    );

    deployer.deploy(
        CollateralizedSimpleInterestTermsContract,
        DebtKernel.address,
        DebtRegistry.address,
        TokenRegistry.address,
        RepaymentRouter.address,
    );

    // TODO: De-prioritizing Compound Interest Terms Contract for testnet beta

    // deployer.deploy(CompoundInterestTermsContract);
    // deployer.deploy(CollateralizedCompoundInterestTermsContract);
};
