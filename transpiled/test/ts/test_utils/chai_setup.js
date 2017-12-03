"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const ChaiAsPromised = require("chai-as-promised");
const ChaiBigNumber = require("chai-bignumber");
const chai_solidity_logs_1 = require("./chai_solidity_logs");
exports.chaiSetup = {
    configure() {
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
        chai.use(ChaiAsPromised);
        chai.use(chai_solidity_logs_1.default);
        chai.should();
    },
};
//# sourceMappingURL=chai_setup.js.map