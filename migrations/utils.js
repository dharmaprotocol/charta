const CONSTANTS = require("./migration_constants");

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
 */
function generateParamsForDharmaMultiSigWallet(network) {
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
};
