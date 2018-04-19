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
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
      "exportedSymbols": {
        "TermsContract": [
          1192
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
        "id": 1144,
        "name": "PragmaDirective",
        "src": "584:23:2"
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
            1192
          ],
          "name": "TermsContract",
          "scope": 1193
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
              "scope": 1192,
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
                      "scope": 1153,
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
                        "id": 1145,
                        "name": "ElementaryTypeName",
                        "src": "1794:7:2"
                      }
                    ],
                    "id": 1146,
                    "name": "VariableDeclaration",
                    "src": "1794:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 1153,
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
                        "id": 1147,
                        "name": "ElementaryTypeName",
                        "src": "1823:7:2"
                      }
                    ],
                    "id": 1148,
                    "name": "VariableDeclaration",
                    "src": "1823:14:2"
                  }
                ],
                "id": 1149,
                "name": "ParameterList",
                "src": "1784:59:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 1153,
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
                        "id": 1150,
                        "name": "ElementaryTypeName",
                        "src": "1860:4:2"
                      }
                    ],
                    "id": 1151,
                    "name": "VariableDeclaration",
                    "src": "1860:13:2"
                  }
                ],
                "id": 1152,
                "name": "ParameterList",
                "src": "1859:15:2"
              }
            ],
            "id": 1153,
            "name": "FunctionDefinition",
            "src": "1758:117:2"
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
              "scope": 1192,
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
                      "scope": 1168,
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
                        "id": 1154,
                        "name": "ElementaryTypeName",
                        "src": "2622:7:2"
                      }
                    ],
                    "id": 1155,
                    "name": "VariableDeclaration",
                    "src": "2622:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 1168,
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
                        "id": 1156,
                        "name": "ElementaryTypeName",
                        "src": "2651:7:2"
                      }
                    ],
                    "id": 1157,
                    "name": "VariableDeclaration",
                    "src": "2651:13:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 1168,
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
                        "id": 1158,
                        "name": "ElementaryTypeName",
                        "src": "2674:7:2"
                      }
                    ],
                    "id": 1159,
                    "name": "VariableDeclaration",
                    "src": "2674:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 1168,
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
                        "id": 1160,
                        "name": "ElementaryTypeName",
                        "src": "2703:7:2"
                      }
                    ],
                    "id": 1161,
                    "name": "VariableDeclaration",
                    "src": "2703:24:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 1168,
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
                        "id": 1162,
                        "name": "ElementaryTypeName",
                        "src": "2737:7:2"
                      }
                    ],
                    "id": 1163,
                    "name": "VariableDeclaration",
                    "src": "2737:20:2"
                  }
                ],
                "id": 1164,
                "name": "ParameterList",
                "src": "2612:151:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 1168,
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
                        "id": 1165,
                        "name": "ElementaryTypeName",
                        "src": "2780:4:2"
                      }
                    ],
                    "id": 1166,
                    "name": "VariableDeclaration",
                    "src": "2780:13:2"
                  }
                ],
                "id": 1167,
                "name": "ParameterList",
                "src": "2779:15:2"
              }
            ],
            "id": 1168,
            "name": "FunctionDefinition",
            "src": "2586:209:2"
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
              "scope": 1192,
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
                      "scope": 1177,
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
                        "id": 1169,
                        "name": "ElementaryTypeName",
                        "src": "3475:7:2"
                      }
                    ],
                    "id": 1170,
                    "name": "VariableDeclaration",
                    "src": "3475:19:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 1177,
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
                        "id": 1171,
                        "name": "ElementaryTypeName",
                        "src": "3504:7:2"
                      }
                    ],
                    "id": 1172,
                    "name": "VariableDeclaration",
                    "src": "3504:17:2"
                  }
                ],
                "id": 1173,
                "name": "ParameterList",
                "src": "3465:62:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1177,
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
                        "id": 1174,
                        "name": "ElementaryTypeName",
                        "src": "3549:7:2"
                      }
                    ],
                    "id": 1175,
                    "name": "VariableDeclaration",
                    "src": "3549:7:2"
                  }
                ],
                "id": 1176,
                "name": "ParameterList",
                "src": "3548:9:2"
              }
            ],
            "id": 1177,
            "name": "FunctionDefinition",
            "src": "3431:127:2"
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
              "scope": 1192,
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
                      "scope": 1184,
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
                        "id": 1178,
                        "name": "ElementaryTypeName",
                        "src": "3895:7:2"
                      }
                    ],
                    "id": 1179,
                    "name": "VariableDeclaration",
                    "src": "3895:19:2"
                  }
                ],
                "id": 1180,
                "name": "ParameterList",
                "src": "3885:35:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1184,
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
                        "id": 1181,
                        "name": "ElementaryTypeName",
                        "src": "3942:7:2"
                      }
                    ],
                    "id": 1182,
                    "name": "VariableDeclaration",
                    "src": "3942:7:2"
                  }
                ],
                "id": 1183,
                "name": "ParameterList",
                "src": "3941:9:2"
              }
            ],
            "id": 1184,
            "name": "FunctionDefinition",
            "src": "3856:95:2"
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
              "scope": 1192,
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
                      "scope": 1191,
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
                        "id": 1185,
                        "name": "ElementaryTypeName",
                        "src": "4125:7:2"
                      }
                    ],
                    "id": 1186,
                    "name": "VariableDeclaration",
                    "src": "4125:20:2"
                  }
                ],
                "id": 1187,
                "name": "ParameterList",
                "src": "4115:36:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1191,
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
                        "id": 1188,
                        "name": "ElementaryTypeName",
                        "src": "4173:4:2"
                      }
                    ],
                    "id": 1189,
                    "name": "VariableDeclaration",
                    "src": "4173:4:2"
                  }
                ],
                "id": 1190,
                "name": "ParameterList",
                "src": "4172:6:2"
              }
            ],
            "id": 1191,
            "name": "FunctionDefinition",
            "src": "4087:92:2"
          }
        ],
        "id": 1192,
        "name": "ContractDefinition",
        "src": "610:3571:2"
      }
    ],
    "id": 1193,
    "name": "SourceUnit",
    "src": "584:3598:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-19T23:50:06.566Z"
}