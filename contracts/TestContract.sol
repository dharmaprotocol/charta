pragma solidity ^0.4.18;

contract TestContract {
  uint public counter;
  bool constant public someValue = true;

  function TestContract() {
    counter = 0;
  }

  function counterWithOffset(uint offset) constant returns (uint sum) {
    return counter + offset;
  }

  function returnAll() constant returns (uint, uint) {
    return (counter, counterWithOffset(5));
  }

  function countup() {
    counter += 1;
  }
}
