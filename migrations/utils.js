const CONSTANTS = require("./migration_constants");

/**
 * Generates DummyTokens given the list of tokens in constants.
 * Divides the total supply of tokens evenly among the initial token holders.
 * See CONSTANTS for the token list, the total supply, and the number of initial token holders.
 */
async function generateDummyTokens(network, DummyToken, initialTokenHolders) {
    return Promise.all(
        CONSTANTS.TOKEN_LIST.map(async (token) => {
            const { name, symbol, decimals } = token;

            let address;

            // HACK: Though we usually want to deploy dummy token contracts
            // onto non-live networks, there is a canonical WETH instance
            // deployed on the Kovan network that it is preferrable for us
            // to use for testing purposes.
            if (network === CONSTANTS.KOVAN_NETWORK_ID && symbol === "WETH") {
                address = CONSTANTS.KOVAN_WETH_ADDRESS;
            } else {
                const dummyToken = await DummyToken.new(
                    name,
                    symbol,
                    decimals,
                    CONSTANTS.DUMMY_TOKEN_SUPPLY,
                    initialTokenHolders,
                );

                address = dummyToken.address;
            }

            return {
                name,
                symbol,
                address,
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

        case CONSTANTS.KOVAN_NETWORK_ID:
            tokens = await generateDummyTokens(network, DummyToken, accounts);
            break;

        default:
            const initialTokenHolders = accounts.slice(0, CONSTANTS.NUM_INITIAL_BALANCE_HOLDERS);
            tokens = await generateDummyTokens(network, DummyToken, initialTokenHolders);
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
    let params;
    switch (network) {
        case CONSTANTS.LIVE_NETWORK_ID:
            signatories = CONSTANTS.SIGNATORIES;
            params = CONSTANTS.MULTISIG_PARAMS.live;
            break;
        case CONSTANTS.KOVAN_NETWORK_ID:
            signatories = CONSTANTS.TEST_NET_SIGNATORIES;
            params = CONSTANTS.MULTISIG_PARAMS.kovan;
            break;
        default:
            signatories = accounts.slice(0, CONSTANTS.SIGNATORIES.length);
            params = CONSTANTS.MULTISIG_PARAMS.live;
    }

    /**
     * The number of submissions and confirmations required before a transaction is
     * executed. For example, in the test env there are 5 signatories, and so 3
     * confirmations are required.
     *
     * @type {number}
     */
    const numAuthorizationsRequired = Math.ceil(signatories.length * params.threshold);

    return {
        signatories,
        numAuthorizationsRequired,
        timelock: params.timelockInSeconds,
    };
}

module.exports = {
    generateParamsForDharmaMultiSigWallet,
    configureTokenRegistry,
};
