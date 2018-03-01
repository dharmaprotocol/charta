const OWNERS = require("./OWNERS");

module.exports = (deployer, network, accounts) => {
    /*
    Import our Permissions library, which will need to be deployed first so
    that it can be linked to the contracts that depend on it.
    */
    const PermissionsLib = artifacts.require("PermissionsLib");

    // Import the Dharma contracts.
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const MultiSigWallet = artifacts.require("MultiSigWallet");

    // We switch on the network to ensure we're configuring our MultiSigWallet
    // accordingly.
    let owners;
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

    const required = Math.floor(owners.length / 2);

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
