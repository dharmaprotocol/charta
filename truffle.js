require("dotenv").config();

const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const NonceTrackerSubprovider = require("web3-provider-engine/subproviders/nonce-tracker");

module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id,
            gas: 6712390,
            gasPrice: 1,
        },
        kovan: {
            host: "localhost",
            port: 8546,
            network_id: "42",
            from: "0x84e2229ec0c4031e7ceb78aaaa8421e48022d0c3",
            gas: 6712390,
            gasPrice: 4000000000, // 4 GWei
        },
        live: {
            provider: function() {
                const wallet = new HDWalletProvider(
                    [process.env.MAINNET_MNEMONIC],
                    `https://mainnet.infura.io/v3/${process.env.MAINNET_INFURA_ID}`,
                );

                // Hack for making HDWalletProvider accurately reflect Infura nonces
                const nonceTracker = new NonceTrackerSubprovider();
                wallet.engine._providers.unshift(nonceTracker);
                nonceTracker.setEngine(wallet.engine);

                return wallet;
            },
            network_id: "1",
            gas: 4500000,
            gasPrice: 22000000000,
        },
    },
    test_directory: "transpiled/test",
    migrations_directory: "migrations",
};
