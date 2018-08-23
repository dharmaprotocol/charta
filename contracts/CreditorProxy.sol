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
    DebtKernel public debtKernel;

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
        address creditor;
        address repaymentVersion;
        uint creditorFee;
        address underwriter;
        uint underwriterRiskRating;
        address termsContract;
        bytes32 termsContractParameters;
        uint salt;
        uint commitmentExpirationTimestampInSec;
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

    function CreditorProxy(address[3] addresses)
        public
    {
        TOKEN_TRANSFER_PROXY = addresses[0];
        debtToken = DebtToken(addresses[1]);
        debtKernel = DebtKernel(addresses[2]);
    }

    /**
     * Allows creditor to prevent a credit
     * issuance in which they're involved from being used in
     * a future debt order.
     */

    function cancelCreditorCommitment(bytes32 creditorCommitmentHash)
        public
        whenNotPaused
    {
        require(msg.sender == creditorCommitment.creditor);
        creditOrderCancelled[creditorCommitmentHash] = true;
    }


    /*
     * Submit debt order to DebtKernel if it is consensual with creditor's request
     * Creditor signature in arguments is external creditor and not relevant to Debt Kernel
     */
    function fillCreditOrder(
        address creditor,
        address[6] orderAddresses, // repayment-router, debtor, uw, tc, p-token, relayer
        uint[8] orderValues, // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime
        bytes32[1] orderBytes32, // tcParams
        uint8[3] signaturesV, // debtV, credV, uwV
        bytes32[3] signaturesR, //
        bytes32[3] signaturesS //
    )
    public
    whenNotPaused
    returns (bytes32 _agreementId)
    {
        CreditorCommitment memory creditorCommitment = getCreditorCommitment(
            creditor, orderAddresses, orderValues, orderBytes32
        );

        if (!assertNoReplay(creditorCommitment)) { 
            return NULL_ISSUANCE_HASH; 
        }

        if (!isValidSignature(
            creditor,
            creditorCommitment.creditorCommitmentHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        )) {
            return NULL_ISSUANCE_HASH;
        }

        uint totalCreditorPayment = orderValues[2].add(creditorCommitment.creditorFee);

        if (!assertExternalBalanceAndAllowanceInvariants(creditor, orderAddresses[4], totalCreditorPayment)) {
            return NULL_ISSUANCE_HASH;
        }

        // Transfer principal to creditorProxy
        if (totalCreditorPayment > 0) {
            require(transferTokensFrom(orderAddresses[4], creditor, address(this), totalCreditorPayment));
        }

        // Fill debt order as creditor
        bytes32 creditOrderAgreementId = debtKernel.fillDebtOrder(
            address(this),
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );

        // cancel credit order if fillDebtOrder succeeded
        if (creditOrderAgreementId != NULL_ISSUANCE_HASH) {
            creditOrderCancelled[creditorCommitment.creditorCommitmentHash] = true;
        }

        // transfer debt token to real creditor
        require(debtToken.transfer(creditor, creditOrderAggreementId));

        return creditOrderAgreementId;
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /*
     * Checks if creditor's debt order matches debt order submited by debtor/relayer
     * except missing debtor address
     */

    function getCreditorCommitment(
        address creditor,
        address[6] orderAddresses,
        bytes32 termsContractParameters,
        uint[8] orderValues
    )
        internal
        view
        returns (CreditorCommitment _creditorCommitment)
    {
        CreditorCommitment memory creditorCommitment = CreditorCommitment({
            creditor: creditor,
            repaymentVersion: orderAddresses[0],
            creditorFee: orderValues[5],
            underwriter: orderAddresses[2],
            underwriterRiskRating: orderValues[0],
            termsContract: orderAddresses[3],
            termsContractParameters: termsContractParameters,
            salt: orderValues[2],
            commitmentExpirationTimestampInSec: orderValues[7],
            creditorCommitmentHash: bytes32(0)
        });

        creditorCommitment.creditorCommitmentHash = getCreditorCommitmentHash(creditorCommitment);

        return creditorCommitment;
    }

    function assertNoReplay(bytes32[1] creditorCommitmentHash)
        internal
        returns (bool _issuanceMatches)
    {
        // creditorOrder not canceled
        if (creditOrderCancelled[creditorCommitmentHash]) { return false; }

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
            creditorCommitment.creditor,
            creditorCommitment.repaymentVersion,
            creditorCommitment.creditorFee,
            creditorCommitment.underwriter,
            creditorCommitment.underwriterRiskRating,
            creditorCommitment.termsContract,
            creditorCommitment.termsContractParameters,
            creditorCommitment.commitmentExpirationTimestampInSec,
            creditorCommitment.salt
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
