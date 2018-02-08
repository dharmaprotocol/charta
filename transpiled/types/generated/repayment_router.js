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
class RepaymentRouterContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.tokenTransferProxy = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenTransferProxy.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.debtRegistry = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.debtRegistry.call, self.web3ContractInstance)();
                    return result;
                });
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
        this.owner = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.owner.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.repayNFT = {
            sendTransactionAsync(agreementId, tokenId, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.repayNFT.estimateGasAsync.bind(self, agreementId, tokenId, tokenAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.repayNFT, self.web3ContractInstance)(agreementId, tokenId, tokenAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agreementId, tokenId, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.repayNFT.estimateGas, self.web3ContractInstance)(agreementId, tokenId, tokenAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agreementId, tokenId, tokenAddress, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.repayNFT.getData();
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
        this.repay = {
            sendTransactionAsync(agreementId, amount, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.repay.estimateGasAsync.bind(self, agreementId, amount, tokenAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.repay, self.web3ContractInstance)(agreementId, amount, tokenAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agreementId, amount, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.repay.estimateGas, self.web3ContractInstance)(agreementId, amount, tokenAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agreementId, amount, tokenAddress, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.repay.getData();
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
            return new RepaymentRouterContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new RepaymentRouterContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/RepaymentRouter.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.RepaymentRouterContract = RepaymentRouterContract;
//# sourceMappingURL=repayment_router.js.map