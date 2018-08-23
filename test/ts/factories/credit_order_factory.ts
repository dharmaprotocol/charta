import * as _ from "lodash";
import { CreditOrder, SignedCreditOrder } from "../../../types/proxy/credit_order";

export class CreditOrderFactory {
    private defaultParams: { [key: string]: any };

    constructor(defaultParams: { [key: string]: any }) {
        this.defaultParams = defaultParams;
    }

    public async generateCreditOrder(modifications = {}): Promise<SignedCreditOrder> {
        const params = _.clone(this.defaultParams);

        Object.assign(params, modifications);

        const creditOrder = new CreditOrder({
            kernelVersion: params.kernelVersion,
            creditor: params.creditor,
            repaymentRouterVersion: params.repaymentRouterVersion,
            debtor: params.debtor,
            underwriter: params.underwriter,
            termsContract: params.termsContract,
            principalToken: params.principalToken,
            relayer: params.relayer,
            underwriterRiskRating: params.underwriterRiskRating,
            salt: params.salt,
            principalAmount: params.principalAmount,
            underwriterFee: params.underwriterFee,
            relayerFee: params.relayerFee,
            creditorFee: params.creditorFee,
            debtorFee: params.debtorFee,
            expirationTimestampInSec: params.expirationTimestampInSec,
            termsContractParameters: params.termsContractParameters,
        });

        return creditOrder.getSignedCreditOrder(web3, params.orderSignatories);
    }
}
