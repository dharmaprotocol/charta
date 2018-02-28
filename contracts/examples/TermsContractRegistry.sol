pragma solidity 0.4.18;


contract TermsContractRegistry {
    mapping (bytes32 => address) public symbolToTermsContractAddress;

    function setSimpleInterestTermsContractAddress(
        address tokenAddress,
        address termsContract
    )
        public
    {
        symbolToTermsContractAddress[keccak256(
            tokenAddress,
            "SimpleInterestTermsContract"
        )] = termsContract;
    }

    function getSimpleInterestTermsContractAddress(
        address tokenAddress
    )
        public
        view
        returns (address)
    {
        return symbolToTermsContractAddress[keccak256(
            tokenAddress,
            "SimpleInterestTermsContract"
        )];
    }

    function setCompoundInterestTermsContractAddress(
        address tokenAddress,
        address termsContract
    )
        public
    {
        symbolToTermsContractAddress[keccak256(
            tokenAddress,
            "CompoundInterestTermsContract"
        )] = termsContract;
    }

    function getCompoundInterestTermsContractAddress(
        address tokenAddress
    )
        public
        view
        returns (address)
    {
        return symbolToTermsContractAddress[keccak256(
            tokenAddress,
            "CompoundInterestTermsContract"
        )];
    }
}
