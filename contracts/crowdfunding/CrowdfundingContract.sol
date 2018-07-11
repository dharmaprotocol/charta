pragma solidity 0.4.18;

import "../ERC165.sol";

// External dependencies.
import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract CrowdfundingContract is ERC721Token, ERC165 {
    uint tokenSupply;
    uint numTokensMinted;
    address repaymentToken; // the token in which repayment to crowdfunding token holders are denominated

    // TODO: take amortization unit, amortization length
    function CrowdfundingContract(address _repaymentToken, uint _tokenSupply)
        public
        ERC721Token("CrowdfundingToken", "CFT")
    {
        repaymentToken = _repaymentToken;
        tokenSupply = _tokenSupply;
        numTokensMinted = 0;
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
     * Mints a new crowdfunding token
     */
    function create(
        address _tokenOwner
    )
        external
        returns (uint tokenId)
    {
        require(numTokensMinted < tokenSupply);

        uint tokenId = numTokensMinted;
        super._mint(_tokenOwner, tokenId);

        numTokensMinted += 1;

        return tokenId;
    }

    /**
     * Support deprecated ERC721 method
     */
    function transfer(address _to, uint _tokenId)
        public
    {
        safeTransferFrom(msg.sender, _to, _tokenId);
    }

    /**
     * Withdraw repayment from the specified token
     */
    function withdrawRepayment(uint _tokenId)
        external
    {
        // TODO: require that the msg sender is the same as the token owner
        /* require(msg.sender == ) */

        address tokenOwner = msg.sender;
        uint repaymentAmount = getRepaymentAmount();

        require(
            ERC20(repaymentToken).transfer(
                tokenOwner,
                repaymentAmount
            )
        );

        // TODO: update the token's repayment history
        // require(updateRepaymentHistory(_tokenId));
    }

    /**
     * Calculate amount available for withdrawal from the specified token
     * by its owner
     */
    function getRepaymentAmount(uint _tokenId)
        private
        returns (uint repaymentAmount)
    {
        // TODO: should we keep this here?
        // TODO: require that the msg sender is the same as the token owner
        /* require(msg.sender == ) */

        // TODO: calculate withdrawal amount
        return 1000;
    }
}
