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
import "./interfaces/ZeroExExchange.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20.sol";


contract DebtKernel is Ownable {
    using SafeMath for uint;

    address public zrxTokenAddress;

    DebtToken public debtToken;

    event LogDebtIssuance(
        bytes32 indexed _issuanceHash
    );

    event LogTermBegin(
        bytes32 indexed _issuanceHash,
        uint _unixTimestampSec,
        uint _blockNumber
    );

    struct Issuance {
        address version;
        address debtor;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint salt;
        bytes32 issuanceHash;
    }

    struct DebtOrder {
        Issuance issuance;
        address zeroExExchangeContract;
        uint underwriterFee;
        uint principalAmount;
        address principalToken;
        uint creditorFee;
        uint debtorFee;
        address relayer;
        uint expirationTimestampInSec;
    }

    function DebtKernel(address _zrxTokenAddress)
        public
    {
        zrxTokenAddress = _zrxTokenAddress;
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
            debtor: issuanceAddresses[1],
            underwriter: issuanceAddresses[2],
            underwriterRiskRating: issuanceValues[0],
            termsContract: issuanceAddresses[3],
            termsContractParameters: termsContractParameters,
            salt: issuanceValues[1],
            issuanceHash: bytes32(0)
        });

        require(issuance.debtor == msg.sender);

        issuance.issuanceHash = getIssuanceHash(issuance);

        // Validate underwriter's signature if an underwriter's
        // address is present
        if (issuance.underwriter != address(0)) {
            require(isValidSignature(
                issuance.underwriter,
                issuance.issuanceHash,
                underwriterSignatureV,
                underwriterSignatureR,
                underwriterSignatureS
            ));
        }

        return _issueDebtAgreement(issuance.debtor, issuance);
    }

    function fillDebtOrder(
        address creditor,
        address[7] orderAddresses,
        uint[7] orderValues,
        bytes32[1] orderBytes32,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS,
        uint8[3] signaturesV
    )
        public
        returns (bytes32 _issuanceHash)
    {
        DebtOrder memory debtOrder = DebtOrder({
            issuance: getIssuance(orderAddresses, orderValues, orderBytes32),
            underwriterFee: orderValues[2],
            principalAmount: orderValues[3],
            principalToken: orderAddresses[5],
            creditorFee: orderValues[4],
            debtorFee: orderValues[5],
            relayer: orderAddresses[6],
            zeroExExchangeContract: orderAddresses[4],
            expirationTimestampInSec: orderValues[6]
        });

        uint totalFees = debtOrder.creditorFee.add(debtOrder.debtorFee);

        // Relayer fees are implicitly specified as such:
        //      relayerFees = totalFees - debtOrder.underwriterFee
        // We assert that there are enough fees to cover underwriter + relayer fees, i.e.
        //      totalFees >= debtorder.underwriterFee 
        require(totalFees >= debtOrder.underwriterFee);

        // Invariant: if no underwriter is specified, underwriter fees must be 0
        if (debtOrder.issuance.underwriter == address(0)) {
            require(debtOrder.underwriterFee == 0);
        }

        // Invariant: if no relayer is specified, relayer fees must be 0.
        //      Given that relayer fees = total fees - underwriter fees,
        //      we assert that total fees = underwriter fees.
        if (debtOrder.relayer == address(0)) {
            require(totalFees == debtOrder.underwriterFee);
        }

        validateDebtOrderSignatures(debtOrder, signaturesV, signaturesR, signaturesS);

        // Mint debt token and finalize debt agreement
        _issueDebtAgreement(this, debtOrder.issuance);

        var (zeroExOrderAddresses, zeroExOrderValues) = getZeroExOrderParameters(debtOrder, creditor);

        debtToken.brokerZeroExOrder(
            uint(debtOrder.issuance.issuanceHash),
            debtOrder.zeroExExchangeContract,
            zeroExOrderAddresses,
            zeroExOrderValues,
            signaturesV[2],
            signaturesR[2],
            signaturesS[2]
        );

        ERC20(debtOrder.principalToken).transfer(
            debtOrder.issuance.debtor,
            debtOrder.principalAmount.sub(debtOrder.debtorFee)
        );

        if (totalFees > 0) {
            ERC20(debtOrder.principalToken).transfer(
                debtOrder.issuance.underwriter,
                debtOrder.underwriterFee
            );

            ERC20(debtOrder.principalToken).transfer(
                debtOrder.relayer,
                totalFees.sub(debtOrder.underwriterFee)
            );
        }

        LogTermBegin(
            debtOrder.issuance.issuanceHash,
            block.timestamp,
            block.number
        );

        return debtOrder.issuance.issuanceHash;
    }

    function _issueDebtAgreement(address beneficiary, Issuance issuance)
        internal
        returns (bytes32 _issuanceHash)
    {
        // If issuance has no underwriter and a non-zero risk rating, throw.
        require(issuance.underwriter != address(0) ||
            issuance.underwriterRiskRating == 0);

        // Mint debt token and finalize debt agreement
        uint tokenId = debtToken.create(
            issuance.version,
            beneficiary,
            issuance.debtor,
            issuance.underwriter,
            issuance.underwriterRiskRating,
            issuance.termsContract,
            issuance.termsContractParameters,
            issuance.salt
        );

        LogDebtIssuance(issuance.issuanceHash);

        assert(tokenId == uint(issuance.issuanceHash));

        return issuance.issuanceHash;
    }

    function validateDebtOrderSignatures(
        DebtOrder debtOrder,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        internal
        pure
    {
        if (debtOrder.issuance.underwriter != address(0)) {
            require(isValidSignature(
                debtOrder.issuance.underwriter,
                getUnderwriterMessageHash(debtOrder),
                signaturesV[0],
                signaturesR[0],
                signaturesS[0]
            ));
        }

        require(isValidSignature(
            debtOrder.issuance.debtor,
            getDebtorMessageHash(debtOrder),
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        ));
    }

    function getIssuance(address[7] orderAddresses, uint[7] orderValues, bytes32[1] orderBytes32)
        internal
        view
        returns (Issuance _issuance)
    {
        Issuance memory issuance = Issuance({
            // Order Addresses
            debtor: orderAddresses[0],
            version: orderAddresses[1],
            underwriter: orderAddresses[2],
            termsContract: orderAddresses[3],
            // Order Values
            underwriterRiskRating: orderValues[0],
            salt: orderValues[1],
            // Order Bytes32
            termsContractParameters: orderBytes32[0],
            issuanceHash: bytes32(0)
        });

        issuance.issuanceHash = getIssuanceHash(issuance);

        return issuance;
    }

    function getZeroExOrderParameters(DebtOrder debtOrder, address creditor)
        internal
        view
        returns (address[5] _zeroExOrderAddresses, uint[6] _zeroExOrderValues)
    {
        return (
            [
                creditor, // maker
                address(0), // taker
                debtOrder.principalToken, // makerToken
                debtToken, // takerToken
                address(0) // feeRecipient
            ],
            [
                debtOrder.principalAmount.add(debtOrder.creditorFee), // makerTokenAmount
                1, // takerTokenAmount
                0, // makerFee
                0, // takerFee
                debtOrder.expirationTimestampInSec, // expirationTimestampInSec
                uint(debtOrder.issuance.issuanceHash) // salt
            ]
        );
    }

    function getIssuanceHash(Issuance issuance)
        internal
        pure
        returns (bytes32 _issuanceHash)
    {
        return keccak256(
            issuance.version,
            issuance.debtor,
            issuance.underwriter,
            issuance.underwriterRiskRating,
            issuance.termsContract,
            issuance.termsContractParameters,
            issuance.salt
        );
    }

    function getUnderwriterMessageHash(DebtOrder debtOrder)
        internal
        pure
        returns (bytes32 _underwriterMessageHash)
    {
        return keccak256(
            debtOrder.issuance.issuanceHash,
            debtOrder.underwriterFee,
            debtOrder.principalAmount,
            debtOrder.principalToken
        );
    }

    function getDebtorMessageHash(DebtOrder debtOrder)
        internal
        pure
        returns (bytes32 _debtorMessageHash)
    {
        return keccak256(
            debtOrder.issuance.issuanceHash,
            debtOrder.underwriterFee,
            debtOrder.zeroExExchangeContract,
            debtOrder.principalAmount,
            debtOrder.principalToken,
            debtOrder.debtorFee,
            debtOrder.creditorFee,
            debtOrder.relayer,
            debtOrder.expirationTimestampInSec
        );
    }

    function isValidSignature(
        address signer,
        bytes32 hash,
        uint8 v,
        bytes32 r,
        bytes32 s)
        internal
        pure
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
