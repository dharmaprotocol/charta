pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


/**
 * The TokenRegistry is a basic registry mapping token symbols
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
contract TokenRegistry is Ownable {
    mapping (bytes32 => TokenAttributes) public symbolHashToTokenAttributes;
    string[256] public tokenSymbolList;
    uint8 public tokenSymbolListLength;

    struct TokenAttributes {
        // The ERC20 contract address.
        address tokenAddress;
        // The index in `tokenSymbolList` where the token's symbol can be found.
        uint tokenIndex;
        // The number of digits that come after the decimal place when displaying token value.
        uint numDecimals;
    }

    /**
     * Maps the given symbol to the given token attributes.
     */
    function setTokenAttributes(
        string _symbol,
        address _tokenAddress,
        uint _numDecimals
    )
        public onlyOwner
    {
        require(tokenSymbolListLength < 256);

        bytes32 symbolHash = keccak256(_symbol);

        // Attempt to retrieve the token's attributes from the registry.
        TokenAttributes memory attributes = symbolHashToTokenAttributes[symbolHash];

        if (attributes.tokenAddress == address(0)) {
            // The token has not yet been added to the registry.
            attributes.tokenAddress = _tokenAddress;
            attributes.numDecimals = _numDecimals;
            attributes.tokenIndex = tokenSymbolListLength;

            tokenSymbolList[tokenSymbolListLength] = _symbol;
            tokenSymbolListLength++;
        } else {
            // The token has already been added to the registry; update attributes.
            attributes.tokenAddress = _tokenAddress;
            attributes.numDecimals = _numDecimals;
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
     *
     * This is a useful utility for compactly encoding the address of a token into a
     * TermsContractParameters string -- by encoding a token by its index in a
     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.
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
}
