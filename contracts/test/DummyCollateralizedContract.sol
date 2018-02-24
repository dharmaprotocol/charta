pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "../examples/Collateralized.sol";

contract DummyCollateralizedContract is Collateralized {
    using SafeMath for uint;

    function DummyCollateralizedContract(address _debtRegistry) {
        Collateralized(address);
    }

    function registerRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint256 unitsOfRepayment,
        address tokenAddress
    ) public returns (bool _success) {
      return true;
    }

    function getExpectedRepaymentValue(
        bytes32 agreementId,
        uint256 timestamp
    ) public view returns (uint256) {
      return 0;
    }

     function getValueRepaidToDate(
        bytes32 agreementId
    ) public view returns (uint256) {
      return 0;
    }

}
