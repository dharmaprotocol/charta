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


interface TermsContract {
     /// When called, the registerRepayment function records the debtor's
     ///  repayment, as well as any auxiliary metadata needed by the contract
     ///  to determine ex post facto the value repaid (e.g. current USD
     ///  exchange rate)
     /// @param  payer address. The address of the payer.
     /// @param  beneficiary address. The address of the payment's beneficiary.
     /// @param  parameters bytes32. The parameters corresponding to this terms contract's debt agreement
     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.
     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.
    function registerRepayment(
        address payer,
        address beneficiary,
        bytes32 parameters,
        uint256 unitsOfRepayment,
        address tokenAddress
    ) public;

    /// A variant of the registerRepayment function that records the debtor's
    /// repayment in non-fungible tokens (i.e. ERC721), as well as any auxiliary metadata needed by the contract
    /// to determine ex post facto the value repaid (e.g. current USD
    /// exchange rate)
    /// @param  payer address. The address of the payer.
    /// @param  beneficiary address. The address of the payment's beneficiary.
    /// @param  parameters The parameter string committed to in the debt's issuance
    /// @param  tokenId The tokenId of the NFT transferred in the repayment transaction
    /// @param  tokenAddress The address of the token with which the repayment transaction was executed.
    function registerNFTRepayment(
        address payer,
        address beneficiary,
        bytes32 parameters,
        uint256 tokenId,
        address tokenAddress
    ) public;

     /// Returns the cumulative units-of-value expected to be repaid by any given blockNumber.
     ///  Note this is not a constant function -- this value can vary on basis of any number of
     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).
     /// @param  parameters bytes32. The parameter string committed to in the debt's issuance.
     /// @param  blockNumber uint. The block number for which repayment expectation is being queried.
     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given blockNumber lapses.
    function getExpectedRepaymentValue(
        bytes32 parameters,
        uint256 blockNumber
    ) public view returns (uint256);

     /// Returns the cumulative units-of-value repaid by the point at which a given blockNumber has lapsed.
     /// @param parameters bytes32. The parameter string committed to in the debt's issuance.
     /// @param blockNumber uint. The block number for which repayment value is being queried.
     /// @return uint256 The cumulative units-of-value repaid by the time the given blockNumber lapsed.
    function getValueRepaid(
        bytes32 parameters,
        uint256 blockNumber
    ) public view returns (uint256);
}
