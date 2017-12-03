import * as chai from "chai";
import ChaiAsPromised = require("chai-as-promised");
import ChaiBigNumber = require("chai-bignumber");
import ChaiSolidityLogs from "./chai_solidity_logs";

export const chaiSetup = {
    configure() {
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
        chai.use(ChaiAsPromised);
        chai.use(ChaiSolidityLogs);
        chai.should();
    },
};
