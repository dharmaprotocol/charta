export const TokenRegistry = 
{
  "contractName": "TokenRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolHashToTokenIndex",
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
          "name": "symbol",
          "type": "string"
        },
        {
          "name": "token",
          "type": "address"
        }
      ],
      "name": "setTokenAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenIndexBySymbol",
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
          "name": "symbol",
          "type": "string"
        }
      ],
      "name": "getTokenAddressBySymbol",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTokenAddressByIndex",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getTokenSymbolByIndex",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenSymbolList",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenSymbolListLength",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
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
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "symbolHashToTokenAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610da6806100536000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313b435ff146100b457806317456e56146100ef5780632e1e1bb31461016b5780633550b6d9146101dc5780635715c5b7146102795780636e7cbb0d146102dc5780638da5cb5b1461037857806395f121bf146103cd578063c51ccb4014610469578063deb5f37614610498578063f2fde38b146104ff575b600080fd5b34156100bf57600080fd5b6100d9600480803560001916906020019091905050610538565b6040518082815260200191505060405180910390f35b34156100fa57600080fd5b610169600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610550565b005b341561017657600080fd5b6101c6600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107a4565b6040518082815260200191505060405180910390f35b34156101e757600080fd5b610237600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061082b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561028457600080fd5b61029a60048080359060200190919050506108d2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102e757600080fd5b6102fd6004808035906020019091905050610994565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033d578082015181840152602081019050610322565b50505050905090810190601f16801561036a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038357600080fd5b61038b610a4d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103d857600080fd5b6103ee6004808035906020019091905050610a72565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042e578082015181840152602081019050610413565b50505050905090810190601f16801561045b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561047457600080fd5b61047c610b25565b604051808260ff1660ff16815260200191505060405180910390f35b34156104a357600080fd5b6104bd600480803560001916906020019091905050610b39565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561050a57600080fd5b610536600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b6c565b005b60026020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ad57600080fd5b61010061010360009054906101000a900460ff1660ff161015156105d057600080fd5b826040518082805190602001908083835b60208310151561060657805182526020820191506020810190506020830392506105e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156107455782600361010360009054906101000a900460ff1660ff16610100811015156106c957fe5b0190805190602001906106dd929190610cc1565b5061010360009054906101000a900460ff1660ff1660026000836000191660001916815260200190815260200160002081905550610103600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600060026000836040518082805190602001908083835b6020831015156107e057805182526020820191506020810190506020830392506107bb565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916600019168152602001908152602001600020549050919050565b600060016000836040518082805190602001908083835b6020831015156108675780518252602082019150602081019050602083039250610842565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600383610100811015156108e557fe5b019050600160008260405180828054600181600116156101000203166002900480156109485780601f10610926576101008083540402835291820191610948565b820191906000526020600020905b815481529060010190602001808311610934575b505091505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b61099c610d41565b600382610100811015156109ac57fe5b018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a415780601f10610a1657610100808354040283529160200191610a41565b820191906000526020600020905b815481529060010190602001808311610a2457829003601f168201915b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038161010081101515610a8257fe5b016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b505050505081565b61010360009054906101000a900460ff1681565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bc757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c0357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d0257805160ff1916838001178555610d30565b82800160010185558215610d30579182015b82811115610d2f578251825591602001919060010190610d14565b5b509050610d3d9190610d55565b5090565b602060405190810160405280600081525090565b610d7791905b80821115610d73576000816000905550600101610d5b565b5090565b905600a165627a7a723058209afb482c8d0903ad294c7429e279f4136322e9591a573a0bfb993a8676add5f70029",
  "deployedBytecode": "0x6060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806313b435ff146100b457806317456e56146100ef5780632e1e1bb31461016b5780633550b6d9146101dc5780635715c5b7146102795780636e7cbb0d146102dc5780638da5cb5b1461037857806395f121bf146103cd578063c51ccb4014610469578063deb5f37614610498578063f2fde38b146104ff575b600080fd5b34156100bf57600080fd5b6100d9600480803560001916906020019091905050610538565b6040518082815260200191505060405180910390f35b34156100fa57600080fd5b610169600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610550565b005b341561017657600080fd5b6101c6600480803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506107a4565b6040518082815260200191505060405180910390f35b34156101e757600080fd5b610237600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061082b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561028457600080fd5b61029a60048080359060200190919050506108d2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156102e757600080fd5b6102fd6004808035906020019091905050610994565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033d578082015181840152602081019050610322565b50505050905090810190601f16801561036a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561038357600080fd5b61038b610a4d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103d857600080fd5b6103ee6004808035906020019091905050610a72565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561042e578082015181840152602081019050610413565b50505050905090810190601f16801561045b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561047457600080fd5b61047c610b25565b604051808260ff1660ff16815260200191505060405180910390f35b34156104a357600080fd5b6104bd600480803560001916906020019091905050610b39565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561050a57600080fd5b610536600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b6c565b005b60026020528060005260406000206000915090505481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156105ad57600080fd5b61010061010360009054906101000a900460ff1660ff161015156105d057600080fd5b826040518082805190602001908083835b60208310151561060657805182526020820191506020810190506020830392506105e1565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156107455782600361010360009054906101000a900460ff1660ff16610100811015156106c957fe5b0190805190602001906106dd929190610cc1565b5061010360009054906101000a900460ff1660ff1660026000836000191660001916815260200190815260200160002081905550610103600081819054906101000a900460ff168092919060010191906101000a81548160ff021916908360ff160217905550505b8160016000836000191660001916815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050565b600060026000836040518082805190602001908083835b6020831015156107e057805182526020820191506020810190506020830392506107bb565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916600019168152602001908152602001600020549050919050565b600060016000836040518082805190602001908083835b6020831015156108675780518252602082019150602081019050602083039250610842565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600080600383610100811015156108e557fe5b019050600160008260405180828054600181600116156101000203166002900480156109485780601f10610926576101008083540402835291820191610948565b820191906000526020600020905b815481529060010190602001808311610934575b505091505060405180910390206000191660001916815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16915050919050565b61099c610d41565b600382610100811015156109ac57fe5b018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a415780601f10610a1657610100808354040283529160200191610a41565b820191906000526020600020905b815481529060010190602001808311610a2457829003601f168201915b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60038161010081101515610a8257fe5b016000915090508054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b1d5780601f10610af257610100808354040283529160200191610b1d565b820191906000526020600020905b815481529060010190602001808311610b0057829003601f168201915b505050505081565b61010360009054906101000a900460ff1681565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bc757600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610c0357600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10610d0257805160ff1916838001178555610d30565b82800160010185558215610d30579182015b82811115610d2f578251825591602001919060010190610d14565b5b509050610d3d9190610d55565b5090565b602060405190810160405280600081525090565b610d7791905b80821115610d73576000816000905550600101610d5b565b5090565b905600a165627a7a723058209afb482c8d0903ad294c7429e279f4136322e9591a573a0bfb993a8676add5f70029",
  "sourceMap": "717:2230:5:-;;;509:10:22;501:5;;:18;;;;;;;;;;;;;;;;;;717:2230:5;;;;;;",
  "deployedSourceMap": "717:2230:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;823:55;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1038:476;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2553:138;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1626:145;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2212:198;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2827:118;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;238:20:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;884:34:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;924:34:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;757:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;823:55:5;;;;;;;;;;;;;;;;;:::o;1038:476::-;1167:18;653:5:22;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;1152:3:5;1128:21;;;;;;;;;;;:27;;;1120:36;;;;;;;;1198:6;1188:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1167:38:5;;1268:1;1220:50;;:24;:36;1245:10;1220:36;;;;;;;;;;;;;;;;;;;;;;;;;;;:50;;;1216:237;;;1327:6;1286:15;1302:21;;;;;;;;;;;1286:38;;;;;;;;;;;;:47;;;;;;;;;;;;:::i;:::-;;1384:21;;;;;;;;;;;1347:58;;:22;:34;1370:10;1347:34;;;;;;;;;;;;;;;;;:58;;;;1419:21;;:23;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1216:237;1502:5;1463:24;:36;1488:10;1463:36;;;;;;;;;;;;;;;;;;:44;;;;;;;;;;;;;;;;;;1038:476;;;:::o;2553:138::-;2620:4;2643:22;:41;2676:6;2666:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;2643:41:5;;;;;;;;;;;;;;;;;;2636:48;;2553:138;;;:::o;1626:145::-;1695:7;1721:24;:43;1756:6;1746:17;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;1721:43:5;;;;;;;;;;;;;;;;;;;;;;;;;;;1714:50;;1626:145;;;:::o;2212:198::-;2277:7;2296:21;2320:15;2336:5;2320:22;;;;;;;;;;2296:46;;2360:24;:43;2395:6;2385:17;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:43;;;;;;;;;;;;;;;;;;;;;;;;;;;2353:50;;2212:198;;;;:::o;2827:118::-;2891:6;;:::i;:::-;2916:15;2932:5;2916:22;;;;;;;;;;2909:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2827:118;;;:::o;238:20:22:-;;;;;;;;;;;;;:::o;884:34:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;924:::-;;;;;;;;;;;;;:::o;757:60::-;;;;;;;;;;;;;;;;;;;;;;:::o;832:169:22:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;717:2230:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\n/**\n * The TokenRegistry is a basic registry mapping token symbols\n * to their known, deployed addresses on the current blockchain.\n *\n * Note that the TokenRegistry does *not* mediate any of the\n * core protocol's business logic, but, rather, is a helpful\n * utility for Terms Contracts to use in encoding, decoding, and\n * resolving the addresses of currently deployed tokens.\n *\n * At this point in time, administration of the Token Registry is\n * under Dharma Labs' control.  With more sophisticated decentralized\n * governance mechanisms, we intend to shift ownership of this utility\n * contract to the Dharma community.\n */\ncontract TokenRegistry is Ownable {\n    mapping (bytes32 => address) public symbolHashToTokenAddress;\n    mapping (bytes32 => uint) public symbolHashToTokenIndex;\n    string[256] public tokenSymbolList;\n    uint8 public tokenSymbolListLength;\n\n    /**\n     * Maps the given symbol to the given token address.\n     */\n    function setTokenAddress(string symbol, address token) public onlyOwner {\n        require(tokenSymbolListLength < 256);\n\n        bytes32 symbolHash = keccak256(symbol);\n\n        if (symbolHashToTokenAddress[symbolHash] == address(0)) {\n            tokenSymbolList[tokenSymbolListLength] = symbol;\n            symbolHashToTokenIndex[symbolHash] = tokenSymbolListLength;\n            tokenSymbolListLength++;\n        }\n\n        symbolHashToTokenAddress[symbolHash] = token;\n    }\n\n    /**\n     * Given a symbol, resolves the current address of the token the symbol is mapped to.\n     */\n    function getTokenAddressBySymbol(string symbol) public view returns (address) {\n        return symbolHashToTokenAddress[keccak256(symbol)];\n    }\n\n    /**\n     * Given the known index of a token within the registry's symbol list,\n     * returns the address of the token mapped to the symbol at that index.\n     *\n     * This is a useful utility for compactly encoding the address of a token into a\n     * TermsContractParameters string -- by encoding a token by its index in a\n     * a 256 slot array, we can represent a token by a 1 byte uint instead of a 20 byte address.\n     */\n    function getTokenAddressByIndex(uint index) public view returns (address) {\n        string storage symbol = tokenSymbolList[index];\n\n        return symbolHashToTokenAddress[keccak256(symbol)];\n    }\n\n    /**\n     * Given a symbol, resolves the index of the token the symbol is mapped to within the registry's\n     * symbol list.\n     */\n    function getTokenIndexBySymbol(string symbol) public view returns (uint) {\n        return symbolHashToTokenIndex[keccak256(symbol)];\n    }\n\n    /**\n     * Given an index, resolves the symbol of the token at that index in the registry's\n     * token symbol list.\n     */\n    function getTokenSymbolByIndex(uint index) public view returns (string) {\n        return tokenSymbolList[index];\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
      "exportedSymbols": {
        "TokenRegistry": [
          2238
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 2108,
        "name": "PragmaDirective",
        "src": "0:23:5"
      },
      {
        "attributes": {
          "SourceUnit": 5492,
          "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
          "scope": 2239,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2109,
        "name": "ImportDirective",
        "src": "25:59:5"
      },
      {
        "attributes": {
          "contractDependencies": [
            5491
          ],
          "contractKind": "contract",
          "documentation": "The TokenRegistry is a basic registry mapping token symbols\nto their known, deployed addresses on the current blockchain.\n * Note that the TokenRegistry does *not* mediate any of the\ncore protocol's business logic, but, rather, is a helpful\nutility for Terms Contracts to use in encoding, decoding, and\nresolving the addresses of currently deployed tokens.\n * At this point in time, administration of the Token Registry is\nunder Dharma Labs' control.  With more sophisticated decentralized\ngovernance mechanisms, we intend to shift ownership of this utility\ncontract to the Dharma community.",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2238,
            5491
          ],
          "name": "TokenRegistry",
          "scope": 2239
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
                  "name": "Ownable",
                  "referencedDeclaration": 5491,
                  "type": "contract Ownable"
                },
                "id": 2110,
                "name": "UserDefinedTypeName",
                "src": "743:7:5"
              }
            ],
            "id": 2111,
            "name": "InheritanceSpecifier",
            "src": "743:7:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolHashToTokenAddress",
              "scope": 2238,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => address)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2112,
                    "name": "ElementaryTypeName",
                    "src": "766:7:5"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 2113,
                    "name": "ElementaryTypeName",
                    "src": "777:7:5"
                  }
                ],
                "id": 2114,
                "name": "Mapping",
                "src": "757:28:5"
              }
            ],
            "id": 2115,
            "name": "VariableDeclaration",
            "src": "757:60:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbolHashToTokenIndex",
              "scope": 2238,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => uint256)",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 2116,
                    "name": "ElementaryTypeName",
                    "src": "832:7:5"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2117,
                    "name": "ElementaryTypeName",
                    "src": "843:4:5"
                  }
                ],
                "id": 2118,
                "name": "Mapping",
                "src": "823:25:5"
              }
            ],
            "id": 2119,
            "name": "VariableDeclaration",
            "src": "823:55:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolList",
              "scope": 2238,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref[256] storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "type": "string storage ref[256] storage pointer"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 2120,
                    "name": "ElementaryTypeName",
                    "src": "884:6:5"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "323536",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 256",
                      "value": "256"
                    },
                    "id": 2121,
                    "name": "Literal",
                    "src": "891:3:5"
                  }
                ],
                "id": 2122,
                "name": "ArrayTypeName",
                "src": "884:11:5"
              }
            ],
            "id": 2123,
            "name": "VariableDeclaration",
            "src": "884:34:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenSymbolListLength",
              "scope": 2238,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint8",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint8",
                  "type": "uint8"
                },
                "id": 2124,
                "name": "ElementaryTypeName",
                "src": "924:5:5"
              }
            ],
            "id": 2125,
            "name": "VariableDeclaration",
            "src": "924:34:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenAddress",
              "payable": false,
              "scope": 2238,
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
                      "name": "symbol",
                      "scope": 2177,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2126,
                        "name": "ElementaryTypeName",
                        "src": "1063:6:5"
                      }
                    ],
                    "id": 2127,
                    "name": "VariableDeclaration",
                    "src": "1063:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "token",
                      "scope": 2177,
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
                        "id": 2128,
                        "name": "ElementaryTypeName",
                        "src": "1078:7:5"
                      }
                    ],
                    "id": 2129,
                    "name": "VariableDeclaration",
                    "src": "1078:13:5"
                  }
                ],
                "id": 2130,
                "name": "ParameterList",
                "src": "1062:30:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2133,
                "name": "ParameterList",
                "src": "1110:0:5"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 5465,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2131,
                    "name": "Identifier",
                    "src": "1100:9:5"
                  }
                ],
                "id": 2132,
                "name": "ModifierInvocation",
                "src": "1100:9:5"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5581,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2134,
                            "name": "Identifier",
                            "src": "1120:7:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint16",
                                "typeString": "uint16"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "<",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2125,
                                  "type": "uint8",
                                  "value": "tokenSymbolListLength"
                                },
                                "id": 2135,
                                "name": "Identifier",
                                "src": "1128:21:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323536",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 256",
                                  "value": "256"
                                },
                                "id": 2136,
                                "name": "Literal",
                                "src": "1152:3:5"
                              }
                            ],
                            "id": 2137,
                            "name": "BinaryOperation",
                            "src": "1128:27:5"
                          }
                        ],
                        "id": 2138,
                        "name": "FunctionCall",
                        "src": "1120:36:5"
                      }
                    ],
                    "id": 2139,
                    "name": "ExpressionStatement",
                    "src": "1120:36:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2141
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbolHash",
                          "scope": 2177,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "bytes32",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 2140,
                            "name": "ElementaryTypeName",
                            "src": "1167:7:5"
                          }
                        ],
                        "id": 2141,
                        "name": "VariableDeclaration",
                        "src": "1167:18:5"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bytes32",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5572,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 2142,
                            "name": "Identifier",
                            "src": "1188:9:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2127,
                              "type": "string memory",
                              "value": "symbol"
                            },
                            "id": 2143,
                            "name": "Identifier",
                            "src": "1198:6:5"
                          }
                        ],
                        "id": 2144,
                        "name": "FunctionCall",
                        "src": "1188:17:5"
                      }
                    ],
                    "id": 2145,
                    "name": "VariableDeclarationStatement",
                    "src": "1167:38:5"
                  },
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "==",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2115,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolHashToTokenAddress"
                                },
                                "id": 2146,
                                "name": "Identifier",
                                "src": "1220:24:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2141,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 2147,
                                "name": "Identifier",
                                "src": "1245:10:5"
                              }
                            ],
                            "id": 2148,
                            "name": "IndexAccess",
                            "src": "1220:36:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "address",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_rational_0_by_1",
                                      "typeString": "int_const 0"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 2149,
                                "name": "ElementaryTypeNameExpression",
                                "src": "1260:7:5"
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
                                "id": 2150,
                                "name": "Literal",
                                "src": "1268:1:5"
                              }
                            ],
                            "id": 2151,
                            "name": "FunctionCall",
                            "src": "1260:10:5"
                          }
                        ],
                        "id": 2152,
                        "name": "BinaryOperation",
                        "src": "1220:50:5"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "string storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "string storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2123,
                                          "type": "string storage ref[256] storage ref",
                                          "value": "tokenSymbolList"
                                        },
                                        "id": 2153,
                                        "name": "Identifier",
                                        "src": "1286:15:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2125,
                                          "type": "uint8",
                                          "value": "tokenSymbolListLength"
                                        },
                                        "id": 2154,
                                        "name": "Identifier",
                                        "src": "1302:21:5"
                                      }
                                    ],
                                    "id": 2155,
                                    "name": "IndexAccess",
                                    "src": "1286:38:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2127,
                                      "type": "string memory",
                                      "value": "symbol"
                                    },
                                    "id": 2156,
                                    "name": "Identifier",
                                    "src": "1327:6:5"
                                  }
                                ],
                                "id": 2157,
                                "name": "Assignment",
                                "src": "1286:47:5"
                              }
                            ],
                            "id": 2158,
                            "name": "ExpressionStatement",
                            "src": "1286:47:5"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2119,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "symbolHashToTokenIndex"
                                        },
                                        "id": 2159,
                                        "name": "Identifier",
                                        "src": "1347:22:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2141,
                                          "type": "bytes32",
                                          "value": "symbolHash"
                                        },
                                        "id": 2160,
                                        "name": "Identifier",
                                        "src": "1370:10:5"
                                      }
                                    ],
                                    "id": 2161,
                                    "name": "IndexAccess",
                                    "src": "1347:34:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2125,
                                      "type": "uint8",
                                      "value": "tokenSymbolListLength"
                                    },
                                    "id": 2162,
                                    "name": "Identifier",
                                    "src": "1384:21:5"
                                  }
                                ],
                                "id": 2163,
                                "name": "Assignment",
                                "src": "1347:58:5"
                              }
                            ],
                            "id": 2164,
                            "name": "ExpressionStatement",
                            "src": "1347:58:5"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "++",
                                  "prefix": false,
                                  "type": "uint8"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2125,
                                      "type": "uint8",
                                      "value": "tokenSymbolListLength"
                                    },
                                    "id": 2165,
                                    "name": "Identifier",
                                    "src": "1419:21:5"
                                  }
                                ],
                                "id": 2166,
                                "name": "UnaryOperation",
                                "src": "1419:23:5"
                              }
                            ],
                            "id": 2167,
                            "name": "ExpressionStatement",
                            "src": "1419:23:5"
                          }
                        ],
                        "id": 2168,
                        "name": "Block",
                        "src": "1272:181:5"
                      }
                    ],
                    "id": 2169,
                    "name": "IfStatement",
                    "src": "1216:237:5"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2115,
                                  "type": "mapping(bytes32 => address)",
                                  "value": "symbolHashToTokenAddress"
                                },
                                "id": 2170,
                                "name": "Identifier",
                                "src": "1463:24:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2141,
                                  "type": "bytes32",
                                  "value": "symbolHash"
                                },
                                "id": 2171,
                                "name": "Identifier",
                                "src": "1488:10:5"
                              }
                            ],
                            "id": 2172,
                            "name": "IndexAccess",
                            "src": "1463:36:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2129,
                              "type": "address",
                              "value": "token"
                            },
                            "id": 2173,
                            "name": "Identifier",
                            "src": "1502:5:5"
                          }
                        ],
                        "id": 2174,
                        "name": "Assignment",
                        "src": "1463:44:5"
                      }
                    ],
                    "id": 2175,
                    "name": "ExpressionStatement",
                    "src": "1463:44:5"
                  }
                ],
                "id": 2176,
                "name": "Block",
                "src": "1110:404:5"
              }
            ],
            "id": 2177,
            "name": "FunctionDefinition",
            "src": "1038:476:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressBySymbol",
              "payable": false,
              "scope": 2238,
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
                      "name": "symbol",
                      "scope": 2191,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2178,
                        "name": "ElementaryTypeName",
                        "src": "1659:6:5"
                      }
                    ],
                    "id": 2179,
                    "name": "VariableDeclaration",
                    "src": "1659:13:5"
                  }
                ],
                "id": 2180,
                "name": "ParameterList",
                "src": "1658:15:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2191,
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
                        "id": 2181,
                        "name": "ElementaryTypeName",
                        "src": "1695:7:5"
                      }
                    ],
                    "id": 2182,
                    "name": "VariableDeclaration",
                    "src": "1695:7:5"
                  }
                ],
                "id": 2183,
                "name": "ParameterList",
                "src": "1694:9:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2183
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2115,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolHashToTokenAddress"
                            },
                            "id": 2184,
                            "name": "Identifier",
                            "src": "1721:24:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5572,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 2185,
                                "name": "Identifier",
                                "src": "1746:9:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2179,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 2186,
                                "name": "Identifier",
                                "src": "1756:6:5"
                              }
                            ],
                            "id": 2187,
                            "name": "FunctionCall",
                            "src": "1746:17:5"
                          }
                        ],
                        "id": 2188,
                        "name": "IndexAccess",
                        "src": "1721:43:5"
                      }
                    ],
                    "id": 2189,
                    "name": "Return",
                    "src": "1714:50:5"
                  }
                ],
                "id": 2190,
                "name": "Block",
                "src": "1704:67:5"
              }
            ],
            "id": 2191,
            "name": "FunctionDefinition",
            "src": "1626:145:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenAddressByIndex",
              "payable": false,
              "scope": 2238,
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
                      "name": "index",
                      "scope": 2211,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2192,
                        "name": "ElementaryTypeName",
                        "src": "2244:4:5"
                      }
                    ],
                    "id": 2193,
                    "name": "VariableDeclaration",
                    "src": "2244:10:5"
                  }
                ],
                "id": 2194,
                "name": "ParameterList",
                "src": "2243:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2211,
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
                        "id": 2195,
                        "name": "ElementaryTypeName",
                        "src": "2277:7:5"
                      }
                    ],
                    "id": 2196,
                    "name": "VariableDeclaration",
                    "src": "2277:7:5"
                  }
                ],
                "id": 2197,
                "name": "ParameterList",
                "src": "2276:9:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2199
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "symbol",
                          "scope": 2211,
                          "stateVariable": false,
                          "storageLocation": "storage",
                          "type": "string storage pointer",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 2198,
                            "name": "ElementaryTypeName",
                            "src": "2296:6:5"
                          }
                        ],
                        "id": 2199,
                        "name": "VariableDeclaration",
                        "src": "2296:21:5"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2123,
                              "type": "string storage ref[256] storage ref",
                              "value": "tokenSymbolList"
                            },
                            "id": 2200,
                            "name": "Identifier",
                            "src": "2320:15:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2193,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 2201,
                            "name": "Identifier",
                            "src": "2336:5:5"
                          }
                        ],
                        "id": 2202,
                        "name": "IndexAccess",
                        "src": "2320:22:5"
                      }
                    ],
                    "id": 2203,
                    "name": "VariableDeclarationStatement",
                    "src": "2296:46:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2197
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2115,
                              "type": "mapping(bytes32 => address)",
                              "value": "symbolHashToTokenAddress"
                            },
                            "id": 2204,
                            "name": "Identifier",
                            "src": "2360:24:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_storage_ptr",
                                      "typeString": "string storage pointer"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5572,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 2205,
                                "name": "Identifier",
                                "src": "2385:9:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2199,
                                  "type": "string storage pointer",
                                  "value": "symbol"
                                },
                                "id": 2206,
                                "name": "Identifier",
                                "src": "2395:6:5"
                              }
                            ],
                            "id": 2207,
                            "name": "FunctionCall",
                            "src": "2385:17:5"
                          }
                        ],
                        "id": 2208,
                        "name": "IndexAccess",
                        "src": "2360:43:5"
                      }
                    ],
                    "id": 2209,
                    "name": "Return",
                    "src": "2353:50:5"
                  }
                ],
                "id": 2210,
                "name": "Block",
                "src": "2286:124:5"
              }
            ],
            "id": 2211,
            "name": "FunctionDefinition",
            "src": "2212:198:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenIndexBySymbol",
              "payable": false,
              "scope": 2238,
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
                      "name": "symbol",
                      "scope": 2225,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2212,
                        "name": "ElementaryTypeName",
                        "src": "2584:6:5"
                      }
                    ],
                    "id": 2213,
                    "name": "VariableDeclaration",
                    "src": "2584:13:5"
                  }
                ],
                "id": 2214,
                "name": "ParameterList",
                "src": "2583:15:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2225,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2215,
                        "name": "ElementaryTypeName",
                        "src": "2620:4:5"
                      }
                    ],
                    "id": 2216,
                    "name": "VariableDeclaration",
                    "src": "2620:4:5"
                  }
                ],
                "id": 2217,
                "name": "ParameterList",
                "src": "2619:6:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2217
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2119,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "symbolHashToTokenIndex"
                            },
                            "id": 2218,
                            "name": "Identifier",
                            "src": "2643:22:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "bytes32",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_string_memory_ptr",
                                      "typeString": "string memory"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5572,
                                  "type": "function () pure returns (bytes32)",
                                  "value": "keccak256"
                                },
                                "id": 2219,
                                "name": "Identifier",
                                "src": "2666:9:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2213,
                                  "type": "string memory",
                                  "value": "symbol"
                                },
                                "id": 2220,
                                "name": "Identifier",
                                "src": "2676:6:5"
                              }
                            ],
                            "id": 2221,
                            "name": "FunctionCall",
                            "src": "2666:17:5"
                          }
                        ],
                        "id": 2222,
                        "name": "IndexAccess",
                        "src": "2643:41:5"
                      }
                    ],
                    "id": 2223,
                    "name": "Return",
                    "src": "2636:48:5"
                  }
                ],
                "id": 2224,
                "name": "Block",
                "src": "2626:65:5"
              }
            ],
            "id": 2225,
            "name": "FunctionDefinition",
            "src": "2553:138:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTokenSymbolByIndex",
              "payable": false,
              "scope": 2238,
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
                      "name": "index",
                      "scope": 2237,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 2226,
                        "name": "ElementaryTypeName",
                        "src": "2858:4:5"
                      }
                    ],
                    "id": 2227,
                    "name": "VariableDeclaration",
                    "src": "2858:10:5"
                  }
                ],
                "id": 2228,
                "name": "ParameterList",
                "src": "2857:12:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2237,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 2229,
                        "name": "ElementaryTypeName",
                        "src": "2891:6:5"
                      }
                    ],
                    "id": 2230,
                    "name": "VariableDeclaration",
                    "src": "2891:6:5"
                  }
                ],
                "id": 2231,
                "name": "ParameterList",
                "src": "2890:8:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2231
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2123,
                              "type": "string storage ref[256] storage ref",
                              "value": "tokenSymbolList"
                            },
                            "id": 2232,
                            "name": "Identifier",
                            "src": "2916:15:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2227,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 2233,
                            "name": "Identifier",
                            "src": "2932:5:5"
                          }
                        ],
                        "id": 2234,
                        "name": "IndexAccess",
                        "src": "2916:22:5"
                      }
                    ],
                    "id": 2235,
                    "name": "Return",
                    "src": "2909:29:5"
                  }
                ],
                "id": 2236,
                "name": "Block",
                "src": "2899:46:5"
              }
            ],
            "id": 2237,
            "name": "FunctionDefinition",
            "src": "2827:118:5"
          }
        ],
        "id": 2238,
        "name": "ContractDefinition",
        "src": "717:2230:5"
      }
    ],
    "id": 2239,
    "name": "SourceUnit",
    "src": "0:2948:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0xa960b75ce19f4cd2d841b5fafd046698423bc2eb"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x5833e409d1c61e4d3139654db5faea6ee819a664"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T04:34:28.865Z"
}