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

import "../TermsContract.sol";
import "../DebtRegistry.sol";


contract Collateralized is TermsContract {
    using SafeMath for uint;

    struct Collateral {
        address collateralizer;
        address token;
        uint amount;
        uint lockupPeriod;
        bool withdrawn;
    }

    DebtRegistry public debtRegistry;
    mapping(bytes32 => Collateral) public collaterals;

    event CollateralLocked(
        bytes32 indexed issuanceCommitmentHash,
        address token,
        uint amount
    );

    event CollateralReturned(
        bytes32 indexed issuanceCommitmentHash,
        address indexed collateralizer,
        address token,
        uint amount
    );

    event CollateralSeized(
        bytes32 indexed issuanceCommitmentHash,
        address indexed beneficiary,
        address token,
        uint amount
    );

    function Collateralized(address _debtRegistry) public {
        debtRegistry = DebtRegistry(_debtRegistry);
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
        require(ERC20(token).transferFrom(
            collateral.collateralizer,
            address(this),
            amount
        ));

        // create new collateral for given issuanceCommitmentHash
        Collateral memory collateral = Collateral({
            collateralizer: msg.sender,
            token: token,
            amount: amount,
            lockupPeriod: lockupPeriodEndBlockNumber,
            withdrawn: false
        });
        collaterals[issuanceCommitmentHash] = collateral;

        // add event for given issuanceCommitmentHash
        CollateralLocked(issuanceCommitmentHash, token, amount);
    }

    function returnCollateral(bytes32 issuanceCommitmentHash) public {
        // fetch collateral object
        Collateral memory collateral = collaterals[issuanceCommitmentHash];

        // check if collateral is not empty, lockupPeriod is over and not withdrawn
        require(
            collateral.lockupPeriod > 0 &&
            block.number > collateral.lockupPeriod &&
            !collateral.withdrawn
        );

        // check if expected value has been paid
        require(
            getExpectedRepaymentValue(issuanceCommitmentHash, block.number) <=
            getValueRepaid(issuanceCommitmentHash, block.number)
        );

        // withdrawn collateral
        collateral.withdrawn = true;

        // transfer collaterals back to sender
        ERC20(collateral.token).transfer(collateral.collateralizer, collateral.amount);

        // log return event
        CollateralReturned(
            issuanceCommitmentHash,
            collateral.collateralizer,
            collateral.token,
            collateral.amount
        );
    }

    function seizeCollateral(bytes32 issuanceCommitmentHash) public {
        // fetch collateral object
        Collateral memory collateral = collaterals[issuanceCommitmentHash];

        // check if collateral is not empty, lockupPeriod is over and not withdrawn
        require(
            collateral.lockupPeriod > 0 &&
            block.number > collateral.lockupPeriod &&
            !collateral.withdrawn
        );

        // check if expected value hasn't been paid
        require(
            getExpectedRepaymentValue(issuanceCommitmentHash, block.number) >
            getValueRepaid(issuanceCommitmentHash, block.number)
        );

        // seize collateral
        collateral.withdrawn = true;

        // get beneficiary from debt registry
        address beneficiary = debtRegistry.getBeneficiary(issuanceCommitmentHash);

        // transfer(seize) collaterals back to beneficiary
        ERC20(collateral.token).transfer(
            beneficiary,
            collateral.amount
        );

        // log seize event
        CollateralSeized(
            issuanceCommitmentHash,
            beneficiary,
            collateral.token,
            collateral.amount
        );
    }
}
