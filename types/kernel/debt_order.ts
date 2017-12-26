import {BigNumber} from "bignumber.js";
import {ZeroEx, SignedOrder} from "0x.js";
import {OrderParams} from "./schema";
import {SignedIssuanceCommitment} from "./issuance_commitment";
import {
    Address,
    Bytes32,
} from "../common";
import {ECDSASignature, SignableMessage} from "./signable_message";
import * as solidity from "../../utils/solidity";
import ethUtil = require("ethereumjs-util");


export class DebtOrder extends SignableMessage {
    public params: OrderParams;

    constructor(params: OrderParams) {
        super();
        this.params = params;
    }

    public getIssuanceCommitment(): SignedIssuanceCommitment {
        return this.params.debtIssuanceCommitment;
    }

    public getZeroExOrder(): SignedOrder {
        return this.params.zeroExOrder;
    }

    public getRelayer(): Address {
        return this.params.relayer;
    }

    public getUnderwriterFee(): BigNumber {
        return this.params.underwriterFee;
    }

    public getRelayerFee(): BigNumber {
        const zeroExOrder = this.getZeroExOrder();
        const zeroExRelayerFee = zeroExOrder.makerFee.plus(zeroExOrder.takerFee);

        return zeroExRelayerFee.minus(this.getUnderwriterFee());
    }

    public getHash(): Bytes32 {
        const hash = solidity.SHA3([
            this.getIssuanceCommitment().getHash(),
            ZeroEx.getOrderHashHex(this.getZeroExOrder()),
            this.getRelayer(),
        ]);

        const hashHex = ethUtil.bufferToHex(hash);
        return hashHex;
    }
}

export class SignedDebtOrder extends DebtOrder {
    private makerSignature: ECDSASignature;

    constructor(debtOrder: DebtOrder, makerSignature: ECDSASignature) {
        super(debtOrder.params);
        this.makerSignature = makerSignature;
    }

    public getMakerSignature(): ECDSASignature {
        return this.makerSignature;
    }
}
