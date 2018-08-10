pragma solidity ^0.4.18;

/// Taken from Giveth's MiniMeToken: https://github.com/Giveth/minime
contract Controlled {
    /// @notice The address of the controller is the only address that can call
    ///  a function with this modifier
    modifier onlyController { require(msg.sender == controller); _; }

    address public controller;

    function Controlled(
        address _controller
    )
        public
    {
        controller = _controller;
    }

    /// @notice Changes the controller of the contract
    /// @param _newController The new controller of the contract
    function changeController(address _newController) public onlyController {
        controller = _newController;
    }
}
