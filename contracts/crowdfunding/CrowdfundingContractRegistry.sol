pragma solidity 0.4.18;

import "./CrowdfundingContract.sol";

contract CrowdfundingContractRegistry {
    function CrowdfundingContractRegistry(
    ) {
        owner = msg.sender;
    }

    /**
     * Creates a new CrowdfundingContract
     */
    function createCrowdfundingContract(
        address _owner,
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol,
        address _repaymentToken,
        bool _transfersEnabled
    )
        external
        returns address crowdfundingContract
    {
        CrowdfundingContract crowdfundingContract =
            new CrowdfundingContract(
                _tokenName,
                _decimalUnits,
                _tokenSymbol,
                _repaymentToken,
                _transfersEnabled
            );

        crowdfundingContract.changeController(_owner);

        return crowdfundingContract;
    }
}
