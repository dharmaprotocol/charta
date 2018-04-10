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
          1844
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
        "id": 1803,
        "name": "PragmaDirective",
        "src": "0:24:9"
      },
      {
        "attributes": {
          "SourceUnit": 1877,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
          "file": "./ERC20Basic.sol",
          "scope": 1845,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1804,
        "name": "ImportDirective",
        "src": "26:26:9"
      },
      {
        "attributes": {
          "contractDependencies": [
            1876
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/20",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            1844,
            1876
          ],
          "name": "ERC20",
          "scope": 1845
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
                  "referencedDeclaration": 1876,
                  "type": "contract ERC20Basic"
                },
                "id": 1805,
                "name": "UserDefinedTypeName",
                "src": "162:10:9"
              }
            ],
            "id": 1806,
            "name": "InheritanceSpecifier",
            "src": "162:10:9"
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
              "scope": 1844,
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
                      "scope": 1815,
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
                        "id": 1807,
                        "name": "ElementaryTypeName",
                        "src": "196:7:9"
                      }
                    ],
                    "id": 1808,
                    "name": "VariableDeclaration",
                    "src": "196:13:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "spender",
                      "scope": 1815,
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
                        "id": 1809,
                        "name": "ElementaryTypeName",
                        "src": "211:7:9"
                      }
                    ],
                    "id": 1810,
                    "name": "VariableDeclaration",
                    "src": "211:15:9"
                  }
                ],
                "id": 1811,
                "name": "ParameterList",
                "src": "195:32:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1815,
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
                        "id": 1812,
                        "name": "ElementaryTypeName",
                        "src": "249:7:9"
                      }
                    ],
                    "id": 1813,
                    "name": "VariableDeclaration",
                    "src": "249:7:9"
                  }
                ],
                "id": 1814,
                "name": "ParameterList",
                "src": "248:9:9"
              }
            ],
            "id": 1815,
            "name": "FunctionDefinition",
            "src": "177:81:9"
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
              "scope": 1844,
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
                      "scope": 1826,
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
                        "id": 1816,
                        "name": "ElementaryTypeName",
                        "src": "283:7:9"
                      }
                    ],
                    "id": 1817,
                    "name": "VariableDeclaration",
                    "src": "283:12:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 1826,
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
                        "id": 1818,
                        "name": "ElementaryTypeName",
                        "src": "297:7:9"
                      }
                    ],
                    "id": 1819,
                    "name": "VariableDeclaration",
                    "src": "297:10:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 1826,
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
                        "id": 1820,
                        "name": "ElementaryTypeName",
                        "src": "309:7:9"
                      }
                    ],
                    "id": 1821,
                    "name": "VariableDeclaration",
                    "src": "309:13:9"
                  }
                ],
                "id": 1822,
                "name": "ParameterList",
                "src": "282:41:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1826,
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
                        "id": 1823,
                        "name": "ElementaryTypeName",
                        "src": "340:4:9"
                      }
                    ],
                    "id": 1824,
                    "name": "VariableDeclaration",
                    "src": "340:4:9"
                  }
                ],
                "id": 1825,
                "name": "ParameterList",
                "src": "339:6:9"
              }
            ],
            "id": 1826,
            "name": "FunctionDefinition",
            "src": "261:85:9"
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
              "scope": 1844,
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
                      "scope": 1835,
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
                        "id": 1827,
                        "name": "ElementaryTypeName",
                        "src": "366:7:9"
                      }
                    ],
                    "id": 1828,
                    "name": "VariableDeclaration",
                    "src": "366:15:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 1835,
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
                        "id": 1829,
                        "name": "ElementaryTypeName",
                        "src": "383:7:9"
                      }
                    ],
                    "id": 1830,
                    "name": "VariableDeclaration",
                    "src": "383:13:9"
                  }
                ],
                "id": 1831,
                "name": "ParameterList",
                "src": "365:32:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1835,
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
                        "id": 1832,
                        "name": "ElementaryTypeName",
                        "src": "414:4:9"
                      }
                    ],
                    "id": 1833,
                    "name": "VariableDeclaration",
                    "src": "414:4:9"
                  }
                ],
                "id": 1834,
                "name": "ParameterList",
                "src": "413:6:9"
              }
            ],
            "id": 1835,
            "name": "FunctionDefinition",
            "src": "349:71:9"
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
                      "scope": 1843,
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
                        "id": 1836,
                        "name": "ElementaryTypeName",
                        "src": "438:7:9"
                      }
                    ],
                    "id": 1837,
                    "name": "VariableDeclaration",
                    "src": "438:21:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "spender",
                      "scope": 1843,
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
                        "id": 1838,
                        "name": "ElementaryTypeName",
                        "src": "461:7:9"
                      }
                    ],
                    "id": 1839,
                    "name": "VariableDeclaration",
                    "src": "461:23:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 1843,
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
                        "id": 1840,
                        "name": "ElementaryTypeName",
                        "src": "486:7:9"
                      }
                    ],
                    "id": 1841,
                    "name": "VariableDeclaration",
                    "src": "486:13:9"
                  }
                ],
                "id": 1842,
                "name": "ParameterList",
                "src": "437:63:9"
              }
            ],
            "id": 1843,
            "name": "EventDefinition",
            "src": "423:78:9"
          }
        ],
        "id": 1844,
        "name": "ContractDefinition",
        "src": "144:359:9"
      }
    ],
    "id": 1845,
    "name": "SourceUnit",
    "src": "0:504:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T20:45:23.109Z"
}