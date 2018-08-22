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
import "zeppelin-solidity/contracts/token/ERC721/ERC721.sol";

import "./TermsContract.sol";
import "./DebtRegistry.sol";
import "./ERC721TokenRegistry.sol";
import {PermissionsLib, PermissionEvents} from "./libraries/PermissionsLib.sol";


/**
  * Contains functionality for collateralizing NFTs, by transferring them from
  * a debtor address to this contract as a custodian.
  */
contract ERC721Collateralizer is Pausable, PermissionEvents {
    using PermissionsLib for PermissionsLib.Permissions;
    using SafeMath for uint;

    address public debtKernelAddress;

    DebtRegistry public debtRegistry;
    ERC721TokenRegistry public tokenRegistry;

    // Collateralizer here refers to the owner of the asset that is being collateralized.
    mapping(bytes32 => address) public agreementToCollateralizer;

    PermissionsLib.Permissions internal collateralizationPermissions;

    uint public constant SECONDS_IN_DAY = 24 * 60 * 60;

    string public constant CONTEXT = "ERC721Collateralizer";

    event CollateralLocked(
        bytes32 indexed agreementID,
        // The address of the ERC721 contract for the token.
        address indexed erc721Contract,
        // The id of the token associated with the ERC721 contract.
        uint256 tokenID
    );

    event CollateralReturned(
        bytes32 indexed agreementID,
        address indexed collateralizer,
        address erc721Contract,
        uint256 tokenID
    );

    event CollateralSeized(
        bytes32 indexed agreementID,
        address indexed beneficiary,
        address erc721Contract,
        uint256 tokenID
    );

    modifier onlyAuthorizedToCollateralize() {
        require(collateralizationPermissions.isAuthorized(msg.sender));
        _;
    }

    function ERC721Collateralizer(
        address _debtKernel,
        address _debtRegistry,
        address _tokenRegistry
    ) public {
        debtKernelAddress = _debtKernel;
        debtRegistry = DebtRegistry(_debtRegistry);
        tokenRegistry = ERC721TokenRegistry(_tokenRegistry);
    }

    /**
     * Transfers collateral from the debtor to the current contract, as custodian.
     *
     * @param agreementId bytes32 The debt agreement's ID
     * @param collateralizer address The owner of the asset being collateralized
     */
    function collateralize(
        bytes32 agreementId,
        address collateralizer
    )
        public
        onlyAuthorizedToCollateralize
        whenNotPaused
    returns (bool _success)
    {
        // The address of the ERC721 contract.
        address collateralTokenAddress;
        // The token id, associating the collateral token and the given ERC721 contract.
        uint256 collateralTokenID;
        // The terms contract according to which this asset is being collateralized.
        TermsContract termsContract;

        // Fetch all relevant collateralization parameters
        (
            collateralTokenAddress,
            collateralTokenID,
            termsContract
        ) = retrieveCollateralParameters(agreementId);

        require(termsContract == msg.sender);
        require(collateralTokenAddress != address(0));

        /*
            Ensure that the agreement has not already been collateralized.

            If the agreement has already been collateralized, this check will fail
            because any valid collateralization must have some sort of valid
            address associated with it as a collateralizer.  Given that it is impossible
            to send transactions from address 0x0, this check will only fail
            when the agreement is already collateralized.
        */
        require(agreementToCollateralizer[agreementId] == address(0));

        ERC721 erc721token = ERC721(collateralTokenAddress);
        address custodian = address(this);

        // Ensure that the collateralizer is the owner of this token ID.
        require(erc721token.ownerOf(collateralTokenID) == collateralizer);

        // The token must be approved for transfer by this contract.
        require(erc721token.getApproved(collateralTokenID) == custodian);

        // Store collaterallizer in mapping, effectively demarcating that the
        // agreement is now collateralized.
        agreementToCollateralizer[agreementId] = collateralizer;

        // Transfer the collateral asset to this contract.
        erc721token.transferFrom(collateralizer, custodian, collateralTokenID);

        // Emit an event that collateral has been secured.
        CollateralLocked(agreementId, collateralTokenAddress, collateralTokenID);

        return true;
    }

    /**
     * Returns collateral to the debt agreement's original collateralizer
     * if and only if the debt agreement's term has lapsed and
     * the total expected repayment value has been repaid.
     *
     * @param agreementId bytes32 The debt agreement's ID
     */
    function returnCollateral(
        bytes32 agreementId
    )
        public
        whenNotPaused
    {
        // The address of the ERC721 contract.
        address collateralTokenAddress;
        // The token id, associating the collateral token and the given ERC721 contract.
        uint256 collateralTokenID;
        // The terms contract according to which this asset is being collateralized.
        TermsContract termsContract;

        // Fetch all relevant collateralization parameters.
        (
            collateralTokenAddress,
            collateralTokenID,
            termsContract
        ) = retrieveCollateralParameters(agreementId);

        // Ensure a valid form of collateral is tied to this agreement id.
        require(collateralTokenAddress != address(0));

        // Withdrawal can only occur if the collateral has yet to be withdrawn.
        // When we withdraw collateral, we reset the collateral agreement
        // in a gas-efficient manner by resetting the address of the collateralizer to 0.
        require(agreementToCollateralizer[agreementId] != address(0));

        // Ensure that the debt is not in a state of default.
        require(
            termsContract.getExpectedRepaymentValue(
                agreementId,
                termsContract.getTermEndTimestamp(agreementId)
            ) <= termsContract.getValueRepaidToDate(agreementId)
        );

        // Determine collateralizer of the collateral.
        address collateralizer = agreementToCollateralizer[agreementId];
        // Mark agreement's collateral as withdrawn by setting the agreement's
        // collateralizer to 0x0.
        delete agreementToCollateralizer[agreementId];
        ERC721 erc721token = ERC721(collateralTokenAddress);

        // Transfer the collateral this contract was holding in escrow back to collateralizer.
        erc721token.transferFrom(address(this), collateralizer, collateralTokenID);

        // Log the return event.
        CollateralReturned(
            agreementId,
            collateralizer,
            collateralTokenAddress,
            collateralTokenID
        );
    }

    /**
     * Seizes the collateral from the given debt agreement and
     * transfers it to the debt agreement's current beneficiary
     * (i.e. the person who "owns" the debt).
     *
     * @param agreementId bytes32 The debt agreement's ID
     */
    function seizeCollateral(
        bytes32 agreementId
    )
        public
        whenNotPaused
    {

        // The address of the ERC721 contract.
        address collateralTokenAddress;
        // The token id, associating the collateral token and the given ERC721 contract.
        uint256 collateralTokenID;
        // The terms contract according to which this asset is being collateralized.
        TermsContract termsContract;

        // Fetch all relevant collateralization parameters.
        (
            collateralTokenAddress,
            collateralTokenID,
            termsContract
        ) = retrieveCollateralParameters(agreementId);

        // Ensure a valid form of collateral is tied to this agreement id.
        require(collateralTokenAddress != address(0));

        // Seizure can only occur if the collateral has yet to be withdrawn.
        // When we withdraw collateral, we reset the collateral agreement
        // in a gas-efficient manner by resetting the address of the collateralizer to 0.
        require(agreementToCollateralizer[agreementId] != address(0));

        // Ensure debt is in a state of default.
        require(
            termsContract.getExpectedRepaymentValue(
                agreementId,
                block.timestamp
            ) > termsContract.getValueRepaidToDate(agreementId)
        );

        // Mark agreement's collateral as withdrawn by setting the agreement's
        // collateralizer to 0x0.
        delete agreementToCollateralizer[agreementId];

        // Determine beneficiary of the collateral to be seized.
        address beneficiary = debtRegistry.getBeneficiary(agreementId);
        ERC721 erc721token = ERC721(collateralTokenAddress);

        // Transfer the collateral this contract was holding in escrow to beneficiary.
        erc721token.transferFrom(address(this), beneficiary, collateralTokenID);

        // Log the seizure event.
        CollateralSeized(
            agreementId,
            beneficiary,
            collateralTokenAddress,
            collateralTokenID
        );
    }

    /**
     * Adds an address to the list of agents authorized
     * to invoke the `collateralize` function.
     */
    function addAuthorizedCollateralizeAgent(address agent)
        public
        onlyOwner
    {
        collateralizationPermissions.authorize(agent, CONTEXT);
    }

    /**
     * Removes an address from the list of agents authorized
     * to invoke the `collateralize` function.
     */
    function revokeCollateralizeAuthorization(address agent)
        public
        onlyOwner
    {
        collateralizationPermissions.revokeAuthorization(agent, CONTEXT);
    }

    /**
    * Returns the list of agents authorized to invoke the 'collateralize' function.
    */
    function getAuthorizedCollateralizeAgents()
        public
        view
        returns (address[])
    {
        return collateralizationPermissions.getAuthorizedAgents();
    }

    /**
     * Unpacks collateralization-specific parameters from their tightly-packed
     * representation in a terms contract parameter string.
     */
    function unpackCollateralParametersFromBytes(bytes32 parameters)
        public
        pure
        returns (bool, uint, uint)
    {
        bytes32 isEnumerableShifted =
            parameters & 0x0000000000000000000000000000000000000f00000000000000000000000000;
        // Here we get the index of the ERC721 contract within the ERC721TokenRegistry.
        // In its raw form it will be "shifted" 14 characters to the left (I.E. it has 14 "0"s after
        // the actual value), so we still need to unshift it.
        bytes32 collateralContractIndexShifted =
            parameters & 0x00000000000000000000000000000000000000ffffffffffff00000000000000;
        // Get the index of the ERC721 token relative to the ERC721 contract.
        bytes32 tokenRef =
            parameters & 0x00000000000000000000000000000000000000000000000000ffffffffffffff;

        uint isEnumerable = uint(isEnumerableShifted) / 2 ** 104;
        // Shift the contract index value 14 places to the right.
        uint collateralContractIndex = uint(collateralContractIndexShifted) / 2 ** 56;

        return (
            isEnumerable == 1,
            collateralContractIndex,
            uint(tokenRef)
        );
    }

    function retrieveCollateralParameters(bytes32 agreementId)
        internal
        view
        returns (
            address _collateralTokenAddress,
            uint256 _collateralTokenID,
            TermsContract _termsContract
        )
    {
        address termsContractAddress;
        bytes32 termsContractParameters;

        // Pull the terms contract and associated parameters for the agreement.
        (termsContractAddress, termsContractParameters) = debtRegistry.getTerms(agreementId);

        bool isEnumerable;
        uint collateralContractIndex;
        uint256 collateralTokenRef;
        uint collateralTokenID;

        // Unpack terms contract parameters in order to get collateralization-specific params.
        (
            isEnumerable,
            collateralContractIndex,
            collateralTokenRef,
        ) = unpackCollateralParametersFromBytes(termsContractParameters);

        // Resolve address of ERC721 contract associated with this agreement in token registry.
        address collateralTokenAddress = tokenRegistry.getTokenAddressByIndex(collateralContractIndex);
        ERC721 erc721token = ERC721(collateralTokenAddress);

        if (isEnumerable) {
            collateralTokenID = erc721token.tokenByIndex(collateralTokenRef);
        } else {
            collateralTokenID = collateralTokenRef;
        }

        return (
            collateralTokenAddress,
            collateralTokenID,
            TermsContract(termsContractAddress)
        );
    }
}
