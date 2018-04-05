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
          5352
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
        "id": 5311,
        "name": "PragmaDirective",
        "src": "0:24:19"
      },
      {
        "attributes": {
          "SourceUnit": 5385,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 5353,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5312,
        "name": "ImportDirective",
        "src": "26:26:19"
      },
      {
        "attributes": {
          "contractDependencies": [
            5384
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5352,
            5384
          ],
          "name": "ERC20",
          "scope": 5353
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
                  "referencedDeclaration": 5384,
                  "type": "contract ERC20Basic"
                },
                "id": 5313,
                "name": "UserDefinedTypeName",
                "src": "162:10:19"
              }
            ],
            "id": 5314,
            "name": "InheritanceSpecifier",
            "src": "162:10:19"
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
              "scope": 5352,
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
                      "scope": 5323,
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
                        "id": 5315,
                        "name": "ElementaryTypeName",
                        "src": "196:7:19"
                      }
                    ],
                    "id": 5316,
                    "name": "VariableDeclaration",
                    "src": "196:13:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 5323,
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
                        "id": 5317,
                        "name": "ElementaryTypeName",
                        "src": "211:7:19"
                      }
                    ],
                    "id": 5318,
                    "name": "VariableDeclaration",
                    "src": "211:15:19"
                  }
                ],
                "id": 5319,
                "name": "ParameterList",
                "src": "195:32:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5323,
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
                        "id": 5320,
                        "name": "ElementaryTypeName",
                        "src": "249:7:19"
                      }
                    ],
                    "id": 5321,
                    "name": "VariableDeclaration",
                    "src": "249:7:19"
                  }
                ],
                "id": 5322,
                "name": "ParameterList",
                "src": "248:9:19"
              }
            ],
            "id": 5323,
            "name": "FunctionDefinition",
            "src": "177:81:19"
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
              "scope": 5352,
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
                      "scope": 5334,
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
                        "id": 5324,
                        "name": "ElementaryTypeName",
                        "src": "283:7:19"
                      }
                    ],
                    "id": 5325,
                    "name": "VariableDeclaration",
                    "src": "283:12:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 5334,
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
                        "id": 5326,
                        "name": "ElementaryTypeName",
                        "src": "297:7:19"
                      }
                    ],
                    "id": 5327,
                    "name": "VariableDeclaration",
                    "src": "297:10:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5334,
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
                        "id": 5328,
                        "name": "ElementaryTypeName",
                        "src": "309:7:19"
                      }
                    ],
                    "id": 5329,
                    "name": "VariableDeclaration",
                    "src": "309:13:19"
                  }
                ],
                "id": 5330,
                "name": "ParameterList",
                "src": "282:41:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5334,
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
                        "id": 5331,
                        "name": "ElementaryTypeName",
                        "src": "340:4:19"
                      }
                    ],
                    "id": 5332,
                    "name": "VariableDeclaration",
                    "src": "340:4:19"
                  }
                ],
                "id": 5333,
                "name": "ParameterList",
                "src": "339:6:19"
              }
            ],
            "id": 5334,
            "name": "FunctionDefinition",
            "src": "261:85:19"
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
              "scope": 5352,
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
                      "scope": 5343,
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
                        "id": 5335,
                        "name": "ElementaryTypeName",
                        "src": "366:7:19"
                      }
                    ],
                    "id": 5336,
                    "name": "VariableDeclaration",
                    "src": "366:15:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5343,
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
                        "id": 5337,
                        "name": "ElementaryTypeName",
                        "src": "383:7:19"
                      }
                    ],
                    "id": 5338,
                    "name": "VariableDeclaration",
                    "src": "383:13:19"
                  }
                ],
                "id": 5339,
                "name": "ParameterList",
                "src": "365:32:19"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5343,
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
                        "id": 5340,
                        "name": "ElementaryTypeName",
                        "src": "414:4:19"
                      }
                    ],
                    "id": 5341,
                    "name": "VariableDeclaration",
                    "src": "414:4:19"
                  }
                ],
                "id": 5342,
                "name": "ParameterList",
                "src": "413:6:19"
              }
            ],
            "id": 5343,
            "name": "FunctionDefinition",
            "src": "349:71:19"
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
                      "scope": 5351,
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
                        "id": 5344,
                        "name": "ElementaryTypeName",
                        "src": "438:7:19"
                      }
                    ],
                    "id": 5345,
                    "name": "VariableDeclaration",
                    "src": "438:21:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 5351,
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
                        "id": 5346,
                        "name": "ElementaryTypeName",
                        "src": "461:7:19"
                      }
                    ],
                    "id": 5347,
                    "name": "VariableDeclaration",
                    "src": "461:23:19"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 5351,
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
                        "id": 5348,
                        "name": "ElementaryTypeName",
                        "src": "486:7:19"
                      }
                    ],
                    "id": 5349,
                    "name": "VariableDeclaration",
                    "src": "486:13:19"
                  }
                ],
                "id": 5350,
                "name": "ParameterList",
                "src": "437:63:19"
              }
            ],
            "id": 5351,
            "name": "EventDefinition",
            "src": "423:78:19"
          }
        ],
        "id": 5352,
        "name": "ContractDefinition",
        "src": "144:359:19"
      }
    ],
    "id": 5353,
    "name": "SourceUnit",
    "src": "0:504:19"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-05T21:27:03.117Z"
}