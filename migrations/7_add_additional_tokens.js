const BigNumber = require("bignumber.js");

const CONSTANTS = require("./migration_constants");

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
        address: "0xd7a6e1007d28c7073b71e17450b4b88347bd6cf9",
        name: "EuropeanUnion Token",
        symbol: "EURT",
        decimals: new BigNumber(18),
    },
];

module.exports = (deployer, network, accounts) => {
    const TokenRegistry = artifacts.require("TokenRegistry");
    const DharmaMultiSigWalletContract = artifacts.require("DharmaMultiSigWallet");

    const TX_DEFAULTS = { from: CONSTANTS.SIGNATORIES[0], gas: 4000000 };

    return deployer.then(async () => {
        const registry = await TokenRegistry.deployed();
        const wallet = await DharmaMultiSigWalletContract.deployed();

        const methodName = "setTokenAttributes";

        await Promise.all(
            tokensToAdd.map(async (tokenAttributes) => {
                const args = [
                    tokenAttributes.symbol,
                    tokenAttributes.address,
                    tokenAttributes.name,
                    tokenAttributes.decimals
                ];

                // Encode the transaction.
                const encodedTransaction = await registry[methodName].getData.apply(
                    null,
                    args,
                );

                // Submit the transaction.
                const txHash = await wallet.submitTransaction.sendTransactionAsync(
                    registry.address,
                    // Ether value - 0.
                    new BigNumber(0),
                    encodedTransaction,
                    TX_DEFAULTS,
                );

                console.log(tokenAttributes.symbol, txHash);
            })
        );
    });
};
