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

import "./DebtKernel.sol";
import "./DebtToken.sol";
import "./TermsContract.sol";
import "./TokenTransferProxy.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract CreditorProxy is Pausable {
    using SafeMath for uint;

    enum Errors {
        CREDITOR_MISSING,

        // Order submitted does not match what creditor agreed upon
        ORDER_INVALID_NON_CONSENSUAL,

        // Order cancelled by the creditor
        ORDER_CANCELLED
    }

    DebtToken public debtToken;

    // solhint-disable-next-line var-name-mixedcase
    address public TOKEN_TRANSFER_PROXY;
    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);

    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 8000;

    mapping (address => uint) public creditorNonce;
    mapping (bytes32 => bool) public creditOrderCancelled;

    event LogCreditOrderCancelled(
        address indexed _creditor,
        uint indexed _creditorNonce
    );

    event LogCreditOrderFilled(
        address indexed _creditor,
        uint indexed _creditorNonce,
        bytes32 indexed _agreementId
    );

    event LogError(
        uint8 indexed _errorId,
        bytes32 indexed _creditorCommitmentHash
    );

    struct CreditorCommitment {
        address kernelVersion;
        address repaymentVersion;
        address creditor;
        address underwriter;
        address termsContract;
        bytes32 termsContractParameters;
        address principalToken;
        uint principalAmount;
        uint minRiskRating;
        uint maxCreditorFee;
        uint commitmentExpirationTimestampInSec;
        uint nonce;
        bytes32 creditorCommitmentHash;
    }

    struct CreditOrder {
        CreditorCommitment creditorCommitment;
        address debtor;
        address relayer;
        uint creditorFee;
        uint debtorFee;
        uint relayerFee;
        uint underwriterFee;
        uint underwriterRiskRating;
        uint orderExpirationTimestampInSec;
        uint salt;
    }

    function CreditorProxy(address tokenTransferProxyAddress)
        public
    {
        TOKEN_TRANSFER_PROXY = tokenTransferProxyAddress;
    }

    /**
     * Allows creditor to prevent a credit
     * issuance in which they're involved from being used in
     * a future debt order.
     */

    function cancelCreditorCommitment(address[6] orderAddresses, bytes32 termsContractParameters, uint[5] orderValues)
        public
        whenNotPaused
    {
        CreditorCommitment memory creditorCommitment = getCreditorCommitment(
            orderAddresses,
            termsContractParameters,
            orderValues);
        require(msg.sender == creditorCommitment.creditor);

        creditOrderCancelled[keccak256(creditorCommitment.creditor, creditorCommitment.nonce)] = true;

        LogCreditOrderCancelled(msg.sender, creditorCommitment.nonce);
    }


    /*
     * Submit debt order to DebtKernel if it is consensual with creditor's request
     * Creditor signature in arguments is external creditor and not relevant to Debt Kernel
     * TODO: if creditor submits debt order, then no need for assertions
     * TODO: approve debt kernel to transfer token (if not already)
     * TODO: transfers debt token to creditor
     */
    function fillCreditOrder(
        address[8] orderAddresses, // repayment-router, debtor, uw, tc, p-token, relayer, kernel, creditor
        // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime, minRr, nonce, maxCreditorFee, creditorExpiration
        uint[12] orderValues, 
        bytes32[1] orderBytes32, // tcParams
        uint8[3] signaturesV, // debtV, credV, uwV
        bytes32[3] signaturesR, //
        bytes32[3] signaturesS //
    )
    public
    whenNotPaused
    returns (bytes32 _agreementId)
    {
        CreditOrder memory creditOrder = getCreditOrder(orderAddresses, orderValues, orderBytes32);

        if (!assertCreditOrderValidityInvariants(creditOrder)) {
            // TODO: log error
            return NULL_ISSUANCE_HASH;
        }

        if (!isValidSignature(
            creditOrder.creditorCommitment.creditor,
            creditOrder.creditorCommitment.creditorCommitmentHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        )) {
            // TODO: log error
            return NULL_ISSUANCE_HASH;
        }

        uint totalCreditorPayment = creditOrder.creditorCommitment.principalAmount.add(creditOrder.creditorFee);

        if (!assertExternalBalanceAndAllowanceInvariants(
            creditOrder.creditorCommitment.creditor,
            creditOrder.creditorCommitment.principalToken,
            totalCreditorPayment
        )) {
            return NULL_ISSUANCE_HASH;
        }

        // Transfer principal to creditorProxy
        if (totalCreditorPayment > 0) {
            require(transferTokensFrom(
                creditOrder.creditorCommitment.principalToken,
                creditOrder.creditorCommitment.creditor,
                address(this),
                totalCreditorPayment
            ));
        }

        // TODO: Approve debt kernel if not already
        bytes32 creditOrderAgreementId = DebtKernel(creditOrder.creditorCommitment.kernelVersion).fillDebtOrder(
            address(this),
            [
                creditOrder.creditorCommitment.repaymentVersion,
                creditOrder.debtor,
                creditOrder.creditorCommitment.underwriter,
                creditOrder.creditorCommitment.termsContract,
                creditOrder.creditorCommitment.principalToken,
                creditOrder.relayer
            ],
            [
                creditOrder.underwriterRiskRating,
                creditOrder.salt,
                creditOrder.creditorCommitment.principalAmount,
                creditOrder.underwriterFee,
                creditOrder.relayerFee,
                creditOrder.creditorFee,
                creditOrder.debtorFee,
                creditOrder.orderExpirationTimestampInSec
            ],
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );

        // cancel credit order if fillDebtOrder succeeded

        if (creditOrderAgreementId != NULL_ISSUANCE_HASH) {
            creditOrderCancelled[keccak256(
                creditOrder.creditorCommitment.creditor,
                creditOrder.creditorCommitment.nonce
            )] = true;
        }


        return creditOrderAgreementId;
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /*
     * Checks if creditor's debt order matches debt order submited by debtor/relayer
     * except missing debtor address
     */

    function getCreditorCommitment(address[6] orderAddresses, bytes32 termsContractParameters, uint[5] orderValues)
        internal
        view
        returns (CreditorCommitment _creditorCommitment)
    {
        CreditorCommitment memory creditorCommitment = CreditorCommitment({
            kernelVersion: orderAddresses[0],
            repaymentVersion: orderAddresses[1],
            creditor: orderAddresses[2],
            underwriter: orderAddresses[3],
            termsContract: orderAddresses[4],
            termsContractParameters: termsContractParameters,
            principalToken: orderAddresses[5],
            principalAmount: orderValues[0],
            minRiskRating: orderValues[1],
            maxCreditorFee: orderValues[2],
            commitmentExpirationTimestampInSec: orderValues[3],
            nonce: orderValues[4],
            creditorCommitmentHash: bytes32(0)
        });

        creditorCommitment.creditorCommitmentHash = getCreditorCommitmentHash(creditorCommitment);

        return creditorCommitment;
    }

    /**
     * Helper function that constructs a hashed debt order struct given the raw parameters
     * of a debt order.
     */
    function getCreditOrder(address[8] orderAddresses, uint[12] orderValues, bytes32[1] orderBytes32)
        internal
        view
        returns (CreditOrder _creditOrder)
    {
        CreditOrder memory creditOrder = CreditOrder({
            creditorCommitment: getCreditorCommitment(
                [
                    orderAddresses[6],
                    orderAddresses[0],
                    orderAddresses[7],
                    orderAddresses[1],
                    orderAddresses[3],
                    orderAddresses[4]
                ],
                orderBytes32[0],
                [
                    orderValues[2],
                    orderValues[8],
                    orderValues[9],
                    orderValues[11],
                    orderValues[9]
                ]
            ),
            debtor: orderAddresses[1],
            relayer: orderAddresses[5],
            creditorFee: orderValues[5],
            debtorFee: orderValues[6],
            relayerFee: orderValues[4],
            underwriterFee: orderValues[3],
            underwriterRiskRating: orderValues[0],
            orderExpirationTimestampInSec: orderValues[7],
            salt: orderValues[2]
        });


        return creditOrder;
    }

    function assertCreditOrderValidityInvariants(CreditOrder creditOrder)
        internal
        returns (bool _issuanceMatches)
    {

        // risk rating is greater than or equal to what creditor requested
        if (creditOrder.creditorCommitment.minRiskRating <= creditOrder.underwriterRiskRating) {
            LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), creditOrder.creditorCommitment.creditorCommitmentHash);
            return false;
        }

        // creditorOrder not canceled
        if (creditOrderCancelled[keccak256(
                creditOrder.creditorCommitment.creditor,
                creditOrder.creditorCommitment.nonce
        )]) {
            LogError(uint8(Errors.ORDER_CANCELLED), creditOrder.creditorCommitment.creditorCommitmentHash);
            return false;
        }

        // debtor and creditor agree on fee paid by creditor
        if (creditOrder.creditorCommitment.maxCreditorFee >= creditOrder.creditorFee) {
            LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), creditOrder.creditorCommitment.creditorCommitmentHash);
            return false;
        }

        // should the expiration date that the creditor and debtor signed be equal?
        // what if two orders happen to be compatible in all fields except the expiration?
        // should the relayer be able to match & submit that debt order?
        if (creditOrder.orderExpirationTimestampInSec > block.timestamp) {
            LogError(uint8(Errors.ORDER_INVALID_NON_CONSENSUAL), creditOrder.creditorCommitment.creditorCommitmentHash);
            return false;
        }

        return true;
    }


    /**
     * Returns the hash of the credit commitment
     */
    function getCreditorCommitmentHash(CreditorCommitment creditorCommitment)
    internal
    view
    returns (bytes32 _creditorMessageHash)
    {
        return keccak256(
            creditorCommitment.kernelVersion,
            creditorCommitment.repaymentVersion,
            creditorCommitment.creditor,
            creditorCommitment.underwriter,
            creditorCommitment.termsContract,
            creditorCommitment.termsContractParameters,
            creditorCommitment.principalToken,
            creditorCommitment.principalAmount,
            creditorCommitment.minRiskRating,
            creditorCommitment.maxCreditorFee,
            creditorCommitment.commitmentExpirationTimestampInSec,
            creditorCommitment.nonce
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
     * Assert that the creditor has a sufficient token balance and has
     * granted the token transfer proxy contract sufficient allowance to suffice for the principal
     * and creditor fee.
     */
    function assertExternalBalanceAndAllowanceInvariants(
        address creditor,
        address principalToken,
        uint totalCreditorPayment
    )
        internal
        returns (bool _isBalanceAndAllowanceSufficient)
    {

        if (getBalance(principalToken, creditor) < totalCreditorPayment ||
            getAllowance(principalToken, creditor) < totalCreditorPayment) {
            // TODO: log error
            return false;
        }

        return true;
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
        returns (bool _success)
    {
        return TokenTransferProxy(TOKEN_TRANSFER_PROXY).transferFrom(
            token,
            from,
            to,
            amount
        );
    }
}
