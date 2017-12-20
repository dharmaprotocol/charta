import BigNumber from "bignumber.js";
import * as ABIDecoder from "abi-decoder";
import * as crypto from "crypto";
import ethUtil = require("ethereumjs-util");
import * as _ from "lodash";
import * as solidity from "../../utils/solidity";
import {
    Address,
    Bytes32,
    Log,
    UInt
} from "../common";
import {LogInsertEntry} from "./logs";
import {RegistryEntryParameters, SemanticVersion} from "./schema";

export class DebtRegistryEntry {
    private params: RegistryEntryParameters;
    private salt: BigNumber;

    public constructor(params: RegistryEntryParameters, salt?: BigNumber) {
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

    public getVersion(): Address {
        return this.params.version;
    }

    public getTermsContract(): Address  {
        return this.params.termsContract;
    }

    public getTermsContractParameters(): string {
        return this.params.termsContractParameters;
    }

    public getTermsContractParametersHash(): string {
        const termsContractParametersHash =  solidity.SHA3([this.params.termsContractParameters]);
        return ethUtil.bufferToHex(termsContractParametersHash);
    }

    public getSalt(): BigNumber {
        return this.salt;
    }

    public getLogInsertEntry(contractAddress: Address): ABIDecoder.DecodedLog {
        return LogInsertEntry(
            contractAddress,
            this.getEntryHash(),
            this.getCreditor(),
            this.getTermsContract(),
            this.getTermsContractParameters(),
        );
    }

    private generateSalt(): BigNumber {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new BigNumber(saltBufferHex);
    }
}
