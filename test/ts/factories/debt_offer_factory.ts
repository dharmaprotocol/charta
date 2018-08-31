import BigNumber from "bignumber.js";
import * as _ from "lodash";
import { DebtOffer, SignedDebtOffer } from "../../../types/proxy/debt_offer";

export class DebtOfferFactory {
    private defaultParams: { [key: string]: any };

    constructor(defaultParams: { [key: string]: any }) {
        this.defaultParams = defaultParams;
    }

    public async generateDebtOffer(modifications = {}): Promise<SignedDebtOffer> {
        const params = _.clone(this.defaultParams);

        Object.assign(params, modifications);

        if (!params.salt) {
            params.salt = new BigNumber(
                Math.random()
                    .toString()
                    .substring(2),
            );
        }

        const debtOffer = new DebtOffer({
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

        return debtOffer.getSignedDebtOffer(web3, params.orderSignatories);
    }
}
