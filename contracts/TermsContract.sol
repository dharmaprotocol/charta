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


contract TermsContract {
    /**
    * When called, the registerRepayment function records the debtor's
    * repayment, as well as any auxiliary metadata needed by the contract
    * to determine ex post facto the value repaid (e.g. current USD
    * exchange rate)
    * @param  debtor The address of the debtor.
    * @param  termsParameters The parameter string committed to in the debt's issuance
    * @param  unitsOfRepayment The units-of-value repaid in the transaction.
    * @param  tokenAddress The address of the token with which the repayment transaction was executed.
    */
    function registerRepayment(address debtor, string termsParameters, uint unitsOfRepayment, address tokenAddress)
        public;

    /**
    * A variant of the registerRepayment function that records the debtor's
    * repayment in non-fungible tokens (i.e. ERC721), as well as any auxiliary metadata needed by the contract
    * to determine ex post facto the value repaid (e.g. current USD
    * exchange rate)
    * @param  debtor The address of the debtor.
    * @param  termsParameters The parameter string committed to in the debt's issuance
    * @param  tokenId The tokenId of the NFT transferred in the repayment transaction
    * @param  tokenAddress The address of the token with which the repayment transaction was executed.
    */
    function registerNFTRepayment(address debtor, string termsParameters, uint tokenId, address tokenAddress)
        public;

    /**
    * Returns the cumulative units-of-value expected to be repaid by any
    * given blockNumber.  Note this is not a
    * constant function -- this value can vary on basis of any number of
    * conditions (e.g. interest rates can be renegotiated if repayments are
    * delinquent).
    * @param  debtor The address of the debtor.
    * @param  termsParameters  The parameter string committed to
    *   in the debt's issuance.
    * @param  blockNumber  The block number for which repayment
    *   expectation is being queried.
    * @return The cumulative units-of-value expected to be repaid
    *   by the time the given blockNumber lapses.
    */
    function getExpectedRepaymentValue(address debtor, string termsParameters, uint blockNumber)
        public
        returns (uint);

    /**
    * Returns the cumulative units-of-value repaid by the point at which a
    * a given blockNumber has lapsed.
    * @param  debtor The address of the debtor.
    * @param  termsParameters  The parameter string committed to
    *   in the debt's issuance.
    * @param  blockNumber  The block number for which repayment
    *   value is being queried.
    * @return The cumulative units-of-value repaid
    *   by the time the given blockNumber lapsed.
    */
    function getValueRepaid(address debtor, string termsParameters, uint blockNumber)
        public
        returns (uint);
}
