module.exports = (deployer, network, accounts) => {
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const MultiSigWallet = artifacts.require("MultiSigWallet");

    return deployer.then(async () => {
        const registry = await DebtRegistry.deployed();
        const token = await DebtToken.deployed();
        const kernel = await DebtKernel.deployed();
        const proxy = await TokenTransferProxy.deployed();
        const router = await RepaymentRouter.deployed();
        const wallet = await MultiSigWallet.deployed();

        await registry.transferOwnership(wallet.address);
        await token.transferOwnership(wallet.address);
        await kernel.transferOwnership(wallet.address);
        await proxy.transferOwnership(wallet.address);
        await router.transferOwnership(wallet.address);
    });
};
