import "zeppelin-solidity/contracts/math/SafeMath.sol";


/**
 * A decision engine that returns true or false, depending on the value given.
 */
contract BooleanDecisionEngine {
    using SafeMath for uint;

    function evaluate(bool result) public returns (bool) {
        return result;
    }
}
