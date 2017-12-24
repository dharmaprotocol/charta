pragma solidity 0.4.18;


interface TermsContract {
     /// When called, the registerRepayment function records the debtor's
     ///  repayment, as well as any auxiliary metadata needed by the contract
     ///  to determine ex post facto the value repaid (e.g. current USD
     ///  exchange rate)
     /// @param  debtor address. The address of the debtor.
     /// @param  termsParameters string. The parameter string committed to in the debt's issuance
     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.
     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.
    function registerRepayment(
        address debtor,
        string termsParameters,
        uint256 unitsOfRepayment,
        address tokenAddress
    ) public;

    /// A variant of the registerRepayment function that records the debtor's
    /// repayment in non-fungible tokens (i.e. ERC721), as well as any auxiliary metadata needed by the contract
    /// to determine ex post facto the value repaid (e.g. current USD
    /// exchange rate)
    /// @param debtor The address of the debtor.
    /// @param termsParameters The parameter string committed to in the debt's issuance
    /// @param tokenId The tokenId of the NFT transferred in the repayment transaction
    /// @param tokenAddress The address of the token with which the repayment transaction was executed.
    function registerNFTRepayment(
        address debtor,
        string termsParameters,
        uint256 tokenId,
        address tokenAddress
    ) public;

     /// Returns the cumulative units-of-value expected to be repaid by any given blockNumber.
     ///  Note this is not a constant function -- this value can vary on basis of any number of
     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).
     /// @param  debtor address. The address of the debtor.
     /// @param  termsParameters string. The parameter string committed to in the debt's issuance.
     /// @param  blockNumber uint. The block number for which repayment expectation is being queried.
     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given blockNumber lapses.
    function getExpectedRepaymentValue(
        address debtor,
        string termsParameters,
        uint256 blockNumber
    ) public view returns (uint256);

     /// Returns the cumulative units-of-value repaid by the point at which a given blockNumber has lapsed.
     /// @param debtor address. The address of the debtor.
     /// @param termsParameters string. The parameter string committed to in the debt's issuance.
     /// @param blockNumber uint. The block number for which repayment value is being queried.
     /// @return uint256 The cumulative units-of-value repaid by the time the given blockNumber lapsed.
    function getValueRepaid(
        address debtor,
        string termsParameters,
        uint256 blockNumber
    ) public view returns (uint256);
}
