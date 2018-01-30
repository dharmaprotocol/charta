pragma solidity 0.4.18;


contract DummyTokenRegistry {
    mapping (bytes32 => address) public symbolToTokenAddress;

    function setTokenAddress(string symbol, address token) public {
        symbolToTokenAddress[keccak256(symbol)] = token;
    }

    function getTokenAddress(string symbol) public view returns (address) {
        return symbolToTokenAddress[keccak256(symbol)];
    }
}
