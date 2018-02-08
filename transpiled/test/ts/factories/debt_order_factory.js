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
const _ = require("lodash");
const debt_order_1 = require("../../../types/kernel/debt_order");
const issuance_commitment_1 = require("../../../types/kernel/issuance_commitment");
class DebtOrderFactory {
    constructor(defaultParams) {
        this.defaultParams = defaultParams;
    }
    generateDebtOrder(modifications = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const params = _.clone(this.defaultParams);
            Object.assign(params, modifications);
            const issuance = new issuance_commitment_1.IssuanceCommitment({
                debtor: params.debtor,
                termsContract: params.termsContract,
                termsContractParameters: params.termsContractParameters,
                underwriter: params.underwriter,
                underwriterRiskRating: params.underwriterRiskRating,
                version: params.issuanceVersion,
            }, params.salt);
            const debtOrder = new debt_order_1.DebtOrder({
                creditorFee: params.creditorFee,
                debtIssuanceCommitment: issuance,
                debtKernelContract: params.debtKernelContract,
                debtTokenContract: params.debtTokenContract,
                debtor: params.debtor,
                debtorFee: params.debtorFee,
                expirationTimestampInSec: params.expirationTimestampInSec,
                principalAmount: params.principalAmount,
                principalTokenAddress: params.principalTokenAddress,
                relayer: params.relayer,
                relayerFee: params.relayerFee,
                underwriterFee: params.underwriterFee,
                version: params.debtOrderVersion,
            });
            return debtOrder.getSignedDebtOrder(web3, params.creditor, params.orderSignatories);
        });
    }
}
exports.DebtOrderFactory = DebtOrderFactory;
//# sourceMappingURL=debt_order_factory.js.map