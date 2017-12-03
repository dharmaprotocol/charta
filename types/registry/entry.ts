import BigNumber from "bignumber.js";
import * as crypto from "crypto";
import ethUtil = require("ethereumjs-util");
import * as _ from "lodash";
import * as solidity from "../../utils/solidity";
import {
    Address,
    Bytes32,
    Log,
    UInt,
} from "../common";
import {LogInsertEntry} from "./logs";
import {RegistryEntryParameters, SemanticVersion} from "./schema";

export class DebtRegistryEntry {
    private params: RegistryEntryParameters;
    private salt: UInt;

    public constructor(params: RegistryEntryParameters, salt?: UInt) {
        this.params = params;
        this.salt = salt || this.generateSalt();
    }

    public getEntryHash(): Bytes32 {
        const entryHash = solidity.SHA3([
            this.params.version,
            this.params.creditor,
            this.params.termsContract,
            this.params.termsContractParameters,
            this.salt,
        ]);
        const entryHashHex = ethUtil.bufferToHex(entryHash);
        return entryHashHex;
    }

    public getCreditor(): Address {
        return this.params.creditor;
    }

    public getVersion(): SemanticVersion {
        return this.params.version;
    }

    public getTermsContract(): Address  {
        return this.params.termsContract;
    }

    public getTermsContractParameters(): string {
        return this.params.termsContractParameters;
    }

    public getSalt(): UInt {
        return this.salt;
    }

    public getLogInsertEntry(): Log {
        return LogInsertEntry(
            this.getEntryHash(),
            this.getCreditor(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
        );
    }

    private generateSalt(): UInt {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new BigNumber(saltBufferHex);
    }
}
