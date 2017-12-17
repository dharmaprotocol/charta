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
      gas: 4712388
    }
  },
  test_directory: 'transpiled/test',
  migrations_directory: 'transpiled/migrations'
}
