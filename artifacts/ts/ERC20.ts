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
          7982
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
        "id": 7941,
        "name": "PragmaDirective",
        "src": "0:24:35"
      },
      {
        "attributes": {
          "SourceUnit": 8015,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 7983,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7942,
        "name": "ImportDirective",
        "src": "26:26:35"
      },
      {
        "attributes": {
          "contractDependencies": [
            8014
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            7982,
            8014
          ],
          "name": "ERC20",
          "scope": 7983
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
                  "referencedDeclaration": 8014,
                  "type": "contract ERC20Basic"
                },
                "id": 7943,
                "name": "UserDefinedTypeName",
                "src": "162:10:35"
              }
            ],
            "id": 7944,
            "name": "InheritanceSpecifier",
            "src": "162:10:35"
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
              "scope": 7982,
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
                      "scope": 7953,
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
                        "id": 7945,
                        "name": "ElementaryTypeName",
                        "src": "196:7:35"
                      }
                    ],
                    "id": 7946,
                    "name": "VariableDeclaration",
                    "src": "196:13:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 7953,
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
                        "id": 7947,
                        "name": "ElementaryTypeName",
                        "src": "211:7:35"
                      }
                    ],
                    "id": 7948,
                    "name": "VariableDeclaration",
                    "src": "211:15:35"
                  }
                ],
                "id": 7949,
                "name": "ParameterList",
                "src": "195:32:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7953,
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
                        "id": 7950,
                        "name": "ElementaryTypeName",
                        "src": "249:7:35"
                      }
                    ],
                    "id": 7951,
                    "name": "VariableDeclaration",
                    "src": "249:7:35"
                  }
                ],
                "id": 7952,
                "name": "ParameterList",
                "src": "248:9:35"
              }
            ],
            "id": 7953,
            "name": "FunctionDefinition",
            "src": "177:81:35"
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
              "scope": 7982,
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
                      "scope": 7964,
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
                        "id": 7954,
                        "name": "ElementaryTypeName",
                        "src": "283:7:35"
                      }
                    ],
                    "id": 7955,
                    "name": "VariableDeclaration",
                    "src": "283:12:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 7964,
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
                        "id": 7956,
                        "name": "ElementaryTypeName",
                        "src": "297:7:35"
                      }
                    ],
                    "id": 7957,
                    "name": "VariableDeclaration",
                    "src": "297:10:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 7964,
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
                        "id": 7958,
                        "name": "ElementaryTypeName",
                        "src": "309:7:35"
                      }
                    ],
                    "id": 7959,
                    "name": "VariableDeclaration",
                    "src": "309:13:35"
                  }
                ],
                "id": 7960,
                "name": "ParameterList",
                "src": "282:41:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7964,
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
                        "id": 7961,
                        "name": "ElementaryTypeName",
                        "src": "340:4:35"
                      }
                    ],
                    "id": 7962,
                    "name": "VariableDeclaration",
                    "src": "340:4:35"
                  }
                ],
                "id": 7963,
                "name": "ParameterList",
                "src": "339:6:35"
              }
            ],
            "id": 7964,
            "name": "FunctionDefinition",
            "src": "261:85:35"
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
              "scope": 7982,
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
                      "scope": 7973,
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
                        "id": 7965,
                        "name": "ElementaryTypeName",
                        "src": "366:7:35"
                      }
                    ],
                    "id": 7966,
                    "name": "VariableDeclaration",
                    "src": "366:15:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 7973,
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
                        "id": 7967,
                        "name": "ElementaryTypeName",
                        "src": "383:7:35"
                      }
                    ],
                    "id": 7968,
                    "name": "VariableDeclaration",
                    "src": "383:13:35"
                  }
                ],
                "id": 7969,
                "name": "ParameterList",
                "src": "365:32:35"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7973,
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
                        "id": 7970,
                        "name": "ElementaryTypeName",
                        "src": "414:4:35"
                      }
                    ],
                    "id": 7971,
                    "name": "VariableDeclaration",
                    "src": "414:4:35"
                  }
                ],
                "id": 7972,
                "name": "ParameterList",
                "src": "413:6:35"
              }
            ],
            "id": 7973,
            "name": "FunctionDefinition",
            "src": "349:71:35"
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
                      "scope": 7981,
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
                        "id": 7974,
                        "name": "ElementaryTypeName",
                        "src": "438:7:35"
                      }
                    ],
                    "id": 7975,
                    "name": "VariableDeclaration",
                    "src": "438:21:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 7981,
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
                        "id": 7976,
                        "name": "ElementaryTypeName",
                        "src": "461:7:35"
                      }
                    ],
                    "id": 7977,
                    "name": "VariableDeclaration",
                    "src": "461:23:35"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 7981,
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
                        "id": 7978,
                        "name": "ElementaryTypeName",
                        "src": "486:7:35"
                      }
                    ],
                    "id": 7979,
                    "name": "VariableDeclaration",
                    "src": "486:13:35"
                  }
                ],
                "id": 7980,
                "name": "ParameterList",
                "src": "437:63:35"
              }
            ],
            "id": 7981,
            "name": "EventDefinition",
            "src": "423:78:35"
          }
        ],
        "id": 7982,
        "name": "ContractDefinition",
        "src": "144:359:35"
      }
    ],
    "id": 7983,
    "name": "SourceUnit",
    "src": "0:504:35"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.362Z"
}