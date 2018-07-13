pragma solidity 0.4.18;

import "./CrowdfundingContract.sol";

contract CrowdfundingContractRegistry {
    function CrowdfundingContractRegistry() {
        owner = msg.sender;
    }

    /**
     * Creates and stores the address of a new CrowdfundingContract
     */
    function createCrowdfundingContract(address _repaymentToken, uint _tokenSupply, address _owner)
        external
        returns address crowdfundingContract
    {
        CrowdfundingContract crowdfundingContract = new CrowdfundingContract(_repaymentToken, _tokenSupply, _owner);

        return crowdfundingContract;
    }
}
