export const AddressUtils = 
{
  "contractName": "AddressUtils",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058201a94a5c7a3f497e8cf56df37432c210e41d7bb26c8b2dfc0b33d74a7b36b64720029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058201a94a5c7a3f497e8cf56df37432c210e41d7bb26c8b2dfc0b33d74a7b36b64720029",
  "sourceMap": "86:518:27:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "86:518:27:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary AddressUtils {\n\n  /**\n   * Returns whether there is code in the target address\n   * @dev This function will return false if invoked during the constructor of a contract,\n   *  as the code is not actually created until after the constructor finishes.\n   * @param addr address address to check\n   * @return whether there is code in the target address\n   */\n  function isContract(address addr) internal view returns (bool) {\n    uint256 size;\n    assembly { size := extcodesize(addr) }\n    return size > 0;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/AddressUtils.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
      "exportedSymbols": {
        "AddressUtils": [
          7889
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
        "id": 7872,
        "name": "PragmaDirective",
        "src": "0:24:27"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "library",
          "documentation": "Utility library of inline functions on addresses",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7889
          ],
          "name": "AddressUtils",
          "scope": 7890
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "isContract",
              "payable": false,
              "scope": 7889,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "addr",
                      "scope": 7888,
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
                        "id": 7873,
                        "name": "ElementaryTypeName",
                        "src": "471:7:27"
                      }
                    ],
                    "id": 7874,
                    "name": "VariableDeclaration",
                    "src": "471:12:27"
                  }
                ],
                "id": 7875,
                "name": "ParameterList",
                "src": "470:14:27"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 7888,
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
                        "id": 7876,
                        "name": "ElementaryTypeName",
                        "src": "508:4:27"
                      }
                    ],
                    "id": 7877,
                    "name": "VariableDeclaration",
                    "src": "508:4:27"
                  }
                ],
                "id": 7878,
                "name": "ParameterList",
                "src": "507:6:27"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "size",
                          "scope": 7888,
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
                            "id": 7879,
                            "name": "ElementaryTypeName",
                            "src": "520:7:27"
                          }
                        ],
                        "id": 7880,
                        "name": "VariableDeclaration",
                        "src": "520:12:27"
                      }
                    ],
                    "id": 7881,
                    "name": "VariableDeclarationStatement",
                    "src": "520:12:27"
                  },
                  {
                    "attributes": {
                      "externalReferences": [
                        {
                          "size": {
                            "declaration": 7880,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "549:4:27",
                            "valueSize": 1
                          }
                        },
                        {
                          "addr": {
                            "declaration": 7874,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "569:4:27",
                            "valueSize": 1
                          }
                        }
                      ],
                      "operations": "{\n    size := extcodesize(addr)\n}"
                    },
                    "children": [],
                    "id": 7882,
                    "name": "InlineAssembly",
                    "src": "538:49:27"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 7878
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7880,
                              "type": "uint256",
                              "value": "size"
                            },
                            "id": 7883,
                            "name": "Identifier",
                            "src": "588:4:27"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 7884,
                            "name": "Literal",
                            "src": "595:1:27"
                          }
                        ],
                        "id": 7885,
                        "name": "BinaryOperation",
                        "src": "588:8:27"
                      }
                    ],
                    "id": 7886,
                    "name": "Return",
                    "src": "581:15:27"
                  }
                ],
                "id": 7887,
                "name": "Block",
                "src": "514:87:27"
              }
            ],
            "id": 7888,
            "name": "FunctionDefinition",
            "src": "451:150:27"
          }
        ],
        "id": 7889,
        "name": "ContractDefinition",
        "src": "86:518:27"
      }
    ],
    "id": 7890,
    "name": "SourceUnit",
    "src": "0:605:27"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-04-25T07:03:31.166Z"
}