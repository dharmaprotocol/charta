import * as chai from "chai";
import ChaiAsPromised = require("chai-as-promised");
import ChaiBigNumber = require("chai-bignumber");

export const chaiSetup = {
    configure() {
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
        chai.use(ChaiAsPromised);
        chai.should();
    },
};
