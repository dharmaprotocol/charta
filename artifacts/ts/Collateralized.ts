export const Collateralized = 
{
  "contractName": "Collateralized",
  "abi": [
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
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
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
          "name": "agreementID",
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
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "collateralForAgreementID",
      "outputs": [
        {
          "name": "collateralizer",
          "type": "address"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "lockupPeriod",
          "type": "uint256"
        },
        {
          "name": "withdrawn",
          "type": "bool"
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
      "constant": false,
      "inputs": [
        {
          "name": "agreementID",
          "type": "bytes32"
        },
        {
          "name": "token",
          "type": "address"
        },
        {
          "name": "amount",
          "type": "uint256"
        },
        {
          "name": "lockupPeriodEndTimestamp",
          "type": "uint256"
        }
      ],
      "name": "collateralize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agreementID",
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
          "name": "_debtRegistry",
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
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\nimport \"../TermsContract.sol\";\nimport \"../DebtRegistry.sol\";\n\n\ncontract Collateralized is TermsContract {\n    using SafeMath for uint;\n\n    struct Collateral {\n        address collateralizer;\n        address token;\n        uint amount;\n        uint lockupPeriod;\n        bool withdrawn;\n    }\n\n    DebtRegistry public debtRegistry;\n\n    mapping(bytes32 => Collateral) public collateralForAgreementID;\n\n    event CollateralLocked(\n        bytes32 indexed agreementID,\n        address token,\n        uint amount\n    );\n\n    event CollateralReturned(\n        bytes32 indexed agreementID,\n        address indexed collateralizer,\n        address token,\n        uint amount\n    );\n\n    event CollateralSeized(\n        bytes32 indexed agreementID,\n        address indexed beneficiary,\n        address token,\n        uint amount\n    );\n\n    function Collateralized(address _debtRegistry) public {\n        debtRegistry = DebtRegistry(_debtRegistry);\n    }\n\n    function collateralize(\n        bytes32 agreementID,\n        address token,\n        uint amount,\n        uint lockupPeriodEndTimestamp\n    )\n        public\n    {\n        // the amount being put up for collateral must exceed 0.\n        require(amount > 0);\n\n        // the lockup period must occur at some point in the future.\n        require(lockupPeriodEndTimestamp > block.timestamp);\n\n        /*\n        Ensure that the agreement has not already been collateralized.\n\n        If the agreement has already been collateralized, this check will fail\n        because any valid form of collateral will have a non-zero lockupPeriod.\n        Only an uncollateralized agreement would meet this requirement.\n        */\n        require(collateralForAgreementID[agreementID].lockupPeriod == 0);\n\n        ERC20 erc20token = ERC20(token);\n        address collateralizer = msg.sender;\n        address custodian = address(this);\n\n        /*\n        The collateralizer must have sufficient balance equal to or greater\n        than the amount being put up for collateral.\n        */\n        require(erc20token.balanceOf(collateralizer) >= amount);\n\n        /*\n        The custodian must have an allowance granted by the collateralizer equal\n        to or greater than the amount being put up for collateral.\n        */\n        require(erc20token.allowance(collateralizer, custodian) >= amount);\n\n        // the collateral must be successfully transferred to this contract.\n        require(erc20token.transferFrom(\n            collateralizer,\n            custodian,\n            amount\n        ));\n\n        // create collateral instance.\n        Collateral memory collateral = Collateral({\n            collateralizer: msg.sender,\n            token: token,\n            amount: amount,\n            lockupPeriod: lockupPeriodEndTimestamp,\n            withdrawn: false\n        });\n\n        // store collateral in mapping.\n        collateralForAgreementID[agreementID] = collateral;\n\n        // emit event that collateral has been secured.\n        CollateralLocked(agreementID, token, amount);\n    }\n\n    function returnCollateral(\n        bytes32 agreementID\n    )\n        public\n    {\n        // fetch relevant collateral instance.\n        Collateral memory collateral = collateralForAgreementID[agreementID];\n\n        // Ensure a valid form of collateral is tied to this agreement id.\n        require(collateral.lockupPeriod > 0);\n\n        // Collateral can only be returned after the lockup period.\n        require(block.timestamp > collateral.lockupPeriod);\n\n        // Collateral can only be returned if it has yet to be withdrawn.\n        require(!collateral.withdrawn);\n\n        // ensure sufficient payment.\n        require(\n            getExpectedRepaymentValue(agreementID, block.timestamp) <=\n            getValueRepaidToDate(agreementID)\n        );\n\n        // mark collateral as withdrawn.\n        collateralForAgreementID[agreementID].withdrawn = true;\n\n        // transfer the collateral this contract was holding in escrow back to sender.\n        require(\n            ERC20(collateral.token).transfer(\n                collateral.collateralizer,\n                collateral.amount\n            )\n        );\n\n        // log that the collateral has been succesfully returned to collateralizer.\n        CollateralReturned(\n            agreementID,\n            collateral.collateralizer,\n            collateral.token,\n            collateral.amount\n        );\n    }\n\n    function seizeCollateral(\n        bytes32 agreementID\n    )\n        public\n    {\n        // fetch relevant collateral instance.\n        Collateral memory collateral = collateralForAgreementID[agreementID];\n\n        // Ensure a valid form of collateral is tied to this agreement id.\n        require(collateral.lockupPeriod > 0);\n\n        // Seizure can only occur after the lockup period.\n        require(block.timestamp > collateral.lockupPeriod);\n\n        // Seizure can only occur if the collateral has yet to be withdrawn.\n        require(!collateral.withdrawn);\n\n        // ensure debtor is in violation of the terms.\n        require(\n            getExpectedRepaymentValue(agreementID, block.timestamp) >\n            getValueRepaidToDate(agreementID)\n        );\n\n        // mark collateral as withdrawn once transfer has succeeded.\n        collateralForAgreementID[agreementID].withdrawn = true;\n\n        // determine beneficiary of the seized collateral.\n        address beneficiary = debtRegistry.getBeneficiary(agreementID);\n\n        // seize collateral and transfer to beneficiary.\n        require(\n            ERC20(collateral.token).transfer(\n                beneficiary,\n                collateral.amount\n            )\n        );\n\n        // log the seizure event.\n        CollateralSeized(\n            agreementID,\n            beneficiary,\n            collateral.token,\n            collateral.amount\n        );\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/Collateralized.sol",
      "exportedSymbols": {
        "Collateralized": [
          2601
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
        "id": 2277,
        "name": "PragmaDirective",
        "src": "584:23:8"
      },
      {
        "attributes": {
          "SourceUnit": 7788,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 2602,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2278,
        "name": "ImportDirective",
        "src": "609:55:8"
      },
      {
        "attributes": {
          "SourceUnit": 7983,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2602,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2279,
        "name": "ImportDirective",
        "src": "665:59:8"
      },
      {
        "attributes": {
          "SourceUnit": 2151,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 2602,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2280,
        "name": "ImportDirective",
        "src": "726:30:8"
      },
      {
        "attributes": {
          "SourceUnit": 1653,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 2602,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2281,
        "name": "ImportDirective",
        "src": "757:29:8"
      },
      {
        "attributes": {
          "contractDependencies": [
            2150
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2601,
            2150
          ],
          "name": "Collateralized",
          "scope": 2602
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
                  "referencedDeclaration": 2150,
                  "type": "contract TermsContract"
                },
                "id": 2282,
                "name": "UserDefinedTypeName",
                "src": "816:13:8"
              }
            ],
            "id": 2283,
            "name": "InheritanceSpecifier",
            "src": "816:13:8"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 7787,
                  "type": "library SafeMath"
                },
                "id": 2284,
                "name": "UserDefinedTypeName",
                "src": "842:8:8"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2285,
                "name": "ElementaryTypeName",
                "src": "855:4:8"
              }
            ],
            "id": 2286,
            "name": "UsingForDirective",
            "src": "836:24:8"
          },
          {
            "attributes": {
              "canonicalName": "Collateralized.Collateral",
              "name": "Collateral",
              "scope": 2601,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "collateralizer",
                  "scope": 2297,
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
                    "id": 2287,
                    "name": "ElementaryTypeName",
                    "src": "894:7:8"
                  }
                ],
                "id": 2288,
                "name": "VariableDeclaration",
                "src": "894:22:8"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "token",
                  "scope": 2297,
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
                    "id": 2289,
                    "name": "ElementaryTypeName",
                    "src": "926:7:8"
                  }
                ],
                "id": 2290,
                "name": "VariableDeclaration",
                "src": "926:13:8"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amount",
                  "scope": 2297,
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
                    "id": 2291,
                    "name": "ElementaryTypeName",
                    "src": "949:4:8"
                  }
                ],
                "id": 2292,
                "name": "VariableDeclaration",
                "src": "949:11:8"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "lockupPeriod",
                  "scope": 2297,
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
                    "id": 2293,
                    "name": "ElementaryTypeName",
                    "src": "970:4:8"
                  }
                ],
                "id": 2294,
                "name": "VariableDeclaration",
                "src": "970:17:8"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "withdrawn",
                  "scope": 2297,
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
                    "id": 2295,
                    "name": "ElementaryTypeName",
                    "src": "997:4:8"
                  }
                ],
                "id": 2296,
                "name": "VariableDeclaration",
                "src": "997:14:8"
              }
            ],
            "id": 2297,
            "name": "StructDefinition",
            "src": "866:152:8"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 2601,
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
                  "referencedDeclaration": 1652,
                  "type": "contract DebtRegistry"
                },
                "id": 2298,
                "name": "UserDefinedTypeName",
                "src": "1024:12:8"
              }
            ],
            "id": 2299,
            "name": "VariableDeclaration",
            "src": "1024:32:8"
          },
          {
            "attributes": {
              "constant": false,
              "name": "collateralForAgreementID",
              "scope": 2601,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2300,
                    "name": "ElementaryTypeName",
                    "src": "1071:7:8"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Collateral",
                      "referencedDeclaration": 2297,
                      "type": "struct Collateralized.Collateral storage pointer"
                    },
                    "id": 2301,
                    "name": "UserDefinedTypeName",
                    "src": "1082:10:8"
                  }
                ],
                "id": 2302,
                "name": "Mapping",
                "src": "1063:30:8"
              }
            ],
            "id": 2303,
            "name": "VariableDeclaration",
            "src": "1063:62:8"
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
                      "scope": 2311,
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
                        "id": 2304,
                        "name": "ElementaryTypeName",
                        "src": "1164:7:8"
                      }
                    ],
                    "id": 2305,
                    "name": "VariableDeclaration",
                    "src": "1164:27:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2311,
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
                        "id": 2306,
                        "name": "ElementaryTypeName",
                        "src": "1201:7:8"
                      }
                    ],
                    "id": 2307,
                    "name": "VariableDeclaration",
                    "src": "1201:13:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2311,
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
                        "id": 2308,
                        "name": "ElementaryTypeName",
                        "src": "1224:4:8"
                      }
                    ],
                    "id": 2309,
                    "name": "VariableDeclaration",
                    "src": "1224:11:8"
                  }
                ],
                "id": 2310,
                "name": "ParameterList",
                "src": "1154:87:8"
              }
            ],
            "id": 2311,
            "name": "EventDefinition",
            "src": "1132:110:8"
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
                      "scope": 2321,
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
                        "id": 2312,
                        "name": "ElementaryTypeName",
                        "src": "1282:7:8"
                      }
                    ],
                    "id": 2313,
                    "name": "VariableDeclaration",
                    "src": "1282:27:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "collateralizer",
                      "scope": 2321,
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
                        "id": 2314,
                        "name": "ElementaryTypeName",
                        "src": "1319:7:8"
                      }
                    ],
                    "id": 2315,
                    "name": "VariableDeclaration",
                    "src": "1319:30:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2321,
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
                        "id": 2316,
                        "name": "ElementaryTypeName",
                        "src": "1359:7:8"
                      }
                    ],
                    "id": 2317,
                    "name": "VariableDeclaration",
                    "src": "1359:13:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2321,
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
                        "id": 2318,
                        "name": "ElementaryTypeName",
                        "src": "1382:4:8"
                      }
                    ],
                    "id": 2319,
                    "name": "VariableDeclaration",
                    "src": "1382:11:8"
                  }
                ],
                "id": 2320,
                "name": "ParameterList",
                "src": "1272:127:8"
              }
            ],
            "id": 2321,
            "name": "EventDefinition",
            "src": "1248:152:8"
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
                      "scope": 2331,
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
                        "id": 2322,
                        "name": "ElementaryTypeName",
                        "src": "1438:7:8"
                      }
                    ],
                    "id": 2323,
                    "name": "VariableDeclaration",
                    "src": "1438:27:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "beneficiary",
                      "scope": 2331,
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
                        "id": 2324,
                        "name": "ElementaryTypeName",
                        "src": "1475:7:8"
                      }
                    ],
                    "id": 2325,
                    "name": "VariableDeclaration",
                    "src": "1475:27:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "token",
                      "scope": 2331,
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
                        "id": 2326,
                        "name": "ElementaryTypeName",
                        "src": "1512:7:8"
                      }
                    ],
                    "id": 2327,
                    "name": "VariableDeclaration",
                    "src": "1512:13:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "amount",
                      "scope": 2331,
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
                        "id": 2328,
                        "name": "ElementaryTypeName",
                        "src": "1535:4:8"
                      }
                    ],
                    "id": 2329,
                    "name": "VariableDeclaration",
                    "src": "1535:11:8"
                  }
                ],
                "id": 2330,
                "name": "ParameterList",
                "src": "1428:124:8"
              }
            ],
            "id": 2331,
            "name": "EventDefinition",
            "src": "1406:147:8"
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
              "scope": 2601,
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
                      "name": "_debtRegistry",
                      "scope": 2343,
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
                        "id": 2332,
                        "name": "ElementaryTypeName",
                        "src": "1583:7:8"
                      }
                    ],
                    "id": 2333,
                    "name": "VariableDeclaration",
                    "src": "1583:21:8"
                  }
                ],
                "id": 2334,
                "name": "ParameterList",
                "src": "1582:23:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2335,
                "name": "ParameterList",
                "src": "1613:0:8"
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
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2299,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 2336,
                            "name": "Identifier",
                            "src": "1623:12:8"
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
                                  "referencedDeclaration": 1652,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2337,
                                "name": "Identifier",
                                "src": "1638:12:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2333,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 2338,
                                "name": "Identifier",
                                "src": "1651:13:8"
                              }
                            ],
                            "id": 2339,
                            "name": "FunctionCall",
                            "src": "1638:27:8"
                          }
                        ],
                        "id": 2340,
                        "name": "Assignment",
                        "src": "1623:42:8"
                      }
                    ],
                    "id": 2341,
                    "name": "ExpressionStatement",
                    "src": "1623:42:8"
                  }
                ],
                "id": 2342,
                "name": "Block",
                "src": "1613:59:8"
              }
            ],
            "id": 2343,
            "name": "FunctionDefinition",
            "src": "1559:113:8"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "collateralize",
              "payable": false,
              "scope": 2601,
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
                      "name": "agreementID",
                      "scope": 2445,
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
                        "id": 2344,
                        "name": "ElementaryTypeName",
                        "src": "1710:7:8"
                      }
                    ],
                    "id": 2345,
                    "name": "VariableDeclaration",
                    "src": "1710:19:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 2445,
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
                        "id": 2346,
                        "name": "ElementaryTypeName",
                        "src": "1739:7:8"
                      }
                    ],
                    "id": 2347,
                    "name": "VariableDeclaration",
                    "src": "1739:13:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 2445,
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
                        "id": 2348,
                        "name": "ElementaryTypeName",
                        "src": "1762:4:8"
                      }
                    ],
                    "id": 2349,
                    "name": "VariableDeclaration",
                    "src": "1762:11:8"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "lockupPeriodEndTimestamp",
                      "scope": 2445,
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
                        "id": 2350,
                        "name": "ElementaryTypeName",
                        "src": "1783:4:8"
                      }
                    ],
                    "id": 2351,
                    "name": "VariableDeclaration",
                    "src": "1783:29:8"
                  }
                ],
                "id": 2352,
                "name": "ParameterList",
                "src": "1700:118:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2353,
                "name": "ParameterList",
                "src": "1838:0:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2354,
                            "name": "Identifier",
                            "src": "1913:7:8"
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
                                  "referencedDeclaration": 2349,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2355,
                                "name": "Identifier",
                                "src": "1921:6:8"
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
                                "id": 2356,
                                "name": "Literal",
                                "src": "1930:1:8"
                              }
                            ],
                            "id": 2357,
                            "name": "BinaryOperation",
                            "src": "1921:10:8"
                          }
                        ],
                        "id": 2358,
                        "name": "FunctionCall",
                        "src": "1913:19:8"
                      }
                    ],
                    "id": 2359,
                    "name": "ExpressionStatement",
                    "src": "1913:19:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2360,
                            "name": "Identifier",
                            "src": "2012:7:8"
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
                                  "referencedDeclaration": 2351,
                                  "type": "uint256",
                                  "value": "lockupPeriodEndTimestamp"
                                },
                                "id": 2361,
                                "name": "Identifier",
                                "src": "2020:24:8"
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
                                      "referencedDeclaration": 8359,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2362,
                                    "name": "Identifier",
                                    "src": "2047:5:8"
                                  }
                                ],
                                "id": 2363,
                                "name": "MemberAccess",
                                "src": "2047:15:8"
                              }
                            ],
                            "id": 2364,
                            "name": "BinaryOperation",
                            "src": "2020:42:8"
                          }
                        ],
                        "id": 2365,
                        "name": "FunctionCall",
                        "src": "2012:51:8"
                      }
                    ],
                    "id": 2366,
                    "name": "ExpressionStatement",
                    "src": "2012:51:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2367,
                            "name": "Identifier",
                            "src": "2399:7:8"
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
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2294,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct Collateralized.Collateral storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2303,
                                          "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                                          "value": "collateralForAgreementID"
                                        },
                                        "id": 2368,
                                        "name": "Identifier",
                                        "src": "2407:24:8"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2345,
                                          "type": "bytes32",
                                          "value": "agreementID"
                                        },
                                        "id": 2369,
                                        "name": "Identifier",
                                        "src": "2432:11:8"
                                      }
                                    ],
                                    "id": 2370,
                                    "name": "IndexAccess",
                                    "src": "2407:37:8"
                                  }
                                ],
                                "id": 2371,
                                "name": "MemberAccess",
                                "src": "2407:50:8"
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
                                "id": 2372,
                                "name": "Literal",
                                "src": "2461:1:8"
                              }
                            ],
                            "id": 2373,
                            "name": "BinaryOperation",
                            "src": "2407:55:8"
                          }
                        ],
                        "id": 2374,
                        "name": "FunctionCall",
                        "src": "2399:64:8"
                      }
                    ],
                    "id": 2375,
                    "name": "ExpressionStatement",
                    "src": "2399:64:8"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2377
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "erc20token",
                          "scope": 2445,
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
                              "referencedDeclaration": 7982,
                              "type": "contract ERC20"
                            },
                            "id": 2376,
                            "name": "UserDefinedTypeName",
                            "src": "2474:5:8"
                          }
                        ],
                        "id": 2377,
                        "name": "VariableDeclaration",
                        "src": "2474:16:8"
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
                              "referencedDeclaration": 7982,
                              "type": "type(contract ERC20)",
                              "value": "ERC20"
                            },
                            "id": 2378,
                            "name": "Identifier",
                            "src": "2493:5:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2347,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2379,
                            "name": "Identifier",
                            "src": "2499:5:8"
                          }
                        ],
                        "id": 2380,
                        "name": "FunctionCall",
                        "src": "2493:12:8"
                      }
                    ],
                    "id": 2381,
                    "name": "VariableDeclarationStatement",
                    "src": "2474:31:8"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2383
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateralizer",
                          "scope": 2445,
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
                            "id": 2382,
                            "name": "ElementaryTypeName",
                            "src": "2515:7:8"
                          }
                        ],
                        "id": 2383,
                        "name": "VariableDeclaration",
                        "src": "2515:22:8"
                      },
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
                              "referencedDeclaration": 8367,
                              "type": "msg",
                              "value": "msg"
                            },
                            "id": 2384,
                            "name": "Identifier",
                            "src": "2540:3:8"
                          }
                        ],
                        "id": 2385,
                        "name": "MemberAccess",
                        "src": "2540:10:8"
                      }
                    ],
                    "id": 2386,
                    "name": "VariableDeclarationStatement",
                    "src": "2515:35:8"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2388
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "custodian",
                          "scope": 2445,
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
                            "id": 2387,
                            "name": "ElementaryTypeName",
                            "src": "2560:7:8"
                          }
                        ],
                        "id": 2388,
                        "name": "VariableDeclaration",
                        "src": "2560:17:8"
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
                                  "typeIdentifier": "t_contract$_Collateralized_$2601",
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
                            "id": 2389,
                            "name": "ElementaryTypeNameExpression",
                            "src": "2580:7:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8414,
                              "type": "contract Collateralized",
                              "value": "this"
                            },
                            "id": 2390,
                            "name": "Identifier",
                            "src": "2588:4:8"
                          }
                        ],
                        "id": 2391,
                        "name": "FunctionCall",
                        "src": "2580:13:8"
                      }
                    ],
                    "id": 2392,
                    "name": "VariableDeclarationStatement",
                    "src": "2560:33:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2393,
                            "name": "Identifier",
                            "src": "2755:7:8"
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
                                      "referencedDeclaration": 7996,
                                      "type": "function (address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2377,
                                          "type": "contract ERC20",
                                          "value": "erc20token"
                                        },
                                        "id": 2394,
                                        "name": "Identifier",
                                        "src": "2763:10:8"
                                      }
                                    ],
                                    "id": 2395,
                                    "name": "MemberAccess",
                                    "src": "2763:20:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2383,
                                      "type": "address",
                                      "value": "collateralizer"
                                    },
                                    "id": 2396,
                                    "name": "Identifier",
                                    "src": "2784:14:8"
                                  }
                                ],
                                "id": 2397,
                                "name": "FunctionCall",
                                "src": "2763:36:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2349,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2398,
                                "name": "Identifier",
                                "src": "2803:6:8"
                              }
                            ],
                            "id": 2399,
                            "name": "BinaryOperation",
                            "src": "2763:46:8"
                          }
                        ],
                        "id": 2400,
                        "name": "FunctionCall",
                        "src": "2755:55:8"
                      }
                    ],
                    "id": 2401,
                    "name": "ExpressionStatement",
                    "src": "2755:55:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2402,
                            "name": "Identifier",
                            "src": "2991:7:8"
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
                                      "referencedDeclaration": 7953,
                                      "type": "function (address,address) view external returns (uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2377,
                                          "type": "contract ERC20",
                                          "value": "erc20token"
                                        },
                                        "id": 2403,
                                        "name": "Identifier",
                                        "src": "2999:10:8"
                                      }
                                    ],
                                    "id": 2404,
                                    "name": "MemberAccess",
                                    "src": "2999:20:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2383,
                                      "type": "address",
                                      "value": "collateralizer"
                                    },
                                    "id": 2405,
                                    "name": "Identifier",
                                    "src": "3020:14:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2388,
                                      "type": "address",
                                      "value": "custodian"
                                    },
                                    "id": 2406,
                                    "name": "Identifier",
                                    "src": "3036:9:8"
                                  }
                                ],
                                "id": 2407,
                                "name": "FunctionCall",
                                "src": "2999:47:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2349,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2408,
                                "name": "Identifier",
                                "src": "3050:6:8"
                              }
                            ],
                            "id": 2409,
                            "name": "BinaryOperation",
                            "src": "2999:57:8"
                          }
                        ],
                        "id": 2410,
                        "name": "FunctionCall",
                        "src": "2991:66:8"
                      }
                    ],
                    "id": 2411,
                    "name": "ExpressionStatement",
                    "src": "2991:66:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2412,
                            "name": "Identifier",
                            "src": "3145:7:8"
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
                                  "referencedDeclaration": 7964,
                                  "type": "function (address,address,uint256) external returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2377,
                                      "type": "contract ERC20",
                                      "value": "erc20token"
                                    },
                                    "id": 2413,
                                    "name": "Identifier",
                                    "src": "3153:10:8"
                                  }
                                ],
                                "id": 2414,
                                "name": "MemberAccess",
                                "src": "3153:23:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2383,
                                  "type": "address",
                                  "value": "collateralizer"
                                },
                                "id": 2415,
                                "name": "Identifier",
                                "src": "3190:14:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2388,
                                  "type": "address",
                                  "value": "custodian"
                                },
                                "id": 2416,
                                "name": "Identifier",
                                "src": "3218:9:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2349,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 2417,
                                "name": "Identifier",
                                "src": "3241:6:8"
                              }
                            ],
                            "id": 2418,
                            "name": "FunctionCall",
                            "src": "3153:104:8"
                          }
                        ],
                        "id": 2419,
                        "name": "FunctionCall",
                        "src": "3145:113:8"
                      }
                    ],
                    "id": 2420,
                    "name": "ExpressionStatement",
                    "src": "3145:113:8"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2422
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateral",
                          "scope": 2445,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Collateralized.Collateral memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Collateral",
                              "referencedDeclaration": 2297,
                              "type": "struct Collateralized.Collateral storage pointer"
                            },
                            "id": 2421,
                            "name": "UserDefinedTypeName",
                            "src": "3308:10:8"
                          }
                        ],
                        "id": 2422,
                        "name": "VariableDeclaration",
                        "src": "3308:28:8"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "collateralizer",
                            "token",
                            "amount",
                            "lockupPeriod",
                            "withdrawn"
                          ],
                          "type": "struct Collateralized.Collateral memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2297,
                              "type": "type(struct Collateralized.Collateral storage pointer)",
                              "value": "Collateral"
                            },
                            "id": 2423,
                            "name": "Identifier",
                            "src": "3339:10:8"
                          },
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
                                  "referencedDeclaration": 8367,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2424,
                                "name": "Identifier",
                                "src": "3380:3:8"
                              }
                            ],
                            "id": 2425,
                            "name": "MemberAccess",
                            "src": "3380:10:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2347,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2426,
                            "name": "Identifier",
                            "src": "3411:5:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2349,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 2427,
                            "name": "Identifier",
                            "src": "3438:6:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2351,
                              "type": "uint256",
                              "value": "lockupPeriodEndTimestamp"
                            },
                            "id": 2428,
                            "name": "Identifier",
                            "src": "3472:24:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 2429,
                            "name": "Literal",
                            "src": "3521:5:8"
                          }
                        ],
                        "id": 2430,
                        "name": "FunctionCall",
                        "src": "3339:198:8"
                      }
                    ],
                    "id": 2431,
                    "name": "VariableDeclarationStatement",
                    "src": "3308:229:8"
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
                          "type": "struct Collateralized.Collateral storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct Collateralized.Collateral storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2303,
                                  "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                                  "value": "collateralForAgreementID"
                                },
                                "id": 2432,
                                "name": "Identifier",
                                "src": "3588:24:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2345,
                                  "type": "bytes32",
                                  "value": "agreementID"
                                },
                                "id": 2433,
                                "name": "Identifier",
                                "src": "3613:11:8"
                              }
                            ],
                            "id": 2434,
                            "name": "IndexAccess",
                            "src": "3588:37:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2422,
                              "type": "struct Collateralized.Collateral memory",
                              "value": "collateral"
                            },
                            "id": 2435,
                            "name": "Identifier",
                            "src": "3628:10:8"
                          }
                        ],
                        "id": 2436,
                        "name": "Assignment",
                        "src": "3588:50:8"
                      }
                    ],
                    "id": 2437,
                    "name": "ExpressionStatement",
                    "src": "3588:50:8"
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
                              "referencedDeclaration": 2311,
                              "type": "function (bytes32,address,uint256)",
                              "value": "CollateralLocked"
                            },
                            "id": 2438,
                            "name": "Identifier",
                            "src": "3705:16:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2345,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2439,
                            "name": "Identifier",
                            "src": "3722:11:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2347,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2440,
                            "name": "Identifier",
                            "src": "3735:5:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2349,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 2441,
                            "name": "Identifier",
                            "src": "3742:6:8"
                          }
                        ],
                        "id": 2442,
                        "name": "FunctionCall",
                        "src": "3705:44:8"
                      }
                    ],
                    "id": 2443,
                    "name": "ExpressionStatement",
                    "src": "3705:44:8"
                  }
                ],
                "id": 2444,
                "name": "Block",
                "src": "1838:1918:8"
              }
            ],
            "id": 2445,
            "name": "FunctionDefinition",
            "src": "1678:2078:8"
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
              "scope": 2601,
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
                      "name": "agreementID",
                      "scope": 2520,
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
                        "id": 2446,
                        "name": "ElementaryTypeName",
                        "src": "3797:7:8"
                      }
                    ],
                    "id": 2447,
                    "name": "VariableDeclaration",
                    "src": "3797:19:8"
                  }
                ],
                "id": 2448,
                "name": "ParameterList",
                "src": "3787:35:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2449,
                "name": "ParameterList",
                "src": "3842:0:8"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2451
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateral",
                          "scope": 2520,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Collateralized.Collateral memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Collateral",
                              "referencedDeclaration": 2297,
                              "type": "struct Collateralized.Collateral storage pointer"
                            },
                            "id": 2450,
                            "name": "UserDefinedTypeName",
                            "src": "3899:10:8"
                          }
                        ],
                        "id": 2451,
                        "name": "VariableDeclaration",
                        "src": "3899:28:8"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct Collateralized.Collateral storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2303,
                              "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                              "value": "collateralForAgreementID"
                            },
                            "id": 2452,
                            "name": "Identifier",
                            "src": "3930:24:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2447,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2453,
                            "name": "Identifier",
                            "src": "3955:11:8"
                          }
                        ],
                        "id": 2454,
                        "name": "IndexAccess",
                        "src": "3930:37:8"
                      }
                    ],
                    "id": 2455,
                    "name": "VariableDeclarationStatement",
                    "src": "3899:68:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2456,
                            "name": "Identifier",
                            "src": "4053:7:8"
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
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2294,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2451,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2457,
                                    "name": "Identifier",
                                    "src": "4061:10:8"
                                  }
                                ],
                                "id": 2458,
                                "name": "MemberAccess",
                                "src": "4061:23:8"
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
                                "id": 2459,
                                "name": "Literal",
                                "src": "4087:1:8"
                              }
                            ],
                            "id": 2460,
                            "name": "BinaryOperation",
                            "src": "4061:27:8"
                          }
                        ],
                        "id": 2461,
                        "name": "FunctionCall",
                        "src": "4053:36:8"
                      }
                    ],
                    "id": 2462,
                    "name": "ExpressionStatement",
                    "src": "4053:36:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2463,
                            "name": "Identifier",
                            "src": "4168:7:8"
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
                                      "referencedDeclaration": 8359,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2464,
                                    "name": "Identifier",
                                    "src": "4176:5:8"
                                  }
                                ],
                                "id": 2465,
                                "name": "MemberAccess",
                                "src": "4176:15:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2294,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2451,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2466,
                                    "name": "Identifier",
                                    "src": "4194:10:8"
                                  }
                                ],
                                "id": 2467,
                                "name": "MemberAccess",
                                "src": "4194:23:8"
                              }
                            ],
                            "id": 2468,
                            "name": "BinaryOperation",
                            "src": "4176:41:8"
                          }
                        ],
                        "id": 2469,
                        "name": "FunctionCall",
                        "src": "4168:50:8"
                      }
                    ],
                    "id": 2470,
                    "name": "ExpressionStatement",
                    "src": "4168:50:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2471,
                            "name": "Identifier",
                            "src": "4303:7:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
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
                                  "member_name": "withdrawn",
                                  "referencedDeclaration": 2296,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2451,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2472,
                                    "name": "Identifier",
                                    "src": "4312:10:8"
                                  }
                                ],
                                "id": 2473,
                                "name": "MemberAccess",
                                "src": "4312:20:8"
                              }
                            ],
                            "id": 2474,
                            "name": "UnaryOperation",
                            "src": "4311:21:8"
                          }
                        ],
                        "id": 2475,
                        "name": "FunctionCall",
                        "src": "4303:30:8"
                      }
                    ],
                    "id": 2476,
                    "name": "ExpressionStatement",
                    "src": "4303:30:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2477,
                            "name": "Identifier",
                            "src": "4382:7:8"
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
                                      "referencedDeclaration": 2142,
                                      "type": "function (bytes32,uint256) view returns (uint256)",
                                      "value": "getExpectedRepaymentValue"
                                    },
                                    "id": 2478,
                                    "name": "Identifier",
                                    "src": "4403:25:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2447,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2479,
                                    "name": "Identifier",
                                    "src": "4429:11:8"
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
                                          "referencedDeclaration": 8359,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 2480,
                                        "name": "Identifier",
                                        "src": "4442:5:8"
                                      }
                                    ],
                                    "id": 2481,
                                    "name": "MemberAccess",
                                    "src": "4442:15:8"
                                  }
                                ],
                                "id": 2482,
                                "name": "FunctionCall",
                                "src": "4403:55:8"
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
                                      "referencedDeclaration": 2149,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getValueRepaidToDate"
                                    },
                                    "id": 2483,
                                    "name": "Identifier",
                                    "src": "4474:20:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2447,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2484,
                                    "name": "Identifier",
                                    "src": "4495:11:8"
                                  }
                                ],
                                "id": 2485,
                                "name": "FunctionCall",
                                "src": "4474:33:8"
                              }
                            ],
                            "id": 2486,
                            "name": "BinaryOperation",
                            "src": "4403:104:8"
                          }
                        ],
                        "id": 2487,
                        "name": "FunctionCall",
                        "src": "4382:135:8"
                      }
                    ],
                    "id": 2488,
                    "name": "ExpressionStatement",
                    "src": "4382:135:8"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "withdrawn",
                              "referencedDeclaration": 2296,
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
                                  "type": "struct Collateralized.Collateral storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2303,
                                      "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                                      "value": "collateralForAgreementID"
                                    },
                                    "id": 2489,
                                    "name": "Identifier",
                                    "src": "4569:24:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2447,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2490,
                                    "name": "Identifier",
                                    "src": "4594:11:8"
                                  }
                                ],
                                "id": 2491,
                                "name": "IndexAccess",
                                "src": "4569:37:8"
                              }
                            ],
                            "id": 2492,
                            "name": "MemberAccess",
                            "src": "4569:47:8"
                          },
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
                            "id": 2493,
                            "name": "Literal",
                            "src": "4619:4:8"
                          }
                        ],
                        "id": 2494,
                        "name": "Assignment",
                        "src": "4569:54:8"
                      }
                    ],
                    "id": 2495,
                    "name": "ExpressionStatement",
                    "src": "4569:54:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2496,
                            "name": "Identifier",
                            "src": "4721:7:8"
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
                                  "referencedDeclaration": 8005,
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
                                          "referencedDeclaration": 7982,
                                          "type": "type(contract ERC20)",
                                          "value": "ERC20"
                                        },
                                        "id": 2497,
                                        "name": "Identifier",
                                        "src": "4742:5:8"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "token",
                                          "referencedDeclaration": 2290,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2451,
                                              "type": "struct Collateralized.Collateral memory",
                                              "value": "collateral"
                                            },
                                            "id": 2498,
                                            "name": "Identifier",
                                            "src": "4748:10:8"
                                          }
                                        ],
                                        "id": 2499,
                                        "name": "MemberAccess",
                                        "src": "4748:16:8"
                                      }
                                    ],
                                    "id": 2500,
                                    "name": "FunctionCall",
                                    "src": "4742:23:8"
                                  }
                                ],
                                "id": 2501,
                                "name": "MemberAccess",
                                "src": "4742:32:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "collateralizer",
                                  "referencedDeclaration": 2288,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2451,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2502,
                                    "name": "Identifier",
                                    "src": "4792:10:8"
                                  }
                                ],
                                "id": 2503,
                                "name": "MemberAccess",
                                "src": "4792:25:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "amount",
                                  "referencedDeclaration": 2292,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2451,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2504,
                                    "name": "Identifier",
                                    "src": "4835:10:8"
                                  }
                                ],
                                "id": 2505,
                                "name": "MemberAccess",
                                "src": "4835:17:8"
                              }
                            ],
                            "id": 2506,
                            "name": "FunctionCall",
                            "src": "4742:124:8"
                          }
                        ],
                        "id": 2507,
                        "name": "FunctionCall",
                        "src": "4721:155:8"
                      }
                    ],
                    "id": 2508,
                    "name": "ExpressionStatement",
                    "src": "4721:155:8"
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
                              "referencedDeclaration": 2321,
                              "type": "function (bytes32,address,address,uint256)",
                              "value": "CollateralReturned"
                            },
                            "id": 2509,
                            "name": "Identifier",
                            "src": "4971:18:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2447,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2510,
                            "name": "Identifier",
                            "src": "5003:11:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "collateralizer",
                              "referencedDeclaration": 2288,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2451,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2511,
                                "name": "Identifier",
                                "src": "5028:10:8"
                              }
                            ],
                            "id": 2512,
                            "name": "MemberAccess",
                            "src": "5028:25:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "token",
                              "referencedDeclaration": 2290,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2451,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2513,
                                "name": "Identifier",
                                "src": "5067:10:8"
                              }
                            ],
                            "id": 2514,
                            "name": "MemberAccess",
                            "src": "5067:16:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amount",
                              "referencedDeclaration": 2292,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2451,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2515,
                                "name": "Identifier",
                                "src": "5097:10:8"
                              }
                            ],
                            "id": 2516,
                            "name": "MemberAccess",
                            "src": "5097:17:8"
                          }
                        ],
                        "id": 2517,
                        "name": "FunctionCall",
                        "src": "4971:153:8"
                      }
                    ],
                    "id": 2518,
                    "name": "ExpressionStatement",
                    "src": "4971:153:8"
                  }
                ],
                "id": 2519,
                "name": "Block",
                "src": "3842:1289:8"
              }
            ],
            "id": 2520,
            "name": "FunctionDefinition",
            "src": "3762:1369:8"
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
              "scope": 2601,
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
                      "name": "agreementID",
                      "scope": 2600,
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
                        "id": 2521,
                        "name": "ElementaryTypeName",
                        "src": "5171:7:8"
                      }
                    ],
                    "id": 2522,
                    "name": "VariableDeclaration",
                    "src": "5171:19:8"
                  }
                ],
                "id": 2523,
                "name": "ParameterList",
                "src": "5161:35:8"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2524,
                "name": "ParameterList",
                "src": "5216:0:8"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2526
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "collateral",
                          "scope": 2600,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct Collateralized.Collateral memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Collateral",
                              "referencedDeclaration": 2297,
                              "type": "struct Collateralized.Collateral storage pointer"
                            },
                            "id": 2525,
                            "name": "UserDefinedTypeName",
                            "src": "5273:10:8"
                          }
                        ],
                        "id": 2526,
                        "name": "VariableDeclaration",
                        "src": "5273:28:8"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "struct Collateralized.Collateral storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2303,
                              "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                              "value": "collateralForAgreementID"
                            },
                            "id": 2527,
                            "name": "Identifier",
                            "src": "5304:24:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2522,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2528,
                            "name": "Identifier",
                            "src": "5329:11:8"
                          }
                        ],
                        "id": 2529,
                        "name": "IndexAccess",
                        "src": "5304:37:8"
                      }
                    ],
                    "id": 2530,
                    "name": "VariableDeclarationStatement",
                    "src": "5273:68:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2531,
                            "name": "Identifier",
                            "src": "5427:7:8"
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
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2294,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2532,
                                    "name": "Identifier",
                                    "src": "5435:10:8"
                                  }
                                ],
                                "id": 2533,
                                "name": "MemberAccess",
                                "src": "5435:23:8"
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
                                "id": 2534,
                                "name": "Literal",
                                "src": "5461:1:8"
                              }
                            ],
                            "id": 2535,
                            "name": "BinaryOperation",
                            "src": "5435:27:8"
                          }
                        ],
                        "id": 2536,
                        "name": "FunctionCall",
                        "src": "5427:36:8"
                      }
                    ],
                    "id": 2537,
                    "name": "ExpressionStatement",
                    "src": "5427:36:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2538,
                            "name": "Identifier",
                            "src": "5533:7:8"
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
                                      "referencedDeclaration": 8359,
                                      "type": "block",
                                      "value": "block"
                                    },
                                    "id": 2539,
                                    "name": "Identifier",
                                    "src": "5541:5:8"
                                  }
                                ],
                                "id": 2540,
                                "name": "MemberAccess",
                                "src": "5541:15:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "lockupPeriod",
                                  "referencedDeclaration": 2294,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2541,
                                    "name": "Identifier",
                                    "src": "5559:10:8"
                                  }
                                ],
                                "id": 2542,
                                "name": "MemberAccess",
                                "src": "5559:23:8"
                              }
                            ],
                            "id": 2543,
                            "name": "BinaryOperation",
                            "src": "5541:41:8"
                          }
                        ],
                        "id": 2544,
                        "name": "FunctionCall",
                        "src": "5533:50:8"
                      }
                    ],
                    "id": 2545,
                    "name": "ExpressionStatement",
                    "src": "5533:50:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2546,
                            "name": "Identifier",
                            "src": "5671:7:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "!",
                              "prefix": true,
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
                                  "member_name": "withdrawn",
                                  "referencedDeclaration": 2296,
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2547,
                                    "name": "Identifier",
                                    "src": "5680:10:8"
                                  }
                                ],
                                "id": 2548,
                                "name": "MemberAccess",
                                "src": "5680:20:8"
                              }
                            ],
                            "id": 2549,
                            "name": "UnaryOperation",
                            "src": "5679:21:8"
                          }
                        ],
                        "id": 2550,
                        "name": "FunctionCall",
                        "src": "5671:30:8"
                      }
                    ],
                    "id": 2551,
                    "name": "ExpressionStatement",
                    "src": "5671:30:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2552,
                            "name": "Identifier",
                            "src": "5767:7:8"
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
                                      "referencedDeclaration": 2142,
                                      "type": "function (bytes32,uint256) view returns (uint256)",
                                      "value": "getExpectedRepaymentValue"
                                    },
                                    "id": 2553,
                                    "name": "Identifier",
                                    "src": "5788:25:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2522,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2554,
                                    "name": "Identifier",
                                    "src": "5814:11:8"
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
                                          "referencedDeclaration": 8359,
                                          "type": "block",
                                          "value": "block"
                                        },
                                        "id": 2555,
                                        "name": "Identifier",
                                        "src": "5827:5:8"
                                      }
                                    ],
                                    "id": 2556,
                                    "name": "MemberAccess",
                                    "src": "5827:15:8"
                                  }
                                ],
                                "id": 2557,
                                "name": "FunctionCall",
                                "src": "5788:55:8"
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
                                      "referencedDeclaration": 2149,
                                      "type": "function (bytes32) view returns (uint256)",
                                      "value": "getValueRepaidToDate"
                                    },
                                    "id": 2558,
                                    "name": "Identifier",
                                    "src": "5858:20:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2522,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2559,
                                    "name": "Identifier",
                                    "src": "5879:11:8"
                                  }
                                ],
                                "id": 2560,
                                "name": "FunctionCall",
                                "src": "5858:33:8"
                              }
                            ],
                            "id": 2561,
                            "name": "BinaryOperation",
                            "src": "5788:103:8"
                          }
                        ],
                        "id": 2562,
                        "name": "FunctionCall",
                        "src": "5767:134:8"
                      }
                    ],
                    "id": 2563,
                    "name": "ExpressionStatement",
                    "src": "5767:134:8"
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
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "member_name": "withdrawn",
                              "referencedDeclaration": 2296,
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
                                  "type": "struct Collateralized.Collateral storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2303,
                                      "type": "mapping(bytes32 => struct Collateralized.Collateral storage ref)",
                                      "value": "collateralForAgreementID"
                                    },
                                    "id": 2564,
                                    "name": "Identifier",
                                    "src": "5981:24:8"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2522,
                                      "type": "bytes32",
                                      "value": "agreementID"
                                    },
                                    "id": 2565,
                                    "name": "Identifier",
                                    "src": "6006:11:8"
                                  }
                                ],
                                "id": 2566,
                                "name": "IndexAccess",
                                "src": "5981:37:8"
                              }
                            ],
                            "id": 2567,
                            "name": "MemberAccess",
                            "src": "5981:47:8"
                          },
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
                            "id": 2568,
                            "name": "Literal",
                            "src": "6031:4:8"
                          }
                        ],
                        "id": 2569,
                        "name": "Assignment",
                        "src": "5981:54:8"
                      }
                    ],
                    "id": 2570,
                    "name": "ExpressionStatement",
                    "src": "5981:54:8"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2572
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "beneficiary",
                          "scope": 2600,
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
                            "id": 2571,
                            "name": "ElementaryTypeName",
                            "src": "6105:7:8"
                          }
                        ],
                        "id": 2572,
                        "name": "VariableDeclaration",
                        "src": "6105:19:8"
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
                              "referencedDeclaration": 1527,
                              "type": "function (bytes32) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2299,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 2573,
                                "name": "Identifier",
                                "src": "6127:12:8"
                              }
                            ],
                            "id": 2574,
                            "name": "MemberAccess",
                            "src": "6127:27:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2522,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2575,
                            "name": "Identifier",
                            "src": "6155:11:8"
                          }
                        ],
                        "id": 2576,
                        "name": "FunctionCall",
                        "src": "6127:40:8"
                      }
                    ],
                    "id": 2577,
                    "name": "VariableDeclarationStatement",
                    "src": "6105:62:8"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2578,
                            "name": "Identifier",
                            "src": "6235:7:8"
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
                                  "referencedDeclaration": 8005,
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
                                          "referencedDeclaration": 7982,
                                          "type": "type(contract ERC20)",
                                          "value": "ERC20"
                                        },
                                        "id": 2579,
                                        "name": "Identifier",
                                        "src": "6256:5:8"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "token",
                                          "referencedDeclaration": 2290,
                                          "type": "address"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2526,
                                              "type": "struct Collateralized.Collateral memory",
                                              "value": "collateral"
                                            },
                                            "id": 2580,
                                            "name": "Identifier",
                                            "src": "6262:10:8"
                                          }
                                        ],
                                        "id": 2581,
                                        "name": "MemberAccess",
                                        "src": "6262:16:8"
                                      }
                                    ],
                                    "id": 2582,
                                    "name": "FunctionCall",
                                    "src": "6256:23:8"
                                  }
                                ],
                                "id": 2583,
                                "name": "MemberAccess",
                                "src": "6256:32:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2572,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 2584,
                                "name": "Identifier",
                                "src": "6306:11:8"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "amount",
                                  "referencedDeclaration": 2292,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2526,
                                      "type": "struct Collateralized.Collateral memory",
                                      "value": "collateral"
                                    },
                                    "id": 2585,
                                    "name": "Identifier",
                                    "src": "6335:10:8"
                                  }
                                ],
                                "id": 2586,
                                "name": "MemberAccess",
                                "src": "6335:17:8"
                              }
                            ],
                            "id": 2587,
                            "name": "FunctionCall",
                            "src": "6256:110:8"
                          }
                        ],
                        "id": 2588,
                        "name": "FunctionCall",
                        "src": "6235:141:8"
                      }
                    ],
                    "id": 2589,
                    "name": "ExpressionStatement",
                    "src": "6235:141:8"
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
                              "referencedDeclaration": 2331,
                              "type": "function (bytes32,address,address,uint256)",
                              "value": "CollateralSeized"
                            },
                            "id": 2590,
                            "name": "Identifier",
                            "src": "6421:16:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2522,
                              "type": "bytes32",
                              "value": "agreementID"
                            },
                            "id": 2591,
                            "name": "Identifier",
                            "src": "6451:11:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2572,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 2592,
                            "name": "Identifier",
                            "src": "6476:11:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "token",
                              "referencedDeclaration": 2290,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2526,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2593,
                                "name": "Identifier",
                                "src": "6501:10:8"
                              }
                            ],
                            "id": 2594,
                            "name": "MemberAccess",
                            "src": "6501:16:8"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amount",
                              "referencedDeclaration": 2292,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2526,
                                  "type": "struct Collateralized.Collateral memory",
                                  "value": "collateral"
                                },
                                "id": 2595,
                                "name": "Identifier",
                                "src": "6531:10:8"
                              }
                            ],
                            "id": 2596,
                            "name": "MemberAccess",
                            "src": "6531:17:8"
                          }
                        ],
                        "id": 2597,
                        "name": "FunctionCall",
                        "src": "6421:137:8"
                      }
                    ],
                    "id": 2598,
                    "name": "ExpressionStatement",
                    "src": "6421:137:8"
                  }
                ],
                "id": 2599,
                "name": "Block",
                "src": "5216:1349:8"
              }
            ],
            "id": 2600,
            "name": "FunctionDefinition",
            "src": "5137:1428:8"
          }
        ],
        "id": 2601,
        "name": "ContractDefinition",
        "src": "789:5778:8"
      }
    ],
    "id": 2602,
    "name": "SourceUnit",
    "src": "584:5984:8"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.345Z"
}