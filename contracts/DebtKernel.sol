/*

  Copyright 2017 Dharma Labs Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity 0.4.18;

import "./DebtToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";


contract DebtKernel is Ownable {
    DebtToken public debtToken;

    event LogDebtIssuance(
        bytes32 indexed _issuanceHash
    );

    struct Issuance {
        address version;
        address issuer;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint salt;
    }

    function setDebtToken(address _debtTokenAddress)
        public
        onlyOwner
    {
        debtToken = DebtToken(_debtTokenAddress);
    }

    function issueDebtAgreement(
        address[4] issuanceAddresses,
        uint[2] issuanceValues,
        bytes32 termsContractParameters,
        bytes32 underwriterSignatureR,
        bytes32 underwriterSignatureS,
        uint8 underwriterSignatureV
    )
        public
        returns (bytes32 _issuanceHash)
    {
        Issuance memory issuance = Issuance({
            version: issuanceAddresses[0],
            issuer: issuanceAddresses[1],
            underwriter: issuanceAddresses[2],
            underwriterRiskRating: issuanceValues[0],
            termsContract: issuanceAddresses[3],
            termsContractParameters: termsContractParameters,
            salt: issuanceValues[1]
        });

        require(issuance.issuer == msg.sender);

        bytes32 issuanceHash = getIssuanceHash(issuanceAddresses, issuanceValues, termsContractParameters);

        // Validate underwriter's signature if an underwriter's
        // address is present
        if (issuance.underwriter != address(0)) {
            require(isValidSignature(
                issuance.underwriter,
                issuanceHash,
                underwriterSignatureV,
                underwriterSignatureR,
                underwriterSignatureS
            ));
        } else {
            require(issuance.underwriterRiskRating == 0);
        }

        // Mint debt token and finalize debt agreement
        uint tokenId = debtToken.create(
            issuance.version,
            issuance.issuer,
            issuance.underwriter,
            issuance.underwriterRiskRating,
            issuance.termsContract,
            issuance.termsContractParameters,
            issuance.salt
        );

        LogDebtIssuance(issuanceHash);

        assert(tokenId == uint(issuanceHash));

        return issuanceHash;
    }

    function getIssuanceHash(
        address[4] issuanceAddresses,
        uint[2] issuanceValues,
        bytes32 termsContractParameters
    )
        public
        constant
        returns (bytes32 _issuanceHash)
    {
        return keccak256(
            issuanceAddresses[0],
            issuanceAddresses[1],
            issuanceAddresses[2],
            issuanceValues[0],
            issuanceAddresses[3],
            termsContractParameters,
            issuanceValues[1]
        );
    }

    function isValidSignature(
        address signer,
        bytes32 hash,
        uint8 v,
        bytes32 r,
        bytes32 s)
        public
        constant
        returns (bool _valid)
    {
        return signer == ecrecover(
            keccak256("\x19Ethereum Signed Message:\n32", hash),
            v,
            r,
            s
        );
    }
}
