"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = require("bignumber.js");
function ether(amount) {
    const weiString = web3.toWei(amount, "ether");
    return new bignumber_js_1.BigNumber(weiString);
}
exports.ether = ether;
function percent(amount) {
    return new bignumber_js_1.BigNumber(amount).div(100).times(Math.pow(10, 9));
}
exports.percent = percent;
//# sourceMappingURL=units.js.map