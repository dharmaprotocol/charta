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
          8242
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
        "id": 8201,
        "name": "PragmaDirective",
        "src": "0:24:32"
      },
      {
        "attributes": {
          "SourceUnit": 8275,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 8243,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 8202,
        "name": "ImportDirective",
        "src": "26:26:32"
      },
      {
        "attributes": {
          "contractDependencies": [
            8274
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            8242,
            8274
          ],
          "name": "ERC20",
          "scope": 8243
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
                  "referencedDeclaration": 8274,
                  "type": "contract ERC20Basic"
                },
                "id": 8203,
                "name": "UserDefinedTypeName",
                "src": "162:10:32"
              }
            ],
            "id": 8204,
            "name": "InheritanceSpecifier",
            "src": "162:10:32"
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
              "scope": 8242,
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
                      "scope": 8213,
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
                        "id": 8205,
                        "name": "ElementaryTypeName",
                        "src": "196:7:32"
                      }
                    ],
                    "id": 8206,
                    "name": "VariableDeclaration",
                    "src": "196:13:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 8213,
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
                        "id": 8207,
                        "name": "ElementaryTypeName",
                        "src": "211:7:32"
                      }
                    ],
                    "id": 8208,
                    "name": "VariableDeclaration",
                    "src": "211:15:32"
                  }
                ],
                "id": 8209,
                "name": "ParameterList",
                "src": "195:32:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8213,
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
                        "id": 8210,
                        "name": "ElementaryTypeName",
                        "src": "249:7:32"
                      }
                    ],
                    "id": 8211,
                    "name": "VariableDeclaration",
                    "src": "249:7:32"
                  }
                ],
                "id": 8212,
                "name": "ParameterList",
                "src": "248:9:32"
              }
            ],
            "id": 8213,
            "name": "FunctionDefinition",
            "src": "177:81:32"
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
              "scope": 8242,
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
                      "scope": 8224,
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
                        "id": 8214,
                        "name": "ElementaryTypeName",
                        "src": "283:7:32"
                      }
                    ],
                    "id": 8215,
                    "name": "VariableDeclaration",
                    "src": "283:12:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 8224,
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
                        "id": 8216,
                        "name": "ElementaryTypeName",
                        "src": "297:7:32"
                      }
                    ],
                    "id": 8217,
                    "name": "VariableDeclaration",
                    "src": "297:10:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 8224,
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
                        "id": 8218,
                        "name": "ElementaryTypeName",
                        "src": "309:7:32"
                      }
                    ],
                    "id": 8219,
                    "name": "VariableDeclaration",
                    "src": "309:13:32"
                  }
                ],
                "id": 8220,
                "name": "ParameterList",
                "src": "282:41:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8224,
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
                        "id": 8221,
                        "name": "ElementaryTypeName",
                        "src": "340:4:32"
                      }
                    ],
                    "id": 8222,
                    "name": "VariableDeclaration",
                    "src": "340:4:32"
                  }
                ],
                "id": 8223,
                "name": "ParameterList",
                "src": "339:6:32"
              }
            ],
            "id": 8224,
            "name": "FunctionDefinition",
            "src": "261:85:32"
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
              "scope": 8242,
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
                      "scope": 8233,
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
                        "id": 8225,
                        "name": "ElementaryTypeName",
                        "src": "366:7:32"
                      }
                    ],
                    "id": 8226,
                    "name": "VariableDeclaration",
                    "src": "366:15:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 8233,
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
                        "id": 8227,
                        "name": "ElementaryTypeName",
                        "src": "383:7:32"
                      }
                    ],
                    "id": 8228,
                    "name": "VariableDeclaration",
                    "src": "383:13:32"
                  }
                ],
                "id": 8229,
                "name": "ParameterList",
                "src": "365:32:32"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8233,
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
                        "id": 8230,
                        "name": "ElementaryTypeName",
                        "src": "414:4:32"
                      }
                    ],
                    "id": 8231,
                    "name": "VariableDeclaration",
                    "src": "414:4:32"
                  }
                ],
                "id": 8232,
                "name": "ParameterList",
                "src": "413:6:32"
              }
            ],
            "id": 8233,
            "name": "FunctionDefinition",
            "src": "349:71:32"
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
                      "scope": 8241,
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
                        "id": 8234,
                        "name": "ElementaryTypeName",
                        "src": "438:7:32"
                      }
                    ],
                    "id": 8235,
                    "name": "VariableDeclaration",
                    "src": "438:21:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 8241,
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
                        "id": 8236,
                        "name": "ElementaryTypeName",
                        "src": "461:7:32"
                      }
                    ],
                    "id": 8237,
                    "name": "VariableDeclaration",
                    "src": "461:23:32"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 8241,
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
                        "id": 8238,
                        "name": "ElementaryTypeName",
                        "src": "486:7:32"
                      }
                    ],
                    "id": 8239,
                    "name": "VariableDeclaration",
                    "src": "486:13:32"
                  }
                ],
                "id": 8240,
                "name": "ParameterList",
                "src": "437:63:32"
              }
            ],
            "id": 8241,
            "name": "EventDefinition",
            "src": "423:78:32"
          }
        ],
        "id": 8242,
        "name": "ContractDefinition",
        "src": "144:359:32"
      }
    ],
    "id": 8243,
    "name": "SourceUnit",
    "src": "0:504:32"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.168Z"
}