pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";


contract DummyToken is MintableToken {
    using SafeMath for uint;
    string public name;
    string public symbol;
    uint public decimals;

    function DummyToken(
        string _name,
        string _symbol,
        uint _decimals,
        uint _totalSupply,
        address[] _initialBalanceHolders)
        public
    {
        name = _name;
        symbol = _symbol;
        decimals = _decimals;
        totalSupply_ = _totalSupply;

        uint numInitialBalanceHolders = _initialBalanceHolders.length;

        // Distribute the total supply evenly among the initial balance holders
        for (uint i = 0; i < numInitialBalanceHolders; i++) {
            address account = _initialBalanceHolders[i];
            balances[account] = totalSupply_ / numInitialBalanceHolders;
        }
    }

    function setBalance(address _target, uint _value) public onlyOwner {
        uint currBalance = balanceOf(_target);
        if (_value < currBalance) {
            totalSupply_ = totalSupply_.sub(currBalance.sub(_value));
        } else {
            totalSupply_ = totalSupply_.add(_value.sub(currBalance));
        }
        balances[_target] = _value;
    }
}
