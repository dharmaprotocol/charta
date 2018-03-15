pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "../../examples/Collateralized.sol";


contract MockCollateralizedTermsContract is Collateralized {
    using SafeMath for uint;

    mapping (bytes32 => uint) internal amountRepaid;
    mapping (bytes32 => mapping (uint => uint)) internal expectedValueRepaidAtTimestamp;
    mapping (bytes32 => uint[5]) internal repaymentTimestamps;
    mapping (bytes32 => uint) internal numRepaymentTimestamps;
    mapping (bytes32 => uint) internal termEndTimestamps;

    function MockCollateralizedTermsContract(
        address _debtKernel,
        address _debtRegistry,
        address _tokenRegistry
    ) public Collateralized(
        _debtKernel,
        _debtRegistry,
        _tokenRegistry
    ) {}

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

        for (uint i = 0; i < 5; i++) {
            uint dueDateTimestamp = repaymentTimestamps[agreementId][i];

            if (dueDateTimestamp <= timestamp &&
                dueDateTimestamp > latestDueDateBeforeTimestamp) {
                latestDueDateBeforeTimestamp = dueDateTimestamp;
            }
        }

        return expectedValueRepaidAtTimestamp[agreementId][latestDueDateBeforeTimestamp];
    }

    function getTermEndTimestamp(
        bytes32 agreementId
    ) public view returns (uint256) {
        return termEndTimestamps[agreementId];
    }

    function getValueRepaidToDate(
        bytes32 agreementId
    ) public view returns (uint256) {
        return amountRepaid[agreementId];
    }

    /* Dummy functionality used to mock behavior for testing purposes. */

    function mockDummyValueRepaid(
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
            uint numRepaymentTimestampsForAgreement = numRepaymentTimestamps[agreementId];
            repaymentTimestamps[agreementId][numRepaymentTimestampsForAgreement] = timestamp;
            numRepaymentTimestamps[agreementId]++;
        }

        expectedValueRepaidAtTimestamp[agreementId][timestamp] = amount;
    }

    function mockTermEndTimestamp(
        bytes32 agreementId,
        uint timestamp
    ) public {
        termEndTimestamps[agreementId] = timestamp;
    }

    function mockDummyAgreementCollateralizer(
        bytes32 agreementId,
        address collateralizer
    ) public {
        agreementToCollateralizer[agreementId] = collateralizer;
    }

    function reset(bytes32 agreementId) public {
        for (uint i = 0; i < 5; i++) {
            repaymentTimestamps[agreementId][i] = 0;
        }

        numRepaymentTimestamps[agreementId] = 0;
    }
}
