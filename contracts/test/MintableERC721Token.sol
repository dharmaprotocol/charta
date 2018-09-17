pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "../ERC165.sol";

/**
 * This implementation of the ERC721 standard allows us to deploy a test ERC721 contract and mint
 * non-fungible tokens that we can use in a test environment.
 */
contract MintableERC721Token is ERC721Token, ERC165 {
    function MintableERC721Token() public ERC721Token("MintableERC721Token", "MET") {}

    function mint(address _to, uint _tokenId) public {
        _mint(_to, _tokenId);
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
    function transfer(address _to, uint _tokenId) public
    {
        safeTransferFrom(msg.sender, _to, _tokenId);
    }
}
