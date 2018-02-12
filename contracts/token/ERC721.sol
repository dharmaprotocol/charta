pragma solidity 0.4.18;

import "../DebtToken.sol";


/**
 * @title NonFungibleToken
 *
 * Generic implementation for both required and optional functionality in
 * the ERC721 standard for non-fungible tokens.
 *
 * Heavily inspired by Decentraland's generic implementation:
 * https://github.com/decentraland/land/blob/master/contracts/BasicNFT.sol
 *
 * Standard Author: dete
 * Implementation Author: Nadav Hollander <nadav at dharma.io>
 */
contract ERC721 {
    string public name;
    string public symbol;

    DebtToken public debtToken;

    function ERC721(address _debtToken)
        public
    {
        debtToken = DebtToken(_debtToken);
    }

    event Transfer(
        address indexed _from,
        address indexed _to,
        uint256 _tokenId
    );

    event Approval(
        address indexed _owner,
        address indexed _approved,
        uint256 _tokenId
    );

    modifier onlyExtantToken(uint _tokenId) {
        require(ownerOf(_tokenId) != address(0));
        _;
    }

    function balanceOf(address _owner)
        public
        view
        returns (uint _balance)
    {
        return debtToken.balanceOf(_owner);
    }

    function ownerOf(uint _tokenId)
        public
        view
        returns (address _owner)
    {
        return debtToken.ownerOf(_tokenId);
    }

    function approve(address _to, uint _tokenId)
        public
        onlyExtantToken(_tokenId)
    {
        require(msg.sender == ownerOf(_tokenId));
        require(msg.sender != _to);

        address approvedOperator = debtToken.tokenIdToApprovedOperator(_tokenId);

        if (approvedOperator != address(0) || _to != address(0)) {
            debtToken.setTokenApproval(_to, _tokenId);
            Approval(msg.sender, _to, _tokenId);
        }
    }

    function transfer(address _to, uint _tokenId)
        public
        onlyExtantToken(_tokenId)
    {
        address tokenOwner = ownerOf(_tokenId);

        require(tokenOwner == msg.sender);
        require(_to != address(0));

        // Clear current token approval
        debtToken.setTokenApproval(address(0), _tokenId);
        // Remove token from owners list of tokens.
        debtToken.removeTokenFromOwnersList(tokenOwner, _tokenId);
        // Set tokens owner to new owner
        debtToken.setTokenOwner(_tokenId, _to);
        // Add token to new owner's list of tokens.
        debtToken.addTokenToOwnersList(_to, _tokenId);

        Approval(msg.sender, 0, _tokenId);
        Transfer(msg.sender, _to, _tokenId);
    }
}
