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
          5441
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
        "id": 5400,
        "name": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "attributes": {
          "SourceUnit": 5474,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 5442,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5401,
        "name": "ImportDirective",
        "src": "26:26:23"
      },
      {
        "attributes": {
          "contractDependencies": [
            5473
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5441,
            5473
          ],
          "name": "ERC20",
          "scope": 5442
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
                  "referencedDeclaration": 5473,
                  "type": "contract ERC20Basic"
                },
                "id": 5402,
                "name": "UserDefinedTypeName",
                "src": "162:10:23"
              }
            ],
            "id": 5403,
            "name": "InheritanceSpecifier",
            "src": "162:10:23"
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
              "scope": 5441,
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
                      "scope": 5412,
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
                        "id": 5404,
                        "name": "ElementaryTypeName",
                        "src": "196:7:23"
                      }
                    ],
                    "id": 5405,
                    "name": "VariableDeclaration",
                    "src": "196:13:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 5412,
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
                        "id": 5406,
                        "name": "ElementaryTypeName",
                        "src": "211:7:23"
                      }
                    ],
                    "id": 5407,
                    "name": "VariableDeclaration",
                    "src": "211:15:23"
                  }
                ],
                "id": 5408,
                "name": "ParameterList",
                "src": "195:32:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5412,
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
                        "id": 5409,
                        "name": "ElementaryTypeName",
                        "src": "249:7:23"
                      }
                    ],
                    "id": 5410,
                    "name": "VariableDeclaration",
                    "src": "249:7:23"
                  }
                ],
                "id": 5411,
                "name": "ParameterList",
                "src": "248:9:23"
              }
            ],
            "id": 5412,
            "name": "FunctionDefinition",
            "src": "177:81:23"
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
              "scope": 5441,
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
                      "scope": 5423,
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
                        "id": 5413,
                        "name": "ElementaryTypeName",
                        "src": "283:7:23"
                      }
                    ],
                    "id": 5414,
                    "name": "VariableDeclaration",
                    "src": "283:12:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 5423,
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
                        "id": 5415,
                        "name": "ElementaryTypeName",
                        "src": "297:7:23"
                      }
                    ],
                    "id": 5416,
                    "name": "VariableDeclaration",
                    "src": "297:10:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5423,
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
                        "id": 5417,
                        "name": "ElementaryTypeName",
                        "src": "309:7:23"
                      }
                    ],
                    "id": 5418,
                    "name": "VariableDeclaration",
                    "src": "309:13:23"
                  }
                ],
                "id": 5419,
                "name": "ParameterList",
                "src": "282:41:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5423,
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
                        "id": 5420,
                        "name": "ElementaryTypeName",
                        "src": "340:4:23"
                      }
                    ],
                    "id": 5421,
                    "name": "VariableDeclaration",
                    "src": "340:4:23"
                  }
                ],
                "id": 5422,
                "name": "ParameterList",
                "src": "339:6:23"
              }
            ],
            "id": 5423,
            "name": "FunctionDefinition",
            "src": "261:85:23"
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
              "scope": 5441,
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
                      "scope": 5432,
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
                        "id": 5424,
                        "name": "ElementaryTypeName",
                        "src": "366:7:23"
                      }
                    ],
                    "id": 5425,
                    "name": "VariableDeclaration",
                    "src": "366:15:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5432,
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
                        "id": 5426,
                        "name": "ElementaryTypeName",
                        "src": "383:7:23"
                      }
                    ],
                    "id": 5427,
                    "name": "VariableDeclaration",
                    "src": "383:13:23"
                  }
                ],
                "id": 5428,
                "name": "ParameterList",
                "src": "365:32:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5432,
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
                        "id": 5429,
                        "name": "ElementaryTypeName",
                        "src": "414:4:23"
                      }
                    ],
                    "id": 5430,
                    "name": "VariableDeclaration",
                    "src": "414:4:23"
                  }
                ],
                "id": 5431,
                "name": "ParameterList",
                "src": "413:6:23"
              }
            ],
            "id": 5432,
            "name": "FunctionDefinition",
            "src": "349:71:23"
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
                      "scope": 5440,
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
                        "id": 5433,
                        "name": "ElementaryTypeName",
                        "src": "438:7:23"
                      }
                    ],
                    "id": 5434,
                    "name": "VariableDeclaration",
                    "src": "438:21:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 5440,
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
                        "id": 5435,
                        "name": "ElementaryTypeName",
                        "src": "461:7:23"
                      }
                    ],
                    "id": 5436,
                    "name": "VariableDeclaration",
                    "src": "461:23:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 5440,
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
                        "id": 5437,
                        "name": "ElementaryTypeName",
                        "src": "486:7:23"
                      }
                    ],
                    "id": 5438,
                    "name": "VariableDeclaration",
                    "src": "486:13:23"
                  }
                ],
                "id": 5439,
                "name": "ParameterList",
                "src": "437:63:23"
              }
            ],
            "id": 5440,
            "name": "EventDefinition",
            "src": "423:78:23"
          }
        ],
        "id": 5441,
        "name": "ContractDefinition",
        "src": "144:359:23"
      }
    ],
    "id": 5442,
    "name": "SourceUnit",
    "src": "0:504:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-23T04:19:01.783Z"
}