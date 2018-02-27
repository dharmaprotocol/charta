pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


contract TokenRegistry is Ownable {
    mapping (bytes32 => address) public symbolToTokenAddress;
    string[] public tokenSymbols;

    function setTokenAddress(string symbol, address token) public onlyOwner {
        if (symbolToTokenAddress[keccak256(symbol)] == 0) {
            tokenSymbols.push(symbol);
        }

        symbolToTokenAddress[keccak256(symbol)] = token;
    }

    function getTokenAddress(string symbol) public view returns (address) {
        return symbolToTokenAddress[keccak256(symbol)];
    }

    function getTokenSymbols() public view returns (string[]) {
        return tokenSymbols;
    }

}
