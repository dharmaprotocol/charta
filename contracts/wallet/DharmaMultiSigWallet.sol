/*

  Copyright 2018 Dharma Labs Inc.

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

import "./MultiSigWallet.sol";


contract DharmaMultiSigWallet is MultiSigWallet {

    event ConfirmationTimeSet(uint indexed transactionId, uint confirmationTime);
    event TimeLockChange(uint timelockInSeconds);

    uint public timelockInSeconds;

    mapping (uint => uint) public transactionConfirmedBlockTimestamp;

    modifier sufficientlyConfirmed(uint transactionId) {
        require(isConfirmed(transactionId));
        _;
    }

    modifier insufficientlyConfirmed(uint transactionId) {
        require(!isConfirmed(transactionId));
        _;
    }

    modifier pastTimeLock(uint transactionId) {
        require(block.timestamp >= transactionConfirmedBlockTimestamp[transactionId] + timelockInSeconds);
        _;
    }

    modifier validPauseTransaction(uint transactionId) {
        Transaction storage txn = transactions[transactionId];

        require(_isPauseFunctionTransaction(txn.data));
        _;
    }

    function DharmaMultiSigWallet(
        address[] _owners,
        uint _required,
        uint _timelockInSeconds
    )
        public
        MultiSigWallet(_owners, _required)
    {
        timelockInSeconds = _timelockInSeconds;
    }

    ////////////////////////
    // EXTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Changes the duration of the time lock for transactions.  Can only be called by the wallet.
     */
    function changeTimeLock(uint _timelockInSeconds)
        public
        onlyWallet
    {
        timelockInSeconds = _timelockInSeconds;
        TimeLockChange(_timelockInSeconds);
    }

    /**
     * Allows an owner to confirm a transaction if the transaction has
     * not yet received a sufficient threshold of confirmations.
     */
    function confirmTransaction(uint transactionId)
        public
        ownerExists(msg.sender)
        transactionExists(transactionId)
        notConfirmed(transactionId, msg.sender)
        insufficientlyConfirmed(transactionId)
    {
        confirmations[transactionId][msg.sender] = true;
        Confirmation(msg.sender, transactionId);

        // If the transaction is now sufficiently confirmed, we record
        // the timestamp in order to kick off the timelock period
        if (isConfirmed(transactionId)) {
            _setConfirmationTime(transactionId, block.timestamp);
        }
    }

    /**
     * Allows an owner to revoke a confirmation they've submitted
     * previously for the transaction if the transaction has not
     * already been sufficiently confirmed (and entered the timelock
     * period).
     */
    function revokeConfirmation(uint transactionId)
        public
        ownerExists(msg.sender)
        confirmed(transactionId, msg.sender)
        notExecuted(transactionId)
        insufficientlyConfirmed(transactionId)
    {
        confirmations[transactionId][msg.sender] = false;
        Revocation(msg.sender, transactionId);
    }

    /**
     * Allows anyone to execute a transaction if it has been
     * confirmed and the timelock has passed.
     */
    function executeTransaction(uint transactionId)
        public
        notExecuted(transactionId)
        sufficientlyConfirmed(transactionId)
        pastTimeLock(transactionId)
    {
        _executeTransaction(transactionId);
    }

    /**
     * In case of an emergency, allows anyone to execute a transaction if it has
     * been confirmed and matches the "pause" function signature WITHOUT waiting
     * for the timelock to pass.
     */
    function executePauseTransactionImmediately(uint transactionId)
        public
        notExecuted(transactionId)
        sufficientlyConfirmed(transactionId)
        validPauseTransaction(transactionId)
    {
        _executeTransaction(transactionId);
    }

    ////////////////////////
    // INTERNAL FUNCTIONS //
    ////////////////////////

    /**
     * Internal helper function that attempts to execute a confirmed transaction.
     */
    function _executeTransaction(uint transactionId)
        internal
    {
        Transaction storage txn = transactions[transactionId];
        txn.executed = true;
        if (txn.destination.call.value(txn.value)(txn.data))
            Execution(transactionId);
        else {
            ExecutionFailure(transactionId);
            txn.executed = false;
        }
    }

    /**
     * Internal function that records the time at which
     * a transaction reached the minimal threshold of
     * confirmations.
     */
    function _setConfirmationTime(uint transactionId, uint confirmationTime)
        internal
    {
        transactionConfirmedBlockTimestamp[transactionId] = confirmationTime;
        ConfirmationTimeSet(transactionId, confirmationTime);
    }

    /**
     * Returns true if the first four bytes of the given data matches
     * the function selector Method ID for the "pause" method --
     * for more information, see the Ethereum wiki's contract ABI specification:
     * https://github.com/ethereum/wiki/wiki/Ethereum-Contract-ABI
     */
    function _isPauseFunctionTransaction(bytes data)
        internal
        view
        returns (bool)
    {
        bytes4 pauseFunctionSignature = bytes4(keccak256("pause()"));
        for (uint i = 0; i < 4; i++) {
            if (data[i] != pauseFunctionSignature[i]) {
                return false;
            }
        }

        return true;
    }
}
