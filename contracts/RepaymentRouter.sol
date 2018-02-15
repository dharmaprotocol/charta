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

import "./DebtRegistry.sol";
import "./TermsContract.sol";
import "./TokenTransferProxy.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "zeppelin-solidity/contracts/lifecycle/Pausable.sol";
import "NonFungibleToken/contracts/ERC721.sol";


/**
 * The RepaymentRouter routes allowers payers to make repayments on any
 * given debt agreement in any given token by routing the payments to
 * the debt agreement's beneficiary.  Additionally, the router acts
 * as a trusted oracle to the debt agreement's terms contract, informing
 * it of exactly what payments have been made in what quantity and in what token.
 *
 * Authors: Jaynti Kanani -- Github: jdkanani, Nadav Hollander -- Github: nadavhollander
 */
contract RepaymentRouter is Pausable {
    DebtRegistry public debtRegistry;
    TokenTransferProxy public tokenTransferProxy;

    enum Errors {
        DEBT_AGREEMENT_NONEXISTENT,
        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
        PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING,
        ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT
    }

    event LogRepayment(
        bytes32 indexed _agreementId,
        address indexed _payer,
        address indexed _beneficiary,
        uint _amount,
        address _token
    );

    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);

    /**
     * Constructor points the repayment router at the deployed registry contract.
     */
    function RepaymentRouter (address _debtRegistry, address _tokenTransferProxy) public {
        debtRegistry = DebtRegistry(_debtRegistry);
        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);
    }

    /**
     * Given an agreement id (synonymous to 'issuanceHash' in the debt registry), routes a repayment
     * of a given ERC20 token  to the debt's current beneficiary, and reports the repayment
     * to the debt's associated terms contract.
     */
    function repay(
        bytes32 agreementId,
        uint256 amount,
        address tokenAddress
    )
        public
        whenNotPaused
        returns (uint _amountRepaid)
    {
        require(tokenAddress != address(0));
        require(amount > 0);

        // Get registry entry and check if entry is valid
        address beneficiary = debtRegistry.getBeneficiary(agreementId);
        if (beneficiary == address(0)) {
            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);
            return 0;
        }

        // Check payer has sufficient balance and has granted router sufficient allowance
        if (ERC20(tokenAddress).balanceOf(msg.sender) < amount ||
            ERC20(tokenAddress).allowance(msg.sender, tokenTransferProxy) < amount) {
            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);
            return 0;
        }

        // Notify terms contract
        address termsContract = debtRegistry.getTermsContract(agreementId);
        if (!TermsContract(termsContract).registerRepayment(
            agreementId,
            msg.sender,
            beneficiary,
            amount,
            tokenAddress
        )) {
            LogError(uint8(Errors.ROUTER_UNAUTHORIZED_TO_REPORT_REPAYMENT), agreementId);
            return 0;
        }

        // Transfer amount to creditor
        require(tokenTransferProxy.transferFrom(
            tokenAddress,
            msg.sender,
            beneficiary,
            amount
        ));

        // Log event for repayment
        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);

        return amount;
    }
}
