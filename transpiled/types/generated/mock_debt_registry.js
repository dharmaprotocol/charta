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
class MockDebtRegistryContract extends base_contract_1.BaseContract {
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
        this.mockGetTermsContractReturnValueFor = {
            sendTransactionAsync(issuanceHash, termsContract, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockGetTermsContractReturnValueFor.estimateGasAsync.bind(self, issuanceHash, termsContract));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockGetTermsContractReturnValueFor, self.web3ContractInstance)(issuanceHash, termsContract, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(issuanceHash, termsContract, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockGetTermsContractReturnValueFor.estimateGas, self.web3ContractInstance)(issuanceHash, termsContract, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(issuanceHash, termsContract, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockGetTermsContractReturnValueFor.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasInsertCalledWith = {
            callAsync(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasInsertCalledWith.call, self.web3ContractInstance)(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt);
                    return result;
                });
            },
        };
        this.modifyBeneficiary = {
            sendTransactionAsync(issuanceHash, newBeneficiary, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.modifyBeneficiary.estimateGasAsync.bind(self, issuanceHash, newBeneficiary));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.modifyBeneficiary, self.web3ContractInstance)(issuanceHash, newBeneficiary, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(issuanceHash, newBeneficiary, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.modifyBeneficiary.estimateGas, self.web3ContractInstance)(issuanceHash, newBeneficiary, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(issuanceHash, newBeneficiary, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.modifyBeneficiary.getData();
                return abiEncodedTransactionData;
            },
        };
        this.getTerms = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTerms.call, self.web3ContractInstance)(issuanceHash);
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
        this.mockInsertReturnValue = {
            sendTransactionAsync(issuanceHash, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockInsertReturnValue.estimateGasAsync.bind(self, issuanceHash));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockInsertReturnValue, self.web3ContractInstance)(issuanceHash, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(issuanceHash, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockInsertReturnValue.estimateGas, self.web3ContractInstance)(issuanceHash, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(issuanceHash, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockInsertReturnValue.getData();
                return abiEncodedTransactionData;
            },
        };
        this.mockGetTermsReturnValueFor = {
            sendTransactionAsync(issuanceHash, termsContract, termsContractParameters, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockGetTermsReturnValueFor.estimateGasAsync.bind(self, issuanceHash, termsContract, termsContractParameters));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockGetTermsReturnValueFor, self.web3ContractInstance)(issuanceHash, termsContract, termsContractParameters, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(issuanceHash, termsContract, termsContractParameters, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockGetTermsReturnValueFor.estimateGas, self.web3ContractInstance)(issuanceHash, termsContract, termsContractParameters, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(issuanceHash, termsContract, termsContractParameters, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockGetTermsReturnValueFor.getData();
                return abiEncodedTransactionData;
            },
        };
        this.getBeneficiary = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getBeneficiary.call, self.web3ContractInstance)(issuanceHash);
                    return result;
                });
            },
        };
        this.insert = {
            sendTransactionAsync(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.insert.estimateGasAsync.bind(self, _version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.insert, self.web3ContractInstance)(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.insert.estimateGas, self.web3ContractInstance)(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.insert.getData();
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
        this.mockGetBeneficiaryReturnValueFor = {
            sendTransactionAsync(issuanceHash, beneficiary, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockGetBeneficiaryReturnValueFor.estimateGasAsync.bind(self, issuanceHash, beneficiary));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockGetBeneficiaryReturnValueFor, self.web3ContractInstance)(issuanceHash, beneficiary, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(issuanceHash, beneficiary, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockGetBeneficiaryReturnValueFor.estimateGas, self.web3ContractInstance)(issuanceHash, beneficiary, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(issuanceHash, beneficiary, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockGetBeneficiaryReturnValueFor.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasModifyBeneficiaryCalledWith = {
            callAsync(issuanceHash, newBeneficiary, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasModifyBeneficiaryCalledWith.call, self.web3ContractInstance)(issuanceHash, newBeneficiary);
                    return result;
                });
            },
        };
        this.getTermsContract = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTermsContract.call, self.web3ContractInstance)(issuanceHash);
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
            return new MockDebtRegistryContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new MockDebtRegistryContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/MockDebtRegistry.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.MockDebtRegistryContract = MockDebtRegistryContract;
//# sourceMappingURL=mock_debt_registry.js.map