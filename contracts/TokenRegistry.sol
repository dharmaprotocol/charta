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
    mapping (bytes32 => address) public symbolHashToTokenAddress;
    mapping (bytes32 => uint) public symbolHashToTokenIndex;
    string[256] public tokenSymbolList;
    uint8 public tokenSymbolListLength;

    /**
     * Maps the given symbol to the given token address.
     */
    function setTokenAddress(string symbol, address token) public onlyOwner {
        require(tokenSymbolListLength < 256);

        bytes32 symbolHash = keccak256(symbol);

        if (symbolHashToTokenAddress[symbolHash] == address(0)) {
            tokenSymbolList[tokenSymbolListLength] = symbol;
            symbolHashToTokenIndex[symbolHash] = tokenSymbolListLength;
            tokenSymbolListLength++;
        }

        symbolHashToTokenAddress[symbolHash] = token;
    }

    /**
     * Given a symbol, resolves the current address of the token the symbol is mapped to.
     */
    function getTokenAddressBySymbol(string symbol) public view returns (address) {
        return symbolHashToTokenAddress[keccak256(symbol)];
    }

    /**
     * Given the known index of a token within the registry's symbol list,
     * returns the address of the token mapped to the symbol at that index.
     *
     * This is a useful utility for compactly encoding the address of a token into a
     * TermsContractParameters string -- by encoding a token by its index in a
     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.
     */
    function getTokenAddressByIndex(uint index) public view returns (address) {
        string storage symbol = tokenSymbolList[index];

        return symbolHashToTokenAddress[keccak256(symbol)];
    }

    /**
     * Given a symbol, resolves the index of the token the symbol is mapped to within the registry's
     * symbol list.
     */
    function getTokenIndexBySymbol(string symbol) public view returns (uint) {
        return symbolHashToTokenIndex[keccak256(symbol)];
    }

    /**
     * Given an index, resolves the symbol of the token at that index in the registry's
     * token symbol list.
     */
    function getTokenSymbolByIndex(uint index) public view returns (string) {
        return tokenSymbolList[index];
    }
}
