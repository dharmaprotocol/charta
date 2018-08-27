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


/**
 * The CreditorProxy is a thin wrapper around the DebtKernel
 * It implements creditor-driven loans as specified by DIP-1
 *
 * Author: Bo Henderson <bohendo>
 */
contract CreditorProxy is Pausable {
    using SafeMath for uint;

    enum Errors {
        CREDIT_ORDER_CANCELLED,
        CREDIT_ORDER_NON_CONSENSUAL,
        CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT
    }

    DebtToken public debtToken;
    DebtKernel public debtKernel;

    // solhint-disable-next-line var-name-mixedcase
    address public TOKEN_TRANSFER_PROXY;
    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);
    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 8000;

    mapping (bytes32 => bool) public creditOrderCancelled;

    //event LogDebug(bytes32 arg1, bytes32 arg2, bytes32 arg3, bytes32 arg4);

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
        address indexed _creditor,
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
        uint commitmentExpirationTimestampInSec;
        uint salt;
        bytes32 creditorCommitmentHash;
    }

    function CreditorProxy(address _tokenTransferProxy)
        public
    {
        TOKEN_TRANSFER_PROXY = _tokenTransferProxy;
    }

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
     * Allows contract owner to set the currently used debt kernel contract.
     * Function exists to maximize upgradeability of individual modules
     * in the entire system.
     */
    function setDebtKernel(address debtKernelAddress)
        public
        onlyOwner
    {
        debtKernel = DebtKernel(debtKernelAddress);
    }

    /**
     * Allows creditor to prevent a credit
     * issuance in which they're involved from being used in
     * a future debt order.
     */
    function cancelCreditOrder(address creditor, bytes32 creditorCommitmentHash)
        public
        whenNotPaused
    {
        require(msg.sender == creditor);
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
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
    public
    whenNotPaused
    returns (bytes32 _agreementId)
    {
        CreditorCommitment memory creditorCommitment = getCreditorCommitment(
            creditor, orderAddresses, orderValues, orderBytes32
        );

        if (!assertNoReplay(creditorCommitment.creditorCommitmentHash)) { 
            LogError(uint8(Errors.CREDIT_ORDER_CANCELLED), creditor, creditorCommitment.creditorCommitmentHash);
            return NULL_ISSUANCE_HASH; 
        }

        if (!isValidSignature(
            creditor,
            creditorCommitment.creditorCommitmentHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        )) {
            LogError(uint8(Errors.CREDIT_ORDER_NON_CONSENSUAL), creditor, creditorCommitment.creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        uint totalCreditorPayment = orderValues[2].add(creditorCommitment.creditorFee);

        if (!assertExternalBalanceAndAllowanceInvariants(creditor, orderAddresses[4], totalCreditorPayment)) {
            LogError(
                uint8(Errors.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT),
                creditor,
                creditorCommitment.creditorCommitmentHash
            );
            return NULL_ISSUANCE_HASH;
        }

        // Transfer principal to creditorProxy
        if (totalCreditorPayment > 0) {
            require(transferTokensFrom(
                orderAddresses[4],
                creditor,
                address(this),
                totalCreditorPayment
            ));
        }

        // Fill debt order as creditor
        bytes32 agreementId = debtKernel.fillDebtOrder(
            address(this),
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );

        // cancel credit order if fillDebtOrder succeeded
        if (agreementId != NULL_ISSUANCE_HASH) {
            creditOrderCancelled[creditorCommitment.creditorCommitmentHash] = true;
        }

        // transfer debt token to real creditor
        debtToken.transfer(creditor, uint256(agreementId));

        LogCreditOrderFilled(creditor, orderValues[1], agreementId);

        return agreementId;
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
        uint[8] orderValues,
        bytes32[1] termsContractParameters
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
            termsContractParameters: termsContractParameters[0],
            commitmentExpirationTimestampInSec: orderValues[7],
            salt: orderValues[1],
            creditorCommitmentHash: bytes32(0)
        });
        creditorCommitment.creditorCommitmentHash = getCreditorCommitmentHash(creditorCommitment);
        return creditorCommitment;
    }


    function assertNoReplay(bytes32 creditorCommitmentHash)
        internal
        returns (bool _issuanceMatches)
    {
        // creditorOrder not canceled
        if (creditOrderCancelled[creditorCommitmentHash]) {
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

        if (getAllowance(principalToken, address(this)) < totalCreditorPayment) {
            require(setAllowance(principalToken, totalCreditorPayment));
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
     * Helper function for setting this address' allowance to the 0x transfer proxy.
     */
    function setAllowance(
        address token,
        uint amount
    )
        internal
        returns (bool _success)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).approve.gas(EXTERNAL_QUERY_GAS_LIMIT)(
            TOKEN_TRANSFER_PROXY,
            amount
        );
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
