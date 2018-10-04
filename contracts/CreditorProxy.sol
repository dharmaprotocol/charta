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

import "./decision_engines/CreditorProxyDecisionEngine.sol";


/**
 * The CreditorProxy is a thin wrapper around the DebtKernel
 * It implements creditor-driven loans as specified by DIP-1
 *
 * Authors: Bo Henderson <bohendo> & Shivani Gupta <shivgupt> & Dharma Team
 * DIP: https://github.com/dharmaprotocol/DIPs/issues/1
 */
contract CreditorProxy is Pausable {
    using SafeMath for uint;

    enum Errors {
        DEBT_OFFER_CANCELLED,
        DEBT_OFFER_ALREADY_FILLED,
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

    function verifyDecisionEngineParams(
        bytes32[] decisionEngineParams,
        uint8[] signaturesV,
        bytes32[] signaturesS,
        bytes32[] signaturesR
    ) public view returns (bool, bytes32) {
        address creditor = address(decisionEngineParams[0]);
        address decisionEngineAddress = address(decisionEngineParams[1]);

        CreditorProxyDecisionEngine decisionEngine = CreditorProxyDecisionEngine(decisionEngineAddress);

        return decisionEngine.evaluate(
            creditor,
            decisionEngineParams,
            signaturesR,
            signaturesS,
            signaturesV
        );
    }

    /*
     * Submit debt order to DebtKernel if it is consensual with creditor's request
     * Creditor signature in arguments is only used internally,
     * It will not be verified by the Debt Kernel
     */
    function fillDebtOffer(
        bytes32[] decisionEngineParams,
        address[6] orderAddresses, // repayment-router, debtor, uw, tc, p-token, relayer
        uint[8] orderValues, // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime
        bytes32[1] orderBytes32, // tcParams
        uint8[] memory signaturesV, // debtV, credV, uwV
        bytes32[] memory signaturesR,
        bytes32[] memory signaturesS
    )
        public
        whenNotPaused
        returns (bytes32 _agreementId)
    {
        address creditor = address(decisionEngineParams[0]);

        bool paramsVerified;
        bytes32 creditorCommitmentHash;

        // The following step includes verifying the creditor commitment hash itself.
        (paramsVerified, creditorCommitmentHash) = verifyDecisionEngineParams(
            decisionEngineParams,
            signaturesV,
            signaturesS,
            signaturesR
        );

        if (!paramsVerified) {
            LogError(uint8(Errors.DEBT_OFFER_NON_CONSENSUAL), creditor, creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        if (debtOfferFilled[creditorCommitmentHash]) {
            LogError(uint8(Errors.DEBT_OFFER_ALREADY_FILLED), creditor, creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        if (debtOfferCancelled[creditorCommitmentHash]) {
            LogError(uint8(Errors.DEBT_OFFER_CANCELLED), creditor, creditorCommitmentHash);
            return NULL_ISSUANCE_HASH;
        }

        // principal amount + creditor fee
        uint totalCreditorPayment = orderValues[2].add(orderValues[5]);

        if (!hasSufficientBalanceAndAllowance(
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

        // Transfer principal from creditor to CreditorProxy
        if (totalCreditorPayment > 0) {
            require(
                transferTokensFrom(
                    orderAddresses[4],
                    creditor,
                    address(this),
                    totalCreditorPayment
                )
            );
        }

        bytes32 agreementId = fillDebtOrder(
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesV,
            signaturesS,
            signaturesR
        );

        require(agreementId != NULL_ISSUANCE_HASH);

        debtOfferFilled[creditorCommitmentHash] = true;

        // transfer debt token to real creditor
        contractRegistry.debtToken().transfer(creditor, uint256(agreementId));

        LogDebtOfferFilled(creditor, creditorCommitmentHash, agreementId);

        return agreementId;
    }

    function fillDebtOrder(
        address[6] orderAddresses, // repayment-router, debtor, uw, tc, p-token, relayer
        uint[8] orderValues, // rr, salt, pa, uwFee, rFee, cFee, dFee, expTime
        bytes32[1] orderBytes32, // tcParams
        uint8[] signaturesV,
        bytes32[] signaturesS,
        bytes32[] signaturesR
    ) public view returns (bytes32 agreementId) {
        uint8[3] memory signaturesVStatic;
        signaturesVStatic[0] = signaturesV[0];
        signaturesVStatic[1] = signaturesV[1];
        signaturesVStatic[2] = signaturesV[2];

        bytes32[3] memory signaturesRStatic;
        signaturesRStatic[0] = signaturesR[0];
        signaturesRStatic[1] = signaturesR[1];
        signaturesRStatic[2] = signaturesR[2];

        bytes32[3] memory signaturesSStatic;
        signaturesSStatic[0] = signaturesS[0];
        signaturesSStatic[1] = signaturesS[1];
        signaturesSStatic[2] = signaturesS[2];

        // Fill debt order with this contract playing the role of creditor
        return contractRegistry.debtKernel().fillDebtOrder(
            address(this),
            orderAddresses,
            orderValues,
            orderBytes32,
            signaturesVStatic,
            signaturesRStatic,
            signaturesSStatic
        );
    }

    /**
     * Allows creditor to prevent a debt offer from being used in the future
     */
    function cancelDebtOffer(
        address decisionEngineAddress,
        bytes32[] decisionEngineParams
    )
        public
        whenNotPaused
    {
        address creditor = address(decisionEngineParams[0]);

        require(msg.sender == creditor);

        CreditorProxyDecisionEngine decisionEngine = CreditorProxyDecisionEngine(decisionEngineAddress);

        bytes32 creditorCommitmentHash = decisionEngine.getCreditorCommitmentHash(
            decisionEngineParams
        );

        debtOfferCancelled[creditorCommitmentHash] = true;

        LogDebtOfferCancelled(creditor, creditorCommitmentHash);
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////


    /**
     * Assert that the creditor has a sufficient token balance and has granted the token transfer
     * proxy contract sufficient allowance to suffice for the principal and creditor fee.
     */
    function hasSufficientBalanceAndAllowance(
        address creditor,
        address principalToken,
        uint totalCreditorPayment
    )
        internal
        returns (bool _isBalanceAndAllowanceSufficient)
    {
        // The allowance that this contract has for a creditor's tokens.
        uint proxyAllowance = getAllowance(principalToken, creditor, address(this));
        uint creditorBalance = getBalance(principalToken, creditor);

        if (creditorBalance < totalCreditorPayment || proxyAllowance < totalCreditorPayment) {
            return false;
        }

        // The allowance that the token transfer proxy has for this contract's tokens.
        uint tokenTransferAllowance = getAllowance(
            principalToken,
            address(this),
            contractRegistry.tokenTransferProxy()
        );

        // Ensure the token transfer proxy can transfer tokens from the creditor proxy
        if (tokenTransferAllowance < totalCreditorPayment) {
            require(setTokenTransferAllowance(principalToken, totalCreditorPayment));
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
     * Helper function for querying this contract's allowance for transferring the given token.
     */
    function getAllowance(
        address token,
        address owner,
        address granter
    )
        internal
        view
        returns (uint _allowance)
    {
        // Limit gas to prevent reentrancy.
        return ERC20(token).allowance.gas(EXTERNAL_QUERY_GAS_LIMIT)(
            owner,
            granter
        );
    }

    /**
     * Helper function for approving this address' allowance to Dharma's token transfer proxy.
     */
    function setTokenTransferAllowance(
        address token,
        uint amount
    )
        internal
        returns (bool _success)
    {
        return ERC20(token).approve(
            address(contractRegistry.tokenTransferProxy()),
            amount
        );
    }


    /**
     * Helper function for transferring a specified amount of tokens between two parties.
     */
    function transferTokensFrom(
        address _token,
        address _from,
        address _to,
        uint _amount
    )
        internal
        returns (bool _success)
    {
        return ERC20(_token).transferFrom(_from, _to, _amount);
    }
}
