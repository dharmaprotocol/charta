pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "../../examples/Collateralized.sol";


contract DummyCollateralizedContract is Collateralized {
    using SafeMath for uint;

    mapping(bytes32 => uint) internal amountRepaid;
    mapping(bytes32 => uint) internal expectedRepaymentValue;

    function DummyCollateralizedContract(address _debtRegistry) public Collateralized(_debtRegistry) {}

    /* Naive `TermsContract` interface implementation. */

    function registerTermStart(
        bytes32 agreementId,
        address debtor
    ) public returns (bool _success) {
        return true;
    }

    function registerRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint256 unitsOfRepayment,
        address tokenAddress
    ) public returns (bool _success) {
        return false;
    }

    function getExpectedRepaymentValue(
        bytes32 agreementId,
        uint256 timestamp
    ) public view returns (uint256) {
        return expectedRepaymentValue[agreementId];
    }

    function getValueRepaidToDate(
        bytes32 agreementId
    ) public view returns (uint256) {
        return amountRepaid[agreementId];
    }

    /* Dummy functionality used to mock behavior for testing purposes. */

    function setDummyExpectedRepaymentValue(
        bytes32 agreementId,
        uint amount
    ) public {
        expectedRepaymentValue[agreementId] = amount;
    }

    function setDummyValueRepaid(
        bytes32 agreementId,
        uint amount
    ) public {
        amountRepaid[agreementId] = amount;
    }

    function setDummyCollateral(
        bytes32 agreementID,
        address collateralizer,
        address token,
        uint amount,
        uint lockupPeriodEndTimestamp,
        bool withdrawn
    ) public {
        collateralForAgreementID[agreementID] = Collateral({
            collateralizer: collateralizer,
            token: token,
            amount: amount,
            lockupPeriod: lockupPeriodEndTimestamp,
            withdrawn: withdrawn
        });
    }

}
