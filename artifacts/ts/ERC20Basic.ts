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
          8563
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
        "id": 8533,
        "name": "PragmaDirective",
        "src": "0:24:34"
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
            8563
          ],
          "name": "ERC20Basic",
          "scope": 8564
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
              "scope": 8563,
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
                "id": 8534,
                "name": "ParameterList",
                "src": "199:2:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8538,
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
                        "id": 8535,
                        "name": "ElementaryTypeName",
                        "src": "223:7:34"
                      }
                    ],
                    "id": 8536,
                    "name": "VariableDeclaration",
                    "src": "223:7:34"
                  }
                ],
                "id": 8537,
                "name": "ParameterList",
                "src": "222:9:34"
              }
            ],
            "id": 8538,
            "name": "FunctionDefinition",
            "src": "179:53:34"
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
              "scope": 8563,
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
                      "scope": 8545,
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
                        "id": 8539,
                        "name": "ElementaryTypeName",
                        "src": "254:7:34"
                      }
                    ],
                    "id": 8540,
                    "name": "VariableDeclaration",
                    "src": "254:11:34"
                  }
                ],
                "id": 8541,
                "name": "ParameterList",
                "src": "253:13:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8545,
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
                        "id": 8542,
                        "name": "ElementaryTypeName",
                        "src": "288:7:34"
                      }
                    ],
                    "id": 8543,
                    "name": "VariableDeclaration",
                    "src": "288:7:34"
                  }
                ],
                "id": 8544,
                "name": "ParameterList",
                "src": "287:9:34"
              }
            ],
            "id": 8545,
            "name": "FunctionDefinition",
            "src": "235:62:34"
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
              "scope": 8563,
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
                      "scope": 8554,
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
                        "id": 8546,
                        "name": "ElementaryTypeName",
                        "src": "318:7:34"
                      }
                    ],
                    "id": 8547,
                    "name": "VariableDeclaration",
                    "src": "318:10:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 8554,
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
                        "id": 8548,
                        "name": "ElementaryTypeName",
                        "src": "330:7:34"
                      }
                    ],
                    "id": 8549,
                    "name": "VariableDeclaration",
                    "src": "330:13:34"
                  }
                ],
                "id": 8550,
                "name": "ParameterList",
                "src": "317:27:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 8554,
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
                        "id": 8551,
                        "name": "ElementaryTypeName",
                        "src": "361:4:34"
                      }
                    ],
                    "id": 8552,
                    "name": "VariableDeclaration",
                    "src": "361:4:34"
                  }
                ],
                "id": 8553,
                "name": "ParameterList",
                "src": "360:6:34"
              }
            ],
            "id": 8554,
            "name": "FunctionDefinition",
            "src": "300:67:34"
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
                      "scope": 8562,
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
                        "id": 8555,
                        "name": "ElementaryTypeName",
                        "src": "385:7:34"
                      }
                    ],
                    "id": 8556,
                    "name": "VariableDeclaration",
                    "src": "385:20:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 8562,
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
                        "id": 8557,
                        "name": "ElementaryTypeName",
                        "src": "407:7:34"
                      }
                    ],
                    "id": 8558,
                    "name": "VariableDeclaration",
                    "src": "407:18:34"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 8562,
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
                        "id": 8559,
                        "name": "ElementaryTypeName",
                        "src": "427:7:34"
                      }
                    ],
                    "id": 8560,
                    "name": "VariableDeclaration",
                    "src": "427:13:34"
                  }
                ],
                "id": 8561,
                "name": "ParameterList",
                "src": "384:57:34"
              }
            ],
            "id": 8562,
            "name": "EventDefinition",
            "src": "370:72:34"
          }
        ],
        "id": 8563,
        "name": "ContractDefinition",
        "src": "155:289:34"
      }
    ],
    "id": 8564,
    "name": "SourceUnit",
    "src": "0:445:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-01T21:37:41.254Z"
}