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
          2731
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
        "id": 2701,
        "name": "PragmaDirective",
        "src": "0:24:13"
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
            2731
          ],
          "name": "ERC20Basic",
          "scope": 2732
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
              "scope": 2731,
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
                "id": 2702,
                "name": "ParameterList",
                "src": "199:2:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2706,
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
                        "id": 2703,
                        "name": "ElementaryTypeName",
                        "src": "223:7:13"
                      }
                    ],
                    "id": 2704,
                    "name": "VariableDeclaration",
                    "src": "223:7:13"
                  }
                ],
                "id": 2705,
                "name": "ParameterList",
                "src": "222:9:13"
              }
            ],
            "id": 2706,
            "name": "FunctionDefinition",
            "src": "179:53:13"
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
              "scope": 2731,
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
                      "scope": 2713,
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
                        "id": 2707,
                        "name": "ElementaryTypeName",
                        "src": "254:7:13"
                      }
                    ],
                    "id": 2708,
                    "name": "VariableDeclaration",
                    "src": "254:11:13"
                  }
                ],
                "id": 2709,
                "name": "ParameterList",
                "src": "253:13:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2713,
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
                        "id": 2710,
                        "name": "ElementaryTypeName",
                        "src": "288:7:13"
                      }
                    ],
                    "id": 2711,
                    "name": "VariableDeclaration",
                    "src": "288:7:13"
                  }
                ],
                "id": 2712,
                "name": "ParameterList",
                "src": "287:9:13"
              }
            ],
            "id": 2713,
            "name": "FunctionDefinition",
            "src": "235:62:13"
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
              "scope": 2731,
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
                      "scope": 2722,
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
                        "id": 2714,
                        "name": "ElementaryTypeName",
                        "src": "318:7:13"
                      }
                    ],
                    "id": 2715,
                    "name": "VariableDeclaration",
                    "src": "318:10:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 2722,
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
                        "id": 2716,
                        "name": "ElementaryTypeName",
                        "src": "330:7:13"
                      }
                    ],
                    "id": 2717,
                    "name": "VariableDeclaration",
                    "src": "330:13:13"
                  }
                ],
                "id": 2718,
                "name": "ParameterList",
                "src": "317:27:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2722,
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
                        "id": 2719,
                        "name": "ElementaryTypeName",
                        "src": "361:4:13"
                      }
                    ],
                    "id": 2720,
                    "name": "VariableDeclaration",
                    "src": "361:4:13"
                  }
                ],
                "id": 2721,
                "name": "ParameterList",
                "src": "360:6:13"
              }
            ],
            "id": 2722,
            "name": "FunctionDefinition",
            "src": "300:67:13"
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
                      "scope": 2730,
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
                        "id": 2723,
                        "name": "ElementaryTypeName",
                        "src": "385:7:13"
                      }
                    ],
                    "id": 2724,
                    "name": "VariableDeclaration",
                    "src": "385:20:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 2730,
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
                        "id": 2725,
                        "name": "ElementaryTypeName",
                        "src": "407:7:13"
                      }
                    ],
                    "id": 2726,
                    "name": "VariableDeclaration",
                    "src": "407:18:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 2730,
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
                        "id": 2727,
                        "name": "ElementaryTypeName",
                        "src": "427:7:13"
                      }
                    ],
                    "id": 2728,
                    "name": "VariableDeclaration",
                    "src": "427:13:13"
                  }
                ],
                "id": 2729,
                "name": "ParameterList",
                "src": "384:57:13"
              }
            ],
            "id": 2730,
            "name": "EventDefinition",
            "src": "370:72:13"
          }
        ],
        "id": 2731,
        "name": "ContractDefinition",
        "src": "155:289:13"
      }
    ],
    "id": 2732,
    "name": "SourceUnit",
    "src": "0:445:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-28T21:50:45.990Z"
}