pragma solidity 0.4.18;

import "../ERC165.sol";

// External dependencies.
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract CrowdfundingContract is ERC721Token, ERC165 {
    using SafeMath for uint;

    uint tokenSupply;
    uint numTokensMinted;
    address repaymentToken; // the token in which repayment to crowdfunding token holders are denominated
    mapping (uint => uint) tokenIdToTotalWithdrawnAmount; // keeps track of how much has been withdrawn for each token

    // the underlying Dharma Debt Token
    address debtToken;
    bytes32 agreementId;
    address debtRegistry;

    function CrowdfundingContract(address _repaymentToken, uint _tokenSupply, address _owner)
        public
        ERC721Token("CrowdfundingToken", "CFT")
    {
        repaymentToken = _repaymentToken;
        tokenSupply = _tokenSupply;
        owner = _owner;

        numTokensMinted = 0;
    }

    /**
     * Registers the debt token to be used by this contract
     */
    function registerDebtToken(
        address _debtToken,
        bytes32 _agreementId,
        address _debtRegistry
    )
        external
    {
        require(msg.sender == owner);

        debtToken = _debtToken;
        agreementId = _agreementId;
        debtRegistry = _debtRegistry;
    }

    /**
     * Mints a new crowdfunding token
     */
    function create(
        address _tokenOwner
    )
        external
        returns (uint tokenId)
    {
        require(msg.sender == owner);

        require(numTokensMinted < tokenSupply);

        uint tokenId = numTokensMinted;
        super._mint(_tokenOwner, tokenId);

        numTokensMinted += 1;

        return tokenId;
    }

    /**
     * Withdraw repayment for the message sender
     */
    function withdrawRepayment()
        external
    {
        uint[] tokens = ownedTokens[msg.sender];

        // require that the message sender holds at least one token
        require(tokens.length > 0);

        // calculate the total amount available for withdrawal for the message sender
        uint totalAvailableAmount;
        mapping (uint => uint) tokenIdToAvailableAmount;

        (totalAvailableAmount, tokenIdToAvailableAmount) = getAvailableAmounts(tokens);

        if (totalAvailableAmount == 0) {
            return;
        }

        // ensure contract has enough balance to make repayment transfer
        require(ERC20(repaymentToken).balanceOf(this) >= totalAvailableAmount);

        // transfer the total available amount to the message sender
        if (
            ERC20(repaymentToken).transfer(
                msg.sender,
                totalAvailableAmount
            )
        ) {
            updateWithdrawnAmounts(tokenIdToAvailableAmount);
        }
    }

    function getAvailableAmounts(
        uint[] tokens
    )
        private
        return (uint totalAvailableAmount, mapping (uint => uint) tokenIdToAvailableAmount)
    {
        uint totalAvailableAmount = 0;
        mapping (uint => uint) tokenIdToAvailableAmount;

        // calculate the available amount for each token while maintaining a sum of those amounts
        for (uint i = 0; i < tokens.length; i++) {
            uint token = tokens[i];
            uint availableAmountForToken = getAvailableAmountForToken(token);

            totalAvailableAmount += availableAmountForToken;
            tokenIdToAvailableAmount[token] = availableAmountForToken;
        }

        return (totalAvailableAmount, tokenIdToAvailableAmount);
    }

    /**
     * Calculate amount available for withdrawal for the specified token
     */
    function getAvailableAmountForToken(
        uint tokenId
    )
        private
        returns (uint availableAmount)
    {
        uint withdrawnAmount = tokenIdToTotalWithdrawnAmount[tokenId];

        uint allocatedAmount = termsContract.getValueRepaidToDate(agreementId).div(numTokensMinted);

        uint availableAmount = allocatedAmount.sub(withdrawnAmount);

        return availableAmount;
    }

    /**
     * Updates the withdrawn amount for all tokens owned by the message sender
     */
    function updateWithdrawnAmounts(
        mapping (uint => uint) tokenIdToWithdrawnAmount
    )
        private
    {
        uint[] tokens = ownedTokens[msg.sender];

        for (uint i = 0; i < tokens.length; i++) {
            uint token = tokens[i];
            tokenIdToTotalWithdrawnAmount[token] += tokenIdToWithdrawnAmount[token];
        }
    }

    /**
     * ERC165 interface.
     * Returns true for ERC721, false otherwise
     */
    function supportsInterface(bytes4 interfaceID)
        external
        view
        returns (bool _isSupported)
    {
        return interfaceID == 0x80ac58cd; // ERC721
    }

    /**
     * Support deprecated ERC721 method
     */
    function transfer(address _to, uint _tokenId)
        public
    {
        safeTransferFrom(msg.sender, _to, _tokenId);
    }
}
