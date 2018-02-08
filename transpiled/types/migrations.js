"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@0xproject/utils");
const common_1 = require("./common");
const base_contract_1 = require("./base_contract");
class MigrationsContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.upgrade = {
            sendTransactionAsync(newAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.upgrade.estimateGasAsync.bind(self, newAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.upgrade, self.web3ContractInstance)(newAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.upgrade.estimateGas, self.web3ContractInstance)(newAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newAddress, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.upgrade.getData();
                return abiEncodedTransactionData;
            },
        };
        this.owner = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.lastCompletedMigration = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.lastCompletedMigration.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.setCompleted = {
            sendTransactionAsync(completed, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setCompleted.estimateGasAsync.bind(self, completed));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.setCompleted, self.web3ContractInstance)(completed, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(completed, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.setCompleted.estimateGas, self.web3ContractInstance)(completed, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(completed, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setCompleted.getData();
                return abiEncodedTransactionData;
            },
        };
        common_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
} // tslint:disable:max-file-line-count
exports.MigrationsContract = MigrationsContract;
//# sourceMappingURL=migrations.js.map