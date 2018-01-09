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
import "zeppelin-solidity/contracts/token/ERC20.sol";
import "NonFungibleToken/contracts/ERC721.sol";


contract RepaymentRouter {
    DebtRegistry public debtRegistry;

    enum Errors {
        DEBT_AGREEMENT_NONEXISTENT,
        PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT,
        PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING
    }

    event LogRepayment(
        bytes32 indexed _agreementId,
        address indexed _payer,
        address indexed _beneficiary,
        uint _amount,
        address _token
    );

    event LogNFTRepayment(
        bytes32 indexed _agreementId,
        address indexed _payer,
        address indexed _beneficiary,
        uint _tokenId,
        address _token
    );

    event LogError(uint8 indexed _errorId, bytes32 indexed _agreementId);

    function RepaymentRouter (address _debtRegistry) public {
        debtRegistry = DebtRegistry(_debtRegistry);
    }

    function repay(
        bytes32 agreementId,
        uint256 amount,
        address tokenAddress
    )
        public
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
            ERC20(tokenAddress).allowance(msg.sender, this) < amount) {
            LogError(uint8(Errors.PAYER_BALANCE_OR_ALLOWANCE_INSUFFICIENT), agreementId);
            return 0;
        }

        // Transfer amount to creditor
        require(ERC20(tokenAddress).transferFrom(msg.sender, beneficiary, amount));

        // Notify terms contract
        var (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);
        TermsContract(termsContract).registerRepayment(
            msg.sender,
            beneficiary,
            termsContractParameters,
            amount,
            tokenAddress
        );

        // Log event for repayment
        LogRepayment(agreementId, msg.sender, beneficiary, amount, tokenAddress);

        return amount;
    }

    function repayNFT(
        bytes32 agreementId,
        uint tokenId,
        address tokenAddress
    )
        public
        returns (uint _tokenId)
    {
        require(tokenAddress != address(0));

        // Get registry entry and check if entry is valid
        address beneficiary = debtRegistry.getBeneficiary(agreementId);
        if (beneficiary == address(0)) {
            LogError(uint8(Errors.DEBT_AGREEMENT_NONEXISTENT), agreementId);
            return 0;
        }

        ERC721 nonFungibleToken = ERC721(tokenAddress);
        require(nonFungibleToken.implementsERC721());

        // Check payer owns token and has granted router approval to transfer it
        if (nonFungibleToken.ownerOf(tokenId) != msg.sender ||
            nonFungibleToken.getApproved(tokenId) != address(this)) {
            LogError(uint8(Errors.PAYER_OWNERSHIP_OR_ROUTER_APPROVAL_MISSING), agreementId);
            return 0;
        }

        nonFungibleToken.transferFrom(msg.sender, beneficiary, tokenId);

        // Notify terms contract
        var (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);
        TermsContract(termsContract).registerNFTRepayment(
            msg.sender,
            beneficiary,
            termsContractParameters,
            tokenId,
            tokenAddress
        );

        // Log event for repayment
        LogNFTRepayment(agreementId, msg.sender, beneficiary, tokenId, tokenAddress);

        return tokenId;
    }
}
