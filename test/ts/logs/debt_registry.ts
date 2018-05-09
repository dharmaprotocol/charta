import * as ABIDecoder from "abi-decoder";
import * as BigNumber from "bignumber.js";
import * as _ from "lodash";
import * as LogUtils from "./log_utils";

import { Address, Bytes32 } from "../../../types/common";
import { DebtRegistryEntry } from "../../../types/registry/entry";

export function LogInsertEntry(contract: Address, entry: DebtRegistryEntry): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["issuanceHash", entry.getIssuanceHash()],
            ["beneficiary", entry.getBeneficiary()],
            ["underwriter", entry.getUnderwriter()],
            ["underwriterRiskRating", entry.getUnderwriterRiskRating()],
            ["termsContract", entry.getTermsContract()],
            ["termsContractParameters", entry.getTermsContractParameters()],
        ]),
        name: "LogInsertEntry",
    };
}

export function LogModifyEntryBeneficiary(
    contract: Address,
    issuanceHash: Bytes32,
    previousBeneficiary: Address,
    newBeneficiary: Address,
): ABIDecoder.DecodedLog {
    return {
        address: contract,
        events: LogUtils.getParams([
            ["issuanceHash", issuanceHash],
            ["previousBeneficiary", previousBeneficiary],
            ["newBeneficiary", newBeneficiary],
        ]),
        name: "LogModifyEntryBeneficiary",
    };
}
