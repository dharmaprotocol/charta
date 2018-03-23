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
          5431
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
        "id": 5390,
        "name": "PragmaDirective",
        "src": "0:24:24"
      },
      {
        "attributes": {
          "SourceUnit": 5464,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 5432,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5391,
        "name": "ImportDirective",
        "src": "26:26:24"
      },
      {
        "attributes": {
          "contractDependencies": [
            5463
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5431,
            5463
          ],
          "name": "ERC20",
          "scope": 5432
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
                  "referencedDeclaration": 5463,
                  "type": "contract ERC20Basic"
                },
                "id": 5392,
                "name": "UserDefinedTypeName",
                "src": "162:10:24"
              }
            ],
            "id": 5393,
            "name": "InheritanceSpecifier",
            "src": "162:10:24"
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
              "scope": 5431,
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
                      "scope": 5402,
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
                        "id": 5394,
                        "name": "ElementaryTypeName",
                        "src": "196:7:24"
                      }
                    ],
                    "id": 5395,
                    "name": "VariableDeclaration",
                    "src": "196:13:24"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 5402,
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
                        "id": 5396,
                        "name": "ElementaryTypeName",
                        "src": "211:7:24"
                      }
                    ],
                    "id": 5397,
                    "name": "VariableDeclaration",
                    "src": "211:15:24"
                  }
                ],
                "id": 5398,
                "name": "ParameterList",
                "src": "195:32:24"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5402,
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
                        "id": 5399,
                        "name": "ElementaryTypeName",
                        "src": "249:7:24"
                      }
                    ],
                    "id": 5400,
                    "name": "VariableDeclaration",
                    "src": "249:7:24"
                  }
                ],
                "id": 5401,
                "name": "ParameterList",
                "src": "248:9:24"
              }
            ],
            "id": 5402,
            "name": "FunctionDefinition",
            "src": "177:81:24"
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
              "scope": 5431,
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
                      "scope": 5413,
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
                        "id": 5403,
                        "name": "ElementaryTypeName",
                        "src": "283:7:24"
                      }
                    ],
                    "id": 5404,
                    "name": "VariableDeclaration",
                    "src": "283:12:24"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 5413,
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
                        "id": 5405,
                        "name": "ElementaryTypeName",
                        "src": "297:7:24"
                      }
                    ],
                    "id": 5406,
                    "name": "VariableDeclaration",
                    "src": "297:10:24"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5413,
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
                        "id": 5407,
                        "name": "ElementaryTypeName",
                        "src": "309:7:24"
                      }
                    ],
                    "id": 5408,
                    "name": "VariableDeclaration",
                    "src": "309:13:24"
                  }
                ],
                "id": 5409,
                "name": "ParameterList",
                "src": "282:41:24"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5413,
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
                        "id": 5410,
                        "name": "ElementaryTypeName",
                        "src": "340:4:24"
                      }
                    ],
                    "id": 5411,
                    "name": "VariableDeclaration",
                    "src": "340:4:24"
                  }
                ],
                "id": 5412,
                "name": "ParameterList",
                "src": "339:6:24"
              }
            ],
            "id": 5413,
            "name": "FunctionDefinition",
            "src": "261:85:24"
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
              "scope": 5431,
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
                      "scope": 5422,
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
                        "id": 5414,
                        "name": "ElementaryTypeName",
                        "src": "366:7:24"
                      }
                    ],
                    "id": 5415,
                    "name": "VariableDeclaration",
                    "src": "366:15:24"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5422,
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
                        "id": 5416,
                        "name": "ElementaryTypeName",
                        "src": "383:7:24"
                      }
                    ],
                    "id": 5417,
                    "name": "VariableDeclaration",
                    "src": "383:13:24"
                  }
                ],
                "id": 5418,
                "name": "ParameterList",
                "src": "365:32:24"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5422,
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
                        "id": 5419,
                        "name": "ElementaryTypeName",
                        "src": "414:4:24"
                      }
                    ],
                    "id": 5420,
                    "name": "VariableDeclaration",
                    "src": "414:4:24"
                  }
                ],
                "id": 5421,
                "name": "ParameterList",
                "src": "413:6:24"
              }
            ],
            "id": 5422,
            "name": "FunctionDefinition",
            "src": "349:71:24"
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
                      "scope": 5430,
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
                        "id": 5423,
                        "name": "ElementaryTypeName",
                        "src": "438:7:24"
                      }
                    ],
                    "id": 5424,
                    "name": "VariableDeclaration",
                    "src": "438:21:24"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 5430,
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
                        "id": 5425,
                        "name": "ElementaryTypeName",
                        "src": "461:7:24"
                      }
                    ],
                    "id": 5426,
                    "name": "VariableDeclaration",
                    "src": "461:23:24"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 5430,
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
                        "id": 5427,
                        "name": "ElementaryTypeName",
                        "src": "486:7:24"
                      }
                    ],
                    "id": 5428,
                    "name": "VariableDeclaration",
                    "src": "486:13:24"
                  }
                ],
                "id": 5429,
                "name": "ParameterList",
                "src": "437:63:24"
              }
            ],
            "id": 5430,
            "name": "EventDefinition",
            "src": "423:78:24"
          }
        ],
        "id": 5431,
        "name": "ContractDefinition",
        "src": "144:359:24"
      }
    ],
    "id": 5432,
    "name": "SourceUnit",
    "src": "0:504:24"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-19T22:46:09.681Z"
}