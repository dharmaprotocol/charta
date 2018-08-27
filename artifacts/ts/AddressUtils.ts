export const AddressUtils = 
{
  "contractName": "AddressUtils",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058201a94a5c7a3f497e8cf56df37432c210e41d7bb26c8b2dfc0b33d74a7b36b64720029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058201a94a5c7a3f497e8cf56df37432c210e41d7bb26c8b2dfc0b33d74a7b36b64720029",
  "sourceMap": "86:518:34:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "86:518:34:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary AddressUtils {\n\n  /**\n   * Returns whether there is code in the target address\n   * @dev This function will return false if invoked during the constructor of a contract,\n   *  as the code is not actually created until after the constructor finishes.\n   * @param addr address address to check\n   * @return whether there is code in the target address\n   */\n  function isContract(address addr) internal view returns (bool) {\n    uint256 size;\n    assembly { size := extcodesize(addr) }\n    return size > 0;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/AddressUtils.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
      "exportedSymbols": {
        "AddressUtils": [
          13188
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
        "id": 13171,
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
          "contractKind": "library",
          "documentation": "Utility library of inline functions on addresses",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            13188
          ],
          "name": "AddressUtils",
          "scope": 13189
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
              "scope": 13188,
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
                      "scope": 13187,
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
                        "id": 13172,
                        "name": "ElementaryTypeName",
                        "src": "471:7:34"
                      }
                    ],
                    "id": 13173,
                    "name": "VariableDeclaration",
                    "src": "471:12:34"
                  }
                ],
                "id": 13174,
                "name": "ParameterList",
                "src": "470:14:34"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 13187,
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
                        "id": 13175,
                        "name": "ElementaryTypeName",
                        "src": "508:4:34"
                      }
                    ],
                    "id": 13176,
                    "name": "VariableDeclaration",
                    "src": "508:4:34"
                  }
                ],
                "id": 13177,
                "name": "ParameterList",
                "src": "507:6:34"
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
                          "scope": 13187,
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
                            "id": 13178,
                            "name": "ElementaryTypeName",
                            "src": "520:7:34"
                          }
                        ],
                        "id": 13179,
                        "name": "VariableDeclaration",
                        "src": "520:12:34"
                      }
                    ],
                    "id": 13180,
                    "name": "VariableDeclarationStatement",
                    "src": "520:12:34"
                  },
                  {
                    "attributes": {
                      "externalReferences": [
                        {
                          "size": {
                            "declaration": 13179,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "549:4:34",
                            "valueSize": 1
                          }
                        },
                        {
                          "addr": {
                            "declaration": 13173,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "569:4:34",
                            "valueSize": 1
                          }
                        }
                      ],
                      "operations": "{\n    size := extcodesize(addr)\n}"
                    },
                    "children": [],
                    "id": 13181,
                    "name": "InlineAssembly",
                    "src": "538:49:34"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 13177
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
                              "referencedDeclaration": 13179,
                              "type": "uint256",
                              "value": "size"
                            },
                            "id": 13182,
                            "name": "Identifier",
                            "src": "588:4:34"
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
                            "id": 13183,
                            "name": "Literal",
                            "src": "595:1:34"
                          }
                        ],
                        "id": 13184,
                        "name": "BinaryOperation",
                        "src": "588:8:34"
                      }
                    ],
                    "id": 13185,
                    "name": "Return",
                    "src": "581:15:34"
                  }
                ],
                "id": 13186,
                "name": "Block",
                "src": "514:87:34"
              }
            ],
            "id": 13187,
            "name": "FunctionDefinition",
            "src": "451:150:34"
          }
        ],
        "id": 13188,
        "name": "ContractDefinition",
        "src": "86:518:34"
      }
    ],
    "id": 13189,
    "name": "SourceUnit",
    "src": "0:605:34"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-26T18:11:36.266Z"
}