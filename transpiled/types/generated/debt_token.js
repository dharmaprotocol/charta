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
class DebtTokenContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.getAuthorizedMintAgents = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getAuthorizedMintAgents.call, self.web3ContractInstance)();
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
        this.getApproved = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getApproved.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
            },
        };
        this.approve = {
            sendTransactionAsync(_to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.approve.estimateGasAsync.bind(self, _to, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.approve, self.web3ContractInstance)(_to, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_to, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.approve.estimateGas, self.web3ContractInstance)(_to, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_to, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.approve.getData();
                return abiEncodedTransactionData;
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
        this.tokenOfOwnerByIndex = {
            callAsync(_owner, _index, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenOfOwnerByIndex.call, self.web3ContractInstance)(_owner, _index);
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
        this.mint = {
            sendTransactionAsync(_owner, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.mint.estimateGasAsync.bind(self, _owner, _tokenId));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.mint, self.web3ContractInstance)(_owner, _tokenId, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_owner, _tokenId, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.mint.estimateGas, self.web3ContractInstance)(_owner, _tokenId, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_owner, _tokenId, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.mint.getData();
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
        this.ownerOf = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.ownerOf.call, self.web3ContractInstance)(_tokenId);
                    return result;
                });
            },
        };
        this.tokenMetadata = {
            callAsync(_tokenId, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.tokenMetadata.call, self.web3ContractInstance)(_tokenId);
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
        this.registry = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.registry.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.revokeMintAgentAuthorization = {
            sendTransactionAsync(_agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeMintAgentAuthorization.estimateGasAsync.bind(self, _agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.revokeMintAgentAuthorization, self.web3ContractInstance)(_agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.revokeMintAgentAuthorization.estimateGas, self.web3ContractInstance)(_agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeMintAgentAuthorization.getData();
                return abiEncodedTransactionData;
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
        this.symbol = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.symbol.call, self.web3ContractInstance)();
                    return result;
                });
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
        this.addAuthorizedMintAgent = {
            sendTransactionAsync(_agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.addAuthorizedMintAgent.estimateGasAsync.bind(self, _agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.addAuthorizedMintAgent, self.web3ContractInstance)(_agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(_agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.addAuthorizedMintAgent.estimateGas, self.web3ContractInstance)(_agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(_agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedMintAgent.getData();
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
        this.numTokensTotal = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.numTokensTotal.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.getOwnerTokens = {
            callAsync(_owner, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getOwnerTokens.call, self.web3ContractInstance)(_owner);
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
            return new DebtTokenContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new DebtTokenContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/DebtToken.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.DebtTokenContract = DebtTokenContract;
//# sourceMappingURL=debt_token.js.map