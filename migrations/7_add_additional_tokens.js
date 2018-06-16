const BigNumber = require("bignumber.js");

const CONSTANTS = require("./migration_constants");

// A list of new tokens to add.
const tokensToAdd = [
    {
        address: "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
        name: "Numeraire",
        symbol: "NMR",
        decimals: new BigNumber(18),
    },
    {
        address: "0x0947b0e6d821378805c9598291385ce7c791a6b2",
        name: "Lendingblock",
        symbol: "LEND",
        decimals: new BigNumber(18),
    },
    {
        address: "0xec97494ee4d697e7ab3d7682062bf564ceb9d08a",
        name: "LSToken",
        symbol: "LST",
        decimals: new BigNumber(18),
    },
    {
        address: "0x623b925b0a57a24ea8de301f2e3e692ce903f0c3",
        name: "MOVI",
        symbol: "MoviToken",
        decimals: new BigNumber(18),
    },
    {
        address: "0x42d6622dece394b54999fbd73d108123806f6a18",
        name: "SPANK",
        symbol: "SPANK",
        decimals: new BigNumber(18),
    },
    {
        address: "0x8dd5fbce2f6a956c3022ba3663759011dd51e73e",
        name: "TrueUSD",
        symbol: "TUSD",
        decimals: new BigNumber(18),
    },
    {
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
        name: "Tether USD",
        symbol: "USDT",
        decimals: new BigNumber(6),
    },
    {
        address: "0xabdf147870235fcfc34153828c769a70b3fae01f",
        name: "Tether EUR",
        symbol: "EURT",
        decimals: new BigNumber(6),
    },
];

module.exports = (deployer, network, accounts) => {
    // Get the contract artifacts.
    const TokenRegistry = artifacts.require("TokenRegistry");
    const DharmaMultiSigWalletContract = artifacts.require("DharmaMultiSigWallet");

    // Define who will send the transaction -- signatory for production, else ACCOUNTS[0].
    let senderAddress;
    if (network !== CONSTANTS.LIVE_NETWORK_ID) {
        senderAddress = accounts[0];
    } else {
        senderAddress = CONSTANTS.SIGNATORIES[0];
    }

    const txData = { from: senderAddress, gas: 4000000 };

    return deployer.then(async () => {
        // Get the contracts.
        const registry = await TokenRegistry.deployed();
        const wallet = await DharmaMultiSigWalletContract.deployed();

        await Promise.all(
            tokensToAdd.map(async (tokenAttributes) => {
                // Define the arguments for invoking the `setTokenAttributes` function.
                const args = [
                    tokenAttributes.symbol,
                    tokenAttributes.address,
                    tokenAttributes.name,
                    tokenAttributes.decimals
                ];

                // Encode the transaction.
                const encodedTransaction = await registry.contract.setTokenAttributes.getData.apply(
                    null,
                    args,
                );

                // Submit the transaction.
                const result = await wallet.submitTransaction(
                    registry.address,
                    // Ether value - 0.
                    new BigNumber(0),
                    encodedTransaction,
                    txData,
                );

                // Report the transaction hash, so that it can be confirmed.
                console.log(tokenAttributes.symbol, result.tx);
            })
        );
    });
};
