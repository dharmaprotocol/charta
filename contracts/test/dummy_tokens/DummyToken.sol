pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";
import "zeppelin-solidity/contracts/math/SafeMath.sol";


contract DummyToken is MintableToken {
    using SafeMath for uint;
    string public name;
    string public symbol;
    uint public decimals;

    uint public constant TOKENS_PER_ACCOUNT = 100 * 10 ** 18;

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

        // Set the last initial balance holder's balance to the total supply
        address supplyHolder = _initialBalanceHolders[numInitialBalanceHolders - 1];
        balances[supplyHolder] = _totalSupply;

        // For every other balance holder, distribute tokens and increase the total supply appropriately
        for (uint i = 0; i < numInitialBalanceHolders - 1; i++) {
            totalSupply_.add(TOKENS_PER_ACCOUNT);

            address account = _initialBalanceHolders[i];
            balances[account] = TOKENS_PER_ACCOUNT;
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
