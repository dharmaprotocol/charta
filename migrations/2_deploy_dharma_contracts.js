const OWNERS = require("./OWNERS");

module.exports = (deployer, network, accounts) => {
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const MultiSigWallet = artifacts.require("MultiSigWallet");

    let owners;
    let required;

    switch (network) {
        case "live":
            owners = OWNERS.owners;
            break;
        case "kovan":
        case "development":
            owners = accounts;
            break;
        default:
            throw "invalid network";
    }

    required = Math.floor(owners.length / 2);

    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DebtRegistry);
    return deployer.deploy(DebtRegistry).then(async () => {
        await deployer.deploy(DebtToken, DebtRegistry.address);
        await deployer.deploy(TokenTransferProxy);
        await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        await deployer.deploy(DebtKernel, TokenTransferProxy.address);
        await deployer.deploy(MultiSigWallet, owners, required);
    });
};
