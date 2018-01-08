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

    enum Errors {
        // Debt has been already been issued
        DEBT_ISSUED,
        // Order has already expired
        ORDER_EXPIRED,
        // Debt issuance associated with order has been cancelled
        ISSUANCE_CANCELLED,
        // Order has been cancelled
        ORDER_CANCELLED,
        // Order parameters specify insufficient debtor/creditor fees
        // to meet underwriter/relayer fees
        ORDER_INVALID_INSUFFICIENT_FEES,
        // Order parameters specify insufficient principal amount for
        // debtor to at least be able to meet his fees
        ORDER_INVALID_INSUFFICIENT_PRINCIPAL,
        // Order parameters specify non zero fee for an unspecified recipient
        ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT,
        // Order signatures are mismatched / malformed
        ORDER_INVALID_NON_CONSENSUAL,
        // Insufficient balance or allowance for principal token transfer
        CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT
    }

    DebtToken public debtToken;

    // solhint-disable-next-line var-name-mixedcase
    address public ZEROEX_TOKEN_TRANSFER_PROXY_ADDRESS;
    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);
    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 4999;    // Changes to state require at least 5000 gas

    mapping (bytes32 => bool) public issuanceCancelled;
    mapping (bytes32 => bool) public debtOrderCancelled;

    event LogDebtOrderFilled(
        bytes32 indexed _issuanceHash,
        uint _principal,
        address _principalToken,
        address indexed _underwriter,
        uint _underwriterFee,
        address indexed _relayer,
        uint _relayerFee
    );

    event LogError(
        uint8 indexed _errorId,
        bytes32 indexed _orderHash
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
        uint relayerFee;
        uint principalAmount;
        address principalToken;
        uint creditorFee;
        uint debtorFee;
        address relayer;
        uint expirationTimestampInSec;
        bytes32 debtOrderHash;
    }

    function DebtKernel(address zeroExTokenTransferProxyContract)
        public
    {
        ZEROEX_TOKEN_TRANSFER_PROXY_ADDRESS = zeroExTokenTransferProxyContract;
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
        uint[8] orderValues,
        bytes32[1] orderBytes32,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS,
        uint8[3] signaturesV
    )
        public
        returns (bytes32 _issuanceHash)
    {
        DebtOrder memory debtOrder = getDebtOrder(orderAddresses, orderValues, orderBytes32);

        var (zeroExOrderAddresses, zeroExOrderValues) =
            getZeroExOrderParameters(debtOrder, creditor);

        if (!assertDebtOrderValidityInvariants(debtOrder) ||
            !assertDebtOrderConsensualityInvariants(debtOrder, signaturesV, signaturesR, signaturesS) ||
            !assertZeroExOrderValidityInvariants(zeroExOrderAddresses, zeroExOrderValues)) {
            return NULL_ISSUANCE_HASH;
        }

        // Mint debt token and finalize debt agreement
        _issueDebtAgreement(this, debtOrder.issuance);

        require(debtToken.brokerZeroExOrder(
            uint(debtOrder.issuance.issuanceHash),
            debtOrder.zeroExExchangeContract,
            zeroExOrderAddresses,
            zeroExOrderValues,
            signaturesV[2],
            signaturesR[2],
            signaturesS[2]
        ));

        if (debtOrder.principalAmount > 0) {
            require(ERC20(debtOrder.principalToken).transfer(
                debtOrder.issuance.debtor,
                debtOrder.principalAmount.sub(debtOrder.debtorFee)
            ));
        }

        if (debtOrder.underwriterFee > 0) {
            require(ERC20(debtOrder.principalToken).transfer(
                debtOrder.issuance.underwriter,
                debtOrder.underwriterFee
            ));
        }

        if (debtOrder.relayerFee > 0) {
            require(ERC20(debtOrder.principalToken).transfer(
                debtOrder.relayer,
                debtOrder.relayerFee
            ));
        }

        LogDebtOrderFilled(
            debtOrder.issuance.issuanceHash,
            debtOrder.principalAmount,
            debtOrder.principalToken,
            debtOrder.issuance.underwriter,
            debtOrder.underwriterFee,
            debtOrder.relayer,
            debtOrder.relayerFee
        );

        return debtOrder.issuance.issuanceHash;
    }

    function cancelIssuance(
        address version,
        address debtor,
        address termsContract,
        bytes32 termsContractParameters,
        address underwriter,
        uint underwriterRiskRating,
        uint salt
    )
        public
    {
        require(msg.sender == debtor || msg.sender == underwriter);

        Issuance memory issuance = getIssuance(
            debtor,
            version,
            underwriter,
            termsContract,
            underwriterRiskRating,
            salt,
            termsContractParameters
        );

        issuanceCancelled[issuance.issuanceHash] = true;
    }

    function cancelDebtOrder(
        address[7] orderAddresses,
        uint[8] orderValues,
        bytes32[1] orderBytes32
    )
        public
    {
        DebtOrder memory debtOrder = getDebtOrder(orderAddresses, orderValues, orderBytes32);

        require(msg.sender == debtOrder.issuance.debtor);

        debtOrderCancelled[debtOrder.debtOrderHash] = true;
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

        assert(tokenId == uint(issuance.issuanceHash));

        return issuance.issuanceHash;
    }

    function assertDebtOrderConsensualityInvariants(
        DebtOrder debtOrder,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        internal
        returns (bool _orderIsConsensual)
    {
        if (!isValidSignature(
            debtOrder.issuance.debtor,
            debtOrder.debtOrderHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        )) {
            LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), debtOrder.debtOrderHash);
            return false;
        }

        if (debtOrder.issuance.underwriter != address(0)) {
            if (!isValidSignature(
                debtOrder.issuance.underwriter,
                getUnderwriterMessageHash(debtOrder),
                signaturesV[0],
                signaturesR[0],
                signaturesS[0]
            )) {
                LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), debtOrder.debtOrderHash);
                return false;
            }
        }

        return true;
    }

    // solhint-disable-next-line code-complexity
    function assertDebtOrderValidityInvariants(DebtOrder debtOrder)
        internal
        returns (bool _orderIsValid)
    {
        uint totalFees = debtOrder.creditorFee.add(debtOrder.debtorFee);

        // Relayer fees are implicitly specified as such:
        //      relayerFees = totalFees - debtOrder.underwriterFee
        // Invariant: there are enough fees to cover underwriter + relayer fees, i.e.
        //      totalFees >= debtorder.underwriterFee
        if (totalFees < debtOrder.underwriterFee) {
            LogError(uint8(Errors.ORDER_INVALID_INSUFFICIENT_FEES), debtOrder.debtOrderHash);
            return false;
        }

        // Invariant: debtor is given enough principal to cover at least debtorFees
        if (debtOrder.principalAmount < debtOrder.debtorFee) {
            LogError(uint8(Errors.ORDER_INVALID_INSUFFICIENT_PRINCIPAL), debtOrder.debtOrderHash);
            return false;
        }

        // Invariant: if no underwriter is specified, underwriter fees must be 0
        // Invariant: if no relayer is specified, relayer fees must be 0.
        //      Given that relayer fees = total fees - underwriter fees,
        //      we assert that total fees = underwriter fees.
        if ((debtOrder.issuance.underwriter == address(0) && debtOrder.underwriterFee > 0) ||
            (debtOrder.relayer == address(0) && totalFees != debtOrder.underwriterFee)) {
            LogError(uint8(Errors.ORDER_INVALID_UNSPECIFIED_FEE_RECIPIENT), debtOrder.debtOrderHash);
            return false;
        }

        // Invariant: debt order must not be expired
        // solhint-disable-next-line not-rely-on-time
        if (debtOrder.expirationTimestampInSec < block.timestamp) {
            LogError(uint8(Errors.ORDER_EXPIRED), debtOrder.debtOrderHash);
            return false;
        }

        // Invariant: debt order's issuance must not already be minted as debt token
        if (debtToken.ownerOf(uint(debtOrder.issuance.issuanceHash)) != address(0)) {
            LogError(uint8(Errors.DEBT_ISSUED), debtOrder.debtOrderHash);
            return false;
        }

        // Invariant: debt order's issuance must not have been cancelled
        if (issuanceCancelled[debtOrder.issuance.issuanceHash]) {
            LogError(uint8(Errors.ISSUANCE_CANCELLED), debtOrder.debtOrderHash);
            return false;
        }

        // Invariant: debt order itself must not have been cancelled
        if (debtOrderCancelled[debtOrder.debtOrderHash]) {
            LogError(uint8(Errors.ORDER_CANCELLED), debtOrder.debtOrderHash);
            return false;
        }

        return true;
    }

    function assertZeroExOrderValidityInvariants(address[5] zeroExOrderAddresses, uint[6] zeroExOrderValues)
        internal
        returns (bool _isZeroExOrderValid)
    {
        if (getBalance(zeroExOrderAddresses[2], zeroExOrderAddresses[0]) < zeroExOrderValues[0] ||
            getAllowance(zeroExOrderAddresses[2], zeroExOrderAddresses[0]) < zeroExOrderValues[0]) {
            LogError(uint8(Errors.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT), bytes32(zeroExOrderValues[5]));
            return false;
        }

        return true;
    }

    function getIssuance(
        address debtor,
        address version,
        address underwriter,
        address termsContract,
        uint underwriterRiskRating,
        uint salt,
        bytes32 termsContractParameters
    )
        internal
        pure
        returns (Issuance _issuance)
    {
        Issuance memory issuance = Issuance({
            // Order Addresses
            debtor: debtor,
            version: version,
            underwriter: underwriter,
            termsContract: termsContract,
            // Order Values
            underwriterRiskRating: underwriterRiskRating,
            salt: salt,
            // Order Bytes32
            termsContractParameters: termsContractParameters,
            issuanceHash: bytes32(0)
        });

        issuance.issuanceHash = getIssuanceHash(issuance);

        return issuance;
    }

    function getDebtOrder(address[7] orderAddresses, uint[8] orderValues, bytes32[1] orderBytes32)
        internal
        pure
        returns (DebtOrder _debtOrder)
    {
        DebtOrder memory debtOrder = DebtOrder({
            issuance: getIssuance(
                orderAddresses[0],
                orderAddresses[1],
                orderAddresses[2],
                orderAddresses[3],
                orderValues[0],
                orderValues[1],
                orderBytes32[0]
            ),
            underwriterFee: orderValues[2],
            relayerFee: orderValues[3],
            principalAmount: orderValues[4],
            principalToken: orderAddresses[5],
            creditorFee: orderValues[5],
            debtorFee: orderValues[6],
            relayer: orderAddresses[6],
            zeroExExchangeContract: orderAddresses[4],
            expirationTimestampInSec: orderValues[7],
            debtOrderHash: bytes32(0)
        });

        debtOrder.debtOrderHash = getDebtOrderHash(debtOrder);

        return debtOrder;
    }

    function getZeroExOrderParameters(
        DebtOrder debtOrder,
        address creditor
    )
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
                uint(debtOrder.debtOrderHash) // salt
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

    function getDebtOrderHash(DebtOrder debtOrder)
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
        bytes32 s
    )
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

    function getBalance(
        address token,
        address owner
    )
        internal
        returns (uint _balance)
    {
        // Limit gas to prevent reentrancy
        return ERC20(token).balanceOf.gas(EXTERNAL_QUERY_GAS_LIMIT)(owner);
    }

    function getAllowance(
        address token,
        address owner
    )
        internal
        returns (uint _allowance)
    {
        // Limit gas to prevent reentrancy
        return ERC20(token).allowance.gas(EXTERNAL_QUERY_GAS_LIMIT)(owner, ZEROEX_TOKEN_TRANSFER_PROXY_ADDRESS);
    }
}
