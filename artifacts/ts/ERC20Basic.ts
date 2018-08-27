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
          13573
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
        "id": 13543,
        "name": "PragmaDirective",
        "src": "0:24:40"
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
            13573
          ],
          "name": "ERC20Basic",
          "scope": 13574
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
              "scope": 13573,
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
                "id": 13544,
                "name": "ParameterList",
                "src": "199:2:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13548,
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
                        "id": 13545,
                        "name": "ElementaryTypeName",
                        "src": "223:7:40"
                      }
                    ],
                    "id": 13546,
                    "name": "VariableDeclaration",
                    "src": "223:7:40"
                  }
                ],
                "id": 13547,
                "name": "ParameterList",
                "src": "222:9:40"
              }
            ],
            "id": 13548,
            "name": "FunctionDefinition",
            "src": "179:53:40"
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
              "scope": 13573,
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
                      "scope": 13555,
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
                        "id": 13549,
                        "name": "ElementaryTypeName",
                        "src": "254:7:40"
                      }
                    ],
                    "id": 13550,
                    "name": "VariableDeclaration",
                    "src": "254:11:40"
                  }
                ],
                "id": 13551,
                "name": "ParameterList",
                "src": "253:13:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13555,
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
                        "id": 13552,
                        "name": "ElementaryTypeName",
                        "src": "288:7:40"
                      }
                    ],
                    "id": 13553,
                    "name": "VariableDeclaration",
                    "src": "288:7:40"
                  }
                ],
                "id": 13554,
                "name": "ParameterList",
                "src": "287:9:40"
              }
            ],
            "id": 13555,
            "name": "FunctionDefinition",
            "src": "235:62:40"
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
              "scope": 13573,
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
                      "scope": 13564,
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
                        "id": 13556,
                        "name": "ElementaryTypeName",
                        "src": "318:7:40"
                      }
                    ],
                    "id": 13557,
                    "name": "VariableDeclaration",
                    "src": "318:10:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 13564,
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
                        "id": 13558,
                        "name": "ElementaryTypeName",
                        "src": "330:7:40"
                      }
                    ],
                    "id": 13559,
                    "name": "VariableDeclaration",
                    "src": "330:13:40"
                  }
                ],
                "id": 13560,
                "name": "ParameterList",
                "src": "317:27:40"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13564,
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
                        "id": 13561,
                        "name": "ElementaryTypeName",
                        "src": "361:4:40"
                      }
                    ],
                    "id": 13562,
                    "name": "VariableDeclaration",
                    "src": "361:4:40"
                  }
                ],
                "id": 13563,
                "name": "ParameterList",
                "src": "360:6:40"
              }
            ],
            "id": 13564,
            "name": "FunctionDefinition",
            "src": "300:67:40"
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
                      "scope": 13572,
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
                        "id": 13565,
                        "name": "ElementaryTypeName",
                        "src": "385:7:40"
                      }
                    ],
                    "id": 13566,
                    "name": "VariableDeclaration",
                    "src": "385:20:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 13572,
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
                        "id": 13567,
                        "name": "ElementaryTypeName",
                        "src": "407:7:40"
                      }
                    ],
                    "id": 13568,
                    "name": "VariableDeclaration",
                    "src": "407:18:40"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 13572,
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
                        "id": 13569,
                        "name": "ElementaryTypeName",
                        "src": "427:7:40"
                      }
                    ],
                    "id": 13570,
                    "name": "VariableDeclaration",
                    "src": "427:13:40"
                  }
                ],
                "id": 13571,
                "name": "ParameterList",
                "src": "384:57:40"
              }
            ],
            "id": 13572,
            "name": "EventDefinition",
            "src": "370:72:40"
          }
        ],
        "id": 13573,
        "name": "ContractDefinition",
        "src": "155:289:40"
      }
    ],
    "id": 13574,
    "name": "SourceUnit",
    "src": "0:445:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-26T18:11:36.273Z"
}