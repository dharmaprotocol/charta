import * as chai from 'chai'
import sha3 from '../src/index.js'
import { sha3num, sha3withsize } from '../src/index.js'
import BigNumber from 'bignumber.js'
import Web3 from 'web3'

const should = chai.should()
const web3 = new Web3()

describe('solidity-sha3', () => {
  it('should hash a string', () => {
    sha3('a').should.equal('0x3ac225168df54212a25c1c01fd35bebfea408fdac2e31ddd6f80a4bbf9a5f1cb')
  })

  it('should hash a hex string without padding', () => {
    sha3('0x0a').should.equal('0x0ef9d8f8804d174666011a394cab7901679a8944d24249fd148a6a36071151f8')
  })

  it('should hash a number as uint256', () => {
    sha3(1).should.equal('0xb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6')
  })

  it('should hash negative numbers as int256', () => {
    sha3(-1).should.equal('0xa9c584056064687e149968cbab758a3376d22aedc6a55823d1b3ecbee81b8fb9')
  })

  it('should hash negative BigNumbers', () => {
    sha3(new BigNumber('-1')).should.equal('0xa9c584056064687e149968cbab758a3376d22aedc6a55823d1b3ecbee81b8fb9')
  })

  it('should hash a BigNumber', () => {
    sha3(new BigNumber('100')).should.equal('0x26700e13983fefbd9cf16da2ed70fa5c6798ac55062a4803121a869731e308d2')
  })

  it('should hash multiple arguments', () => {
    sha3('a', 1).should.equal('0xb5cafab5b83d18303877bb912b2d66ca18ab7390cfd9be8a2e66cc5096e0ea02')
  })

  it('should hash a value of a specific size', () => {
    sha3withsize(1, 8).should.equal('0x5fe7f977e71dba2ea1a68e21057beebb9be2ac30c6410aa38d4f3fbe41dcffd2')
    sha3withsize(1, 32).should.equal('0x51f81bcdfc324a0dff2b5bec9d92e21cbebc4d5e29d3a3d30de3e03fbeab8d7f')
  })

  it('should hash a number stored in a string', () => {
    sha3num(web3.toWei('100')).should.equal('0xc7cc234d21c9cfbd4632749fd77669e7ae72f5241ce5895e410c45185a469273')
  })
})
