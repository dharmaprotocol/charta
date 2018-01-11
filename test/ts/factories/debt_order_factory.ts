import * as _ from "lodash";
import {DebtOrder, SignedDebtOrder} from "../../../types/kernel/debt_order";
import {IssuanceCommitment} from "../../../types/kernel/issuance_commitment";

export class DebtOrderFactory {
    private defaultParams: { [key: string]: any };

    constructor(defaultParams: { [key: string]: any }) {
        this.defaultParams = defaultParams;
    }

    public async generateDebtOrder(modifications = {}): Promise<SignedDebtOrder> {
        const params = _.clone(this.defaultParams);

        Object.assign(params, modifications);

        const issuance = new IssuanceCommitment({
            debtor: params.debtor,
            termsContract: params.termsContract,
            termsContractParameters: params.termsContractParameters,
            underwriter: params.underwriter,
            underwriterRiskRating: params.underwriterRiskRating,
            version: params.issuanceVersion,
        }, params.salt);

        const debtOrder = new DebtOrder({
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
    }
}
