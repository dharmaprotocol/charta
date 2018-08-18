export const IncompatibleTermsContract = 
{
  "contractName": "IncompatibleTermsContract",
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
          "name": "_valueRepaid",
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
          "name": "_agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getTermEndTimestamp",
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
      "constant": false,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "debtor",
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
          "name": "_expectedRepaymentValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6102938061001e6000396000f30060606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100ad5780635f0280ba146100e8578063977a5e641461018d57806399114d84146101eb575b600080fd5b341561007d57600080fd5b61009760048080356000191690602001909190505061022f565b6040518082815260200191505060405180910390f35b34156100b857600080fd5b6100d2600480803560001916906020019091905050610239565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61017360048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610243565b604051808215151515815260200191505060405180910390f35b341561019857600080fd5b6101d160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610251565b604051808215151515815260200191505060405180910390f35b34156101f657600080fd5b61021960048080356000191690602001909190803590602001909190505061025c565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820f828956284b3469c869d4f46dddc071c3a378bca4d3d6aca9ec5e60ab8b00d0d0029",
  "deployedBytecode": "0x60606040526004361061006d576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100725780632762dd8c146100ad5780635f0280ba146100e8578063977a5e641461018d57806399114d84146101eb575b600080fd5b341561007d57600080fd5b61009760048080356000191690602001909190505061022f565b6040518082815260200191505060405180910390f35b34156100b857600080fd5b6100d2600480803560001916906020019091905050610239565b6040518082815260200191505060405180910390f35b34156100f357600080fd5b61017360048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610243565b604051808215151515815260200191505060405180910390f35b341561019857600080fd5b6101d160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610251565b604051808215151515815260200191505060405180910390f35b34156101f657600080fd5b61021960048080356000191690602001909190803590602001909190505061025c565b6040518082815260200191505060405180910390f35b6000809050919050565b6000809050919050565b600080905095945050505050565b600080905092915050565b6000809050929150505600a165627a7a72305820f828956284b3469c869d4f46dddc071c3a378bca4d3d6aca9ec5e60ab8b00d0d0029",
  "sourceMap": "867:3132:30:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "867:3132:30:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3876:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;3876:121::-;3962:4;3989:1;3982:8;;3876:121;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
      "exportedSymbols": {
        "IncompatibleTermsContract": [
          8275
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
        "id": 8209,
        "name": "PragmaDirective",
        "src": "584:23:30"
      },
      {
        "attributes": {
          "SourceUnit": 4183,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/TermsContract.sol",
          "file": "../../TermsContract.sol",
          "scope": 8276,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8210,
        "name": "ImportDirective",
        "src": "609:33:30"
      },
      {
        "attributes": {
          "contractDependencies": [
            4182
          ],
          "contractKind": "contract",
          "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            8275,
            4182
          ],
          "name": "IncompatibleTermsContract",
          "scope": 8276
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
                  "referencedDeclaration": 4182,
                  "type": "contract TermsContract"
                },
                "id": 8211,
                "name": "UserDefinedTypeName",
                "src": "905:13:30"
              }
            ],
            "id": 8212,
            "name": "InheritanceSpecifier",
            "src": "905:13:30"
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
              "scope": 8275,
              "stateMutability": "nonpayable",
              "superFunction": 4143,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 8224,
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
                        "id": 8213,
                        "name": "ElementaryTypeName",
                        "src": "1536:7:30"
                      }
                    ],
                    "id": 8214,
                    "name": "VariableDeclaration",
                    "src": "1536:19:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 8224,
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
                        "id": 8215,
                        "name": "ElementaryTypeName",
                        "src": "1565:7:30"
                      }
                    ],
                    "id": 8216,
                    "name": "VariableDeclaration",
                    "src": "1565:14:30"
                  }
                ],
                "id": 8217,
                "name": "ParameterList",
                "src": "1526:59:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 8224,
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
                        "id": 8218,
                        "name": "ElementaryTypeName",
                        "src": "1618:4:30"
                      }
                    ],
                    "id": 8219,
                    "name": "VariableDeclaration",
                    "src": "1618:13:30"
                  }
                ],
                "id": 8220,
                "name": "ParameterList",
                "src": "1617:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8220
                    },
                    "children": [
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
                        "id": 8221,
                        "name": "Literal",
                        "src": "1654:5:30"
                      }
                    ],
                    "id": 8222,
                    "name": "Return",
                    "src": "1647:12:30"
                  }
                ],
                "id": 8223,
                "name": "Block",
                "src": "1637:29:30"
              }
            ],
            "id": 8224,
            "name": "FunctionDefinition",
            "src": "1500:166:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerRepayment",
              "payable": false,
              "scope": 8275,
              "stateMutability": "nonpayable",
              "superFunction": 4158,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 8242,
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
                        "id": 8225,
                        "name": "ElementaryTypeName",
                        "src": "2413:7:30"
                      }
                    ],
                    "id": 8226,
                    "name": "VariableDeclaration",
                    "src": "2413:19:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 8242,
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
                        "id": 8227,
                        "name": "ElementaryTypeName",
                        "src": "2442:7:30"
                      }
                    ],
                    "id": 8228,
                    "name": "VariableDeclaration",
                    "src": "2442:13:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 8242,
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
                        "id": 8229,
                        "name": "ElementaryTypeName",
                        "src": "2465:7:30"
                      }
                    ],
                    "id": 8230,
                    "name": "VariableDeclaration",
                    "src": "2465:19:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 8242,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8231,
                        "name": "ElementaryTypeName",
                        "src": "2494:7:30"
                      }
                    ],
                    "id": 8232,
                    "name": "VariableDeclaration",
                    "src": "2494:24:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 8242,
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
                        "id": 8233,
                        "name": "ElementaryTypeName",
                        "src": "2528:7:30"
                      }
                    ],
                    "id": 8234,
                    "name": "VariableDeclaration",
                    "src": "2528:20:30"
                  }
                ],
                "id": 8235,
                "name": "ParameterList",
                "src": "2403:151:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 8242,
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
                        "id": 8236,
                        "name": "ElementaryTypeName",
                        "src": "2587:4:30"
                      }
                    ],
                    "id": 8237,
                    "name": "VariableDeclaration",
                    "src": "2587:13:30"
                  }
                ],
                "id": 8238,
                "name": "ParameterList",
                "src": "2586:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8238
                    },
                    "children": [
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
                        "id": 8239,
                        "name": "Literal",
                        "src": "2623:5:30"
                      }
                    ],
                    "id": 8240,
                    "name": "Return",
                    "src": "2616:12:30"
                  }
                ],
                "id": 8241,
                "name": "Block",
                "src": "2606:29:30"
              }
            ],
            "id": 8242,
            "name": "FunctionDefinition",
            "src": "2377:258:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 8275,
              "stateMutability": "view",
              "superFunction": 4167,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 8254,
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
                        "id": 8243,
                        "name": "ElementaryTypeName",
                        "src": "3288:7:30"
                      }
                    ],
                    "id": 8244,
                    "name": "VariableDeclaration",
                    "src": "3288:19:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 8254,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 8245,
                        "name": "ElementaryTypeName",
                        "src": "3317:7:30"
                      }
                    ],
                    "id": 8246,
                    "name": "VariableDeclaration",
                    "src": "3317:17:30"
                  }
                ],
                "id": 8247,
                "name": "ParameterList",
                "src": "3278:62:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 8254,
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
                        "id": 8248,
                        "name": "ElementaryTypeName",
                        "src": "3386:4:30"
                      }
                    ],
                    "id": 8249,
                    "name": "VariableDeclaration",
                    "src": "3386:28:30"
                  }
                ],
                "id": 8250,
                "name": "ParameterList",
                "src": "3385:30:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8250
                    },
                    "children": [
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
                        "id": 8251,
                        "name": "Literal",
                        "src": "3437:1:30"
                      }
                    ],
                    "id": 8252,
                    "name": "Return",
                    "src": "3430:8:30"
                  }
                ],
                "id": 8253,
                "name": "Block",
                "src": "3420:25:30"
              }
            ],
            "id": 8254,
            "name": "FunctionDefinition",
            "src": "3244:201:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 8275,
              "stateMutability": "view",
              "superFunction": 4174,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 8264,
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
                        "id": 8255,
                        "name": "ElementaryTypeName",
                        "src": "3756:7:30"
                      }
                    ],
                    "id": 8256,
                    "name": "VariableDeclaration",
                    "src": "3756:19:30"
                  }
                ],
                "id": 8257,
                "name": "ParameterList",
                "src": "3755:21:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 8264,
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
                        "id": 8258,
                        "name": "ElementaryTypeName",
                        "src": "3822:4:30"
                      }
                    ],
                    "id": 8259,
                    "name": "VariableDeclaration",
                    "src": "3822:17:30"
                  }
                ],
                "id": 8260,
                "name": "ParameterList",
                "src": "3821:19:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8260
                    },
                    "children": [
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
                        "id": 8261,
                        "name": "Literal",
                        "src": "3862:1:30"
                      }
                    ],
                    "id": 8262,
                    "name": "Return",
                    "src": "3855:8:30"
                  }
                ],
                "id": 8263,
                "name": "Block",
                "src": "3845:25:30"
              }
            ],
            "id": 8264,
            "name": "FunctionDefinition",
            "src": "3726:144:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTermEndTimestamp",
              "payable": false,
              "scope": 8275,
              "stateMutability": "view",
              "superFunction": 4181,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agreementId",
                      "scope": 8274,
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
                        "id": 8265,
                        "name": "ElementaryTypeName",
                        "src": "3914:7:30"
                      }
                    ],
                    "id": 8266,
                    "name": "VariableDeclaration",
                    "src": "3914:20:30"
                  }
                ],
                "id": 8267,
                "name": "ParameterList",
                "src": "3904:36:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8274,
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
                        "id": 8268,
                        "name": "ElementaryTypeName",
                        "src": "3962:4:30"
                      }
                    ],
                    "id": 8269,
                    "name": "VariableDeclaration",
                    "src": "3962:4:30"
                  }
                ],
                "id": 8270,
                "name": "ParameterList",
                "src": "3961:6:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 8270
                    },
                    "children": [
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
                        "id": 8271,
                        "name": "Literal",
                        "src": "3989:1:30"
                      }
                    ],
                    "id": 8272,
                    "name": "Return",
                    "src": "3982:8:30"
                  }
                ],
                "id": 8273,
                "name": "Block",
                "src": "3972:25:30"
              }
            ],
            "id": 8274,
            "name": "FunctionDefinition",
            "src": "3876:121:30"
          }
        ],
        "id": 8275,
        "name": "ContractDefinition",
        "src": "867:3132:30"
      }
    ],
    "id": 8276,
    "name": "SourceUnit",
    "src": "584:3416:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {},
      "links": {},
      "address": "0x76aa5a86834cafc1b520787056f99364ad2fb7ed"
    },
    "42": {
      "events": {},
      "links": {},
      "address": "0xb2e179e109640107d9dd84fef76768219cdb9089"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x6c0202acadc09204c1e9a79d5441cbf776aa54e3"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-17T19:19:44.790Z"
}