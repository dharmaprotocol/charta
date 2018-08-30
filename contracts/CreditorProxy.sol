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

import "./ContractRegistry.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


/**
 * The CreditorProxy is a thin wrapper around the DebtKernel
 * It implements creditor-driven loans as specified by DIP-1
 *
 * Authors: Bo Henderson <bohendo> & Shivani Gupta <shivgupt>
 */
contract CreditorProxy is Pausable {
    using SafeMath for uint;

    enum Errors {
        DEBT_OFFER_CANCELLED,
        DEBT_OFFER_FILLED,
        DEBT_OFFER_NON_CONSENSUAL,
        CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT
    }

    ContractRegistry public contractRegistry;

    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);
    uint16 constant public EXTERNAL_QUERY_GAS_LIMIT = 8000;

    mapping (bytes32 => bool) public debtOfferCancelled;
    mapping (bytes32 => bool) public debtOfferFilled;

    event LogDebtOfferCancelled(
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash
    );

    event LogDebtOfferFilled(
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash,
        bytes32 indexed _agreementId
    );

    event LogError(
        uint8 indexed _errorId,
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash
    );

    function CreditorProxy(address _contractRegistry)
        public
    {
        contractRegistry = ContractRegistry(_contractRegistry);
    }

    /*
     * Submit debt order to DebtKernel if it is consensual with creditor's request
     * Creditor signature in arguments is only used internally,
     * It will not be verified by the Debt Kernel
     */
    function fillDebtOffer(
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
        bytes32 creditorCommitmentHash = getCreditorCommitmentHash(
            [
                creditor,
                orderAddresses[0], // repayment router version
                orderAddresses[2], // underwriter
                orderAddresses[3] // termsContract
            ],
            [
                orderValues[5], // creditor fee
                orderValues[0], // underwriterRiskRating
                orderValues[7], // commitmentExpirationTimestampInSec
                orderValues[1] // salt
            ],
            orderBytes32[0] // termsContractParameters
        );

        if (debtOfferFilled[creditorCommitmentHash]) {
            LogError(uint8(Errors.DEBT_OFFER_FILLED), creditor, creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        if (debtOfferCancelled[creditorCommitmentHash]) {
            LogError(uint8(Errors.DEBT_OFFER_CANCELLED), creditor, creditorCommitmentHash);
            return NULL_ISSUANCE_HASH; 
        }

        if (!isValidSignature(
            creditor,
            creditorCommitmentHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1]
        )) {
            LogError(
                uint8(Errors.DEBT_OFFER_NON_CONSENSUAL),
                creditor,
                creditorCommitmentHash
            );
            return NULL_ISSUANCE_HASH;
        }

        // principal amount + creditor fee
        uint totalCreditorPayment = orderValues[2].add(orderValues[5]);

        if (!assertExternalBalanceAndAllowanceInvariants(
            creditor,
            orderAddresses[4],
            totalCreditorPayment
        )) {
            LogError(
                uint8(Errors.CREDITOR_BALANCE_OR_ALLOWANCE_INSUFFICIENT),
                creditor,
                creditorCommitmentHash
            );
            return NULL_ISSUANCE_HASH;
        }

        // Transfer principal from creditor to creditorProxy
        if (totalCreditorPayment > 0) {
            require(transferTokensFrom(
                orderAddresses[4],
                creditor,
                address(this),
                totalCreditorPayment
            ));
        }

        // Fill debt order with this contract playing the role of creditor
        bytes32 agreementId = contractRegistry.debtKernel().fillDebtOrder(
            address(this),
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesV,
            signaturesR,
            signaturesS
        );

        require(agreementId != NULL_ISSUANCE_HASH);

        debtOfferFilled[creditorCommitmentHash] = true;

        // transfer debt token to real creditor
        contractRegistry.debtToken().transfer(creditor, uint256(agreementId));

        LogDebtOfferFilled(creditor, creditorCommitmentHash, agreementId);

        return agreementId;
    }

    /**
     * Allows creditor to prevent a debt offer from being used in the future
     */
    function cancelDebtOffer(address creditor, bytes32 creditorCommitmentHash)
        public
        whenNotPaused
    {
        require(msg.sender == creditor);
        debtOfferCancelled[creditorCommitmentHash] = true;
        LogDebtOfferCancelled(creditor, creditorCommitmentHash);
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Returns the messaged signed by the creditor to indicate their commitment
     */
    function getCreditorCommitmentHash(
        address[4] commitmentAddresses,
        uint[4] commitmentValues,
        bytes32 termsContractParameters
    )
        internal
        pure
        returns (bytes32 _creditorCommitmentHash)
    {
        return keccak256(
            commitmentAddresses[0], // creditor
            commitmentAddresses[1], // repayment router version
            commitmentValues[0], // creditor fee
            commitmentAddresses[2], // underwriter
            commitmentValues[1], // underwriterRiskRating
            commitmentAddresses[3], // termsContract
            termsContractParameters,
            commitmentValues[2], // commitmentExpirationTimestampInSec
            commitmentValues[3] // salt
        );
    }


    /**
     * Assert that the creditor has a sufficient token balance and has granted the token transfer
     * proxy contract sufficient allowance to suffice for the principal and creditor fee.
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
        // ensure the token transfer proxy can transfer tokens from the creditor proxy
        if (getAllowance(principalToken, address(this)) < totalCreditorPayment) {
            require(setAllowance(principalToken, totalCreditorPayment));
        }
        return true;
    }

    /**
     * Given a hashed message, a signer's address, and a signature,
     * returns whether the signature is valid.
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
        return ERC20(token).allowance.gas(EXTERNAL_QUERY_GAS_LIMIT)(
            owner,
            address(contractRegistry.tokenTransferProxy())
        );
    }

    /**
     * Helper function for approving this address' allowance to the 0x transfer proxy.
     */
    function setAllowance(
        address token,
        uint amount
    )
        internal
        returns (bool _success)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).approve.gas(EXTERNAL_QUERY_GAS_LIMIT * 3)(
            address(contractRegistry.tokenTransferProxy()),
            amount
        );
    }

    /**
     * Helper function for transfering a specified amount of tokens between two parties
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
        return contractRegistry.tokenTransferProxy().transferFrom(
            token,
            from,
            to,
            amount
        );
    }
}
