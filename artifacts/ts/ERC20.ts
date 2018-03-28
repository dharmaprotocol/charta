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
          2699
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
        "id": 2658,
        "name": "PragmaDirective",
        "src": "0:24:12"
      },
      {
        "attributes": {
          "SourceUnit": 2732,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 2700,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2659,
        "name": "ImportDirective",
        "src": "26:26:12"
      },
      {
        "attributes": {
          "contractDependencies": [
            2731
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            2699,
            2731
          ],
          "name": "ERC20",
          "scope": 2700
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
                  "referencedDeclaration": 2731,
                  "type": "contract ERC20Basic"
                },
                "id": 2660,
                "name": "UserDefinedTypeName",
                "src": "162:10:12"
              }
            ],
            "id": 2661,
            "name": "InheritanceSpecifier",
            "src": "162:10:12"
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
              "scope": 2699,
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
                      "scope": 2670,
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
                        "id": 2662,
                        "name": "ElementaryTypeName",
                        "src": "196:7:12"
                      }
                    ],
                    "id": 2663,
                    "name": "VariableDeclaration",
                    "src": "196:13:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 2670,
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
                        "id": 2664,
                        "name": "ElementaryTypeName",
                        "src": "211:7:12"
                      }
                    ],
                    "id": 2665,
                    "name": "VariableDeclaration",
                    "src": "211:15:12"
                  }
                ],
                "id": 2666,
                "name": "ParameterList",
                "src": "195:32:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2670,
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
                        "id": 2667,
                        "name": "ElementaryTypeName",
                        "src": "249:7:12"
                      }
                    ],
                    "id": 2668,
                    "name": "VariableDeclaration",
                    "src": "249:7:12"
                  }
                ],
                "id": 2669,
                "name": "ParameterList",
                "src": "248:9:12"
              }
            ],
            "id": 2670,
            "name": "FunctionDefinition",
            "src": "177:81:12"
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
              "scope": 2699,
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
                      "scope": 2681,
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
                        "id": 2671,
                        "name": "ElementaryTypeName",
                        "src": "283:7:12"
                      }
                    ],
                    "id": 2672,
                    "name": "VariableDeclaration",
                    "src": "283:12:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 2681,
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
                        "id": 2673,
                        "name": "ElementaryTypeName",
                        "src": "297:7:12"
                      }
                    ],
                    "id": 2674,
                    "name": "VariableDeclaration",
                    "src": "297:10:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 2681,
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
                        "id": 2675,
                        "name": "ElementaryTypeName",
                        "src": "309:7:12"
                      }
                    ],
                    "id": 2676,
                    "name": "VariableDeclaration",
                    "src": "309:13:12"
                  }
                ],
                "id": 2677,
                "name": "ParameterList",
                "src": "282:41:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2681,
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
                        "id": 2678,
                        "name": "ElementaryTypeName",
                        "src": "340:4:12"
                      }
                    ],
                    "id": 2679,
                    "name": "VariableDeclaration",
                    "src": "340:4:12"
                  }
                ],
                "id": 2680,
                "name": "ParameterList",
                "src": "339:6:12"
              }
            ],
            "id": 2681,
            "name": "FunctionDefinition",
            "src": "261:85:12"
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
              "scope": 2699,
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
                      "scope": 2690,
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
                        "id": 2682,
                        "name": "ElementaryTypeName",
                        "src": "366:7:12"
                      }
                    ],
                    "id": 2683,
                    "name": "VariableDeclaration",
                    "src": "366:15:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 2690,
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
                        "id": 2684,
                        "name": "ElementaryTypeName",
                        "src": "383:7:12"
                      }
                    ],
                    "id": 2685,
                    "name": "VariableDeclaration",
                    "src": "383:13:12"
                  }
                ],
                "id": 2686,
                "name": "ParameterList",
                "src": "365:32:12"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2690,
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
                        "id": 2687,
                        "name": "ElementaryTypeName",
                        "src": "414:4:12"
                      }
                    ],
                    "id": 2688,
                    "name": "VariableDeclaration",
                    "src": "414:4:12"
                  }
                ],
                "id": 2689,
                "name": "ParameterList",
                "src": "413:6:12"
              }
            ],
            "id": 2690,
            "name": "FunctionDefinition",
            "src": "349:71:12"
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
                      "scope": 2698,
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
                        "id": 2691,
                        "name": "ElementaryTypeName",
                        "src": "438:7:12"
                      }
                    ],
                    "id": 2692,
                    "name": "VariableDeclaration",
                    "src": "438:21:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 2698,
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
                        "id": 2693,
                        "name": "ElementaryTypeName",
                        "src": "461:7:12"
                      }
                    ],
                    "id": 2694,
                    "name": "VariableDeclaration",
                    "src": "461:23:12"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 2698,
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
                        "id": 2695,
                        "name": "ElementaryTypeName",
                        "src": "486:7:12"
                      }
                    ],
                    "id": 2696,
                    "name": "VariableDeclaration",
                    "src": "486:13:12"
                  }
                ],
                "id": 2697,
                "name": "ParameterList",
                "src": "437:63:12"
              }
            ],
            "id": 2698,
            "name": "EventDefinition",
            "src": "423:78:12"
          }
        ],
        "id": 2699,
        "name": "ContractDefinition",
        "src": "144:359:12"
      }
    ],
    "id": 2700,
    "name": "SourceUnit",
    "src": "0:504:12"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-28T21:50:45.990Z"
}