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
import "./TokenTransferProxy.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


/**
 * The DebtKernel is the hub of all business logic governing how and when
 * debt orders can be filled and cancelled.  All logic that determines
 * whether a debt order is valid & consensual is contained herein,
 * as well as the mechanisms that transfer fees to keepers and
 * principal payments to debtors.
 *
 * Author: Nadav Hollander -- Github: nadavhollander
 */
contract DebtKernel is Pausable {
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
        // Order parameters specify amount of creditor / debtor fees
        // that is not equivalent to the amount of underwriter / relayer fees
        ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES,
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
    address public TOKEN_TRANSFER_PROXY;
    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);

    /* NOTE(kayvon): Currently, the `view` keyword does not actually enforce the
    static nature of the method; this will change in the future, but for now, in
    order to prevent reentrancy we'll need to arbitrarily set an upper bound on
    the gas limit allotted for certain method calls. */
    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 8000;

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

    event LogIssuanceCancelled(
        bytes32 indexed _issuanceHash,
        address indexed _cancelledBy
    );

    event LogDebtOrderCancelled(
        bytes32 indexed _debtOrderHash,
        address indexed _cancelledBy
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

    function DebtKernel(address tokenTransferProxyAddress)
        public
    {
        TOKEN_TRANSFER_PROXY = tokenTransferProxyAddress;
    }

    ////////////////////////
    // EXTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Allows contract owner to set the currently used debt token contract.
     * Function exists to maximize upgradeability of individual modules
     * in the entire system.
     */
    function setDebtToken(address debtTokenAddress)
        public
        onlyOwner
    {
        debtToken = DebtToken(debtTokenAddress);
    }

    /**
     * Fills a given debt order if it is valid and consensual.
     */
    function fillDebtOrder(
        address creditor,
        address[6] orderAddresses,
        uint[8] orderValues,
        bytes32[1] orderBytes32,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        public
        whenNotPaused
        returns (bytes32 _issuanceHash)
    {
        DebtOrder memory debtOrder = getDebtOrder(orderAddresses, orderValues, orderBytes32);

        // Assert order's validity & consensuality
        if (!assertDebtOrderValidityInvariants(debtOrder) ||
            !assertDebtOrderConsensualityInvariants(
                debtOrder,
                creditor,
                signaturesV,
                signaturesR,
                signaturesS) ||
            !assertExternalBalanceAndAllowanceInvariants(creditor, debtOrder)) {
            return NULL_ISSUANCE_HASH;
        }

        // Mint debt token and finalize debt agreement
        issueDebtAgreement(creditor, debtOrder.issuance);

        // Transfer principal to debtor
        if (debtOrder.principalAmount > 0) {
            require(transferTokensFrom(
                debtOrder.principalToken,
                creditor,
                debtOrder.issuance.debtor,
                debtOrder.principalAmount.sub(debtOrder.debtorFee)
            ));
        }

        // Transfer underwriter fee to underwriter
        if (debtOrder.underwriterFee > 0) {
            require(transferTokensFrom(
                debtOrder.principalToken,
                creditor,
                debtOrder.issuance.underwriter,
                debtOrder.underwriterFee
            ));
        }

        // Transfer relayer fee to relayer
        if (debtOrder.relayerFee > 0) {
            require(transferTokensFrom(
                debtOrder.principalToken,
                creditor,
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

    /**
     * Allows both underwriters and debtors to prevent a debt
     * issuance in which they're involved from being used in
     * a future debt order.
     */
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
        whenNotPaused
    {
        require(msg.sender == debtor || msg.sender == underwriter);

        Issuance memory issuance = getIssuance(
            version,
            debtor,
            underwriter,
            termsContract,
            underwriterRiskRating,
            salt,
            termsContractParameters
        );

        issuanceCancelled[issuance.issuanceHash] = true;

        LogIssuanceCancelled(issuance.issuanceHash, msg.sender);
    }

    /**
     * Allows a debtor to cancel a debt order before it's been filled
     * -- preventing any counterparty from filling it in the future.
     */
    function cancelDebtOrder(
        address[6] orderAddresses,
        uint[8] orderValues,
        bytes32[1] orderBytes32
    )
        public
        whenNotPaused
    {
        DebtOrder memory debtOrder = getDebtOrder(orderAddresses, orderValues, orderBytes32);

        require(msg.sender == debtOrder.issuance.debtor);

        debtOrderCancelled[debtOrder.debtOrderHash] = true;

        LogDebtOrderCancelled(debtOrder.debtOrderHash, msg.sender);
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Helper function that mints debt token associated with the
     * given issuance and grants it to the beneficiary.
     */
    function issueDebtAgreement(address beneficiary, Issuance issuance)
        internal
        returns (bytes32 _issuanceHash)
    {
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

    /**
     * Asserts that a debt order meets all consensuality requirements
     * described in the DebtKernel specification document.
     */
    function assertDebtOrderConsensualityInvariants(
        DebtOrder debtOrder,
        address creditor,
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        internal
        returns (bool _orderIsConsensual)
    {
        // Invariant: debtor's signature must be valid, unless debtor is submitting order
        if (msg.sender != debtOrder.issuance.debtor) {
            if (!isValidSignature(
                debtOrder.issuance.debtor,
                debtOrder.debtOrderHash,
                signaturesV[0],
                signaturesR[0],
                signaturesS[0]
            )) {
                LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), debtOrder.debtOrderHash);
                return false;
            }
        }

        // Invariant: creditor's signature must be valid, unless creditor is submitting order
        if (msg.sender != creditor) {
            if (!isValidSignature(
                creditor,
                debtOrder.debtOrderHash,
                signaturesV[1],
                signaturesR[1],
                signaturesS[1]
            )) {
                LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), debtOrder.debtOrderHash);
                return false;
            }
        }


        // Invariant: underwriter's signature must be valid (if present)
        if (debtOrder.issuance.underwriter != address(0) &&
            msg.sender != debtOrder.issuance.underwriter) {
            if (!isValidSignature(
                debtOrder.issuance.underwriter,
                getUnderwriterMessageHash(debtOrder),
                signaturesV[2],
                signaturesR[2],
                signaturesS[2]
            )) {
                LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), debtOrder.debtOrderHash);
                return false;
            }
        }

        return true;
    }

    /**
     * Asserts that debt order meets all validity requirements described in
     * the DebtKernel specification document.
     */
    function assertDebtOrderValidityInvariants(DebtOrder debtOrder)
        internal
        returns (bool _orderIsValid)
    {
        uint totalFees = debtOrder.creditorFee.add(debtOrder.debtorFee);

        // Invariant: the total value of fees contributed by debtors and creditors
        //  must be equivalent to that paid out to underwriters and relayers.
        if (totalFees != debtOrder.relayerFee.add(debtOrder.underwriterFee)) {
            LogError(uint8(Errors.ORDER_INVALID_INSUFFICIENT_OR_EXCESSIVE_FEES), debtOrder.debtOrderHash);
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

    /**
     * Assert that the creditor has a sufficient token balance and has
     * granted the token transfer proxy contract sufficient allowance to suffice for the principal
     * and creditor fee.
     */
    function assertExternalBalanceAndAllowanceInvariants(
        address creditor,
        DebtOrder debtOrder
    )
        internal
        returns (bool _isBalanceAndAllowanceSufficient)
    {
        uint totalCreditorPayment = debtOrder.principalAmount.add(debtOrder.creditorFee);

        if (getBalance(debtOrder.principalToken, creditor) < totalCreditorPayment ||
            getAllowance(debtOrder.principalToken, creditor) < totalCreditorPayment) {
            LogError(uint8(Errors.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT), debtOrder.debtOrderHash);
            return false;
        }

        return true;
    }

    /**
     * Helper function transfers a specified amount of tokens between two parties
     * using the token transfer proxy contract.
     */
    function transferTokensFrom(
        address token,
        address from,
        address to,
        uint amount
    )
        internal
        returns (bool success)
    {
        return TokenTransferProxy(TOKEN_TRANSFER_PROXY).transferFrom(
            token,
            from,
            to,
            amount
        );
    }

    /**
     * Helper function that constructs a hashed issuance structs from the given
     * parameters.
     */
    function getIssuance(
        address version,
        address debtor,
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
            version: version,
            debtor: debtor,
            underwriter: underwriter,
            termsContract: termsContract,
            underwriterRiskRating: underwriterRiskRating,
            salt: salt,
            termsContractParameters: termsContractParameters,
            issuanceHash: getIssuanceHash(
                version,
                debtor,
                underwriter,
                termsContract,
                underwriterRiskRating,
                salt,
                termsContractParameters
            )
        });

        return issuance;
    }

    /**
     * Helper function that constructs a hashed debt order struct given the raw parameters
     * of a debt order.
     */
    function getDebtOrder(address[6] orderAddresses, uint[8] orderValues, bytes32[1] orderBytes32)
        internal
        view
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
            principalToken: orderAddresses[4],
            relayer: orderAddresses[5],
            principalAmount: orderValues[2],
            underwriterFee: orderValues[3],
            relayerFee: orderValues[4],
            creditorFee: orderValues[5],
            debtorFee: orderValues[6],
            expirationTimestampInSec: orderValues[7],
            debtOrderHash: bytes32(0)
        });

        debtOrder.debtOrderHash = getDebtOrderHash(debtOrder);

        return debtOrder;
    }

    /**
     * Helper function that returns an issuance's hash
     */
    function getIssuanceHash(
        address version,
        address debtor,
        address underwriter,
        address termsContract,
        uint underwriterRiskRating,
        uint salt,
        bytes32 termsContractParameters
    )
        internal
        pure
        returns (bytes32 _issuanceHash)
    {
        return keccak256(
            version,
            debtor,
            underwriter,
            underwriterRiskRating,
            termsContract,
            termsContractParameters,
            salt
        );
    }

    /**
     * Returns the hash of the parameters which an underwriter is supposed to sign
     */
    function getUnderwriterMessageHash(DebtOrder debtOrder)
        internal
        view
        returns (bytes32 _underwriterMessageHash)
    {
        return keccak256(
            address(this),
            debtOrder.issuance.issuanceHash,
            debtOrder.underwriterFee,
            debtOrder.principalAmount,
            debtOrder.principalToken,
            debtOrder.expirationTimestampInSec
        );
    }

    /**
     * Returns the hash of the debt order.
     */
    function getDebtOrderHash(DebtOrder debtOrder)
        internal
        view
        returns (bytes32 _debtorMessageHash)
    {
        return keccak256(
            address(this),
            debtOrder.issuance.issuanceHash,
            debtOrder.underwriterFee,
            debtOrder.principalAmount,
            debtOrder.principalToken,
            debtOrder.debtorFee,
            debtOrder.creditorFee,
            debtOrder.relayer,
            debtOrder.relayerFee,
            debtOrder.expirationTimestampInSec
        );
    }

    /**
     * Given a hashed message, a signer's address, and a signature, returns
     * whether the signature is valid.
     */
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

    /**
     * Helper function for querying an address' balance on a given token.
     */
    function getBalance(
        address token,
        address owner
    )
        internal
        view
        returns (uint _balance)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).balanceOf.gas(EXTERNAL_QUERY_GAS_LIMIT)(owner);
    }

    /**
     * Helper function for querying an address' allowance to the 0x transfer proxy.
     */
    function getAllowance(
        address token,
        address owner
    )
        internal
        view
        returns (uint _allowance)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).allowance.gas(EXTERNAL_QUERY_GAS_LIMIT)(owner, TOKEN_TRANSFER_PROXY);
    }
}
