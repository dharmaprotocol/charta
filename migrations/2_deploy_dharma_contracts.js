const CONSTANTS = require("./migration_constants");

module.exports = (deployer, network, accounts) => {
    const OWNER = accounts[0];

    // Import the Dharma contracts.
    const PermissionsLib = artifacts.require("PermissionsLib");
    const DebtRegistry = artifacts.require("DebtRegistry");
    const DebtToken = artifacts.require("DebtToken");
    const DebtKernel = artifacts.require("DebtKernel");
    const RepaymentRouter = artifacts.require("RepaymentRouter");
    const TokenTransferProxy = artifacts.require("TokenTransferProxy");
    const MultiSigWallet = artifacts.require("MultiSigWallet");
    const TokenRegistry = artifacts.require("TokenRegistry");

    // We switch on the network to ensure we're configuring our MultiSigWallet
    // accordingly.
    let signatories;
    switch (network) {
        case CONSTANTS.LIVE_NETWORK_ID:
            signatories = CONSTANTS.SIGNATORIES;
            break;
        default:
            signatories = accounts.slice(0, CONSTANTS.SIGNATORIES.length);
    }

    /**
     * The number of submissions and confirmations required before a transaction is
     * executed. For example, in the test env there are 5 signatories, and so 3
     * confirmations are required.
     *
     * @type {number}
     */
    const numAuthorizationsRequired = Math.ceil(signatories.length * CONSTANTS.THRESHOLD);

    // Deploy the MultiSigWallet with a set of signatories and the number of
    // authorizations required before a transaction can be executed.
    deployer.deploy(MultiSigWallet, signatories, numAuthorizationsRequired);

    // Deploy our Permissions library and link our `DebtRegistry` to it.
    deployer.deploy(PermissionsLib);
    deployer.link(PermissionsLib, DebtRegistry);

    return deployer.deploy(DebtRegistry).then(async () => {
        await deployer.deploy(DebtToken, DebtRegistry.address);
        await deployer.deploy(TokenTransferProxy);
        await deployer.deploy(RepaymentRouter, DebtRegistry.address, TokenTransferProxy.address);
        await deployer.deploy(DebtKernel, TokenTransferProxy.address);

        deployer.deploy(TokenRegistry).then(async () => {
            if (network === CONSTANTS.LIVE_NETWORK_ID) {
                const tokenRegistry = await TokenRegistry.deployed();

                // Set the address of the tokens in the token registry.
                await Promise.all(
                    CONSTANTS.TOKEN_LIST.map(async (token) => {
                        const {symbol, address, decimals} = token;

                        return tokenRegistry.setTokenAttributes(
                            symbol,
                            address,
                            decimals,
                            {from: OWNER}
                        );
                    })
                );
            }
        });
    });
};
