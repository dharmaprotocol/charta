const OWNERS = require("./OWNERS");

module.exports = (deployer, network, accounts) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DummyContract = artifacts.require("DummyContract");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const MultiSigWallet = artifacts.require("MultiSigWallet");

    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DummyContract);
    deployer.deploy(DummyContract);
    deployer.link(PermissionsLib, DebtRegistry);
    return deployer.deploy(DebtRegistry).then(async () => {
        await deployer.deploy(DebtToken, DebtRegistry.address);
        await deployer.deploy(TokenTransferProxy);
        await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        await deployer.deploy(DebtKernel, TokenTransferProxy.address);
        await deployer.deploy(MultiSigWallet, OWNERS.owners, OWNERS.owners.length);
    });
};
