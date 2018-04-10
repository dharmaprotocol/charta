export const ERC20Basic = 
{
  "contractName": "ERC20Basic",
  "abi": [
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
  "source": "pragma solidity ^0.4.18;\n\n\n/**\n * @title ERC20Basic\n * @dev Simpler version of ERC20 interface\n * @dev see https://github.com/ethereum/EIPs/issues/179\n */\ncontract ERC20Basic {\n  function totalSupply() public view returns (uint256);\n  function balanceOf(address who) public view returns (uint256);\n  function transfer(address to, uint256 value) public returns (bool);\n  event Transfer(address indexed from, address indexed to, uint256 value);\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20Basic.sol",
      "exportedSymbols": {
        "ERC20Basic": [
          1876
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
        "id": 1846,
        "name": "PragmaDirective",
        "src": "0:24:10"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": "@title ERC20Basic\n@dev Simpler version of ERC20 interface\n@dev see https://github.com/ethereum/EIPs/issues/179",
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            1876
          ],
          "name": "ERC20Basic",
          "scope": 1877
        },
        "children": [
          {
            "attributes": {
              "body": null,
              "constant": true,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 1876,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1847,
                "name": "ParameterList",
                "src": "199:2:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1851,
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
                        "id": 1848,
                        "name": "ElementaryTypeName",
                        "src": "223:7:10"
                      }
                    ],
                    "id": 1849,
                    "name": "VariableDeclaration",
                    "src": "223:7:10"
                  }
                ],
                "id": 1850,
                "name": "ParameterList",
                "src": "222:9:10"
              }
            ],
            "id": 1851,
            "name": "FunctionDefinition",
            "src": "179:53:10"
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
              "name": "balanceOf",
              "payable": false,
              "scope": 1876,
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
                      "name": "who",
                      "scope": 1858,
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
                        "id": 1852,
                        "name": "ElementaryTypeName",
                        "src": "254:7:10"
                      }
                    ],
                    "id": 1853,
                    "name": "VariableDeclaration",
                    "src": "254:11:10"
                  }
                ],
                "id": 1854,
                "name": "ParameterList",
                "src": "253:13:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1858,
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
                        "id": 1855,
                        "name": "ElementaryTypeName",
                        "src": "288:7:10"
                      }
                    ],
                    "id": 1856,
                    "name": "VariableDeclaration",
                    "src": "288:7:10"
                  }
                ],
                "id": 1857,
                "name": "ParameterList",
                "src": "287:9:10"
              }
            ],
            "id": 1858,
            "name": "FunctionDefinition",
            "src": "235:62:10"
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
              "name": "transfer",
              "payable": false,
              "scope": 1876,
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
                      "name": "to",
                      "scope": 1867,
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
                        "id": 1859,
                        "name": "ElementaryTypeName",
                        "src": "318:7:10"
                      }
                    ],
                    "id": 1860,
                    "name": "VariableDeclaration",
                    "src": "318:10:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 1867,
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
                        "id": 1861,
                        "name": "ElementaryTypeName",
                        "src": "330:7:10"
                      }
                    ],
                    "id": 1862,
                    "name": "VariableDeclaration",
                    "src": "330:13:10"
                  }
                ],
                "id": 1863,
                "name": "ParameterList",
                "src": "317:27:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1867,
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
                        "id": 1864,
                        "name": "ElementaryTypeName",
                        "src": "361:4:10"
                      }
                    ],
                    "id": 1865,
                    "name": "VariableDeclaration",
                    "src": "361:4:10"
                  }
                ],
                "id": 1866,
                "name": "ParameterList",
                "src": "360:6:10"
              }
            ],
            "id": 1867,
            "name": "FunctionDefinition",
            "src": "300:67:10"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Transfer"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "from",
                      "scope": 1875,
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
                        "id": 1868,
                        "name": "ElementaryTypeName",
                        "src": "385:7:10"
                      }
                    ],
                    "id": 1869,
                    "name": "VariableDeclaration",
                    "src": "385:20:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 1875,
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
                        "id": 1870,
                        "name": "ElementaryTypeName",
                        "src": "407:7:10"
                      }
                    ],
                    "id": 1871,
                    "name": "VariableDeclaration",
                    "src": "407:18:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 1875,
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
                        "id": 1872,
                        "name": "ElementaryTypeName",
                        "src": "427:7:10"
                      }
                    ],
                    "id": 1873,
                    "name": "VariableDeclaration",
                    "src": "427:13:10"
                  }
                ],
                "id": 1874,
                "name": "ParameterList",
                "src": "384:57:10"
              }
            ],
            "id": 1875,
            "name": "EventDefinition",
            "src": "370:72:10"
          }
        ],
        "id": 1876,
        "name": "ContractDefinition",
        "src": "155:289:10"
      }
    ],
    "id": 1877,
    "name": "SourceUnit",
    "src": "0:445:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-10T20:45:23.109Z"
}