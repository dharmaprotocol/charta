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
class DebtKernelContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.cancelDebtOrder = {
            sendTransactionAsync(orderAddresses, orderValues, orderBytes32, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.cancelDebtOrder.estimateGasAsync.bind(self, orderAddresses, orderValues, orderBytes32));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.cancelDebtOrder, self.web3ContractInstance)(orderAddresses, orderValues, orderBytes32, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(orderAddresses, orderValues, orderBytes32, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.cancelDebtOrder.estimateGas, self.web3ContractInstance)(orderAddresses, orderValues, orderBytes32, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(orderAddresses, orderValues, orderBytes32, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.cancelDebtOrder.getData();
                return abiEncodedTransactionData;
            },
        };
        this.unpause = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.unpause.estimateGasAsync.bind(self));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.unpause, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.unpause.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.unpause.getData();
                return abiEncodedTransactionData;
            },
        };
        this.debtOrderCancelled = {
            callAsync(index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.debtOrderCancelled.call, self.web3ContractInstance)(index);
                    return result;
                });
            },
        };
        this.paused = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.paused.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.pause = {
            sendTransactionAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.pause.estimateGasAsync.bind(self));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.pause, self.web3ContractInstance)(txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.pause.estimateGas, self.web3ContractInstance)(txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.pause.getData();
                return abiEncodedTransactionData;
            },
        };
        this.issuanceCancelled = {
            callAsync(index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.issuanceCancelled.call, self.web3ContractInstance)(index);
                    return result;
                });
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
        this.TOKEN_TRANSFER_PROXY = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.TOKEN_TRANSFER_PROXY.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.setDebtToken = {
            sendTransactionAsync(debtTokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.setDebtToken.estimateGasAsync.bind(self, debtTokenAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.setDebtToken, self.web3ContractInstance)(debtTokenAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(debtTokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.setDebtToken.estimateGas, self.web3ContractInstance)(debtTokenAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(debtTokenAddress, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.setDebtToken.getData();
                return abiEncodedTransactionData;
            },
        };
        this.cancelIssuance = {
            sendTransactionAsync(version, debtor, termsContract, termsContractParameters, underwriter, underwriterRiskRating, salt, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.cancelIssuance.estimateGasAsync.bind(self, version, debtor, termsContract, termsContractParameters, underwriter, underwriterRiskRating, salt));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.cancelIssuance, self.web3ContractInstance)(version, debtor, termsContract, termsContractParameters, underwriter, underwriterRiskRating, salt, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(version, debtor, termsContract, termsContractParameters, underwriter, underwriterRiskRating, salt, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.cancelIssuance.estimateGas, self.web3ContractInstance)(version, debtor, termsContract, termsContractParameters, underwriter, underwriterRiskRating, salt, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(version, debtor, termsContract, termsContractParameters, underwriter, underwriterRiskRating, salt, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.cancelIssuance.getData();
                return abiEncodedTransactionData;
            },
        };
        this.NULL_ISSUANCE_HASH = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.NULL_ISSUANCE_HASH.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.fillDebtOrder = {
            sendTransactionAsync(creditor, orderAddresses, orderValues, orderBytes32, signaturesV, signaturesR, signaturesS, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.fillDebtOrder.estimateGasAsync.bind(self, creditor, orderAddresses, orderValues, orderBytes32, signaturesV, signaturesR, signaturesS));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.fillDebtOrder, self.web3ContractInstance)(creditor, orderAddresses, orderValues, orderBytes32, signaturesV, signaturesR, signaturesS, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(creditor, orderAddresses, orderValues, orderBytes32, signaturesV, signaturesR, signaturesS, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.fillDebtOrder.estimateGas, self.web3ContractInstance)(creditor, orderAddresses, orderValues, orderBytes32, signaturesV, signaturesR, signaturesS, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(creditor, orderAddresses, orderValues, orderBytes32, signaturesV, signaturesR, signaturesS, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.fillDebtOrder.getData();
                return abiEncodedTransactionData;
            },
        };
        this.EXTERNAL_QUERY_GAS_LIMIT = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.EXTERNAL_QUERY_GAS_LIMIT.call, self.web3ContractInstance)();
                    return result;
                });
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
        this.debtToken = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.debtToken.call, self.web3ContractInstance)();
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
            return new DebtKernelContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new DebtKernelContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/DebtKernel.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.DebtKernelContract = DebtKernelContract;
//# sourceMappingURL=debt_kernel.js.map