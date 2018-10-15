export const DebtToken = 
{
  "contractName": "DebtToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeTokenURIAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "interfaceID",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "name": "_isSupported",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedMintAgents",
      "outputs": [
        {
          "name": "_agents",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
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
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_uri",
          "type": "string"
        }
      ],
      "name": "setTokenURI",
      "outputs": [],
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
      "constant": true,
      "inputs": [],
      "name": "CREATION_CONTEXT",
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
      "name": "getAuthorizedTokenURIAgents",
      "outputs": [
        {
          "name": "_agents",
          "type": "address[]"
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
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedTokenURIAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
          "name": "_owner",
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
      "constant": true,
      "inputs": [],
      "name": "registry",
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
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "revokeMintAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "inputs": [],
      "name": "symbol",
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
      "constant": false,
      "inputs": [
        {
          "name": "_version",
          "type": "address"
        },
        {
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "name": "_debtor",
          "type": "address"
        },
        {
          "name": "_underwriter",
          "type": "address"
        },
        {
          "name": "_underwriterRiskRating",
          "type": "uint256"
        },
        {
          "name": "_termsContract",
          "type": "address"
        },
        {
          "name": "_termsContractParameters",
          "type": "bytes32"
        },
        {
          "name": "_salt",
          "type": "uint256"
        }
      ],
      "name": "create",
      "outputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedMintAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "URI_CONTEXT",
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
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_tokenId",
          "type": "uint256"
        },
        {
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
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
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
      "inputs": [
        {
          "name": "_registry",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "Authorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agent",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "callingContext",
          "type": "string"
        }
      ],
      "name": "AuthorizationRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_approved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_tokenId",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "_operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040526000600b60146101000a81548160ff02191690831515021790555034156200002b57600080fd5b60405160208062003823833981016040528080519060200190919050506040805190810160405280600981526020017f44656274546f6b656e00000000000000000000000000000000000000000000008152506040805190810160405280600381526020017f44445400000000000000000000000000000000000000000000000000000000008152508160049080519060200190620000cc92919062000171565b508060059080519060200190620000e592919062000171565b50505033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000220565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b457805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e4578251825591602001919060010190620001c7565b5b509050620001f49190620001f8565b5090565b6200021d91905b8082111562000219576000816000905550600101620001ff565b5090565b90565b6135f380620002306000396000f3006060604052600436106101ab576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae146101b057806301ffc9a7146101e95780630343e1221461024357806306fdde03146102ad578063081812fc1461033b578063095ea7b31461039e578063162094c4146103e057806318160ddd146104465780631fe23d7f1461046f57806321d37127146104fd57806323b872dd146105675780632f745c59146105c857806333d261771461061e5780633f4ba83a1461065757806342842e0e1461066c5780634f558e79146106cd5780634f6ccce7146107085780635c975abb1461073f5780636352211e1461076c57806370a08231146107cf5780637b1039991461081c57806381ac3fbc146108715780638456cb59146108aa5780638da5cb5b146108bf57806395d89b411461091457806399f10501146109a25780639c0d9c4314610a8a578063a22cb46514610ac3578063a9059cbb14610b07578063b5c2f7ea14610b49578063b88d4fde14610bd7578063c87b56dd14610c7b578063e985e9c514610d17578063f2fde38b14610d87575b600080fd5b34156101bb57600080fd5b6101e7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dc0565b005b34156101f457600080fd5b61022960048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610e6a565b604051808215151515815260200191505060405180910390f35b341561024e57600080fd5b610256610eb8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561029957808201518184015260208101905061027e565b505050509050019250505060405180910390f35b34156102b857600080fd5b6102c0610ecf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103005780820151818401526020810190506102e5565b50505050905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561034657600080fd5b61035c6004808035906020019091905050610f77565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103a957600080fd5b6103de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fb4565b005b34156103eb57600080fd5b610444600480803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610fde565b005b341561045157600080fd5b610459611027565b6040518082815260200191505060405180910390f35b341561047a57600080fd5b610482611034565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c25780820151818401526020810190506104a7565b50505050905090810190601f1680156104ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561050857600080fd5b61051061106d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610553578082015181840152602081019050610538565b505050509050019250505060405180910390f35b341561057257600080fd5b6105c6600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611084565b005b34156105d357600080fd5b610608600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506110ba565b6040518082815260200191505060405180910390f35b341561062957600080fd5b610655600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611132565b005b341561066257600080fd5b61066a6111dc565b005b341561067757600080fd5b6106cb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061129c565b005b34156106d857600080fd5b6106ee60048080359060200190919050506112d2565b604051808215151515815260200191505060405180910390f35b341561071357600080fd5b6107296004808035906020019091905050611343565b6040518082815260200191505060405180910390f35b341561074a57600080fd5b61075261137c565b604051808215151515815260200191505060405180910390f35b341561077757600080fd5b61078d600480803590602001909190505061138f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107da57600080fd5b610806600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061140c565b6040518082815260200191505060405180910390f35b341561082757600080fd5b61082f611490565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561087c57600080fd5b6108a8600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114b6565b005b34156108b557600080fd5b6108bd611560565b005b34156108ca57600080fd5b6108d2611621565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561091f57600080fd5b610927611647565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561096757808201518184015260208101905061094c565b50505050905090810190601f1680156109945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156109ad57600080fd5b610a74600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506116ef565b6040518082815260200191505060405180910390f35b3415610a9557600080fd5b610ac1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611921565b005b3415610ace57600080fd5b610b05600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803515159060200190919050506119cb565b005b3415610b1257600080fd5b610b47600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506119f5565b005b3415610b5457600080fd5b610b5c611a04565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b9c578082015181840152602081019050610b81565b50505050905090810190601f168015610bc95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610be257600080fd5b610c79600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a3d565b005b3415610c8657600080fd5b610c9c6004808035906020019091905050611a75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cdc578082015181840152602081019050610cc1565b50505050905090810190601f168015610d095780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610d2257600080fd5b610d6d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b44565b604051808215151515815260200191505060405180910390f35b3415610d9257600080fd5b610dbe600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611bd8565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1c57600080fd5b610e67816040805190810160405280600e81526020017f646562742d746f6b656e2d7572690000000000000000000000000000000000008152506010611d309092919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ec061344a565b610eca600d612026565b905090565b610ed761345e565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f6d5780601f10610f4257610100808354040283529160200191610f6d565b820191906000526020600020905b815481529060010190602001808311610f5057829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610fd057600080fd5b610fda82826120be565b5050565b600b60149054906101000a900460ff16151515610ffa57600080fd5b61100e33601061228490919063ffffffff16565b151561101957600080fd5b61102382826122dd565b5050565b6000600880549050905090565b6040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e0000000000000000000000000081525081565b61107561344a565b61107f6010612026565b905090565b600b60149054906101000a900460ff161515156110a057600080fd5b6110aa818361231d565b6110b58383836124f8565b505050565b60006110c58361140c565b821015156110d257600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561111e57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118e57600080fd5b6111d9816040805190810160405280600e81526020017f646562742d746f6b656e2d757269000000000000000000000000000000000000815250601061260f9092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561123857600080fd5b600b60149054906101000a900460ff16151561125357600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156112b857600080fd5b6112c2818361231d565b6112cd8383836127eb565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600061134d611027565b8210151561135a57600080fd5b60088281548110151561136957fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561140357600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561144957600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561151257600080fd5b61155d816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d611d309092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115bc57600080fd5b600b60149054906101000a900460ff161515156115d857600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61164f61345e565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561170e57600080fd5b61172233600d61228490919063ffffffff16565b151561172d57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156118e257600080fd5b6102c65a03f115156118f357600080fd5b50505060405180519050905061190d898260019004612823565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561197d57600080fd5b6119c8816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d61260f9092919063ffffffff16565b50565b600b60149054906101000a900460ff161515156119e757600080fd5b6119f18282612877565b5050565b611a0033838361129c565b5050565b6040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525081565b600b60149054906101000a900460ff16151515611a5957600080fd5b611a63828461231d565b611a6f848484846129b3565b50505050565b611a7d61345e565b611a86826112d2565b1515611a9157600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b385780601f10611b0d57610100808354040283529160200191611b38565b820191906000526020600020905b815481529060010190602001808311611b1b57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c3457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611c7057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611d3f8686612284565b1515611d4a57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611dac57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e3d57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611f2257fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f6a9190613472565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fe4578082015181840152602081019050611fc9565b50505050905090810190601f1680156120115780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b61202e61344a565b816002018054806020026020016040519081016040528092919081815260200182805480156120b257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612068575b50505050509050919050565b60006120c98261138f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561210657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061214657506121458133611b44565b5b151561215157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661217283610f77565b73ffffffffffffffffffffffffffffffffffffffff161415806121c25750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561227f57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6122e6826112d2565b15156122f157600080fd5b80600a6000848152602001908152602001600020908051906020019061231892919061349e565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156123d857600080fd5b6102c65a03f115156123e957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156124f457600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156124df57600080fd5b6102c65a03f115156124f057600080fd5b5050505b5050565b8061250333826129f2565b151561250e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561254a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561258657600080fd5b6125908483612a87565b61259a8483612bf0565b6125a48383612e0b565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6126198383612edf565b151561262457600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281612694919061351e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b838110156127ac578082015181840152602081019050612791565b50505050905090810190601f1680156127d95780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b806127f633826129f2565b151561280157600080fd5b61281d8484846020604051908101604052806000815250611a3d565b50505050565b61282d8282612ef4565b60088054905060096000838152602001908152602001600020819055506008805480600101828161285e919061354a565b9160005260206000209001600083909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156128b257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816129be33826129f2565b15156129c957600080fd5b6129d4858585611084565b6129e085858585612fa4565b15156129eb57600080fd5b5050505050565b6000806129fe8361138f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612a6d57508373ffffffffffffffffffffffffffffffffffffffff16612a5584610f77565b73ffffffffffffffffffffffffffffffffffffffff16145b80612a7e5750612a7d8185611b44565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16612aa78261138f565b73ffffffffffffffffffffffffffffffffffffffff16141515612ac957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612bec5760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b6000806000612bff858561317a565b60076000858152602001908152602001600020549250612c6b6001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506132a890919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515612cb957fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515612d1457fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612d7157fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612dd29190613576565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612e1783836132c1565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281612ead919061354a565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6000612eeb8383612284565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612f3057600080fd5b612f3a8282612e0b565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080612fc68573ffffffffffffffffffffffffffffffffffffffff16613419565b1515612fd55760019150613171565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156130a0578082015181840152602081019050613085565b50505050905090810190601f1680156130cd5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156130ed57600080fd5b6102c65a03f115156130fe57600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661319a8261138f565b73ffffffffffffffffffffffffffffffffffffffff161415156131bc57600080fd5b61320f6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546132a890919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008282111515156132b657fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561332e57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506133d26001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461342c90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561344057fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116134995781836000526020600020918201910161349891906135a2565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106134df57805160ff191683800117855561350d565b8280016001018555821561350d579182015b8281111561350c5782518255916020019190600101906134f1565b5b50905061351a91906135a2565b5090565b8154818355818115116135455781836000526020600020918201910161354491906135a2565b5b505050565b8154818355818115116135715781836000526020600020918201910161357091906135a2565b5b505050565b81548183558181151161359d5781836000526020600020918201910161359c91906135a2565b5b505050565b6135c491905b808211156135c05760008160009055506001016135a8565b5090565b905600a165627a7a72305820a06f7ebb5629e063d990ddf25ad858bb8d53ff1f3e3648d9ec7809bdc3692dc50029",
  "deployedBytecode": "0x6060604052600436106101ab576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae146101b057806301ffc9a7146101e95780630343e1221461024357806306fdde03146102ad578063081812fc1461033b578063095ea7b31461039e578063162094c4146103e057806318160ddd146104465780631fe23d7f1461046f57806321d37127146104fd57806323b872dd146105675780632f745c59146105c857806333d261771461061e5780633f4ba83a1461065757806342842e0e1461066c5780634f558e79146106cd5780634f6ccce7146107085780635c975abb1461073f5780636352211e1461076c57806370a08231146107cf5780637b1039991461081c57806381ac3fbc146108715780638456cb59146108aa5780638da5cb5b146108bf57806395d89b411461091457806399f10501146109a25780639c0d9c4314610a8a578063a22cb46514610ac3578063a9059cbb14610b07578063b5c2f7ea14610b49578063b88d4fde14610bd7578063c87b56dd14610c7b578063e985e9c514610d17578063f2fde38b14610d87575b600080fd5b34156101bb57600080fd5b6101e7600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dc0565b005b34156101f457600080fd5b61022960048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610e6a565b604051808215151515815260200191505060405180910390f35b341561024e57600080fd5b610256610eb8565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561029957808201518184015260208101905061027e565b505050509050019250505060405180910390f35b34156102b857600080fd5b6102c0610ecf565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103005780820151818401526020810190506102e5565b50505050905090810190601f16801561032d5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561034657600080fd5b61035c6004808035906020019091905050610f77565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103a957600080fd5b6103de600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610fb4565b005b34156103eb57600080fd5b610444600480803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610fde565b005b341561045157600080fd5b610459611027565b6040518082815260200191505060405180910390f35b341561047a57600080fd5b610482611034565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104c25780820151818401526020810190506104a7565b50505050905090810190601f1680156104ef5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561050857600080fd5b61051061106d565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610553578082015181840152602081019050610538565b505050509050019250505060405180910390f35b341561057257600080fd5b6105c6600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050611084565b005b34156105d357600080fd5b610608600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506110ba565b6040518082815260200191505060405180910390f35b341561062957600080fd5b610655600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611132565b005b341561066257600080fd5b61066a6111dc565b005b341561067757600080fd5b6106cb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061129c565b005b34156106d857600080fd5b6106ee60048080359060200190919050506112d2565b604051808215151515815260200191505060405180910390f35b341561071357600080fd5b6107296004808035906020019091905050611343565b6040518082815260200191505060405180910390f35b341561074a57600080fd5b61075261137c565b604051808215151515815260200191505060405180910390f35b341561077757600080fd5b61078d600480803590602001909190505061138f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107da57600080fd5b610806600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061140c565b6040518082815260200191505060405180910390f35b341561082757600080fd5b61082f611490565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561087c57600080fd5b6108a8600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506114b6565b005b34156108b557600080fd5b6108bd611560565b005b34156108ca57600080fd5b6108d2611621565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561091f57600080fd5b610927611647565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561096757808201518184015260208101905061094c565b50505050905090810190601f1680156109945780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156109ad57600080fd5b610a74600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506116ef565b6040518082815260200191505060405180910390f35b3415610a9557600080fd5b610ac1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611921565b005b3415610ace57600080fd5b610b05600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803515159060200190919050506119cb565b005b3415610b1257600080fd5b610b47600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506119f5565b005b3415610b5457600080fd5b610b5c611a04565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b9c578082015181840152602081019050610b81565b50505050905090810190601f168015610bc95780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610be257600080fd5b610c79600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a3d565b005b3415610c8657600080fd5b610c9c6004808035906020019091905050611a75565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610cdc578082015181840152602081019050610cc1565b50505050905090810190601f168015610d095780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610d2257600080fd5b610d6d600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b44565b604051808215151515815260200191505060405180910390f35b3415610d9257600080fd5b610dbe600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611bd8565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610e1c57600080fd5b610e67816040805190810160405280600e81526020017f646562742d746f6b656e2d7572690000000000000000000000000000000000008152506010611d309092919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610ec061344a565b610eca600d612026565b905090565b610ed761345e565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f6d5780601f10610f4257610100808354040283529160200191610f6d565b820191906000526020600020905b815481529060010190602001808311610f5057829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610fd057600080fd5b610fda82826120be565b5050565b600b60149054906101000a900460ff16151515610ffa57600080fd5b61100e33601061228490919063ffffffff16565b151561101957600080fd5b61102382826122dd565b5050565b6000600880549050905090565b6040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e0000000000000000000000000081525081565b61107561344a565b61107f6010612026565b905090565b600b60149054906101000a900460ff161515156110a057600080fd5b6110aa818361231d565b6110b58383836124f8565b505050565b60006110c58361140c565b821015156110d257600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561111e57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561118e57600080fd5b6111d9816040805190810160405280600e81526020017f646562742d746f6b656e2d757269000000000000000000000000000000000000815250601061260f9092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561123857600080fd5b600b60149054906101000a900460ff16151561125357600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156112b857600080fd5b6112c2818361231d565b6112cd8383836127eb565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b600061134d611027565b8210151561135a57600080fd5b60088281548110151561136957fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561140357600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561144957600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561151257600080fd5b61155d816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d611d309092919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156115bc57600080fd5b600b60149054906101000a900460ff161515156115d857600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61164f61345e565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff1615151561170e57600080fd5b61172233600d61228490919063ffffffff16565b151561172d57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156118e257600080fd5b6102c65a03f115156118f357600080fd5b50505060405180519050905061190d898260019004612823565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561197d57600080fd5b6119c8816040805190810160405280601381526020017f646562742d746f6b656e2d6372656174696f6e00000000000000000000000000815250600d61260f9092919063ffffffff16565b50565b600b60149054906101000a900460ff161515156119e757600080fd5b6119f18282612877565b5050565b611a0033838361129c565b5050565b6040805190810160405280600e81526020017f646562742d746f6b656e2d75726900000000000000000000000000000000000081525081565b600b60149054906101000a900460ff16151515611a5957600080fd5b611a63828461231d565b611a6f848484846129b3565b50505050565b611a7d61345e565b611a86826112d2565b1515611a9157600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611b385780601f10611b0d57610100808354040283529160200191611b38565b820191906000526020600020905b815481529060010190602001808311611b1b57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611c3457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515611c7057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611d3f8686612284565b1515611d4a57600080fd5b8560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600186600201805490500391508560020182815481101515611dac57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508560000160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808660020184815481101515611e3d57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828660010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508560010160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558560020182815481101515611f2257fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018660020181818054905003915081611f6a9190613472565b508473ffffffffffffffffffffffffffffffffffffffff167f0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c856040518080602001828103825283818151815260200191508051906020019080838360005b83811015611fe4578082015181840152602081019050611fc9565b50505050905090810190601f1680156120115780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050505050565b61202e61344a565b816002018054806020026020016040519081016040528092919081815260200182805480156120b257602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311612068575b50505050509050919050565b60006120c98261138f565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561210657600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16148061214657506121458133611b44565b5b151561215157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661217283610f77565b73ffffffffffffffffffffffffffffffffffffffff161415806121c25750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561227f57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6122e6826112d2565b15156122f157600080fd5b80600a6000848152602001908152602001600020908051906020019061231892919061349e565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156123d857600080fd5b6102c65a03f115156123e957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156124f457600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156124df57600080fd5b6102c65a03f115156124f057600080fd5b5050505b5050565b8061250333826129f2565b151561250e57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561254a57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561258657600080fd5b6125908483612a87565b61259a8483612bf0565b6125a48383612e0b565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6126198383612edf565b151561262457600080fd5b60018360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550826002018054806001018281612694919061351e565b9160005260206000209001600084909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018360020180549050038360010160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff167f571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5826040518080602001828103825283818151815260200191508051906020019080838360005b838110156127ac578082015181840152602081019050612791565b50505050905090810190601f1680156127d95780820380516001836020036101000a031916815260200191505b509250505060405180910390a2505050565b806127f633826129f2565b151561280157600080fd5b61281d8484846020604051908101604052806000815250611a3d565b50505050565b61282d8282612ef4565b60088054905060096000838152602001908152602001600020819055506008805480600101828161285e919061354a565b9160005260206000209001600083909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156128b257600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816129be33826129f2565b15156129c957600080fd5b6129d4858585611084565b6129e085858585612fa4565b15156129eb57600080fd5b5050505050565b6000806129fe8361138f565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480612a6d57508373ffffffffffffffffffffffffffffffffffffffff16612a5584610f77565b73ffffffffffffffffffffffffffffffffffffffff16145b80612a7e5750612a7d8185611b44565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff16612aa78261138f565b73ffffffffffffffffffffffffffffffffffffffff16141515612ac957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612bec5760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b6000806000612bff858561317a565b60076000858152602001908152602001600020549250612c6b6001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506132a890919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515612cb957fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002084815481101515612d1457fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083815481101515612d7157fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480919060019003612dd29190613576565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612e1783836132c1565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281612ead919061354a565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6000612eeb8383612284565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612f3057600080fd5b612f3a8282612e0b565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080612fc68573ffffffffffffffffffffffffffffffffffffffff16613419565b1515612fd55760019150613171565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156130a0578082015181840152602081019050613085565b50505050905090810190601f1680156130cd5780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b15156130ed57600080fd5b6102c65a03f115156130fe57600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff1661319a8261138f565b73ffffffffffffffffffffffffffffffffffffffff161415156131bc57600080fd5b61320f6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546132a890919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b60008282111515156132b657fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561332e57600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506133d26001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461342c90919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561344057fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116134995781836000526020600020918201910161349891906135a2565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106134df57805160ff191683800117855561350d565b8280016001018555821561350d579182015b8281111561350c5782518255916020019190600101906134f1565b5b50905061351a91906135a2565b5090565b8154818355818115116135455781836000526020600020918201910161354491906135a2565b5b505050565b8154818355818115116135715781836000526020600020918201910161357091906135a2565b5b505050565b81548183558181151161359d5781836000526020600020918201910161359c91906135a2565b5b505050565b6135c491905b808211156135c05760008160009055506001016135a8565b5090565b905600a165627a7a72305820a06f7ebb5629e063d990ddf25ad858bb8d53ff1f3e3648d9ec7809bdc3692dc50029",
  "sourceMap": "1362:6140:5:-;;;268:5:37;247:26;;;;;;;;;;;;;;;;;;;;1867:148:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1107:105:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:5;1171;:13;;;;;;;;;;;;:::i;:::-;;1200:7;1190;:17;;;;;;;;;;;;:::i;:::-;;1107:105;;509:10:39;501:5;;:18;;;;;;;;;;;;;;;;;;1998:9:5;1974:8;;:34;;;;;;;;;;;;;;;;;;1867:148;1362:6140;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "1362:6140:5:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;2110:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3854:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1303:68:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4974:131:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6913:207;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2887:87:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1659:63:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4366:172:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;5793:206:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:177:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4124:156:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:37;;;;;;;;;;;;;;6175:214:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3298::50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1496:28:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3589:178;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:37;;;;;;;;;;;;;;238:20:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2455:770:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3324:162;;;;;;;;;;;;;;;;;;;;;;;;;;;;5281:153;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5496:125;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1728:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6565:234:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:167:5;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4740:60:5;4780:6;4788:11;;;;;;;;;;;;;;;;;;4740:19;:39;;:60;;;;;:::i;:::-;4640:167;:::o;2110:176::-;2204:17;2259:10;2244:25;;:11;:25;;;;2237:32;;2110:176;;;:::o;3854:173::-;3934:17;;:::i;:::-;3974:46;:24;:44;:46::i;:::-;3967:53;;3854:173;:::o;1303:68:50:-;1340:6;;:::i;:::-;1361:5;1354:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68;:::o;3577:111:48:-;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;4974:131:5:-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;5070:28:5;5084:3;5089:8;5070:13;:28::i;:::-;4974:131;;:::o;6913:207::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;7024:44:5;7057:10;7024:19;:32;;:44;;;;:::i;:::-;7016:53;;;;;;;;7079:34;7098:8;7108:4;7079:18;:34::i;:::-;6913:207;;:::o;2887:87:50:-;2931:7;2953:9;:16;;;;2946:23;;2887:87;:::o;1659:63:5:-;;;;;;;;;;;;;;;;;;;;:::o;4366:172::-;4450:17;;:::i;:::-;4490:41;:19;:39;:41::i;:::-;4483:48;;4366:172;:::o;5793:206::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;5909:33:5;5928:8;5938:3;5909:18;:33::i;:::-;5952:40;5971:5;5978:3;5983:8;5952:18;:40::i;:::-;5793:206;;;:::o;2571:177:50:-;2653:7;2685:17;2695:6;2685:9;:17::i;:::-;2676:6;:26;2668:35;;;;;;;;2716:11;:19;2728:6;2716:19;;;;;;;;;;;;;;;2736:6;2716:27;;;;;;;;;;;;;;;;;;;2709:34;;2571:177;;;;:::o;4124:156:5:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4223:50:5;4253:6;4261:11;;;;;;;;;;;;;;;;;;4223:19;:29;;:50;;;;;:::i;:::-;4124:156;:::o;833:87:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:37;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;6175:214:5:-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;6295:33:5;6314:8;6324:3;6295:18;:33::i;:::-;6338:44;6361:5;6368:3;6373:8;6338:22;:44::i;:::-;6175:214;;;:::o;2445:140:48:-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;3298::50:-;3357:7;3389:13;:11;:13::i;:::-;3380:6;:22;3372:31;;;;;;;;3416:9;3426:6;3416:17;;;;;;;;;;;;;;;;;;;3409:24;;3298:140;;;:::o;247:26:37:-;;;;;;;;;;;;;:::o;2107:164:48:-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;1496:28:5:-;;;;;;;;;;;;;:::o;3589:178::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3690:70:5;3735:6;3743:16;;;;;;;;;;;;;;;;;;3690:24;:44;;:70;;;;;:::i;:::-;3589:178;:::o;666:85:37:-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:39:-;;;;;;;;;;;;;:::o;1466:72:50:-;1505:6;;:::i;:::-;1526:7;1519:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72;:::o;2455:770:5:-;2773:13;2871:17;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;2810:49:5;2848:10;2810:24;:37;;:49;;;;:::i;:::-;2802:58;;;;;;;;2891:8;;;;;;;;;;;:15;;;2920:8;2942:12;2968:7;2989:12;3015:22;3051:14;3079:24;3117:5;2891:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2871:261;;3143:42;3155:12;3174:9;3169:15;;;3143:11;:42::i;:::-;3208:9;3203:15;;;3196:22;;2455:770;;;;;;;;;;;:::o;3324:162::-;653:5:39;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3419:60:5;3454:6;3462:16;;;;;;;;;;;;;;;;;;3419:24;:34;;:60;;;;;:::i;:::-;3324:162;:::o;5281:153::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;5388:39:5;5412:3;5417:9;5388:23;:39::i;:::-;5281:153;;:::o;5496:125::-;5571:43;5588:10;5600:3;5605:8;5571:16;:43::i;:::-;5496:125;;:::o;1728:53::-;;;;;;;;;;;;;;;;;;;;:::o;6565:234::-;416:6:37;;;;;;;;;;;415:7;407:16;;;;;;;;6698:33:5;6717:8;6727:3;6698:18;:33::i;:::-;6741:51;6764:5;6771:3;6776:8;6786:5;6741:22;:51::i;:::-;6565:234;;;;:::o;1727:133:50:-;1784:6;;:::i;:::-;1806:16;1813:8;1806:6;:16::i;:::-;1798:25;;;;;;;;1836:9;:19;1846:8;1836:19;;;;;;;;;;;1829:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133;;;:::o;4478:142:48:-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;832:169:39:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;2121:1168:17:-;2489:25;2551:23;2619:19;2452:25;2465:4;2471:5;2452:12;:25::i;:::-;2444:34;;;;;;;;2517:4;:17;;:24;2535:5;2517:24;;;;;;;;;;;;;;;;2489:52;;2608:1;2577:4;:21;;:28;;;;:32;2551:58;;2641:4;:21;;2663:18;2641:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;2619:63;;2745:4;:15;;:22;2761:5;2745:22;;;;;;;;;;;;;;;;2738:29;;;;;;;;;;;2894:11;2848:4;:21;;2870:20;2848:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;3009:20;2976:4;:17;;:30;2994:11;2976:30;;;;;;;;;;;;;;;:53;;;;3046:4;:17;;:24;3064:5;3046:24;;;;;;;;;;;;;;;3039:31;;;3144:4;:21;;3166:18;3144:41;;;;;;;;;;;;;;;;;;;3137:48;;;;;;;;;;;3227:1;3195:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;3260:5;3239:43;;;3267:14;3239:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2121:1168:17;;;;;;:::o;3646:162::-;3748:9;;:::i;:::-;3780:4;:21;;3773:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3646:162;;;:::o;2998:350:48:-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;3295:166:17:-;3405:4;3432;:15;;:22;3448:5;3432:22;;;;;;;;;;;;;;;;;;;;;;;;;3425:29;;3295:166;;;;:::o;2085:130:50:-;2161:16;2168:8;2161:6;:16::i;:::-;2153:25;;;;;;;;2206:4;2184:9;:19;2194:8;2184:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;2085:130;;:::o;7277:223:5:-;7414:3;7368:49;;:8;;;;;;;;;;;:23;;;7400:8;7392:17;;7368:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:49;;;;7364:130;;;7433:8;;;;;;;;;;;:26;;;7468:8;7460:17;;7479:3;7433:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7364:130;7277:223;;:::o;5042:315:48:-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;1732:383:17:-;1884:28;1900:4;1906:5;1884:15;:28::i;:::-;1876:37;;;;;;;;1949:4;1924;:15;;:22;1940:5;1924:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1963:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1990:5;1963:33;;;;;;;;;;;;;;;;;;;;;;;2064:1;2033:4;:21;;:28;;;;:32;2006:4;:17;;:24;2024:5;2006:24;;;;;;;;;;;;;;;:59;;;;2086:5;2075:33;;;2093:14;2075:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1732:383:17;;;:::o;5964:154:48:-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;5315:176:50:-;5376:26;5388:3;5393:8;5376:11;:26::i;:::-;5440:9;:16;;;;5413:14;:24;5428:8;5413:24;;;;;;;;;;;:43;;;;5462:9;:24;;;;;;;;;;;:::i;:::-;;;;;;;;;;5477:8;5462:24;;;;;;;5315:176;;:::o;3969:200:48:-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;4198:856:50:-;4316:18;4369:22;4432:17;4271:38;4293:5;4300:8;4271:21;:38::i;:::-;4337:16;:26;4354:8;4337:26;;;;;;;;;;;;4316:47;;4394:32;4424:1;4394:11;:18;4406:5;4394:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;4369:57;;4452:11;:18;4464:5;4452:18;;;;;;;;;;;;;;;4471:14;4452:34;;;;;;;;;;;;;;;;;;;4432:54;;4526:9;4493:11;:18;4505:5;4493:18;;;;;;;;;;;;;;;4512:10;4493:30;;;;;;;;;;;;;;;;;;:42;;;;4578:1;4541:11;:18;4553:5;4541:18;;;;;;;;;;;;;;;4560:14;4541:34;;;;;;;;;;;;;;;;;;:38;;;;4940:11;:18;4952:5;4940:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;5002:1;4973:16;:26;4990:8;4973:26;;;;;;;;;;;:30;;;;5039:10;5009:16;:27;5026:9;5009:27;;;;;;;;;;;:40;;;;4198:856;;;;;:::o;3697:226::-;3800:14;3763:31;3780:3;3785:8;3763:16;:31::i;:::-;3817:11;:16;3829:3;3817:16;;;;;;;;;;;;;;;:23;;;;3800:40;;3846:11;:16;3858:3;3846:16;;;;;;;;;;;;;;;:31;;;;;;;;;;;:::i;:::-;;;;;;;;;;3868:8;3846:31;;;;;;;3912:6;3883:16;:26;3900:8;3883:26;;;;;;;;;;;:35;;;;3697:226;;;:::o;3467:173:17:-;3580:4;3608:25;3621:4;3627:5;3608:12;:25::i;:::-;3607:26;3600:33;;3467:173;;;;:::o;7857:164:48:-;7941:1;7926:17;;:3;:17;;;;7918:26;;;;;;;;7950:25;7961:3;7966:8;7950:10;:25::i;:::-;8002:3;7981:35;;7998:1;7981:35;;;8007:8;7981:35;;;;;;;;;;;;;;;;;;7857:164;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:48;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;835:110:38:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;9172:204:48:-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;451:150:36:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o;1007:129:38:-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;1362:6140:5:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n// Internal dependencies.\nimport \"./DebtRegistry.sol\";\nimport \"./ERC165.sol\";\nimport { PermissionsLib, PermissionEvents } from \"./libraries/PermissionsLib.sol\";\n\n// External dependencies.\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The DebtToken contract governs all business logic for making a debt agreement\n * transferable as an ERC721 non-fungible token.  Additionally, the contract\n * allows authorized contracts to trigger the minting of a debt agreement token\n * and, in turn, the insertion of a debt issuance into the DebtRegsitry.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtToken is ERC721Token, ERC165, Pausable, PermissionEvents {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    DebtRegistry public registry;\n\n    PermissionsLib.Permissions internal tokenCreationPermissions;\n    PermissionsLib.Permissions internal tokenURIPermissions;\n\n    string public constant CREATION_CONTEXT = \"debt-token-creation\";\n    string public constant URI_CONTEXT = \"debt-token-uri\";\n\n    /**\n     * Constructor that sets the address of the debt registry.\n     */\n    function DebtToken(address _registry)\n        public\n        ERC721Token(\"DebtToken\", \"DDT\")\n    {\n        registry = DebtRegistry(_registry);\n    }\n\n    /**\n     * ERC165 interface.\n     * Returns true for ERC721, false otherwise\n     */\n    function supportsInterface(bytes4 interfaceID)\n        external\n        view\n        returns (bool _isSupported)\n    {\n        return interfaceID == 0x80ac58cd; // ERC721\n    }\n\n    /**\n     * Mints a unique debt token and inserts the associated issuance into\n     * the debt registry, if the calling address is authorized to do so.\n     */\n    function create(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenCreationPermissions.isAuthorized(msg.sender));\n\n        bytes32 entryHash = registry.insert(\n            _version,\n            _beneficiary,\n            _debtor,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            _salt\n        );\n\n        super._mint(_beneficiary, uint(entryHash));\n\n        return uint(entryHash);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to mint debt tokens.\n     */\n    function addAuthorizedMintAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.authorize(_agent, CREATION_CONTEXT);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to mint debt tokens\n     */\n    function revokeMintAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.revokeAuthorization(_agent, CREATION_CONTEXT);\n    }\n\n    /**\n     * Returns the list of agents authorized to mint debt tokens\n     */\n    function getAuthorizedMintAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenCreationPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to set token URIs.\n     */\n    function addAuthorizedTokenURIAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.authorize(_agent, URI_CONTEXT);\n    }\n\n    /**\n     * Returns the list of agents authorized to set token URIs.\n     */\n    function getAuthorizedTokenURIAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenURIPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to set token URIs.\n     */\n    function revokeTokenURIAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.revokeAuthorization(_agent, URI_CONTEXT);\n    }\n\n    /**\n     * We override approval method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function approve(address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        super.approve(_to, _tokenId);\n    }\n\n    /**\n     * We override setApprovalForAll method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function setApprovalForAll(address _to, bool _approved)\n        public\n        whenNotPaused\n    {\n        super.setApprovalForAll(_to, _approved);\n    }\n\n    /**\n     * Support deprecated ERC721 method\n     */\n    function transfer(address _to, uint _tokenId)\n        public\n    {\n        safeTransferFrom(msg.sender, _to, _tokenId);\n    }\n\n    /**\n     * We override transferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function transferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.transferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId, bytes _data)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId, _data);\n    }\n\n    /**\n     * Allows senders with special permissions to set the token URI for a given debt token.\n     */\n    function setTokenURI(uint256 _tokenId, string _uri)\n        public\n        whenNotPaused\n    {\n        require(tokenURIPermissions.isAuthorized(msg.sender));\n        super._setTokenURI(_tokenId, _uri);\n    }\n\n    /**\n     * _modifyBeneficiary mutates the debt registry. This function should be\n     * called every time a token is transferred or minted\n     */\n    function _modifyBeneficiary(uint _tokenId, address _to)\n        internal\n    {\n        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {\n            registry.modifyBeneficiary(bytes32(_tokenId), _to);\n        }\n    }\n}\n",
  "sourcePath": "/Users/graemeboy/Dharma/charta/contracts/DebtToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/DebtToken.sol",
      "exportedSymbols": {
        "DebtToken": [
          3548
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
        "id": 3168,
        "name": "PragmaDirective",
        "src": "584:23:5"
      },
      {
        "attributes": {
          "SourceUnit": 3167,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 3549,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3169,
        "name": "ImportDirective",
        "src": "635:28:5"
      },
      {
        "attributes": {
          "SourceUnit": 3559,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/ERC165.sol",
          "file": "./ERC165.sol",
          "scope": 3549,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3170,
        "name": "ImportDirective",
        "src": "664:22:5"
      },
      {
        "attributes": {
          "SourceUnit": 6280,
          "absolutePath": "/Users/graemeboy/Dharma/charta/contracts/libraries/PermissionsLib.sol",
          "file": "./libraries/PermissionsLib.sol",
          "scope": 3549,
          "symbolAliases": [
            {
              "foreign": 3171,
              "local": null
            },
            {
              "foreign": 3172,
              "local": null
            }
          ],
          "unitAlias": ""
        },
        "id": 3173,
        "name": "ImportDirective",
        "src": "687:82:5"
      },
      {
        "attributes": {
          "SourceUnit": 14006,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 3549,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3174,
        "name": "ImportDirective",
        "src": "797:60:5"
      },
      {
        "attributes": {
          "SourceUnit": 15830,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
          "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
          "scope": 3549,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3175,
        "name": "ImportDirective",
        "src": "858:66:5"
      },
      {
        "attributes": {
          "SourceUnit": 14299,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 3549,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 3176,
        "name": "ImportDirective",
        "src": "925:59:5"
      },
      {
        "attributes": {
          "contractDependencies": [
            3558,
            6075,
            14005,
            14159,
            14724,
            14744,
            14751,
            14858,
            15441,
            15829
          ],
          "contractKind": "contract",
          "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3548,
            6075,
            14005,
            14159,
            3558,
            15829,
            15441,
            14751,
            14744,
            14724,
            14858
          ],
          "name": "DebtToken",
          "scope": 3549
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
                  "name": "ERC721Token",
                  "referencedDeclaration": 15829,
                  "type": "contract ERC721Token"
                },
                "id": 3177,
                "name": "UserDefinedTypeName",
                "src": "1384:11:5"
              }
            ],
            "id": 3178,
            "name": "InheritanceSpecifier",
            "src": "1384:11:5"
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
                  "contractScope": null,
                  "name": "ERC165",
                  "referencedDeclaration": 3558,
                  "type": "contract ERC165"
                },
                "id": 3179,
                "name": "UserDefinedTypeName",
                "src": "1397:6:5"
              }
            ],
            "id": 3180,
            "name": "InheritanceSpecifier",
            "src": "1397:6:5"
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
                  "contractScope": null,
                  "name": "Pausable",
                  "referencedDeclaration": 14005,
                  "type": "contract Pausable"
                },
                "id": 3181,
                "name": "UserDefinedTypeName",
                "src": "1405:8:5"
              }
            ],
            "id": 3182,
            "name": "InheritanceSpecifier",
            "src": "1405:8:5"
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
                  "contractScope": null,
                  "name": "PermissionEvents",
                  "referencedDeclaration": 6075,
                  "type": "contract PermissionEvents"
                },
                "id": 3183,
                "name": "UserDefinedTypeName",
                "src": "1415:16:5"
              }
            ],
            "id": 3184,
            "name": "InheritanceSpecifier",
            "src": "1415:16:5"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 6279,
                  "type": "library PermissionsLib"
                },
                "id": 3185,
                "name": "UserDefinedTypeName",
                "src": "1444:14:5"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 6099,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 3186,
                "name": "UserDefinedTypeName",
                "src": "1463:26:5"
              }
            ],
            "id": 3187,
            "name": "UsingForDirective",
            "src": "1438:52:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "registry",
              "scope": 3548,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract DebtRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "DebtRegistry",
                  "referencedDeclaration": 3166,
                  "type": "contract DebtRegistry"
                },
                "id": 3188,
                "name": "UserDefinedTypeName",
                "src": "1496:12:5"
              }
            ],
            "id": 3189,
            "name": "VariableDeclaration",
            "src": "1496:28:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenCreationPermissions",
              "scope": 3548,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 6099,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 3190,
                "name": "UserDefinedTypeName",
                "src": "1531:26:5"
              }
            ],
            "id": 3191,
            "name": "VariableDeclaration",
            "src": "1531:60:5"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenURIPermissions",
              "scope": 3548,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "struct PermissionsLib.Permissions storage ref",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 6099,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 3192,
                "name": "UserDefinedTypeName",
                "src": "1597:26:5"
              }
            ],
            "id": 3193,
            "name": "VariableDeclaration",
            "src": "1597:55:5"
          },
          {
            "attributes": {
              "constant": true,
              "name": "CREATION_CONTEXT",
              "scope": 3548,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 3194,
                "name": "ElementaryTypeName",
                "src": "1659:6:5"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "646562742d746f6b656e2d6372656174696f6e",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"debt-token-creation\"",
                  "value": "debt-token-creation"
                },
                "id": 3195,
                "name": "Literal",
                "src": "1701:21:5"
              }
            ],
            "id": 3196,
            "name": "VariableDeclaration",
            "src": "1659:63:5"
          },
          {
            "attributes": {
              "constant": true,
              "name": "URI_CONTEXT",
              "scope": 3548,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string memory",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 3197,
                "name": "ElementaryTypeName",
                "src": "1728:6:5"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "646562742d746f6b656e2d757269",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "string",
                  "type": "literal_string \"debt-token-uri\"",
                  "value": "debt-token-uri"
                },
                "id": 3198,
                "name": "Literal",
                "src": "1765:16:5"
              }
            ],
            "id": 3199,
            "name": "VariableDeclaration",
            "src": "1728:53:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DebtToken",
              "payable": false,
              "scope": 3548,
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
                      "name": "_registry",
                      "scope": 3215,
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
                        "id": 3200,
                        "name": "ElementaryTypeName",
                        "src": "1886:7:5"
                      }
                    ],
                    "id": 3201,
                    "name": "VariableDeclaration",
                    "src": "1886:17:5"
                  }
                ],
                "id": 3202,
                "name": "ParameterList",
                "src": "1885:19:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3207,
                "name": "ParameterList",
                "src": "1964:0:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 15829,
                      "type": "type(contract ERC721Token)",
                      "value": "ERC721Token"
                    },
                    "id": 3203,
                    "name": "Identifier",
                    "src": "1928:11:5"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "44656274546f6b656e",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"DebtToken\"",
                      "value": "DebtToken"
                    },
                    "id": 3204,
                    "name": "Literal",
                    "src": "1940:11:5"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "444454",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"DDT\"",
                      "value": "DDT"
                    },
                    "id": 3205,
                    "name": "Literal",
                    "src": "1953:5:5"
                  }
                ],
                "id": 3206,
                "name": "ModifierInvocation",
                "src": "1928:31:5"
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
                          "type": "contract DebtRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3189,
                              "type": "contract DebtRegistry",
                              "value": "registry"
                            },
                            "id": 3208,
                            "name": "Identifier",
                            "src": "1974:8:5"
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
                              "type": "contract DebtRegistry",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3166,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 3209,
                                "name": "Identifier",
                                "src": "1985:12:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3201,
                                  "type": "address",
                                  "value": "_registry"
                                },
                                "id": 3210,
                                "name": "Identifier",
                                "src": "1998:9:5"
                              }
                            ],
                            "id": 3211,
                            "name": "FunctionCall",
                            "src": "1985:23:5"
                          }
                        ],
                        "id": 3212,
                        "name": "Assignment",
                        "src": "1974:34:5"
                      }
                    ],
                    "id": 3213,
                    "name": "ExpressionStatement",
                    "src": "1974:34:5"
                  }
                ],
                "id": 3214,
                "name": "Block",
                "src": "1964:51:5"
              }
            ],
            "id": 3215,
            "name": "FunctionDefinition",
            "src": "1867:148:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "supportsInterface",
              "payable": false,
              "scope": 3548,
              "stateMutability": "view",
              "superFunction": 3557,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "interfaceID",
                      "scope": 3227,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes4",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes4",
                          "type": "bytes4"
                        },
                        "id": 3216,
                        "name": "ElementaryTypeName",
                        "src": "2137:6:5"
                      }
                    ],
                    "id": 3217,
                    "name": "VariableDeclaration",
                    "src": "2137:18:5"
                  }
                ],
                "id": 3218,
                "name": "ParameterList",
                "src": "2136:20:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_isSupported",
                      "scope": 3227,
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
                        "id": 3219,
                        "name": "ElementaryTypeName",
                        "src": "2204:4:5"
                      }
                    ],
                    "id": 3220,
                    "name": "VariableDeclaration",
                    "src": "2204:17:5"
                  }
                ],
                "id": 3221,
                "name": "ParameterList",
                "src": "2203:19:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3221
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes4",
                            "typeString": "bytes4"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3217,
                              "type": "bytes4",
                              "value": "interfaceID"
                            },
                            "id": 3222,
                            "name": "Identifier",
                            "src": "2244:11:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30783830616335386364",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 2158778573",
                              "value": "0x80ac58cd"
                            },
                            "id": 3223,
                            "name": "Literal",
                            "src": "2259:10:5"
                          }
                        ],
                        "id": 3224,
                        "name": "BinaryOperation",
                        "src": "2244:25:5"
                      }
                    ],
                    "id": 3225,
                    "name": "Return",
                    "src": "2237:32:5"
                  }
                ],
                "id": 3226,
                "name": "Block",
                "src": "2227:59:5"
              }
            ],
            "id": 3227,
            "name": "FunctionDefinition",
            "src": "2110:176:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "create",
              "payable": false,
              "scope": 3548,
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
                      "name": "_version",
                      "scope": 3286,
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
                        "id": 3228,
                        "name": "ElementaryTypeName",
                        "src": "2480:7:5"
                      }
                    ],
                    "id": 3229,
                    "name": "VariableDeclaration",
                    "src": "2480:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_beneficiary",
                      "scope": 3286,
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
                        "id": 3230,
                        "name": "ElementaryTypeName",
                        "src": "2506:7:5"
                      }
                    ],
                    "id": 3231,
                    "name": "VariableDeclaration",
                    "src": "2506:20:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 3286,
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
                        "id": 3232,
                        "name": "ElementaryTypeName",
                        "src": "2536:7:5"
                      }
                    ],
                    "id": 3233,
                    "name": "VariableDeclaration",
                    "src": "2536:15:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriter",
                      "scope": 3286,
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
                        "id": 3234,
                        "name": "ElementaryTypeName",
                        "src": "2561:7:5"
                      }
                    ],
                    "id": 3235,
                    "name": "VariableDeclaration",
                    "src": "2561:20:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriterRiskRating",
                      "scope": 3286,
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
                        "id": 3236,
                        "name": "ElementaryTypeName",
                        "src": "2591:4:5"
                      }
                    ],
                    "id": 3237,
                    "name": "VariableDeclaration",
                    "src": "2591:27:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContract",
                      "scope": 3286,
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
                        "id": 3238,
                        "name": "ElementaryTypeName",
                        "src": "2628:7:5"
                      }
                    ],
                    "id": 3239,
                    "name": "VariableDeclaration",
                    "src": "2628:22:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContractParameters",
                      "scope": 3286,
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
                        "id": 3240,
                        "name": "ElementaryTypeName",
                        "src": "2660:7:5"
                      }
                    ],
                    "id": 3241,
                    "name": "VariableDeclaration",
                    "src": "2660:32:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 3286,
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
                        "id": 3242,
                        "name": "ElementaryTypeName",
                        "src": "2702:4:5"
                      }
                    ],
                    "id": 3243,
                    "name": "VariableDeclaration",
                    "src": "2702:10:5"
                  }
                ],
                "id": 3244,
                "name": "ParameterList",
                "src": "2470:248:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3286,
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
                        "id": 3247,
                        "name": "ElementaryTypeName",
                        "src": "2773:4:5"
                      }
                    ],
                    "id": 3248,
                    "name": "VariableDeclaration",
                    "src": "2773:13:5"
                  }
                ],
                "id": 3249,
                "name": "ParameterList",
                "src": "2772:15:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3245,
                    "name": "Identifier",
                    "src": "2742:13:5"
                  }
                ],
                "id": 3246,
                "name": "ModifierInvocation",
                "src": "2742:13:5"
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
                              "referencedDeclaration": 15844,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3250,
                            "name": "Identifier",
                            "src": "2802:7:5"
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isAuthorized",
                                  "referencedDeclaration": 6250,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3191,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenCreationPermissions"
                                    },
                                    "id": 3251,
                                    "name": "Identifier",
                                    "src": "2810:24:5"
                                  }
                                ],
                                "id": 3252,
                                "name": "MemberAccess",
                                "src": "2810:37:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15841,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3253,
                                    "name": "Identifier",
                                    "src": "2848:3:5"
                                  }
                                ],
                                "id": 3254,
                                "name": "MemberAccess",
                                "src": "2848:10:5"
                              }
                            ],
                            "id": 3255,
                            "name": "FunctionCall",
                            "src": "2810:49:5"
                          }
                        ],
                        "id": 3256,
                        "name": "FunctionCall",
                        "src": "2802:58:5"
                      }
                    ],
                    "id": 3257,
                    "name": "ExpressionStatement",
                    "src": "2802:58:5"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3259
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "entryHash",
                          "scope": 3286,
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
                            "id": 3258,
                            "name": "ElementaryTypeName",
                            "src": "2871:7:5"
                          }
                        ],
                        "id": 3259,
                        "name": "VariableDeclaration",
                        "src": "2871:17:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "insert",
                              "referencedDeclaration": 2868,
                              "type": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3189,
                                  "type": "contract DebtRegistry",
                                  "value": "registry"
                                },
                                "id": 3260,
                                "name": "Identifier",
                                "src": "2891:8:5"
                              }
                            ],
                            "id": 3261,
                            "name": "MemberAccess",
                            "src": "2891:15:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3229,
                              "type": "address",
                              "value": "_version"
                            },
                            "id": 3262,
                            "name": "Identifier",
                            "src": "2920:8:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3231,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 3263,
                            "name": "Identifier",
                            "src": "2942:12:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3233,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 3264,
                            "name": "Identifier",
                            "src": "2968:7:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3235,
                              "type": "address",
                              "value": "_underwriter"
                            },
                            "id": 3265,
                            "name": "Identifier",
                            "src": "2989:12:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3237,
                              "type": "uint256",
                              "value": "_underwriterRiskRating"
                            },
                            "id": 3266,
                            "name": "Identifier",
                            "src": "3015:22:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3239,
                              "type": "address",
                              "value": "_termsContract"
                            },
                            "id": 3267,
                            "name": "Identifier",
                            "src": "3051:14:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3241,
                              "type": "bytes32",
                              "value": "_termsContractParameters"
                            },
                            "id": 3268,
                            "name": "Identifier",
                            "src": "3079:24:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3243,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 3269,
                            "name": "Identifier",
                            "src": "3117:5:5"
                          }
                        ],
                        "id": 3270,
                        "name": "FunctionCall",
                        "src": "2891:241:5"
                      }
                    ],
                    "id": 3271,
                    "name": "VariableDeclarationStatement",
                    "src": "2871:261:5"
                  },
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_mint",
                              "referencedDeclaration": 15749,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3272,
                                "name": "Identifier",
                                "src": "3143:5:5"
                              }
                            ],
                            "id": 3274,
                            "name": "MemberAccess",
                            "src": "3143:11:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3231,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 3275,
                            "name": "Identifier",
                            "src": "3155:12:5"
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
                              "type": "uint256",
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(uint256)",
                                  "value": "uint"
                                },
                                "id": 3276,
                                "name": "ElementaryTypeNameExpression",
                                "src": "3169:4:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3259,
                                  "type": "bytes32",
                                  "value": "entryHash"
                                },
                                "id": 3277,
                                "name": "Identifier",
                                "src": "3174:9:5"
                              }
                            ],
                            "id": 3278,
                            "name": "FunctionCall",
                            "src": "3169:15:5"
                          }
                        ],
                        "id": 3279,
                        "name": "FunctionCall",
                        "src": "3143:42:5"
                      }
                    ],
                    "id": 3280,
                    "name": "ExpressionStatement",
                    "src": "3143:42:5"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3249
                    },
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
                          "type": "uint256",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(uint256)",
                              "value": "uint"
                            },
                            "id": 3281,
                            "name": "ElementaryTypeNameExpression",
                            "src": "3203:4:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3259,
                              "type": "bytes32",
                              "value": "entryHash"
                            },
                            "id": 3282,
                            "name": "Identifier",
                            "src": "3208:9:5"
                          }
                        ],
                        "id": 3283,
                        "name": "FunctionCall",
                        "src": "3203:15:5"
                      }
                    ],
                    "id": 3284,
                    "name": "Return",
                    "src": "3196:22:5"
                  }
                ],
                "id": 3285,
                "name": "Block",
                "src": "2792:433:5"
              }
            ],
            "id": 3286,
            "name": "FunctionDefinition",
            "src": "2455:770:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedMintAgent",
              "payable": false,
              "scope": 3548,
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
                      "name": "_agent",
                      "scope": 3301,
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
                        "id": 3287,
                        "name": "ElementaryTypeName",
                        "src": "3356:7:5"
                      }
                    ],
                    "id": 3288,
                    "name": "VariableDeclaration",
                    "src": "3356:14:5"
                  }
                ],
                "id": 3289,
                "name": "ParameterList",
                "src": "3355:16:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3292,
                "name": "ParameterList",
                "src": "3409:0:5"
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
                      "referencedDeclaration": 14133,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 3290,
                    "name": "Identifier",
                    "src": "3395:9:5"
                  }
                ],
                "id": 3291,
                "name": "ModifierInvocation",
                "src": "3395:9:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 6149,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3191,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 3293,
                                "name": "Identifier",
                                "src": "3419:24:5"
                              }
                            ],
                            "id": 3295,
                            "name": "MemberAccess",
                            "src": "3419:34:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3288,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 3296,
                            "name": "Identifier",
                            "src": "3454:6:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3196,
                              "type": "string memory",
                              "value": "CREATION_CONTEXT"
                            },
                            "id": 3297,
                            "name": "Identifier",
                            "src": "3462:16:5"
                          }
                        ],
                        "id": 3298,
                        "name": "FunctionCall",
                        "src": "3419:60:5"
                      }
                    ],
                    "id": 3299,
                    "name": "ExpressionStatement",
                    "src": "3419:60:5"
                  }
                ],
                "id": 3300,
                "name": "Block",
                "src": "3409:77:5"
              }
            ],
            "id": 3301,
            "name": "FunctionDefinition",
            "src": "3324:162:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeMintAgentAuthorization",
              "payable": false,
              "scope": 3548,
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
                      "name": "_agent",
                      "scope": 3316,
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
                        "id": 3302,
                        "name": "ElementaryTypeName",
                        "src": "3627:7:5"
                      }
                    ],
                    "id": 3303,
                    "name": "VariableDeclaration",
                    "src": "3627:14:5"
                  }
                ],
                "id": 3304,
                "name": "ParameterList",
                "src": "3626:16:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3307,
                "name": "ParameterList",
                "src": "3680:0:5"
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
                      "referencedDeclaration": 14133,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 3305,
                    "name": "Identifier",
                    "src": "3666:9:5"
                  }
                ],
                "id": 3306,
                "name": "ModifierInvocation",
                "src": "3666:9:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 6235,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3191,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 3308,
                                "name": "Identifier",
                                "src": "3690:24:5"
                              }
                            ],
                            "id": 3310,
                            "name": "MemberAccess",
                            "src": "3690:44:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3303,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 3311,
                            "name": "Identifier",
                            "src": "3735:6:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3196,
                              "type": "string memory",
                              "value": "CREATION_CONTEXT"
                            },
                            "id": 3312,
                            "name": "Identifier",
                            "src": "3743:16:5"
                          }
                        ],
                        "id": 3313,
                        "name": "FunctionCall",
                        "src": "3690:70:5"
                      }
                    ],
                    "id": 3314,
                    "name": "ExpressionStatement",
                    "src": "3690:70:5"
                  }
                ],
                "id": 3315,
                "name": "Block",
                "src": "3680:87:5"
              }
            ],
            "id": 3316,
            "name": "FunctionDefinition",
            "src": "3589:178:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedMintAgents",
              "payable": false,
              "scope": 3548,
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
                "id": 3317,
                "name": "ParameterList",
                "src": "3886:2:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agents",
                      "scope": 3327,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3318,
                            "name": "ElementaryTypeName",
                            "src": "3934:7:5"
                          }
                        ],
                        "id": 3319,
                        "name": "ArrayTypeName",
                        "src": "3934:9:5"
                      }
                    ],
                    "id": 3320,
                    "name": "VariableDeclaration",
                    "src": "3934:17:5"
                  }
                ],
                "id": 3321,
                "name": "ParameterList",
                "src": "3933:19:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3321
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 6278,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3191,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 3322,
                                "name": "Identifier",
                                "src": "3974:24:5"
                              }
                            ],
                            "id": 3323,
                            "name": "MemberAccess",
                            "src": "3974:44:5"
                          }
                        ],
                        "id": 3324,
                        "name": "FunctionCall",
                        "src": "3974:46:5"
                      }
                    ],
                    "id": 3325,
                    "name": "Return",
                    "src": "3967:53:5"
                  }
                ],
                "id": 3326,
                "name": "Block",
                "src": "3957:70:5"
              }
            ],
            "id": 3327,
            "name": "FunctionDefinition",
            "src": "3854:173:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedTokenURIAgent",
              "payable": false,
              "scope": 3548,
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
                      "name": "_agent",
                      "scope": 3342,
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
                        "id": 3328,
                        "name": "ElementaryTypeName",
                        "src": "4160:7:5"
                      }
                    ],
                    "id": 3329,
                    "name": "VariableDeclaration",
                    "src": "4160:14:5"
                  }
                ],
                "id": 3330,
                "name": "ParameterList",
                "src": "4159:16:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3333,
                "name": "ParameterList",
                "src": "4213:0:5"
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
                      "referencedDeclaration": 14133,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 3331,
                    "name": "Identifier",
                    "src": "4199:9:5"
                  }
                ],
                "id": 3332,
                "name": "ModifierInvocation",
                "src": "4199:9:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 6149,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3193,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenURIPermissions"
                                },
                                "id": 3334,
                                "name": "Identifier",
                                "src": "4223:19:5"
                              }
                            ],
                            "id": 3336,
                            "name": "MemberAccess",
                            "src": "4223:29:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3329,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 3337,
                            "name": "Identifier",
                            "src": "4253:6:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3199,
                              "type": "string memory",
                              "value": "URI_CONTEXT"
                            },
                            "id": 3338,
                            "name": "Identifier",
                            "src": "4261:11:5"
                          }
                        ],
                        "id": 3339,
                        "name": "FunctionCall",
                        "src": "4223:50:5"
                      }
                    ],
                    "id": 3340,
                    "name": "ExpressionStatement",
                    "src": "4223:50:5"
                  }
                ],
                "id": 3341,
                "name": "Block",
                "src": "4213:67:5"
              }
            ],
            "id": 3342,
            "name": "FunctionDefinition",
            "src": "4124:156:5"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedTokenURIAgents",
              "payable": false,
              "scope": 3548,
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
                "id": 3343,
                "name": "ParameterList",
                "src": "4402:2:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agents",
                      "scope": 3353,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 3344,
                            "name": "ElementaryTypeName",
                            "src": "4450:7:5"
                          }
                        ],
                        "id": 3345,
                        "name": "ArrayTypeName",
                        "src": "4450:9:5"
                      }
                    ],
                    "id": 3346,
                    "name": "VariableDeclaration",
                    "src": "4450:17:5"
                  }
                ],
                "id": 3347,
                "name": "ParameterList",
                "src": "4449:19:5"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3347
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getAuthorizedAgents",
                              "referencedDeclaration": 6278,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3193,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenURIPermissions"
                                },
                                "id": 3348,
                                "name": "Identifier",
                                "src": "4490:19:5"
                              }
                            ],
                            "id": 3349,
                            "name": "MemberAccess",
                            "src": "4490:39:5"
                          }
                        ],
                        "id": 3350,
                        "name": "FunctionCall",
                        "src": "4490:41:5"
                      }
                    ],
                    "id": 3351,
                    "name": "Return",
                    "src": "4483:48:5"
                  }
                ],
                "id": 3352,
                "name": "Block",
                "src": "4473:65:5"
              }
            ],
            "id": 3353,
            "name": "FunctionDefinition",
            "src": "4366:172:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeTokenURIAuthorization",
              "payable": false,
              "scope": 3548,
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
                      "name": "_agent",
                      "scope": 3368,
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
                        "id": 3354,
                        "name": "ElementaryTypeName",
                        "src": "4677:7:5"
                      }
                    ],
                    "id": 3355,
                    "name": "VariableDeclaration",
                    "src": "4677:14:5"
                  }
                ],
                "id": 3356,
                "name": "ParameterList",
                "src": "4676:16:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3359,
                "name": "ParameterList",
                "src": "4730:0:5"
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
                      "referencedDeclaration": 14133,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 3357,
                    "name": "Identifier",
                    "src": "4716:9:5"
                  }
                ],
                "id": 3358,
                "name": "ModifierInvocation",
                "src": "4716:9:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_string_memory",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 6235,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3193,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenURIPermissions"
                                },
                                "id": 3360,
                                "name": "Identifier",
                                "src": "4740:19:5"
                              }
                            ],
                            "id": 3362,
                            "name": "MemberAccess",
                            "src": "4740:39:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3355,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 3363,
                            "name": "Identifier",
                            "src": "4780:6:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3199,
                              "type": "string memory",
                              "value": "URI_CONTEXT"
                            },
                            "id": 3364,
                            "name": "Identifier",
                            "src": "4788:11:5"
                          }
                        ],
                        "id": 3365,
                        "name": "FunctionCall",
                        "src": "4740:60:5"
                      }
                    ],
                    "id": 3366,
                    "name": "ExpressionStatement",
                    "src": "4740:60:5"
                  }
                ],
                "id": 3367,
                "name": "Block",
                "src": "4730:77:5"
              }
            ],
            "id": 3368,
            "name": "FunctionDefinition",
            "src": "4640:167:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "approve",
              "payable": false,
              "scope": 3548,
              "stateMutability": "nonpayable",
              "superFunction": 15046,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 3385,
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
                        "id": 3369,
                        "name": "ElementaryTypeName",
                        "src": "4991:7:5"
                      }
                    ],
                    "id": 3370,
                    "name": "VariableDeclaration",
                    "src": "4991:11:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3385,
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
                        "id": 3371,
                        "name": "ElementaryTypeName",
                        "src": "5004:4:5"
                      }
                    ],
                    "id": 3372,
                    "name": "VariableDeclaration",
                    "src": "5004:13:5"
                  }
                ],
                "id": 3373,
                "name": "ParameterList",
                "src": "4990:28:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3376,
                "name": "ParameterList",
                "src": "5060:0:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3374,
                    "name": "Identifier",
                    "src": "5042:13:5"
                  }
                ],
                "id": 3375,
                "name": "ModifierInvocation",
                "src": "5042:13:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "approve",
                              "referencedDeclaration": 15046,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3377,
                                "name": "Identifier",
                                "src": "5070:5:5"
                              }
                            ],
                            "id": 3379,
                            "name": "MemberAccess",
                            "src": "5070:13:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3370,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3380,
                            "name": "Identifier",
                            "src": "5084:3:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3372,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3381,
                            "name": "Identifier",
                            "src": "5089:8:5"
                          }
                        ],
                        "id": 3382,
                        "name": "FunctionCall",
                        "src": "5070:28:5"
                      }
                    ],
                    "id": 3383,
                    "name": "ExpressionStatement",
                    "src": "5070:28:5"
                  }
                ],
                "id": 3384,
                "name": "Block",
                "src": "5060:45:5"
              }
            ],
            "id": 3385,
            "name": "FunctionDefinition",
            "src": "4974:131:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 3548,
              "stateMutability": "nonpayable",
              "superFunction": 15089,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 3402,
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
                        "id": 3386,
                        "name": "ElementaryTypeName",
                        "src": "5308:7:5"
                      }
                    ],
                    "id": 3387,
                    "name": "VariableDeclaration",
                    "src": "5308:11:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 3402,
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
                        "id": 3388,
                        "name": "ElementaryTypeName",
                        "src": "5321:4:5"
                      }
                    ],
                    "id": 3389,
                    "name": "VariableDeclaration",
                    "src": "5321:14:5"
                  }
                ],
                "id": 3390,
                "name": "ParameterList",
                "src": "5307:29:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3393,
                "name": "ParameterList",
                "src": "5378:0:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3391,
                    "name": "Identifier",
                    "src": "5360:13:5"
                  }
                ],
                "id": 3392,
                "name": "ModifierInvocation",
                "src": "5360:13:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "setApprovalForAll",
                              "referencedDeclaration": 15089,
                              "type": "function (address,bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3394,
                                "name": "Identifier",
                                "src": "5388:5:5"
                              }
                            ],
                            "id": 3396,
                            "name": "MemberAccess",
                            "src": "5388:23:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3387,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3397,
                            "name": "Identifier",
                            "src": "5412:3:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3389,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 3398,
                            "name": "Identifier",
                            "src": "5417:9:5"
                          }
                        ],
                        "id": 3399,
                        "name": "FunctionCall",
                        "src": "5388:39:5"
                      }
                    ],
                    "id": 3400,
                    "name": "ExpressionStatement",
                    "src": "5388:39:5"
                  }
                ],
                "id": 3401,
                "name": "Block",
                "src": "5378:56:5"
              }
            ],
            "id": 3402,
            "name": "FunctionDefinition",
            "src": "5281:153:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transfer",
              "payable": false,
              "scope": 3548,
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
                      "name": "_to",
                      "scope": 3417,
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
                        "id": 3403,
                        "name": "ElementaryTypeName",
                        "src": "5514:7:5"
                      }
                    ],
                    "id": 3404,
                    "name": "VariableDeclaration",
                    "src": "5514:11:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3417,
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
                        "id": 3405,
                        "name": "ElementaryTypeName",
                        "src": "5527:4:5"
                      }
                    ],
                    "id": 3406,
                    "name": "VariableDeclaration",
                    "src": "5527:13:5"
                  }
                ],
                "id": 3407,
                "name": "ParameterList",
                "src": "5513:28:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3408,
                "name": "ParameterList",
                "src": "5561:0:5"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                3467,
                                3495
                              ],
                              "referencedDeclaration": 3467,
                              "type": "function (address,address,uint256)",
                              "value": "safeTransferFrom"
                            },
                            "id": 3409,
                            "name": "Identifier",
                            "src": "5571:16:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "sender",
                              "referencedDeclaration": null,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15841,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 3410,
                                "name": "Identifier",
                                "src": "5588:3:5"
                              }
                            ],
                            "id": 3411,
                            "name": "MemberAccess",
                            "src": "5588:10:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3404,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3412,
                            "name": "Identifier",
                            "src": "5600:3:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3406,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3413,
                            "name": "Identifier",
                            "src": "5605:8:5"
                          }
                        ],
                        "id": 3414,
                        "name": "FunctionCall",
                        "src": "5571:43:5"
                      }
                    ],
                    "id": 3415,
                    "name": "ExpressionStatement",
                    "src": "5571:43:5"
                  }
                ],
                "id": 3416,
                "name": "Block",
                "src": "5561:60:5"
              }
            ],
            "id": 3417,
            "name": "FunctionDefinition",
            "src": "5496:125:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 3548,
              "stateMutability": "nonpayable",
              "superFunction": 15155,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 3442,
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
                        "id": 3418,
                        "name": "ElementaryTypeName",
                        "src": "5815:7:5"
                      }
                    ],
                    "id": 3419,
                    "name": "VariableDeclaration",
                    "src": "5815:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 3442,
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
                        "id": 3420,
                        "name": "ElementaryTypeName",
                        "src": "5830:7:5"
                      }
                    ],
                    "id": 3421,
                    "name": "VariableDeclaration",
                    "src": "5830:11:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3442,
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
                        "id": 3422,
                        "name": "ElementaryTypeName",
                        "src": "5843:4:5"
                      }
                    ],
                    "id": 3423,
                    "name": "VariableDeclaration",
                    "src": "5843:13:5"
                  }
                ],
                "id": 3424,
                "name": "ParameterList",
                "src": "5814:43:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3427,
                "name": "ParameterList",
                "src": "5899:0:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3425,
                    "name": "Identifier",
                    "src": "5881:13:5"
                  }
                ],
                "id": 3426,
                "name": "ModifierInvocation",
                "src": "5881:13:5"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3547,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 3428,
                            "name": "Identifier",
                            "src": "5909:18:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3423,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3429,
                            "name": "Identifier",
                            "src": "5928:8:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3421,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3430,
                            "name": "Identifier",
                            "src": "5938:3:5"
                          }
                        ],
                        "id": 3431,
                        "name": "FunctionCall",
                        "src": "5909:33:5"
                      }
                    ],
                    "id": 3432,
                    "name": "ExpressionStatement",
                    "src": "5909:33:5"
                  },
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "transferFrom",
                              "referencedDeclaration": 15155,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3433,
                                "name": "Identifier",
                                "src": "5952:5:5"
                              }
                            ],
                            "id": 3435,
                            "name": "MemberAccess",
                            "src": "5952:18:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3419,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 3436,
                            "name": "Identifier",
                            "src": "5971:5:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3421,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3437,
                            "name": "Identifier",
                            "src": "5978:3:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3423,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3438,
                            "name": "Identifier",
                            "src": "5983:8:5"
                          }
                        ],
                        "id": 3439,
                        "name": "FunctionCall",
                        "src": "5952:40:5"
                      }
                    ],
                    "id": 3440,
                    "name": "ExpressionStatement",
                    "src": "5952:40:5"
                  }
                ],
                "id": 3441,
                "name": "Block",
                "src": "5899:100:5"
              }
            ],
            "id": 3442,
            "name": "FunctionDefinition",
            "src": "5793:206:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 3548,
              "stateMutability": "nonpayable",
              "superFunction": 15175,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 3467,
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
                        "id": 3443,
                        "name": "ElementaryTypeName",
                        "src": "6201:7:5"
                      }
                    ],
                    "id": 3444,
                    "name": "VariableDeclaration",
                    "src": "6201:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 3467,
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
                        "id": 3445,
                        "name": "ElementaryTypeName",
                        "src": "6216:7:5"
                      }
                    ],
                    "id": 3446,
                    "name": "VariableDeclaration",
                    "src": "6216:11:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3467,
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
                        "id": 3447,
                        "name": "ElementaryTypeName",
                        "src": "6229:4:5"
                      }
                    ],
                    "id": 3448,
                    "name": "VariableDeclaration",
                    "src": "6229:13:5"
                  }
                ],
                "id": 3449,
                "name": "ParameterList",
                "src": "6200:43:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3452,
                "name": "ParameterList",
                "src": "6285:0:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3450,
                    "name": "Identifier",
                    "src": "6267:13:5"
                  }
                ],
                "id": 3451,
                "name": "ModifierInvocation",
                "src": "6267:13:5"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3547,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 3453,
                            "name": "Identifier",
                            "src": "6295:18:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3448,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3454,
                            "name": "Identifier",
                            "src": "6314:8:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3446,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3455,
                            "name": "Identifier",
                            "src": "6324:3:5"
                          }
                        ],
                        "id": 3456,
                        "name": "FunctionCall",
                        "src": "6295:33:5"
                      }
                    ],
                    "id": 3457,
                    "name": "ExpressionStatement",
                    "src": "6295:33:5"
                  },
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "safeTransferFrom",
                              "referencedDeclaration": 15175,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3458,
                                "name": "Identifier",
                                "src": "6338:5:5"
                              }
                            ],
                            "id": 3460,
                            "name": "MemberAccess",
                            "src": "6338:22:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3444,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 3461,
                            "name": "Identifier",
                            "src": "6361:5:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3446,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3462,
                            "name": "Identifier",
                            "src": "6368:3:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3448,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3463,
                            "name": "Identifier",
                            "src": "6373:8:5"
                          }
                        ],
                        "id": 3464,
                        "name": "FunctionCall",
                        "src": "6338:44:5"
                      }
                    ],
                    "id": 3465,
                    "name": "ExpressionStatement",
                    "src": "6338:44:5"
                  }
                ],
                "id": 3466,
                "name": "Block",
                "src": "6285:104:5"
              }
            ],
            "id": 3467,
            "name": "FunctionDefinition",
            "src": "6175:214:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 3548,
              "stateMutability": "nonpayable",
              "superFunction": 15205,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 3495,
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
                        "id": 3468,
                        "name": "ElementaryTypeName",
                        "src": "6591:7:5"
                      }
                    ],
                    "id": 3469,
                    "name": "VariableDeclaration",
                    "src": "6591:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 3495,
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
                        "id": 3470,
                        "name": "ElementaryTypeName",
                        "src": "6606:7:5"
                      }
                    ],
                    "id": 3471,
                    "name": "VariableDeclaration",
                    "src": "6606:11:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3495,
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
                        "id": 3472,
                        "name": "ElementaryTypeName",
                        "src": "6619:4:5"
                      }
                    ],
                    "id": 3473,
                    "name": "VariableDeclaration",
                    "src": "6619:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 3495,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 3474,
                        "name": "ElementaryTypeName",
                        "src": "6634:5:5"
                      }
                    ],
                    "id": 3475,
                    "name": "VariableDeclaration",
                    "src": "6634:11:5"
                  }
                ],
                "id": 3476,
                "name": "ParameterList",
                "src": "6590:56:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3479,
                "name": "ParameterList",
                "src": "6688:0:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3477,
                    "name": "Identifier",
                    "src": "6670:13:5"
                  }
                ],
                "id": 3478,
                "name": "ModifierInvocation",
                "src": "6670:13:5"
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3547,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 3480,
                            "name": "Identifier",
                            "src": "6698:18:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3473,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3481,
                            "name": "Identifier",
                            "src": "6717:8:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3471,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3482,
                            "name": "Identifier",
                            "src": "6727:3:5"
                          }
                        ],
                        "id": 3483,
                        "name": "FunctionCall",
                        "src": "6698:33:5"
                      }
                    ],
                    "id": 3484,
                    "name": "ExpressionStatement",
                    "src": "6698:33:5"
                  },
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "safeTransferFrom",
                              "referencedDeclaration": 15205,
                              "type": "function (address,address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3485,
                                "name": "Identifier",
                                "src": "6741:5:5"
                              }
                            ],
                            "id": 3487,
                            "name": "MemberAccess",
                            "src": "6741:22:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3469,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 3488,
                            "name": "Identifier",
                            "src": "6764:5:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3471,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3489,
                            "name": "Identifier",
                            "src": "6771:3:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3473,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3490,
                            "name": "Identifier",
                            "src": "6776:8:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3475,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 3491,
                            "name": "Identifier",
                            "src": "6786:5:5"
                          }
                        ],
                        "id": 3492,
                        "name": "FunctionCall",
                        "src": "6741:51:5"
                      }
                    ],
                    "id": 3493,
                    "name": "ExpressionStatement",
                    "src": "6741:51:5"
                  }
                ],
                "id": 3494,
                "name": "Block",
                "src": "6688:111:5"
              }
            ],
            "id": 3495,
            "name": "FunctionDefinition",
            "src": "6565:234:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenURI",
              "payable": false,
              "scope": 3548,
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
                      "name": "_tokenId",
                      "scope": 3520,
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
                        "id": 3496,
                        "name": "ElementaryTypeName",
                        "src": "6934:7:5"
                      }
                    ],
                    "id": 3497,
                    "name": "VariableDeclaration",
                    "src": "6934:16:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_uri",
                      "scope": 3520,
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
                        "id": 3498,
                        "name": "ElementaryTypeName",
                        "src": "6952:6:5"
                      }
                    ],
                    "id": 3499,
                    "name": "VariableDeclaration",
                    "src": "6952:11:5"
                  }
                ],
                "id": 3500,
                "name": "ParameterList",
                "src": "6933:31:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3503,
                "name": "ParameterList",
                "src": "7006:0:5"
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
                      "referencedDeclaration": 13966,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 3501,
                    "name": "Identifier",
                    "src": "6988:13:5"
                  }
                ],
                "id": 3502,
                "name": "ModifierInvocation",
                "src": "6988:13:5"
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
                              "referencedDeclaration": 15844,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3504,
                            "name": "Identifier",
                            "src": "7016:7:5"
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
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "isAuthorized",
                                  "referencedDeclaration": 6250,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3193,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenURIPermissions"
                                    },
                                    "id": 3505,
                                    "name": "Identifier",
                                    "src": "7024:19:5"
                                  }
                                ],
                                "id": 3506,
                                "name": "MemberAccess",
                                "src": "7024:32:5"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 15841,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 3507,
                                    "name": "Identifier",
                                    "src": "7057:3:5"
                                  }
                                ],
                                "id": 3508,
                                "name": "MemberAccess",
                                "src": "7057:10:5"
                              }
                            ],
                            "id": 3509,
                            "name": "FunctionCall",
                            "src": "7024:44:5"
                          }
                        ],
                        "id": 3510,
                        "name": "FunctionCall",
                        "src": "7016:53:5"
                      }
                    ],
                    "id": 3511,
                    "name": "ExpressionStatement",
                    "src": "7016:53:5"
                  },
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_setTokenURI",
                              "referencedDeclaration": 15561,
                              "type": "function (uint256,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 15897,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 3512,
                                "name": "Identifier",
                                "src": "7079:5:5"
                              }
                            ],
                            "id": 3514,
                            "name": "MemberAccess",
                            "src": "7079:18:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3497,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 3515,
                            "name": "Identifier",
                            "src": "7098:8:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3499,
                              "type": "string memory",
                              "value": "_uri"
                            },
                            "id": 3516,
                            "name": "Identifier",
                            "src": "7108:4:5"
                          }
                        ],
                        "id": 3517,
                        "name": "FunctionCall",
                        "src": "7079:34:5"
                      }
                    ],
                    "id": 3518,
                    "name": "ExpressionStatement",
                    "src": "7079:34:5"
                  }
                ],
                "id": 3519,
                "name": "Block",
                "src": "7006:114:5"
              }
            ],
            "id": 3520,
            "name": "FunctionDefinition",
            "src": "6913:207:5"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_modifyBeneficiary",
              "payable": false,
              "scope": 3548,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 3547,
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
                        "id": 3521,
                        "name": "ElementaryTypeName",
                        "src": "7305:4:5"
                      }
                    ],
                    "id": 3522,
                    "name": "VariableDeclaration",
                    "src": "7305:13:5"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 3547,
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
                        "id": 3523,
                        "name": "ElementaryTypeName",
                        "src": "7320:7:5"
                      }
                    ],
                    "id": 3524,
                    "name": "VariableDeclaration",
                    "src": "7320:11:5"
                  }
                ],
                "id": 3525,
                "name": "ParameterList",
                "src": "7304:28:5"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 3526,
                "name": "ParameterList",
                "src": "7354:0:5"
              },
              {
                "children": [
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
                          "operator": "!=",
                          "type": "bool"
                        },
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
                              "type": "address",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "getBeneficiary",
                                  "referencedDeclaration": 3032,
                                  "type": "function (bytes32) view external returns (address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3189,
                                      "type": "contract DebtRegistry",
                                      "value": "registry"
                                    },
                                    "id": 3527,
                                    "name": "Identifier",
                                    "src": "7368:8:5"
                                  }
                                ],
                                "id": 3528,
                                "name": "MemberAccess",
                                "src": "7368:23:5"
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
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(bytes32)",
                                      "value": "bytes32"
                                    },
                                    "id": 3529,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7392:7:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3522,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 3530,
                                    "name": "Identifier",
                                    "src": "7400:8:5"
                                  }
                                ],
                                "id": 3531,
                                "name": "FunctionCall",
                                "src": "7392:17:5"
                              }
                            ],
                            "id": 3532,
                            "name": "FunctionCall",
                            "src": "7368:42:5"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3524,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 3533,
                            "name": "Identifier",
                            "src": "7414:3:5"
                          }
                        ],
                        "id": 3534,
                        "name": "BinaryOperation",
                        "src": "7368:49:5"
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
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "modifyBeneficiary",
                                      "referencedDeclaration": 2906,
                                      "type": "function (bytes32,address) external"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3189,
                                          "type": "contract DebtRegistry",
                                          "value": "registry"
                                        },
                                        "id": 3535,
                                        "name": "Identifier",
                                        "src": "7433:8:5"
                                      }
                                    ],
                                    "id": 3537,
                                    "name": "MemberAccess",
                                    "src": "7433:26:5"
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
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(bytes32)",
                                          "value": "bytes32"
                                        },
                                        "id": 3538,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "7460:7:5"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3522,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 3539,
                                        "name": "Identifier",
                                        "src": "7468:8:5"
                                      }
                                    ],
                                    "id": 3540,
                                    "name": "FunctionCall",
                                    "src": "7460:17:5"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3524,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 3541,
                                    "name": "Identifier",
                                    "src": "7479:3:5"
                                  }
                                ],
                                "id": 3542,
                                "name": "FunctionCall",
                                "src": "7433:50:5"
                              }
                            ],
                            "id": 3543,
                            "name": "ExpressionStatement",
                            "src": "7433:50:5"
                          }
                        ],
                        "id": 3544,
                        "name": "Block",
                        "src": "7419:75:5"
                      }
                    ],
                    "id": 3545,
                    "name": "IfStatement",
                    "src": "7364:130:5"
                  }
                ],
                "id": 3546,
                "name": "Block",
                "src": "7354:146:5"
              }
            ],
            "id": 3547,
            "name": "FunctionDefinition",
            "src": "7277:223:5"
          }
        ],
        "id": 3548,
        "name": "ContractDefinition",
        "src": "1362:6140:5"
      }
    ],
    "id": 3549,
    "name": "SourceUnit",
    "src": "584:6919:5"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "1": {
      "events": {
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_approved",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        }
      },
      "links": {},
      "address": "0xf7b3fc555c458c46d288ffd049ddbfb09f706df7"
    },
    "42": {
      "events": {
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        },
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_approved",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x127c48f9166e61f2e5532f559590aaeb68bd56b5"
    },
    "70": {
      "events": {
        "0x571925c699f9072cec76b6c6c000571cc8d0bb5c47e5819202e2e9496c6508b5": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "Authorized",
          "type": "event"
        },
        "0x0814e4ee85854cea446b4a27a460e5ffb41516230dbc02f226c07907e432241c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "agent",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "callingContext",
              "type": "string"
            }
          ],
          "name": "AuthorizationRevoked",
          "type": "event"
        },
        "0x6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff625": {
          "anonymous": false,
          "inputs": [],
          "name": "Pause",
          "type": "event"
        },
        "0x7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b33": {
          "anonymous": false,
          "inputs": [],
          "name": "Unpause",
          "type": "event"
        },
        "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0": {
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
        },
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_from",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_to",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_approved",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "_owner",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "_operator",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "_approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x4f652ba5e259a0dca84441120b6494e7ca838588"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-10-15T20:10:49.214Z"
}