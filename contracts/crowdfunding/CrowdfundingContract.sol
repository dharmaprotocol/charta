pragma solidity 0.4.18;

// External dependencies.
import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";

pragma solidity ^0.4.18;

import "./Controlled.sol";

contract ApproveAndCallFallBack {
    function receiveApproval(address from, uint256 _amount, address _token, bytes _data) public;
}

/// Much structure taken from Giveth's MiniMeToken: https://github.com/Giveth/minime
contract CrowdfundingContract is Controlled {
    using SafeMath for uint;

    /// @dev `Checkpoint` is the structure that attaches a block number to a
    ///  given value, the block number attached is the one that last changed the
    ///  value
    struct  Checkpoint {

        // `fromBlock` is the block number that the value was generated from
        uint128 fromBlock;

        // `value` is the amount of tokens at a specific block number
        uint128 value;
    }

    string public name;                //The Token's name: e.g. DigixDAO Tokens
    uint8 public decimals;             //Number of decimals of the smallest unit
    string public symbol;              //An identifier: e.g. REP

    // the underlying Dharma Debt Token
    address debtToken;
    bytes32 agreementId;
    address debtRegistry;

    // the token in which repayment to crowdfunding token holders are denominated
    address repaymentToken;

    Checkpoint[] withdrawalAllowances;

    // keeps track of how much has been withdrawn from each address
    mapping (address => Checkpoint[]) withdrawals;

    // `creationBlock` is the block number that the Clone Token was created
    uint public creationBlock;

    // `balances` is the map that tracks the balance of each address, in this
    //  contract when the balance changes the block number that the change
    //  occurred is also included in the map
    mapping (address => Checkpoint[]) balances;

    // `allowed` tracks any extra transfer rights as in all ERC20 tokens
    mapping (address => mapping (address => uint256)) allowed;

    // Tracks the history of the `totalSupply` of the token
    Checkpoint[] totalSupplyHistory;

    // Flag that determines if the token is transferable or not.
    bool public transfersEnabled;

////////////////
// Constructor
////////////////

    /// @notice Constructor to create a CrowdfundingContract
    /// @param _tokenName Name of the new token
    /// @param _decimalUnits Number of decimals of the new token
    /// @param _tokenSymbol Token Symbol for the new token
    /// @param _transfersEnabled If true, tokens will be able to be transferred
    function CrowdfundingContract(
        string _tokenName,
        uint8 _decimalUnits,
        string _tokenSymbol,
        address _repaymentToken,
        bool _transfersEnabled
    ) public {
        name = _tokenName;
        decimals = _decimalUnits;
        symbol = _tokenSymbol;
        repaymentToken = _repaymentToken;
        transfersEnabled = _transfersEnabled;

        creationBlock = block.number;
        totalWithdrawalAllowancePerToken = 0;
    }

///////////////////
// CrowdfundingContract Methods
///////////////////

    /**
     * Registers the debt token to be used by this contract
     */
    function registerDebtToken(
        address _debtToken,
        bytes32 _agreementId,
        address _debtRegistry
    )
        external
        onlyController
    {
        debtToken = _debtToken;
        agreementId = _agreementId;
        debtRegistry = _debtRegistry;
    }

    /**
     * Registers a repayment amount and block
     */
    function registerRepayment(
        uint _repaymentAmount
    )
        external
        onlyController
    {
        uint withdrawalAllowancePerToken = _repaymentAmount.div(totalSupply());
        updateValueAtNow(withdrawalAllowances, withdrawalAllowancePerToken);
    }

    /**
     * Withdraw the available withdrawal allowance for the repayments beginning and ending at the
     * given indicies, inclusive.
     */
    function withdraw(
        uint start,
        uint end
    )
        external
    {
        // require that the message sender holds at least one token
        require(balanceOf(msg.sender) > 0);

        // calculate the total amount available for withdrawal for the message sender, beginning and ending
        // at the given repayment indicies
        uint withdrawalAmount = getCurrentWithdrawalAllowance(msg.sender, start, end);

        // require that the message sender has a positive withdrawal allowance
        require(withdrawalAmount > 0);

        // ensure contract has enough balance to make repayment transfer
        require(ERC20(repaymentToken).balanceOf(this) >= withdrawalAmount);

        // transfer the total available amount to the message sender
        if (
            ERC20(repaymentToken).transfer(
                msg.sender,
                withdrawalAmount
            )
        ) {
            updateValueAtNow(withdrawals[msg.sender], withdrawalAmount);
        }
    }

    /**
     * Returns the number of repayments made so far
     */
    function getNumberOfRepaymentsMade(
    )
        public
        returns (uint numberOfRepaymentsMade)
    {
        return withdrawalAllowances.length;
    }

    /**
     * Returns the withdrawal allowance of the given account, as accrued between the start and end repayment
     * indicies, inclusive.
     */
    function getCurrentWithdrawalAllowance(
        address account,
        uint start,
        uint end
        public
        returns (uint withdrawalAllowance)
    ) {
        // make sure the start and end indices are valid
        require(start >= 0);

        require(end < withdrawalAllowances.length);

        // calculate total allowance accrued by the account within the period in question
        uint totalWithdrawalAllowance = getTotalWithdrawalAllowance(account, start, end);

        // calculate the total withdrawals within the period in question
        uint totalWithdrawals = getTotalWithdrawals(account, start, end);

        // return the difference of the total allowance and total withdrawals
        uint withdrawalAllowance = totalWithdrawalAllowance - totalWithdrawals;
    }

    /**
     * Returns the total withdrawal allowance of the given account, as accrued between the start and end repayment
     * indicies, inclusive.
     */
    function getTotalWithdrawalAllowance(
        address account,
        uint start,
        uint end
        public
        returns (uint totalWithdrawalAllowance)
    ) {
        uint totalWithdrawalAllowance = 0;

        for (uint i=start; i++; i <= end) {
            uint allowanceCheckpoint = withdrawalAllowances[i];

            uint allowance = allowanceCheckpoint.value;
            uint blockNumber = allowanceCheckpoint.fromBlock;

            uint balanceAtBlockNumber = balanceOfAt(account, blockNumber);
            totalWithdrawalAllowance += allowance.mul(balanceAtRepaymentBlock);
        }

        return totalWithdrawalAllowance
    }

    /**
     * Returns the total withdrawals of the given account, as made against the start and end repayment
     * indicies, inclusive.
     */
    function getTotalWithdrawals(
        address account,
        uint start,
        uint end
        public
        returns (uint totalWithdrawals)
    ) {
        uint startBlockNumber = withdrawalAllowances[start].fromBlock;

        // we must consider all withdrawals made up to and including the block of the next repayment,
        // or the current block, if end is the last repayment
        uint endBlockNumber = end + 1 < withdrawalAllowances.length ?
            withdrawalAllowances[end + 1].fromBlock : block.number;

        Checkpoint memory accountWithdrawals = withdrawals[account];

        // find the earliest withdrawal at block greater than startBlockNumber
        uint min = 0;
        uint max = accountWithdrawals.length - 1;
        while (max > min) {
            uint mid = (max + min) / 2;

            if (checkpoints[mid].fromBlock <= startBlockNumber) {
                min = mid + 1;
            } else {
                max = mid;
            }
        }

        uint withdrawalIndex = min;

        uint totalWithdrawals = 0;

        // add subsequent withdrawals up to and including the endBlockNumber
        for (uint i=withdrawalIndex; i++; i < accountWithdrawals.length) {
            uint currentBlockNumber = accountWithdrawals[i].fromBlock;

            if (currentBlockNumber >  endBlockNumber) {
                break;
            }

            totalWithdrawals += accountWithdrawals[i].value;
        }

        // return the sum
        return totalWithdrawals;
    }

///////////////////
// ERC20 Methods
///////////////////

    /// @notice Send `_amount` tokens to `_to` from `msg.sender`
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function transfer(address _to, uint256 _amount) public returns (bool success) {
        require(transfersEnabled);
        return doTransfer(msg.sender, _to, _amount);
    }

    /// @notice Send `_amount` tokens to `_to` from `_from` on the condition it
    ///  is approved by `_from`
    /// @param _from The address holding the tokens being transferred
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return True if the transfer was successful
    function transferFrom(address _from, address _to, uint256 _amount
    ) public returns (bool success) {

        // The controller of this contract can move tokens around at will,
        //  this is important to recognize! Confirm that you trust the
        //  controller of this contract, which in most situations should be
        //  another open source smart contract or 0x0
        if (msg.sender != controller) {
            require(transfersEnabled);

            // The standard ERC 20 transferFrom functionality
            if (allowed[_from][msg.sender] < _amount) return false;
            allowed[_from][msg.sender] -= _amount;
        }
        return doTransfer(_from, _to, _amount);
    }

    /// @dev This is the actual transfer function in the token contract, it can
    ///  only be called by other functions in this contract.
    /// @param _from The address holding the tokens being transferred
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return True if the transfer was successful
    function doTransfer(address _from, address _to, uint _amount
    ) internal returns(bool) {

           if (_amount == 0) {
               return true;
           }

           // Do not allow transfer to 0x0 or the token contract itself
           require((_to != 0) && (_to != address(this)));

           // If the amount being transfered is more than the balance of the
           //  account the transfer returns false
           var previousBalanceFrom = balanceOfAt(_from, block.number);
           if (previousBalanceFrom < _amount) {
               return false;
           }

           // First update the balance array with the new value for the address
           //  sending the tokens
           updateValueAtNow(balances[_from], previousBalanceFrom - _amount);

           // Then update the balance array with the new value for the address
           //  receiving the tokens
           var previousBalanceTo = balanceOfAt(_to, block.number);
           require(previousBalanceTo + _amount >= previousBalanceTo); // Check for overflow
           updateValueAtNow(balances[_to], previousBalanceTo + _amount);

           // An event to make the transfer easy to find on the blockchain
           Transfer(_from, _to, _amount);

           return true;
    }

    /// @param _owner The address that's balance is being requested
    /// @return The balance of `_owner` at the current block
    function balanceOf(address _owner) public constant returns (uint256 balance) {
        return balanceOfAt(_owner, block.number);
    }

    /// @notice `msg.sender` approves `_spender` to spend `_amount` tokens on
    ///  its behalf. This is a modified version of the ERC20 approve function
    ///  to be a little bit safer
    /// @param _spender The address of the account able to transfer the tokens
    /// @param _amount The amount of tokens to be approved for transfer
    /// @return True if the approval was successful
    function approve(address _spender, uint256 _amount) public returns (bool success) {
        require(transfersEnabled);

        // To change the approve amount you first have to reduce the addresses`
        //  allowance to zero by calling `approve(_spender,0)` if it is not
        //  already 0 to mitigate the race condition described here:
        //  https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
        require((_amount == 0) || (allowed[msg.sender][_spender] == 0));

        allowed[msg.sender][_spender] = _amount;
        Approval(msg.sender, _spender, _amount);
        return true;
    }

    /// @dev This function makes it easy to read the `allowed[]` map
    /// @param _owner The address of the account that owns the token
    /// @param _spender The address of the account able to transfer the tokens
    /// @return Amount of remaining tokens of _owner that _spender is allowed
    ///  to spend
    function allowance(address _owner, address _spender
    ) public constant returns (uint256 remaining) {
        return allowed[_owner][_spender];
    }

    /// @notice `msg.sender` approves `_spender` to send `_amount` tokens on
    ///  its behalf, and then a function is triggered in the contract that is
    ///  being approved, `_spender`. This allows users to use their tokens to
    ///  interact with contracts in one function call instead of two
    /// @param _spender The address of the contract able to transfer the tokens
    /// @param _amount The amount of tokens to be approved for transfer
    /// @return True if the function call was successful
    function approveAndCall(address _spender, uint256 _amount, bytes _extraData
    ) public returns (bool success) {
        require(approve(_spender, _amount));

        ApproveAndCallFallBack(_spender).receiveApproval(
            msg.sender,
            _amount,
            this,
            _extraData
        );

        return true;
    }

    /// @dev This function makes it easy to get the total number of tokens
    /// @return The total number of tokens
    function totalSupply() public constant returns (uint) {
        return totalSupplyAt(block.number);
    }

////////////////
// Query balance and totalSupply in History
////////////////

    /// @dev Queries the balance of `_owner` at a specific `_blockNumber`
    /// @param _owner The address from which the balance will be retrieved
    /// @param _blockNumber The block number when the balance is queried
    /// @return The balance at `_blockNumber`
    function balanceOfAt(address _owner, uint _blockNumber) public constant
        returns (uint) {

        // These next few lines are used when the balance of the token is
        //  requested before a check point was ever created for this token, it
        //  requires that the `parentToken.balanceOfAt` be queried at the
        //  genesis block for that token as this contains initial balance of
        //  this token
        if ((balances[_owner].length == 0)
            || (balances[_owner][0].fromBlock > _blockNumber)) {
            if (address(parentToken) != 0) {
                return parentToken.balanceOfAt(_owner, min(_blockNumber, parentSnapShotBlock));
            } else {
                // Has no parent
                return 0;
            }

        // This will return the expected balance during normal situations
        } else {
            return getValueAt(balances[_owner], _blockNumber);
        }
    }

    /// @notice Total amount of tokens at a specific `_blockNumber`.
    /// @param _blockNumber The block number when the totalSupply is queried
    /// @return The total amount of tokens at `_blockNumber`
    function totalSupplyAt(uint _blockNumber) public constant returns(uint) {

        // These next few lines are used when the totalSupply of the token is
        //  requested before a check point was ever created for this token, it
        //  requires that the `parentToken.totalSupplyAt` be queried at the
        //  genesis block for this token as that contains totalSupply of this
        //  token at this block number.
        if ((totalSupplyHistory.length == 0)
            || (totalSupplyHistory[0].fromBlock > _blockNumber)) {
                return 0;
        // This will return the expected totalSupply during normal situations
        } else {
            return getValueAt(totalSupplyHistory, _blockNumber);
        }
    }

////////////////
// Generate and destroy tokens
////////////////

    /// TODO: How do we want to handle token generation?
    /// @notice Generates `_amount` tokens that are assigned to `_owner`
    /// @param _owner The address that will be assigned the new tokens
    /// @param _amount The quantity of tokens generated
    /// @return True if the tokens are generated correctly
    function generateTokens(address _owner, uint _amount
    ) public onlyController returns (bool) {
        uint curTotalSupply = totalSupply();
        require(curTotalSupply + _amount >= curTotalSupply); // Check for overflow
        uint previousBalanceTo = balanceOf(_owner);
        require(previousBalanceTo + _amount >= previousBalanceTo); // Check for overflow
        updateValueAtNow(totalSupplyHistory, curTotalSupply + _amount);
        updateValueAtNow(balances[_owner], previousBalanceTo + _amount);
        Transfer(0, _owner, _amount);
        return true;
    }

////////////////
// Enable tokens transfers
////////////////

    /// @notice Enables token holders to transfer their tokens freely if true
    /// @param _transfersEnabled True if transfers are allowed in the clone
    function enableTransfers(bool _transfersEnabled) public onlyController {
        transfersEnabled = _transfersEnabled;
    }

////////////////
// Internal helper functions to query and set a value in a snapshot array
////////////////

    /// @dev `getValueAt` retrieves the number of tokens at a given block number
    /// @param checkpoints The history of values being queried
    /// @param _block The block number to retrieve the value at
    /// @return The number of tokens being queried
    function getValueAt(Checkpoint[] storage checkpoints, uint _block
    ) constant internal returns (uint) {
        if (checkpoints.length == 0) return 0;

        // Shortcut for the actual value
        if (_block >= checkpoints[checkpoints.length-1].fromBlock)
            return checkpoints[checkpoints.length-1].value;
        if (_block < checkpoints[0].fromBlock) return 0;

        // Binary search of the value in the array
        uint min = 0;
        uint max = checkpoints.length-1;
        while (max > min) {
            uint mid = (max + min + 1)/ 2;
            if (checkpoints[mid].fromBlock<=_block) {
                min = mid;
            } else {
                max = mid-1;
            }
        }
        return checkpoints[min].value;
    }

    /// @dev `updateValueAtNow` used to update an array of Checkpoints
    /// @param checkpoints The history of data being updated
    /// @param _value The new number of tokens
    function updateValueAtNow(Checkpoint[] storage checkpoints, uint _value
    ) internal  {
        if ((checkpoints.length == 0)
        || (checkpoints[checkpoints.length -1].fromBlock < block.number)) {
               Checkpoint storage newCheckPoint = checkpoints[ checkpoints.length++ ];
               newCheckPoint.fromBlock =  uint128(block.number);
               newCheckPoint.value = uint128(_value);
           } else {
               Checkpoint storage oldCheckPoint = checkpoints[checkpoints.length-1];
               oldCheckPoint.value = uint128(_value);
           }
    }

    /// @dev Internal function to determine if an address is a contract
    /// @param _addr The address being queried
    /// @return True if `_addr` is a contract
    function isContract(address _addr) constant internal returns(bool) {
        uint size;
        if (_addr == 0) return false;
        assembly {
            size := extcodesize(_addr)
        }
        return size>0;
    }

    /// @dev Helper function to return a min betwen the two uints
    function min(uint a, uint b) pure internal returns (uint) {
        return a < b ? a : b;
    }

//////////
// Safety Methods
//////////

    /// @notice This method can be used by the controller to extract mistakenly
    ///  sent tokens to this contract.
    /// @param _token The address of the token contract that you want to recover
    ///  set to 0 in case you want to extract ether.
    function claimTokens(address _token) public onlyController {
        if (_token == 0x0) {
            controller.transfer(this.balance);
            return;
        }

        MiniMeToken token = MiniMeToken(_token);
        uint balance = token.balanceOf(this);
        token.transfer(controller, balance);
        ClaimedTokens(_token, controller, balance);
    }

////////////////
// Events
////////////////
    event ClaimedTokens(address indexed _token, address indexed _controller, uint _amount);
    event Transfer(address indexed _from, address indexed _to, uint256 _amount);
    event NewCloneToken(address indexed _cloneToken, uint _snapshotBlock);
    event Approval(
        address indexed _owner,
        address indexed _spender,
        uint256 _amount
        );

}
