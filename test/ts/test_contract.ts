import * as BigNumber from 'bignumber.js';
import * as chai from 'chai';
import {chaiSetup} from './utils/chai_setup.js';
import {TestContractInstance} from 'types/contracts';

chaiSetup.configure();
const expect = chai.expect;

const testContract = artifacts.require("TestContract");

contract("TestContract", (accounts) => {
    let contract: TestContractInstance;

    before(async () => {
        contract = await testContract.deployed();
    })

    it("mic check, mic check", async () => {
        let counterwoffset: BigNumber.BigNumber;

        counterwoffset = await contract.counterWithOffset(4);

        expect(counterwoffset).to.bignumber.equal(4);
    });
})
