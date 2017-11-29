import * as chai from 'chai';
import ChaiBigNumber = require('chai-bignumber');
import ChaiAsPromised = require('chai-as-promised');

export const chaiSetup = {
    configure() {
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
        chai.use(ChaiAsPromised);
    },
};
