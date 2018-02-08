"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const ChaiAsPromised = require("chai-as-promised");
const ChaiBigNumber = require("chai-bignumber");
class ChaiSetup {
    constructor() {
        this.isConfigured = false;
    }
    configure() {
        if (this.isConfigured) {
            return;
        }
        chai.config.includeStack = true;
        chai.use(ChaiBigNumber());
        chai.use(ChaiAsPromised);
        this.isConfigured = true;
    }
}
exports.default = new ChaiSetup();
//# sourceMappingURL=chai_setup.js.map