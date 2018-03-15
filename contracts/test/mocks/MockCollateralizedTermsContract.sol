pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

import "../../examples/Collateralized.sol";


contract MockCollateralizedTermsContract is Collateralized {
    using SafeMath for uint;

    // Maps from agreementId's to the amount repaid to date
    mapping (bytes32 => uint) internal amountRepaid;
    // Maps from agreementId's to a mapping of timestamps to the expected
    // value repaid at said timestamp
    mapping (bytes32 => mapping (uint => uint)) internal expectedValueRepaidAtTimestamp;
    // Maps from agreementId's to a list of timestamps at which
    // repayments are expected (used primarily for resetting our mocks)
    mapping (bytes32 => uint[5]) internal expectedRepaymentSchedule;
    // Maps from agreementId's to the number of repayment dates
    // expected for that agreement
    mapping (bytes32 => uint) internal numRepaymentTimestamps;
    // Maps from agreementId's to the mocked term end timestamp
    mapping (bytes32 => uint) internal termEndTimestamp;

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

        // Iterate over each mocked repayment timestamp associated with the
        // agreement ID and find the LATEST timestamp that is BEFORE
        // the timestamp specified in the functiom arguments
        for (uint i = 0; i < 5; i++) {
            uint dueDateTimestamp = expectedRepaymentSchedule[agreementId][i];

            if (dueDateTimestamp <= timestamp &&
                dueDateTimestamp > latestDueDateBeforeTimestamp) {
                latestDueDateBeforeTimestamp = dueDateTimestamp;
            }
        }

        // Return the expected value repaid at said timestamp
        return expectedValueRepaidAtTimestamp[agreementId][latestDueDateBeforeTimestamp];
    }

    function getTermEndTimestamp(
        bytes32 agreementId
    ) public view returns (uint256) {
        return termEndTimestamp[agreementId];
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
        // If timestamp is not mocked already, append it to list of repayment timestamps
        // associated with agreementId
        if (expectedValueRepaidAtTimestamp[agreementId][timestamp] == 0) {
            uint numRepaymentTimestampsForAgreement = numRepaymentTimestamps[agreementId];
            expectedRepaymentSchedule[agreementId][numRepaymentTimestampsForAgreement] = timestamp;
            numRepaymentTimestamps[agreementId]++;
        }

        expectedValueRepaidAtTimestamp[agreementId][timestamp] = amount;
    }

    function mockTermEndTimestamp(
        bytes32 agreementId,
        uint timestamp
    ) public {
        termEndTimestamp[agreementId] = timestamp;
    }

    function mockDummyAgreementCollateralizer(
        bytes32 agreementId,
        address collateralizer
    ) public {
        agreementToCollateralizer[agreementId] = collateralizer;
    }

    function reset(bytes32 agreementId) public {
        for (uint i = 0; i < 5; i++) {
            expectedRepaymentSchedule[agreementId][i] = 0;
        }

        numRepaymentTimestamps[agreementId] = 0;
    }
}
