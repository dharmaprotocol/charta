pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


contract TokenRegistry is Ownable {
    mapping (bytes32 => address) public symbolToTokenAddress;

    function setTokenAddress(string symbol, address token) public onlyOwner {
        symbolToTokenAddress[keccak256(symbol)] = token;
    }

    function getTokenAddress(string symbol) public view returns (address) {
        return symbolToTokenAddress[keccak256(symbol)];
    }
}
