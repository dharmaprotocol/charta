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

import "zeppelin-solidity/contracts/math/SafeMath.sol";
import "zeppelin-solidity/contracts/token/ERC20/ERC20.sol";


contract Collateralized {
    using SafeMath for uint;

    struct Collateral {
        address user;
        address token;
        uint amount;
        uint lockupPeriod;
    }

    address public beneficiary;
    mapping(bytes32 => Collateral) public collaterals;

    event CollateralAdded(
        bytes32 indexed issuanceCommitmentHash,
        address indexed sender
    );

    event CollateralReturned(
        bytes32 indexed issuanceCommitmentHash,
        address indexed to
    );

    event CollateralSeized(
        bytes32 indexed issuanceCommitmentHash,
        address indexed to
    );

    function Collateralized(address _beneficiary) public {
        beneficiary = _beneficiary;
    }

    function collateralize(
        bytes32 issuanceCommitmentHash,
        address token,
        uint amount,
        uint lockupPeriodEndBlockNumber
    )
        public
    {
        // validate amount and lockup period
        require(amount > 0 && lockupPeriodEndBlockNumber > block.number);

        // check for already present collateral
        require(collaterals[issuanceCommitmentHash].lockupPeriod == 0);

        // take tokens as collateral
        require(ERC20(token).transferFrom(msg.sender, address(this), amount));

        // create new collateral for given issuanceCommitmentHash
        Collateral memory collateral = Collateral({
            user: msg.sender,
            token: token,
            amount: amount,
            lockupPeriod: lockupPeriodEndBlockNumber
        });
        collaterals[issuanceCommitmentHash] = collateral;

        // add event for given issuanceCommitmentHash
        CollateralAdded(issuanceCommitmentHash, msg.sender);
    }

    function returnCollateral(bytes32 issuanceCommitmentHash) internal {
        // fetch collateral object
        Collateral memory collateral = collaterals[issuanceCommitmentHash];

        // check if collateral is not empty
        require(collateral.lockupPeriod > 0);

        // check if lockupPeriod is over
        require(block.number > collateral.lockupPeriod);

        // transfer collaterals back to sender
        ERC20(collateral.token).transfer(
            collateral.user,
            collateral.amount
        );

        // log return event
        CollateralReturned(issuanceCommitmentHash, collateral.user);
    }

    function seizeCollateral(bytes32 issuanceCommitmentHash) internal {
        // fetch collateral object
        Collateral memory collateral = collaterals[issuanceCommitmentHash];

        // check if collateral is not empty
        require(collateral.lockupPeriod > 0);

        // check if lockupPeriod is over
        require(block.number > collateral.lockupPeriod);

        // transfer(seize) collaterals back to beneficiary
        ERC20(collateral.token).transfer(
            beneficiary,
            collateral.amount
        );

        // log seize event
        CollateralSeized(issuanceCommitmentHash, beneficiary);
    }
}
