export const ERC20 = 
{
  "contractName": "ERC20",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "spender",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
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
      "name": "totalSupply",
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
          "name": "from",
          "type": "address"
        },
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
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
          "name": "who",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
          "name": "to",
          "type": "address"
        },
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
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
          "name": "owner",
          "type": "address"
        },
        {
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./ERC20Basic.sol\";\n\n\n/**\n * @title ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/20\n */\ncontract ERC20 is ERC20Basic {\n  function allowance(address owner, address spender) public view returns (uint256);\n  function transferFrom(address from, address to, uint256 value) public returns (bool);\n  function approve(address spender, uint256 value) public returns (bool);\n  event Approval(address indexed owner, address indexed spender, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
      "exportedSymbols": {
        "ERC20": [
          14338
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 14297,
        "name": "PragmaDirective",
        "src": "0:24:41"
      },
      {
        "attributes": {
          "SourceUnit": 14371,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 14339,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14298,
        "name": "ImportDirective",
        "src": "26:26:41"
      },
      {
        "attributes": {
          "contractDependencies": [
            14370
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            14338,
            14370
          ],
          "name": "ERC20",
          "scope": 14339
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
                  "name": "ERC20Basic",
                  "referencedDeclaration": 14370,
                  "type": "contract ERC20Basic"
                },
                "id": 14299,
                "name": "UserDefinedTypeName",
                "src": "162:10:41"
              }
            ],
            "id": 14300,
            "name": "InheritanceSpecifier",
            "src": "162:10:41"
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
              "name": "allowance",
              "payable": false,
              "scope": 14338,
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
                      "name": "owner",
                      "scope": 14309,
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
                        "id": 14301,
                        "name": "ElementaryTypeName",
                        "src": "196:7:41"
                      }
                    ],
                    "id": 14302,
                    "name": "VariableDeclaration",
                    "src": "196:13:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 14309,
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
                        "id": 14303,
                        "name": "ElementaryTypeName",
                        "src": "211:7:41"
                      }
                    ],
                    "id": 14304,
                    "name": "VariableDeclaration",
                    "src": "211:15:41"
                  }
                ],
                "id": 14305,
                "name": "ParameterList",
                "src": "195:32:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14309,
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
                        "id": 14306,
                        "name": "ElementaryTypeName",
                        "src": "249:7:41"
                      }
                    ],
                    "id": 14307,
                    "name": "VariableDeclaration",
                    "src": "249:7:41"
                  }
                ],
                "id": 14308,
                "name": "ParameterList",
                "src": "248:9:41"
              }
            ],
            "id": 14309,
            "name": "FunctionDefinition",
            "src": "177:81:41"
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
              "name": "transferFrom",
              "payable": false,
              "scope": 14338,
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
                      "name": "from",
                      "scope": 14320,
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
                        "id": 14310,
                        "name": "ElementaryTypeName",
                        "src": "283:7:41"
                      }
                    ],
                    "id": 14311,
                    "name": "VariableDeclaration",
                    "src": "283:12:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 14320,
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
                        "id": 14312,
                        "name": "ElementaryTypeName",
                        "src": "297:7:41"
                      }
                    ],
                    "id": 14313,
                    "name": "VariableDeclaration",
                    "src": "297:10:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 14320,
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
                        "id": 14314,
                        "name": "ElementaryTypeName",
                        "src": "309:7:41"
                      }
                    ],
                    "id": 14315,
                    "name": "VariableDeclaration",
                    "src": "309:13:41"
                  }
                ],
                "id": 14316,
                "name": "ParameterList",
                "src": "282:41:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14320,
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
                        "id": 14317,
                        "name": "ElementaryTypeName",
                        "src": "340:4:41"
                      }
                    ],
                    "id": 14318,
                    "name": "VariableDeclaration",
                    "src": "340:4:41"
                  }
                ],
                "id": 14319,
                "name": "ParameterList",
                "src": "339:6:41"
              }
            ],
            "id": 14320,
            "name": "FunctionDefinition",
            "src": "261:85:41"
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
              "name": "approve",
              "payable": false,
              "scope": 14338,
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
                      "name": "spender",
                      "scope": 14329,
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
                        "id": 14321,
                        "name": "ElementaryTypeName",
                        "src": "366:7:41"
                      }
                    ],
                    "id": 14322,
                    "name": "VariableDeclaration",
                    "src": "366:15:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 14329,
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
                        "id": 14323,
                        "name": "ElementaryTypeName",
                        "src": "383:7:41"
                      }
                    ],
                    "id": 14324,
                    "name": "VariableDeclaration",
                    "src": "383:13:41"
                  }
                ],
                "id": 14325,
                "name": "ParameterList",
                "src": "365:32:41"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14329,
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
                        "id": 14326,
                        "name": "ElementaryTypeName",
                        "src": "414:4:41"
                      }
                    ],
                    "id": 14327,
                    "name": "VariableDeclaration",
                    "src": "414:4:41"
                  }
                ],
                "id": 14328,
                "name": "ParameterList",
                "src": "413:6:41"
              }
            ],
            "id": 14329,
            "name": "FunctionDefinition",
            "src": "349:71:41"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "owner",
                      "scope": 14337,
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
                        "id": 14330,
                        "name": "ElementaryTypeName",
                        "src": "438:7:41"
                      }
                    ],
                    "id": 14331,
                    "name": "VariableDeclaration",
                    "src": "438:21:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 14337,
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
                        "id": 14332,
                        "name": "ElementaryTypeName",
                        "src": "461:7:41"
                      }
                    ],
                    "id": 14333,
                    "name": "VariableDeclaration",
                    "src": "461:23:41"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 14337,
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
                        "id": 14334,
                        "name": "ElementaryTypeName",
                        "src": "486:7:41"
                      }
                    ],
                    "id": 14335,
                    "name": "VariableDeclaration",
                    "src": "486:13:41"
                  }
                ],
                "id": 14336,
                "name": "ParameterList",
                "src": "437:63:41"
              }
            ],
            "id": 14337,
            "name": "EventDefinition",
            "src": "423:78:41"
          }
        ],
        "id": 14338,
        "name": "ContractDefinition",
        "src": "144:359:41"
      }
    ],
    "id": 14339,
    "name": "SourceUnit",
    "src": "0:504:41"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:45.892Z"
}