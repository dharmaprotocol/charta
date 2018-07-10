pragma solidity 0.4.18;

contract CrowdfundingContract {
    address owner;

    function CrowdfundingContract() {
        owner = msg.sender;
    }
}
