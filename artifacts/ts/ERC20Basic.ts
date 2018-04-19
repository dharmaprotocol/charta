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
          2990
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
        "id": 2960,
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
            2990
          ],
          "name": "ERC20Basic",
          "scope": 2991
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
              "scope": 2990,
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
                "id": 2961,
                "name": "ParameterList",
                "src": "199:2:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2965,
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
                        "id": 2962,
                        "name": "ElementaryTypeName",
                        "src": "223:7:13"
                      }
                    ],
                    "id": 2963,
                    "name": "VariableDeclaration",
                    "src": "223:7:13"
                  }
                ],
                "id": 2964,
                "name": "ParameterList",
                "src": "222:9:13"
              }
            ],
            "id": 2965,
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
              "scope": 2990,
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
                      "scope": 2972,
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
                        "id": 2966,
                        "name": "ElementaryTypeName",
                        "src": "254:7:13"
                      }
                    ],
                    "id": 2967,
                    "name": "VariableDeclaration",
                    "src": "254:11:13"
                  }
                ],
                "id": 2968,
                "name": "ParameterList",
                "src": "253:13:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2972,
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
                        "id": 2969,
                        "name": "ElementaryTypeName",
                        "src": "288:7:13"
                      }
                    ],
                    "id": 2970,
                    "name": "VariableDeclaration",
                    "src": "288:7:13"
                  }
                ],
                "id": 2971,
                "name": "ParameterList",
                "src": "287:9:13"
              }
            ],
            "id": 2972,
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
              "scope": 2990,
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
                      "scope": 2981,
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
                        "id": 2973,
                        "name": "ElementaryTypeName",
                        "src": "318:7:13"
                      }
                    ],
                    "id": 2974,
                    "name": "VariableDeclaration",
                    "src": "318:10:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 2981,
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
                        "id": 2975,
                        "name": "ElementaryTypeName",
                        "src": "330:7:13"
                      }
                    ],
                    "id": 2976,
                    "name": "VariableDeclaration",
                    "src": "330:13:13"
                  }
                ],
                "id": 2977,
                "name": "ParameterList",
                "src": "317:27:13"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2981,
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
                        "id": 2978,
                        "name": "ElementaryTypeName",
                        "src": "361:4:13"
                      }
                    ],
                    "id": 2979,
                    "name": "VariableDeclaration",
                    "src": "361:4:13"
                  }
                ],
                "id": 2980,
                "name": "ParameterList",
                "src": "360:6:13"
              }
            ],
            "id": 2981,
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
                      "scope": 2989,
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
                        "id": 2982,
                        "name": "ElementaryTypeName",
                        "src": "385:7:13"
                      }
                    ],
                    "id": 2983,
                    "name": "VariableDeclaration",
                    "src": "385:20:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "to",
                      "scope": 2989,
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
                        "id": 2984,
                        "name": "ElementaryTypeName",
                        "src": "407:7:13"
                      }
                    ],
                    "id": 2985,
                    "name": "VariableDeclaration",
                    "src": "407:18:13"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "value",
                      "scope": 2989,
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
                        "id": 2986,
                        "name": "ElementaryTypeName",
                        "src": "427:7:13"
                      }
                    ],
                    "id": 2987,
                    "name": "VariableDeclaration",
                    "src": "427:13:13"
                  }
                ],
                "id": 2988,
                "name": "ParameterList",
                "src": "384:57:13"
              }
            ],
            "id": 2989,
            "name": "EventDefinition",
            "src": "370:72:13"
          }
        ],
        "id": 2990,
        "name": "ContractDefinition",
        "src": "155:289:13"
      }
    ],
    "id": 2991,
    "name": "SourceUnit",
    "src": "0:445:13"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-19T23:50:06.584Z"
}