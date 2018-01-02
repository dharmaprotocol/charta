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
        address issuer;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint salt;
        bytes32 issuanceHash;
    }

    struct ZeroExOrder {
        address maker;
        address taker;
        address makerToken;
        address takerToken;
        address feeRecipient;
        uint makerTokenAmount;
        uint takerTokenAmount;
        uint makerFee;
        uint takerFee;
        uint expirationTimestampInSec;
        address exchangeContractAddress;
        uint salt;
    }

    struct DebtOrder {
        address debtor;
        Issuance issuance;
        ZeroExOrder zeroExOrder;
        uint underwriterFee;
        uint principleAmount;
        uint creditorFee;
        uint debtorFee;
        address relayer;
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
            issuer: issuanceAddresses[1],
            underwriter: issuanceAddresses[2],
            underwriterRiskRating: issuanceValues[0],
            termsContract: issuanceAddresses[3],
            termsContractParameters: termsContractParameters,
            salt: issuanceValues[1],
            issuanceHash: bytes32(0)
        });

        require(issuance.issuer == msg.sender);

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

        LogDebtIssuance(issuance.issuanceHash);

        assert(tokenId == uint(issuance.issuanceHash));

        return issuance.issuanceHash;
    }

    function fillDebtOrder(
        address[8] orderAddresses,
        uint[7] orderValues,
        bytes32[1] orderBytes32,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS,
        uint8[3] signaturesV
    )
        public
        returns (bytes32 _issuanceHash)
    {
        Issuance memory issuance = getIssuance(orderAddresses, orderValues, orderBytes32);

        ZeroExOrder memory zeroExOrder = getZeroExOrder(orderAddresses, orderValues, issuance);

        DebtOrder memory debtOrder = DebtOrder({
            debtor: orderAddresses[0],
            issuance: issuance,
            zeroExOrder: zeroExOrder,
            underwriterFee: orderValues[2],
            principleAmount: orderValues[3],
            creditorFee: orderValues[4],
            debtorFee: orderValues[5],
            relayer: orderAddresses[7]
        });

        uint totalFees = debtOrder.creditorFee.add(debtOrder.debtorFee);

        require(totalFees >= debtOrder.underwriterFee);

        validateDebtOrderSignatures(debtOrder, signaturesV, signaturesR, signaturesS);

        // Mint debt token and finalize debt agreement
        uint tokenId = debtToken.createAndApproveBrokerage(
            issuance.version,
            issuance.issuer,
            this,
            issuance.underwriter,
            issuance.underwriterRiskRating,
            issuance.termsContract,
            issuance.termsContractParameters,
            issuance.salt,
            zeroExOrder.exchangeContractAddress
        );

        assert(tokenId == zeroExOrder.salt);

        LogDebtIssuance(issuance.issuanceHash);

        fillZeroExOrder(
            zeroExOrder,
            signaturesV[2],
            signaturesR[2],
            signaturesS[2]
        );

        ERC20(zeroExOrder.makerToken).transfer(
            debtOrder.debtor,
            debtOrder.principleAmount.sub(debtOrder.debtorFee)
        );

        if (totalFees > 0) {
            ERC20(zeroExOrder.makerToken).transfer(
                debtOrder.issuance.underwriter,
                debtOrder.underwriterFee
            );

            ERC20(zeroExOrder.makerToken).transfer(
                debtOrder.relayer,
                totalFees.sub(debtOrder.underwriterFee)
            );
        }

        LogTermBegin(
            issuance.issuanceHash,
            block.timestamp,
            block.number
        );

        return issuance.issuanceHash;
    }

    function fillZeroExOrder(ZeroExOrder zeroExOrder, uint8 v, bytes32 r, bytes32 s)
        internal
    {
        ZeroExExchange(zeroExOrder.exchangeContractAddress).fillOrder(
            [
                zeroExOrder.maker,
                zeroExOrder.taker,
                zeroExOrder.makerToken,
                zeroExOrder.takerToken,
                zeroExOrder.feeRecipient
            ],
            [
                zeroExOrder.makerTokenAmount,
                zeroExOrder.takerTokenAmount,
                zeroExOrder.makerFee,
                zeroExOrder.takerFee,
                zeroExOrder.expirationTimestampInSec,
                zeroExOrder.salt
            ],
            zeroExOrder.takerTokenAmount,
            true,
            v,
            r,
            s
        );
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
        require(isValidSignature(
            debtOrder.issuance.underwriter,
            getUnderwriterMessageHash(debtOrder),
            signaturesV[0],
            signaturesR[0],
            signaturesS[0]
        ));

        require(isValidSignature(
            debtOrder.debtor,
            getDebtorMessageHash(debtOrder),
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        ));
    }

    function getIssuance(address[8] orderAddresses, uint[7] orderValues, bytes32[1] orderBytes32)
        internal
        view
        returns (Issuance _issuance)
    {
        Issuance memory issuance = Issuance({
            // Order Addresses
            issuer: orderAddresses[0],
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

    function getZeroExOrder(address[8] orderAddresses, uint[7] orderValues, Issuance issuance)
        internal
        view
        returns (ZeroExOrder _zeroExOrder)
    {
        return ZeroExOrder({
            // Order Addresses
            exchangeContractAddress: orderAddresses[4],
            maker: orderAddresses[5],
            makerToken: orderAddresses[6],
            // Order Values
            makerTokenAmount: orderValues[3].add(orderValues[4]),
            expirationTimestampInSec: orderValues[6],
            // Issuance
            salt: uint(getIssuanceHash(issuance)),
            // Misc.
            taker: address(0),
            takerFee: 0,
            makerFee: 0,
            takerToken: debtToken,
            takerTokenAmount: 1,
            feeRecipient: address(0)
        });
    }

    function getIssuanceHash(Issuance issuance)
        internal
        pure
        returns (bytes32 _issuanceHash)
    {
        return keccak256(
            issuance.version,
            issuance.issuer,
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
            debtOrder.principleAmount,
            debtOrder.zeroExOrder.makerToken
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
            debtOrder.zeroExOrder.exchangeContractAddress,
            debtOrder.principleAmount,
            debtOrder.zeroExOrder.makerToken,
            debtOrder.debtorFee,
            debtOrder.creditorFee,
            debtOrder.relayer,
            debtOrder.zeroExOrder.expirationTimestampInSec
        );
    }

    function getZeroExOrderHash(ZeroExOrder zeroExOrder)
        internal
        pure
        returns (bytes32 _zeroExOrderHash)
    {
        return keccak256(
            zeroExOrder.exchangeContractAddress,
            zeroExOrder.maker,
            zeroExOrder.taker,
            zeroExOrder.makerToken,
            zeroExOrder.takerToken,
            zeroExOrder.feeRecipient,
            zeroExOrder.makerTokenAmount,
            zeroExOrder.takerTokenAmount,
            zeroExOrder.makerFee,
            zeroExOrder.takerFee,
            zeroExOrder.expirationTimestampInSec,
            zeroExOrder.salt
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
