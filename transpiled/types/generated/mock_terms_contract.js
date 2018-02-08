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
class MockTermsContractContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.mockRegisterRepaymentReturnValue = {
            sendTransactionAsync(success, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockRegisterRepaymentReturnValue.estimateGasAsync.bind(self, success));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockRegisterRepaymentReturnValue, self.web3ContractInstance)(success, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(success, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockRegisterRepaymentReturnValue.estimateGas, self.web3ContractInstance)(success, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(success, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockRegisterRepaymentReturnValue.getData();
                return abiEncodedTransactionData;
            },
        };
        this.getMockReturnValue = {
            callAsync(functionName, argsSignature, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getMockReturnValue.call, self.web3ContractInstance)(functionName, argsSignature);
                    return result;
                });
            },
        };
        this.registerNFTRepayment = {
            sendTransactionAsync(agreementId, payer, beneficiary, tokenId, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.registerNFTRepayment.estimateGasAsync.bind(self, agreementId, payer, beneficiary, tokenId, tokenAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.registerNFTRepayment, self.web3ContractInstance)(agreementId, payer, beneficiary, tokenId, tokenAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agreementId, payer, beneficiary, tokenId, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.registerNFTRepayment.estimateGas, self.web3ContractInstance)(agreementId, payer, beneficiary, tokenId, tokenAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agreementId, payer, beneficiary, tokenId, tokenAddress, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.registerNFTRepayment.getData();
                return abiEncodedTransactionData;
            },
        };
        this.registerRepayment = {
            sendTransactionAsync(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.registerRepayment.estimateGasAsync.bind(self, agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.registerRepayment, self.web3ContractInstance)(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.registerRepayment.estimateGas, self.web3ContractInstance)(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.registerRepayment.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasRegisterRepaymentCalledWith = {
            callAsync(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasRegisterRepaymentCalledWith.call, self.web3ContractInstance)(agreementId, payer, beneficiary, unitsOfRepayment, tokenAddress);
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
        this.mockRegisterNFTRepaymentReturnValue = {
            sendTransactionAsync(success, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockRegisterNFTRepaymentReturnValue.estimateGasAsync.bind(self, success));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockRegisterNFTRepaymentReturnValue, self.web3ContractInstance)(success, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(success, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockRegisterNFTRepaymentReturnValue.estimateGas, self.web3ContractInstance)(success, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(success, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockRegisterNFTRepaymentReturnValue.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasRegisterNFTRepaymentCalledWith = {
            callAsync(agreementId, payer, beneficiary, tokenId, tokenAddress, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasRegisterNFTRepaymentCalledWith.call, self.web3ContractInstance)(agreementId, payer, beneficiary, tokenId, tokenAddress);
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
            return new MockTermsContractContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new MockTermsContractContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/MockTermsContract.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.MockTermsContractContract = MockTermsContractContract;
//# sourceMappingURL=mock_terms_contract.js.map