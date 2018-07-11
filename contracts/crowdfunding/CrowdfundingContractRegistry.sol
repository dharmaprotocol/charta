pragma solidity 0.4.18;

import "./CrowdfundingContract.sol";

contract CrowdfundingContractRegistry {
    address owner;
    address[] crowdfundingContracts;

    function CrowdfundingContractRegistry() {
        owner = msg.sender;
    }

    /**
     * Creates and stores the address of a new CrowdfundingContract
     */
    function createCrowdfundingContract()
        external
    {
        CrowdfundingContract crowdfundingContract = new CrowdfundingContract();
        crowdfundingContracts.push(crowdfundingContract);
    }
}
