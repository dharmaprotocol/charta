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
class DummyTokenContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.mintingFinished = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.mintingFinished.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.name = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.name.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.approve = {
            sendTransactionAsync(_spender, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, _spender, _value));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.approve, self.web3ContractInstance)(_spender, _value, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_spender, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance)(_spender, _value, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_spender, _value, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
                return abiEncodedTransactionData;
            },
        };
        this.totalSupply = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.totalSupply.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.transferFrom = {
            sendTransactionAsync(_from, _to, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _from, _to, _value));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_from, _to, _value, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from, _to, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_from, _to, _value, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from, _to, _value, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
                return abiEncodedTransactionData;
            },
        };
        this.decimals = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.decimals.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.mint = {
            sendTransactionAsync(_to, _amount, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mint.estimateGasAsync.bind(self, _to, _amount));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mint, self.web3ContractInstance)(_to, _amount, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to, _amount, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mint.estimateGas, self.web3ContractInstance)(_to, _amount, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to, _amount, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mint.getData();
                return abiEncodedTransactionData;
            },
        };
        this.decreaseApproval = {
            sendTransactionAsync(_spender, _subtractedValue, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.decreaseApproval.estimateGasAsync.bind(self, _spender, _subtractedValue));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.decreaseApproval, self.web3ContractInstance)(_spender, _subtractedValue, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_spender, _subtractedValue, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.decreaseApproval.estimateGas, self.web3ContractInstance)(_spender, _subtractedValue, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_spender, _subtractedValue, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.decreaseApproval.getData();
                return abiEncodedTransactionData;
            },
        };
        this.balanceOf = {
            callAsync(_owner, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.balanceOf.call, self.web3ContractInstance)(_owner);
                    return result;
                });
            },
        };
        this.finishMinting = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.finishMinting.estimateGasAsync.bind(self));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.finishMinting, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.finishMinting.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.finishMinting.getData();
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
        this.symbol = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.symbol.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.transfer = {
            sendTransactionAsync(_to, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transfer.estimateGasAsync.bind(self, _to, _value));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transfer, self.web3ContractInstance)(_to, _value, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance)(_to, _value, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to, _value, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
                return abiEncodedTransactionData;
            },
        };
        this.increaseApproval = {
            sendTransactionAsync(_spender, _addedValue, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.increaseApproval.estimateGasAsync.bind(self, _spender, _addedValue));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.increaseApproval, self.web3ContractInstance)(_spender, _addedValue, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_spender, _addedValue, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.increaseApproval.estimateGas, self.web3ContractInstance)(_spender, _addedValue, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_spender, _addedValue, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.increaseApproval.getData();
                return abiEncodedTransactionData;
            },
        };
        this.allowance = {
            callAsync(_owner, _spender, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.allowance.call, self.web3ContractInstance)(_owner, _spender);
                    return result;
                });
            },
        };
        this.setBalance = {
            sendTransactionAsync(_target, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setBalance.estimateGasAsync.bind(self, _target, _value));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.setBalance, self.web3ContractInstance)(_target, _value, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_target, _value, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.setBalance.estimateGas, self.web3ContractInstance)(_target, _value, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_target, _value, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setBalance.getData();
                return abiEncodedTransactionData;
            },
        };
        this.transferOwnership = {
            sendTransactionAsync(newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferOwnership.estimateGasAsync.bind(self, newOwner));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transferOwnership, self.web3ContractInstance)(newOwner, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(newOwner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transferOwnership.estimateGas, self.web3ContractInstance)(newOwner, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(newOwner, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferOwnership.getData();
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
            return new DummyTokenContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new DummyTokenContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/DummyToken.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.DummyTokenContract = DummyTokenContract;
//# sourceMappingURL=dummy_token.js.map