const CONSTANTS = require("./migration_constants");

async function generateDummyTokens(DummyToken) {
    return Promise.all(
        CONSTANTS.TOKEN_LIST.map(async (token) => {
            const { name, symbol, decimals } = token;

            const dummyToken = await DummyToken.new(
                name,
                symbol,
                decimals,
                CONSTANTS.DUMMY_TOKEN_SUPPLY,
            );

            return {
                name,
                symbol,
                address: dummyToken.address,
                decimals,
            };
        }),
    );
}

async function configureTokenRegistry(network, accounts, TokenRegistry, DummyToken) {
    const OWNER = accounts[0];
    const tokenRegistry = await TokenRegistry.deployed();
    let tokens;

    switch (network) {
        case CONSTANTS.LIVE_NETWORK_ID:
            tokens = CONSTANTS.TOKEN_LIST;
            break;

        default:
            tokens = await generateDummyTokens(DummyToken);
    }

    await Promise.all(
        tokens.map(async (token) => {
            const { symbol, address, decimals, name } = token;

            return tokenRegistry.setTokenAttributes(symbol, address, name, decimals, {
                from: OWNER,
            });
        }),
    );
}

/**
 * Generates the necessary params to configure the Dharma MultiSigWallet contract.
 *
 * @typedef DharmaMultiSigWalletParams
 * @type {object}
 * @property {string[]} signatories - the set of signatories who will be granted ownership
 *                                    privileges.
 * @property {number} numAuthorizationsRequired - the number of authorizations required to execute a
 *                                                tx.
 * @property {number} timelock - the timelock specified in seconds.
 *
 * @param {string} network - the current network truffle is running against.
 * @param {string[]} acccounts - the set of unlocked accounts available on the network.
 * @return {DharmaMultiSigWalletParams}
 */
function generateParamsForDharmaMultiSigWallet(network, accounts) {
    // We switch on the network to ensure we're configuring our MultiSigWallet accordingly.
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

    return {
        signatories,
        numAuthorizationsRequired,
        timelock: CONSTANTS.TIMELOCK_IN_SECONDS,
    };
}

module.exports = {
    generateParamsForDharmaMultiSigWallet,
    configureTokenRegistry,
};
