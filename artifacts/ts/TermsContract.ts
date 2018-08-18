export const TermsContract = 
{
  "contractName": "TermsContract",
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
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ninterface TermsContract {\n     /// When called, the registerTermStart function registers the fact that\n     ///    the debt agreement has begun.  This method is called as a hook by the\n     ///    DebtKernel when a debt order associated with `agreementId` is filled.\n     ///    Method is not required to make any sort of internal state change\n     ///    upon the debt agreement's start, but MUST return `true` in order to\n     ///    acknowledge receipt of the transaction.  If, for any reason, the\n     ///    debt agreement stored at `agreementId` is incompatible with this contract,\n     ///    MUST return `false`, which will cause the pertinent order fill to fail.\n     ///    If this method is called for a debt agreement whose term has already begun,\n     ///    must THROW.  Similarly, if this method is called by any contract other\n     ///    than the current DebtKernel, must THROW.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  debtor address. The debtor in this particular issuance.\n     /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    ) public returns (bool _success);\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    ) public returns (bool _success);\n\n     /// Returns the cumulative units-of-value expected to be repaid by a given block timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp of the block for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid by the time the given timestamp lapses.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    ) public view returns (uint256);\n\n     /// Returns the cumulative units-of-value repaid by the point at which this method is called.\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid up until now.\n    function getValueRepaidToDate(\n        bytes32 agreementId\n    ) public view returns (uint256);\n\n    /**\n     * A method that returns a Unix timestamp representing the end of the debt agreement's term.\n     * contract.\n     */\n    function getTermEndTimestamp(\n        bytes32 _agreementId\n    ) public view returns (uint);\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/TermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/TermsContract.sol",
      "exportedSymbols": {
        "TermsContract": [
          4182
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
        "id": 4134,
        "name": "PragmaDirective",
        "src": "584:23:10"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "interface",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            4182
          ],
          "name": "TermsContract",
          "scope": 4183
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerTermStart",
              "payable": false,
              "scope": 4182,
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
                      "scope": 4143,
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
                        "id": 4135,
                        "name": "ElementaryTypeName",
                        "src": "1794:7:10"
                      }
                    ],
                    "id": 4136,
                    "name": "VariableDeclaration",
                    "src": "1794:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 4143,
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
                        "id": 4137,
                        "name": "ElementaryTypeName",
                        "src": "1823:7:10"
                      }
                    ],
                    "id": 4138,
                    "name": "VariableDeclaration",
                    "src": "1823:14:10"
                  }
                ],
                "id": 4139,
                "name": "ParameterList",
                "src": "1784:59:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 4143,
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
                        "id": 4140,
                        "name": "ElementaryTypeName",
                        "src": "1860:4:10"
                      }
                    ],
                    "id": 4141,
                    "name": "VariableDeclaration",
                    "src": "1860:13:10"
                  }
                ],
                "id": 4142,
                "name": "ParameterList",
                "src": "1859:15:10"
              }
            ],
            "id": 4143,
            "name": "FunctionDefinition",
            "src": "1758:117:10"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "registerRepayment",
              "payable": false,
              "scope": 4182,
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
                      "scope": 4158,
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
                        "id": 4144,
                        "name": "ElementaryTypeName",
                        "src": "2622:7:10"
                      }
                    ],
                    "id": 4145,
                    "name": "VariableDeclaration",
                    "src": "2622:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 4158,
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
                        "id": 4146,
                        "name": "ElementaryTypeName",
                        "src": "2651:7:10"
                      }
                    ],
                    "id": 4147,
                    "name": "VariableDeclaration",
                    "src": "2651:13:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 4158,
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
                        "id": 4148,
                        "name": "ElementaryTypeName",
                        "src": "2674:7:10"
                      }
                    ],
                    "id": 4149,
                    "name": "VariableDeclaration",
                    "src": "2674:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 4158,
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
                        "id": 4150,
                        "name": "ElementaryTypeName",
                        "src": "2703:7:10"
                      }
                    ],
                    "id": 4151,
                    "name": "VariableDeclaration",
                    "src": "2703:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 4158,
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
                        "id": 4152,
                        "name": "ElementaryTypeName",
                        "src": "2737:7:10"
                      }
                    ],
                    "id": 4153,
                    "name": "VariableDeclaration",
                    "src": "2737:20:10"
                  }
                ],
                "id": 4154,
                "name": "ParameterList",
                "src": "2612:151:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 4158,
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
                        "id": 4155,
                        "name": "ElementaryTypeName",
                        "src": "2780:4:10"
                      }
                    ],
                    "id": 4156,
                    "name": "VariableDeclaration",
                    "src": "2780:13:10"
                  }
                ],
                "id": 4157,
                "name": "ParameterList",
                "src": "2779:15:10"
              }
            ],
            "id": 4158,
            "name": "FunctionDefinition",
            "src": "2586:209:10"
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
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 4182,
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
                      "scope": 4167,
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
                        "id": 4159,
                        "name": "ElementaryTypeName",
                        "src": "3475:7:10"
                      }
                    ],
                    "id": 4160,
                    "name": "VariableDeclaration",
                    "src": "3475:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 4167,
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
                        "id": 4161,
                        "name": "ElementaryTypeName",
                        "src": "3504:7:10"
                      }
                    ],
                    "id": 4162,
                    "name": "VariableDeclaration",
                    "src": "3504:17:10"
                  }
                ],
                "id": 4163,
                "name": "ParameterList",
                "src": "3465:62:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4167,
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
                        "id": 4164,
                        "name": "ElementaryTypeName",
                        "src": "3549:7:10"
                      }
                    ],
                    "id": 4165,
                    "name": "VariableDeclaration",
                    "src": "3549:7:10"
                  }
                ],
                "id": 4166,
                "name": "ParameterList",
                "src": "3548:9:10"
              }
            ],
            "id": 4167,
            "name": "FunctionDefinition",
            "src": "3431:127:10"
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
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 4182,
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
                      "scope": 4174,
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
                        "id": 4168,
                        "name": "ElementaryTypeName",
                        "src": "3895:7:10"
                      }
                    ],
                    "id": 4169,
                    "name": "VariableDeclaration",
                    "src": "3895:19:10"
                  }
                ],
                "id": 4170,
                "name": "ParameterList",
                "src": "3885:35:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4174,
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
                        "id": 4171,
                        "name": "ElementaryTypeName",
                        "src": "3942:7:10"
                      }
                    ],
                    "id": 4172,
                    "name": "VariableDeclaration",
                    "src": "3942:7:10"
                  }
                ],
                "id": 4173,
                "name": "ParameterList",
                "src": "3941:9:10"
              }
            ],
            "id": 4174,
            "name": "FunctionDefinition",
            "src": "3856:95:10"
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
              "scope": 4182,
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
                      "name": "_agreementId",
                      "scope": 4181,
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
                        "id": 4175,
                        "name": "ElementaryTypeName",
                        "src": "4125:7:10"
                      }
                    ],
                    "id": 4176,
                    "name": "VariableDeclaration",
                    "src": "4125:20:10"
                  }
                ],
                "id": 4177,
                "name": "ParameterList",
                "src": "4115:36:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 4181,
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
                        "id": 4178,
                        "name": "ElementaryTypeName",
                        "src": "4173:4:10"
                      }
                    ],
                    "id": 4179,
                    "name": "VariableDeclaration",
                    "src": "4173:4:10"
                  }
                ],
                "id": 4180,
                "name": "ParameterList",
                "src": "4172:6:10"
              }
            ],
            "id": 4181,
            "name": "FunctionDefinition",
            "src": "4087:92:10"
          }
        ],
        "id": 4182,
        "name": "ContractDefinition",
        "src": "610:3571:10"
      }
    ],
    "id": 4183,
    "name": "SourceUnit",
    "src": "584:3598:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-17T19:19:33.719Z"
}