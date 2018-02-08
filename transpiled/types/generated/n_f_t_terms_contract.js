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
class NFTTermsContractContract extends base_contract_1.BaseContract {
    constructor(web3ContractInstance, defaults) {
        super(web3ContractInstance, defaults);
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
        this.SEVEN_DAYS_IN_BLOCKS = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.SEVEN_DAYS_IN_BLOCKS.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.repaymentRouter = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.repaymentRouter.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.repaymentPrincipalNFT = {
            callAsync(defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.repaymentPrincipalNFT.call, self.web3ContractInstance)();
                    return result;
                });
            },
        };
        this.getExpectedRepaymentValue = {
            callAsync(agreementId, blockNumber, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getExpectedRepaymentValue.call, self.web3ContractInstance)(agreementId, blockNumber);
                    return result;
                });
            },
        };
        this.getValueRepaid = {
            callAsync(agreementId, blockNumber, defaultBlock) {
                return __awaiter(this, void 0, void 0, function* () {
                    const self = this;
                    const result = yield utils_1.promisify(self.web3ContractInstance.getValueRepaid.call, self.web3ContractInstance)(agreementId, blockNumber);
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
            return new NFTTermsContractContract(web3ContractInstance, defaults);
        });
    }
    static at(address, web3, defaults) {
        return __awaiter(this, void 0, void 0, function* () {
            const { abi } = yield this.getArtifactsData(web3);
            const web3ContractInstance = web3.eth.contract(abi).at(address);
            return new NFTTermsContractContract(web3ContractInstance, defaults);
        });
    }
    static getArtifactsData(web3) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const artifact = yield fs.readFile("build/contracts/NFTTermsContract.json", "utf8");
                const { abi, networks } = JSON.parse(artifact);
                return { abi, networks };
            }
            catch (e) {
                console.error("Artifacts malformed or nonexistent: " + e.toString());
            }
        });
    }
} // tslint:disable:max-file-line-count
exports.NFTTermsContractContract = NFTTermsContractContract;
//# sourceMappingURL=n_f_t_terms_contract.js.map