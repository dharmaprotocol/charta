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
          5534
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
        "id": 5493,
        "name": "PragmaDirective",
        "src": "0:24:23"
      },
      {
        "attributes": {
          "SourceUnit": 5567,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 5535,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 5494,
        "name": "ImportDirective",
        "src": "26:26:23"
      },
      {
        "attributes": {
          "contractDependencies": [
            5566
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5534,
            5566
          ],
          "name": "ERC20",
          "scope": 5535
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
                  "referencedDeclaration": 5566,
                  "type": "contract ERC20Basic"
                },
                "id": 5495,
                "name": "UserDefinedTypeName",
                "src": "162:10:23"
              }
            ],
            "id": 5496,
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
              "scope": 5534,
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
                      "scope": 5505,
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
                        "id": 5497,
                        "name": "ElementaryTypeName",
                        "src": "196:7:23"
                      }
                    ],
                    "id": 5498,
                    "name": "VariableDeclaration",
                    "src": "196:13:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 5505,
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
                        "id": 5499,
                        "name": "ElementaryTypeName",
                        "src": "211:7:23"
                      }
                    ],
                    "id": 5500,
                    "name": "VariableDeclaration",
                    "src": "211:15:23"
                  }
                ],
                "id": 5501,
                "name": "ParameterList",
                "src": "195:32:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5505,
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
                        "id": 5502,
                        "name": "ElementaryTypeName",
                        "src": "249:7:23"
                      }
                    ],
                    "id": 5503,
                    "name": "VariableDeclaration",
                    "src": "249:7:23"
                  }
                ],
                "id": 5504,
                "name": "ParameterList",
                "src": "248:9:23"
              }
            ],
            "id": 5505,
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
              "scope": 5534,
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
                      "scope": 5516,
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
                        "id": 5506,
                        "name": "ElementaryTypeName",
                        "src": "283:7:23"
                      }
                    ],
                    "id": 5507,
                    "name": "VariableDeclaration",
                    "src": "283:12:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 5516,
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
                        "id": 5508,
                        "name": "ElementaryTypeName",
                        "src": "297:7:23"
                      }
                    ],
                    "id": 5509,
                    "name": "VariableDeclaration",
                    "src": "297:10:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5516,
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
                        "id": 5510,
                        "name": "ElementaryTypeName",
                        "src": "309:7:23"
                      }
                    ],
                    "id": 5511,
                    "name": "VariableDeclaration",
                    "src": "309:13:23"
                  }
                ],
                "id": 5512,
                "name": "ParameterList",
                "src": "282:41:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5516,
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
                        "id": 5513,
                        "name": "ElementaryTypeName",
                        "src": "340:4:23"
                      }
                    ],
                    "id": 5514,
                    "name": "VariableDeclaration",
                    "src": "340:4:23"
                  }
                ],
                "id": 5515,
                "name": "ParameterList",
                "src": "339:6:23"
              }
            ],
            "id": 5516,
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
              "scope": 5534,
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
                      "scope": 5525,
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
                        "id": 5517,
                        "name": "ElementaryTypeName",
                        "src": "366:7:23"
                      }
                    ],
                    "id": 5518,
                    "name": "VariableDeclaration",
                    "src": "366:15:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 5525,
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
                        "id": 5519,
                        "name": "ElementaryTypeName",
                        "src": "383:7:23"
                      }
                    ],
                    "id": 5520,
                    "name": "VariableDeclaration",
                    "src": "383:13:23"
                  }
                ],
                "id": 5521,
                "name": "ParameterList",
                "src": "365:32:23"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 5525,
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
                        "id": 5522,
                        "name": "ElementaryTypeName",
                        "src": "414:4:23"
                      }
                    ],
                    "id": 5523,
                    "name": "VariableDeclaration",
                    "src": "414:4:23"
                  }
                ],
                "id": 5524,
                "name": "ParameterList",
                "src": "413:6:23"
              }
            ],
            "id": 5525,
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
                      "scope": 5533,
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
                        "id": 5526,
                        "name": "ElementaryTypeName",
                        "src": "438:7:23"
                      }
                    ],
                    "id": 5527,
                    "name": "VariableDeclaration",
                    "src": "438:21:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 5533,
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
                        "id": 5528,
                        "name": "ElementaryTypeName",
                        "src": "461:7:23"
                      }
                    ],
                    "id": 5529,
                    "name": "VariableDeclaration",
                    "src": "461:23:23"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 5533,
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
                        "id": 5530,
                        "name": "ElementaryTypeName",
                        "src": "486:7:23"
                      }
                    ],
                    "id": 5531,
                    "name": "VariableDeclaration",
                    "src": "486:13:23"
                  }
                ],
                "id": 5532,
                "name": "ParameterList",
                "src": "437:63:23"
              }
            ],
            "id": 5533,
            "name": "EventDefinition",
            "src": "423:78:23"
          }
        ],
        "id": 5534,
        "name": "ContractDefinition",
        "src": "144:359:23"
      }
    ],
    "id": 5535,
    "name": "SourceUnit",
    "src": "0:504:23"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:31:52.486Z"
}