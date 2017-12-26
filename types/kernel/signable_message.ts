import * as Web3 from "web3";
import {
    Address,
    Bytes32,
} from "../common"

import ethUtil = require("ethereumjs-util");

export interface ECDSASignature {
    r: string;
    s: string;
    v: number;
}

export abstract class SignableMessage {
    public abstract getHash(): Bytes32

    protected async getSignature(web3: Web3, signer: Address, hash?: Bytes32): Promise<ECDSASignature> {
        const signature = web3.eth.sign(signer, hash || this.getHash());
        const {v, r, s} = ethUtil.fromRpcSig(signature);
        return {
            r: ethUtil.bufferToHex(r),
            s: ethUtil.bufferToHex(s),
            v,
        };
    }
}
