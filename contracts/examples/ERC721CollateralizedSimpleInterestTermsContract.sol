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

import "./SimpleInterestTermsContract.sol";
import "../ERC721Collateralizer.sol";


/**
 * A Terms Contract that can be used for debt agreements where the collateral token is a
 * non-fungible ERC721 token. It contains functionality for simple interest loans.
 */
contract ERC721CollateralizedSimpleInterestTermsContract is SimpleInterestTermsContract {
    ERC721Collateralizer public erc721Collateralizer;

    function ERC721CollateralizedSimpleInterestTermsContract(
        address _contractRegistry,
        address _erc721Collateralizer
    ) public SimpleInterestTermsContract(_contractRegistry) {
        erc721Collateralizer = ERC721Collateralizer(_erc721Collateralizer);
    }

    /**
     * This method is called by the DebtKernel when an Debt Order is filled. Here, we use it
     * as a hook to collateralize the debtor's ERC721 asset, and to call the same method on the
     * parent contract - which registers that the debt agreement has begun.
     */
    function registerTermStart(
        bytes32 agreementId,
        address debtor
    )
        public
        onlyDebtKernel
        returns (bool _success)
    {
        bool registered = super.registerTermStart(agreementId, debtor);
        bool collateralized = erc721Collateralizer.collateralize(agreementId, debtor);

        return registered && collateralized;
    }

    /**
     * A method that returns a Unix timestamp representing the end of the debt agreement's term.
     * contract.
     */
    function getTermEndTimestamp(
        bytes32 _agreementId
    )
        public
        view
        returns (uint)
    {
        SimpleInterestParams memory params = unpackParamsForAgreementID(_agreementId);

        return params.termEndUnixTimestamp;
    }
}
