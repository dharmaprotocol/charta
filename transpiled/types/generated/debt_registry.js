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
class DebtRegistryContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
        this.getTermsContractParameters = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTermsContractParameters.call, self.web3ContractInstance)(issuanceHash);
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
        this.addAuthorizedEditAgent = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.addAuthorizedEditAgent.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.addAuthorizedEditAgent, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.addAuthorizedEditAgent.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedEditAgent.getData();
                return abiEncodedTransactionData;
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
        this.paused = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.paused.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.getAuthorizedInsertAgents = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getAuthorizedInsertAgents.call, self.web3ContractInstance)();
                    return result;
                });
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
        this.get = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.get.call, self.web3ContractInstance)(issuanceHash);
                    return result;
                });
            },
        };
        this.revokeEditAgentAuthorization = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeEditAgentAuthorization.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.revokeEditAgentAuthorization, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.revokeEditAgentAuthorization.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeEditAgentAuthorization.getData();
                return abiEncodedTransactionData;
            },
        };
        this.addAuthorizedInsertAgent = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.addAuthorizedInsertAgent.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.addAuthorizedInsertAgent, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.addAuthorizedInsertAgent.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.addAuthorizedInsertAgent.getData();
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
        this.revokeInsertAgentAuthorization = {
            sendTransactionAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData, self.revokeInsertAgentAuthorization.estimateGasAsync.bind(self, agent));
                    const txHash = yield utils_1.promisify(self.web3ContractInstance.revokeInsertAgentAuthorization, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return txHash;
                });
            },
            estimateGasAsync(agent, txData = {}) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const txDataWithDefaults = yield self.applyDefaultsToTxDataAsync(txData);
                    const gas = yield utils_1.promisify(self.web3ContractInstance.revokeInsertAgentAuthorization.estimateGas, self.web3ContractInstance)(agent, txDataWithDefaults);
                    return gas;
                });
            },
            getABIEncodedTransactionData(agent, txData = {}) {
                const self = this;
                const abiEncodedTransactionData = self.web3ContractInstance.revokeInsertAgentAuthorization.getData();
                return abiEncodedTransactionData;
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
        this.getIssuanceBlockTimestamp = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getIssuanceBlockTimestamp.call, self.web3ContractInstance)(issuanceHash);
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
        this.getTermsContract = {
            callAsync(issuanceHash, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getTermsContract.call, self.web3ContractInstance)(issuanceHash);
                    return result;
                });
            },
        };
        this.getAuthorizedEditAgents = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getAuthorizedEditAgents.call, self.web3ContractInstance)();
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
            return new DebtRegistryContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new DebtRegistryContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/DebtRegistry.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.DebtRegistryContract = DebtRegistryContract;
//# sourceMappingURL=debt_registry.js.map