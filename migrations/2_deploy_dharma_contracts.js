const MULTISIG_SIGNATORIES = require("./MULTISIG_SIGNATORIES");

module.exports = (deployer, network, accounts) => {
    // Import the Dharma contracts.
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const MultiSigWallet = artifacts.require("MultiSigWallet");

    // We switch on the network to ensure we're configuring our MultiSigWallet
    // accordingly.
    let signatories;
    switch (network) {
        case "live":
            signatories = MULTISIG_SIGNATORIES.SIGNATORIES;
            break;
        default:
            signatories = accounts;
    }

    const required = Math.floor(signatories.length / 2);

    // Deploy the MultiSigWallet with a set of signatories and the number of
    // authorizations required before a transaction can be executed.
    deployer.deploy(MultiSigWallet, signatories, required);

    // Deploy our Permissions library and link our `DebtRegistry` to it.
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DebtRegistry);

    return deployer.deploy(DebtRegistry).then(async () => {
        await deployer.deploy(DebtToken, DebtRegistry.address);
        await deployer.deploy(TokenTransferProxy);
        await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        await deployer.deploy(DebtKernel, TokenTransferProxy.address);
    });
};
