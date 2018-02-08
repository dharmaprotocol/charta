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
const common_1 = require("../common");
const fs = require("fs-extra");
const base_contract_1 = require("../base_contract");
class MockTokenTransferProxyContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.getMockReturnValue = {
            callAsync(functionName, argsSignature, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getMockReturnValue.call, self.web3ContractInstance)(functionName, argsSignature);
                    return result;
                });
            },
        };
        this.transferFrom = {
            sendTransactionAsync(_token, _from, _to, _amount, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _token, _from, _to, _amount));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_token, _from, _to, _amount, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_token, _from, _to, _amount, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_token, _from, _to, _amount, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_token, _from, _to, _amount, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasTransferFromCalledWith = {
            callAsync(_token, _from, _to, _amount, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasTransferFromCalledWith.call, self.web3ContractInstance)(_token, _from, _to, _amount);
                    return result;
                });
            },
        };
        this.mockReturnValue = {
            sendTransactionAsync(functionName, argsSignature, returnValue, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockReturnValue.estimateGasAsync.bind(self, functionName, argsSignature, returnValue));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockReturnValue, self.web3ContractInstance)(functionName, argsSignature, returnValue, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(functionName, argsSignature, returnValue, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockReturnValue.estimateGas, self.web3ContractInstance)(functionName, argsSignature, returnValue, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(functionName, argsSignature, returnValue, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockReturnValue.getData();
                return abiEncodedTransactionData;
            },
        };
        this.reset = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.reset.estimateGasAsync.bind(self));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.reset, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.reset.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.reset.getData();
                return abiEncodedTransactionData;
            },
        };
        common_1.classUtils.bindAll(this, ['web3ContractInstance', 'defaults']);
    }
    deploy(...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const wrapper = this;
            const rejected = false;
            return new Promise((resolve, reject) => {
                wrapper.web3ContractInstance.new(wrapper.defaults, (err, contract) => {
                    if (err) {
                        reject(err);
                    }
                    else if (contract.address) {
                        wrapper.web3ContractInstance = wrapper.web3ContractInstance.at(contract.address);
                        wrapper.address = contract.address;
                        resolve();
                    }
                });
            });
        });
    }
    static deployed(web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentNetwork = web3.version.network;
            const { abi, networks } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(networks[currentNetwork].address);
            return new MockTokenTransferProxyContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new MockTokenTransferProxyContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/MockTokenTransferProxy.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.MockTokenTransferProxyContract = MockTokenTransferProxyContract;
//# sourceMappingURL=mock_token_transfer_proxy.js.map