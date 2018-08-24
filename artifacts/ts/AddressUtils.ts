export const AddressUtils = 
{
  "contractName": "AddressUtils",
  "abi": [],
  "bytecode": "0x60606040523415600e57600080fd5b603580601b6000396000f3006060604052600080fd00a165627a7a723058201a94a5c7a3f497e8cf56df37432c210e41d7bb26c8b2dfc0b33d74a7b36b64720029",
  "deployedBytecode": "0x6060604052600080fd00a165627a7a723058201a94a5c7a3f497e8cf56df37432c210e41d7bb26c8b2dfc0b33d74a7b36b64720029",
  "sourceMap": "86:518:33:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "86:518:33:-;;;;;",
  "source": "pragma solidity ^0.4.18;\n\n/**\n * Utility library of inline functions on addresses\n */\nlibrary AddressUtils {\n\n  /**\n   * Returns whether there is code in the target address\n   * @dev This function will return false if invoked during the constructor of a contract,\n   *  as the code is not actually created until after the constructor finishes.\n   * @param addr address address to check\n   * @return whether there is code in the target address\n   */\n  function isContract(address addr) internal view returns (bool) {\n    uint256 size;\n    assembly { size := extcodesize(addr) }\n    return size > 0;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/AddressUtils.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/AddressUtils.sol",
      "exportedSymbols": {
        "AddressUtils": [
          9627
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
        "id": 9610,
        "name": "PragmaDirective",
        "src": "0:24:33"
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
            9627
          ],
          "name": "AddressUtils",
          "scope": 9628
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
              "scope": 9627,
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
                      "scope": 9626,
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
                        "id": 9611,
                        "name": "ElementaryTypeName",
                        "src": "471:7:33"
                      }
                    ],
                    "id": 9612,
                    "name": "VariableDeclaration",
                    "src": "471:12:33"
                  }
                ],
                "id": 9613,
                "name": "ParameterList",
                "src": "470:14:33"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9626,
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
                        "id": 9614,
                        "name": "ElementaryTypeName",
                        "src": "508:4:33"
                      }
                    ],
                    "id": 9615,
                    "name": "VariableDeclaration",
                    "src": "508:4:33"
                  }
                ],
                "id": 9616,
                "name": "ParameterList",
                "src": "507:6:33"
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
                          "scope": 9626,
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
                            "id": 9617,
                            "name": "ElementaryTypeName",
                            "src": "520:7:33"
                          }
                        ],
                        "id": 9618,
                        "name": "VariableDeclaration",
                        "src": "520:12:33"
                      }
                    ],
                    "id": 9619,
                    "name": "VariableDeclarationStatement",
                    "src": "520:12:33"
                  },
                  {
                    "attributes": {
                      "externalReferences": [
                        {
                          "size": {
                            "declaration": 9618,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "549:4:33",
                            "valueSize": 1
                          }
                        },
                        {
                          "addr": {
                            "declaration": 9612,
                            "isOffset": false,
                            "isSlot": false,
                            "src": "569:4:33",
                            "valueSize": 1
                          }
                        }
                      ],
                      "operations": "{\n    size := extcodesize(addr)\n}"
                    },
                    "children": [],
                    "id": 9620,
                    "name": "InlineAssembly",
                    "src": "538:49:33"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9616
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
                              "referencedDeclaration": 9618,
                              "type": "uint256",
                              "value": "size"
                            },
                            "id": 9621,
                            "name": "Identifier",
                            "src": "588:4:33"
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
                            "id": 9622,
                            "name": "Literal",
                            "src": "595:1:33"
                          }
                        ],
                        "id": 9623,
                        "name": "BinaryOperation",
                        "src": "588:8:33"
                      }
                    ],
                    "id": 9624,
                    "name": "Return",
                    "src": "581:15:33"
                  }
                ],
                "id": 9625,
                "name": "Block",
                "src": "514:87:33"
              }
            ],
            "id": 9626,
            "name": "FunctionDefinition",
            "src": "451:150:33"
          }
        ],
        "id": 9627,
        "name": "ContractDefinition",
        "src": "86:518:33"
      }
    ],
    "id": 9628,
    "name": "SourceUnit",
    "src": "0:605:33"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-08-24T23:27:49.745Z"
}