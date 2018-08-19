import * as _ from "lodash";
import { CreditOrder, SignedCreditOrder } from "../../../types/proxy/credit_order";
import {
    CreditorCommitment,
    SignedCreditorCommitment,
} from "../../../types/proxy/creditor_commitment";

export class CreditOrderFactory {
    private defaultParams: { [key: string]: any };

    constructor(defaultParams: { [key: string]: any }) {
        this.defaultParams = defaultParams;
    }

    public async generateCreditOrder(modifications = {}): Promise<SignedCreditOrder> {
        const params = _.clone(this.defaultParams);

        Object.assign(params, modifications);

        const creditorCommitment = new CreditorCommitment({
            kernelVersion: params.kernelVersion,
            repaymentVersion: params.repaymentVersion,
            creditor: params.creditor,
            underwriter: params.underwriter,
            termsContract: params.termsContract,
            termsContractParameters: params.termsContractParameters,
            principalToken: params.principalToken,
            principalAmount: params.principalAmount,
            minimumRiskRating: params.minimumRiskRating,
            maximumCreditorFee: params.maxumumCreditorFee,
            commitmentExpirationTimestampInSec: params.commitmentExpirationTimestampInSec,
            nonce: params.nonce,
        });

        const creditOrder = new CreditOrder({
            creditorCommitment: creditorCommitment,
            debtor: params.debtor,
            relayer: params.relayer,
            creditorFee: params.creditorFee,
            debtorFee: params.debtorFee,
            relayerFee: params.relayerFee,
            underwriterFee: params.underwriterFee,
            underwriterRiskRating: params.underwriterRiskRating,
            orderExpirationTimestampInSec: params.orderExpirationTimestampInSec,
            salt: params.salt,
        });

        return creditOrder.getSignedCreditOrder(web3, params.orderSignatories);
    }
}
