"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
exports.isBigNumber = (object) => {
    return object.isBigNumber ||
        object instanceof bignumber_js_1.BigNumber ||
        (object.constructor && object.constructor.name === "BigNumber");
};
//# sourceMappingURL=utils.js.map