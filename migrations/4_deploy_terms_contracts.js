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
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");

    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    deployer.deploy(IncompatibleTermsContract);

    deployer.deploy(
        SimpleInterestTermsContract,
        DebtKernel.address,
        DebtRegistry.address,
        TokenRegistry.address,
        RepaymentRouter.address
    );

    deployer.deploy(
        Collateralizer,
        DebtKernel.address,
        DebtRegistry.address,
        TokenRegistry.address,
        TokenTransferProxy.address,
    ).then(async () => {
        await deployer.deploy(
            CollateralizedSimpleInterestTermsContract,
            DebtKernel.address,
            DebtRegistry.address,
            TokenRegistry.address,
            RepaymentRouter.address,
            Collateralizer.address,
        );
    });

    // TODO: De-prioritizing Compound Interest Terms Contract for testnet beta

    // deployer.deploy(CompoundInterestTermsContract);
    // deployer.deploy(CollateralizedCompoundInterestTermsContract);
};
