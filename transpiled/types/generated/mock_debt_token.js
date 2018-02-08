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
class MockDebtTokenContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.brokerZeroExOrder = {
            sendTransactionAsync(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.brokerZeroExOrder.estimateGasAsync.bind(self, _tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.brokerZeroExOrder, self.web3ContractInstance)(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.brokerZeroExOrder.estimateGas, self.web3ContractInstance)(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.brokerZeroExOrder.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasTransferCalledWith = {
            callAsync(_to, _tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasTransferCalledWith.call, self.web3ContractInstance)(_to, _tokenId);
                    return result;
                });
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
        this.mockOwnerOfFor = {
            sendTransactionAsync(_tokenId, _owner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockOwnerOfFor.estimateGasAsync.bind(self, _tokenId, _owner));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockOwnerOfFor, self.web3ContractInstance)(_tokenId, _owner, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_tokenId, _owner, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockOwnerOfFor.estimateGas, self.web3ContractInstance)(_tokenId, _owner, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_tokenId, _owner, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockOwnerOfFor.getData();
                return abiEncodedTransactionData;
            },
        };
        this.getBrokerZeroExCallSignature = {
            callAsync(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getBrokerZeroExCallSignature.call, self.web3ContractInstance)(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s);
                    return result;
                });
            },
        };
        this.ownerOf = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.ownerOf.call, self.web3ContractInstance)(_tokenId);
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
        this.create = {
            sendTransactionAsync(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.create.estimateGasAsync.bind(self, _version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.create, self.web3ContractInstance)(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.create.estimateGas, self.web3ContractInstance)(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.create.getData();
                return abiEncodedTransactionData;
            },
        };
        this.transfer = {
            sendTransactionAsync(_to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transfer.estimateGasAsync.bind(self, _to, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transfer, self.web3ContractInstance)(_to, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transfer.estimateGas, self.web3ContractInstance)(_to, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transfer.getData();
                return abiEncodedTransactionData;
            },
        };
        this.wasCreateCalledWith = {
            callAsync(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasCreateCalledWith.call, self.web3ContractInstance)(_version, _beneficiary, _debtor, _underwriter, _underwriterRiskRating, _termsContract, _termsContractParameters, _salt);
                    return result;
                });
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
        this.wasBrokerZeroExOrderCalledWith = {
            callAsync(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasBrokerZeroExOrderCalledWith.call, self.web3ContractInstance)(_tokenId, _zeroExExchangeContract, _zeroExOrderAddresses, _zeroExOrderValues, _v, _r, _s);
                    return result;
                });
            },
        };
        this.mockCreateReturnValue = {
            sendTransactionAsync(_tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockCreateReturnValue.estimateGasAsync.bind(self, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockCreateReturnValue, self.web3ContractInstance)(_tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockCreateReturnValue.estimateGas, self.web3ContractInstance)(_tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockCreateReturnValue.getData();
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
            return new MockDebtTokenContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new MockDebtTokenContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/MockDebtToken.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.MockDebtTokenContract = MockDebtTokenContract;
//# sourceMappingURL=mock_debt_token.js.map