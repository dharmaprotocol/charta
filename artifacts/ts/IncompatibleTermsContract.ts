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
  "sourceMap": "867:3132:33:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "867:3132:33:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3876:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2377:258;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1500:166;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3244:201;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3726:144;3822:17;3862:1;3855:8;;3726:144;;;:::o;3876:121::-;3962:4;3989:1;3982:8;;3876:121;;;:::o;2377:258::-;2587:13;2623:5;2616:12;;2377:258;;;;;;;:::o;1500:166::-;1618:13;1654:5;1647:12;;1500:166;;;;:::o;3244:201::-;3386:28;3437:1;3430:8;;3244:201;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"../../TermsContract.sol\";\n\n\n/**\n * Contract created for testing purposes that will consistently reject\n * debt order fills that are mapped to it by returning `false` for\n * `registerTermStart`\n *\n * Author: Nadav Hollander Github: nadavhollander\n */\ncontract IncompatibleTermsContract is TermsContract {\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        returns (bool _success)\n    {\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        returns (uint _expectedRepaymentValue)\n    {\n        return 0;\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return 0;\n    }\n\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint)\n    {\n        return 0;\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/test/terms_contracts/IncompatibleTermsContract.sol",
      "exportedSymbols": {
        "IncompatibleTermsContract": [
          12593
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
        "id": 12527,
        "name": "PragmaDirective",
        "src": "584:23:33"
      },
      {
        "attributes": {
          "SourceUnit": 4766,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/TermsContract.sol",
          "file": "../../TermsContract.sol",
          "scope": 12594,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 12528,
        "name": "ImportDirective",
        "src": "609:33:33"
      },
      {
        "attributes": {
          "contractDependencies": [
            4765
          ],
          "contractKind": "contract",
          "documentation": "Contract created for testing purposes that will consistently reject\ndebt order fills that are mapped to it by returning `false` for\n`registerTermStart`\n * Author: Nadav Hollander Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            12593,
            4765
          ],
          "name": "IncompatibleTermsContract",
          "scope": 12594
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
                  "referencedDeclaration": 4765,
                  "type": "contract TermsContract"
                },
                "id": 12529,
                "name": "UserDefinedTypeName",
                "src": "905:13:33"
              }
            ],
            "id": 12530,
            "name": "InheritanceSpecifier",
            "src": "905:13:33"
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
              "scope": 12593,
              "stateMutability": "nonpayable",
              "superFunction": 4726,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 12542,
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
                        "id": 12531,
                        "name": "ElementaryTypeName",
                        "src": "1536:7:33"
                      }
                    ],
                    "id": 12532,
                    "name": "VariableDeclaration",
                    "src": "1536:19:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 12542,
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
                        "id": 12533,
                        "name": "ElementaryTypeName",
                        "src": "1565:7:33"
                      }
                    ],
                    "id": 12534,
                    "name": "VariableDeclaration",
                    "src": "1565:14:33"
                  }
                ],
                "id": 12535,
                "name": "ParameterList",
                "src": "1526:59:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 12542,
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
                        "id": 12536,
                        "name": "ElementaryTypeName",
                        "src": "1618:4:33"
                      }
                    ],
                    "id": 12537,
                    "name": "VariableDeclaration",
                    "src": "1618:13:33"
                  }
                ],
                "id": 12538,
                "name": "ParameterList",
                "src": "1617:15:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 12538
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
                        "id": 12539,
                        "name": "Literal",
                        "src": "1654:5:33"
                      }
                    ],
                    "id": 12540,
                    "name": "Return",
                    "src": "1647:12:33"
                  }
                ],
                "id": 12541,
                "name": "Block",
                "src": "1637:29:33"
              }
            ],
            "id": 12542,
            "name": "FunctionDefinition",
            "src": "1500:166:33"
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
              "scope": 12593,
              "stateMutability": "nonpayable",
              "superFunction": 4741,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 12560,
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
                        "id": 12543,
                        "name": "ElementaryTypeName",
                        "src": "2413:7:33"
                      }
                    ],
                    "id": 12544,
                    "name": "VariableDeclaration",
                    "src": "2413:19:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 12560,
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
                        "id": 12545,
                        "name": "ElementaryTypeName",
                        "src": "2442:7:33"
                      }
                    ],
                    "id": 12546,
                    "name": "VariableDeclaration",
                    "src": "2442:13:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 12560,
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
                        "id": 12547,
                        "name": "ElementaryTypeName",
                        "src": "2465:7:33"
                      }
                    ],
                    "id": 12548,
                    "name": "VariableDeclaration",
                    "src": "2465:19:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 12560,
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
                        "id": 12549,
                        "name": "ElementaryTypeName",
                        "src": "2494:7:33"
                      }
                    ],
                    "id": 12550,
                    "name": "VariableDeclaration",
                    "src": "2494:24:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 12560,
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
                        "id": 12551,
                        "name": "ElementaryTypeName",
                        "src": "2528:7:33"
                      }
                    ],
                    "id": 12552,
                    "name": "VariableDeclaration",
                    "src": "2528:20:33"
                  }
                ],
                "id": 12553,
                "name": "ParameterList",
                "src": "2403:151:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 12560,
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
                        "id": 12554,
                        "name": "ElementaryTypeName",
                        "src": "2587:4:33"
                      }
                    ],
                    "id": 12555,
                    "name": "VariableDeclaration",
                    "src": "2587:13:33"
                  }
                ],
                "id": 12556,
                "name": "ParameterList",
                "src": "2586:15:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 12556
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
                        "id": 12557,
                        "name": "Literal",
                        "src": "2623:5:33"
                      }
                    ],
                    "id": 12558,
                    "name": "Return",
                    "src": "2616:12:33"
                  }
                ],
                "id": 12559,
                "name": "Block",
                "src": "2606:29:33"
              }
            ],
            "id": 12560,
            "name": "FunctionDefinition",
            "src": "2377:258:33"
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
              "scope": 12593,
              "stateMutability": "view",
              "superFunction": 4750,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 12572,
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
                        "id": 12561,
                        "name": "ElementaryTypeName",
                        "src": "3288:7:33"
                      }
                    ],
                    "id": 12562,
                    "name": "VariableDeclaration",
                    "src": "3288:19:33"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 12572,
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
                        "id": 12563,
                        "name": "ElementaryTypeName",
                        "src": "3317:7:33"
                      }
                    ],
                    "id": 12564,
                    "name": "VariableDeclaration",
                    "src": "3317:17:33"
                  }
                ],
                "id": 12565,
                "name": "ParameterList",
                "src": "3278:62:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 12572,
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
                        "id": 12566,
                        "name": "ElementaryTypeName",
                        "src": "3386:4:33"
                      }
                    ],
                    "id": 12567,
                    "name": "VariableDeclaration",
                    "src": "3386:28:33"
                  }
                ],
                "id": 12568,
                "name": "ParameterList",
                "src": "3385:30:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 12568
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
                        "id": 12569,
                        "name": "Literal",
                        "src": "3437:1:33"
                      }
                    ],
                    "id": 12570,
                    "name": "Return",
                    "src": "3430:8:33"
                  }
                ],
                "id": 12571,
                "name": "Block",
                "src": "3420:25:33"
              }
            ],
            "id": 12572,
            "name": "FunctionDefinition",
            "src": "3244:201:33"
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
              "scope": 12593,
              "stateMutability": "view",
              "superFunction": 4757,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 12582,
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
                        "id": 12573,
                        "name": "ElementaryTypeName",
                        "src": "3756:7:33"
                      }
                    ],
                    "id": 12574,
                    "name": "VariableDeclaration",
                    "src": "3756:19:33"
                  }
                ],
                "id": 12575,
                "name": "ParameterList",
                "src": "3755:21:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 12582,
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
                        "id": 12576,
                        "name": "ElementaryTypeName",
                        "src": "3822:4:33"
                      }
                    ],
                    "id": 12577,
                    "name": "VariableDeclaration",
                    "src": "3822:17:33"
                  }
                ],
                "id": 12578,
                "name": "ParameterList",
                "src": "3821:19:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 12578
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
                        "id": 12579,
                        "name": "Literal",
                        "src": "3862:1:33"
                      }
                    ],
                    "id": 12580,
                    "name": "Return",
                    "src": "3855:8:33"
                  }
                ],
                "id": 12581,
                "name": "Block",
                "src": "3845:25:33"
              }
            ],
            "id": 12582,
            "name": "FunctionDefinition",
            "src": "3726:144:33"
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
              "scope": 12593,
              "stateMutability": "view",
              "superFunction": 4764,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agreementId",
                      "scope": 12592,
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
                        "id": 12583,
                        "name": "ElementaryTypeName",
                        "src": "3914:7:33"
                      }
                    ],
                    "id": 12584,
                    "name": "VariableDeclaration",
                    "src": "3914:20:33"
                  }
                ],
                "id": 12585,
                "name": "ParameterList",
                "src": "3904:36:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 12592,
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
                        "id": 12586,
                        "name": "ElementaryTypeName",
                        "src": "3962:4:33"
                      }
                    ],
                    "id": 12587,
                    "name": "VariableDeclaration",
                    "src": "3962:4:33"
                  }
                ],
                "id": 12588,
                "name": "ParameterList",
                "src": "3961:6:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 12588
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
                        "id": 12589,
                        "name": "Literal",
                        "src": "3989:1:33"
                      }
                    ],
                    "id": 12590,
                    "name": "Return",
                    "src": "3982:8:33"
                  }
                ],
                "id": 12591,
                "name": "Block",
                "src": "3972:25:33"
              }
            ],
            "id": 12592,
            "name": "FunctionDefinition",
            "src": "3876:121:33"
          }
        ],
        "id": 12593,
        "name": "ContractDefinition",
        "src": "867:3132:33"
      }
    ],
    "id": 12594,
    "name": "SourceUnit",
    "src": "584:3416:33"
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
      "address": "0x2f81ca2667d63054e2235397c72ff1c55f5b0379"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0xd68dd75a98691a540c016ebaf068ba1159cc823c"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-10-15T20:10:47.926Z"
}