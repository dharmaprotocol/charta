module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id,
      gas: 4712388
    },
    kovan: {
      host: 'localhost',
      port: 8546,
      network_id: '42',
      from: "0x84e2229ec0c4031e7ceb78aaaa8421e48022d0c3",
      gas: 4000000
    }
  },
  test_directory: 'transpiled/test',
  migrations_directory: 'migrations'
}
