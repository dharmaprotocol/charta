export const NonFungibleToken = 
{
  "contractName": "NonFungibleToken",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "_name",
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
          "name": "_approved",
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
      "constant": true,
      "inputs": [],
      "name": "implementsERC721",
      "outputs": [
        {
          "name": "_implementsERC721",
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
      "name": "totalSupply",
      "outputs": [
        {
          "name": "_totalSupply",
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
          "name": "_tokenId",
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "name": "_owner",
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
          "name": "_tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenMetadata",
      "outputs": [
        {
          "name": "_infoUrl",
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
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "_balance",
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
      "name": "symbol",
      "outputs": [
        {
          "name": "_symbol",
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
      "name": "numTokensTotal",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getOwnerTokens",
      "outputs": [
        {
          "name": "_tokenIds",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
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
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6113d08061001e6000396000f3006060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063081812fc14610163578063095ea7b3146101c65780631051db341461020857806318160ddd1461023557806323b872dd1461025e5780632f745c59146102bf5780636352211e146103155780636914db601461037857806370a082311461041457806395d89b4114610461578063a9059cbb146104ef578063af129dc214610531578063d63d4af01461055a575b600080fd5b34156100e057600080fd5b6100e86105e8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012857808201518184015260208101905061010d565b50505050905090810190601f1680156101555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016e57600080fd5b6101846004808035906020019091905050610690565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101d157600080fd5b610206600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106a2565b005b341561021357600080fd5b61021b61084f565b604051808215151515815260200191505060405180910390f35b341561024057600080fd5b610248610858565b6040518082815260200191505060405180910390f35b341561026957600080fd5b6102bd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610862565b005b34156102ca57600080fd5b6102ff600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a2d565b6040518082815260200191505060405180910390f35b341561032057600080fd5b6103366004808035906020019091905050610a41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038357600080fd5b6103996004808035906020019091905050610a53565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103d95780820151818401526020810190506103be565b50505050905090810190601f1680156104065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561041f57600080fd5b61044b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b0e565b6040518082815260200191505060405180910390f35b341561046c57600080fd5b610474610b5a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104b4578082015181840152602081019050610499565b50505050905090810190601f1680156104e15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104fa57600080fd5b61052f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c02565b005b341561053c57600080fd5b610544610d8a565b6040518082815260200191505060405180910390f35b341561056557600080fd5b610591600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d90565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105d45780820151818401526020810190506105b9565b505050509050019250505060405180910390f35b6105f06112ff565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106865780601f1061065b57610100808354040283529160200191610686565b820191906000526020600020905b81548152906001019060200180831161066957829003601f168201915b5050505050905090565b600061069b82610da8565b9050919050565b80600073ffffffffffffffffffffffffffffffffffffffff166106c482610a41565b73ffffffffffffffffffffffffffffffffffffffff16141515156106e757600080fd5b6106f082610a41565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072957600080fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561076457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661078583610da8565b73ffffffffffffffffffffffffffffffffffffffff161415806107d55750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561084a576107e48383610de5565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60006001905090565b6000600254905090565b80600073ffffffffffffffffffffffffffffffffffffffff1661088482610a41565b73ffffffffffffffffffffffffffffffffffffffff16141515156108a757600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108c783610690565b73ffffffffffffffffffffffffffffffffffffffff161415156108e957600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1661090983610a41565b73ffffffffffffffffffffffffffffffffffffffff1614151561092b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561096757600080fd5b610972848484610e3b565b60008473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610a398383610e67565b905092915050565b6000610a4c82610ec9565b9050919050565b610a5b6112ff565b600560008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b025780601f10610ad757610100808354040283529160200191610b02565b820191906000526020600020905b815481529060010190602001808311610ae557829003601f168201915b50505050509050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b610b626112ff565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050505050905090565b80600073ffffffffffffffffffffffffffffffffffffffff16610c2482610a41565b73ffffffffffffffffffffffffffffffffffffffff1614151515610c4757600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610c6783610a41565b73ffffffffffffffffffffffffffffffffffffffff16141515610c8957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cc557600080fd5b610cd0338484610e3b565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b60025481565b610d98611313565b610da182610f06565b9050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610e4481610fa3565b610e4e8382610ff9565b610e5881836111e2565b610e628282611238565b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610eb557fe5b906000526020600020900154905092915050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610f0e611313565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f9757602002820191906000526020600020905b815481526020019060010190808311610f83575b50505050509050919050565b60006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050925060076000858152602001908152602001600020549150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156110a857fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561110357fe5b906000526020600020900181905550816007600083815260200190815260200160002081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001840381548110151561117957fe5b906000526020600020900160009055600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036111da9190611327565b505050505050565b806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816112899190611353565b9160005260206000209001600083909190915055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500360076000838152602001908152602001600020819055505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b81548183558181151161134e5781836000526020600020918201910161134d919061137f565b5b505050565b81548183558181151161137a57818360005260206000209182019101611379919061137f565b5b505050565b6113a191905b8082111561139d576000816000905550600101611385565b5090565b905600a165627a7a72305820b171a81aa98f6dadfe84ee7c2cebc2e93c54f3c2af036be668b92646784d773b0029",
  "deployedBytecode": "0x6060604052600436106100d0576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100d5578063081812fc14610163578063095ea7b3146101c65780631051db341461020857806318160ddd1461023557806323b872dd1461025e5780632f745c59146102bf5780636352211e146103155780636914db601461037857806370a082311461041457806395d89b4114610461578063a9059cbb146104ef578063af129dc214610531578063d63d4af01461055a575b600080fd5b34156100e057600080fd5b6100e86105e8565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012857808201518184015260208101905061010d565b50505050905090810190601f1680156101555780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561016e57600080fd5b6101846004808035906020019091905050610690565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101d157600080fd5b610206600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106a2565b005b341561021357600080fd5b61021b61084f565b604051808215151515815260200191505060405180910390f35b341561024057600080fd5b610248610858565b6040518082815260200191505060405180910390f35b341561026957600080fd5b6102bd600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610862565b005b34156102ca57600080fd5b6102ff600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610a2d565b6040518082815260200191505060405180910390f35b341561032057600080fd5b6103366004808035906020019091905050610a41565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038357600080fd5b6103996004808035906020019091905050610a53565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103d95780820151818401526020810190506103be565b50505050905090810190601f1680156104065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561041f57600080fd5b61044b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b0e565b6040518082815260200191505060405180910390f35b341561046c57600080fd5b610474610b5a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156104b4578082015181840152602081019050610499565b50505050905090810190601f1680156104e15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156104fa57600080fd5b61052f600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610c02565b005b341561053c57600080fd5b610544610d8a565b6040518082815260200191505060405180910390f35b341561056557600080fd5b610591600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d90565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105d45780820151818401526020810190506105b9565b505050509050019250505060405180910390f35b6105f06112ff565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156106865780601f1061065b57610100808354040283529160200191610686565b820191906000526020600020905b81548152906001019060200180831161066957829003601f168201915b5050505050905090565b600061069b82610da8565b9050919050565b80600073ffffffffffffffffffffffffffffffffffffffff166106c482610a41565b73ffffffffffffffffffffffffffffffffffffffff16141515156106e757600080fd5b6106f082610a41565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561072957600080fd5b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415151561076457600080fd5b600073ffffffffffffffffffffffffffffffffffffffff1661078583610da8565b73ffffffffffffffffffffffffffffffffffffffff161415806107d55750600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b1561084a576107e48383610de5565b8273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a35b505050565b60006001905090565b6000600254905090565b80600073ffffffffffffffffffffffffffffffffffffffff1661088482610a41565b73ffffffffffffffffffffffffffffffffffffffff16141515156108a757600080fd5b3373ffffffffffffffffffffffffffffffffffffffff166108c783610690565b73ffffffffffffffffffffffffffffffffffffffff161415156108e957600080fd5b8373ffffffffffffffffffffffffffffffffffffffff1661090983610a41565b73ffffffffffffffffffffffffffffffffffffffff1614151561092b57600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561096757600080fd5b610972848484610e3b565b60008473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a350505050565b6000610a398383610e67565b905092915050565b6000610a4c82610ec9565b9050919050565b610a5b6112ff565b600560008381526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610b025780601f10610ad757610100808354040283529160200191610b02565b820191906000526020600020905b815481529060010190602001808311610ae557829003601f168201915b50505050509050919050565b6000600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b610b626112ff565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bf85780601f10610bcd57610100808354040283529160200191610bf8565b820191906000526020600020905b815481529060010190602001808311610bdb57829003601f168201915b5050505050905090565b80600073ffffffffffffffffffffffffffffffffffffffff16610c2482610a41565b73ffffffffffffffffffffffffffffffffffffffff1614151515610c4757600080fd5b3373ffffffffffffffffffffffffffffffffffffffff16610c6783610a41565b73ffffffffffffffffffffffffffffffffffffffff16141515610c8957600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610cc557600080fd5b610cd0338484610e3b565b60003373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a38273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3505050565b60025481565b610d98611313565b610da182610f06565b9050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b610e4481610fa3565b610e4e8382610ff9565b610e5881836111e2565b610e628282611238565b505050565b6000600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002082815481101515610eb557fe5b906000526020600020900154905092915050565b60006003600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610f0e611313565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610f9757602002820191906000526020600020905b815481526020019060010190808311610f83575b50505050509050919050565b60006004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806000600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050925060076000858152602001908152602001600020549150600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600184038154811015156110a857fe5b906000526020600020900154905080600660008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561110357fe5b906000526020600020900181905550816007600083815260200190815260200160002081905550600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206001840381548110151561117957fe5b906000526020600020900160009055600660008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208054809190600190036111da9190611327565b505050505050565b806003600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816112899190611353565b9160005260206000209001600083909190915055506001600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490500360076000838152602001908152602001600020819055505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b81548183558181151161134e5781836000526020600020918201910161134d919061137f565b5b505050565b81548183558181151161137a57818360005260206000209182019101611379919061137f565b5b505050565b6113a191905b8082111561139d576000816000905550600101611385565b5090565b905600a165627a7a72305820b171a81aa98f6dadfe84ee7c2cebc2e93c54f3c2af036be668b92646784d773b0029",
  "sourceMap": "449:5630:30:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "449:5630:30:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1226:107;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3684:150:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2064:377;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3549:129;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1458:132;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2447:397;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3200:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1758:139;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:155;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1596:156:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:113;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2850:344:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;550:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3389:154;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1226:107:30;1287:12;;:::i;:::-;1322:4;1315:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1226:107;:::o;3684:150::-;3765:17;3805:22;3818:8;3805:12;:22::i;:::-;3798:29;;3684:150;;;:::o;2064:377::-;2148:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2194:17;2202:8;2194:7;:17::i;:::-;2180:31;;:10;:31;;;2172:40;;;;;;;;2244:3;2230:17;;:10;:17;;;;2222:26;;;;;;;;2297:1;2263:36;;:22;2276:8;2263:12;:22::i;:::-;:36;;;;:73;;;;2334:1;2319:17;;:3;:17;;;;2263:73;2259:176;;;2352:23;2361:3;2366:8;2352;:23::i;:::-;2410:3;2389:35;;2398:10;2389:35;;;2415:8;2389:35;;;;;;;;;;;;;;;;;;2259:176;2064:377;;;:::o;3549:129::-;3622:22;3667:4;3660:11;;3549:129;:::o;1458:132::-;1526:20;1569:14;;1562:21;;1458:132;:::o;2447:397::-;2551:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2608:10;2583:35;;:21;2595:8;2583:11;:21::i;:::-;:35;;;2575:44;;;;;;;;2658:5;2637:26;;:17;2645:8;2637:7;:17::i;:::-;:26;;;2629:35;;;;;;;;2697:1;2682:17;;:3;:17;;;;2674:26;;;;;;;;2711:47;2737:5;2744:3;2749:8;2711:25;:47::i;:::-;2785:1;2778:5;2769:28;;;2788:8;2769:28;;;;;;;;;;;;;;;;;;2823:3;2807:30;;2816:5;2807:30;;;2828:8;2807:30;;;;;;;;;;;;;;;;;;2447:397;;;;:::o;3200:183::-;3303:13;3339:37;3361:6;3369;3339:21;:37::i;:::-;3332:44;;3200:183;;;;:::o;1758:139::-;1835:14;1872:18;1881:8;1872;:18::i;:::-;1865:25;;1758:139;;;:::o;1903:155::-;1986:15;;:::i;:::-;2024:17;:27;2042:8;2024:27;;;;;;;;;;;2017:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1903:155;;;:::o;1596:156::-;1676:13;1712:18;:26;1731:6;1712:26;;;;;;;;;;;;;;;:33;;;;1705:40;;1596:156;;;:::o;1339:113::-;1402:14;;:::i;:::-;1439:6;1432:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:113;:::o;2850:344::-;2935:8;1199:1;1170:31;;:17;1178:8;1170:7;:17::i;:::-;:31;;;;1162:40;;;;;;;;2988:10;2967:31;;:17;2975:8;2967:7;:17::i;:::-;:31;;;2959:40;;;;;;;;3032:1;3017:17;;:3;:17;;;;3009:26;;;;;;;;3046:52;3072:10;3084:3;3089:8;3046:25;:52::i;:::-;3130:1;3118:10;3109:33;;;3133:8;3109:33;;;;;;;;;;;;;;;;;;3173:3;3152:35;;3161:10;3152:35;;;3178:8;3152:35;;;;;;;;;;;;;;;;;;2850:344;;;:::o;550:26::-;;;;:::o;3389:154::-;3474:16;;:::i;:::-;3513:23;3529:6;3513:15;:23::i;:::-;3506:30;;3389:154;;;:::o;4413:165::-;4497:17;4537:24;:34;4562:8;4537:34;;;;;;;;;;;;;;;;;;;;;4530:41;;4413:165;;;:::o;4283:124::-;4397:3;4360:24;:34;4385:8;4360:34;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;4283:124;;:::o;3840:283::-;3949:29;3969:8;3949:19;:29::i;:::-;3988:43;4015:5;4022:8;3988:26;:43::i;:::-;4041:29;4056:8;4066:3;4041:14;:29::i;:::-;4080:36;4102:3;4107:8;4080:21;:36::i;:::-;3840:283;;;:::o;4748:183::-;4855:12;4890:18;:26;4909:6;4890:26;;;;;;;;;;;;;;;4917:6;4890:34;;;;;;;;;;;;;;;;;;;4883:41;;4748:183;;;;:::o;4129:148::-;4209:14;4246;:24;4261:8;4246:24;;;;;;;;;;;;;;;;;;;;;4239:31;;4129:148;;;:::o;4584:158::-;4672:14;;:::i;:::-;4709:18;:26;4728:6;4709:26;;;;;;;;;;;;;;;4702:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4584:158;;;:::o;4937:129::-;5057:1;5012:24;:34;5037:8;5012:34;;;;;;;;;;;;:47;;;;;;;;;;;;;;;;;;4937:129;:::o;5447:484::-;5545:11;5602:10;5659:14;5559:18;:26;5578:6;5559:26;;;;;;;;;;;;;;;:33;;;;5545:47;;5615:24;:34;5640:8;5615:34;;;;;;;;;;;;5602:47;;5676:18;:26;5695:6;5676:26;;;;;;;;;;;;;;;5712:1;5703:6;:10;5676:38;;;;;;;;;;;;;;;;;;;5659:55;;5761:9;5725:18;:26;5744:6;5725:26;;;;;;;;;;;;;;;5752:5;5725:33;;;;;;;;;;;;;;;;;;:45;;;;5818:5;5780:24;:35;5805:9;5780:35;;;;;;;;;;;:43;;;;5841:18;:26;5860:6;5841:26;;;;;;;;;;;;;;;5877:1;5868:6;:10;5841:38;;;;;;;;;;;;;;;;;;5834:45;;;5889:18;:26;5908:6;5889:26;;;;;;;;;;;;;;;:35;;;;;;;;;;;;:::i;:::-;;5447:484;;;;;:::o;5072:126::-;5185:6;5158:14;:24;5173:8;5158:24;;;;;;;;;;;;:33;;;;;;;;;;;;;;;;;;5072:126;;:::o;5204:237::-;5297:18;:26;5316:6;5297:26;;;;;;;;;;;;;;;:41;;;;;;;;;;;:::i;:::-;;;;;;;;;;5329:8;5297:41;;;;;;;5433:1;5397:18;:26;5416:6;5397:26;;;;;;;;;;;;;;;:33;;;;:37;5348:24;:34;5373:8;5348:34;;;;;;;;;;;:86;;;;5204:237;;:::o;449:5630::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity 0.4.18;\n\nimport \"./DetailedERC721.sol\";\n\n\n/**\n * @title NonFungibleToken\n *\n * Generic implementation for both required and optional functionality in\n * the ERC721 standard for non-fungible tokens.\n *\n * Heavily inspired by Decentraland's generic implementation:\n * https://github.com/decentraland/land/blob/master/contracts/BasicNFT.sol\n *\n * Standard Author: dete\n * Implementation Author: Nadav Hollander <nadav at dharma.io>\n */\ncontract NonFungibleToken is DetailedERC721 {\n    string public name;\n    string public symbol;\n\n    uint public numTokensTotal;\n\n    mapping(uint => address) internal tokenIdToOwner;\n    mapping(uint => address) internal tokenIdToApprovedAddress;\n    mapping(uint => string) internal tokenIdToMetadata;\n    mapping(address => uint[]) internal ownerToTokensOwned;\n    mapping(uint => uint) internal tokenIdToOwnerArrayIndex;\n\n    event Transfer(\n        address indexed _from,\n        address indexed _to,\n        uint256 _tokenId\n    );\n\n    event Approval(\n        address indexed _owner,\n        address indexed _approved,\n        uint256 _tokenId\n    );\n\n    modifier onlyExtantToken(uint _tokenId) {\n        require(ownerOf(_tokenId) != address(0));\n        _;\n    }\n\n    function name()\n        public\n        view\n        returns (string _name)\n    {\n        return name;\n    }\n\n    function symbol()\n        public\n        view\n        returns (string _symbol)\n    {\n        return symbol;\n    }\n\n    function totalSupply()\n        public\n        view\n        returns (uint256 _totalSupply)\n    {\n        return numTokensTotal;\n    }\n\n    function balanceOf(address _owner)\n        public\n        view\n        returns (uint _balance)\n    {\n        return ownerToTokensOwned[_owner].length;\n    }\n\n    function ownerOf(uint _tokenId)\n        public\n        view\n        returns (address _owner)\n    {\n        return _ownerOf(_tokenId);\n    }\n\n    function tokenMetadata(uint _tokenId)\n        public\n        view\n        returns (string _infoUrl)\n    {\n        return tokenIdToMetadata[_tokenId];\n    }\n\n    function approve(address _to, uint _tokenId)\n        public\n        onlyExtantToken(_tokenId)\n    {\n        require(msg.sender == ownerOf(_tokenId));\n        require(msg.sender != _to);\n\n        if (_getApproved(_tokenId) != address(0) ||\n                _to != address(0)) {\n            _approve(_to, _tokenId);\n            Approval(msg.sender, _to, _tokenId);\n        }\n    }\n\n    function transferFrom(address _from, address _to, uint _tokenId)\n        public\n        onlyExtantToken(_tokenId)\n    {\n        require(getApproved(_tokenId) == msg.sender);\n        require(ownerOf(_tokenId) == _from);\n        require(_to != address(0));\n\n        _clearApprovalAndTransfer(_from, _to, _tokenId);\n\n        Approval(_from, 0, _tokenId);\n        Transfer(_from, _to, _tokenId);\n    }\n\n    function transfer(address _to, uint _tokenId)\n        public\n        onlyExtantToken(_tokenId)\n    {\n        require(ownerOf(_tokenId) == msg.sender);\n        require(_to != address(0));\n\n        _clearApprovalAndTransfer(msg.sender, _to, _tokenId);\n\n        Approval(msg.sender, 0, _tokenId);\n        Transfer(msg.sender, _to, _tokenId);\n    }\n\n    function tokenOfOwnerByIndex(address _owner, uint _index)\n        public\n        view\n        returns (uint _tokenId)\n    {\n        return _getOwnerTokenByIndex(_owner, _index);\n    }\n\n    function getOwnerTokens(address _owner)\n        public\n        view\n        returns (uint[] _tokenIds)\n    {\n        return _getOwnerTokens(_owner);\n    }\n\n    function implementsERC721()\n        public\n        view\n        returns (bool _implementsERC721)\n    {\n        return true;\n    }\n\n    function getApproved(uint _tokenId)\n        public\n        view\n        returns (address _approved)\n    {\n        return _getApproved(_tokenId);\n    }\n\n    function _clearApprovalAndTransfer(address _from, address _to, uint _tokenId)\n        internal\n    {\n        _clearTokenApproval(_tokenId);\n        _removeTokenFromOwnersList(_from, _tokenId);\n        _setTokenOwner(_tokenId, _to);\n        _addTokenToOwnersList(_to, _tokenId);\n    }\n\n    function _ownerOf(uint _tokenId)\n        internal\n        view\n        returns (address _owner)\n    {\n        return tokenIdToOwner[_tokenId];\n    }\n\n    function _approve(address _to, uint _tokenId)\n        internal\n    {\n        tokenIdToApprovedAddress[_tokenId] = _to;\n    }\n\n    function _getApproved(uint _tokenId)\n        internal\n        view\n        returns (address _approved)\n    {\n        return tokenIdToApprovedAddress[_tokenId];\n    }\n\n    function _getOwnerTokens(address _owner)\n        internal\n        view\n        returns (uint[] _tokens)\n    {\n        return ownerToTokensOwned[_owner];\n    }\n\n    function _getOwnerTokenByIndex(address _owner, uint _index)\n        internal\n        view\n        returns (uint _tokens)\n    {\n        return ownerToTokensOwned[_owner][_index];\n    }\n\n    function _clearTokenApproval(uint _tokenId)\n        internal\n    {\n        tokenIdToApprovedAddress[_tokenId] = address(0);\n    }\n\n    function _setTokenOwner(uint _tokenId, address _owner)\n        internal\n    {\n        tokenIdToOwner[_tokenId] = _owner;\n    }\n\n    function _addTokenToOwnersList(address _owner, uint _tokenId)\n        internal\n    {\n        ownerToTokensOwned[_owner].push(_tokenId);\n        tokenIdToOwnerArrayIndex[_tokenId] =\n            ownerToTokensOwned[_owner].length - 1;\n    }\n\n    function _removeTokenFromOwnersList(address _owner, uint _tokenId)\n        internal\n    {\n        uint length = ownerToTokensOwned[_owner].length;\n        uint index = tokenIdToOwnerArrayIndex[_tokenId];\n        uint swapToken = ownerToTokensOwned[_owner][length - 1];\n\n        ownerToTokensOwned[_owner][index] = swapToken;\n        tokenIdToOwnerArrayIndex[swapToken] = index;\n\n        delete ownerToTokensOwned[_owner][length - 1];\n        ownerToTokensOwned[_owner].length--;\n    }\n\n    function _insertTokenMetadata(uint _tokenId, string _metadata)\n        internal\n    {\n        tokenIdToMetadata[_tokenId] = _metadata;\n    }\n}\n",
  "sourcePath": "NonFungibleToken/contracts/NonFungibleToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "NonFungibleToken/contracts/NonFungibleToken.sol",
      "exportedSymbols": {
        "NonFungibleToken": [
          7629
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
        "id": 7074,
        "name": "PragmaDirective",
        "src": "0:23:30"
      },
      {
        "attributes": {
          "SourceUnit": 6935,
          "absolutePath": "NonFungibleToken/contracts/DetailedERC721.sol",
          "file": "./DetailedERC721.sol",
          "scope": 7630,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 7075,
        "name": "ImportDirective",
        "src": "25:30:30"
      },
      {
        "attributes": {
          "contractDependencies": [
            6934,
            7007
          ],
          "contractKind": "contract",
          "documentation": "@title NonFungibleToken\n * Generic implementation for both required and optional functionality in\nthe ERC721 standard for non-fungible tokens.\n * Heavily inspired by Decentraland's generic implementation:\nhttps://github.com/decentraland/land/blob/master/contracts/BasicNFT.sol\n * Standard Author: dete\nImplementation Author: Nadav Hollander <nadav at dharma.io>",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            7629,
            6934,
            7007
          ],
          "name": "NonFungibleToken",
          "scope": 7630
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
                  "name": "DetailedERC721",
                  "referencedDeclaration": 6934,
                  "type": "contract DetailedERC721"
                },
                "id": 7076,
                "name": "UserDefinedTypeName",
                "src": "478:14:30"
              }
            ],
            "id": 7077,
            "name": "InheritanceSpecifier",
            "src": "478:14:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "name",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 7078,
                "name": "ElementaryTypeName",
                "src": "499:6:30"
              }
            ],
            "id": 7079,
            "name": "VariableDeclaration",
            "src": "499:18:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "symbol",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "string storage ref",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "string",
                  "type": "string storage pointer"
                },
                "id": 7080,
                "name": "ElementaryTypeName",
                "src": "523:6:30"
              }
            ],
            "id": 7081,
            "name": "VariableDeclaration",
            "src": "523:20:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "numTokensTotal",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 7082,
                "name": "ElementaryTypeName",
                "src": "550:4:30"
              }
            ],
            "id": 7083,
            "name": "VariableDeclaration",
            "src": "550:26:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenIdToOwner",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 7084,
                    "name": "ElementaryTypeName",
                    "src": "591:4:30"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 7085,
                    "name": "ElementaryTypeName",
                    "src": "599:7:30"
                  }
                ],
                "id": 7086,
                "name": "Mapping",
                "src": "583:24:30"
              }
            ],
            "id": 7087,
            "name": "VariableDeclaration",
            "src": "583:48:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenIdToApprovedAddress",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => address)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => address)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 7088,
                    "name": "ElementaryTypeName",
                    "src": "645:4:30"
                  },
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 7089,
                    "name": "ElementaryTypeName",
                    "src": "653:7:30"
                  }
                ],
                "id": 7090,
                "name": "Mapping",
                "src": "637:24:30"
              }
            ],
            "id": 7091,
            "name": "VariableDeclaration",
            "src": "637:58:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenIdToMetadata",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => string storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => string storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 7092,
                    "name": "ElementaryTypeName",
                    "src": "709:4:30"
                  },
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 7093,
                    "name": "ElementaryTypeName",
                    "src": "717:6:30"
                  }
                ],
                "id": 7094,
                "name": "Mapping",
                "src": "701:23:30"
              }
            ],
            "id": 7095,
            "name": "VariableDeclaration",
            "src": "701:50:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "ownerToTokensOwned",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => uint256[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => uint256[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 7096,
                    "name": "ElementaryTypeName",
                    "src": "765:7:30"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "uint256[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 7097,
                        "name": "ElementaryTypeName",
                        "src": "776:4:30"
                      }
                    ],
                    "id": 7098,
                    "name": "ArrayTypeName",
                    "src": "776:6:30"
                  }
                ],
                "id": 7099,
                "name": "Mapping",
                "src": "757:26:30"
              }
            ],
            "id": 7100,
            "name": "VariableDeclaration",
            "src": "757:54:30"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenIdToOwnerArrayIndex",
              "scope": 7629,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(uint256 => uint256)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(uint256 => uint256)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 7101,
                    "name": "ElementaryTypeName",
                    "src": "825:4:30"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 7102,
                    "name": "ElementaryTypeName",
                    "src": "833:4:30"
                  }
                ],
                "id": 7103,
                "name": "Mapping",
                "src": "817:21:30"
              }
            ],
            "id": 7104,
            "name": "VariableDeclaration",
            "src": "817:55:30"
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
                      "name": "_from",
                      "scope": 7112,
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
                        "id": 7105,
                        "name": "ElementaryTypeName",
                        "src": "903:7:30"
                      }
                    ],
                    "id": 7106,
                    "name": "VariableDeclaration",
                    "src": "903:21:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_to",
                      "scope": 7112,
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
                        "id": 7107,
                        "name": "ElementaryTypeName",
                        "src": "934:7:30"
                      }
                    ],
                    "id": 7108,
                    "name": "VariableDeclaration",
                    "src": "934:19:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 7112,
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
                        "id": 7109,
                        "name": "ElementaryTypeName",
                        "src": "963:7:30"
                      }
                    ],
                    "id": 7110,
                    "name": "VariableDeclaration",
                    "src": "963:16:30"
                  }
                ],
                "id": 7111,
                "name": "ParameterList",
                "src": "893:92:30"
              }
            ],
            "id": 7112,
            "name": "EventDefinition",
            "src": "879:107:30"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "Approval"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_owner",
                      "scope": 7120,
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
                        "id": 7113,
                        "name": "ElementaryTypeName",
                        "src": "1016:7:30"
                      }
                    ],
                    "id": 7114,
                    "name": "VariableDeclaration",
                    "src": "1016:22:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "_approved",
                      "scope": 7120,
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
                        "id": 7115,
                        "name": "ElementaryTypeName",
                        "src": "1048:7:30"
                      }
                    ],
                    "id": 7116,
                    "name": "VariableDeclaration",
                    "src": "1048:25:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "_tokenId",
                      "scope": 7120,
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
                        "id": 7117,
                        "name": "ElementaryTypeName",
                        "src": "1083:7:30"
                      }
                    ],
                    "id": 7118,
                    "name": "VariableDeclaration",
                    "src": "1083:16:30"
                  }
                ],
                "id": 7119,
                "name": "ParameterList",
                "src": "1006:99:30"
              }
            ],
            "id": 7120,
            "name": "EventDefinition",
            "src": "992:114:30"
          },
          {
            "attributes": {
              "name": "onlyExtantToken",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7136,
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
                        "id": 7121,
                        "name": "ElementaryTypeName",
                        "src": "1137:4:30"
                      }
                    ],
                    "id": 7122,
                    "name": "VariableDeclaration",
                    "src": "1137:13:30"
                  }
                ],
                "id": 7123,
                "name": "ParameterList",
                "src": "1136:15:30"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7124,
                            "name": "Identifier",
                            "src": "1162:7:30"
                          },
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        7185
                                      ],
                                      "referencedDeclaration": 7185,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 7125,
                                    "name": "Identifier",
                                    "src": "1170:7:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7122,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7126,
                                    "name": "Identifier",
                                    "src": "1178:8:30"
                                  }
                                ],
                                "id": 7127,
                                "name": "FunctionCall",
                                "src": "1170:17:30"
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
                                    "id": 7128,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "1191:7:30"
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
                                    "id": 7129,
                                    "name": "Literal",
                                    "src": "1199:1:30"
                                  }
                                ],
                                "id": 7130,
                                "name": "FunctionCall",
                                "src": "1191:10:30"
                              }
                            ],
                            "id": 7131,
                            "name": "BinaryOperation",
                            "src": "1170:31:30"
                          }
                        ],
                        "id": 7132,
                        "name": "FunctionCall",
                        "src": "1162:40:30"
                      }
                    ],
                    "id": 7133,
                    "name": "ExpressionStatement",
                    "src": "1162:40:30"
                  },
                  {
                    "id": 7134,
                    "name": "PlaceholderStatement",
                    "src": "1212:1:30"
                  }
                ],
                "id": 7135,
                "name": "Block",
                "src": "1152:68:30"
              }
            ],
            "id": 7136,
            "name": "ModifierDefinition",
            "src": "1112:108:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "name",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6912,
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
                "id": 7137,
                "name": "ParameterList",
                "src": "1239:2:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_name",
                      "scope": 7144,
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
                        "id": 7138,
                        "name": "ElementaryTypeName",
                        "src": "1287:6:30"
                      }
                    ],
                    "id": 7139,
                    "name": "VariableDeclaration",
                    "src": "1287:12:30"
                  }
                ],
                "id": 7140,
                "name": "ParameterList",
                "src": "1286:14:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7140
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            7079
                          ],
                          "referencedDeclaration": 7079,
                          "type": "string storage ref",
                          "value": "name"
                        },
                        "id": 7141,
                        "name": "Identifier",
                        "src": "1322:4:30"
                      }
                    ],
                    "id": 7142,
                    "name": "Return",
                    "src": "1315:11:30"
                  }
                ],
                "id": 7143,
                "name": "Block",
                "src": "1305:28:30"
              }
            ],
            "id": 7144,
            "name": "FunctionDefinition",
            "src": "1226:107:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "symbol",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6917,
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
                "id": 7145,
                "name": "ParameterList",
                "src": "1354:2:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_symbol",
                      "scope": 7152,
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
                        "id": 7146,
                        "name": "ElementaryTypeName",
                        "src": "1402:6:30"
                      }
                    ],
                    "id": 7147,
                    "name": "VariableDeclaration",
                    "src": "1402:14:30"
                  }
                ],
                "id": 7148,
                "name": "ParameterList",
                "src": "1401:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7148
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            7081
                          ],
                          "referencedDeclaration": 7081,
                          "type": "string storage ref",
                          "value": "symbol"
                        },
                        "id": 7149,
                        "name": "Identifier",
                        "src": "1439:6:30"
                      }
                    ],
                    "id": 7150,
                    "name": "Return",
                    "src": "1432:13:30"
                  }
                ],
                "id": 7151,
                "name": "Block",
                "src": "1422:30:30"
              }
            ],
            "id": 7152,
            "name": "FunctionDefinition",
            "src": "1339:113:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "totalSupply",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6941,
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
                "id": 7153,
                "name": "ParameterList",
                "src": "1478:2:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_totalSupply",
                      "scope": 7160,
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
                        "id": 7154,
                        "name": "ElementaryTypeName",
                        "src": "1526:7:30"
                      }
                    ],
                    "id": 7155,
                    "name": "VariableDeclaration",
                    "src": "1526:20:30"
                  }
                ],
                "id": 7156,
                "name": "ParameterList",
                "src": "1525:22:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7156
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 7083,
                          "type": "uint256",
                          "value": "numTokensTotal"
                        },
                        "id": 7157,
                        "name": "Identifier",
                        "src": "1569:14:30"
                      }
                    ],
                    "id": 7158,
                    "name": "Return",
                    "src": "1562:21:30"
                  }
                ],
                "id": 7159,
                "name": "Block",
                "src": "1552:38:30"
              }
            ],
            "id": 7160,
            "name": "FunctionDefinition",
            "src": "1458:132:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "balanceOf",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6948,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7173,
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
                        "id": 7161,
                        "name": "ElementaryTypeName",
                        "src": "1615:7:30"
                      }
                    ],
                    "id": 7162,
                    "name": "VariableDeclaration",
                    "src": "1615:14:30"
                  }
                ],
                "id": 7163,
                "name": "ParameterList",
                "src": "1614:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_balance",
                      "scope": 7173,
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
                        "id": 7164,
                        "name": "ElementaryTypeName",
                        "src": "1676:4:30"
                      }
                    ],
                    "id": 7165,
                    "name": "VariableDeclaration",
                    "src": "1676:13:30"
                  }
                ],
                "id": 7166,
                "name": "ParameterList",
                "src": "1675:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7166
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "length",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7100,
                                  "type": "mapping(address => uint256[] storage ref)",
                                  "value": "ownerToTokensOwned"
                                },
                                "id": 7167,
                                "name": "Identifier",
                                "src": "1712:18:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7162,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 7168,
                                "name": "Identifier",
                                "src": "1731:6:30"
                              }
                            ],
                            "id": 7169,
                            "name": "IndexAccess",
                            "src": "1712:26:30"
                          }
                        ],
                        "id": 7170,
                        "name": "MemberAccess",
                        "src": "1712:33:30"
                      }
                    ],
                    "id": 7171,
                    "name": "Return",
                    "src": "1705:40:30"
                  }
                ],
                "id": 7172,
                "name": "Block",
                "src": "1695:57:30"
              }
            ],
            "id": 7173,
            "name": "FunctionDefinition",
            "src": "1596:156:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOf",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6955,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7185,
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
                        "id": 7174,
                        "name": "ElementaryTypeName",
                        "src": "1775:4:30"
                      }
                    ],
                    "id": 7175,
                    "name": "VariableDeclaration",
                    "src": "1775:13:30"
                  }
                ],
                "id": 7176,
                "name": "ParameterList",
                "src": "1774:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7185,
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
                        "id": 7177,
                        "name": "ElementaryTypeName",
                        "src": "1835:7:30"
                      }
                    ],
                    "id": 7178,
                    "name": "VariableDeclaration",
                    "src": "1835:14:30"
                  }
                ],
                "id": 7179,
                "name": "ParameterList",
                "src": "1834:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7179
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7445,
                              "type": "function (uint256) view returns (address)",
                              "value": "_ownerOf"
                            },
                            "id": 7180,
                            "name": "Identifier",
                            "src": "1872:8:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7175,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7181,
                            "name": "Identifier",
                            "src": "1881:8:30"
                          }
                        ],
                        "id": 7182,
                        "name": "FunctionCall",
                        "src": "1872:18:30"
                      }
                    ],
                    "id": 7183,
                    "name": "Return",
                    "src": "1865:25:30"
                  }
                ],
                "id": 7184,
                "name": "Block",
                "src": "1855:42:30"
              }
            ],
            "id": 7185,
            "name": "FunctionDefinition",
            "src": "1758:139:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "tokenMetadata",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6924,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7197,
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
                        "id": 7186,
                        "name": "ElementaryTypeName",
                        "src": "1926:4:30"
                      }
                    ],
                    "id": 7187,
                    "name": "VariableDeclaration",
                    "src": "1926:13:30"
                  }
                ],
                "id": 7188,
                "name": "ParameterList",
                "src": "1925:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_infoUrl",
                      "scope": 7197,
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
                        "id": 7189,
                        "name": "ElementaryTypeName",
                        "src": "1986:6:30"
                      }
                    ],
                    "id": 7190,
                    "name": "VariableDeclaration",
                    "src": "1986:15:30"
                  }
                ],
                "id": 7191,
                "name": "ParameterList",
                "src": "1985:17:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7191
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
                              "referencedDeclaration": 7095,
                              "type": "mapping(uint256 => string storage ref)",
                              "value": "tokenIdToMetadata"
                            },
                            "id": 7192,
                            "name": "Identifier",
                            "src": "2024:17:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7187,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7193,
                            "name": "Identifier",
                            "src": "2042:8:30"
                          }
                        ],
                        "id": 7194,
                        "name": "IndexAccess",
                        "src": "2024:27:30"
                      }
                    ],
                    "id": 7195,
                    "name": "Return",
                    "src": "2017:34:30"
                  }
                ],
                "id": 7196,
                "name": "Block",
                "src": "2007:51:30"
              }
            ],
            "id": 7197,
            "name": "FunctionDefinition",
            "src": "1903:155:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "approve",
              "payable": false,
              "scope": 7629,
              "stateMutability": "nonpayable",
              "superFunction": 6962,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 7251,
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
                        "id": 7198,
                        "name": "ElementaryTypeName",
                        "src": "2081:7:30"
                      }
                    ],
                    "id": 7199,
                    "name": "VariableDeclaration",
                    "src": "2081:11:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7251,
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
                        "id": 7200,
                        "name": "ElementaryTypeName",
                        "src": "2094:4:30"
                      }
                    ],
                    "id": 7201,
                    "name": "VariableDeclaration",
                    "src": "2094:13:30"
                  }
                ],
                "id": 7202,
                "name": "ParameterList",
                "src": "2080:28:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7206,
                "name": "ParameterList",
                "src": "2162:0:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7136,
                      "type": "modifier (uint256)",
                      "value": "onlyExtantToken"
                    },
                    "id": 7203,
                    "name": "Identifier",
                    "src": "2132:15:30"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7201,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 7204,
                    "name": "Identifier",
                    "src": "2148:8:30"
                  }
                ],
                "id": 7205,
                "name": "ModifierInvocation",
                "src": "2132:25:30"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7207,
                            "name": "Identifier",
                            "src": "2172:7:30"
                          },
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
                                      "referencedDeclaration": 8367,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 7208,
                                    "name": "Identifier",
                                    "src": "2180:3:30"
                                  }
                                ],
                                "id": 7209,
                                "name": "MemberAccess",
                                "src": "2180:10:30"
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
                                  "type": "address",
                                  "type_conversion": false
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
                                      "overloadedDeclarations": [
                                        7185
                                      ],
                                      "referencedDeclaration": 7185,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 7210,
                                    "name": "Identifier",
                                    "src": "2194:7:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7201,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7211,
                                    "name": "Identifier",
                                    "src": "2202:8:30"
                                  }
                                ],
                                "id": 7212,
                                "name": "FunctionCall",
                                "src": "2194:17:30"
                              }
                            ],
                            "id": 7213,
                            "name": "BinaryOperation",
                            "src": "2180:31:30"
                          }
                        ],
                        "id": 7214,
                        "name": "FunctionCall",
                        "src": "2172:40:30"
                      }
                    ],
                    "id": 7215,
                    "name": "ExpressionStatement",
                    "src": "2172:40:30"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7216,
                            "name": "Identifier",
                            "src": "2222:7:30"
                          },
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
                                      "referencedDeclaration": 8367,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 7217,
                                    "name": "Identifier",
                                    "src": "2230:3:30"
                                  }
                                ],
                                "id": 7218,
                                "name": "MemberAccess",
                                "src": "2230:10:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7199,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 7219,
                                "name": "Identifier",
                                "src": "2244:3:30"
                              }
                            ],
                            "id": 7220,
                            "name": "BinaryOperation",
                            "src": "2230:17:30"
                          }
                        ],
                        "id": 7221,
                        "name": "FunctionCall",
                        "src": "2222:26:30"
                      }
                    ],
                    "id": 7222,
                    "name": "ExpressionStatement",
                    "src": "2222:26:30"
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
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "||",
                          "type": "bool"
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7471,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "_getApproved"
                                    },
                                    "id": 7223,
                                    "name": "Identifier",
                                    "src": "2263:12:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7201,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7224,
                                    "name": "Identifier",
                                    "src": "2276:8:30"
                                  }
                                ],
                                "id": 7225,
                                "name": "FunctionCall",
                                "src": "2263:22:30"
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
                                    "id": 7226,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2289:7:30"
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
                                    "id": 7227,
                                    "name": "Literal",
                                    "src": "2297:1:30"
                                  }
                                ],
                                "id": 7228,
                                "name": "FunctionCall",
                                "src": "2289:10:30"
                              }
                            ],
                            "id": 7229,
                            "name": "BinaryOperation",
                            "src": "2263:36:30"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7199,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 7230,
                                "name": "Identifier",
                                "src": "2319:3:30"
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
                                    "id": 7231,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2326:7:30"
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
                                    "id": 7232,
                                    "name": "Literal",
                                    "src": "2334:1:30"
                                  }
                                ],
                                "id": 7233,
                                "name": "FunctionCall",
                                "src": "2326:10:30"
                              }
                            ],
                            "id": 7234,
                            "name": "BinaryOperation",
                            "src": "2319:17:30"
                          }
                        ],
                        "id": 7235,
                        "name": "BinaryOperation",
                        "src": "2263:73:30"
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7459,
                                      "type": "function (address,uint256)",
                                      "value": "_approve"
                                    },
                                    "id": 7236,
                                    "name": "Identifier",
                                    "src": "2352:8:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7199,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 7237,
                                    "name": "Identifier",
                                    "src": "2361:3:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7201,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7238,
                                    "name": "Identifier",
                                    "src": "2366:8:30"
                                  }
                                ],
                                "id": 7239,
                                "name": "FunctionCall",
                                "src": "2352:23:30"
                              }
                            ],
                            "id": 7240,
                            "name": "ExpressionStatement",
                            "src": "2352:23:30"
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
                                      "overloadedDeclarations": [
                                        7120
                                      ],
                                      "referencedDeclaration": 7120,
                                      "type": "function (address,address,uint256)",
                                      "value": "Approval"
                                    },
                                    "id": 7241,
                                    "name": "Identifier",
                                    "src": "2389:8:30"
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
                                          "referencedDeclaration": 8367,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 7242,
                                        "name": "Identifier",
                                        "src": "2398:3:30"
                                      }
                                    ],
                                    "id": 7243,
                                    "name": "MemberAccess",
                                    "src": "2398:10:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7199,
                                      "type": "address",
                                      "value": "_to"
                                    },
                                    "id": 7244,
                                    "name": "Identifier",
                                    "src": "2410:3:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7201,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7245,
                                    "name": "Identifier",
                                    "src": "2415:8:30"
                                  }
                                ],
                                "id": 7246,
                                "name": "FunctionCall",
                                "src": "2389:35:30"
                              }
                            ],
                            "id": 7247,
                            "name": "ExpressionStatement",
                            "src": "2389:35:30"
                          }
                        ],
                        "id": 7248,
                        "name": "Block",
                        "src": "2338:97:30"
                      }
                    ],
                    "id": 7249,
                    "name": "IfStatement",
                    "src": "2259:176:30"
                  }
                ],
                "id": 7250,
                "name": "Block",
                "src": "2162:279:30"
              }
            ],
            "id": 7251,
            "name": "FunctionDefinition",
            "src": "2064:377:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transferFrom",
              "payable": false,
              "scope": 7629,
              "stateMutability": "nonpayable",
              "superFunction": 6978,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 7307,
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
                        "id": 7252,
                        "name": "ElementaryTypeName",
                        "src": "2469:7:30"
                      }
                    ],
                    "id": 7253,
                    "name": "VariableDeclaration",
                    "src": "2469:13:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 7307,
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
                        "id": 7254,
                        "name": "ElementaryTypeName",
                        "src": "2484:7:30"
                      }
                    ],
                    "id": 7255,
                    "name": "VariableDeclaration",
                    "src": "2484:11:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7307,
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
                        "id": 7256,
                        "name": "ElementaryTypeName",
                        "src": "2497:4:30"
                      }
                    ],
                    "id": 7257,
                    "name": "VariableDeclaration",
                    "src": "2497:13:30"
                  }
                ],
                "id": 7258,
                "name": "ParameterList",
                "src": "2468:43:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7262,
                "name": "ParameterList",
                "src": "2565:0:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7136,
                      "type": "modifier (uint256)",
                      "value": "onlyExtantToken"
                    },
                    "id": 7259,
                    "name": "Identifier",
                    "src": "2535:15:30"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7257,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 7260,
                    "name": "Identifier",
                    "src": "2551:8:30"
                  }
                ],
                "id": 7261,
                "name": "ModifierInvocation",
                "src": "2535:25:30"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7263,
                            "name": "Identifier",
                            "src": "2575:7:30"
                          },
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        7404
                                      ],
                                      "referencedDeclaration": 7404,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "getApproved"
                                    },
                                    "id": 7264,
                                    "name": "Identifier",
                                    "src": "2583:11:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7257,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7265,
                                    "name": "Identifier",
                                    "src": "2595:8:30"
                                  }
                                ],
                                "id": 7266,
                                "name": "FunctionCall",
                                "src": "2583:21:30"
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
                                      "referencedDeclaration": 8367,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 7267,
                                    "name": "Identifier",
                                    "src": "2608:3:30"
                                  }
                                ],
                                "id": 7268,
                                "name": "MemberAccess",
                                "src": "2608:10:30"
                              }
                            ],
                            "id": 7269,
                            "name": "BinaryOperation",
                            "src": "2583:35:30"
                          }
                        ],
                        "id": 7270,
                        "name": "FunctionCall",
                        "src": "2575:44:30"
                      }
                    ],
                    "id": 7271,
                    "name": "ExpressionStatement",
                    "src": "2575:44:30"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7272,
                            "name": "Identifier",
                            "src": "2629:7:30"
                          },
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        7185
                                      ],
                                      "referencedDeclaration": 7185,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 7273,
                                    "name": "Identifier",
                                    "src": "2637:7:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7257,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7274,
                                    "name": "Identifier",
                                    "src": "2645:8:30"
                                  }
                                ],
                                "id": 7275,
                                "name": "FunctionCall",
                                "src": "2637:17:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7253,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 7276,
                                "name": "Identifier",
                                "src": "2658:5:30"
                              }
                            ],
                            "id": 7277,
                            "name": "BinaryOperation",
                            "src": "2637:26:30"
                          }
                        ],
                        "id": 7278,
                        "name": "FunctionCall",
                        "src": "2629:35:30"
                      }
                    ],
                    "id": 7279,
                    "name": "ExpressionStatement",
                    "src": "2629:35:30"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7280,
                            "name": "Identifier",
                            "src": "2674:7:30"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7255,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 7281,
                                "name": "Identifier",
                                "src": "2682:3:30"
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
                                    "id": 7282,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2689:7:30"
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
                                    "id": 7283,
                                    "name": "Literal",
                                    "src": "2697:1:30"
                                  }
                                ],
                                "id": 7284,
                                "name": "FunctionCall",
                                "src": "2689:10:30"
                              }
                            ],
                            "id": 7285,
                            "name": "BinaryOperation",
                            "src": "2682:17:30"
                          }
                        ],
                        "id": 7286,
                        "name": "FunctionCall",
                        "src": "2674:26:30"
                      }
                    ],
                    "id": 7287,
                    "name": "ExpressionStatement",
                    "src": "2674:26:30"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7433,
                              "type": "function (address,address,uint256)",
                              "value": "_clearApprovalAndTransfer"
                            },
                            "id": 7288,
                            "name": "Identifier",
                            "src": "2711:25:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7253,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 7289,
                            "name": "Identifier",
                            "src": "2737:5:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7255,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7290,
                            "name": "Identifier",
                            "src": "2744:3:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7257,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7291,
                            "name": "Identifier",
                            "src": "2749:8:30"
                          }
                        ],
                        "id": 7292,
                        "name": "FunctionCall",
                        "src": "2711:47:30"
                      }
                    ],
                    "id": 7293,
                    "name": "ExpressionStatement",
                    "src": "2711:47:30"
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
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                7120
                              ],
                              "referencedDeclaration": 7120,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 7294,
                            "name": "Identifier",
                            "src": "2769:8:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7253,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 7295,
                            "name": "Identifier",
                            "src": "2778:5:30"
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
                            "id": 7296,
                            "name": "Literal",
                            "src": "2785:1:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7257,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7297,
                            "name": "Identifier",
                            "src": "2788:8:30"
                          }
                        ],
                        "id": 7298,
                        "name": "FunctionCall",
                        "src": "2769:28:30"
                      }
                    ],
                    "id": 7299,
                    "name": "ExpressionStatement",
                    "src": "2769:28:30"
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
                              "overloadedDeclarations": [
                                7112
                              ],
                              "referencedDeclaration": 7112,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 7300,
                            "name": "Identifier",
                            "src": "2807:8:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7253,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 7301,
                            "name": "Identifier",
                            "src": "2816:5:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7255,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7302,
                            "name": "Identifier",
                            "src": "2823:3:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7257,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7303,
                            "name": "Identifier",
                            "src": "2828:8:30"
                          }
                        ],
                        "id": 7304,
                        "name": "FunctionCall",
                        "src": "2807:30:30"
                      }
                    ],
                    "id": 7305,
                    "name": "ExpressionStatement",
                    "src": "2807:30:30"
                  }
                ],
                "id": 7306,
                "name": "Block",
                "src": "2565:279:30"
              }
            ],
            "id": 7307,
            "name": "FunctionDefinition",
            "src": "2447:397:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "transfer",
              "payable": false,
              "scope": 7629,
              "stateMutability": "nonpayable",
              "superFunction": 6985,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 7356,
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
                        "id": 7308,
                        "name": "ElementaryTypeName",
                        "src": "2868:7:30"
                      }
                    ],
                    "id": 7309,
                    "name": "VariableDeclaration",
                    "src": "2868:11:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7356,
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
                        "id": 7310,
                        "name": "ElementaryTypeName",
                        "src": "2881:4:30"
                      }
                    ],
                    "id": 7311,
                    "name": "VariableDeclaration",
                    "src": "2881:13:30"
                  }
                ],
                "id": 7312,
                "name": "ParameterList",
                "src": "2867:28:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7316,
                "name": "ParameterList",
                "src": "2949:0:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7136,
                      "type": "modifier (uint256)",
                      "value": "onlyExtantToken"
                    },
                    "id": 7313,
                    "name": "Identifier",
                    "src": "2919:15:30"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 7311,
                      "type": "uint256",
                      "value": "_tokenId"
                    },
                    "id": 7314,
                    "name": "Identifier",
                    "src": "2935:8:30"
                  }
                ],
                "id": 7315,
                "name": "ModifierInvocation",
                "src": "2919:25:30"
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
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7317,
                            "name": "Identifier",
                            "src": "2959:7:30"
                          },
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
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        7185
                                      ],
                                      "referencedDeclaration": 7185,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "ownerOf"
                                    },
                                    "id": 7318,
                                    "name": "Identifier",
                                    "src": "2967:7:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7311,
                                      "type": "uint256",
                                      "value": "_tokenId"
                                    },
                                    "id": 7319,
                                    "name": "Identifier",
                                    "src": "2975:8:30"
                                  }
                                ],
                                "id": 7320,
                                "name": "FunctionCall",
                                "src": "2967:17:30"
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
                                      "referencedDeclaration": 8367,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 7321,
                                    "name": "Identifier",
                                    "src": "2988:3:30"
                                  }
                                ],
                                "id": 7322,
                                "name": "MemberAccess",
                                "src": "2988:10:30"
                              }
                            ],
                            "id": 7323,
                            "name": "BinaryOperation",
                            "src": "2967:31:30"
                          }
                        ],
                        "id": 7324,
                        "name": "FunctionCall",
                        "src": "2959:40:30"
                      }
                    ],
                    "id": 7325,
                    "name": "ExpressionStatement",
                    "src": "2959:40:30"
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
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8370,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 7326,
                            "name": "Identifier",
                            "src": "3009:7:30"
                          },
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7309,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 7327,
                                "name": "Identifier",
                                "src": "3017:3:30"
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
                                    "id": 7328,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3024:7:30"
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
                                    "id": 7329,
                                    "name": "Literal",
                                    "src": "3032:1:30"
                                  }
                                ],
                                "id": 7330,
                                "name": "FunctionCall",
                                "src": "3024:10:30"
                              }
                            ],
                            "id": 7331,
                            "name": "BinaryOperation",
                            "src": "3017:17:30"
                          }
                        ],
                        "id": 7332,
                        "name": "FunctionCall",
                        "src": "3009:26:30"
                      }
                    ],
                    "id": 7333,
                    "name": "ExpressionStatement",
                    "src": "3009:26:30"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7433,
                              "type": "function (address,address,uint256)",
                              "value": "_clearApprovalAndTransfer"
                            },
                            "id": 7334,
                            "name": "Identifier",
                            "src": "3046:25:30"
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
                                  "referencedDeclaration": 8367,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 7335,
                                "name": "Identifier",
                                "src": "3072:3:30"
                              }
                            ],
                            "id": 7336,
                            "name": "MemberAccess",
                            "src": "3072:10:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7309,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7337,
                            "name": "Identifier",
                            "src": "3084:3:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7311,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7338,
                            "name": "Identifier",
                            "src": "3089:8:30"
                          }
                        ],
                        "id": 7339,
                        "name": "FunctionCall",
                        "src": "3046:52:30"
                      }
                    ],
                    "id": 7340,
                    "name": "ExpressionStatement",
                    "src": "3046:52:30"
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
                                  "typeIdentifier": "t_rational_0_by_1",
                                  "typeString": "int_const 0"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                7120
                              ],
                              "referencedDeclaration": 7120,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 7341,
                            "name": "Identifier",
                            "src": "3109:8:30"
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
                                  "referencedDeclaration": 8367,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 7342,
                                "name": "Identifier",
                                "src": "3118:3:30"
                              }
                            ],
                            "id": 7343,
                            "name": "MemberAccess",
                            "src": "3118:10:30"
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
                            "id": 7344,
                            "name": "Literal",
                            "src": "3130:1:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7311,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7345,
                            "name": "Identifier",
                            "src": "3133:8:30"
                          }
                        ],
                        "id": 7346,
                        "name": "FunctionCall",
                        "src": "3109:33:30"
                      }
                    ],
                    "id": 7347,
                    "name": "ExpressionStatement",
                    "src": "3109:33:30"
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
                              "overloadedDeclarations": [
                                7112
                              ],
                              "referencedDeclaration": 7112,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 7348,
                            "name": "Identifier",
                            "src": "3152:8:30"
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
                                  "referencedDeclaration": 8367,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 7349,
                                "name": "Identifier",
                                "src": "3161:3:30"
                              }
                            ],
                            "id": 7350,
                            "name": "MemberAccess",
                            "src": "3161:10:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7309,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7351,
                            "name": "Identifier",
                            "src": "3173:3:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7311,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7352,
                            "name": "Identifier",
                            "src": "3178:8:30"
                          }
                        ],
                        "id": 7353,
                        "name": "FunctionCall",
                        "src": "3152:35:30"
                      }
                    ],
                    "id": 7354,
                    "name": "ExpressionStatement",
                    "src": "3152:35:30"
                  }
                ],
                "id": 7355,
                "name": "Block",
                "src": "2949:245:30"
              }
            ],
            "id": 7356,
            "name": "FunctionDefinition",
            "src": "2850:344:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "tokenOfOwnerByIndex",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6933,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7371,
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
                        "id": 7357,
                        "name": "ElementaryTypeName",
                        "src": "3229:7:30"
                      }
                    ],
                    "id": 7358,
                    "name": "VariableDeclaration",
                    "src": "3229:14:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 7371,
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
                        "id": 7359,
                        "name": "ElementaryTypeName",
                        "src": "3245:4:30"
                      }
                    ],
                    "id": 7360,
                    "name": "VariableDeclaration",
                    "src": "3245:11:30"
                  }
                ],
                "id": 7361,
                "name": "ParameterList",
                "src": "3228:29:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7371,
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
                        "id": 7362,
                        "name": "ElementaryTypeName",
                        "src": "3303:4:30"
                      }
                    ],
                    "id": 7363,
                    "name": "VariableDeclaration",
                    "src": "3303:13:30"
                  }
                ],
                "id": 7364,
                "name": "ParameterList",
                "src": "3302:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7364
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7500,
                              "type": "function (address,uint256) view returns (uint256)",
                              "value": "_getOwnerTokenByIndex"
                            },
                            "id": 7365,
                            "name": "Identifier",
                            "src": "3339:21:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7358,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7366,
                            "name": "Identifier",
                            "src": "3361:6:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7360,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 7367,
                            "name": "Identifier",
                            "src": "3369:6:30"
                          }
                        ],
                        "id": 7368,
                        "name": "FunctionCall",
                        "src": "3339:37:30"
                      }
                    ],
                    "id": 7369,
                    "name": "Return",
                    "src": "3332:44:30"
                  }
                ],
                "id": 7370,
                "name": "Block",
                "src": "3322:61:30"
              }
            ],
            "id": 7371,
            "name": "FunctionDefinition",
            "src": "3200:183:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getOwnerTokens",
              "payable": false,
              "scope": 7629,
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
                      "name": "_owner",
                      "scope": 7384,
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
                        "id": 7372,
                        "name": "ElementaryTypeName",
                        "src": "3413:7:30"
                      }
                    ],
                    "id": 7373,
                    "name": "VariableDeclaration",
                    "src": "3413:14:30"
                  }
                ],
                "id": 7374,
                "name": "ParameterList",
                "src": "3412:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenIds",
                      "scope": 7384,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "uint256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7375,
                            "name": "ElementaryTypeName",
                            "src": "3474:4:30"
                          }
                        ],
                        "id": 7376,
                        "name": "ArrayTypeName",
                        "src": "3474:6:30"
                      }
                    ],
                    "id": 7377,
                    "name": "VariableDeclaration",
                    "src": "3474:16:30"
                  }
                ],
                "id": 7378,
                "name": "ParameterList",
                "src": "3473:18:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7378
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
                          "type": "uint256[] memory",
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7484,
                              "type": "function (address) view returns (uint256[] memory)",
                              "value": "_getOwnerTokens"
                            },
                            "id": 7379,
                            "name": "Identifier",
                            "src": "3513:15:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7373,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7380,
                            "name": "Identifier",
                            "src": "3529:6:30"
                          }
                        ],
                        "id": 7381,
                        "name": "FunctionCall",
                        "src": "3513:23:30"
                      }
                    ],
                    "id": 7382,
                    "name": "Return",
                    "src": "3506:30:30"
                  }
                ],
                "id": 7383,
                "name": "Block",
                "src": "3496:47:30"
              }
            ],
            "id": 7384,
            "name": "FunctionDefinition",
            "src": "3389:154:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "implementsERC721",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6990,
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
                "id": 7385,
                "name": "ParameterList",
                "src": "3574:2:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_implementsERC721",
                      "scope": 7392,
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
                        "id": 7386,
                        "name": "ElementaryTypeName",
                        "src": "3622:4:30"
                      }
                    ],
                    "id": 7387,
                    "name": "VariableDeclaration",
                    "src": "3622:22:30"
                  }
                ],
                "id": 7388,
                "name": "ParameterList",
                "src": "3621:24:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7388
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "74727565",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "true"
                        },
                        "id": 7389,
                        "name": "Literal",
                        "src": "3667:4:30"
                      }
                    ],
                    "id": 7390,
                    "name": "Return",
                    "src": "3660:11:30"
                  }
                ],
                "id": 7391,
                "name": "Block",
                "src": "3650:28:30"
              }
            ],
            "id": 7392,
            "name": "FunctionDefinition",
            "src": "3549:129:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getApproved",
              "payable": false,
              "scope": 7629,
              "stateMutability": "view",
              "superFunction": 6969,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7404,
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
                        "id": 7393,
                        "name": "ElementaryTypeName",
                        "src": "3705:4:30"
                      }
                    ],
                    "id": 7394,
                    "name": "VariableDeclaration",
                    "src": "3705:13:30"
                  }
                ],
                "id": 7395,
                "name": "ParameterList",
                "src": "3704:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 7404,
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
                        "id": 7396,
                        "name": "ElementaryTypeName",
                        "src": "3765:7:30"
                      }
                    ],
                    "id": 7397,
                    "name": "VariableDeclaration",
                    "src": "3765:17:30"
                  }
                ],
                "id": 7398,
                "name": "ParameterList",
                "src": "3764:19:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7398
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7471,
                              "type": "function (uint256) view returns (address)",
                              "value": "_getApproved"
                            },
                            "id": 7399,
                            "name": "Identifier",
                            "src": "3805:12:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7394,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7400,
                            "name": "Identifier",
                            "src": "3818:8:30"
                          }
                        ],
                        "id": 7401,
                        "name": "FunctionCall",
                        "src": "3805:22:30"
                      }
                    ],
                    "id": 7402,
                    "name": "Return",
                    "src": "3798:29:30"
                  }
                ],
                "id": 7403,
                "name": "Block",
                "src": "3788:46:30"
              }
            ],
            "id": 7404,
            "name": "FunctionDefinition",
            "src": "3684:150:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_clearApprovalAndTransfer",
              "payable": false,
              "scope": 7629,
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
                      "name": "_from",
                      "scope": 7433,
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
                        "id": 7405,
                        "name": "ElementaryTypeName",
                        "src": "3875:7:30"
                      }
                    ],
                    "id": 7406,
                    "name": "VariableDeclaration",
                    "src": "3875:13:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 7433,
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
                        "id": 7407,
                        "name": "ElementaryTypeName",
                        "src": "3890:7:30"
                      }
                    ],
                    "id": 7408,
                    "name": "VariableDeclaration",
                    "src": "3890:11:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7433,
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
                        "id": 7409,
                        "name": "ElementaryTypeName",
                        "src": "3903:4:30"
                      }
                    ],
                    "id": 7410,
                    "name": "VariableDeclaration",
                    "src": "3903:13:30"
                  }
                ],
                "id": 7411,
                "name": "ParameterList",
                "src": "3874:43:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7412,
                "name": "ParameterList",
                "src": "3939:0:30"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7514,
                              "type": "function (uint256)",
                              "value": "_clearTokenApproval"
                            },
                            "id": 7413,
                            "name": "Identifier",
                            "src": "3949:19:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7410,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7414,
                            "name": "Identifier",
                            "src": "3969:8:30"
                          }
                        ],
                        "id": 7415,
                        "name": "FunctionCall",
                        "src": "3949:29:30"
                      }
                    ],
                    "id": 7416,
                    "name": "ExpressionStatement",
                    "src": "3949:29:30"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7614,
                              "type": "function (address,uint256)",
                              "value": "_removeTokenFromOwnersList"
                            },
                            "id": 7417,
                            "name": "Identifier",
                            "src": "3988:26:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7406,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 7418,
                            "name": "Identifier",
                            "src": "4015:5:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7410,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7419,
                            "name": "Identifier",
                            "src": "4022:8:30"
                          }
                        ],
                        "id": 7420,
                        "name": "FunctionCall",
                        "src": "3988:43:30"
                      }
                    ],
                    "id": 7421,
                    "name": "ExpressionStatement",
                    "src": "3988:43:30"
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
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7528,
                              "type": "function (uint256,address)",
                              "value": "_setTokenOwner"
                            },
                            "id": 7422,
                            "name": "Identifier",
                            "src": "4041:14:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7410,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7423,
                            "name": "Identifier",
                            "src": "4056:8:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7408,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7424,
                            "name": "Identifier",
                            "src": "4066:3:30"
                          }
                        ],
                        "id": 7425,
                        "name": "FunctionCall",
                        "src": "4041:29:30"
                      }
                    ],
                    "id": 7426,
                    "name": "ExpressionStatement",
                    "src": "4041:29:30"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7554,
                              "type": "function (address,uint256)",
                              "value": "_addTokenToOwnersList"
                            },
                            "id": 7427,
                            "name": "Identifier",
                            "src": "4080:21:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7408,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7428,
                            "name": "Identifier",
                            "src": "4102:3:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7410,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7429,
                            "name": "Identifier",
                            "src": "4107:8:30"
                          }
                        ],
                        "id": 7430,
                        "name": "FunctionCall",
                        "src": "4080:36:30"
                      }
                    ],
                    "id": 7431,
                    "name": "ExpressionStatement",
                    "src": "4080:36:30"
                  }
                ],
                "id": 7432,
                "name": "Block",
                "src": "3939:184:30"
              }
            ],
            "id": 7433,
            "name": "FunctionDefinition",
            "src": "3840:283:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_ownerOf",
              "payable": false,
              "scope": 7629,
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
                      "name": "_tokenId",
                      "scope": 7445,
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
                        "id": 7434,
                        "name": "ElementaryTypeName",
                        "src": "4147:4:30"
                      }
                    ],
                    "id": 7435,
                    "name": "VariableDeclaration",
                    "src": "4147:13:30"
                  }
                ],
                "id": 7436,
                "name": "ParameterList",
                "src": "4146:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7445,
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
                        "id": 7437,
                        "name": "ElementaryTypeName",
                        "src": "4209:7:30"
                      }
                    ],
                    "id": 7438,
                    "name": "VariableDeclaration",
                    "src": "4209:14:30"
                  }
                ],
                "id": 7439,
                "name": "ParameterList",
                "src": "4208:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7439
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
                              "referencedDeclaration": 7087,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenIdToOwner"
                            },
                            "id": 7440,
                            "name": "Identifier",
                            "src": "4246:14:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7435,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7441,
                            "name": "Identifier",
                            "src": "4261:8:30"
                          }
                        ],
                        "id": 7442,
                        "name": "IndexAccess",
                        "src": "4246:24:30"
                      }
                    ],
                    "id": 7443,
                    "name": "Return",
                    "src": "4239:31:30"
                  }
                ],
                "id": 7444,
                "name": "Block",
                "src": "4229:48:30"
              }
            ],
            "id": 7445,
            "name": "FunctionDefinition",
            "src": "4129:148:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_approve",
              "payable": false,
              "scope": 7629,
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
                      "name": "_to",
                      "scope": 7459,
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
                        "id": 7446,
                        "name": "ElementaryTypeName",
                        "src": "4301:7:30"
                      }
                    ],
                    "id": 7447,
                    "name": "VariableDeclaration",
                    "src": "4301:11:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7459,
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
                        "id": 7448,
                        "name": "ElementaryTypeName",
                        "src": "4314:4:30"
                      }
                    ],
                    "id": 7449,
                    "name": "VariableDeclaration",
                    "src": "4314:13:30"
                  }
                ],
                "id": 7450,
                "name": "ParameterList",
                "src": "4300:28:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7451,
                "name": "ParameterList",
                "src": "4350:0:30"
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
                                  "referencedDeclaration": 7091,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenIdToApprovedAddress"
                                },
                                "id": 7452,
                                "name": "Identifier",
                                "src": "4360:24:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7449,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 7453,
                                "name": "Identifier",
                                "src": "4385:8:30"
                              }
                            ],
                            "id": 7454,
                            "name": "IndexAccess",
                            "src": "4360:34:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7447,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 7455,
                            "name": "Identifier",
                            "src": "4397:3:30"
                          }
                        ],
                        "id": 7456,
                        "name": "Assignment",
                        "src": "4360:40:30"
                      }
                    ],
                    "id": 7457,
                    "name": "ExpressionStatement",
                    "src": "4360:40:30"
                  }
                ],
                "id": 7458,
                "name": "Block",
                "src": "4350:57:30"
              }
            ],
            "id": 7459,
            "name": "FunctionDefinition",
            "src": "4283:124:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_getApproved",
              "payable": false,
              "scope": 7629,
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
                      "name": "_tokenId",
                      "scope": 7471,
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
                        "id": 7460,
                        "name": "ElementaryTypeName",
                        "src": "4435:4:30"
                      }
                    ],
                    "id": 7461,
                    "name": "VariableDeclaration",
                    "src": "4435:13:30"
                  }
                ],
                "id": 7462,
                "name": "ParameterList",
                "src": "4434:15:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_approved",
                      "scope": 7471,
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
                        "id": 7463,
                        "name": "ElementaryTypeName",
                        "src": "4497:7:30"
                      }
                    ],
                    "id": 7464,
                    "name": "VariableDeclaration",
                    "src": "4497:17:30"
                  }
                ],
                "id": 7465,
                "name": "ParameterList",
                "src": "4496:19:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7465
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
                              "referencedDeclaration": 7091,
                              "type": "mapping(uint256 => address)",
                              "value": "tokenIdToApprovedAddress"
                            },
                            "id": 7466,
                            "name": "Identifier",
                            "src": "4537:24:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7461,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7467,
                            "name": "Identifier",
                            "src": "4562:8:30"
                          }
                        ],
                        "id": 7468,
                        "name": "IndexAccess",
                        "src": "4537:34:30"
                      }
                    ],
                    "id": 7469,
                    "name": "Return",
                    "src": "4530:41:30"
                  }
                ],
                "id": 7470,
                "name": "Block",
                "src": "4520:58:30"
              }
            ],
            "id": 7471,
            "name": "FunctionDefinition",
            "src": "4413:165:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_getOwnerTokens",
              "payable": false,
              "scope": 7629,
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
                      "name": "_owner",
                      "scope": 7484,
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
                        "id": 7472,
                        "name": "ElementaryTypeName",
                        "src": "4609:7:30"
                      }
                    ],
                    "id": 7473,
                    "name": "VariableDeclaration",
                    "src": "4609:14:30"
                  }
                ],
                "id": 7474,
                "name": "ParameterList",
                "src": "4608:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokens",
                      "scope": 7484,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "uint256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 7475,
                            "name": "ElementaryTypeName",
                            "src": "4672:4:30"
                          }
                        ],
                        "id": 7476,
                        "name": "ArrayTypeName",
                        "src": "4672:6:30"
                      }
                    ],
                    "id": 7477,
                    "name": "VariableDeclaration",
                    "src": "4672:14:30"
                  }
                ],
                "id": 7478,
                "name": "ParameterList",
                "src": "4671:16:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7478
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7100,
                              "type": "mapping(address => uint256[] storage ref)",
                              "value": "ownerToTokensOwned"
                            },
                            "id": 7479,
                            "name": "Identifier",
                            "src": "4709:18:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7473,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7480,
                            "name": "Identifier",
                            "src": "4728:6:30"
                          }
                        ],
                        "id": 7481,
                        "name": "IndexAccess",
                        "src": "4709:26:30"
                      }
                    ],
                    "id": 7482,
                    "name": "Return",
                    "src": "4702:33:30"
                  }
                ],
                "id": 7483,
                "name": "Block",
                "src": "4692:50:30"
              }
            ],
            "id": 7484,
            "name": "FunctionDefinition",
            "src": "4584:158:30"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_getOwnerTokenByIndex",
              "payable": false,
              "scope": 7629,
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
                      "name": "_owner",
                      "scope": 7500,
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
                        "id": 7485,
                        "name": "ElementaryTypeName",
                        "src": "4779:7:30"
                      }
                    ],
                    "id": 7486,
                    "name": "VariableDeclaration",
                    "src": "4779:14:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_index",
                      "scope": 7500,
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
                        "id": 7487,
                        "name": "ElementaryTypeName",
                        "src": "4795:4:30"
                      }
                    ],
                    "id": 7488,
                    "name": "VariableDeclaration",
                    "src": "4795:11:30"
                  }
                ],
                "id": 7489,
                "name": "ParameterList",
                "src": "4778:29:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokens",
                      "scope": 7500,
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
                        "id": 7490,
                        "name": "ElementaryTypeName",
                        "src": "4855:4:30"
                      }
                    ],
                    "id": 7491,
                    "name": "VariableDeclaration",
                    "src": "4855:12:30"
                  }
                ],
                "id": 7492,
                "name": "ParameterList",
                "src": "4854:14:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 7492
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7100,
                                  "type": "mapping(address => uint256[] storage ref)",
                                  "value": "ownerToTokensOwned"
                                },
                                "id": 7493,
                                "name": "Identifier",
                                "src": "4890:18:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7486,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 7494,
                                "name": "Identifier",
                                "src": "4909:6:30"
                              }
                            ],
                            "id": 7495,
                            "name": "IndexAccess",
                            "src": "4890:26:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7488,
                              "type": "uint256",
                              "value": "_index"
                            },
                            "id": 7496,
                            "name": "Identifier",
                            "src": "4917:6:30"
                          }
                        ],
                        "id": 7497,
                        "name": "IndexAccess",
                        "src": "4890:34:30"
                      }
                    ],
                    "id": 7498,
                    "name": "Return",
                    "src": "4883:41:30"
                  }
                ],
                "id": 7499,
                "name": "Block",
                "src": "4873:58:30"
              }
            ],
            "id": 7500,
            "name": "FunctionDefinition",
            "src": "4748:183:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_clearTokenApproval",
              "payable": false,
              "scope": 7629,
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
                      "scope": 7514,
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
                        "id": 7501,
                        "name": "ElementaryTypeName",
                        "src": "4966:4:30"
                      }
                    ],
                    "id": 7502,
                    "name": "VariableDeclaration",
                    "src": "4966:13:30"
                  }
                ],
                "id": 7503,
                "name": "ParameterList",
                "src": "4965:15:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7504,
                "name": "ParameterList",
                "src": "5002:0:30"
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
                                  "referencedDeclaration": 7091,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenIdToApprovedAddress"
                                },
                                "id": 7505,
                                "name": "Identifier",
                                "src": "5012:24:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7502,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 7506,
                                "name": "Identifier",
                                "src": "5037:8:30"
                              }
                            ],
                            "id": 7507,
                            "name": "IndexAccess",
                            "src": "5012:34:30"
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
                                "id": 7508,
                                "name": "ElementaryTypeNameExpression",
                                "src": "5049:7:30"
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
                                "id": 7509,
                                "name": "Literal",
                                "src": "5057:1:30"
                              }
                            ],
                            "id": 7510,
                            "name": "FunctionCall",
                            "src": "5049:10:30"
                          }
                        ],
                        "id": 7511,
                        "name": "Assignment",
                        "src": "5012:47:30"
                      }
                    ],
                    "id": 7512,
                    "name": "ExpressionStatement",
                    "src": "5012:47:30"
                  }
                ],
                "id": 7513,
                "name": "Block",
                "src": "5002:64:30"
              }
            ],
            "id": 7514,
            "name": "FunctionDefinition",
            "src": "4937:129:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_setTokenOwner",
              "payable": false,
              "scope": 7629,
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
                      "scope": 7528,
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
                        "id": 7515,
                        "name": "ElementaryTypeName",
                        "src": "5096:4:30"
                      }
                    ],
                    "id": 7516,
                    "name": "VariableDeclaration",
                    "src": "5096:13:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 7528,
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
                        "id": 7517,
                        "name": "ElementaryTypeName",
                        "src": "5111:7:30"
                      }
                    ],
                    "id": 7518,
                    "name": "VariableDeclaration",
                    "src": "5111:14:30"
                  }
                ],
                "id": 7519,
                "name": "ParameterList",
                "src": "5095:31:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7520,
                "name": "ParameterList",
                "src": "5148:0:30"
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
                                  "referencedDeclaration": 7087,
                                  "type": "mapping(uint256 => address)",
                                  "value": "tokenIdToOwner"
                                },
                                "id": 7521,
                                "name": "Identifier",
                                "src": "5158:14:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7516,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 7522,
                                "name": "Identifier",
                                "src": "5173:8:30"
                              }
                            ],
                            "id": 7523,
                            "name": "IndexAccess",
                            "src": "5158:24:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7518,
                              "type": "address",
                              "value": "_owner"
                            },
                            "id": 7524,
                            "name": "Identifier",
                            "src": "5185:6:30"
                          }
                        ],
                        "id": 7525,
                        "name": "Assignment",
                        "src": "5158:33:30"
                      }
                    ],
                    "id": 7526,
                    "name": "ExpressionStatement",
                    "src": "5158:33:30"
                  }
                ],
                "id": 7527,
                "name": "Block",
                "src": "5148:50:30"
              }
            ],
            "id": 7528,
            "name": "FunctionDefinition",
            "src": "5072:126:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_addTokenToOwnersList",
              "payable": false,
              "scope": 7629,
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
                      "name": "_owner",
                      "scope": 7554,
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
                        "id": 7529,
                        "name": "ElementaryTypeName",
                        "src": "5235:7:30"
                      }
                    ],
                    "id": 7530,
                    "name": "VariableDeclaration",
                    "src": "5235:14:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7554,
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
                        "id": 7531,
                        "name": "ElementaryTypeName",
                        "src": "5251:4:30"
                      }
                    ],
                    "id": 7532,
                    "name": "VariableDeclaration",
                    "src": "5251:13:30"
                  }
                ],
                "id": 7533,
                "name": "ParameterList",
                "src": "5234:31:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7534,
                "name": "ParameterList",
                "src": "5287:0:30"
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
                          "type": "uint256",
                          "type_conversion": false
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
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (uint256) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7100,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "ownerToTokensOwned"
                                    },
                                    "id": 7535,
                                    "name": "Identifier",
                                    "src": "5297:18:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7530,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 7536,
                                    "name": "Identifier",
                                    "src": "5316:6:30"
                                  }
                                ],
                                "id": 7537,
                                "name": "IndexAccess",
                                "src": "5297:26:30"
                              }
                            ],
                            "id": 7538,
                            "name": "MemberAccess",
                            "src": "5297:31:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7532,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7539,
                            "name": "Identifier",
                            "src": "5329:8:30"
                          }
                        ],
                        "id": 7540,
                        "name": "FunctionCall",
                        "src": "5297:41:30"
                      }
                    ],
                    "id": 7541,
                    "name": "ExpressionStatement",
                    "src": "5297:41:30"
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
                                  "referencedDeclaration": 7104,
                                  "type": "mapping(uint256 => uint256)",
                                  "value": "tokenIdToOwnerArrayIndex"
                                },
                                "id": 7542,
                                "name": "Identifier",
                                "src": "5348:24:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7532,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 7543,
                                "name": "Identifier",
                                "src": "5373:8:30"
                              }
                            ],
                            "id": 7544,
                            "name": "IndexAccess",
                            "src": "5348:34:30"
                          },
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
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256[] storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7100,
                                          "type": "mapping(address => uint256[] storage ref)",
                                          "value": "ownerToTokensOwned"
                                        },
                                        "id": 7545,
                                        "name": "Identifier",
                                        "src": "5397:18:30"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 7530,
                                          "type": "address",
                                          "value": "_owner"
                                        },
                                        "id": 7546,
                                        "name": "Identifier",
                                        "src": "5416:6:30"
                                      }
                                    ],
                                    "id": 7547,
                                    "name": "IndexAccess",
                                    "src": "5397:26:30"
                                  }
                                ],
                                "id": 7548,
                                "name": "MemberAccess",
                                "src": "5397:33:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 7549,
                                "name": "Literal",
                                "src": "5433:1:30"
                              }
                            ],
                            "id": 7550,
                            "name": "BinaryOperation",
                            "src": "5397:37:30"
                          }
                        ],
                        "id": 7551,
                        "name": "Assignment",
                        "src": "5348:86:30"
                      }
                    ],
                    "id": 7552,
                    "name": "ExpressionStatement",
                    "src": "5348:86:30"
                  }
                ],
                "id": 7553,
                "name": "Block",
                "src": "5287:154:30"
              }
            ],
            "id": 7554,
            "name": "FunctionDefinition",
            "src": "5204:237:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_removeTokenFromOwnersList",
              "payable": false,
              "scope": 7629,
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
                      "name": "_owner",
                      "scope": 7614,
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
                        "id": 7555,
                        "name": "ElementaryTypeName",
                        "src": "5483:7:30"
                      }
                    ],
                    "id": 7556,
                    "name": "VariableDeclaration",
                    "src": "5483:14:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenId",
                      "scope": 7614,
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
                        "id": 7557,
                        "name": "ElementaryTypeName",
                        "src": "5499:4:30"
                      }
                    ],
                    "id": 7558,
                    "name": "VariableDeclaration",
                    "src": "5499:13:30"
                  }
                ],
                "id": 7559,
                "name": "ParameterList",
                "src": "5482:31:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7560,
                "name": "ParameterList",
                "src": "5535:0:30"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        7562
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "length",
                          "scope": 7614,
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
                            "id": 7561,
                            "name": "ElementaryTypeName",
                            "src": "5545:4:30"
                          }
                        ],
                        "id": 7562,
                        "name": "VariableDeclaration",
                        "src": "5545:11:30"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "length",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7100,
                                  "type": "mapping(address => uint256[] storage ref)",
                                  "value": "ownerToTokensOwned"
                                },
                                "id": 7563,
                                "name": "Identifier",
                                "src": "5559:18:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7556,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 7564,
                                "name": "Identifier",
                                "src": "5578:6:30"
                              }
                            ],
                            "id": 7565,
                            "name": "IndexAccess",
                            "src": "5559:26:30"
                          }
                        ],
                        "id": 7566,
                        "name": "MemberAccess",
                        "src": "5559:33:30"
                      }
                    ],
                    "id": 7567,
                    "name": "VariableDeclarationStatement",
                    "src": "5545:47:30"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7569
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "index",
                          "scope": 7614,
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
                            "id": 7568,
                            "name": "ElementaryTypeName",
                            "src": "5602:4:30"
                          }
                        ],
                        "id": 7569,
                        "name": "VariableDeclaration",
                        "src": "5602:10:30"
                      },
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
                              "referencedDeclaration": 7104,
                              "type": "mapping(uint256 => uint256)",
                              "value": "tokenIdToOwnerArrayIndex"
                            },
                            "id": 7570,
                            "name": "Identifier",
                            "src": "5615:24:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7558,
                              "type": "uint256",
                              "value": "_tokenId"
                            },
                            "id": 7571,
                            "name": "Identifier",
                            "src": "5640:8:30"
                          }
                        ],
                        "id": 7572,
                        "name": "IndexAccess",
                        "src": "5615:34:30"
                      }
                    ],
                    "id": 7573,
                    "name": "VariableDeclarationStatement",
                    "src": "5602:47:30"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        7575
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "swapToken",
                          "scope": 7614,
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
                            "id": 7574,
                            "name": "ElementaryTypeName",
                            "src": "5659:4:30"
                          }
                        ],
                        "id": 7575,
                        "name": "VariableDeclaration",
                        "src": "5659:14:30"
                      },
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
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7100,
                                  "type": "mapping(address => uint256[] storage ref)",
                                  "value": "ownerToTokensOwned"
                                },
                                "id": 7576,
                                "name": "Identifier",
                                "src": "5676:18:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7556,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 7577,
                                "name": "Identifier",
                                "src": "5695:6:30"
                              }
                            ],
                            "id": 7578,
                            "name": "IndexAccess",
                            "src": "5676:26:30"
                          },
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
                              "operator": "-",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7562,
                                  "type": "uint256",
                                  "value": "length"
                                },
                                "id": 7579,
                                "name": "Identifier",
                                "src": "5703:6:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "31",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 1",
                                  "value": "1"
                                },
                                "id": 7580,
                                "name": "Literal",
                                "src": "5712:1:30"
                              }
                            ],
                            "id": 7581,
                            "name": "BinaryOperation",
                            "src": "5703:10:30"
                          }
                        ],
                        "id": 7582,
                        "name": "IndexAccess",
                        "src": "5676:38:30"
                      }
                    ],
                    "id": 7583,
                    "name": "VariableDeclarationStatement",
                    "src": "5659:55:30"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7100,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "ownerToTokensOwned"
                                    },
                                    "id": 7584,
                                    "name": "Identifier",
                                    "src": "5725:18:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7556,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 7585,
                                    "name": "Identifier",
                                    "src": "5744:6:30"
                                  }
                                ],
                                "id": 7587,
                                "name": "IndexAccess",
                                "src": "5725:26:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7569,
                                  "type": "uint256",
                                  "value": "index"
                                },
                                "id": 7586,
                                "name": "Identifier",
                                "src": "5752:5:30"
                              }
                            ],
                            "id": 7588,
                            "name": "IndexAccess",
                            "src": "5725:33:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7575,
                              "type": "uint256",
                              "value": "swapToken"
                            },
                            "id": 7589,
                            "name": "Identifier",
                            "src": "5761:9:30"
                          }
                        ],
                        "id": 7590,
                        "name": "Assignment",
                        "src": "5725:45:30"
                      }
                    ],
                    "id": 7591,
                    "name": "ExpressionStatement",
                    "src": "5725:45:30"
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
                                  "referencedDeclaration": 7104,
                                  "type": "mapping(uint256 => uint256)",
                                  "value": "tokenIdToOwnerArrayIndex"
                                },
                                "id": 7592,
                                "name": "Identifier",
                                "src": "5780:24:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7575,
                                  "type": "uint256",
                                  "value": "swapToken"
                                },
                                "id": 7593,
                                "name": "Identifier",
                                "src": "5805:9:30"
                              }
                            ],
                            "id": 7594,
                            "name": "IndexAccess",
                            "src": "5780:35:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7569,
                              "type": "uint256",
                              "value": "index"
                            },
                            "id": 7595,
                            "name": "Identifier",
                            "src": "5818:5:30"
                          }
                        ],
                        "id": 7596,
                        "name": "Assignment",
                        "src": "5780:43:30"
                      }
                    ],
                    "id": 7597,
                    "name": "ExpressionStatement",
                    "src": "5780:43:30"
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
                          "operator": "delete",
                          "prefix": true,
                          "type": "tuple()"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7100,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "ownerToTokensOwned"
                                    },
                                    "id": 7598,
                                    "name": "Identifier",
                                    "src": "5841:18:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7556,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 7599,
                                    "name": "Identifier",
                                    "src": "5860:6:30"
                                  }
                                ],
                                "id": 7600,
                                "name": "IndexAccess",
                                "src": "5841:26:30"
                              },
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
                                  "operator": "-",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7562,
                                      "type": "uint256",
                                      "value": "length"
                                    },
                                    "id": 7601,
                                    "name": "Identifier",
                                    "src": "5868:6:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "31",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 1",
                                      "value": "1"
                                    },
                                    "id": 7602,
                                    "name": "Literal",
                                    "src": "5877:1:30"
                                  }
                                ],
                                "id": 7603,
                                "name": "BinaryOperation",
                                "src": "5868:10:30"
                              }
                            ],
                            "id": 7604,
                            "name": "IndexAccess",
                            "src": "5841:38:30"
                          }
                        ],
                        "id": 7605,
                        "name": "UnaryOperation",
                        "src": "5834:45:30"
                      }
                    ],
                    "id": 7606,
                    "name": "ExpressionStatement",
                    "src": "5834:45:30"
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
                          "operator": "--",
                          "prefix": false,
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
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7100,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "ownerToTokensOwned"
                                    },
                                    "id": 7607,
                                    "name": "Identifier",
                                    "src": "5889:18:30"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 7556,
                                      "type": "address",
                                      "value": "_owner"
                                    },
                                    "id": 7608,
                                    "name": "Identifier",
                                    "src": "5908:6:30"
                                  }
                                ],
                                "id": 7609,
                                "name": "IndexAccess",
                                "src": "5889:26:30"
                              }
                            ],
                            "id": 7610,
                            "name": "MemberAccess",
                            "src": "5889:33:30"
                          }
                        ],
                        "id": 7611,
                        "name": "UnaryOperation",
                        "src": "5889:35:30"
                      }
                    ],
                    "id": 7612,
                    "name": "ExpressionStatement",
                    "src": "5889:35:30"
                  }
                ],
                "id": 7613,
                "name": "Block",
                "src": "5535:396:30"
              }
            ],
            "id": 7614,
            "name": "FunctionDefinition",
            "src": "5447:484:30"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_insertTokenMetadata",
              "payable": false,
              "scope": 7629,
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
                      "scope": 7628,
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
                        "id": 7615,
                        "name": "ElementaryTypeName",
                        "src": "5967:4:30"
                      }
                    ],
                    "id": 7616,
                    "name": "VariableDeclaration",
                    "src": "5967:13:30"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_metadata",
                      "scope": 7628,
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
                        "id": 7617,
                        "name": "ElementaryTypeName",
                        "src": "5982:6:30"
                      }
                    ],
                    "id": 7618,
                    "name": "VariableDeclaration",
                    "src": "5982:16:30"
                  }
                ],
                "id": 7619,
                "name": "ParameterList",
                "src": "5966:33:30"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 7620,
                "name": "ParameterList",
                "src": "6021:0:30"
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
                                  "referencedDeclaration": 7095,
                                  "type": "mapping(uint256 => string storage ref)",
                                  "value": "tokenIdToMetadata"
                                },
                                "id": 7621,
                                "name": "Identifier",
                                "src": "6031:17:30"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 7616,
                                  "type": "uint256",
                                  "value": "_tokenId"
                                },
                                "id": 7622,
                                "name": "Identifier",
                                "src": "6049:8:30"
                              }
                            ],
                            "id": 7623,
                            "name": "IndexAccess",
                            "src": "6031:27:30"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 7618,
                              "type": "string memory",
                              "value": "_metadata"
                            },
                            "id": 7624,
                            "name": "Identifier",
                            "src": "6061:9:30"
                          }
                        ],
                        "id": 7625,
                        "name": "Assignment",
                        "src": "6031:39:30"
                      }
                    ],
                    "id": 7626,
                    "name": "ExpressionStatement",
                    "src": "6031:39:30"
                  }
                ],
                "id": 7627,
                "name": "Block",
                "src": "6021:56:30"
              }
            ],
            "id": 7628,
            "name": "FunctionDefinition",
            "src": "5937:140:30"
          }
        ],
        "id": 7629,
        "name": "ContractDefinition",
        "src": "449:5630:30"
      }
    ],
    "id": 7630,
    "name": "SourceUnit",
    "src": "0:6080:30"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T00:23:04.359Z"
}