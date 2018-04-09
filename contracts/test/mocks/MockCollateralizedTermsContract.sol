/*

  Copyright 2017 Dharma Labs Inc.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.

*/

pragma solidity 0.4.18;

import "./MockContract.sol";
import "../../Collateralizer.sol";


contract MockCollateralizedTermsContract is MockContract {
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

    function registerRepayment(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint unitsOfRepayment,
        address tokenAddress
    )
        public
        returns (bool _success)
    {
        functionCalledWithArgs("registerRepayment", keccak256(
                agreementId,
                payer,
                beneficiary,
                unitsOfRepayment,
                tokenAddress
            ));

        return getMockReturnValue("registerRepayment", DEFAULT_SIGNATURE_ARGS) == bytes32(1);
    }

    function getExpectedRepaymentValue(
        bytes32 agreementId,
        uint256 timestamp
    )
        public
        view
        returns (uint256)
    {
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

    function getValueRepaidToDate(bytes32 agreementId)
        public
        view
        returns (uint256)
    {
        return amountRepaid[agreementId];
    }

    function mockRegisterRepaymentReturnValue(bool success)
        public
    {
        mockReturnValue("registerRepayment", DEFAULT_SIGNATURE_ARGS, success ? bytes32(1) : bytes32(0));
    }

    function wasRegisterRepaymentCalledWith(
        bytes32 agreementId,
        address payer,
        address beneficiary,
        uint unitsOfRepayment,
        address tokenAddress
    )
        public
        view
        returns (bool wasCalled)
    {
        return wasFunctionCalledWithArgs("registerRepayment", keccak256(
                agreementId,
                payer,
                beneficiary,
                unitsOfRepayment,
                tokenAddress
            ));
    }

    function registerTermStart(
        bytes32 agreementId,
        address debtor
    )
        public
        returns (bool _registered)
    {
        functionCalledWithArgs("registerTermStart", keccak256(agreementId, debtor));

        return getMockReturnValue(
            "registerTermStart",
            keccak256(agreementId, debtor)
        ) == bytes32(1);
    }

    function getTermEndTimestamp(bytes32 agreementId)
        public
        view
        returns (uint256)
    {
        return termEndTimestamp[agreementId];
    }

    function wasRegisterTermStartCalledWith(
        bytes32 agreementId,
        address debtor
    )
        public
        view
        returns (bool _wasCalled)
    {
        return wasFunctionCalledWithArgs("registerTermStart", keccak256(agreementId, debtor));
    }

    /* Dummy functionality used to mock behavior for testing purposes. */

    function mockTermEndTimestamp(
        bytes32 agreementId,
        uint timestamp
    )
        public
    {
        termEndTimestamp[agreementId] = timestamp;
    }

    function mockDummyValueRepaid(
        bytes32 agreementId,
        uint amount
    )
        public
    {
        amountRepaid[agreementId] = amount;
    }

    function mockExpectedRepaymentValue(
        bytes32 agreementId,
        uint timestamp,
        uint amount
    )
        public
    {
        // If timestamp is not mocked already, append it to list of repayment timestamps
        // associated with agreementId
        if (expectedValueRepaidAtTimestamp[agreementId][timestamp] == 0) {
            uint numRepaymentTimestampsForAgreement = numRepaymentTimestamps[agreementId];
            expectedRepaymentSchedule[agreementId][numRepaymentTimestampsForAgreement] = timestamp;
            numRepaymentTimestamps[agreementId]++;
        }

        expectedValueRepaidAtTimestamp[agreementId][timestamp] = amount;
    }

    function reset(bytes32 agreementId) public {
        for (uint i = 0; i < 5; i++) {
            expectedRepaymentSchedule[agreementId][i] = 0;
        }

        numRepaymentTimestamps[agreementId] = 0;
    }

    function mockCallCollateralize(
        address _collateralizer,
        bytes32 _agreementId,
        address _debtor
    )
        public
    {
        Collateralizer collateralizer = Collateralizer(_collateralizer);

        collateralizer.collateralize(
            _agreementId,
            _debtor
        );
    }

    function getFunctionList()
        internal
        returns (string[10] functionNames)
    {
        return ["registerRepayment", "registerTermStart", "", "", "", "", "", "", "", ""];
    }
}
