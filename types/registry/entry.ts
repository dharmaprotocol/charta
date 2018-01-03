import * as ABIDecoder from "abi-decoder";
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
import {RegistryEntryParameters, SemanticVersion} from "./schema";

export class DebtRegistryEntry {
    public params: RegistryEntryParameters;
    public salt: BigNumber;

    public constructor(params: RegistryEntryParameters, salt?: BigNumber) {
        this.params = params;
        this.salt = salt || this.generateSalt();
    }

    public getIssuanceHash(): Bytes32 {
        const issuanceHash = solidity.SHA3([
            this.params.version,
            this.params.debtor,
            this.params.underwriter,
            this.params.underwriterRiskRating,
            this.params.termsContract,
            this.params.termsContractParameters,
            this.salt,
        ]);
        const issuanceHashHex = ethUtil.bufferToHex(issuanceHash);
        return issuanceHashHex;
    }

    public getDebtor(): Address {
        return this.params.debtor;
    }

    public getBeneficiary(): Address {
        return this.params.beneficiary;
    }

    public getVersion(): Address {
        return this.params.version;
    }

    public getUnderwriter(): Address {
        return this.params.underwriter;
    }

    public getUnderwriterRiskRating(): BigNumber {
        return this.params.underwriterRiskRating;
    }

    public getTermsContract(): Address  {
        return this.params.termsContract;
    }

    public getTermsContractParameters(): Bytes32 {
        return this.params.termsContractParameters;
    }

    public getSalt(): BigNumber {
        return this.salt;
    }

    public getTokenId(): BigNumber {
        return new BigNumber(this.getIssuanceHash());
    }

    private generateSalt(): BigNumber {
        const saltBuffer = crypto.randomBytes(32);
        const saltBufferHex = ethUtil.bufferToHex(saltBuffer);
        return new BigNumber(saltBufferHex);
    }
}
