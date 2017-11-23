import * as chai from 'chai';
import ChaiBigNumber = require('chai-bignumber');

export const chaiSetup = {
    configure() {
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
    },
};
