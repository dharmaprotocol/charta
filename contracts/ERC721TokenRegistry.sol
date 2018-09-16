pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


/**
 * The ERC721TokenRegistry is a basic registry mapping token symbols
 * to their known, deployed addresses on the current blockchain.
 *
 * Note that the TokenRegistry does *not* mediate any of the
 * core protocol's business logic, but, rather, is a helpful
 * utility for Terms Contracts to use in encoding, decoding, and
 * resolving the addresses of currently deployed tokens.
 *
 * At this point in time, administration of the Token Registry is
 * under Dharma Labs' control.  With more sophisticated decentralized
 * governance mechanisms, we intend to shift ownership of this utility
 * contract to the Dharma community.
 */
contract ERC721TokenRegistry is Ownable {
    mapping (bytes32 => TokenAttributes) public symbolHashToTokenAttributes;
    // Solidity prevents us from declaring a dynamically sized string array (since a string is
    // itself an array, and 2D arrays are not supported), and so here we specify the maximum
    // size of the tokenSymbolList.
    string[4294967295] public tokenSymbolList;
    uint32 public tokenSymbolListLength;

    struct TokenAttributes {
        // The ERC721 contract address.
        address tokenAddress;
        // The index in `tokenSymbolList` where the token's symbol can be found.
        uint tokenIndex;
        // The name of the given token, e.g. "CryptoKitties"
        string name;
    }

    /**
     * Maps the given symbol to the given token attributes.
     */
    function setTokenAttributes(
        string _symbol,
        address _tokenAddress,
        string _tokenName
    )
        public onlyOwner
    {
        bytes32 symbolHash = keccak256(_symbol);

        // Attempt to retrieve the token's attributes from the registry.
        TokenAttributes memory attributes = symbolHashToTokenAttributes[symbolHash];

        if (attributes.tokenAddress == address(0)) {
            // The token has not yet been added to the registry.
            attributes.tokenAddress = _tokenAddress;
            attributes.name = _tokenName;
            attributes.tokenIndex = tokenSymbolListLength;

            tokenSymbolList[tokenSymbolListLength] = _symbol;
            tokenSymbolListLength++;
        } else {
            // The token has already been added to the registry; update attributes.
            attributes.tokenAddress = _tokenAddress;
            attributes.name = _tokenName;
        }

        // Update this contract's storage.
        symbolHashToTokenAttributes[symbolHash] = attributes;
    }

    /**
     * Given a symbol, resolves the current address of the token the symbol is mapped to.
     */
    function getTokenAddressBySymbol(string _symbol) public view returns (address) {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return attributes.tokenAddress;
    }

    /**
     * Given the known index of a token within the registry's symbol list,
     * returns the address of the token mapped to the symbol at that index.
     */
    function getTokenAddressByIndex(uint _index) public view returns (address) {
        string storage symbol = tokenSymbolList[_index];

        return getTokenAddressBySymbol(symbol);
    }

    /**
     * Given a symbol, resolves the index of the token the symbol is mapped to within the registry's
     * symbol list.
     */
    function getTokenIndexBySymbol(string _symbol) public view returns (uint) {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return attributes.tokenIndex;
    }

    /**
     * Given an index, resolves the symbol of the token at that index in the registry's
     * token symbol list.
     */
    function getTokenSymbolByIndex(uint _index) public view returns (string) {
        return tokenSymbolList[_index];
    }

    /**
     * Given a symbol, returns the name of the token the symbol is mapped to within the registry's
     * symbol list.
     */
    function getTokenNameBySymbol(string _symbol) public view returns (string) {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return attributes.name;
    }

    /**
     * Given the index for a token in the registry, returns the name of the token as provided in
     * the associated TokensAttribute struct.
     *
     * Example:
     *   getTokenNameByIndex(1);
     *   => "CryptoKitties"
     */
    function getTokenNameByIndex(uint _index) public view returns (string) {
        string memory symbol = getTokenSymbolByIndex(_index);

        string memory tokenName = getTokenNameBySymbol(symbol);

        return tokenName;
    }

    /**
     * Given the symbol for a token in the registry, returns a tuple containing the token's address,
     * the token's index in the registry, and the token's name.
     *
     * Example:
     *   getTokenAttributesBySymbol("CK");
     *   => ["0x06012c8cf97BEaD5deAe237070F9587f8E7A266d", 1, "CryptoKitties"]
     */
    function getTokenAttributesBySymbol(string _symbol)
        public
        view
        returns (
            address,
            uint,
            string
        )
    {
        bytes32 symbolHash = keccak256(_symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return (
            attributes.tokenAddress,
            attributes.tokenIndex,
            attributes.name
        );
    }

    /**
     * Given the index for a token in the registry, returns a tuple containing the token's address,
     * the token's symbol, and the token's name.
     *
     * Example:
     *   getTokenAttributesByIndex(1);
     *   => ["0x06012c8cf97BEaD5deAe237070F9587f8E7A266d", "CK", "CryptoKitties"]
     */
    function getTokenAttributesByIndex(uint _index)
        public
        view
        returns (
            address,
            string,
            string
        )
    {
        string memory symbol = getTokenSymbolByIndex(_index);

        bytes32 symbolHash = keccak256(symbol);

        TokenAttributes storage attributes = symbolHashToTokenAttributes[symbolHash];

        return (
            attributes.tokenAddress,
            symbol,
            attributes.name
        );
    }
}
