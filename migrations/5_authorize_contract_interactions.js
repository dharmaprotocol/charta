const { TOKEN_URI_OPERATOR } = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const Collateralizer = artifacts.require("Collateralizer");
    const CollateralizedSimpleInterestTermsContract = artifacts.require("CollateralizedSimpleInterestTermsContract");

    const TX_DEFAULTS = { from: accounts[0], gas: 4000000 };

    return deployer.then(async () => {
        const registry = await DebtRegistry.deployed();
        const token = await DebtToken.deployed();
        const kernel = await DebtKernel.deployed();
        const proxy = await TokenTransferProxy.deployed();
        const router = await RepaymentRouter.deployed();
        const collateralizer = await Collateralizer.deployed();
        const collateralizedSimpleInterestTermsContract = await CollateralizedSimpleInterestTermsContract.deployed();

        // Authorize token contract to make mutations to the registry
        await registry.addAuthorizedInsertAgent(token.address);
        await registry.addAuthorizedEditAgent(token.address);

        // Authorize kernel contract to mint and broker debt tokens
        await token.addAuthorizedMintAgent(kernel.address);

        // Set kernel to point at current debt token contract
        await kernel.setDebtToken(token.address);

        // Authorize kernel to make `transferFrom` calls on the token transfer proxy
        await proxy.addAuthorizedTransferAgent(kernel.address);

        // Authorize repayment router to make `transferFrom` calls on the token transfer proxy
        await proxy.addAuthorizedTransferAgent(router.address);

        // Authorize collateralizer to make `transferFrom` calls on the token transfer proxy.
        await proxy.addAuthorizedTransferAgent(collateralizer.address);

        // Authorize the collateralized simple interest terms contract to invoke `collateralize`.
        await collateralizer.addAuthorizedCollateralizeAgent(collateralizedSimpleInterestTermsContract.address);

        // Authorize the token-uri operator to set token URIs on `DebtToken`.
        await token.addAuthorizedTokenURIAgent(TOKEN_URI_OPERATOR);
    });
};
