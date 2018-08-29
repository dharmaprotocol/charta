export const Collateralized = 
{
  "contractName": "Collateralized",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "debtKernelAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getTermEndTimestamp",
      "outputs": [
        {
          "name": "_timestamp",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "returnCollateral",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "gracePeriodInDays",
          "type": "uint256"
        }
      ],
      "name": "timestampAdjustedForGracePeriod",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "SECONDS_IN_DAY",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "collateralizer",
          "type": "address"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenRegistry",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "parameters",
          "type": "bytes32"
        }
      ],
      "name": "unpackCollateralParametersFromBytes",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "agreementToCollateralizer",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "seizeCollateral",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_tokenRegistry",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CollateralLocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "collateralizer",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CollateralReturned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "token",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "CollateralSeized",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\nimport \"../TermsContract.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TokenRegistry.sol\";\n\n\n/**\n * Abstract semi-implemented interface for generic collateralized terms contract.\n *\n * NOTE: Terms contracts that inherit from Collateralized.sol must adhere to the following constraints\n *      1. They reserve the lowest order 108 bits of their terms contract parameters\n *         for collateralization-specific parameters.\n *      2. They implement the abstract `getTermEndTimestamp` function.\n *      3. The expected repayment value and value repaid to date *MUST* monotonically increase\n *         over time -- i.e. `x < x' <=> getExpectedRepaymentValue(x) < getExpectedRepaymentValue(x')`\n *\n * Authors (in no particular order): nadavhollander, saturnial, jdkanani\n */\ncontract Collateralized is TermsContract {\n    using SafeMath for uint;\n\n    address public debtKernelAddress;\n\n    DebtRegistry public debtRegistry;\n    TokenRegistry public tokenRegistry;\n\n    mapping(bytes32 => address) public agreementToCollateralizer;\n\n    uint public constant SECONDS_IN_DAY = 24*60*60;\n\n    event CollateralLocked(\n        bytes32 indexed agreementID,\n        address token,\n        uint amount\n    );\n\n    event CollateralReturned(\n        bytes32 indexed agreementID,\n        address indexed collateralizer,\n        address token,\n        uint amount\n    );\n\n    event CollateralSeized(\n        bytes32 indexed agreementID,\n        address indexed beneficiary,\n        address token,\n        uint amount\n    );\n\n    function Collateralized(\n        address _debtKernel,\n        address _debtRegistry,\n        address _tokenRegistry\n    ) public {\n        debtKernelAddress = _debtKernel;\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n    }\n\n    /**\n     * Abstract interface for a function that returns the last timestamp\n     * at which any repayment is expected -- i.e., the debt agreement's\n     * term's ending.\n     *\n     * @param agreementId bytes32 The debt agreement's ID\n     * @return _timestamp uint\n     */\n    function getTermEndTimestamp(\n        bytes32 agreementId\n    ) public view returns (uint _timestamp);\n\n    /**\n     * Hook that is called by the DebtKernel upon a debt agreement's\n     * issuance.  Parses out collateralization-specific parameters\n     * from the debt agreement's terms contract parameters and\n     * pulls collateral from the debtor based on those parameters.\n     *\n     * @param agreementId bytes32 The debt's agreement ID\n     * @param collateralizer address The debt agreement's collateralizer\n     * @return _success bool\n     */\n    function registerTermStart(bytes32 agreementId, address collateralizer)\n        public\n        returns (bool _success)\n    {\n        require(msg.sender == debtKernelAddress);\n\n        // Fetch all relevant collateralization parameters\n\n        // The token in which collateral is denominated\n        address collateralToken;\n        // The amount being put up for collateral\n        uint collateralAmount;\n        // The number of days a debtor has after a debt enters default\n        // before their collateral is elligible for seizure.\n        uint gracePeriodInDays;\n\n        (collateralToken, collateralAmount, gracePeriodInDays) = retrieveCollateralParameters(agreementId);\n\n        require(collateralAmount > 0);\n        require(collateralToken != address(0));\n\n        /*\n        Ensure that the agreement has not already been collateralized.\n\n        If the agreement has already been collateralized, this check will fail\n        because any valid collateralization must have some sort of valid\n        address associated with it as a collateralizer.  Given that it is impossible\n        to send transactions from address 0x0, this check will only fail\n        when the agreement is already collateralized.\n        */\n        require(agreementToCollateralizer[agreementId] == address(0));\n\n        ERC20 erc20token = ERC20(collateralToken);\n        address custodian = address(this);\n\n        /*\n        The collateralizer must have sufficient balance equal to or greater\n        than the amount being put up for collateral.\n        */\n        require(erc20token.balanceOf(collateralizer) >= collateralAmount);\n\n        /*\n        The custodian must have an allowance granted by the collateralizer equal\n        to or greater than the amount being put up for collateral.\n        */\n        require(erc20token.allowance(collateralizer, custodian) >= collateralAmount);\n\n        // store collaterallizer in mapping, effectively demarcating that the\n        // agreement is now collateralized.\n        agreementToCollateralizer[agreementId] = collateralizer;\n\n        // the collateral must be successfully transferred to this contract.\n        require(erc20token.transferFrom(\n            collateralizer,\n            custodian,\n            collateralAmount\n        ));\n\n        // emit event that collateral has been secured.\n        CollateralLocked(agreementId, collateralToken, collateralAmount);\n\n        return true;\n    }\n\n    /**\n     * Returns collateral to the debt agreement's original collateralizer\n     * if and only if the debt agreement's term has lapsed and\n     * the total expected repayment value has been repaid.\n     *\n     * @param agreementId bytes32 The debt agreement's ID\n     */\n    function returnCollateral(\n        bytes32 agreementId\n    )\n        public\n    {\n        // Fetch all relevant collateralization parameters\n\n        // The token in which collateral is denominated\n        address collateralToken;\n        // The amount being put up for collateral\n        uint collateralAmount;\n        // The number of days a debtor has after a debt enters default\n        // before their collateral is elligible for seizure.\n        uint gracePeriodInDays;\n\n        (collateralToken, collateralAmount, gracePeriodInDays) = retrieveCollateralParameters(agreementId);\n\n        // Ensure a valid form of collateral is tied to this agreement id\n        require(collateralAmount > 0);\n        require(collateralToken != address(0));\n\n        // Withdrawal can only occur if the collateral has yet to be withdrawn.\n        // When we withdraw collateral, we reset the collateral agreement\n        // in a gas-efficient manner by resetting the address of the collateralizer to 0\n        require(agreementToCollateralizer[agreementId] != address(0));\n\n        // Ensure that the debt agreement's term has lapsed\n        require(getTermEndTimestamp(agreementId) < block.timestamp);\n\n        // Ensure that the debt is not in a state of default\n        require(\n            getExpectedRepaymentValue(\n                agreementId,\n                block.timestamp\n            ) <= getValueRepaidToDate(agreementId)\n        );\n\n        // determine collateralizer of the collateral.\n        address collateralizer = agreementToCollateralizer[agreementId];\n\n        // Mark agreement's collateral as withdrawn by setting the agreement's\n        // collateralizer to 0x0.\n        delete agreementToCollateralizer[agreementId];\n\n        // transfer the collateral this contract was holding in escrow back to collateralizer.\n        require(\n            ERC20(collateralToken).transfer(\n                collateralizer,\n                collateralAmount\n            )\n        );\n\n        // log the return event.\n        CollateralReturned(\n            agreementId,\n            collateralizer,\n            collateralToken,\n            collateralAmount\n        );\n    }\n\n    /**\n     * Seizes the collateral from the given debt agreement and\n     * transfers it to the debt agreement's current beneficiary\n     * (i.e. the person who \"owns\" the debt).\n     *\n     * @param agreementId bytes32 The debt agreement's ID\n     */\n    function seizeCollateral(\n        bytes32 agreementId\n    )\n        public\n    {\n        // Fetch all relevant collateralization parameters\n\n        // The token in which collateral is denominated\n        address collateralToken;\n        // The amount being put up for collateral\n        uint collateralAmount;\n        // The number of days a debtor has after a debt enters default\n        // before their collateral is elligible for seizure.\n        uint gracePeriodInDays;\n\n        (collateralToken, collateralAmount, gracePeriodInDays) = retrieveCollateralParameters(agreementId);\n\n        // Ensure a valid form of collateral is tied to this agreement id\n        require(collateralAmount > 0);\n        require(collateralToken != address(0));\n\n        // Seizure can only occur if the collateral has yet to be withdrawn.\n        // When we withdraw collateral, we reset the collateral agreement\n        // in a gas-efficient manner by resetting the address of the collateralizer to 0\n        require(agreementToCollateralizer[agreementId] != address(0));\n\n        // Ensure debt is in a state of default when we account for the\n        // specified \"grace period\".  We do this by checking whether the\n        // *current* value repaid to-date exceeds the expected repayment value\n        // at the point of time at which the grace period would begin if it ended\n        // now.  This crucially relies on the assumption that both expected repayment value\n        /// and value repaid to date monotonically increase over time\n        require(\n            getExpectedRepaymentValue(\n                agreementId,\n                timestampAdjustedForGracePeriod(gracePeriodInDays)\n            ) > getValueRepaidToDate(agreementId)\n        );\n\n        // Mark agreement's collateral as withdrawn by setting the agreement's\n        // collateralizer to 0x0.\n        delete agreementToCollateralizer[agreementId];\n\n        // determine beneficiary of the seized collateral.\n        address beneficiary = debtRegistry.getBeneficiary(agreementId);\n\n        // transfer the collateral this contract was holding in escrow to beneficiary.\n        require(\n            ERC20(collateralToken).transfer(\n                beneficiary,\n                collateralAmount\n            )\n        );\n\n        // log the seizure event.\n        CollateralSeized(\n            agreementId,\n            beneficiary,\n            collateralToken,\n            collateralAmount\n        );\n    }\n\n    /**\n     * Unpacks collateralization-specific parameters from their tightly-packed\n     * representationn in a terms contract parameter string.\n     *\n     * For collateralized terms contracts, we reserve the lowest order 108 bits\n     * of the terms contract parameters for parameters relevant to collateralization.\n     *\n     * Contracts that inherit from the Collateralized terms contract\n     * can encode whichever parameter schema they please in the remaining\n     * space of the terms contract parameters.\n     * The 108 bits are encoded as follows (from higher order bits to lower order bits):\n     *\n     * 8 bits - Collateral Token (encoded by its unsigned integer index in the TokenRegistry contract)\n     * 92 bits - Collateral Amount (encoded as an unsigned integer)\n     * 8 bits - Grace Period* Length (encoded as an unsigned integer)\n     *\n     * * = The \"Grace\" Period is the number of days a debtor has between\n     *      when they fall behind on an expected payment and when their collateral\n     *      can be seized by the creditor.\n     */\n    function unpackCollateralParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (uint, uint, uint)\n    {\n        // The first byte of the 108 reserved bits represents the collateral token.\n        bytes32 collateralTokenIndexShifted =\n            parameters & 0x0000000000000000000000000000000000000ff0000000000000000000000000;\n        // The subsequent 92 bits represents the collateral amount, as denominated in the above token.\n        bytes32 collateralAmountShifted =\n            parameters & 0x000000000000000000000000000000000000000fffffffffffffffffffffff00;\n\n        // We bit-shift these values, respectively, 100 bits and 8 bits right using\n        // mathematical operations, so that their 32 byte integer counterparts\n        // correspond to the intended values packed in the 32 byte string\n        uint collateralTokenIndex = uint(collateralTokenIndexShifted) / 2 ** 100;\n        uint collateralAmount = uint(collateralAmountShifted) / 2 ** 8;\n\n        // The last byte of the parameters represents the \"grace period\" of the loan,\n        // as defined in terms of days.\n        // Since this value takes the rightmost place in the parameters string,\n        // we do not need to bit-shift it.\n        bytes32 gracePeriodInDays =\n            parameters & 0x00000000000000000000000000000000000000000000000000000000000000ff;\n\n        return (\n            collateralTokenIndex,\n            collateralAmount,\n            uint(gracePeriodInDays)\n        );\n    }\n\n    function timestampAdjustedForGracePeriod(uint gracePeriodInDays)\n        public\n        view\n        returns (uint)\n    {\n        return block.timestamp.sub(\n            SECONDS_IN_DAY.mul(gracePeriodInDays)\n        );\n    }\n\n    function retrieveCollateralParameters(bytes32 agreementId)\n        internal\n        view\n        returns (address _collateralToken, uint _collateralAmount, uint _gracePeriodInDays)\n    {\n        address termsContract;\n        bytes32 termsContractParameters;\n\n        // Pull the terms contract and associated parameters for the agreement\n        (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);\n\n        // Assert agreement specifies this contract as its terms contract\n        require(termsContract == address(this));\n\n        uint collateralTokenIndex;\n        uint collateralAmount;\n        uint gracePeriodInDays;\n\n        // Unpack terms contract parameters in order to get collateralization-specific params\n        (collateralTokenIndex, collateralAmount, gracePeriodInDays) =\n            unpackCollateralParametersFromBytes(termsContractParameters);\n\n        // Resolve address of token associated with this agreement in token registry\n        address collateralToken = tokenRegistry.getTokenAddressByIndex(collateralTokenIndex);\n\n        return (\n            collateralToken,\n            collateralAmount,\n            gracePeriodInDays\n        );\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
      "exportedSymbols": {
        "Collateralized": [
          2851
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 2323,
        "name": "PragmaDirective",
        "src": "584:23:7"
      },
      {
        "attributes": {
          "SourceUnit": 5436,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 2852,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2324,
        "name": "ImportDirective",
        "src": "609:55:7"
      },
      {
        "attributes": {
          "SourceUnit": 5535,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2852,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2325,
        "name": "ImportDirective",
        "src": "665:59:7"
      },
      {
        "attributes": {
          "SourceUnit": 2107,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 2852,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2326,
        "name": "ImportDirective",
        "src": "726:30:7"
      },
      {
        "attributes": {
          "SourceUnit": 1665,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 2852,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2327,
        "name": "ImportDirective",
        "src": "757:29:7"
      },
      {
        "attributes": {
          "SourceUnit": 2239,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
          "file": "../TokenRegistry.sol",
          "scope": 2852,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2328,
        "name": "ImportDirective",
        "src": "787:30:7"
      },
      {
        "attributes": {
          "contractDependencies": [
            2106
          ],
          "contractKind": "contract",
          "documentation": "Abstract semi-implemented interface for generic collateralized terms contract.\n * NOTE: Terms contracts that inherit from Collateralized.sol must adhere to the following constraints\n     1. They reserve the lowest order 108 bits of their terms contract parameters\n        for collateralization-specific parameters.\n     2. They implement the abstract `getTermEndTimestamp` function.\n     3. The expected repayment value and value repaid to date *MUST* monotonically increase\n        over time -- i.e. `x < x' <=> getExpectedRepaymentValue(x) < getExpectedRepaymentValue(x')`\n * Authors (in no particular order): nadavhollander, saturnial, jdkanani",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2851,
            2106
          ],
          "name": "Collateralized",
          "scope": 2852
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TermsContract",
                  "referencedDeclaration": 2106,
                  "type": "contract TermsContract"
                },
                "id": 2329,
                "name": "UserDefinedTypeName",
                "src": "1527:13:7"
              }
            ],
            "id": 2330,
            "name": "InheritanceSpecifier",
            "src": "1527:13:7"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 5435,
                  "type": "library SafeMath"
                },
                "id": 2331,
                "name": "UserDefinedTypeName",
                "src": "1553:8:7"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2332,
                "name": "ElementaryTypeName",
                "src": "1566:4:7"
              }
            ],
            "id": 2333,
            "name": "UsingForDirective",
            "src": "1547:24:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernelAddress",
              "scope": 2851,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 2334,
                "name": "ElementaryTypeName",
                "src": "1577:7:7"
              }
            ],
            "id": 2335,
            "name": "VariableDeclaration",
            "src": "1577:32:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 2851,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 1664,
                  "type": "contract DebtRegistry"
                },
                "id": 2336,
                "name": "UserDefinedTypeName",
                "src": "1616:12:7"
              }
            ],
            "id": 2337,
            "name": "VariableDeclaration",
            "src": "1616:32:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenRegistry",
              "scope": 2851,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract TokenRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenRegistry",
                  "referencedDeclaration": 2238,
                  "type": "contract TokenRegistry"
                },
                "id": 2338,
                "name": "UserDefinedTypeName",
                "src": "1654:13:7"
              }
            ],
            "id": 2339,
            "name": "VariableDeclaration",
            "src": "1654:34:7"
          },
          {
            "attributes": {
              "constant": false,
              "name": "agreementToCollateralizer",
              "scope": 2851,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2340,
                    "name": "ElementaryTypeName",
                    "src": "1703:7:7"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 2341,
                    "name": "ElementaryTypeName",
                    "src": "1714:7:7"
                  }
                ],
                "id": 2342,
                "name": "Mapping",
                "src": "1695:27:7"
              }
            ],
            "id": 2343,
            "name": "VariableDeclaration",
            "src": "1695:60:7"
          },
          {
            "attributes": {
              "constant": true,
              "name": "SECONDS_IN_DAY",
              "scope": 2851,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2344,
                "name": "ElementaryTypeName",
                "src": "1762:4:7"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_86400_by_1",
                    "typeString": "int_const 86400"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "int_const 86400"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_rational_1440_by_1",
                        "typeString": "int_const 1440"
                      },
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "operator": "*",
                      "type": "int_const 1440"
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "3234",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 24",
                          "value": "24"
                        },
                        "id": 2345,
                        "name": "Literal",
                        "src": "1800:2:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "3630",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "number",
                          "type": "int_const 60",
                          "value": "60"
                        },
                        "id": 2346,
                        "name": "Literal",
                        "src": "1803:2:7"
                      }
                    ],
                    "id": 2347,
                    "name": "BinaryOperation",
                    "src": "1800:5:7"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 2348,
                    "name": "Literal",
                    "src": "1806:2:7"
                  }
                ],
                "id": 2349,
                "name": "BinaryOperation",
                "src": "1800:8:7"
              }
            ],
            "id": 2350,
            "name": "VariableDeclaration",
            "src": "1762:46:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CollateralLocked"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementID",
                      "scope": 2358,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2351,
                        "name": "ElementaryTypeName",
                        "src": "1847:7:7"
                      }
                    ],
                    "id": 2352,
                    "name": "VariableDeclaration",
                    "src": "1847:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2358,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2353,
                        "name": "ElementaryTypeName",
                        "src": "1884:7:7"
                      }
                    ],
                    "id": 2354,
                    "name": "VariableDeclaration",
                    "src": "1884:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2358,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2355,
                        "name": "ElementaryTypeName",
                        "src": "1907:4:7"
                      }
                    ],
                    "id": 2356,
                    "name": "VariableDeclaration",
                    "src": "1907:11:7"
                  }
                ],
                "id": 2357,
                "name": "ParameterList",
                "src": "1837:87:7"
              }
            ],
            "id": 2358,
            "name": "EventDefinition",
            "src": "1815:110:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CollateralReturned"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementID",
                      "scope": 2368,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2359,
                        "name": "ElementaryTypeName",
                        "src": "1965:7:7"
                      }
                    ],
                    "id": 2360,
                    "name": "VariableDeclaration",
                    "src": "1965:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "collateralizer",
                      "scope": 2368,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2361,
                        "name": "ElementaryTypeName",
                        "src": "2002:7:7"
                      }
                    ],
                    "id": 2362,
                    "name": "VariableDeclaration",
                    "src": "2002:30:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2368,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2363,
                        "name": "ElementaryTypeName",
                        "src": "2042:7:7"
                      }
                    ],
                    "id": 2364,
                    "name": "VariableDeclaration",
                    "src": "2042:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2368,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2365,
                        "name": "ElementaryTypeName",
                        "src": "2065:4:7"
                      }
                    ],
                    "id": 2366,
                    "name": "VariableDeclaration",
                    "src": "2065:11:7"
                  }
                ],
                "id": 2367,
                "name": "ParameterList",
                "src": "1955:127:7"
              }
            ],
            "id": 2368,
            "name": "EventDefinition",
            "src": "1931:152:7"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "CollateralSeized"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementID",
                      "scope": 2378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2369,
                        "name": "ElementaryTypeName",
                        "src": "2121:7:7"
                      }
                    ],
                    "id": 2370,
                    "name": "VariableDeclaration",
                    "src": "2121:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "beneficiary",
                      "scope": 2378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2371,
                        "name": "ElementaryTypeName",
                        "src": "2158:7:7"
                      }
                    ],
                    "id": 2372,
                    "name": "VariableDeclaration",
                    "src": "2158:27:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2373,
                        "name": "ElementaryTypeName",
                        "src": "2195:7:7"
                      }
                    ],
                    "id": 2374,
                    "name": "VariableDeclaration",
                    "src": "2195:13:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2378,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2375,
                        "name": "ElementaryTypeName",
                        "src": "2218:4:7"
                      }
                    ],
                    "id": 2376,
                    "name": "VariableDeclaration",
                    "src": "2218:11:7"
                  }
                ],
                "id": 2377,
                "name": "ParameterList",
                "src": "2111:124:7"
              }
            ],
            "id": 2378,
            "name": "EventDefinition",
            "src": "2089:147:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "Collateralized",
              "payable": false,
              "scope": 2851,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtKernel",
                      "scope": 2404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2379,
                        "name": "ElementaryTypeName",
                        "src": "2275:7:7"
                      }
                    ],
                    "id": 2380,
                    "name": "VariableDeclaration",
                    "src": "2275:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 2404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2381,
                        "name": "ElementaryTypeName",
                        "src": "2304:7:7"
                      }
                    ],
                    "id": 2382,
                    "name": "VariableDeclaration",
                    "src": "2304:21:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenRegistry",
                      "scope": 2404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2383,
                        "name": "ElementaryTypeName",
                        "src": "2335:7:7"
                      }
                    ],
                    "id": 2384,
                    "name": "VariableDeclaration",
                    "src": "2335:22:7"
                  }
                ],
                "id": 2385,
                "name": "ParameterList",
                "src": "2265:98:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2386,
                "name": "ParameterList",
                "src": "2371:0:7"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2335,
                              "type": "address",
                              "value": "debtKernelAddress"
                            },
                            "id": 2387,
                            "name": "Identifier",
                            "src": "2381:17:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2380,
                              "type": "address",
                              "value": "_debtKernel"
                            },
                            "id": 2388,
                            "name": "Identifier",
                            "src": "2401:11:7"
                          }
                        ],
                        "id": 2389,
                        "name": "Assignment",
                        "src": "2381:31:7"
                      }
                    ],
                    "id": 2390,
                    "name": "ExpressionStatement",
                    "src": "2381:31:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2337,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 2391,
                            "name": "Identifier",
                            "src": "2422:12:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1664,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2392,
                                "name": "Identifier",
                                "src": "2437:12:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2382,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 2393,
                                "name": "Identifier",
                                "src": "2450:13:7"
                              }
                            ],
                            "id": 2394,
                            "name": "FunctionCall",
                            "src": "2437:27:7"
                          }
                        ],
                        "id": 2395,
                        "name": "Assignment",
                        "src": "2422:42:7"
                      }
                    ],
                    "id": 2396,
                    "name": "ExpressionStatement",
                    "src": "2422:42:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "contract TokenRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2339,
                              "type": "contract TokenRegistry",
                              "value": "tokenRegistry"
                            },
                            "id": 2397,
                            "name": "Identifier",
                            "src": "2474:13:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "contract TokenRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2238,
                                  "type": "type(contract TokenRegistry)",
                                  "value": "TokenRegistry"
                                },
                                "id": 2398,
                                "name": "Identifier",
                                "src": "2490:13:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2384,
                                  "type": "address",
                                  "value": "_tokenRegistry"
                                },
                                "id": 2399,
                                "name": "Identifier",
                                "src": "2504:14:7"
                              }
                            ],
                            "id": 2400,
                            "name": "FunctionCall",
                            "src": "2490:29:7"
                          }
                        ],
                        "id": 2401,
                        "name": "Assignment",
                        "src": "2474:45:7"
                      }
                    ],
                    "id": 2402,
                    "name": "ExpressionStatement",
                    "src": "2474:45:7"
                  }
                ],
                "id": 2403,
                "name": "Block",
                "src": "2371:155:7"
              }
            ],
            "id": 2404,
            "name": "FunctionDefinition",
            "src": "2242:284:7"
          },
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTermEndTimestamp",
              "payable": false,
              "scope": 2851,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2411,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2405,
                        "name": "ElementaryTypeName",
                        "src": "2849:7:7"
                      }
                    ],
                    "id": 2406,
                    "name": "VariableDeclaration",
                    "src": "2849:19:7"
                  }
                ],
                "id": 2407,
                "name": "ParameterList",
                "src": "2839:35:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_timestamp",
                      "scope": 2411,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2408,
                        "name": "ElementaryTypeName",
                        "src": "2896:4:7"
                      }
                    ],
                    "id": 2409,
                    "name": "VariableDeclaration",
                    "src": "2896:15:7"
                  }
                ],
                "id": 2410,
                "name": "ParameterList",
                "src": "2895:17:7"
              }
            ],
            "id": 2411,
            "name": "FunctionDefinition",
            "src": "2811:102:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerTermStart",
              "payable": false,
              "scope": 2851,
              "stateMutability": "nonpayable",
              "superFunction": 2074,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2524,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2412,
                        "name": "ElementaryTypeName",
                        "src": "3395:7:7"
                      }
                    ],
                    "id": 2413,
                    "name": "VariableDeclaration",
                    "src": "3395:19:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "collateralizer",
                      "scope": 2524,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2414,
                        "name": "ElementaryTypeName",
                        "src": "3416:7:7"
                      }
                    ],
                    "id": 2415,
                    "name": "VariableDeclaration",
                    "src": "3416:22:7"
                  }
                ],
                "id": 2416,
                "name": "ParameterList",
                "src": "3394:45:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 2524,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 2417,
                        "name": "ElementaryTypeName",
                        "src": "3472:4:7"
                      }
                    ],
                    "id": 2418,
                    "name": "VariableDeclaration",
                    "src": "3472:13:7"
                  }
                ],
                "id": 2419,
                "name": "ParameterList",
                "src": "3471:15:7"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2420,
                            "name": "Identifier",
                            "src": "3501:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5578,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2421,
                                    "name": "Identifier",
                                    "src": "3509:3:7"
                                  }
                                ],
                                "id": 2422,
                                "name": "MemberAccess",
                                "src": "3509:10:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2335,
                                  "type": "address",
                                  "value": "debtKernelAddress"
                                },
                                "id": 2423,
                                "name": "Identifier",
                                "src": "3523:17:7"
                              }
                            ],
                            "id": 2424,
                            "name": "BinaryOperation",
                            "src": "3509:31:7"
                          }
                        ],
                        "id": 2425,
                        "name": "FunctionCall",
                        "src": "3501:40:7"
                      }
                    ],
                    "id": 2426,
                    "name": "ExpressionStatement",
                    "src": "3501:40:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralToken",
                          "scope": 2524,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2427,
                            "name": "ElementaryTypeName",
                            "src": "3668:7:7"
                          }
                        ],
                        "id": 2428,
                        "name": "VariableDeclaration",
                        "src": "3668:23:7"
                      }
                    ],
                    "id": 2429,
                    "name": "VariableDeclarationStatement",
                    "src": "3668:23:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralAmount",
                          "scope": 2524,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2430,
                            "name": "ElementaryTypeName",
                            "src": "3751:4:7"
                          }
                        ],
                        "id": 2431,
                        "name": "VariableDeclaration",
                        "src": "3751:21:7"
                      }
                    ],
                    "id": 2432,
                    "name": "VariableDeclarationStatement",
                    "src": "3751:21:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "gracePeriodInDays",
                          "scope": 2524,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2433,
                            "name": "ElementaryTypeName",
                            "src": "3914:4:7"
                          }
                        ],
                        "id": 2434,
                        "name": "VariableDeclaration",
                        "src": "3914:22:7"
                      }
                    ],
                    "id": 2435,
                    "name": "VariableDeclarationStatement",
                    "src": "3914:22:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(address,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2428,
                                  "type": "address",
                                  "value": "collateralToken"
                                },
                                "id": 2436,
                                "name": "Identifier",
                                "src": "3948:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2431,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2437,
                                "name": "Identifier",
                                "src": "3965:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2434,
                                  "type": "uint256",
                                  "value": "gracePeriodInDays"
                                },
                                "id": 2438,
                                "name": "Identifier",
                                "src": "3983:17:7"
                              }
                            ],
                            "id": 2439,
                            "name": "TupleExpression",
                            "src": "3947:54:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(address,uint256,uint256)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2850,
                                  "type": "function (bytes32) view returns (address,uint256,uint256)",
                                  "value": "retrieveCollateralParameters"
                                },
                                "id": 2440,
                                "name": "Identifier",
                                "src": "4004:28:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2413,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2441,
                                "name": "Identifier",
                                "src": "4033:11:7"
                              }
                            ],
                            "id": 2442,
                            "name": "FunctionCall",
                            "src": "4004:41:7"
                          }
                        ],
                        "id": 2443,
                        "name": "Assignment",
                        "src": "3947:98:7"
                      }
                    ],
                    "id": 2444,
                    "name": "ExpressionStatement",
                    "src": "3947:98:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2445,
                            "name": "Identifier",
                            "src": "4056:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2431,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2446,
                                "name": "Identifier",
                                "src": "4064:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2447,
                                "name": "Literal",
                                "src": "4083:1:7"
                              }
                            ],
                            "id": 2448,
                            "name": "BinaryOperation",
                            "src": "4064:20:7"
                          }
                        ],
                        "id": 2449,
                        "name": "FunctionCall",
                        "src": "4056:29:7"
                      }
                    ],
                    "id": 2450,
                    "name": "ExpressionStatement",
                    "src": "4056:29:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2451,
                            "name": "Identifier",
                            "src": "4095:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2428,
                                  "type": "address",
                                  "value": "collateralToken"
                                },
                                "id": 2452,
                                "name": "Identifier",
                                "src": "4103:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2453,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4122:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2454,
                                    "name": "Literal",
                                    "src": "4130:1:7"
                                  }
                                ],
                                "id": 2455,
                                "name": "FunctionCall",
                                "src": "4122:10:7"
                              }
                            ],
                            "id": 2456,
                            "name": "BinaryOperation",
                            "src": "4103:29:7"
                          }
                        ],
                        "id": 2457,
                        "name": "FunctionCall",
                        "src": "4095:38:7"
                      }
                    ],
                    "id": 2458,
                    "name": "ExpressionStatement",
                    "src": "4095:38:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2459,
                            "name": "Identifier",
                            "src": "4602:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2343,
                                      "type": "mapping(bytes32 => address)",
                                      "value": "agreementToCollateralizer"
                                    },
                                    "id": 2460,
                                    "name": "Identifier",
                                    "src": "4610:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2413,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2461,
                                    "name": "Identifier",
                                    "src": "4636:11:7"
                                  }
                                ],
                                "id": 2462,
                                "name": "IndexAccess",
                                "src": "4610:38:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2463,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4652:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2464,
                                    "name": "Literal",
                                    "src": "4660:1:7"
                                  }
                                ],
                                "id": 2465,
                                "name": "FunctionCall",
                                "src": "4652:10:7"
                              }
                            ],
                            "id": 2466,
                            "name": "BinaryOperation",
                            "src": "4610:52:7"
                          }
                        ],
                        "id": 2467,
                        "name": "FunctionCall",
                        "src": "4602:61:7"
                      }
                    ],
                    "id": 2468,
                    "name": "ExpressionStatement",
                    "src": "4602:61:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2470
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "erc20token",
                          "scope": 2524,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "contract ERC20",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "ERC20",
                              "referencedDeclaration": 5534,
                              "type": "contract ERC20"
                            },
                            "id": 2469,
                            "name": "UserDefinedTypeName",
                            "src": "4674:5:7"
                          }
                        ],
                        "id": 2470,
                        "name": "VariableDeclaration",
                        "src": "4674:16:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "contract ERC20",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5534,
                              "type": "type(contract ERC20)",
                              "value": "ERC20"
                            },
                            "id": 2471,
                            "name": "Identifier",
                            "src": "4693:5:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2428,
                              "type": "address",
                              "value": "collateralToken"
                            },
                            "id": 2472,
                            "name": "Identifier",
                            "src": "4699:15:7"
                          }
                        ],
                        "id": 2473,
                        "name": "FunctionCall",
                        "src": "4693:22:7"
                      }
                    ],
                    "id": 2474,
                    "name": "VariableDeclarationStatement",
                    "src": "4674:41:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2476
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "custodian",
                          "scope": 2524,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2475,
                            "name": "ElementaryTypeName",
                            "src": "4725:7:7"
                          }
                        ],
                        "id": 2476,
                        "name": "VariableDeclaration",
                        "src": "4725:17:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_contract$_Collateralized_$2851",
                                  "typeString": "contract Collateralized"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(address)",
                              "value": "address"
                            },
                            "id": 2477,
                            "name": "ElementaryTypeNameExpression",
                            "src": "4745:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5623,
                              "type": "contract Collateralized",
                              "value": "this"
                            },
                            "id": 2478,
                            "name": "Identifier",
                            "src": "4753:4:7"
                          }
                        ],
                        "id": 2479,
                        "name": "FunctionCall",
                        "src": "4745:13:7"
                      }
                    ],
                    "id": 2480,
                    "name": "VariableDeclarationStatement",
                    "src": "4725:33:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2481,
                            "name": "Identifier",
                            "src": "4920:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "balanceOf",
                                      "referencedDeclaration": 5548,
                                      "type": "function (address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2470,
                                          "type": "contract ERC20",
                                          "value": "erc20token"
                                        },
                                        "id": 2482,
                                        "name": "Identifier",
                                        "src": "4928:10:7"
                                      }
                                    ],
                                    "id": 2483,
                                    "name": "MemberAccess",
                                    "src": "4928:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2415,
                                      "type": "address",
                                      "value": "collateralizer"
                                    },
                                    "id": 2484,
                                    "name": "Identifier",
                                    "src": "4949:14:7"
                                  }
                                ],
                                "id": 2485,
                                "name": "FunctionCall",
                                "src": "4928:36:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2431,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2486,
                                "name": "Identifier",
                                "src": "4968:16:7"
                              }
                            ],
                            "id": 2487,
                            "name": "BinaryOperation",
                            "src": "4928:56:7"
                          }
                        ],
                        "id": 2488,
                        "name": "FunctionCall",
                        "src": "4920:65:7"
                      }
                    ],
                    "id": 2489,
                    "name": "ExpressionStatement",
                    "src": "4920:65:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2490,
                            "name": "Identifier",
                            "src": "5166:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "allowance",
                                      "referencedDeclaration": 5505,
                                      "type": "function (address,address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2470,
                                          "type": "contract ERC20",
                                          "value": "erc20token"
                                        },
                                        "id": 2491,
                                        "name": "Identifier",
                                        "src": "5174:10:7"
                                      }
                                    ],
                                    "id": 2492,
                                    "name": "MemberAccess",
                                    "src": "5174:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2415,
                                      "type": "address",
                                      "value": "collateralizer"
                                    },
                                    "id": 2493,
                                    "name": "Identifier",
                                    "src": "5195:14:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2476,
                                      "type": "address",
                                      "value": "custodian"
                                    },
                                    "id": 2494,
                                    "name": "Identifier",
                                    "src": "5211:9:7"
                                  }
                                ],
                                "id": 2495,
                                "name": "FunctionCall",
                                "src": "5174:47:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2431,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2496,
                                "name": "Identifier",
                                "src": "5225:16:7"
                              }
                            ],
                            "id": 2497,
                            "name": "BinaryOperation",
                            "src": "5174:67:7"
                          }
                        ],
                        "id": 2498,
                        "name": "FunctionCall",
                        "src": "5166:76:7"
                      }
                    ],
                    "id": 2499,
                    "name": "ExpressionStatement",
                    "src": "5166:76:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2343,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "agreementToCollateralizer"
                                },
                                "id": 2500,
                                "name": "Identifier",
                                "src": "5375:25:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2413,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2501,
                                "name": "Identifier",
                                "src": "5401:11:7"
                              }
                            ],
                            "id": 2502,
                            "name": "IndexAccess",
                            "src": "5375:38:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2415,
                              "type": "address",
                              "value": "collateralizer"
                            },
                            "id": 2503,
                            "name": "Identifier",
                            "src": "5416:14:7"
                          }
                        ],
                        "id": 2504,
                        "name": "Assignment",
                        "src": "5375:55:7"
                      }
                    ],
                    "id": 2505,
                    "name": "ExpressionStatement",
                    "src": "5375:55:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2506,
                            "name": "Identifier",
                            "src": "5518:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transferFrom",
                                  "referencedDeclaration": 5516,
                                  "type": "function (address,address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2470,
                                      "type": "contract ERC20",
                                      "value": "erc20token"
                                    },
                                    "id": 2507,
                                    "name": "Identifier",
                                    "src": "5526:10:7"
                                  }
                                ],
                                "id": 2508,
                                "name": "MemberAccess",
                                "src": "5526:23:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2415,
                                  "type": "address",
                                  "value": "collateralizer"
                                },
                                "id": 2509,
                                "name": "Identifier",
                                "src": "5563:14:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2476,
                                  "type": "address",
                                  "value": "custodian"
                                },
                                "id": 2510,
                                "name": "Identifier",
                                "src": "5591:9:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2431,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2511,
                                "name": "Identifier",
                                "src": "5614:16:7"
                              }
                            ],
                            "id": 2512,
                            "name": "FunctionCall",
                            "src": "5526:114:7"
                          }
                        ],
                        "id": 2513,
                        "name": "FunctionCall",
                        "src": "5518:123:7"
                      }
                    ],
                    "id": 2514,
                    "name": "ExpressionStatement",
                    "src": "5518:123:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2358,
                              "type": "function (bytes32,address,uint256)",
                              "value": "CollateralLocked"
                            },
                            "id": 2515,
                            "name": "Identifier",
                            "src": "5708:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2413,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2516,
                            "name": "Identifier",
                            "src": "5725:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2428,
                              "type": "address",
                              "value": "collateralToken"
                            },
                            "id": 2517,
                            "name": "Identifier",
                            "src": "5738:15:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2431,
                              "type": "uint256",
                              "value": "collateralAmount"
                            },
                            "id": 2518,
                            "name": "Identifier",
                            "src": "5755:16:7"
                          }
                        ],
                        "id": 2519,
                        "name": "FunctionCall",
                        "src": "5708:64:7"
                      }
                    ],
                    "id": 2520,
                    "name": "ExpressionStatement",
                    "src": "5708:64:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2419
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 2521,
                        "name": "Literal",
                        "src": "5790:4:7"
                      }
                    ],
                    "id": 2522,
                    "name": "Return",
                    "src": "5783:11:7"
                  }
                ],
                "id": 2523,
                "name": "Block",
                "src": "3491:2310:7"
              }
            ],
            "id": 2524,
            "name": "FunctionDefinition",
            "src": "3368:2433:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "returnCollateral",
              "payable": false,
              "scope": 2851,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2621,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2525,
                        "name": "ElementaryTypeName",
                        "src": "6119:7:7"
                      }
                    ],
                    "id": 2526,
                    "name": "VariableDeclaration",
                    "src": "6119:19:7"
                  }
                ],
                "id": 2527,
                "name": "ParameterList",
                "src": "6109:35:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2528,
                "name": "ParameterList",
                "src": "6164:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralToken",
                          "scope": 2621,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2529,
                            "name": "ElementaryTypeName",
                            "src": "6290:7:7"
                          }
                        ],
                        "id": 2530,
                        "name": "VariableDeclaration",
                        "src": "6290:23:7"
                      }
                    ],
                    "id": 2531,
                    "name": "VariableDeclarationStatement",
                    "src": "6290:23:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralAmount",
                          "scope": 2621,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2532,
                            "name": "ElementaryTypeName",
                            "src": "6373:4:7"
                          }
                        ],
                        "id": 2533,
                        "name": "VariableDeclaration",
                        "src": "6373:21:7"
                      }
                    ],
                    "id": 2534,
                    "name": "VariableDeclarationStatement",
                    "src": "6373:21:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "gracePeriodInDays",
                          "scope": 2621,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2535,
                            "name": "ElementaryTypeName",
                            "src": "6536:4:7"
                          }
                        ],
                        "id": 2536,
                        "name": "VariableDeclaration",
                        "src": "6536:22:7"
                      }
                    ],
                    "id": 2537,
                    "name": "VariableDeclarationStatement",
                    "src": "6536:22:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(address,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2530,
                                  "type": "address",
                                  "value": "collateralToken"
                                },
                                "id": 2538,
                                "name": "Identifier",
                                "src": "6570:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2533,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2539,
                                "name": "Identifier",
                                "src": "6587:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2536,
                                  "type": "uint256",
                                  "value": "gracePeriodInDays"
                                },
                                "id": 2540,
                                "name": "Identifier",
                                "src": "6605:17:7"
                              }
                            ],
                            "id": 2541,
                            "name": "TupleExpression",
                            "src": "6569:54:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(address,uint256,uint256)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2850,
                                  "type": "function (bytes32) view returns (address,uint256,uint256)",
                                  "value": "retrieveCollateralParameters"
                                },
                                "id": 2542,
                                "name": "Identifier",
                                "src": "6626:28:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2526,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2543,
                                "name": "Identifier",
                                "src": "6655:11:7"
                              }
                            ],
                            "id": 2544,
                            "name": "FunctionCall",
                            "src": "6626:41:7"
                          }
                        ],
                        "id": 2545,
                        "name": "Assignment",
                        "src": "6569:98:7"
                      }
                    ],
                    "id": 2546,
                    "name": "ExpressionStatement",
                    "src": "6569:98:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2547,
                            "name": "Identifier",
                            "src": "6752:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2533,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2548,
                                "name": "Identifier",
                                "src": "6760:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2549,
                                "name": "Literal",
                                "src": "6779:1:7"
                              }
                            ],
                            "id": 2550,
                            "name": "BinaryOperation",
                            "src": "6760:20:7"
                          }
                        ],
                        "id": 2551,
                        "name": "FunctionCall",
                        "src": "6752:29:7"
                      }
                    ],
                    "id": 2552,
                    "name": "ExpressionStatement",
                    "src": "6752:29:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2553,
                            "name": "Identifier",
                            "src": "6791:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2530,
                                  "type": "address",
                                  "value": "collateralToken"
                                },
                                "id": 2554,
                                "name": "Identifier",
                                "src": "6799:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2555,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "6818:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2556,
                                    "name": "Literal",
                                    "src": "6826:1:7"
                                  }
                                ],
                                "id": 2557,
                                "name": "FunctionCall",
                                "src": "6818:10:7"
                              }
                            ],
                            "id": 2558,
                            "name": "BinaryOperation",
                            "src": "6799:29:7"
                          }
                        ],
                        "id": 2559,
                        "name": "FunctionCall",
                        "src": "6791:38:7"
                      }
                    ],
                    "id": 2560,
                    "name": "ExpressionStatement",
                    "src": "6791:38:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2561,
                            "name": "Identifier",
                            "src": "7083:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2343,
                                      "type": "mapping(bytes32 => address)",
                                      "value": "agreementToCollateralizer"
                                    },
                                    "id": 2562,
                                    "name": "Identifier",
                                    "src": "7091:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2563,
                                    "name": "Identifier",
                                    "src": "7117:11:7"
                                  }
                                ],
                                "id": 2564,
                                "name": "IndexAccess",
                                "src": "7091:38:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2565,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7133:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2566,
                                    "name": "Literal",
                                    "src": "7141:1:7"
                                  }
                                ],
                                "id": 2567,
                                "name": "FunctionCall",
                                "src": "7133:10:7"
                              }
                            ],
                            "id": 2568,
                            "name": "BinaryOperation",
                            "src": "7091:52:7"
                          }
                        ],
                        "id": 2569,
                        "name": "FunctionCall",
                        "src": "7083:61:7"
                      }
                    ],
                    "id": 2570,
                    "name": "ExpressionStatement",
                    "src": "7083:61:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2571,
                            "name": "Identifier",
                            "src": "7215:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2411,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getTermEndTimestamp"
                                    },
                                    "id": 2572,
                                    "name": "Identifier",
                                    "src": "7223:19:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2573,
                                    "name": "Identifier",
                                    "src": "7243:11:7"
                                  }
                                ],
                                "id": 2574,
                                "name": "FunctionCall",
                                "src": "7223:32:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "timestamp",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5570,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2575,
                                    "name": "Identifier",
                                    "src": "7258:5:7"
                                  }
                                ],
                                "id": 2576,
                                "name": "MemberAccess",
                                "src": "7258:15:7"
                              }
                            ],
                            "id": 2577,
                            "name": "BinaryOperation",
                            "src": "7223:50:7"
                          }
                        ],
                        "id": 2578,
                        "name": "FunctionCall",
                        "src": "7215:59:7"
                      }
                    ],
                    "id": 2579,
                    "name": "ExpressionStatement",
                    "src": "7215:59:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2580,
                            "name": "Identifier",
                            "src": "7346:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2098,
                                      "type": "function (bytes32,uint256) view returns (uint256)",
                                      "value": "getExpectedRepaymentValue"
                                    },
                                    "id": 2581,
                                    "name": "Identifier",
                                    "src": "7367:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2582,
                                    "name": "Identifier",
                                    "src": "7410:11:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "timestamp",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5570,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 2583,
                                        "name": "Identifier",
                                        "src": "7439:5:7"
                                      }
                                    ],
                                    "id": 2584,
                                    "name": "MemberAccess",
                                    "src": "7439:15:7"
                                  }
                                ],
                                "id": 2585,
                                "name": "FunctionCall",
                                "src": "7367:101:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2105,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getValueRepaidToDate"
                                    },
                                    "id": 2586,
                                    "name": "Identifier",
                                    "src": "7472:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2587,
                                    "name": "Identifier",
                                    "src": "7493:11:7"
                                  }
                                ],
                                "id": 2588,
                                "name": "FunctionCall",
                                "src": "7472:33:7"
                              }
                            ],
                            "id": 2589,
                            "name": "BinaryOperation",
                            "src": "7367:138:7"
                          }
                        ],
                        "id": 2590,
                        "name": "FunctionCall",
                        "src": "7346:169:7"
                      }
                    ],
                    "id": 2591,
                    "name": "ExpressionStatement",
                    "src": "7346:169:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2593
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralizer",
                          "scope": 2621,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2592,
                            "name": "ElementaryTypeName",
                            "src": "7581:7:7"
                          }
                        ],
                        "id": 2593,
                        "name": "VariableDeclaration",
                        "src": "7581:22:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2343,
                              "type": "mapping(bytes32 => address)",
                              "value": "agreementToCollateralizer"
                            },
                            "id": 2594,
                            "name": "Identifier",
                            "src": "7606:25:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2526,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2595,
                            "name": "Identifier",
                            "src": "7632:11:7"
                          }
                        ],
                        "id": 2596,
                        "name": "IndexAccess",
                        "src": "7606:38:7"
                      }
                    ],
                    "id": 2597,
                    "name": "VariableDeclarationStatement",
                    "src": "7581:63:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2343,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "agreementToCollateralizer"
                                },
                                "id": 2598,
                                "name": "Identifier",
                                "src": "7775:25:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2526,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2599,
                                "name": "Identifier",
                                "src": "7801:11:7"
                              }
                            ],
                            "id": 2600,
                            "name": "IndexAccess",
                            "src": "7775:38:7"
                          }
                        ],
                        "id": 2601,
                        "name": "UnaryOperation",
                        "src": "7768:45:7"
                      }
                    ],
                    "id": 2602,
                    "name": "ExpressionStatement",
                    "src": "7768:45:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2603,
                            "name": "Identifier",
                            "src": "7919:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transfer",
                                  "referencedDeclaration": 5557,
                                  "type": "function (address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "contract ERC20",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5534,
                                          "type": "type(contract ERC20)",
                                          "value": "ERC20"
                                        },
                                        "id": 2604,
                                        "name": "Identifier",
                                        "src": "7940:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2530,
                                          "type": "address",
                                          "value": "collateralToken"
                                        },
                                        "id": 2605,
                                        "name": "Identifier",
                                        "src": "7946:15:7"
                                      }
                                    ],
                                    "id": 2606,
                                    "name": "FunctionCall",
                                    "src": "7940:22:7"
                                  }
                                ],
                                "id": 2607,
                                "name": "MemberAccess",
                                "src": "7940:31:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2593,
                                  "type": "address",
                                  "value": "collateralizer"
                                },
                                "id": 2608,
                                "name": "Identifier",
                                "src": "7989:14:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2533,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2609,
                                "name": "Identifier",
                                "src": "8021:16:7"
                              }
                            ],
                            "id": 2610,
                            "name": "FunctionCall",
                            "src": "7940:111:7"
                          }
                        ],
                        "id": 2611,
                        "name": "FunctionCall",
                        "src": "7919:142:7"
                      }
                    ],
                    "id": 2612,
                    "name": "ExpressionStatement",
                    "src": "7919:142:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2368,
                              "type": "function (bytes32,address,address,uint256)",
                              "value": "CollateralReturned"
                            },
                            "id": 2613,
                            "name": "Identifier",
                            "src": "8105:18:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2526,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2614,
                            "name": "Identifier",
                            "src": "8137:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2593,
                              "type": "address",
                              "value": "collateralizer"
                            },
                            "id": 2615,
                            "name": "Identifier",
                            "src": "8162:14:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2530,
                              "type": "address",
                              "value": "collateralToken"
                            },
                            "id": 2616,
                            "name": "Identifier",
                            "src": "8190:15:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2533,
                              "type": "uint256",
                              "value": "collateralAmount"
                            },
                            "id": 2617,
                            "name": "Identifier",
                            "src": "8219:16:7"
                          }
                        ],
                        "id": 2618,
                        "name": "FunctionCall",
                        "src": "8105:140:7"
                      }
                    ],
                    "id": 2619,
                    "name": "ExpressionStatement",
                    "src": "8105:140:7"
                  }
                ],
                "id": 2620,
                "name": "Block",
                "src": "6164:2088:7"
              }
            ],
            "id": 2621,
            "name": "FunctionDefinition",
            "src": "6084:2168:7"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "seizeCollateral",
              "payable": false,
              "scope": 2851,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2711,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2622,
                        "name": "ElementaryTypeName",
                        "src": "8546:7:7"
                      }
                    ],
                    "id": 2623,
                    "name": "VariableDeclaration",
                    "src": "8546:19:7"
                  }
                ],
                "id": 2624,
                "name": "ParameterList",
                "src": "8536:35:7"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2625,
                "name": "ParameterList",
                "src": "8591:0:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralToken",
                          "scope": 2711,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2626,
                            "name": "ElementaryTypeName",
                            "src": "8717:7:7"
                          }
                        ],
                        "id": 2627,
                        "name": "VariableDeclaration",
                        "src": "8717:23:7"
                      }
                    ],
                    "id": 2628,
                    "name": "VariableDeclarationStatement",
                    "src": "8717:23:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralAmount",
                          "scope": 2711,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2629,
                            "name": "ElementaryTypeName",
                            "src": "8800:4:7"
                          }
                        ],
                        "id": 2630,
                        "name": "VariableDeclaration",
                        "src": "8800:21:7"
                      }
                    ],
                    "id": 2631,
                    "name": "VariableDeclarationStatement",
                    "src": "8800:21:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "gracePeriodInDays",
                          "scope": 2711,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2632,
                            "name": "ElementaryTypeName",
                            "src": "8963:4:7"
                          }
                        ],
                        "id": 2633,
                        "name": "VariableDeclaration",
                        "src": "8963:22:7"
                      }
                    ],
                    "id": 2634,
                    "name": "VariableDeclarationStatement",
                    "src": "8963:22:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(address,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2627,
                                  "type": "address",
                                  "value": "collateralToken"
                                },
                                "id": 2635,
                                "name": "Identifier",
                                "src": "8997:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2630,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2636,
                                "name": "Identifier",
                                "src": "9014:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2633,
                                  "type": "uint256",
                                  "value": "gracePeriodInDays"
                                },
                                "id": 2637,
                                "name": "Identifier",
                                "src": "9032:17:7"
                              }
                            ],
                            "id": 2638,
                            "name": "TupleExpression",
                            "src": "8996:54:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(address,uint256,uint256)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2850,
                                  "type": "function (bytes32) view returns (address,uint256,uint256)",
                                  "value": "retrieveCollateralParameters"
                                },
                                "id": 2639,
                                "name": "Identifier",
                                "src": "9053:28:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2623,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2640,
                                "name": "Identifier",
                                "src": "9082:11:7"
                              }
                            ],
                            "id": 2641,
                            "name": "FunctionCall",
                            "src": "9053:41:7"
                          }
                        ],
                        "id": 2642,
                        "name": "Assignment",
                        "src": "8996:98:7"
                      }
                    ],
                    "id": 2643,
                    "name": "ExpressionStatement",
                    "src": "8996:98:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2644,
                            "name": "Identifier",
                            "src": "9179:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2630,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2645,
                                "name": "Identifier",
                                "src": "9187:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 2646,
                                "name": "Literal",
                                "src": "9206:1:7"
                              }
                            ],
                            "id": 2647,
                            "name": "BinaryOperation",
                            "src": "9187:20:7"
                          }
                        ],
                        "id": 2648,
                        "name": "FunctionCall",
                        "src": "9179:29:7"
                      }
                    ],
                    "id": 2649,
                    "name": "ExpressionStatement",
                    "src": "9179:29:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2650,
                            "name": "Identifier",
                            "src": "9218:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2627,
                                  "type": "address",
                                  "value": "collateralToken"
                                },
                                "id": 2651,
                                "name": "Identifier",
                                "src": "9226:15:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2652,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9245:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2653,
                                    "name": "Literal",
                                    "src": "9253:1:7"
                                  }
                                ],
                                "id": 2654,
                                "name": "FunctionCall",
                                "src": "9245:10:7"
                              }
                            ],
                            "id": 2655,
                            "name": "BinaryOperation",
                            "src": "9226:29:7"
                          }
                        ],
                        "id": 2656,
                        "name": "FunctionCall",
                        "src": "9218:38:7"
                      }
                    ],
                    "id": 2657,
                    "name": "ExpressionStatement",
                    "src": "9218:38:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2658,
                            "name": "Identifier",
                            "src": "9507:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2343,
                                      "type": "mapping(bytes32 => address)",
                                      "value": "agreementToCollateralizer"
                                    },
                                    "id": 2659,
                                    "name": "Identifier",
                                    "src": "9515:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2623,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2660,
                                    "name": "Identifier",
                                    "src": "9541:11:7"
                                  }
                                ],
                                "id": 2661,
                                "name": "IndexAccess",
                                "src": "9515:38:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_rational_0_by_1",
                                          "typeString": "int_const 0"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2662,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "9557:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 2663,
                                    "name": "Literal",
                                    "src": "9565:1:7"
                                  }
                                ],
                                "id": 2664,
                                "name": "FunctionCall",
                                "src": "9557:10:7"
                              }
                            ],
                            "id": 2665,
                            "name": "BinaryOperation",
                            "src": "9515:52:7"
                          }
                        ],
                        "id": 2666,
                        "name": "FunctionCall",
                        "src": "9507:61:7"
                      }
                    ],
                    "id": 2667,
                    "name": "ExpressionStatement",
                    "src": "9507:61:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2668,
                            "name": "Identifier",
                            "src": "10047:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2098,
                                      "type": "function (bytes32,uint256) view returns (uint256)",
                                      "value": "getExpectedRepaymentValue"
                                    },
                                    "id": 2669,
                                    "name": "Identifier",
                                    "src": "10068:25:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2623,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2670,
                                    "name": "Identifier",
                                    "src": "10111:11:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2785,
                                          "type": "function (uint256) view returns (uint256)",
                                          "value": "timestampAdjustedForGracePeriod"
                                        },
                                        "id": 2671,
                                        "name": "Identifier",
                                        "src": "10140:31:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2633,
                                          "type": "uint256",
                                          "value": "gracePeriodInDays"
                                        },
                                        "id": 2672,
                                        "name": "Identifier",
                                        "src": "10172:17:7"
                                      }
                                    ],
                                    "id": 2673,
                                    "name": "FunctionCall",
                                    "src": "10140:50:7"
                                  }
                                ],
                                "id": 2674,
                                "name": "FunctionCall",
                                "src": "10068:136:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2105,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getValueRepaidToDate"
                                    },
                                    "id": 2675,
                                    "name": "Identifier",
                                    "src": "10207:20:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2623,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2676,
                                    "name": "Identifier",
                                    "src": "10228:11:7"
                                  }
                                ],
                                "id": 2677,
                                "name": "FunctionCall",
                                "src": "10207:33:7"
                              }
                            ],
                            "id": 2678,
                            "name": "BinaryOperation",
                            "src": "10068:172:7"
                          }
                        ],
                        "id": 2679,
                        "name": "FunctionCall",
                        "src": "10047:203:7"
                      }
                    ],
                    "id": 2680,
                    "name": "ExpressionStatement",
                    "src": "10047:203:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2343,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "agreementToCollateralizer"
                                },
                                "id": 2681,
                                "name": "Identifier",
                                "src": "10381:25:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2623,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2682,
                                "name": "Identifier",
                                "src": "10407:11:7"
                              }
                            ],
                            "id": 2683,
                            "name": "IndexAccess",
                            "src": "10381:38:7"
                          }
                        ],
                        "id": 2684,
                        "name": "UnaryOperation",
                        "src": "10374:45:7"
                      }
                    ],
                    "id": 2685,
                    "name": "ExpressionStatement",
                    "src": "10374:45:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2687
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "beneficiary",
                          "scope": 2711,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2686,
                            "name": "ElementaryTypeName",
                            "src": "10489:7:7"
                          }
                        ],
                        "id": 2687,
                        "name": "VariableDeclaration",
                        "src": "10489:19:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getBeneficiary",
                              "referencedDeclaration": 1539,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2337,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 2688,
                                "name": "Identifier",
                                "src": "10511:12:7"
                              }
                            ],
                            "id": 2689,
                            "name": "MemberAccess",
                            "src": "10511:27:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2623,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2690,
                            "name": "Identifier",
                            "src": "10539:11:7"
                          }
                        ],
                        "id": 2691,
                        "name": "FunctionCall",
                        "src": "10511:40:7"
                      }
                    ],
                    "id": 2692,
                    "name": "VariableDeclarationStatement",
                    "src": "10489:62:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2693,
                            "name": "Identifier",
                            "src": "10649:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "transfer",
                                  "referencedDeclaration": 5557,
                                  "type": "function (address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "contract ERC20",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_address",
                                              "typeString": "address"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5534,
                                          "type": "type(contract ERC20)",
                                          "value": "ERC20"
                                        },
                                        "id": 2694,
                                        "name": "Identifier",
                                        "src": "10670:5:7"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2627,
                                          "type": "address",
                                          "value": "collateralToken"
                                        },
                                        "id": 2695,
                                        "name": "Identifier",
                                        "src": "10676:15:7"
                                      }
                                    ],
                                    "id": 2696,
                                    "name": "FunctionCall",
                                    "src": "10670:22:7"
                                  }
                                ],
                                "id": 2697,
                                "name": "MemberAccess",
                                "src": "10670:31:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2687,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2698,
                                "name": "Identifier",
                                "src": "10719:11:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2630,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2699,
                                "name": "Identifier",
                                "src": "10748:16:7"
                              }
                            ],
                            "id": 2700,
                            "name": "FunctionCall",
                            "src": "10670:108:7"
                          }
                        ],
                        "id": 2701,
                        "name": "FunctionCall",
                        "src": "10649:139:7"
                      }
                    ],
                    "id": 2702,
                    "name": "ExpressionStatement",
                    "src": "10649:139:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2378,
                              "type": "function (bytes32,address,address,uint256)",
                              "value": "CollateralSeized"
                            },
                            "id": 2703,
                            "name": "Identifier",
                            "src": "10833:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2623,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2704,
                            "name": "Identifier",
                            "src": "10863:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2687,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 2705,
                            "name": "Identifier",
                            "src": "10888:11:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2627,
                              "type": "address",
                              "value": "collateralToken"
                            },
                            "id": 2706,
                            "name": "Identifier",
                            "src": "10913:15:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2630,
                              "type": "uint256",
                              "value": "collateralAmount"
                            },
                            "id": 2707,
                            "name": "Identifier",
                            "src": "10942:16:7"
                          }
                        ],
                        "id": 2708,
                        "name": "FunctionCall",
                        "src": "10833:135:7"
                      }
                    ],
                    "id": 2709,
                    "name": "ExpressionStatement",
                    "src": "10833:135:7"
                  }
                ],
                "id": 2710,
                "name": "Block",
                "src": "8591:2384:7"
              }
            ],
            "id": 2711,
            "name": "FunctionDefinition",
            "src": "8512:2463:7"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackCollateralParametersFromBytes",
              "payable": false,
              "scope": 2851,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "parameters",
                      "scope": 2768,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2712,
                        "name": "ElementaryTypeName",
                        "src": "12095:7:7"
                      }
                    ],
                    "id": 2713,
                    "name": "VariableDeclaration",
                    "src": "12095:18:7"
                  }
                ],
                "id": 2714,
                "name": "ParameterList",
                "src": "12094:20:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2768,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2715,
                        "name": "ElementaryTypeName",
                        "src": "12160:4:7"
                      }
                    ],
                    "id": 2716,
                    "name": "VariableDeclaration",
                    "src": "12160:4:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2768,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2717,
                        "name": "ElementaryTypeName",
                        "src": "12166:4:7"
                      }
                    ],
                    "id": 2718,
                    "name": "VariableDeclaration",
                    "src": "12166:4:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2768,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2719,
                        "name": "ElementaryTypeName",
                        "src": "12172:4:7"
                      }
                    ],
                    "id": 2720,
                    "name": "VariableDeclaration",
                    "src": "12172:4:7"
                  }
                ],
                "id": 2721,
                "name": "ParameterList",
                "src": "12159:18:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2723
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralTokenIndexShifted",
                          "scope": 2768,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 2722,
                            "name": "ElementaryTypeName",
                            "src": "12276:7:7"
                          }
                        ],
                        "id": 2723,
                        "name": "VariableDeclaration",
                        "src": "12276:35:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2713,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2724,
                            "name": "Identifier",
                            "src": "12326:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030303030666630303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 323250903058198497381659317370880",
                              "value": "0x0000000000000000000000000000000000000ff0000000000000000000000000"
                            },
                            "id": 2725,
                            "name": "Literal",
                            "src": "12339:66:7"
                          }
                        ],
                        "id": 2726,
                        "name": "BinaryOperation",
                        "src": "12326:79:7"
                      }
                    ],
                    "id": 2727,
                    "name": "VariableDeclarationStatement",
                    "src": "12276:129:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2729
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralAmountShifted",
                          "scope": 2768,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 2728,
                            "name": "ElementaryTypeName",
                            "src": "12518:7:7"
                          }
                        ],
                        "id": 2729,
                        "name": "VariableDeclaration",
                        "src": "12518:31:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2713,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2730,
                            "name": "Identifier",
                            "src": "12564:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030303030303066666666666666666666666666666666666666666666663030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 1267650600228229401496703205120",
                              "value": "0x000000000000000000000000000000000000000fffffffffffffffffffffff00"
                            },
                            "id": 2731,
                            "name": "Literal",
                            "src": "12577:66:7"
                          }
                        ],
                        "id": 2732,
                        "name": "BinaryOperation",
                        "src": "12564:79:7"
                      }
                    ],
                    "id": 2733,
                    "name": "VariableDeclarationStatement",
                    "src": "12518:125:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2735
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralTokenIndex",
                          "scope": 2768,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2734,
                            "name": "ElementaryTypeName",
                            "src": "12891:4:7"
                          }
                        ],
                        "id": 2735,
                        "name": "VariableDeclaration",
                        "src": "12891:25:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 2736,
                                "name": "ElementaryTypeNameExpression",
                                "src": "12919:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2723,
                                  "type": "bytes32",
                                  "value": "collateralTokenIndexShifted"
                                },
                                "id": 2737,
                                "name": "Identifier",
                                "src": "12924:27:7"
                              }
                            ],
                            "id": 2738,
                            "name": "FunctionCall",
                            "src": "12919:33:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_1267650600228229401496703205376_by_1",
                                "typeString": "int_const 1267650600228229401496703205376"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 1267650600228229401496703205376"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 2739,
                                "name": "Literal",
                                "src": "12955:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313030",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 100",
                                  "value": "100"
                                },
                                "id": 2740,
                                "name": "Literal",
                                "src": "12960:3:7"
                              }
                            ],
                            "id": 2741,
                            "name": "BinaryOperation",
                            "src": "12955:8:7"
                          }
                        ],
                        "id": 2742,
                        "name": "BinaryOperation",
                        "src": "12919:44:7"
                      }
                    ],
                    "id": 2743,
                    "name": "VariableDeclarationStatement",
                    "src": "12891:72:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2745
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralAmount",
                          "scope": 2768,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2744,
                            "name": "ElementaryTypeName",
                            "src": "12973:4:7"
                          }
                        ],
                        "id": 2745,
                        "name": "VariableDeclaration",
                        "src": "12973:21:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "/",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 2746,
                                "name": "ElementaryTypeNameExpression",
                                "src": "12997:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2729,
                                  "type": "bytes32",
                                  "value": "collateralAmountShifted"
                                },
                                "id": 2747,
                                "name": "Identifier",
                                "src": "13002:23:7"
                              }
                            ],
                            "id": 2748,
                            "name": "FunctionCall",
                            "src": "12997:29:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_256_by_1",
                                "typeString": "int_const 256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 2749,
                                "name": "Literal",
                                "src": "13029:1:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "38",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 8",
                                  "value": "8"
                                },
                                "id": 2750,
                                "name": "Literal",
                                "src": "13034:1:7"
                              }
                            ],
                            "id": 2751,
                            "name": "BinaryOperation",
                            "src": "13029:6:7"
                          }
                        ],
                        "id": 2752,
                        "name": "BinaryOperation",
                        "src": "12997:38:7"
                      }
                    ],
                    "id": 2753,
                    "name": "VariableDeclarationStatement",
                    "src": "12973:62:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2755
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "gracePeriodInDays",
                          "scope": 2768,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 2754,
                            "name": "ElementaryTypeName",
                            "src": "13295:7:7"
                          }
                        ],
                        "id": 2755,
                        "name": "VariableDeclaration",
                        "src": "13295:25:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2713,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2756,
                            "name": "Identifier",
                            "src": "13335:10:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030306666",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 255",
                              "value": "0x00000000000000000000000000000000000000000000000000000000000000ff"
                            },
                            "id": 2757,
                            "name": "Literal",
                            "src": "13348:66:7"
                          }
                        ],
                        "id": 2758,
                        "name": "BinaryOperation",
                        "src": "13335:79:7"
                      }
                    ],
                    "id": 2759,
                    "name": "VariableDeclarationStatement",
                    "src": "13295:119:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2721
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(uint256,uint256,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2735,
                              "type": "uint256",
                              "value": "collateralTokenIndex"
                            },
                            "id": 2760,
                            "name": "Identifier",
                            "src": "13446:20:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2745,
                              "type": "uint256",
                              "value": "collateralAmount"
                            },
                            "id": 2761,
                            "name": "Identifier",
                            "src": "13480:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 2762,
                                "name": "ElementaryTypeNameExpression",
                                "src": "13510:4:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2755,
                                  "type": "bytes32",
                                  "value": "gracePeriodInDays"
                                },
                                "id": 2763,
                                "name": "Identifier",
                                "src": "13515:17:7"
                              }
                            ],
                            "id": 2764,
                            "name": "FunctionCall",
                            "src": "13510:23:7"
                          }
                        ],
                        "id": 2765,
                        "name": "TupleExpression",
                        "src": "13432:111:7"
                      }
                    ],
                    "id": 2766,
                    "name": "Return",
                    "src": "13425:118:7"
                  }
                ],
                "id": 2767,
                "name": "Block",
                "src": "12182:1368:7"
              }
            ],
            "id": 2768,
            "name": "FunctionDefinition",
            "src": "12050:1500:7"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "timestampAdjustedForGracePeriod",
              "payable": false,
              "scope": 2851,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "gracePeriodInDays",
                      "scope": 2785,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2769,
                        "name": "ElementaryTypeName",
                        "src": "13597:4:7"
                      }
                    ],
                    "id": 2770,
                    "name": "VariableDeclaration",
                    "src": "13597:22:7"
                  }
                ],
                "id": 2771,
                "name": "ParameterList",
                "src": "13596:24:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2785,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2772,
                        "name": "ElementaryTypeName",
                        "src": "13666:4:7"
                      }
                    ],
                    "id": 2773,
                    "name": "VariableDeclaration",
                    "src": "13666:4:7"
                  }
                ],
                "id": 2774,
                "name": "ParameterList",
                "src": "13665:6:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2774
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sub",
                              "referencedDeclaration": 5410,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "timestamp",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5570,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2775,
                                    "name": "Identifier",
                                    "src": "13693:5:7"
                                  }
                                ],
                                "id": 2776,
                                "name": "MemberAccess",
                                "src": "13693:15:7"
                              }
                            ],
                            "id": 2777,
                            "name": "MemberAccess",
                            "src": "13693:19:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "mul",
                                  "referencedDeclaration": 5372,
                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2350,
                                      "type": "uint256",
                                      "value": "SECONDS_IN_DAY"
                                    },
                                    "id": 2778,
                                    "name": "Identifier",
                                    "src": "13726:14:7"
                                  }
                                ],
                                "id": 2779,
                                "name": "MemberAccess",
                                "src": "13726:18:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2770,
                                  "type": "uint256",
                                  "value": "gracePeriodInDays"
                                },
                                "id": 2780,
                                "name": "Identifier",
                                "src": "13745:17:7"
                              }
                            ],
                            "id": 2781,
                            "name": "FunctionCall",
                            "src": "13726:37:7"
                          }
                        ],
                        "id": 2782,
                        "name": "FunctionCall",
                        "src": "13693:80:7"
                      }
                    ],
                    "id": 2783,
                    "name": "Return",
                    "src": "13686:87:7"
                  }
                ],
                "id": 2784,
                "name": "Block",
                "src": "13676:104:7"
              }
            ],
            "id": 2785,
            "name": "FunctionDefinition",
            "src": "13556:224:7"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "retrieveCollateralParameters",
              "payable": false,
              "scope": 2851,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2850,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 2786,
                        "name": "ElementaryTypeName",
                        "src": "13824:7:7"
                      }
                    ],
                    "id": 2787,
                    "name": "VariableDeclaration",
                    "src": "13824:19:7"
                  }
                ],
                "id": 2788,
                "name": "ParameterList",
                "src": "13823:21:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_collateralToken",
                      "scope": 2850,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 2789,
                        "name": "ElementaryTypeName",
                        "src": "13892:7:7"
                      }
                    ],
                    "id": 2790,
                    "name": "VariableDeclaration",
                    "src": "13892:24:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_collateralAmount",
                      "scope": 2850,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2791,
                        "name": "ElementaryTypeName",
                        "src": "13918:4:7"
                      }
                    ],
                    "id": 2792,
                    "name": "VariableDeclaration",
                    "src": "13918:22:7"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_gracePeriodInDays",
                      "scope": 2850,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2793,
                        "name": "ElementaryTypeName",
                        "src": "13942:4:7"
                      }
                    ],
                    "id": 2794,
                    "name": "VariableDeclaration",
                    "src": "13942:23:7"
                  }
                ],
                "id": 2795,
                "name": "ParameterList",
                "src": "13891:75:7"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContract",
                          "scope": 2850,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2796,
                            "name": "ElementaryTypeName",
                            "src": "13981:7:7"
                          }
                        ],
                        "id": 2797,
                        "name": "VariableDeclaration",
                        "src": "13981:21:7"
                      }
                    ],
                    "id": 2798,
                    "name": "VariableDeclarationStatement",
                    "src": "13981:21:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termsContractParameters",
                          "scope": 2850,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 2799,
                            "name": "ElementaryTypeName",
                            "src": "14012:7:7"
                          }
                        ],
                        "id": 2800,
                        "name": "VariableDeclaration",
                        "src": "14012:31:7"
                      }
                    ],
                    "id": 2801,
                    "name": "VariableDeclarationStatement",
                    "src": "14012:31:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(address,bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2797,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 2802,
                                "name": "Identifier",
                                "src": "14134:13:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2800,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 2803,
                                "name": "Identifier",
                                "src": "14149:23:7"
                              }
                            ],
                            "id": 2804,
                            "name": "TupleExpression",
                            "src": "14133:40:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(address,bytes32)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "getTerms",
                                  "referencedDeclaration": 1588,
                                  "type": "function (bytes32) view external returns (address,bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2337,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 2805,
                                    "name": "Identifier",
                                    "src": "14176:12:7"
                                  }
                                ],
                                "id": 2806,
                                "name": "MemberAccess",
                                "src": "14176:21:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2787,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2807,
                                "name": "Identifier",
                                "src": "14198:11:7"
                              }
                            ],
                            "id": 2808,
                            "name": "FunctionCall",
                            "src": "14176:34:7"
                          }
                        ],
                        "id": 2809,
                        "name": "Assignment",
                        "src": "14133:77:7"
                      }
                    ],
                    "id": 2810,
                    "name": "ExpressionStatement",
                    "src": "14133:77:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2811,
                            "name": "Identifier",
                            "src": "14295:7:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2797,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 2812,
                                "name": "Identifier",
                                "src": "14303:13:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_Collateralized_$2851",
                                          "typeString": "contract Collateralized"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2813,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "14320:7:7"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5623,
                                      "type": "contract Collateralized",
                                      "value": "this"
                                    },
                                    "id": 2814,
                                    "name": "Identifier",
                                    "src": "14328:4:7"
                                  }
                                ],
                                "id": 2815,
                                "name": "FunctionCall",
                                "src": "14320:13:7"
                              }
                            ],
                            "id": 2816,
                            "name": "BinaryOperation",
                            "src": "14303:30:7"
                          }
                        ],
                        "id": 2817,
                        "name": "FunctionCall",
                        "src": "14295:39:7"
                      }
                    ],
                    "id": 2818,
                    "name": "ExpressionStatement",
                    "src": "14295:39:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralTokenIndex",
                          "scope": 2850,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2819,
                            "name": "ElementaryTypeName",
                            "src": "14345:4:7"
                          }
                        ],
                        "id": 2820,
                        "name": "VariableDeclaration",
                        "src": "14345:25:7"
                      }
                    ],
                    "id": 2821,
                    "name": "VariableDeclarationStatement",
                    "src": "14345:25:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralAmount",
                          "scope": 2850,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2822,
                            "name": "ElementaryTypeName",
                            "src": "14380:4:7"
                          }
                        ],
                        "id": 2823,
                        "name": "VariableDeclaration",
                        "src": "14380:21:7"
                      }
                    ],
                    "id": 2824,
                    "name": "VariableDeclarationStatement",
                    "src": "14380:21:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "gracePeriodInDays",
                          "scope": 2850,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 2825,
                            "name": "ElementaryTypeName",
                            "src": "14411:4:7"
                          }
                        ],
                        "id": 2826,
                        "name": "VariableDeclaration",
                        "src": "14411:22:7"
                      }
                    ],
                    "id": 2827,
                    "name": "VariableDeclarationStatement",
                    "src": "14411:22:7"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2820,
                                  "type": "uint256",
                                  "value": "collateralTokenIndex"
                                },
                                "id": 2828,
                                "name": "Identifier",
                                "src": "14539:20:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2823,
                                  "type": "uint256",
                                  "value": "collateralAmount"
                                },
                                "id": 2829,
                                "name": "Identifier",
                                "src": "14561:16:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2826,
                                  "type": "uint256",
                                  "value": "gracePeriodInDays"
                                },
                                "id": 2830,
                                "name": "Identifier",
                                "src": "14579:17:7"
                              }
                            ],
                            "id": 2831,
                            "name": "TupleExpression",
                            "src": "14538:59:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "tuple(uint256,uint256,uint256)",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2768,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256)",
                                  "value": "unpackCollateralParametersFromBytes"
                                },
                                "id": 2832,
                                "name": "Identifier",
                                "src": "14612:35:7"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2800,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 2833,
                                "name": "Identifier",
                                "src": "14648:23:7"
                              }
                            ],
                            "id": 2834,
                            "name": "FunctionCall",
                            "src": "14612:60:7"
                          }
                        ],
                        "id": 2835,
                        "name": "Assignment",
                        "src": "14538:134:7"
                      }
                    ],
                    "id": 2836,
                    "name": "ExpressionStatement",
                    "src": "14538:134:7"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2838
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralToken",
                          "scope": 2850,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "address",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 2837,
                            "name": "ElementaryTypeName",
                            "src": "14768:7:7"
                          }
                        ],
                        "id": 2838,
                        "name": "VariableDeclaration",
                        "src": "14768:23:7"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTokenAddressByIndex",
                              "referencedDeclaration": 2211,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2339,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 2839,
                                "name": "Identifier",
                                "src": "14794:13:7"
                              }
                            ],
                            "id": 2840,
                            "name": "MemberAccess",
                            "src": "14794:36:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2820,
                              "type": "uint256",
                              "value": "collateralTokenIndex"
                            },
                            "id": 2841,
                            "name": "Identifier",
                            "src": "14831:20:7"
                          }
                        ],
                        "id": 2842,
                        "name": "FunctionCall",
                        "src": "14794:58:7"
                      }
                    ],
                    "id": 2843,
                    "name": "VariableDeclarationStatement",
                    "src": "14768:84:7"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2795
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(address,uint256,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2838,
                              "type": "address",
                              "value": "collateralToken"
                            },
                            "id": 2844,
                            "name": "Identifier",
                            "src": "14884:15:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2823,
                              "type": "uint256",
                              "value": "collateralAmount"
                            },
                            "id": 2845,
                            "name": "Identifier",
                            "src": "14913:16:7"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2826,
                              "type": "uint256",
                              "value": "gracePeriodInDays"
                            },
                            "id": 2846,
                            "name": "Identifier",
                            "src": "14943:17:7"
                          }
                        ],
                        "id": 2847,
                        "name": "TupleExpression",
                        "src": "14870:100:7"
                      }
                    ],
                    "id": 2848,
                    "name": "Return",
                    "src": "14863:107:7"
                  }
                ],
                "id": 2849,
                "name": "Block",
                "src": "13971:1006:7"
              }
            ],
            "id": 2850,
            "name": "FunctionDefinition",
            "src": "13786:1191:7"
          }
        ],
        "id": 2851,
        "name": "ContractDefinition",
        "src": "1500:13479:7"
      }
    ],
    "id": 2852,
    "name": "SourceUnit",
    "src": "584:14396:7"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:31:52.462Z"
}