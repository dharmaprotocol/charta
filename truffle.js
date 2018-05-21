module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id,
            gas: 4712388,
            gasPrice: 1,
        },
        kovan: {
            host: "localhost",
            port: 8546,
            network_id: "42",
            from: "0x84e2229ec0c4031e7ceb78aaaa8421e48022d0c3",
            gas: 4000000,
            gasPrice: 4000000000, // 4 GWei
        },
        live: {
            host: "localhost",
            port: 8547,
            network_id: "1",
            gas: 4000000,
            gasPrice: 10000000000, // 10 GWei, as per https://ethgasstation.info/
        },
    },
    test_directory: "transpiled/test",
    migrations_directory: "migrations",
};
