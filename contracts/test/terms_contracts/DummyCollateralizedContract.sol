pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "../../examples/Collateralized.sol";


contract DummyCollateralizedContract is Collateralized {
    using SafeMath for uint;

    mapping(bytes32 => uint) internal amountRepaid;
    mapping(bytes32 => mapping(uint => uint)) internal expectedValueRepaidAtTimestamp;
    uint[] internal repaymentTimestamps;

    function DummyCollateralizedContract(
        address _debtKernel,
        address _debtRegistry,
        address _tokenRegistry
    ) public Collateralized(
        _debtKernel,
        _debtRegistry,
        _tokenRegistry
    ) {}

    /* Naive `TermsContract` interface implementation. */

    function registerTermStart(
        bytes32 agreementId,
        address debtor
    ) public returns (bool _success) {
        return super.registerTermStart(agreementId, debtor);
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
        uint latestDueDateBeforeTimestamp;

        for (uint i = 0; i < repaymentTimestamps.length; i++) {
            uint dueDateTimestamp = repaymentTimestamps[i];

            if (dueDateTimestamp <= timestamp &&
                dueDateTimestamp > latestDueDateBeforeTimestamp) {
                latestDueDateBeforeTimestamp = dueDateTimestamp;
            }
        }

        return expectedValueRepaidAtTimestamp[agreementId][latestDueDateBeforeTimestamp];
    }

    function getValueRepaidToDate(
        bytes32 agreementId
    ) public view returns (uint256) {
        return amountRepaid[agreementId];
    }

    /* Dummy functionality used to mock behavior for testing purposes. */

    function setDummyValueRepaid(
        bytes32 agreementId,
        uint amount
    ) public {
        amountRepaid[agreementId] = amount;
    }

    function mockExpectedRepaymentValue(
        bytes32 agreementId,
        uint timestamp,
        uint amount
    ) public {
        if (expectedValueRepaidAtTimestamp[agreementId][timestamp] == 0) {
            repaymentTimestamps.push(timestamp);
        }

        expectedValueRepaidAtTimestamp[agreementId][timestamp] = amount;
    }

    function setDummyAgreementCollateralizer(
        bytes32 agreementId,
        address collateralizer
    ) public {
        agreementToCollateralizer[agreementId] = collateralizer;
    }
}
