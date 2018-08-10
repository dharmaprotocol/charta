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
          10264
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
        "id": 10223,
        "name": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "attributes": {
          "SourceUnit": 10297,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 10265,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 10224,
        "name": "ImportDirective",
        "src": "26:26:37"
      },
      {
        "attributes": {
          "contractDependencies": [
            10296
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            10264,
            10296
          ],
          "name": "ERC20",
          "scope": 10265
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
                  "referencedDeclaration": 10296,
                  "type": "contract ERC20Basic"
                },
                "id": 10225,
                "name": "UserDefinedTypeName",
                "src": "162:10:37"
              }
            ],
            "id": 10226,
            "name": "InheritanceSpecifier",
            "src": "162:10:37"
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
              "scope": 10264,
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
                      "scope": 10235,
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
                        "id": 10227,
                        "name": "ElementaryTypeName",
                        "src": "196:7:37"
                      }
                    ],
                    "id": 10228,
                    "name": "VariableDeclaration",
                    "src": "196:13:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 10235,
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
                        "id": 10229,
                        "name": "ElementaryTypeName",
                        "src": "211:7:37"
                      }
                    ],
                    "id": 10230,
                    "name": "VariableDeclaration",
                    "src": "211:15:37"
                  }
                ],
                "id": 10231,
                "name": "ParameterList",
                "src": "195:32:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10235,
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
                        "id": 10232,
                        "name": "ElementaryTypeName",
                        "src": "249:7:37"
                      }
                    ],
                    "id": 10233,
                    "name": "VariableDeclaration",
                    "src": "249:7:37"
                  }
                ],
                "id": 10234,
                "name": "ParameterList",
                "src": "248:9:37"
              }
            ],
            "id": 10235,
            "name": "FunctionDefinition",
            "src": "177:81:37"
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
              "scope": 10264,
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
                      "scope": 10246,
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
                        "id": 10236,
                        "name": "ElementaryTypeName",
                        "src": "283:7:37"
                      }
                    ],
                    "id": 10237,
                    "name": "VariableDeclaration",
                    "src": "283:12:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 10246,
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
                        "id": 10238,
                        "name": "ElementaryTypeName",
                        "src": "297:7:37"
                      }
                    ],
                    "id": 10239,
                    "name": "VariableDeclaration",
                    "src": "297:10:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 10246,
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
                        "id": 10240,
                        "name": "ElementaryTypeName",
                        "src": "309:7:37"
                      }
                    ],
                    "id": 10241,
                    "name": "VariableDeclaration",
                    "src": "309:13:37"
                  }
                ],
                "id": 10242,
                "name": "ParameterList",
                "src": "282:41:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10246,
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
                        "id": 10243,
                        "name": "ElementaryTypeName",
                        "src": "340:4:37"
                      }
                    ],
                    "id": 10244,
                    "name": "VariableDeclaration",
                    "src": "340:4:37"
                  }
                ],
                "id": 10245,
                "name": "ParameterList",
                "src": "339:6:37"
              }
            ],
            "id": 10246,
            "name": "FunctionDefinition",
            "src": "261:85:37"
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
              "scope": 10264,
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
                      "scope": 10255,
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
                        "id": 10247,
                        "name": "ElementaryTypeName",
                        "src": "366:7:37"
                      }
                    ],
                    "id": 10248,
                    "name": "VariableDeclaration",
                    "src": "366:15:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 10255,
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
                        "id": 10249,
                        "name": "ElementaryTypeName",
                        "src": "383:7:37"
                      }
                    ],
                    "id": 10250,
                    "name": "VariableDeclaration",
                    "src": "383:13:37"
                  }
                ],
                "id": 10251,
                "name": "ParameterList",
                "src": "365:32:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 10255,
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
                        "id": 10252,
                        "name": "ElementaryTypeName",
                        "src": "414:4:37"
                      }
                    ],
                    "id": 10253,
                    "name": "VariableDeclaration",
                    "src": "414:4:37"
                  }
                ],
                "id": 10254,
                "name": "ParameterList",
                "src": "413:6:37"
              }
            ],
            "id": 10255,
            "name": "FunctionDefinition",
            "src": "349:71:37"
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
                      "scope": 10263,
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
                        "id": 10256,
                        "name": "ElementaryTypeName",
                        "src": "438:7:37"
                      }
                    ],
                    "id": 10257,
                    "name": "VariableDeclaration",
                    "src": "438:21:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 10263,
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
                        "id": 10258,
                        "name": "ElementaryTypeName",
                        "src": "461:7:37"
                      }
                    ],
                    "id": 10259,
                    "name": "VariableDeclaration",
                    "src": "461:23:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 10263,
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
                        "id": 10260,
                        "name": "ElementaryTypeName",
                        "src": "486:7:37"
                      }
                    ],
                    "id": 10261,
                    "name": "VariableDeclaration",
                    "src": "486:13:37"
                  }
                ],
                "id": 10262,
                "name": "ParameterList",
                "src": "437:63:37"
              }
            ],
            "id": 10263,
            "name": "EventDefinition",
            "src": "423:78:37"
          }
        ],
        "id": 10264,
        "name": "ContractDefinition",
        "src": "144:359:37"
      }
    ],
    "id": 10265,
    "name": "SourceUnit",
    "src": "0:504:37"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-24T01:55:45.061Z"
}