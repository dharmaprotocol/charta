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
class DummyContractContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.revokeInFirstSet = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeInFirstSet.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.revokeInFirstSet, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.revokeInFirstSet.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeInFirstSet.getData();
                return abiEncodedTransactionData;
            },
        };
        this.getSecondSetAuthorizedAgents = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getSecondSetAuthorizedAgents.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.isAuthorizedInSecondSet = {
            callAsync(agent, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.isAuthorizedInSecondSet.call, self.web3ContractInstance)(agent);
                    return result;
                });
            },
        };
        this.revokeInSecondSet = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeInSecondSet.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.revokeInSecondSet, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.revokeInSecondSet.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeInSecondSet.getData();
                return abiEncodedTransactionData;
            },
        };
        this.getFirstSetAuthorizedAgents = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getFirstSetAuthorizedAgents.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.authorizeInSecondSet = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.authorizeInSecondSet.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.authorizeInSecondSet, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.authorizeInSecondSet.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.authorizeInSecondSet.getData();
                return abiEncodedTransactionData;
            },
        };
        this.authorizeInFirstSet = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.authorizeInFirstSet.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.authorizeInFirstSet, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.authorizeInFirstSet.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.authorizeInFirstSet.getData();
                return abiEncodedTransactionData;
            },
        };
        this.isAuthorizedInFirstSet = {
            callAsync(agent, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.isAuthorizedInFirstSet.call, self.web3ContractInstance)(agent);
                    return result;
                });
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
            return new DummyContractContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new DummyContractContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/DummyContract.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.DummyContractContract = DummyContractContract;
//# sourceMappingURL=dummy_contract.js.map