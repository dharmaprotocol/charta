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
        // the amount being put up for collateral must exceed 0.
        require(amount > 0);

        // the lockup period must occur at some point in the future.
        require(lockupPeriodEndTimestamp > block.timestamp);

        /*
        Ensure that the agreement has not already been collateralized.

        If the agreement has already been collateralized, this check will fail
        because any valid form of collateral will have a non-zero lockupPeriod.
        Only an uncollateralized agreement would meet this requirement.
        */
        require(collateralForAgreementID[agreementID].lockupPeriod == 0);

        ERC20 erc20token = ERC20(token);
        address collateralizer = msg.sender;
        address custodian = address(this);

        /*
        The collateralizer must have sufficient balance equal to or greater
        than the amount being put up for collateral.
        */
        require(erc20token.balanceOf(collateralizer) >= amount);

        /*
        The custodian must have an allowance granted by the collateralizer equal
        to or greater than the amount being put up for collateral.
        */
        require(erc20token.allowance(collateralizer, custodian) >= amount);

        // the collateral must be successfully transferred to this contract.
        require(erc20token.transferFrom(
            collateralizer,
            custodian,
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
        // fetch relevant collateral instance.
        Collateral memory collateral = collateralForAgreementID[agreementID];

        // Ensure a valid form of collateral is tied to this agreement id.
        require(collateral.lockupPeriod > 0);

        // Collateral can only be returned after the lockup period.
        require(block.timestamp > collateral.lockupPeriod);

        // Collateral can only be returned if it has yet to be withdrawn.
        require(!collateral.withdrawn);

        // ensure sufficient payment.
        require(
            getExpectedRepaymentValue(agreementID, block.timestamp) <=
            getValueRepaidToDate(agreementID)
        );

        // mark collateral as withdrawn.
        collateralForAgreementID[agreementID].withdrawn = true;

        // transfer the collateral this contract was holding in escrow back to sender.
        require(
            ERC20(collateral.token).transfer(
                collateral.collateralizer,
                collateral.amount
            )
        );

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
        // fetch relevant collateral instance.
        Collateral memory collateral = collateralForAgreementID[agreementID];

        // Ensure a valid form of collateral is tied to this agreement id.
        require(collateral.lockupPeriod > 0);

        // Seizure can only occur after the lockup period.
        require(block.timestamp > collateral.lockupPeriod);

        // Seizure can only occur if the collateral has yet to be withdrawn.
        require(!collateral.withdrawn);

        // ensure debtor is in violation of the terms.
        require(
            getExpectedRepaymentValue(agreementID, block.timestamp) >
            getValueRepaidToDate(agreementID)
        );

        // mark collateral as withdrawn once transfer has succeeded.
        collateralForAgreementID[agreementID].withdrawn = true;

        // determine beneficiary of the seized collateral.
        address beneficiary = debtRegistry.getBeneficiary(agreementID);

        // seize collateral and transfer to beneficiary.
        require(
            ERC20(collateral.token).transfer(
                beneficiary,
                collateral.amount
            )
        );

        // log the seizure event.
        CollateralSeized(
            agreementID,
            beneficiary,
            collateral.token,
            collateral.amount
        );
    }

    /**
     * Unpacks collateralization-specific parameters from their tightly-packed
     * representationn in a terms contract parameter string.
     *
     * For collateralized terms contracts, we reserve the lowest order 108 bits
     * of the terms contract parameters for parameters relevant to collateralization.
     *
     * Contracts that inherit from the Collateralized terms contract
     * can encode whichever parameter schema they please in the remaining
     * space of the terms contract parameters.
     * The 108 bits are encoded as follows (from higher order bits to lower order bits):
     *
     * 8 bits - Collateral Token (encoded by its unsigned integer index in the TokenRegistry contract)
     * 92 bits - Collateral Amount (encoded as an unsigned integer)
     * 8 bits - Grace Period* Length (encoded as an unsigned integer)
     *
     * * = The "Grace" Period is the number of days a debtor has between
     *      when they fall behind on an expected payment and when their collateral
     *      can be seized by the creditor.
     */
    function unpackCollateralParametersFromBytes(bytes32 parameters)
        public
        pure
        returns (
            uint collateralTokenIndexInRegistry,
            uint collateralAmount,
            uint gracePeriodInDays
        )
    {
        // The first byte of the 108 reserved bits represents the collateral token.
        bytes32 collateralTokenIndexShifted =
            parameters & 0x0000000000000000000000000000000000000ff0000000000000000000000000;
        // The subsequent 92 bits represents the collateral amount, as denominated in the above token.
        bytes32 collateralAmountShifted =
            parameters & 0x000000000000000000000000000000000000000fffffffffffffffffffffff00;

        // We bit-shift these values, respectively, 100 bits and 8 bits right using
        // mathematical operations, so that their 32 byte integer counterparts
        // correspond to the intended values packed in the 32 byte string
        uint collateralTokenIndex = uint(collateralTokenIndexShifted) / 2 ** 100;
        uint collateralAmount = uint(amortizationUnitTypeShifted) / 2 ** 120;

        // The last byte of the parameters represents the "grace period" of the loan,
        // as defined in terms of days.
        // Since this value takes the rightmost place in the parameters string,
        // we do not need to bit-shift it.
        bytes32 gracePeriodInDays =
            parameters & 0x00000000000000000000000000000000000000000000000000000000000000ff;

        return (
            collateralTokenIndex,
            collateralAmount,
            uint(gracePeriodInDays)
        );
    }

}
