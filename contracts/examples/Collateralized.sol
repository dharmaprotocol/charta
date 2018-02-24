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

    mapping(bytes32 => Collateral) public collateralForAgreementID;

    event CollateralLocked(
        bytes32 indexed agreementID,
        address token,
        uint amount
    );

    event CollateralReturned(
        bytes32 indexed agreementID,
        address indexed collateralizer,
        address token,
        uint amount
    );

    event CollateralSeized(
        bytes32 indexed agreementID,
        address indexed beneficiary,
        address token,
        uint amount
    );

    function Collateralized(address _debtRegistry) public {
        debtRegistry = DebtRegistry(_debtRegistry);
    }

    function collateralize(
        bytes32 agreementID,
        address token,
        uint amount,
        uint lockupPeriodEndTimestamp
    )
        public
    {
        // validate amount and lockup period.
        require(amount > 0 && lockupPeriodEndTimestamp > block.timestamp);

        // ensure that the agreement has not already been collateralized.
        require(collateralForAgreementID[agreementID].lockupPeriod == 0);

        // take tokens as collateral.
        require(ERC20(token).transferFrom(
            msg.sender,
            address(this),
            amount
        ));

        // create collateral instance.
        Collateral memory collateral = Collateral({
            collateralizer: msg.sender,
            token: token,
            amount: amount,
            lockupPeriod: lockupPeriodEndTimestamp,
            withdrawn: false
        });

        // store collateral in mapping.
        collateralForAgreementID[agreementID] = collateral;

        // emit event that collateral has been secured.
        CollateralLocked(agreementID, token, amount);
    }

    function returnCollateral(
        bytes32 agreementID
    )
        public
    {
        // fetch collateral object.
        Collateral memory collateral = collateralForAgreementID[agreementID];

        // check if collateral is not empty, lockupPeriod is over and not withdrawn
        require(
            collateral.lockupPeriod > 0 &&
            block.timestamp > collateral.lockupPeriod &&
            !collateral.withdrawn
        );

        // ensure sufficient payment.
        require(
            getExpectedRepaymentValue(agreementID, block.timestamp) <=
            getValueRepaidToDate(agreementID)
        );

        // transfer collateral back to sender.
        require(
          ERC20(collateral.token).transfer(collateral.collateralizer, collateral.amount)
        );

        // mark collateral as withdrawn.
        collateral.withdrawn = true;

        // log that the collateral has been succesfully returned to collateralizer.
        CollateralReturned(
            agreementID,
            collateral.collateralizer,
            collateral.token,
            collateral.amount
        );
    }

    function seizeCollateral(
        bytes32 agreementID
    )
        public
    {
        // fetch collateral object.
        Collateral memory collateral = collateralForAgreementID[agreementID];

        // check if collateral is not empty, lockupPeriod is over and not withdrawn.
        require(
            collateral.lockupPeriod > 0 &&
            block.timestamp > collateral.lockupPeriod &&
            !collateral.withdrawn
        );

        // ensure debtor is in violation of the terms.
        require(
            getExpectedRepaymentValue(agreementID, block.timestamp) >
            getValueRepaidToDate(agreementID)
        );

        // determine beneficiary of the seized collateral.
        address beneficiary = debtRegistry.getBeneficiary(agreementID);

        // seize collateral and transfer to beneficiary.
        require(
            ERC20(collateral.token).transfer(beneficiary, collateral.amount)
        );

        // mark collateral as withdrawn once transfer has succeeded.
        collateral.withdrawn = true;

        // log the seizure event.
        CollateralSeized(
            agreementID,
            beneficiary,
            collateral.token,
            collateral.amount
        );
    }
}
