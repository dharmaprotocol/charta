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
          9980
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
        "id": 9939,
        "name": "PragmaDirective",
        "src": "0:24:38"
      },
      {
        "attributes": {
          "SourceUnit": 10013,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 9981,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9940,
        "name": "ImportDirective",
        "src": "26:26:38"
      },
      {
        "attributes": {
          "contractDependencies": [
            10012
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            9980,
            10012
          ],
          "name": "ERC20",
          "scope": 9981
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
                  "referencedDeclaration": 10012,
                  "type": "contract ERC20Basic"
                },
                "id": 9941,
                "name": "UserDefinedTypeName",
                "src": "162:10:38"
              }
            ],
            "id": 9942,
            "name": "InheritanceSpecifier",
            "src": "162:10:38"
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
              "scope": 9980,
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
                      "scope": 9951,
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
                        "id": 9943,
                        "name": "ElementaryTypeName",
                        "src": "196:7:38"
                      }
                    ],
                    "id": 9944,
                    "name": "VariableDeclaration",
                    "src": "196:13:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 9951,
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
                        "id": 9945,
                        "name": "ElementaryTypeName",
                        "src": "211:7:38"
                      }
                    ],
                    "id": 9946,
                    "name": "VariableDeclaration",
                    "src": "211:15:38"
                  }
                ],
                "id": 9947,
                "name": "ParameterList",
                "src": "195:32:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9951,
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
                        "id": 9948,
                        "name": "ElementaryTypeName",
                        "src": "249:7:38"
                      }
                    ],
                    "id": 9949,
                    "name": "VariableDeclaration",
                    "src": "249:7:38"
                  }
                ],
                "id": 9950,
                "name": "ParameterList",
                "src": "248:9:38"
              }
            ],
            "id": 9951,
            "name": "FunctionDefinition",
            "src": "177:81:38"
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
              "scope": 9980,
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
                      "scope": 9962,
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
                        "id": 9952,
                        "name": "ElementaryTypeName",
                        "src": "283:7:38"
                      }
                    ],
                    "id": 9953,
                    "name": "VariableDeclaration",
                    "src": "283:12:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 9962,
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
                        "id": 9954,
                        "name": "ElementaryTypeName",
                        "src": "297:7:38"
                      }
                    ],
                    "id": 9955,
                    "name": "VariableDeclaration",
                    "src": "297:10:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 9962,
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
                        "id": 9956,
                        "name": "ElementaryTypeName",
                        "src": "309:7:38"
                      }
                    ],
                    "id": 9957,
                    "name": "VariableDeclaration",
                    "src": "309:13:38"
                  }
                ],
                "id": 9958,
                "name": "ParameterList",
                "src": "282:41:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9962,
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
                        "id": 9959,
                        "name": "ElementaryTypeName",
                        "src": "340:4:38"
                      }
                    ],
                    "id": 9960,
                    "name": "VariableDeclaration",
                    "src": "340:4:38"
                  }
                ],
                "id": 9961,
                "name": "ParameterList",
                "src": "339:6:38"
              }
            ],
            "id": 9962,
            "name": "FunctionDefinition",
            "src": "261:85:38"
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
              "scope": 9980,
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
                      "scope": 9971,
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
                        "id": 9963,
                        "name": "ElementaryTypeName",
                        "src": "366:7:38"
                      }
                    ],
                    "id": 9964,
                    "name": "VariableDeclaration",
                    "src": "366:15:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 9971,
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
                        "id": 9965,
                        "name": "ElementaryTypeName",
                        "src": "383:7:38"
                      }
                    ],
                    "id": 9966,
                    "name": "VariableDeclaration",
                    "src": "383:13:38"
                  }
                ],
                "id": 9967,
                "name": "ParameterList",
                "src": "365:32:38"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9971,
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
                        "id": 9968,
                        "name": "ElementaryTypeName",
                        "src": "414:4:38"
                      }
                    ],
                    "id": 9969,
                    "name": "VariableDeclaration",
                    "src": "414:4:38"
                  }
                ],
                "id": 9970,
                "name": "ParameterList",
                "src": "413:6:38"
              }
            ],
            "id": 9971,
            "name": "FunctionDefinition",
            "src": "349:71:38"
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
                      "scope": 9979,
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
                        "id": 9972,
                        "name": "ElementaryTypeName",
                        "src": "438:7:38"
                      }
                    ],
                    "id": 9973,
                    "name": "VariableDeclaration",
                    "src": "438:21:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 9979,
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
                        "id": 9974,
                        "name": "ElementaryTypeName",
                        "src": "461:7:38"
                      }
                    ],
                    "id": 9975,
                    "name": "VariableDeclaration",
                    "src": "461:23:38"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 9979,
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
                        "id": 9976,
                        "name": "ElementaryTypeName",
                        "src": "486:7:38"
                      }
                    ],
                    "id": 9977,
                    "name": "VariableDeclaration",
                    "src": "486:13:38"
                  }
                ],
                "id": 9978,
                "name": "ParameterList",
                "src": "437:63:38"
              }
            ],
            "id": 9979,
            "name": "EventDefinition",
            "src": "423:78:38"
          }
        ],
        "id": 9980,
        "name": "ContractDefinition",
        "src": "144:359:38"
      }
    ],
    "id": 9981,
    "name": "SourceUnit",
    "src": "0:504:38"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-17T19:19:33.756Z"
}