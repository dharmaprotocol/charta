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

    event LogRepayment(
        bytes32 indexed entryHash,
        address indexed from,
        address indexed creditor,
        uint amount,
        address token
    );

    event LogNFTRepayment(
        bytes32 indexed entryHash,
        address indexed from,
        address indexed creditor,
        uint tokenId,
        address token
    );

    function RepaymentRouter (address _debtRegistry) public {
        debtRegistry = DebtRegistry(_debtRegistry);
    }

    function repay(bytes32 entryHash, string termsContractParameters, uint256 amount, address token) public {
        require(token != address(0));
        require(amount > 0);

        // Get registry entry and check if entry is valid
        // solhint-disable-next-line space-after-comma
        var (, creditor, , , termsContract,) = debtRegistry.get(entryHash);
        require(creditor != address(0));

        // Transfer amount to creditor
        ERC20 tokenInstance = ERC20(token);
        require(tokenInstance.transferFrom(msg.sender, creditor, amount));

        // Notify to terms contract
        TermsContract termsContractInstance = TermsContract(termsContract);
        termsContractInstance.registerRepayment(msg.sender, termsContractParameters, amount, token);

        // Log event for repayment
        LogRepayment(entryHash, msg.sender, creditor, amount, token);
    }

    function repayNFT(bytes32 entryHash, string termsContractParameters, uint256 tokenId, address token) public {
        require(token != address(0));

        // Get registry entry and check if entry is valid
        // solhint-disable-next-line space-after-comma
        var (, creditor, , , termsContract,) = debtRegistry.get(entryHash);
        require(creditor != address(0));

        // Transfer NFT to creditor
        ERC721 tokenInstance = ERC721(token);
        require(tokenInstance.implementsERC721());
        tokenInstance.transferFrom(msg.sender, creditor, tokenId);

        // Notify to terms contract
        TermsContract termsContractInstance = TermsContract(termsContract);
        termsContractInstance.registerNFTRepayment(msg.sender, termsContractParameters, tokenId, token);

        // Log event for repayment
        LogNFTRepayment(entryHash, msg.sender, creditor, tokenId, token);
    }
}
