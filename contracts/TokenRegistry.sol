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
    mapping (bytes32 => address) public symbolToTokenAddress;
    bytes32[256] public tokenSymbolHashList;
    uint8 public tokenSymbolHashListLength;

    /**
     * Maps the given symbol to the given token address.
     */
    function setTokenAddress(string symbol, address token) public onlyOwner {
        require(tokenSymbolHashListLength < 256);

        bytes32 symbolHash = keccak256(symbol);

        if (symbolToTokenAddress[symbolHash] == address(0)) {
            tokenSymbolHashList[tokenSymbolHashListLength] = symbolHash;
            tokenSymbolHashListLength++;
        }

        symbolToTokenAddress[symbolHash] = token;
    }

    /**
     * Given a symbol, resolves the current address of the token the symbol is mapped to.
     */
    function getTokenAddressBySymbol(string symbol) public view returns (address) {
        return symbolToTokenAddress[keccak256(symbol)];
    }

    /**
     * Given the known index of a token within the registry's symbol hash list,
     * returns the address of the token mapped to the symbol at that index.
     *
     * This is a useful utility for compactly encoding the address of a token into a
     * TermsContractParameters string -- by encoding a token by its index in a
     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.
     */
    function getTokenAddressByIndex(uint index) public view returns (address) {
        return symbolToTokenAddress[tokenSymbolHashList[index]];
    }
}
