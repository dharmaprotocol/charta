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
  "bytecode": "0x60606040526000600b60146101000a81548160ff02191690831515021790555034156200002b57600080fd5b6040516020806200343b833981016040528080519060200190919050506040805190810160405280600981526020017f44656274546f6b656e00000000000000000000000000000000000000000000008152506040805190810160405280600381526020017f44445400000000000000000000000000000000000000000000000000000000008152508160049080519060200190620000cc92919062000171565b508060059080519060200190620000e592919062000171565b50505033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000220565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620001b457805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e4578251825591602001919060010190620001c7565b5b509050620001f49190620001f8565b5090565b6200021d91905b8082111562000219576000816000905550600101620001ff565b5090565b90565b61320b80620002306000396000f300606060405260043610610195576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae1461019a57806301ffc9a7146101d35780630343e1221461022d57806306fdde0314610297578063081812fc14610325578063095ea7b314610388578063162094c4146103ca57806318160ddd1461043057806321d371271461045957806323b872dd146104c35780632f745c591461052457806333d261771461057a5780633f4ba83a146105b357806342842e0e146105c85780634f558e79146106295780634f6ccce7146106645780635c975abb1461069b5780636352211e146106c857806370a082311461072b5780637b1039991461077857806381ac3fbc146107cd5780638456cb59146108065780638da5cb5b1461081b57806395d89b411461087057806399f10501146108fe5780639c0d9c43146109e6578063a22cb46514610a1f578063a9059cbb14610a63578063b88d4fde14610aa5578063c87b56dd14610b49578063e985e9c514610be5578063f2fde38b14610c55575b600080fd5b34156101a557600080fd5b6101d1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c8e565b005b34156101de57600080fd5b61021360048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610d01565b604051808215151515815260200191505060405180910390f35b341561023857600080fd5b610240610d4f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610283578082015181840152602081019050610268565b505050509050019250505060405180910390f35b34156102a257600080fd5b6102aa610d66565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ea5780820151818401526020810190506102cf565b50505050905090810190601f1680156103175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561033057600080fd5b6103466004808035906020019091905050610e0e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561039357600080fd5b6103c8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e4b565b005b34156103d557600080fd5b61042e600480803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610e75565b005b341561043b57600080fd5b610443610ebe565b6040518082815260200191505060405180910390f35b341561046457600080fd5b61046c610ecb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104af578082015181840152602081019050610494565b505050509050019250505060405180910390f35b34156104ce57600080fd5b610522600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ee2565b005b341561052f57600080fd5b610564600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f18565b6040518082815260200191505060405180910390f35b341561058557600080fd5b6105b1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f90565b005b34156105be57600080fd5b6105c6611003565b005b34156105d357600080fd5b610627600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506110c3565b005b341561063457600080fd5b61064a60048080359060200190919050506110f9565b604051808215151515815260200191505060405180910390f35b341561066f57600080fd5b610685600480803590602001909190505061116a565b6040518082815260200191505060405180910390f35b34156106a657600080fd5b6106ae6111a3565b604051808215151515815260200191505060405180910390f35b34156106d357600080fd5b6106e960048080359060200190919050506111b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561073657600080fd5b610762600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611233565b6040518082815260200191505060405180910390f35b341561078357600080fd5b61078b6112b7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107d857600080fd5b610804600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506112dd565b005b341561081157600080fd5b610819611350565b005b341561082657600080fd5b61082e611411565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561087b57600080fd5b610883611437565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108c35780820151818401526020810190506108a8565b50505050905090810190601f1680156108f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561090957600080fd5b6109d0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506114df565b6040518082815260200191505060405180910390f35b34156109f157600080fd5b610a1d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611711565b005b3415610a2a57600080fd5b610a61600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050611784565b005b3415610a6e57600080fd5b610aa3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506117ae565b005b3415610ab057600080fd5b610b47600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506117bd565b005b3415610b5457600080fd5b610b6a60048080359060200190919050506117f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610baa578082015181840152602081019050610b8f565b50505050905090810190601f168015610bd75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610bf057600080fd5b610c3b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118c4565b604051808215151515815260200191505060405180910390f35b3415610c6057600080fd5b610c8c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611958565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cea57600080fd5b610cfe816013611ab090919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610d57613062565b610d61600d611cf2565b905090565b610d6e613076565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e045780601f10610dd957610100808354040283529160200191610e04565b820191906000526020600020905b815481529060010190602001808311610de757829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610e6757600080fd5b610e718282611d8a565b5050565b600b60149054906101000a900460ff16151515610e9157600080fd5b610ea5336013611f5090919063ffffffff16565b1515610eb057600080fd5b610eba8282611fa9565b5050565b6000600880549050905090565b610ed3613062565b610edd6013611cf2565b905090565b600b60149054906101000a900460ff16151515610efe57600080fd5b610f088183611fe9565b610f138383836121c4565b505050565b6000610f2383611233565b82101515610f3057600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610f7c57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610fec57600080fd5b6110008160136122db90919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561105f57600080fd5b600b60149054906101000a900460ff16151561107a57600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156110df57600080fd5b6110e98183611fe9565b6110f4838383612403565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000611174610ebe565b8210151561118157600080fd5b60088281548110151561119057fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561122a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561127057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561133957600080fd5b61134d81600d611ab090919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113ac57600080fd5b600b60149054906101000a900460ff161515156113c857600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61143f613076565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114d55780601f106114aa576101008083540402835291602001916114d5565b820191906000526020600020905b8154815290600101906020018083116114b857829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff161515156114fe57600080fd5b61151233600d611f5090919063ffffffff16565b151561151d57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156116d257600080fd5b6102c65a03f115156116e357600080fd5b5050506040518051905090506116fd89826001900461243b565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561176d57600080fd5b61178181600d6122db90919063ffffffff16565b50565b600b60149054906101000a900460ff161515156117a057600080fd5b6117aa828261248f565b5050565b6117b93383836110c3565b5050565b600b60149054906101000a900460ff161515156117d957600080fd5b6117e38284611fe9565b6117ef848484846125cb565b50505050565b6117fd613076565b611806826110f9565b151561181157600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118b85780601f1061188d576101008083540402835291602001916118b8565b820191906000526020600020905b81548152906001019060200180831161189b57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119b457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156119f057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611abf8585611f50565b1515611aca57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611b2c57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611bbd57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611ca257fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611cea919061308a565b505050505050565b611cfa613062565b81600201805480602002602001604051908101604052809291908181526020018280548015611d7e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611d34575b50505050509050919050565b6000611d95826111b6565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611dd257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611e125750611e1181336118c4565b5b1515611e1d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16611e3e83610e0e565b73ffffffffffffffffffffffffffffffffffffffff16141580611e8e5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15611f4b57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611fb2826110f9565b1515611fbd57600080fd5b80600a60008481526020019081526020016000209080519060200190611fe49291906130b6565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156120a457600080fd5b6102c65a03f115156120b557600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156121c057600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156121ab57600080fd5b6102c65a03f115156121bc57600080fd5b5050505b5050565b806121cf338261260a565b15156121da57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561221657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561225257600080fd5b61225c848361269f565b6122668483612808565b6122708383612a23565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6122e58282612af7565b15156122f057600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816123609190613136565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b8061240e338261260a565b151561241957600080fd5b61243584848460206040519081016040528060008152506117bd565b50505050565b6124458282612b0c565b6008805490506009600083815260200190815260200160002081905550600880548060010182816124769190613162565b9160005260206000209001600083909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156124ca57600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816125d6338261260a565b15156125e157600080fd5b6125ec858585610ee2565b6125f885858585612bbc565b151561260357600080fd5b5050505050565b600080612616836111b6565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061268557508373ffffffffffffffffffffffffffffffffffffffff1661266d84610e0e565b73ffffffffffffffffffffffffffffffffffffffff16145b80612696575061269581856118c4565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166126bf826111b6565b73ffffffffffffffffffffffffffffffffffffffff161415156126e157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156128045760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b60008060006128178585612d92565b600760008581526020019081526020016000205492506128836001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612ec090919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156128d157fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561292c57fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561298957fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036129ea919061318e565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612a2f8383612ed9565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281612ac59190613162565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6000612b038383611f50565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612b4857600080fd5b612b528282612a23565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080612bde8573ffffffffffffffffffffffffffffffffffffffff16613031565b1515612bed5760019150612d89565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612cb8578082015181840152602081019050612c9d565b50505050905090810190601f168015612ce55780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1515612d0557600080fd5b6102c65a03f11515612d1657600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff16612db2826111b6565b73ffffffffffffffffffffffffffffffffffffffff16141515612dd457600080fd5b612e276001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612ec090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000828211151515612ece57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612f4657600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612fea6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461304490919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561305857fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116130b1578183600052602060002091820191016130b091906131ba565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106130f757805160ff1916838001178555613125565b82800160010185558215613125579182015b82811115613124578251825591602001919060010190613109565b5b50905061313291906131ba565b5090565b81548183558181151161315d5781836000526020600020918201910161315c91906131ba565b5b505050565b8154818355818115116131895781836000526020600020918201910161318891906131ba565b5b505050565b8154818355818115116131b5578183600052602060002091820191016131b491906131ba565b5b505050565b6131dc91905b808211156131d85760008160009055506001016131c0565b5090565b905600a165627a7a723058204a4d13de6bf1cc4be7d7c8a215af66bb63185be0a324ea2e0d660a6935091ad90029",
  "deployedBytecode": "0x606060405260043610610195576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062b0aeae1461019a57806301ffc9a7146101d35780630343e1221461022d57806306fdde0314610297578063081812fc14610325578063095ea7b314610388578063162094c4146103ca57806318160ddd1461043057806321d371271461045957806323b872dd146104c35780632f745c591461052457806333d261771461057a5780633f4ba83a146105b357806342842e0e146105c85780634f558e79146106295780634f6ccce7146106645780635c975abb1461069b5780636352211e146106c857806370a082311461072b5780637b1039991461077857806381ac3fbc146107cd5780638456cb59146108065780638da5cb5b1461081b57806395d89b411461087057806399f10501146108fe5780639c0d9c43146109e6578063a22cb46514610a1f578063a9059cbb14610a63578063b88d4fde14610aa5578063c87b56dd14610b49578063e985e9c514610be5578063f2fde38b14610c55575b600080fd5b34156101a557600080fd5b6101d1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c8e565b005b34156101de57600080fd5b61021360048080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916906020019091905050610d01565b604051808215151515815260200191505060405180910390f35b341561023857600080fd5b610240610d4f565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610283578082015181840152602081019050610268565b505050509050019250505060405180910390f35b34156102a257600080fd5b6102aa610d66565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102ea5780820151818401526020810190506102cf565b50505050905090810190601f1680156103175780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561033057600080fd5b6103466004808035906020019091905050610e0e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561039357600080fd5b6103c8600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610e4b565b005b34156103d557600080fd5b61042e600480803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050610e75565b005b341561043b57600080fd5b610443610ebe565b6040518082815260200191505060405180910390f35b341561046457600080fd5b61046c610ecb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104af578082015181840152602081019050610494565b505050509050019250505060405180910390f35b34156104ce57600080fd5b610522600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ee2565b005b341561052f57600080fd5b610564600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610f18565b6040518082815260200191505060405180910390f35b341561058557600080fd5b6105b1600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f90565b005b34156105be57600080fd5b6105c6611003565b005b34156105d357600080fd5b610627600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506110c3565b005b341561063457600080fd5b61064a60048080359060200190919050506110f9565b604051808215151515815260200191505060405180910390f35b341561066f57600080fd5b610685600480803590602001909190505061116a565b6040518082815260200191505060405180910390f35b34156106a657600080fd5b6106ae6111a3565b604051808215151515815260200191505060405180910390f35b34156106d357600080fd5b6106e960048080359060200190919050506111b6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561073657600080fd5b610762600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611233565b6040518082815260200191505060405180910390f35b341561078357600080fd5b61078b6112b7565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107d857600080fd5b610804600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506112dd565b005b341561081157600080fd5b610819611350565b005b341561082657600080fd5b61082e611411565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561087b57600080fd5b610883611437565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108c35780820151818401526020810190506108a8565b50505050905090810190601f1680156108f05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561090957600080fd5b6109d0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506114df565b6040518082815260200191505060405180910390f35b34156109f157600080fd5b610a1d600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611711565b005b3415610a2a57600080fd5b610a61600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080351515906020019091905050611784565b005b3415610a6e57600080fd5b610aa3600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506117ae565b005b3415610ab057600080fd5b610b47600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437820191505050505050919050506117bd565b005b3415610b5457600080fd5b610b6a60048080359060200190919050506117f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610baa578082015181840152602081019050610b8f565b50505050905090810190601f168015610bd75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610bf057600080fd5b610c3b600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118c4565b604051808215151515815260200191505060405180910390f35b3415610c6057600080fd5b610c8c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611958565b005b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cea57600080fd5b610cfe816013611ab090919063ffffffff16565b50565b60006380ac58cd7c010000000000000000000000000000000000000000000000000000000002827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b610d57613062565b610d61600d611cf2565b905090565b610d6e613076565b60048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e045780601f10610dd957610100808354040283529160200191610e04565b820191906000526020600020905b815481529060010190602001808311610de757829003601f168201915b5050505050905090565b60006001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600b60149054906101000a900460ff16151515610e6757600080fd5b610e718282611d8a565b5050565b600b60149054906101000a900460ff16151515610e9157600080fd5b610ea5336013611f5090919063ffffffff16565b1515610eb057600080fd5b610eba8282611fa9565b5050565b6000600880549050905090565b610ed3613062565b610edd6013611cf2565b905090565b600b60149054906101000a900460ff16151515610efe57600080fd5b610f088183611fe9565b610f138383836121c4565b505050565b6000610f2383611233565b82101515610f3057600080fd5b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610f7c57fe5b906000526020600020900154905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610fec57600080fd5b6110008160136122db90919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561105f57600080fd5b600b60149054906101000a900460ff16151561107a57600080fd5b6000600b60146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b600b60149054906101000a900460ff161515156110df57600080fd5b6110e98183611fe9565b6110f4838383612403565b505050565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415915050919050565b6000611174610ebe565b8210151561118157600080fd5b60088281548110151561119057fe5b9060005260206000209001549050919050565b600b60149054906101000a900460ff1681565b60008060008084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561122a57600080fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415151561127057600080fd5b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561133957600080fd5b61134d81600d611ab090919063ffffffff16565b50565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156113ac57600080fd5b600b60149054906101000a900460ff161515156113c857600080fd5b6001600b60146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61143f613076565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114d55780601f106114aa576101008083540402835291602001916114d5565b820191906000526020600020905b8154815290600101906020018083116114b857829003601f168201915b5050505050905090565b600080600b60149054906101000a900460ff161515156114fe57600080fd5b61151233600d611f5090919063ffffffff16565b151561151d57600080fd5b600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cf9df5eb8b8b8b8b8b8b8b8b6000604051602001526040518963ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200198505050505050505050602060405180830381600087803b15156116d257600080fd5b6102c65a03f115156116e357600080fd5b5050506040518051905090506116fd89826001900461243b565b806001900491505098975050505050505050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561176d57600080fd5b61178181600d6122db90919063ffffffff16565b50565b600b60149054906101000a900460ff161515156117a057600080fd5b6117aa828261248f565b5050565b6117b93383836110c3565b5050565b600b60149054906101000a900460ff161515156117d957600080fd5b6117e38284611fe9565b6117ef848484846125cb565b50505050565b6117fd613076565b611806826110f9565b151561181157600080fd5b600a60008381526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156118b85780601f1061188d576101008083540402835291602001916118b8565b820191906000526020600020905b81548152906001019060200180831161189b57829003601f168201915b50505050509050919050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119b457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156119f057600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000611abf8585611f50565b1515611aca57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611b2c57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611bbd57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611ca257fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611cea919061308a565b505050505050565b611cfa613062565b81600201805480602002602001604051908101604052809291908181526020018280548015611d7e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611d34575b50505050509050919050565b6000611d95826111b6565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515611dd257600080fd5b8073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161480611e125750611e1181336118c4565b5b1515611e1d57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff16611e3e83610e0e565b73ffffffffffffffffffffffffffffffffffffffff16141580611e8e5750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b15611f4b57826001600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611fb2826110f9565b1515611fbd57600080fd5b80600a60008481526020019081526020016000209080519060200190611fe49291906130b6565b505050565b8073ffffffffffffffffffffffffffffffffffffffff16600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ba20dda4846001026000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156120a457600080fd5b6102c65a03f115156120b557600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff161415156121c057600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635969549e83600102836040518363ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200192505050600060405180830381600087803b15156121ab57600080fd5b6102c65a03f115156121bc57600080fd5b5050505b5050565b806121cf338261260a565b15156121da57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415151561221657600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561225257600080fd5b61225c848361269f565b6122668483612808565b6122708383612a23565b8273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6122e58282612af7565b15156122f057600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816123609190613136565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b8061240e338261260a565b151561241957600080fd5b61243584848460206040519081016040528060008152506117bd565b50505050565b6124458282612b0c565b6008805490506009600083815260200190815260200160002081905550600880548060010182816124769190613162565b9160005260206000209001600083909190915055505050565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141515156124ca57600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b816125d6338261260a565b15156125e157600080fd5b6125ec858585610ee2565b6125f885858585612bbc565b151561260357600080fd5b5050505050565b600080612616836111b6565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061268557508373ffffffffffffffffffffffffffffffffffffffff1661266d84610e0e565b73ffffffffffffffffffffffffffffffffffffffff16145b80612696575061269581856118c4565b5b91505092915050565b8173ffffffffffffffffffffffffffffffffffffffff166126bf826111b6565b73ffffffffffffffffffffffffffffffffffffffff161415156126e157600080fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415156128045760006001600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a35b5050565b60008060006128178585612d92565b600760008581526020019081526020016000205492506128836001600660008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050612ec090919063ffffffff16565b9150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156128d157fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208481548110151561292c57fe5b9060005260206000209001819055506000600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561298957fe5b906000526020600020900181905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036129ea919061318e565b50600060076000868152602001908152602001600020819055508260076000838152602001908152602001600020819055505050505050565b6000612a2f8383612ed9565b600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054806001018281612ac59190613162565b916000526020600020900160008490919091505550806007600084815260200190815260200160002081905550505050565b6000612b038383611f50565b15905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614151515612b4857600080fd5b612b528282612a23565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600080612bde8573ffffffffffffffffffffffffffffffffffffffff16613031565b1515612bed5760019150612d89565b8473ffffffffffffffffffffffffffffffffffffffff1663f0b9e5ba8786866000604051602001526040518463ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612cb8578082015181840152602081019050612c9d565b50505050905090810190601f168015612ce55780820380516001836020036101000a031916815260200191505b50945050505050602060405180830381600087803b1515612d0557600080fd5b6102c65a03f11515612d1657600080fd5b50505060405180519050905063f0b9e5ba7c0100000000000000000000000000000000000000000000000000000000027bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505b50949350505050565b8173ffffffffffffffffffffffffffffffffffffffff16612db2826111b6565b73ffffffffffffffffffffffffffffffffffffffff16141515612dd457600080fd5b612e276001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612ec090919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550600080600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000828211151515612ece57fe5b818303905092915050565b600073ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612f4657600080fd5b8160008083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550612fea6001600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461304490919063ffffffff16565b600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080823b905060008111915050919050565b600080828401905083811015151561305857fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b8154818355818115116130b1578183600052602060002091820191016130b091906131ba565b5b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106130f757805160ff1916838001178555613125565b82800160010185558215613125579182015b82811115613124578251825591602001919060010190613109565b5b50905061313291906131ba565b5090565b81548183558181151161315d5781836000526020600020918201910161315c91906131ba565b5b505050565b8154818355818115116131895781836000526020600020918201910161318891906131ba565b5b505050565b8154818355818115116131b5578183600052602060002091820191016131b491906131ba565b5b505050565b6131dc91905b808211156131d85760008160009055506001016131c0565b5090565b905600a165627a7a723058204a4d13de6bf1cc4be7d7c8a215af66bb63185be0a324ea2e0d660a6935091ad90029",
  "sourceMap": "1226:5998:3:-;;;268:5:29;247:26;;;;;;;;;;;;;;;;;;;;1651:148:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1107:105:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1179:5;1171;:13;;;;;;;;;;;;:::i;:::-;;1200:7;1190;:17;;;;;;;;;;;;:::i;:::-;;1107:105;;509:10:31;501:5;;:18;;;;;;;;;;;;;;;;;;1782:9:3;1758:8;;:34;;;;;;;;;;;;;;;;;;1651:148;1226:5998;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "1226:5998:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4375:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;1894:176;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:173;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1303:68:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3577:111:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4696:131:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6635:207;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2887:87:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4101:172:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;5515:206:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2571:177:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3872:143:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:29;;;;;;;;;;;;;;5897:214:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2445:140:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3298::42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2107:164:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:142;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1342:28:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3355:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:29;;;;;;;;;;;;;;238:20:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2239:770:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3108:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;5003:153;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5218:125;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6287:234;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4478:142:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;4375:154:3;653:5:31;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;4475:47:3;4515:6;4475:19;:39;;:47;;;;:::i;:::-;4375:154;:::o;1894:176::-;1988:17;2043:10;2028:25;;:11;:25;;;;2021:32;;1894:176;;;:::o;3602:173::-;3682:17;;:::i;:::-;3722:46;:24;:44;:46::i;:::-;3715:53;;3602:173;:::o;1303:68:42:-;1340:6;;:::i;:::-;1361:5;1354:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1303:68;:::o;3577:111:40:-;3637:7;3659:14;:24;3674:8;3659:24;;;;;;;;;;;;;;;;;;;;;3652:31;;3577:111;;;:::o;4696:131:3:-;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;4792:28:3;4806:3;4811:8;4792:13;:28::i;:::-;4696:131;;:::o;6635:207::-;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;6746:44:3;6779:10;6746:19;:32;;:44;;;;:::i;:::-;6738:53;;;;;;;;6801:34;6820:8;6830:4;6801:18;:34::i;:::-;6635:207;;:::o;2887:87:42:-;2931:7;2953:9;:16;;;;2946:23;;2887:87;:::o;4101:172:3:-;4185:17;;:::i;:::-;4225:41;:19;:39;:41::i;:::-;4218:48;;4101:172;:::o;5515:206::-;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;5631:33:3;5650:8;5660:3;5631:18;:33::i;:::-;5674:40;5693:5;5700:3;5705:8;5674:18;:40::i;:::-;5515:206;;;:::o;2571:177:42:-;2653:7;2685:17;2695:6;2685:9;:17::i;:::-;2676:6;:26;2668:35;;;;;;;;2716:11;:19;2728:6;2716:19;;;;;;;;;;;;;;;2736:6;2716:27;;;;;;;;;;;;;;;;;;;2709:34;;2571:177;;;;:::o;3872:143:3:-;653:5:31;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3971:37:3;4001:6;3971:19;:29;;:37;;;;:::i;:::-;3872:143;:::o;833:87:29:-;653:5:31;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:29;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;5897:214:3:-;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;6017:33:3;6036:8;6046:3;6017:18;:33::i;:::-;6060:44;6083:5;6090:3;6095:8;6060:22;:44::i;:::-;5897:214;;;:::o;2445:140:40:-;2500:4;2512:13;2528:10;:20;2539:8;2528:20;;;;;;;;;;;;;;;;;;;;;2512:36;;2578:1;2561:19;;:5;:19;;;;2554:26;;2445:140;;;;:::o;3298::42:-;3357:7;3389:13;:11;:13::i;:::-;3380:6;:22;3372:31;;;;;;;;3416:9;3426:6;3416:17;;;;;;;;;;;;;;;;;;;3409:24;;3298:140;;;:::o;247:26:29:-;;;;;;;;;;;;;:::o;2107:164:40:-;2163:7;2178:13;2194:10;:20;2205:8;2194:20;;;;;;;;;;;;;;;;;;;;;2178:36;;2245:1;2228:19;;:5;:19;;;;2220:28;;;;;;;;2261:5;2254:12;;2107:164;;;;:::o;1756:142::-;1812:7;1853:1;1835:20;;:6;:20;;;;1827:29;;;;;;;;1869:16;:24;1886:6;1869:24;;;;;;;;;;;;;;;;1862:31;;1756:142;;;:::o;1342:28:3:-;;;;;;;;;;;;;:::o;3355:160::-;653:5:31;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3456:52:3;3501:6;3456:24;:44;;:52;;;;:::i;:::-;3355:160;:::o;666:85:29:-;653:5:31;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;238:20:31:-;;;;;;;;;;;;;:::o;1466:72:42:-;1505:6;;:::i;:::-;1526:7;1519:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1466:72;:::o;2239:770:3:-;2557:13;2655:17;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;2594:49:3;2632:10;2594:24;:37;;:49;;;;:::i;:::-;2586:58;;;;;;;;2675:8;;;;;;;;;;;:15;;;2704:8;2726:12;2752:7;2773:12;2799:22;2835:14;2863:24;2901:5;2675:241;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2655:261;;2927:42;2939:12;2958:9;2953:15;;;2927:11;:42::i;:::-;2992:9;2987:15;;;2980:22;;2239:770;;;;;;;;;;;:::o;3108:144::-;653:5:31;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;3203:42:3;3238:6;3203:24;:34;;:42;;;;:::i;:::-;3108:144;:::o;5003:153::-;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;5110:39:3;5134:3;5139:9;5110:23;:39::i;:::-;5003:153;;:::o;5218:125::-;5293:43;5310:10;5322:3;5327:8;5293:16;:43::i;:::-;5218:125;;:::o;6287:234::-;416:6:29;;;;;;;;;;;415:7;407:16;;;;;;;;6420:33:3;6439:8;6449:3;6420:18;:33::i;:::-;6463:51;6486:5;6493:3;6498:8;6508:5;6463:22;:51::i;:::-;6287:234;;;;:::o;1727:133:42:-;1784:6;;:::i;:::-;1806:16;1813:8;1806:6;:16::i;:::-;1798:25;;;;;;;;1836:9;:19;1846:8;1836:19;;;;;;;;;;;1829:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:133;;;:::o;4478:142:40:-;4560:4;4579:17;:25;4597:6;4579:25;;;;;;;;;;;;;;;:36;4605:9;4579:36;;;;;;;;;;;;;;;;;;;;;;;;;4572:43;;4478:142;;;;:::o;832:169:31:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;1118:1061:12:-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;2536:162::-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;2998:350:40:-;3059:13;3075:17;3083:8;3075:7;:17::i;:::-;3059:33;;3113:5;3106:12;;:3;:12;;;;3098:21;;;;;;;;3147:5;3133:19;;:10;:19;;;:58;;;;3156:35;3173:5;3180:10;3156:16;:35::i;:::-;3133:58;3125:67;;;;;;;;3236:1;3203:35;;:21;3215:8;3203:11;:21::i;:::-;:35;;;;:56;;;;3257:1;3242:17;;:3;:17;;;;3203:56;3199:145;;;3296:3;3269:14;:24;3284:8;3269:24;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;3323:3;3307:30;;3316:5;3307:30;;;3328:8;3307:30;;;;;;;;;;;;;;;;;;3199:145;2998:350;;;:::o;2185:166:12:-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;2085:130:42:-;2161:16;2168:8;2161:6;:16::i;:::-;2153:25;;;;;;;;2206:4;2184:9;:19;2194:8;2184:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;2085:130;;:::o;6999:223:3:-;7136:3;7090:49;;:8;;;;;;;;;;;:23;;;7122:8;7114:17;;7090:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:49;;;;7086:130;;;7155:8;;;;;;;;;;;:26;;;7190:8;7182:17;;7201:3;7155:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7086:130;6999:223;;:::o;5042:315:40:-;5129:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;5170:1;5153:19;;:5;:19;;;;5145:28;;;;;;;;5202:1;5187:17;;:3;:17;;;;5179:26;;;;;;;;5212:30;5226:5;5233:8;5212:13;:30::i;:::-;5248:32;5264:5;5271:8;5248:15;:32::i;:::-;5286:25;5297:3;5302:8;5286:10;:25::i;:::-;5338:3;5322:30;;5331:5;5322:30;;;5343:8;5322:30;;;;;;;;;;;;;;;;;;5042:315;;;;:::o;825:287:12:-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;5964:154:40:-;6055:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6071:42;6088:5;6095:3;6100:8;6071:42;;;;;;;;;;;;;:16;:42::i;:::-;5964:154;;;;:::o;5315:176:42:-;5376:26;5388:3;5393:8;5376:11;:26::i;:::-;5440:9;:16;;;;5413:14;:24;5428:8;5413:24;;;;;;;;;;;:43;;;;5462:9;:24;;;;;;;;;;;:::i;:::-;;;;;;;;;;5477:8;5462:24;;;;;;;5315:176;;:::o;3969:200:40:-;4053:10;4046:17;;:3;:17;;;;4038:26;;;;;;;;4107:9;4070:17;:29;4088:10;4070:29;;;;;;;;;;;;;;;:34;4100:3;4070:34;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;4149:3;4122:42;;4137:10;4122:42;;;4154:9;4122:42;;;;;;;;;;;;;;;;;;;;;;3969:200;;:::o;6794:227::-;6898:8;1516:39;1534:10;1546:8;1516:17;:39::i;:::-;1508:48;;;;;;;;6914:34;6927:5;6934:3;6939:8;6914:12;:34::i;:::-;6962:53;6987:5;6994:3;6999:8;7009:5;6962:24;:53::i;:::-;6954:62;;;;;;;;6794:227;;;;;:::o;7368:240::-;7454:4;7466:13;7482:17;7490:8;7482:7;:17::i;:::-;7466:33;;7524:5;7512:17;;:8;:17;;;:54;;;;7558:8;7533:33;;:21;7545:8;7533:11;:21::i;:::-;:33;;;7512:54;:91;;;;7570:33;7587:5;7594:8;7570:16;:33::i;:::-;7512:91;7505:98;;7368:240;;;;;:::o;8653:260::-;8754:6;8733:27;;:17;8741:8;8733:7;:17::i;:::-;:27;;;8725:36;;;;;;;;8807:1;8771:38;;:14;:24;8786:8;8771:24;;;;;;;;;;;;;;;;;;;;;:38;;;;8767:142;;;8854:1;8819:14;:24;8834:8;8819:24;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;8889:1;8864:38;;8873:6;8864:38;;;8893:8;8864:38;;;;;;;;;;;;;;;;;;8767:142;8653:260;;:::o;4198:856:42:-;4316:18;4369:22;4432:17;4271:38;4293:5;4300:8;4271:21;:38::i;:::-;4337:16;:26;4354:8;4337:26;;;;;;;;;;;;4316:47;;4394:32;4424:1;4394:11;:18;4406:5;4394:18;;;;;;;;;;;;;;;:25;;;;:29;;:32;;;;:::i;:::-;4369:57;;4452:11;:18;4464:5;4452:18;;;;;;;;;;;;;;;4471:14;4452:34;;;;;;;;;;;;;;;;;;;4432:54;;4526:9;4493:11;:18;4505:5;4493:18;;;;;;;;;;;;;;;4512:10;4493:30;;;;;;;;;;;;;;;;;;:42;;;;4578:1;4541:11;:18;4553:5;4541:18;;;;;;;;;;;;;;;4560:14;4541:34;;;;;;;;;;;;;;;;;;:38;;;;4940:11;:18;4952:5;4940:18;;;;;;;;;;;;;;;:27;;;;;;;;;;;;:::i;:::-;;5002:1;4973:16;:26;4990:8;4973:26;;;;;;;;;;;:30;;;;5039:10;5009:16;:27;5026:9;5009:27;;;;;;;;;;;:40;;;;4198:856;;;;;:::o;3697:226::-;3800:14;3763:31;3780:3;3785:8;3763:16;:31::i;:::-;3817:11;:16;3829:3;3817:16;;;;;;;;;;;;;;;:23;;;;3800:40;;3846:11;:16;3858:3;3846:16;;;;;;;;;;;;;;;:31;;;;;;;;;;;:::i;:::-;;;;;;;;;;3868:8;3846:31;;;;;;;3912:6;3883:16;:26;3900:8;3883:26;;;;;;;;;;;:35;;;;3697:226;;;:::o;2357:173:12:-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;7857:164:40:-;7941:1;7926:17;;:3;:17;;;;7918:26;;;;;;;;7950:25;7961:3;7966:8;7950:10;:25::i;:::-;8002:3;7981:35;;7998:1;7981:35;;;8007:8;7981:35;;;;;;;;;;;;;;;;;;7857:164;;:::o;10368:298::-;10479:4;10545:13;10496:16;:3;:14;;;:16::i;:::-;10495:17;10491:49;;;10529:4;10522:11;;;;10491:49;10576:3;10561:36;;;10598:5;10605:8;10615:5;10561:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10545:76:40;;605:10;10645:15;;10635:25;;;:6;:25;;;;10627:34;;10368:298;;;;;;;;:::o;9651:214::-;9753:5;9732:26;;:17;9740:8;9732:7;:17::i;:::-;:26;;;9724:35;;;;;;;;9791:30;9819:1;9791:16;:23;9808:5;9791:23;;;;;;;;;;;;;;;;:27;;:30;;;;:::i;:::-;9765:16;:23;9782:5;9765:23;;;;;;;;;;;;;;;:56;;;;9858:1;9827:10;:20;9838:8;9827:20;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;9651:214;;:::o;835:110:30:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;9172:204:40:-;9278:1;9246:34;;:10;:20;9257:8;9246:20;;;;;;;;;;;;;;;;;;;;;:34;;;9238:43;;;;;;;;9310:3;9287:10;:20;9298:8;9287:20;;;;;;;;;;;;:26;;;;;;;;;;;;;;;;;;9343:28;9369:1;9343:16;:21;9360:3;9343:21;;;;;;;;;;;;;;;;:25;;:28;;;;:::i;:::-;9319:16;:21;9336:3;9319:21;;;;;;;;;;;;;;;:52;;;;9172:204;;:::o;451:150:28:-;508:4;520:12;569:4;557:11;549:25;;595:1;588:4;:8;581:15;;451:150;;;;:::o;1007:129:30:-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o;1226:5998:3:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./DebtRegistry.sol\";\nimport \"./ERC165.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\nimport \"zeppelin-solidity/contracts/token/ERC20/ERC20.sol\";\n\n\n/**\n * The DebtToken contract governs all business logic for making a debt agreement\n * transferable as an ERC721 non-fungible token.  Additionally, the contract\n * allows authorized contracts to trigger the minting of a debt agreement token\n * and, in turn, the insertion of a debt issuance into the DebtRegsitry.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtToken is ERC721Token, ERC165, Pausable {\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    DebtRegistry public registry;\n\n    PermissionsLib.Permissions internal tokenCreationPermissions;\n    PermissionsLib.Permissions internal tokenBrokeragePermissions;\n    PermissionsLib.Permissions internal tokenURIPermissions;\n\n    /**\n     * Constructor that sets the address of the debt registry.\n     */\n    function DebtToken(address _registry)\n        public\n        ERC721Token(\"DebtToken\", \"DDT\")\n    {\n        registry = DebtRegistry(_registry);\n    }\n\n    /**\n     * ERC165 interface.\n     * Returns true for ERC721, false otherwise\n     */\n    function supportsInterface(bytes4 interfaceID)\n        external\n        view\n        returns (bool _isSupported)\n    {\n        return interfaceID == 0x80ac58cd; // ERC721\n    }\n\n    /**\n     * Mints a unique debt token and inserts the associated issuance into\n     * the debt registry, if the calling address is authorized to do so.\n     */\n    function create(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        whenNotPaused\n        returns (uint _tokenId)\n    {\n        require(tokenCreationPermissions.isAuthorized(msg.sender));\n\n        bytes32 entryHash = registry.insert(\n            _version,\n            _beneficiary,\n            _debtor,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            _salt\n        );\n\n        super._mint(_beneficiary, uint(entryHash));\n\n        return uint(entryHash);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to mint debt tokens.\n     */\n    function addAuthorizedMintAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.authorize(_agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to mint debt tokens\n     */\n    function revokeMintAgentAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenCreationPermissions.revokeAuthorization(_agent);\n    }\n\n    /**\n     * Returns the list of agents authorized to mint debt tokens\n     */\n    function getAuthorizedMintAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenCreationPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Adds an address to the list of agents authorized to set token URIs.\n     */\n    function addAuthorizedTokenURIAgent(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.authorize(_agent);\n    }\n\n    /**\n     * Returns the list of agents authorized to set token URIs.\n     */\n    function getAuthorizedTokenURIAgents()\n        public\n        view\n        returns (address[] _agents)\n    {\n        return tokenURIPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Removes an address from the list of agents authorized to set token URIs.\n     */\n    function revokeTokenURIAuthorization(address _agent)\n        public\n        onlyOwner\n    {\n        tokenURIPermissions.revokeAuthorization(_agent);\n    }\n\n    /**\n     * We override approval method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function approve(address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        super.approve(_to, _tokenId);\n    }\n\n    /**\n     * We override setApprovalForAll method of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function setApprovalForAll(address _to, bool _approved)\n        public\n        whenNotPaused\n    {\n        super.setApprovalForAll(_to, _approved);\n    }\n\n    /**\n     * Support deprecated ERC721 method\n     */\n    function transfer(address _to, uint _tokenId)\n        public\n    {\n        safeTransferFrom(msg.sender, _to, _tokenId);\n    }\n\n    /**\n     * We override transferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function transferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.transferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId);\n    }\n\n    /**\n     * We override safeTransferFrom methods of the parent ERC721Token\n     * contract to allow its functionality to be frozen in the case of an emergency\n     */\n    function safeTransferFrom(address _from, address _to, uint _tokenId, bytes _data)\n        public\n        whenNotPaused\n    {\n        _modifyBeneficiary(_tokenId, _to);\n        super.safeTransferFrom(_from, _to, _tokenId, _data);\n    }\n\n    /**\n     * Allows senders with special permissions to set the token URI for a given debt token.\n     */\n    function setTokenURI(uint256 _tokenId, string _uri)\n        public\n        whenNotPaused\n    {\n        require(tokenURIPermissions.isAuthorized(msg.sender));\n        super._setTokenURI(_tokenId, _uri);\n    }\n\n    /**\n     * _modifyBeneficiary mutates the debt registry. This function should be\n     * called every time a token is transferred or minted\n     */\n    function _modifyBeneficiary(uint _tokenId, address _to)\n        internal\n    {\n        if (registry.getBeneficiary(bytes32(_tokenId)) != _to) {\n            registry.modifyBeneficiary(bytes32(_tokenId), _to);\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtToken.sol",
      "exportedSymbols": {
        "DebtToken": [
          2650
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
        "id": 2283,
        "name": "PragmaDirective",
        "src": "584:23:3"
      },
      {
        "attributes": {
          "SourceUnit": 2282,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "./DebtRegistry.sol",
          "scope": 2651,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2284,
        "name": "ImportDirective",
        "src": "609:28:3"
      },
      {
        "attributes": {
          "SourceUnit": 2661,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/ERC165.sol",
          "file": "./ERC165.sol",
          "scope": 2651,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2285,
        "name": "ImportDirective",
        "src": "638:22:3"
      },
      {
        "attributes": {
          "SourceUnit": 8239,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 2651,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2286,
        "name": "ImportDirective",
        "src": "661:60:3"
      },
      {
        "attributes": {
          "SourceUnit": 10063,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
          "file": "zeppelin-solidity/contracts/token/ERC721/ERC721Token.sol",
          "scope": 2651,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2287,
        "name": "ImportDirective",
        "src": "722:66:3"
      },
      {
        "attributes": {
          "SourceUnit": 8532,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "scope": 2651,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2288,
        "name": "ImportDirective",
        "src": "789:59:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            2660,
            8238,
            8392,
            8957,
            8977,
            8984,
            9091,
            9674,
            10062
          ],
          "contractKind": "contract",
          "documentation": "The DebtToken contract governs all business logic for making a debt agreement\ntransferable as an ERC721 non-fungible token.  Additionally, the contract\nallows authorized contracts to trigger the minting of a debt agreement token\nand, in turn, the insertion of a debt issuance into the DebtRegsitry.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2650,
            8238,
            8392,
            2660,
            10062,
            9674,
            8984,
            8977,
            8957,
            9091
          ],
          "name": "DebtToken",
          "scope": 2651
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
                  "referencedDeclaration": 10062,
                  "type": "contract ERC721Token"
                },
                "id": 2289,
                "name": "UserDefinedTypeName",
                "src": "1248:11:3"
              }
            ],
            "id": 2290,
            "name": "InheritanceSpecifier",
            "src": "1248:11:3"
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
                  "referencedDeclaration": 2660,
                  "type": "contract ERC165"
                },
                "id": 2291,
                "name": "UserDefinedTypeName",
                "src": "1261:6:3"
              }
            ],
            "id": 2292,
            "name": "InheritanceSpecifier",
            "src": "1261:6:3"
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
                  "referencedDeclaration": 8238,
                  "type": "contract Pausable"
                },
                "id": 2293,
                "name": "UserDefinedTypeName",
                "src": "1269:8:3"
              }
            ],
            "id": 2294,
            "name": "InheritanceSpecifier",
            "src": "1269:8:3"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 4385,
                  "type": "library PermissionsLib"
                },
                "id": 2295,
                "name": "UserDefinedTypeName",
                "src": "1290:14:3"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 4219,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2296,
                "name": "UserDefinedTypeName",
                "src": "1309:26:3"
              }
            ],
            "id": 2297,
            "name": "UsingForDirective",
            "src": "1284:52:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "registry",
              "scope": 2650,
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
                  "referencedDeclaration": 2281,
                  "type": "contract DebtRegistry"
                },
                "id": 2298,
                "name": "UserDefinedTypeName",
                "src": "1342:12:3"
              }
            ],
            "id": 2299,
            "name": "VariableDeclaration",
            "src": "1342:28:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenCreationPermissions",
              "scope": 2650,
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
                  "referencedDeclaration": 4219,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2300,
                "name": "UserDefinedTypeName",
                "src": "1377:26:3"
              }
            ],
            "id": 2301,
            "name": "VariableDeclaration",
            "src": "1377:60:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenBrokeragePermissions",
              "scope": 2650,
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
                  "referencedDeclaration": 4219,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2302,
                "name": "UserDefinedTypeName",
                "src": "1443:26:3"
              }
            ],
            "id": 2303,
            "name": "VariableDeclaration",
            "src": "1443:61:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenURIPermissions",
              "scope": 2650,
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
                  "referencedDeclaration": 4219,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 2304,
                "name": "UserDefinedTypeName",
                "src": "1510:26:3"
              }
            ],
            "id": 2305,
            "name": "VariableDeclaration",
            "src": "1510:55:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "name": "DebtToken",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2321,
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
                        "id": 2306,
                        "name": "ElementaryTypeName",
                        "src": "1670:7:3"
                      }
                    ],
                    "id": 2307,
                    "name": "VariableDeclaration",
                    "src": "1670:17:3"
                  }
                ],
                "id": 2308,
                "name": "ParameterList",
                "src": "1669:19:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2313,
                "name": "ParameterList",
                "src": "1748:0:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 10062,
                      "type": "type(contract ERC721Token)",
                      "value": "ERC721Token"
                    },
                    "id": 2309,
                    "name": "Identifier",
                    "src": "1712:11:3"
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
                    "id": 2310,
                    "name": "Literal",
                    "src": "1724:11:3"
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
                    "id": 2311,
                    "name": "Literal",
                    "src": "1737:5:3"
                  }
                ],
                "id": 2312,
                "name": "ModifierInvocation",
                "src": "1712:31:3"
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
                              "referencedDeclaration": 2299,
                              "type": "contract DebtRegistry",
                              "value": "registry"
                            },
                            "id": 2314,
                            "name": "Identifier",
                            "src": "1758:8:3"
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
                                  "referencedDeclaration": 2281,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2315,
                                "name": "Identifier",
                                "src": "1769:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2307,
                                  "type": "address",
                                  "value": "_registry"
                                },
                                "id": 2316,
                                "name": "Identifier",
                                "src": "1782:9:3"
                              }
                            ],
                            "id": 2317,
                            "name": "FunctionCall",
                            "src": "1769:23:3"
                          }
                        ],
                        "id": 2318,
                        "name": "Assignment",
                        "src": "1758:34:3"
                      }
                    ],
                    "id": 2319,
                    "name": "ExpressionStatement",
                    "src": "1758:34:3"
                  }
                ],
                "id": 2320,
                "name": "Block",
                "src": "1748:51:3"
              }
            ],
            "id": 2321,
            "name": "FunctionDefinition",
            "src": "1651:148:3"
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
              "scope": 2650,
              "stateMutability": "view",
              "superFunction": 2659,
              "visibility": "external"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "interfaceID",
                      "scope": 2333,
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
                        "id": 2322,
                        "name": "ElementaryTypeName",
                        "src": "1921:6:3"
                      }
                    ],
                    "id": 2323,
                    "name": "VariableDeclaration",
                    "src": "1921:18:3"
                  }
                ],
                "id": 2324,
                "name": "ParameterList",
                "src": "1920:20:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_isSupported",
                      "scope": 2333,
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
                        "id": 2325,
                        "name": "ElementaryTypeName",
                        "src": "1988:4:3"
                      }
                    ],
                    "id": 2326,
                    "name": "VariableDeclaration",
                    "src": "1988:17:3"
                  }
                ],
                "id": 2327,
                "name": "ParameterList",
                "src": "1987:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2327
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
                              "referencedDeclaration": 2323,
                              "type": "bytes4",
                              "value": "interfaceID"
                            },
                            "id": 2328,
                            "name": "Identifier",
                            "src": "2028:11:3"
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
                            "id": 2329,
                            "name": "Literal",
                            "src": "2043:10:3"
                          }
                        ],
                        "id": 2330,
                        "name": "BinaryOperation",
                        "src": "2028:25:3"
                      }
                    ],
                    "id": 2331,
                    "name": "Return",
                    "src": "2021:32:3"
                  }
                ],
                "id": 2332,
                "name": "Block",
                "src": "2011:59:3"
              }
            ],
            "id": 2333,
            "name": "FunctionDefinition",
            "src": "1894:176:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "create",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2392,
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
                        "id": 2334,
                        "name": "ElementaryTypeName",
                        "src": "2264:7:3"
                      }
                    ],
                    "id": 2335,
                    "name": "VariableDeclaration",
                    "src": "2264:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_beneficiary",
                      "scope": 2392,
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
                        "id": 2336,
                        "name": "ElementaryTypeName",
                        "src": "2290:7:3"
                      }
                    ],
                    "id": 2337,
                    "name": "VariableDeclaration",
                    "src": "2290:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 2392,
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
                        "id": 2338,
                        "name": "ElementaryTypeName",
                        "src": "2320:7:3"
                      }
                    ],
                    "id": 2339,
                    "name": "VariableDeclaration",
                    "src": "2320:15:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriter",
                      "scope": 2392,
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
                        "id": 2340,
                        "name": "ElementaryTypeName",
                        "src": "2345:7:3"
                      }
                    ],
                    "id": 2341,
                    "name": "VariableDeclaration",
                    "src": "2345:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriterRiskRating",
                      "scope": 2392,
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
                        "id": 2342,
                        "name": "ElementaryTypeName",
                        "src": "2375:4:3"
                      }
                    ],
                    "id": 2343,
                    "name": "VariableDeclaration",
                    "src": "2375:27:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContract",
                      "scope": 2392,
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
                        "id": 2344,
                        "name": "ElementaryTypeName",
                        "src": "2412:7:3"
                      }
                    ],
                    "id": 2345,
                    "name": "VariableDeclaration",
                    "src": "2412:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContractParameters",
                      "scope": 2392,
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
                        "id": 2346,
                        "name": "ElementaryTypeName",
                        "src": "2444:7:3"
                      }
                    ],
                    "id": 2347,
                    "name": "VariableDeclaration",
                    "src": "2444:32:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 2392,
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
                        "id": 2348,
                        "name": "ElementaryTypeName",
                        "src": "2486:4:3"
                      }
                    ],
                    "id": 2349,
                    "name": "VariableDeclaration",
                    "src": "2486:10:3"
                  }
                ],
                "id": 2350,
                "name": "ParameterList",
                "src": "2254:248:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2392,
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
                        "id": 2353,
                        "name": "ElementaryTypeName",
                        "src": "2557:4:3"
                      }
                    ],
                    "id": 2354,
                    "name": "VariableDeclaration",
                    "src": "2557:13:3"
                  }
                ],
                "id": 2355,
                "name": "ParameterList",
                "src": "2556:15:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2351,
                    "name": "Identifier",
                    "src": "2526:13:3"
                  }
                ],
                "id": 2352,
                "name": "ModifierInvocation",
                "src": "2526:13:3"
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
                              "referencedDeclaration": 10077,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2356,
                            "name": "Identifier",
                            "src": "2586:7:3"
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
                                  "referencedDeclaration": 4356,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2301,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenCreationPermissions"
                                    },
                                    "id": 2357,
                                    "name": "Identifier",
                                    "src": "2594:24:3"
                                  }
                                ],
                                "id": 2358,
                                "name": "MemberAccess",
                                "src": "2594:37:3"
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
                                      "referencedDeclaration": 10074,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2359,
                                    "name": "Identifier",
                                    "src": "2632:3:3"
                                  }
                                ],
                                "id": 2360,
                                "name": "MemberAccess",
                                "src": "2632:10:3"
                              }
                            ],
                            "id": 2361,
                            "name": "FunctionCall",
                            "src": "2594:49:3"
                          }
                        ],
                        "id": 2362,
                        "name": "FunctionCall",
                        "src": "2586:58:3"
                      }
                    ],
                    "id": 2363,
                    "name": "ExpressionStatement",
                    "src": "2586:58:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2365
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "entryHash",
                          "scope": 2392,
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
                            "id": 2364,
                            "name": "ElementaryTypeName",
                            "src": "2655:7:3"
                          }
                        ],
                        "id": 2365,
                        "name": "VariableDeclaration",
                        "src": "2655:17:3"
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
                              "referencedDeclaration": 1983,
                              "type": "function (address,address,address,address,uint256,address,bytes32,uint256) external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2299,
                                  "type": "contract DebtRegistry",
                                  "value": "registry"
                                },
                                "id": 2366,
                                "name": "Identifier",
                                "src": "2675:8:3"
                              }
                            ],
                            "id": 2367,
                            "name": "MemberAccess",
                            "src": "2675:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2335,
                              "type": "address",
                              "value": "_version"
                            },
                            "id": 2368,
                            "name": "Identifier",
                            "src": "2704:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2337,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 2369,
                            "name": "Identifier",
                            "src": "2726:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2339,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 2370,
                            "name": "Identifier",
                            "src": "2752:7:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2341,
                              "type": "address",
                              "value": "_underwriter"
                            },
                            "id": 2371,
                            "name": "Identifier",
                            "src": "2773:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2343,
                              "type": "uint256",
                              "value": "_underwriterRiskRating"
                            },
                            "id": 2372,
                            "name": "Identifier",
                            "src": "2799:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2345,
                              "type": "address",
                              "value": "_termsContract"
                            },
                            "id": 2373,
                            "name": "Identifier",
                            "src": "2835:14:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2347,
                              "type": "bytes32",
                              "value": "_termsContractParameters"
                            },
                            "id": 2374,
                            "name": "Identifier",
                            "src": "2863:24:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2349,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 2375,
                            "name": "Identifier",
                            "src": "2901:5:3"
                          }
                        ],
                        "id": 2376,
                        "name": "FunctionCall",
                        "src": "2675:241:3"
                      }
                    ],
                    "id": 2377,
                    "name": "VariableDeclarationStatement",
                    "src": "2655:261:3"
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
                              "referencedDeclaration": 9982,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2378,
                                "name": "Identifier",
                                "src": "2927:5:3"
                              }
                            ],
                            "id": 2380,
                            "name": "MemberAccess",
                            "src": "2927:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2337,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 2381,
                            "name": "Identifier",
                            "src": "2939:12:3"
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
                                "id": 2382,
                                "name": "ElementaryTypeNameExpression",
                                "src": "2953:4:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2365,
                                  "type": "bytes32",
                                  "value": "entryHash"
                                },
                                "id": 2383,
                                "name": "Identifier",
                                "src": "2958:9:3"
                              }
                            ],
                            "id": 2384,
                            "name": "FunctionCall",
                            "src": "2953:15:3"
                          }
                        ],
                        "id": 2385,
                        "name": "FunctionCall",
                        "src": "2927:42:3"
                      }
                    ],
                    "id": 2386,
                    "name": "ExpressionStatement",
                    "src": "2927:42:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2355
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
                            "id": 2387,
                            "name": "ElementaryTypeNameExpression",
                            "src": "2987:4:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2365,
                              "type": "bytes32",
                              "value": "entryHash"
                            },
                            "id": 2388,
                            "name": "Identifier",
                            "src": "2992:9:3"
                          }
                        ],
                        "id": 2389,
                        "name": "FunctionCall",
                        "src": "2987:15:3"
                      }
                    ],
                    "id": 2390,
                    "name": "Return",
                    "src": "2980:22:3"
                  }
                ],
                "id": 2391,
                "name": "Block",
                "src": "2576:433:3"
              }
            ],
            "id": 2392,
            "name": "FunctionDefinition",
            "src": "2239:770:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedMintAgent",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2406,
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
                        "id": 2393,
                        "name": "ElementaryTypeName",
                        "src": "3140:7:3"
                      }
                    ],
                    "id": 2394,
                    "name": "VariableDeclaration",
                    "src": "3140:14:3"
                  }
                ],
                "id": 2395,
                "name": "ParameterList",
                "src": "3139:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2398,
                "name": "ParameterList",
                "src": "3193:0:3"
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
                      "referencedDeclaration": 8366,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2396,
                    "name": "Identifier",
                    "src": "3179:9:3"
                  }
                ],
                "id": 2397,
                "name": "ModifierInvocation",
                "src": "3179:9:3"
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 4262,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2301,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 2399,
                                "name": "Identifier",
                                "src": "3203:24:3"
                              }
                            ],
                            "id": 2401,
                            "name": "MemberAccess",
                            "src": "3203:34:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2394,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 2402,
                            "name": "Identifier",
                            "src": "3238:6:3"
                          }
                        ],
                        "id": 2403,
                        "name": "FunctionCall",
                        "src": "3203:42:3"
                      }
                    ],
                    "id": 2404,
                    "name": "ExpressionStatement",
                    "src": "3203:42:3"
                  }
                ],
                "id": 2405,
                "name": "Block",
                "src": "3193:59:3"
              }
            ],
            "id": 2406,
            "name": "FunctionDefinition",
            "src": "3108:144:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeMintAgentAuthorization",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2420,
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
                        "id": 2407,
                        "name": "ElementaryTypeName",
                        "src": "3393:7:3"
                      }
                    ],
                    "id": 2408,
                    "name": "VariableDeclaration",
                    "src": "3393:14:3"
                  }
                ],
                "id": 2409,
                "name": "ParameterList",
                "src": "3392:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2412,
                "name": "ParameterList",
                "src": "3446:0:3"
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
                      "referencedDeclaration": 8366,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2410,
                    "name": "Identifier",
                    "src": "3432:9:3"
                  }
                ],
                "id": 2411,
                "name": "ModifierInvocation",
                "src": "3432:9:3"
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 4341,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2301,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 2413,
                                "name": "Identifier",
                                "src": "3456:24:3"
                              }
                            ],
                            "id": 2415,
                            "name": "MemberAccess",
                            "src": "3456:44:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2408,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 2416,
                            "name": "Identifier",
                            "src": "3501:6:3"
                          }
                        ],
                        "id": 2417,
                        "name": "FunctionCall",
                        "src": "3456:52:3"
                      }
                    ],
                    "id": 2418,
                    "name": "ExpressionStatement",
                    "src": "3456:52:3"
                  }
                ],
                "id": 2419,
                "name": "Block",
                "src": "3446:69:3"
              }
            ],
            "id": 2420,
            "name": "FunctionDefinition",
            "src": "3355:160:3"
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
              "scope": 2650,
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
                "id": 2421,
                "name": "ParameterList",
                "src": "3634:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agents",
                      "scope": 2431,
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
                            "id": 2422,
                            "name": "ElementaryTypeName",
                            "src": "3682:7:3"
                          }
                        ],
                        "id": 2423,
                        "name": "ArrayTypeName",
                        "src": "3682:9:3"
                      }
                    ],
                    "id": 2424,
                    "name": "VariableDeclaration",
                    "src": "3682:17:3"
                  }
                ],
                "id": 2425,
                "name": "ParameterList",
                "src": "3681:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2425
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
                              "referencedDeclaration": 4384,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2301,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenCreationPermissions"
                                },
                                "id": 2426,
                                "name": "Identifier",
                                "src": "3722:24:3"
                              }
                            ],
                            "id": 2427,
                            "name": "MemberAccess",
                            "src": "3722:44:3"
                          }
                        ],
                        "id": 2428,
                        "name": "FunctionCall",
                        "src": "3722:46:3"
                      }
                    ],
                    "id": 2429,
                    "name": "Return",
                    "src": "3715:53:3"
                  }
                ],
                "id": 2430,
                "name": "Block",
                "src": "3705:70:3"
              }
            ],
            "id": 2431,
            "name": "FunctionDefinition",
            "src": "3602:173:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedTokenURIAgent",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2445,
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
                        "id": 2432,
                        "name": "ElementaryTypeName",
                        "src": "3908:7:3"
                      }
                    ],
                    "id": 2433,
                    "name": "VariableDeclaration",
                    "src": "3908:14:3"
                  }
                ],
                "id": 2434,
                "name": "ParameterList",
                "src": "3907:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2437,
                "name": "ParameterList",
                "src": "3961:0:3"
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
                      "referencedDeclaration": 8366,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2435,
                    "name": "Identifier",
                    "src": "3947:9:3"
                  }
                ],
                "id": 2436,
                "name": "ModifierInvocation",
                "src": "3947:9:3"
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "authorize",
                              "referencedDeclaration": 4262,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2305,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenURIPermissions"
                                },
                                "id": 2438,
                                "name": "Identifier",
                                "src": "3971:19:3"
                              }
                            ],
                            "id": 2440,
                            "name": "MemberAccess",
                            "src": "3971:29:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2433,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 2441,
                            "name": "Identifier",
                            "src": "4001:6:3"
                          }
                        ],
                        "id": 2442,
                        "name": "FunctionCall",
                        "src": "3971:37:3"
                      }
                    ],
                    "id": 2443,
                    "name": "ExpressionStatement",
                    "src": "3971:37:3"
                  }
                ],
                "id": 2444,
                "name": "Block",
                "src": "3961:54:3"
              }
            ],
            "id": 2445,
            "name": "FunctionDefinition",
            "src": "3872:143:3"
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
              "scope": 2650,
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
                "id": 2446,
                "name": "ParameterList",
                "src": "4137:2:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_agents",
                      "scope": 2456,
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
                            "id": 2447,
                            "name": "ElementaryTypeName",
                            "src": "4185:7:3"
                          }
                        ],
                        "id": 2448,
                        "name": "ArrayTypeName",
                        "src": "4185:9:3"
                      }
                    ],
                    "id": 2449,
                    "name": "VariableDeclaration",
                    "src": "4185:17:3"
                  }
                ],
                "id": 2450,
                "name": "ParameterList",
                "src": "4184:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2450
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
                              "referencedDeclaration": 4384,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2305,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenURIPermissions"
                                },
                                "id": 2451,
                                "name": "Identifier",
                                "src": "4225:19:3"
                              }
                            ],
                            "id": 2452,
                            "name": "MemberAccess",
                            "src": "4225:39:3"
                          }
                        ],
                        "id": 2453,
                        "name": "FunctionCall",
                        "src": "4225:41:3"
                      }
                    ],
                    "id": 2454,
                    "name": "Return",
                    "src": "4218:48:3"
                  }
                ],
                "id": 2455,
                "name": "Block",
                "src": "4208:65:3"
              }
            ],
            "id": 2456,
            "name": "FunctionDefinition",
            "src": "4101:172:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeTokenURIAuthorization",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2470,
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
                        "id": 2457,
                        "name": "ElementaryTypeName",
                        "src": "4412:7:3"
                      }
                    ],
                    "id": 2458,
                    "name": "VariableDeclaration",
                    "src": "4412:14:3"
                  }
                ],
                "id": 2459,
                "name": "ParameterList",
                "src": "4411:16:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2462,
                "name": "ParameterList",
                "src": "4465:0:3"
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
                      "referencedDeclaration": 8366,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2460,
                    "name": "Identifier",
                    "src": "4451:9:3"
                  }
                ],
                "id": 2461,
                "name": "ModifierInvocation",
                "src": "4451:9:3"
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
                                }
                              ],
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "revokeAuthorization",
                              "referencedDeclaration": 4341,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2305,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "tokenURIPermissions"
                                },
                                "id": 2463,
                                "name": "Identifier",
                                "src": "4475:19:3"
                              }
                            ],
                            "id": 2465,
                            "name": "MemberAccess",
                            "src": "4475:39:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2458,
                              "type": "address",
                              "value": "_agent"
                            },
                            "id": 2466,
                            "name": "Identifier",
                            "src": "4515:6:3"
                          }
                        ],
                        "id": 2467,
                        "name": "FunctionCall",
                        "src": "4475:47:3"
                      }
                    ],
                    "id": 2468,
                    "name": "ExpressionStatement",
                    "src": "4475:47:3"
                  }
                ],
                "id": 2469,
                "name": "Block",
                "src": "4465:64:3"
              }
            ],
            "id": 2470,
            "name": "FunctionDefinition",
            "src": "4375:154:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "approve",
              "payable": false,
              "scope": 2650,
              "stateMutability": "nonpayable",
              "superFunction": 9279,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2487,
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
                        "id": 2471,
                        "name": "ElementaryTypeName",
                        "src": "4713:7:3"
                      }
                    ],
                    "id": 2472,
                    "name": "VariableDeclaration",
                    "src": "4713:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2487,
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
                        "id": 2473,
                        "name": "ElementaryTypeName",
                        "src": "4726:4:3"
                      }
                    ],
                    "id": 2474,
                    "name": "VariableDeclaration",
                    "src": "4726:13:3"
                  }
                ],
                "id": 2475,
                "name": "ParameterList",
                "src": "4712:28:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2478,
                "name": "ParameterList",
                "src": "4782:0:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2476,
                    "name": "Identifier",
                    "src": "4764:13:3"
                  }
                ],
                "id": 2477,
                "name": "ModifierInvocation",
                "src": "4764:13:3"
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
                              "referencedDeclaration": 9279,
                              "type": "function (address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2479,
                                "name": "Identifier",
                                "src": "4792:5:3"
                              }
                            ],
                            "id": 2481,
                            "name": "MemberAccess",
                            "src": "4792:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2472,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2482,
                            "name": "Identifier",
                            "src": "4806:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2474,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2483,
                            "name": "Identifier",
                            "src": "4811:8:3"
                          }
                        ],
                        "id": 2484,
                        "name": "FunctionCall",
                        "src": "4792:28:3"
                      }
                    ],
                    "id": 2485,
                    "name": "ExpressionStatement",
                    "src": "4792:28:3"
                  }
                ],
                "id": 2486,
                "name": "Block",
                "src": "4782:45:3"
              }
            ],
            "id": 2487,
            "name": "FunctionDefinition",
            "src": "4696:131:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setApprovalForAll",
              "payable": false,
              "scope": 2650,
              "stateMutability": "nonpayable",
              "superFunction": 9322,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2504,
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
                        "id": 2488,
                        "name": "ElementaryTypeName",
                        "src": "5030:7:3"
                      }
                    ],
                    "id": 2489,
                    "name": "VariableDeclaration",
                    "src": "5030:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 2504,
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
                        "id": 2490,
                        "name": "ElementaryTypeName",
                        "src": "5043:4:3"
                      }
                    ],
                    "id": 2491,
                    "name": "VariableDeclaration",
                    "src": "5043:14:3"
                  }
                ],
                "id": 2492,
                "name": "ParameterList",
                "src": "5029:29:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2495,
                "name": "ParameterList",
                "src": "5100:0:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2493,
                    "name": "Identifier",
                    "src": "5082:13:3"
                  }
                ],
                "id": 2494,
                "name": "ModifierInvocation",
                "src": "5082:13:3"
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
                              "referencedDeclaration": 9322,
                              "type": "function (address,bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2496,
                                "name": "Identifier",
                                "src": "5110:5:3"
                              }
                            ],
                            "id": 2498,
                            "name": "MemberAccess",
                            "src": "5110:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2489,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2499,
                            "name": "Identifier",
                            "src": "5134:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2491,
                              "type": "bool",
                              "value": "_approved"
                            },
                            "id": 2500,
                            "name": "Identifier",
                            "src": "5139:9:3"
                          }
                        ],
                        "id": 2501,
                        "name": "FunctionCall",
                        "src": "5110:39:3"
                      }
                    ],
                    "id": 2502,
                    "name": "ExpressionStatement",
                    "src": "5110:39:3"
                  }
                ],
                "id": 2503,
                "name": "Block",
                "src": "5100:56:3"
              }
            ],
            "id": 2504,
            "name": "FunctionDefinition",
            "src": "5003:153:3"
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
              "scope": 2650,
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
                      "scope": 2519,
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
                        "id": 2505,
                        "name": "ElementaryTypeName",
                        "src": "5236:7:3"
                      }
                    ],
                    "id": 2506,
                    "name": "VariableDeclaration",
                    "src": "5236:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2519,
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
                        "id": 2507,
                        "name": "ElementaryTypeName",
                        "src": "5249:4:3"
                      }
                    ],
                    "id": 2508,
                    "name": "VariableDeclaration",
                    "src": "5249:13:3"
                  }
                ],
                "id": 2509,
                "name": "ParameterList",
                "src": "5235:28:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2510,
                "name": "ParameterList",
                "src": "5283:0:3"
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
                                2569,
                                2597
                              ],
                              "referencedDeclaration": 2569,
                              "type": "function (address,address,uint256)",
                              "value": "safeTransferFrom"
                            },
                            "id": 2511,
                            "name": "Identifier",
                            "src": "5293:16:3"
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
                                  "referencedDeclaration": 10074,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 2512,
                                "name": "Identifier",
                                "src": "5310:3:3"
                              }
                            ],
                            "id": 2513,
                            "name": "MemberAccess",
                            "src": "5310:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2506,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2514,
                            "name": "Identifier",
                            "src": "5322:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2508,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2515,
                            "name": "Identifier",
                            "src": "5327:8:3"
                          }
                        ],
                        "id": 2516,
                        "name": "FunctionCall",
                        "src": "5293:43:3"
                      }
                    ],
                    "id": 2517,
                    "name": "ExpressionStatement",
                    "src": "5293:43:3"
                  }
                ],
                "id": 2518,
                "name": "Block",
                "src": "5283:60:3"
              }
            ],
            "id": 2519,
            "name": "FunctionDefinition",
            "src": "5218:125:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 2650,
              "stateMutability": "nonpayable",
              "superFunction": 9388,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 2544,
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
                        "id": 2520,
                        "name": "ElementaryTypeName",
                        "src": "5537:7:3"
                      }
                    ],
                    "id": 2521,
                    "name": "VariableDeclaration",
                    "src": "5537:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2544,
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
                        "id": 2522,
                        "name": "ElementaryTypeName",
                        "src": "5552:7:3"
                      }
                    ],
                    "id": 2523,
                    "name": "VariableDeclaration",
                    "src": "5552:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2544,
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
                        "id": 2524,
                        "name": "ElementaryTypeName",
                        "src": "5565:4:3"
                      }
                    ],
                    "id": 2525,
                    "name": "VariableDeclaration",
                    "src": "5565:13:3"
                  }
                ],
                "id": 2526,
                "name": "ParameterList",
                "src": "5536:43:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2529,
                "name": "ParameterList",
                "src": "5621:0:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2527,
                    "name": "Identifier",
                    "src": "5603:13:3"
                  }
                ],
                "id": 2528,
                "name": "ModifierInvocation",
                "src": "5603:13:3"
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
                              "referencedDeclaration": 2649,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 2530,
                            "name": "Identifier",
                            "src": "5631:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2525,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2531,
                            "name": "Identifier",
                            "src": "5650:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2523,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2532,
                            "name": "Identifier",
                            "src": "5660:3:3"
                          }
                        ],
                        "id": 2533,
                        "name": "FunctionCall",
                        "src": "5631:33:3"
                      }
                    ],
                    "id": 2534,
                    "name": "ExpressionStatement",
                    "src": "5631:33:3"
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
                              "referencedDeclaration": 9388,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2535,
                                "name": "Identifier",
                                "src": "5674:5:3"
                              }
                            ],
                            "id": 2537,
                            "name": "MemberAccess",
                            "src": "5674:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2521,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 2538,
                            "name": "Identifier",
                            "src": "5693:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2523,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2539,
                            "name": "Identifier",
                            "src": "5700:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2525,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2540,
                            "name": "Identifier",
                            "src": "5705:8:3"
                          }
                        ],
                        "id": 2541,
                        "name": "FunctionCall",
                        "src": "5674:40:3"
                      }
                    ],
                    "id": 2542,
                    "name": "ExpressionStatement",
                    "src": "5674:40:3"
                  }
                ],
                "id": 2543,
                "name": "Block",
                "src": "5621:100:3"
              }
            ],
            "id": 2544,
            "name": "FunctionDefinition",
            "src": "5515:206:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 2650,
              "stateMutability": "nonpayable",
              "superFunction": 9408,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 2569,
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
                        "id": 2545,
                        "name": "ElementaryTypeName",
                        "src": "5923:7:3"
                      }
                    ],
                    "id": 2546,
                    "name": "VariableDeclaration",
                    "src": "5923:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2569,
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
                        "id": 2547,
                        "name": "ElementaryTypeName",
                        "src": "5938:7:3"
                      }
                    ],
                    "id": 2548,
                    "name": "VariableDeclaration",
                    "src": "5938:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2569,
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
                        "id": 2549,
                        "name": "ElementaryTypeName",
                        "src": "5951:4:3"
                      }
                    ],
                    "id": 2550,
                    "name": "VariableDeclaration",
                    "src": "5951:13:3"
                  }
                ],
                "id": 2551,
                "name": "ParameterList",
                "src": "5922:43:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2554,
                "name": "ParameterList",
                "src": "6007:0:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2552,
                    "name": "Identifier",
                    "src": "5989:13:3"
                  }
                ],
                "id": 2553,
                "name": "ModifierInvocation",
                "src": "5989:13:3"
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
                              "referencedDeclaration": 2649,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 2555,
                            "name": "Identifier",
                            "src": "6017:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2550,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2556,
                            "name": "Identifier",
                            "src": "6036:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2548,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2557,
                            "name": "Identifier",
                            "src": "6046:3:3"
                          }
                        ],
                        "id": 2558,
                        "name": "FunctionCall",
                        "src": "6017:33:3"
                      }
                    ],
                    "id": 2559,
                    "name": "ExpressionStatement",
                    "src": "6017:33:3"
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
                              "referencedDeclaration": 9408,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2560,
                                "name": "Identifier",
                                "src": "6060:5:3"
                              }
                            ],
                            "id": 2562,
                            "name": "MemberAccess",
                            "src": "6060:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2546,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 2563,
                            "name": "Identifier",
                            "src": "6083:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2548,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2564,
                            "name": "Identifier",
                            "src": "6090:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2550,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2565,
                            "name": "Identifier",
                            "src": "6095:8:3"
                          }
                        ],
                        "id": 2566,
                        "name": "FunctionCall",
                        "src": "6060:44:3"
                      }
                    ],
                    "id": 2567,
                    "name": "ExpressionStatement",
                    "src": "6060:44:3"
                  }
                ],
                "id": 2568,
                "name": "Block",
                "src": "6007:104:3"
              }
            ],
            "id": 2569,
            "name": "FunctionDefinition",
            "src": "5897:214:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "safeTransferFrom",
              "payable": false,
              "scope": 2650,
              "stateMutability": "nonpayable",
              "superFunction": 9438,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 2597,
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
                        "id": 2570,
                        "name": "ElementaryTypeName",
                        "src": "6313:7:3"
                      }
                    ],
                    "id": 2571,
                    "name": "VariableDeclaration",
                    "src": "6313:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2597,
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
                        "id": 2572,
                        "name": "ElementaryTypeName",
                        "src": "6328:7:3"
                      }
                    ],
                    "id": 2573,
                    "name": "VariableDeclaration",
                    "src": "6328:11:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 2597,
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
                        "id": 2574,
                        "name": "ElementaryTypeName",
                        "src": "6341:4:3"
                      }
                    ],
                    "id": 2575,
                    "name": "VariableDeclaration",
                    "src": "6341:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_data",
                      "scope": 2597,
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
                        "id": 2576,
                        "name": "ElementaryTypeName",
                        "src": "6356:5:3"
                      }
                    ],
                    "id": 2577,
                    "name": "VariableDeclaration",
                    "src": "6356:11:3"
                  }
                ],
                "id": 2578,
                "name": "ParameterList",
                "src": "6312:56:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2581,
                "name": "ParameterList",
                "src": "6410:0:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2579,
                    "name": "Identifier",
                    "src": "6392:13:3"
                  }
                ],
                "id": 2580,
                "name": "ModifierInvocation",
                "src": "6392:13:3"
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
                              "referencedDeclaration": 2649,
                              "type": "function (uint256,address)",
                              "value": "_modifyBeneficiary"
                            },
                            "id": 2582,
                            "name": "Identifier",
                            "src": "6420:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2575,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2583,
                            "name": "Identifier",
                            "src": "6439:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2573,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2584,
                            "name": "Identifier",
                            "src": "6449:3:3"
                          }
                        ],
                        "id": 2585,
                        "name": "FunctionCall",
                        "src": "6420:33:3"
                      }
                    ],
                    "id": 2586,
                    "name": "ExpressionStatement",
                    "src": "6420:33:3"
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
                              "referencedDeclaration": 9438,
                              "type": "function (address,address,uint256,bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2587,
                                "name": "Identifier",
                                "src": "6463:5:3"
                              }
                            ],
                            "id": 2589,
                            "name": "MemberAccess",
                            "src": "6463:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2571,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 2590,
                            "name": "Identifier",
                            "src": "6486:5:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2573,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2591,
                            "name": "Identifier",
                            "src": "6493:3:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2575,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2592,
                            "name": "Identifier",
                            "src": "6498:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2577,
                              "type": "bytes memory",
                              "value": "_data"
                            },
                            "id": 2593,
                            "name": "Identifier",
                            "src": "6508:5:3"
                          }
                        ],
                        "id": 2594,
                        "name": "FunctionCall",
                        "src": "6463:51:3"
                      }
                    ],
                    "id": 2595,
                    "name": "ExpressionStatement",
                    "src": "6463:51:3"
                  }
                ],
                "id": 2596,
                "name": "Block",
                "src": "6410:111:3"
              }
            ],
            "id": 2597,
            "name": "FunctionDefinition",
            "src": "6287:234:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setTokenURI",
              "payable": false,
              "scope": 2650,
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
                      "scope": 2622,
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
                        "id": 2598,
                        "name": "ElementaryTypeName",
                        "src": "6656:7:3"
                      }
                    ],
                    "id": 2599,
                    "name": "VariableDeclaration",
                    "src": "6656:16:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_uri",
                      "scope": 2622,
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
                        "id": 2600,
                        "name": "ElementaryTypeName",
                        "src": "6674:6:3"
                      }
                    ],
                    "id": 2601,
                    "name": "VariableDeclaration",
                    "src": "6674:11:3"
                  }
                ],
                "id": 2602,
                "name": "ParameterList",
                "src": "6655:31:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2605,
                "name": "ParameterList",
                "src": "6728:0:3"
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
                      "referencedDeclaration": 8199,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 2603,
                    "name": "Identifier",
                    "src": "6710:13:3"
                  }
                ],
                "id": 2604,
                "name": "ModifierInvocation",
                "src": "6710:13:3"
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
                              "referencedDeclaration": 10077,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2606,
                            "name": "Identifier",
                            "src": "6738:7:3"
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
                                  "referencedDeclaration": 4356,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2305,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "tokenURIPermissions"
                                    },
                                    "id": 2607,
                                    "name": "Identifier",
                                    "src": "6746:19:3"
                                  }
                                ],
                                "id": 2608,
                                "name": "MemberAccess",
                                "src": "6746:32:3"
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
                                      "referencedDeclaration": 10074,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2609,
                                    "name": "Identifier",
                                    "src": "6779:3:3"
                                  }
                                ],
                                "id": 2610,
                                "name": "MemberAccess",
                                "src": "6779:10:3"
                              }
                            ],
                            "id": 2611,
                            "name": "FunctionCall",
                            "src": "6746:44:3"
                          }
                        ],
                        "id": 2612,
                        "name": "FunctionCall",
                        "src": "6738:53:3"
                      }
                    ],
                    "id": 2613,
                    "name": "ExpressionStatement",
                    "src": "6738:53:3"
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
                              "referencedDeclaration": 9794,
                              "type": "function (uint256,string memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 10128,
                                  "type": "contract super DebtToken",
                                  "value": "super"
                                },
                                "id": 2614,
                                "name": "Identifier",
                                "src": "6801:5:3"
                              }
                            ],
                            "id": 2616,
                            "name": "MemberAccess",
                            "src": "6801:18:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2599,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 2617,
                            "name": "Identifier",
                            "src": "6820:8:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2601,
                              "type": "string memory",
                              "value": "_uri"
                            },
                            "id": 2618,
                            "name": "Identifier",
                            "src": "6830:4:3"
                          }
                        ],
                        "id": 2619,
                        "name": "FunctionCall",
                        "src": "6801:34:3"
                      }
                    ],
                    "id": 2620,
                    "name": "ExpressionStatement",
                    "src": "6801:34:3"
                  }
                ],
                "id": 2621,
                "name": "Block",
                "src": "6728:114:3"
              }
            ],
            "id": 2622,
            "name": "FunctionDefinition",
            "src": "6635:207:3"
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
              "scope": 2650,
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
                      "scope": 2649,
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
                        "id": 2623,
                        "name": "ElementaryTypeName",
                        "src": "7027:4:3"
                      }
                    ],
                    "id": 2624,
                    "name": "VariableDeclaration",
                    "src": "7027:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 2649,
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
                        "id": 2625,
                        "name": "ElementaryTypeName",
                        "src": "7042:7:3"
                      }
                    ],
                    "id": 2626,
                    "name": "VariableDeclaration",
                    "src": "7042:11:3"
                  }
                ],
                "id": 2627,
                "name": "ParameterList",
                "src": "7026:28:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2628,
                "name": "ParameterList",
                "src": "7076:0:3"
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
                                  "referencedDeclaration": 2156,
                                  "type": "function (bytes32) view external returns (address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2299,
                                      "type": "contract DebtRegistry",
                                      "value": "registry"
                                    },
                                    "id": 2629,
                                    "name": "Identifier",
                                    "src": "7090:8:3"
                                  }
                                ],
                                "id": 2630,
                                "name": "MemberAccess",
                                "src": "7090:23:3"
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
                                    "id": 2631,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "7114:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2624,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 2632,
                                    "name": "Identifier",
                                    "src": "7122:8:3"
                                  }
                                ],
                                "id": 2633,
                                "name": "FunctionCall",
                                "src": "7114:17:3"
                              }
                            ],
                            "id": 2634,
                            "name": "FunctionCall",
                            "src": "7090:42:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2626,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 2635,
                            "name": "Identifier",
                            "src": "7136:3:3"
                          }
                        ],
                        "id": 2636,
                        "name": "BinaryOperation",
                        "src": "7090:49:3"
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
                                      "referencedDeclaration": 2021,
                                      "type": "function (bytes32,address) external"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2299,
                                          "type": "contract DebtRegistry",
                                          "value": "registry"
                                        },
                                        "id": 2637,
                                        "name": "Identifier",
                                        "src": "7155:8:3"
                                      }
                                    ],
                                    "id": 2639,
                                    "name": "MemberAccess",
                                    "src": "7155:26:3"
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
                                        "id": 2640,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "7182:7:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2624,
                                          "type": "uint256",
                                          "value": "_tokenId"
                                        },
                                        "id": 2641,
                                        "name": "Identifier",
                                        "src": "7190:8:3"
                                      }
                                    ],
                                    "id": 2642,
                                    "name": "FunctionCall",
                                    "src": "7182:17:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2626,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 2643,
                                    "name": "Identifier",
                                    "src": "7201:3:3"
                                  }
                                ],
                                "id": 2644,
                                "name": "FunctionCall",
                                "src": "7155:50:3"
                              }
                            ],
                            "id": 2645,
                            "name": "ExpressionStatement",
                            "src": "7155:50:3"
                          }
                        ],
                        "id": 2646,
                        "name": "Block",
                        "src": "7141:75:3"
                      }
                    ],
                    "id": 2647,
                    "name": "IfStatement",
                    "src": "7086:130:3"
                  }
                ],
                "id": 2648,
                "name": "Block",
                "src": "7076:146:3"
              }
            ],
            "id": 2649,
            "name": "FunctionDefinition",
            "src": "6999:223:3"
          }
        ],
        "id": 2650,
        "name": "ContractDefinition",
        "src": "1226:5998:3"
      }
    ],
    "id": 2651,
    "name": "SourceUnit",
    "src": "584:6641:3"
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
        }
      },
      "links": {},
      "address": "0xa55ae145255a7ce7e7b8bc36b81543445f32af48"
    },
    "42": {
      "events": {},
      "links": {},
      "address": "0x75572c71c14a979c42b2e1189a5f1332e0c9a940"
    },
    "70": {
      "events": {},
      "links": {},
      "address": "0x6dbab0eda711773933a451faadf3d7d0dfd86c6a"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-01T21:58:19.850Z"
}