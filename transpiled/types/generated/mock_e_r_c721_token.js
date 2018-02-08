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
class MockERC721TokenContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.getApproved = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getApproved.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
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
        this.implementsERC721 = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.implementsERC721.call, self.web3ContractInstance)();
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
        this.transferFrom = {
            sendTransactionAsync(_from, _to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.transferFrom.estimateGasAsync.bind(self, _from, _to, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.transferFrom, self.web3ContractInstance)(_from, _to, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_from, _to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.transferFrom.estimateGas, self.web3ContractInstance)(_from, _to, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_from, _to, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.transferFrom.getData();
                return abiEncodedTransactionData;
            },
        };
        this.mockBalanceOfFor = {
            sendTransactionAsync(_owner, _balance, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockBalanceOfFor.estimateGasAsync.bind(self, _owner, _balance));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockBalanceOfFor, self.web3ContractInstance)(_owner, _balance, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_owner, _balance, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockBalanceOfFor.estimateGas, self.web3ContractInstance)(_owner, _balance, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_owner, _balance, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockBalanceOfFor.getData();
                return abiEncodedTransactionData;
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
        this.balanceOf = {
            callAsync(_owner, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.balanceOf.call, self.web3ContractInstance)(_owner);
                    return result;
                });
            },
        };
        this.wasTransferFromCalledWith = {
            callAsync(_from, _to, _tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.wasTransferFromCalledWith.call, self.web3ContractInstance)(_from, _to, _tokenId);
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
        this.mockGetApprovedFor = {
            sendTransactionAsync(_tokenId, _approved, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mockGetApprovedFor.estimateGasAsync.bind(self, _tokenId, _approved));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mockGetApprovedFor, self.web3ContractInstance)(_tokenId, _approved, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_tokenId, _approved, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mockGetApprovedFor.estimateGas, self.web3ContractInstance)(_tokenId, _approved, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_tokenId, _approved, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mockGetApprovedFor.getData();
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
            return new MockERC721TokenContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new MockERC721TokenContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/MockERC721Token.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.MockERC721TokenContract = MockERC721TokenContract;
//# sourceMappingURL=mock_e_r_c721_token.js.map