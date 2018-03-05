export const DebtRegistry = 
{
  "contractName": "DebtRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "issuanceHash",
          "type": "bytes32"
        }
      ],
      "name": "getTermsContractParameters",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedEditAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "issuanceHash",
          "type": "bytes32"
        },
        {
          "name": "newBeneficiary",
          "type": "address"
        }
      ],
      "name": "modifyBeneficiary",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "inputs": [],
      "name": "getAuthorizedInsertAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "issuanceHash",
          "type": "bytes32"
        }
      ],
      "name": "getTerms",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
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
      "inputs": [
        {
          "name": "debtor",
          "type": "address"
        }
      ],
      "name": "getDebtorsDebts",
      "outputs": [
        {
          "name": "",
          "type": "bytes32[]"
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
          "name": "issuanceHash",
          "type": "bytes32"
        }
      ],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "address"
        },
        {
          "name": "",
          "type": "bytes32"
        },
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeEditAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "addAuthorizedInsertAgent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "issuanceHash",
          "type": "bytes32"
        }
      ],
      "name": "getBeneficiary",
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
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "revokeInsertAgentAuthorization",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
      "name": "insert",
      "outputs": [
        {
          "name": "_issuanceHash",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "issuanceHash",
          "type": "bytes32"
        }
      ],
      "name": "getIssuanceBlockTimestamp",
      "outputs": [
        {
          "name": "timestamp",
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
      "constant": true,
      "inputs": [
        {
          "name": "issuanceHash",
          "type": "bytes32"
        }
      ],
      "name": "getTermsContract",
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
      "name": "getAuthorizedEditAgents",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "issuanceHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "underwriter",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "underwriterRiskRating",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "termsContract",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "termsContractParameters",
          "type": "bytes32"
        }
      ],
      "name": "LogInsertEntry",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "issuanceHash",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "previousBeneficiary",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newBeneficiary",
          "type": "address"
        }
      ],
      "name": "LogModifyEntryBeneficiary",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "LogAddAuthorizedInsertAgent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "LogAddAuthorizedEditAgent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "LogRevokeInsertAgentAuthorization",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "agent",
          "type": "address"
        }
      ],
      "name": "LogRevokeEditAgentAuthorization",
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
    }
  ],
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506120808061006d6000396000f300606060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063314a522e146101175780633f4ba83a1461015a57806342cc6b041461016f5780635969549e146101a85780635c975abb146101ee57806364a666f21461021b5780636be39bda146102855780638456cb59146102fb5780638ad1d846146103105780638da5cb5b1461039e5780638eaa6ac0146103f35780639329939514610510578063ad65599814610549578063ba20dda414610582578063c205e64c146105e9578063cf9df5eb14610622578063d69dbf6314610712578063f2fde38b1461074d578063f6f494c914610786578063f94df678146107ed575b600080fd5b341561012257600080fd5b61013c600480803560001916906020019091905050610857565b60405180826000191660001916815260200191505060405180910390f35b341561016557600080fd5b61016d6108fb565b005b341561017a57600080fd5b6101a6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109b9565b005b34156101b357600080fd5b6101ec60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a8e565b005b34156101f957600080fd5b610201610c87565b604051808215151515815260200191505060405180910390f35b341561022657600080fd5b61022e610c9a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610271578082015181840152602081019050610256565b505050509050019250505060405180910390f35b341561029057600080fd5b6102aa600480803560001916906020019091905050610cb1565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b341561030657600080fd5b61030e610d1b565b005b341561031b57600080fd5b610347600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ddb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561038a57808201518184015260208101905061036f565b505050509050019250505060405180910390f35b34156103a957600080fd5b6103b1610e7c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103fe57600080fd5b610418600480803560001916906020019091905050610ea1565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561051b57600080fd5b610547600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061101e565b005b341561055457600080fd5b610580600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506110f3565b005b341561058d57600080fd5b6105a76004808035600019169060200190919050506111c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105f457600080fd5b610620600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611210565b005b341561062d57600080fd5b6106f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506112e5565b60405180826000191660001916815260200191505060405180910390f35b341561071d57600080fd5b610737600480803560001916906020019091905050611720565b6040518082815260200191505060405180910390f35b341561075857600080fd5b610784600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611748565b005b341561079157600080fd5b6107ab60048080356000191690602001909190505061189d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107f857600080fd5b6108006118e5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610843578082015181840152602081019050610828565b505050509050019250505060405180910390f35b600081600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156108d457600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561095657600080fd5b600060149054906101000a900460ff16151561097157600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1457600080fd5b610a288160066118fc90919063ffffffff16565b7f1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000610aa4336006611a2490919063ffffffff16565b1515610aaf57600080fd5b600060149054906101000a900460ff16151515610acb57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515610b4657600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b8357600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610ca2611ec5565b610cac6003611a7d565b905090565b60008060016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600085600019166000191681526020019081526020016000206005015491509150915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7657600080fd5b600060149054906101000a900460ff16151515610d9257600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610de3611ed9565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610e7057602002820191906000526020600020905b81546000191681526020019060010190808311610e58575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107957600080fd5b61108d816006611b1590919063ffffffff16565b7fd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af92181604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561114e57600080fd5b6111628160036118fc90919063ffffffff16565b7f3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600060016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561126b57600080fd5b61127f816003611b1590919063ffffffff16565b7fc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b1281604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60006112ef611eed565b6000611305336003611a2490919063ffffffff16565b151561131057600080fd5b600060149054906101000a900460ff1615151561132c57600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561136957600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff16815260200187600019168152602001428152509250611406838b87611d57565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561148157600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816116319190611f86565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b6000600160008360001916600019168152602001908152602001600020600601549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117a357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156117df57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060016000836000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6118ed611ec5565b6118f76006611a7d565b905090565b6119068282611eb0565b151561191157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816119819190611fb2565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611a85611ec5565b81600201805480602002602001604051908101604052809291908181526020018280548015611b0957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611abf575b50505050509050919050565b6000806000611b248585611a24565b1515611b2f57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611b9157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611c2257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611d0757fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611d4f9190611fde565b505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b6000611ebc8383611a24565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b815481835581811511611fad57818360005260206000209182019101611fac919061200a565b5b505050565b815481835581811511611fd957818360005260206000209182019101611fd8919061202f565b5b505050565b81548183558181151161200557818360005260206000209182019101612004919061202f565b5b505050565b61202c91905b80821115612028576000816000905550600101612010565b5090565b90565b61205191905b8082111561204d576000816000905550600101612035565b5090565b905600a165627a7a72305820f2caf101ff2614444d7824560e5c3d94561b6448237fb00302578ab8075e9ec20029",
  "deployedBytecode": "0x606060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063314a522e146101175780633f4ba83a1461015a57806342cc6b041461016f5780635969549e146101a85780635c975abb146101ee57806364a666f21461021b5780636be39bda146102855780638456cb59146102fb5780638ad1d846146103105780638da5cb5b1461039e5780638eaa6ac0146103f35780639329939514610510578063ad65599814610549578063ba20dda414610582578063c205e64c146105e9578063cf9df5eb14610622578063d69dbf6314610712578063f2fde38b1461074d578063f6f494c914610786578063f94df678146107ed575b600080fd5b341561012257600080fd5b61013c600480803560001916906020019091905050610857565b60405180826000191660001916815260200191505060405180910390f35b341561016557600080fd5b61016d6108fb565b005b341561017a57600080fd5b6101a6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109b9565b005b34156101b357600080fd5b6101ec60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a8e565b005b34156101f957600080fd5b610201610c87565b604051808215151515815260200191505060405180910390f35b341561022657600080fd5b61022e610c9a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610271578082015181840152602081019050610256565b505050509050019250505060405180910390f35b341561029057600080fd5b6102aa600480803560001916906020019091905050610cb1565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b341561030657600080fd5b61030e610d1b565b005b341561031b57600080fd5b610347600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ddb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561038a57808201518184015260208101905061036f565b505050509050019250505060405180910390f35b34156103a957600080fd5b6103b1610e7c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103fe57600080fd5b610418600480803560001916906020019091905050610ea1565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561051b57600080fd5b610547600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061101e565b005b341561055457600080fd5b610580600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506110f3565b005b341561058d57600080fd5b6105a76004808035600019169060200190919050506111c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105f457600080fd5b610620600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611210565b005b341561062d57600080fd5b6106f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506112e5565b60405180826000191660001916815260200191505060405180910390f35b341561071d57600080fd5b610737600480803560001916906020019091905050611720565b6040518082815260200191505060405180910390f35b341561075857600080fd5b610784600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611748565b005b341561079157600080fd5b6107ab60048080356000191690602001909190505061189d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107f857600080fd5b6108006118e5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610843578082015181840152602081019050610828565b505050509050019250505060405180910390f35b600081600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156108d457600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561095657600080fd5b600060149054906101000a900460ff16151561097157600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1457600080fd5b610a288160066118fc90919063ffffffff16565b7f1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000610aa4336006611a2490919063ffffffff16565b1515610aaf57600080fd5b600060149054906101000a900460ff16151515610acb57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515610b4657600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b8357600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610ca2611ec5565b610cac6003611a7d565b905090565b60008060016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600085600019166000191681526020019081526020016000206005015491509150915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7657600080fd5b600060149054906101000a900460ff16151515610d9257600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610de3611ed9565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610e7057602002820191906000526020600020905b81546000191681526020019060010190808311610e58575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107957600080fd5b61108d816006611b1590919063ffffffff16565b7fd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af92181604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561114e57600080fd5b6111628160036118fc90919063ffffffff16565b7f3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600060016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561126b57600080fd5b61127f816003611b1590919063ffffffff16565b7fc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b1281604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60006112ef611eed565b6000611305336003611a2490919063ffffffff16565b151561131057600080fd5b600060149054906101000a900460ff1615151561132c57600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561136957600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff16815260200187600019168152602001428152509250611406838b87611d57565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561148157600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816116319190611f86565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b6000600160008360001916600019168152602001908152602001600020600601549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117a357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156117df57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060016000836000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6118ed611ec5565b6118f76006611a7d565b905090565b6119068282611eb0565b151561191157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816119819190611fb2565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611a85611ec5565b81600201805480602002602001604051908101604052809291908181526020018280548015611b0957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611abf575b50505050509050919050565b6000806000611b248585611a24565b1515611b2f57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611b9157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611c2257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611d0757fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611d4f9190611fde565b505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b6000611ebc8383611a24565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b815481835581811511611fad57818360005260206000209182019101611fac919061200a565b5b505050565b815481835581811511611fd957818360005260206000209182019101611fd8919061202f565b5b505050565b81548183558181151161200557818360005260206000209182019101612004919061202f565b5b505050565b61202c91905b80821115612028576000816000905550600101612010565b5090565b90565b61205191905b8082111561204d576000816000905550600101612035565b5090565b905600a165627a7a72305820f2caf101ff2614444d7824560e5c3d94561b6448237fb00302578ab8075e9ec20029",
  "sourceMap": "1082:8690:1:-;;;268:5:31;247:26;;;;;;;;;;;;;;;;;;;;509:10:33;501:5;;:18;;;;;;;;;;;;;;;;;;1082:8690:1;;;;;;",
  "deployedSourceMap": "1082:8690:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7586:224;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:31;;;;;;;;;;;;;;5518:180:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;4563:500;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:31;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8572:164:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;7935:250:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:31;;;;;;;;;;;;;;9145:145:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;238:20:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6474:541:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6185:202;;;;;;;;;;;;;;;;;;;;;;;;;;;;5192:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;7088:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5832:208;;;;;;;;;;;;;;;;;;;;;;;;;;;;3214:1178;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8287:191;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;7333:166:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8841:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;7586:224:1;7727:7;7696:12;2910:1;2864:48;;:8;:22;2873:12;2864:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;:48;;;;2856:57;;;;;;;;7757:8;:22;7766:12;7757:22;;;;;;;;;;;;;;;;;:46;;;7750:53;;7586:224;;;;:::o;833:87:31:-;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:31;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;5518:180:1:-;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5612:37:1;5643:5;5612:20;:30;;:37;;;;:::i;:::-;5659:32;5685:5;5659:32;;;;;;;;;;;;;;;;;;;;;;5518:180;:::o;4563:500::-;4797:27;2729:45;2763:10;2729:20;:33;;:45;;;;:::i;:::-;2721:54;;;;;;;;416:6:31;;;;;;;;;;;415:7;407:16;;;;;;;;4726:12:1;2910:1;2864:48;;:8;:22;2873:12;2864:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;:48;;;;2856:57;;;;;;;;4767:14;3027:1;3004:25;;:11;:25;;;;2996:34;;;;;;;;4827:8;:22;4836:12;4827:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;4797:64;;4909:14;4872:8;:22;4881:12;4872:22;;;;;;;;;;;;;;;;;:34;;;:51;;;;;;;;;;;;;;;;;;5032:14;4934:122;;4999:19;4934:122;;4973:12;4934:122;;;;;;;;;;;;;2923:1;429::31;4563:500:1;;;:::o;247:26:31:-;;;;;;;;;;;;;:::o;8572:164:1:-;8653:9;;:::i;:::-;8685:44;:22;:42;:44::i;:::-;8678:51;;8572:164;:::o;7935:250::-;8019:7;8028;8072:8;:22;8081:12;8072:22;;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;8122:8;:22;8131:12;8122:22;;;;;;;;;;;;;;;;;:46;;;8051:127;;;;7935:250;;;:::o;666:85:31:-;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:31;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;9145:145:1:-;9230:9;;:::i;:::-;9262:13;:21;9276:6;9262:21;;;;;;;;;;;;;;;9255:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9145:145;;;:::o;238:20:33:-;;;;;;;;;;;;;:::o;6474:541:1:-;6553:7;6562;6571;6580:4;6586:7;6595;6604:4;6645:8;:22;6654:12;6645:22;;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;6689:8;:22;6698:12;6689:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;6737:8;:22;6746:12;6737:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;6785:8;:22;6794:12;6785:22;;;;;;;;;;;;;;;;;:44;;;6843:8;:22;6852:12;6843:22;;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;6893:8;:22;6902:12;6893:22;;;;;;;;;;;;;;;;;:46;;;6953:8;:22;6962:12;6953:22;;;;;;;;;;;;;;;;;:45;;;6624:384;;;;;;;;;;;;;;6474:541;;;;;;;;;:::o;6185:202::-;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;6285:47:1;6326:5;6285:20;:40;;:47;;;;:::i;:::-;6342:38;6374:5;6342:38;;;;;;;;;;;;;;;;;;;;;;6185:202;:::o;5192:186::-;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5288:39:1;5321:5;5288:22;:32;;:39;;;;:::i;:::-;5337:34;5365:5;5337:34;;;;;;;;;;;;;;;;;;;;;;5192:186;:::o;7088:161::-;7178:7;7208:8;:22;7217:12;7208:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;7201:41;;7088:161;;;:::o;5832:208::-;653:5:33;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5934:49:1;5977:5;5934:22;:42;;:49;;;;:::i;:::-;5993:40;6027:5;5993:40;;;;;;;;;;;;;;;;;;;;;;5832:208;:::o;3214:1178::-;3604:21;3641:18;;:::i;:::-;3893:20;2607:47;2643:10;2607:22;:35;;:47;;;;:::i;:::-;2599:56;;;;;;;;416:6:31;;;;;;;;;;;415:7;407:16;;;;;;;;3573:12:1;3027:1;3004:25;;:11;:25;;;;2996:34;;;;;;;;3662:220;;;;;;;;;3681:8;3662:220;;;;;;3703:12;3662:220;;;;;;3729:12;3662:220;;;;;;3755:22;3662:220;;;;3791:14;3662:220;;;;;;3819:24;3662:220;;;;;;;3857:15;3662:220;;;3641:241;;3916:39;3933:5;3940:7;3949:5;3916:16;:39::i;:::-;3893:62;;4020:1;3974:48;;:8;:22;3983:12;3974:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;:48;;;3966:57;;;;;;;;4059:5;4034:8;:22;4043:12;4034:22;;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4074:13;:22;4088:7;4074:22;;;;;;;;;;;;;;;:41;;;;;;;;;;;:::i;:::-;;;;;;;;;;4102:12;4074:41;;;;;;;;;;;;4211:5;:17;;;4126:229;;4180:5;:17;;;4126:229;;4154:12;4126:229;;;;4242:5;:27;;;4283:5;:19;;;4316:5;:29;;;4126:229;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4373:12;4366:19;;429:1:31;3214:1178:1;;;;;;;;;;;;:::o;8287:191::-;8389:14;8426:8;:22;8435:12;8426:22;;;;;;;;;;;;;;;;;:45;;;8419:52;;8287:191;;;:::o;832:169:33:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;7333:166:1:-;7426:7;7456:8;:22;7465:12;7456:22;;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;7449:43;;7333:166;;;:::o;8841:160::-;8920:9;;:::i;:::-;8952:42;:20;:40;:42::i;:::-;8945:49;;8841:160;:::o;825:287:15:-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;2185:166::-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;2536:162::-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;1118:1061::-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;9379:391:1:-;9494:7;9547:6;:14;;;9575:7;9596:6;:18;;;9628:6;:28;;;9670:6;:20;;;9704:6;:30;;;9748:5;9524:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9517:246;;9379:391;;;;;:::o;2357:173:15:-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;1082:8690:1:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\n * Dharma protocol.  It authorizes a limited number of agents to\n * perform mutations on it -- those agents can be changed at any\n * time by the contract's owner.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtRegistry is Pausable {\n    using SafeMath for uint;\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    struct Entry {\n        address version;\n        address beneficiary;\n        address underwriter;\n        uint underwriterRiskRating;\n        address termsContract;\n        bytes32 termsContractParameters;\n        uint issuanceBlockTimestamp;\n    }\n\n    // Primary registry mapping issuance hashes to their corresponding entries\n    mapping (bytes32 => Entry) internal registry;\n\n    // Maps debtor addresses to a list of their debts' issuance hashes\n    mapping (address => bytes32[]) internal debtorToDebts;\n\n    PermissionsLib.Permissions internal entryInsertPermissions;\n    PermissionsLib.Permissions internal entryEditPermissions;\n\n    event LogInsertEntry(\n        bytes32 indexed issuanceHash,\n        address indexed beneficiary,\n        address indexed underwriter,\n        uint underwriterRiskRating,\n        address termsContract,\n        bytes32 termsContractParameters\n    );\n\n    event LogModifyEntryBeneficiary(\n        bytes32 indexed issuanceHash,\n        address indexed previousBeneficiary,\n        address indexed newBeneficiary\n    );\n\n    event LogAddAuthorizedInsertAgent(\n        address agent\n    );\n\n    event LogAddAuthorizedEditAgent(\n        address agent\n    );\n\n    event LogRevokeInsertAgentAuthorization(\n        address agent\n    );\n\n    event LogRevokeEditAgentAuthorization(\n        address agent\n    );\n\n    modifier onlyAuthorizedToInsert() {\n        require(entryInsertPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyAuthorizedToEdit() {\n        require(entryEditPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyExtantEntry(bytes32 issuanceHash) {\n        require(registry[issuanceHash].beneficiary != address(0));\n        _;\n    }\n\n    modifier nonNullBeneficiary(address beneficiary) {\n        require(beneficiary != address(0));\n        _;\n    }\n\n    /**\n     * Inserts a new entry into the registry, if the entry is valid and sender is\n     * authorized to make 'insert' mutations to the registry.\n     */\n    function insert(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        onlyAuthorizedToInsert\n        whenNotPaused\n        nonNullBeneficiary(_beneficiary)\n        returns (bytes32 _issuanceHash)\n    {\n        Entry memory entry = Entry(\n            _version,\n            _beneficiary,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            block.timestamp\n        );\n\n        bytes32 issuanceHash = _getIssuanceHash(entry, _debtor, _salt);\n\n        require(registry[issuanceHash].beneficiary == address(0));\n\n        registry[issuanceHash] = entry;\n        debtorToDebts[_debtor].push(issuanceHash);\n\n        LogInsertEntry(\n            issuanceHash,\n            entry.beneficiary,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.termsContract,\n            entry.termsContractParameters\n        );\n\n        return issuanceHash;\n    }\n\n    /**\n     * Modifies the beneficiary of a debt issuance, if the sender\n     * is authorized to make 'modifyBeneficiary' mutations to\n     * the registry.\n     */\n    function modifyBeneficiary(bytes32 issuanceHash, address newBeneficiary)\n        public\n        onlyAuthorizedToEdit\n        whenNotPaused\n        onlyExtantEntry(issuanceHash)\n        nonNullBeneficiary(newBeneficiary)\n    {\n        address previousBeneficiary = registry[issuanceHash].beneficiary;\n\n        registry[issuanceHash].beneficiary = newBeneficiary;\n\n        LogModifyEntryBeneficiary(\n            issuanceHash,\n            previousBeneficiary,\n            newBeneficiary\n        );\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function addAuthorizedInsertAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.authorize(agent);\n        LogAddAuthorizedInsertAgent(agent);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function addAuthorizedEditAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.authorize(agent);\n        LogAddAuthorizedEditAgent(agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function revokeInsertAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.revokeAuthorization(agent);\n        LogRevokeInsertAgentAuthorization(agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function revokeEditAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.revokeAuthorization(agent);\n        LogRevokeEditAgentAuthorization(agent);\n    }\n\n    /**\n     * Returns the parameters of a debt issuance in the registry\n     */\n    function get(bytes32 issuanceHash)\n        public\n        view\n        returns(address, address, address, uint, address, bytes32, uint)\n    {\n        return (\n            registry[issuanceHash].version,\n            registry[issuanceHash].beneficiary,\n            registry[issuanceHash].underwriter,\n            registry[issuanceHash].underwriterRiskRating,\n            registry[issuanceHash].termsContract,\n            registry[issuanceHash].termsContractParameters,\n            registry[issuanceHash].issuanceBlockTimestamp\n        );\n    }\n\n    /**\n     * Returns the beneficiary of a given issuance\n     */\n    function getBeneficiary(bytes32 issuanceHash)\n        public\n        view\n        returns(address)\n    {\n        return registry[issuanceHash].beneficiary;\n    }\n\n    /**\n     * Returns the terms contract address of a given issuance\n     */\n    function getTermsContract(bytes32 issuanceHash)\n        public\n        view\n        returns (address)\n    {\n        return registry[issuanceHash].termsContract;\n    }\n\n    /**\n     * Returns the terms contract parameters of a given issuance\n     */\n    function getTermsContractParameters(bytes32 issuanceHash)\n        public\n        view\n        onlyExtantEntry(issuanceHash)\n        returns (bytes32)\n    {\n        return registry[issuanceHash].termsContractParameters;\n    }\n\n    /**\n     * Returns a tuple of the terms contract and its associated parameters\n     * for a given issuance\n     */\n    function getTerms(bytes32 issuanceHash)\n        public\n        view\n        returns(address, bytes32)\n    {\n        return (\n            registry[issuanceHash].termsContract,\n            registry[issuanceHash].termsContractParameters\n        );\n    }\n\n    /**\n     * Returns the timestamp of the block at which a debt agreement was issued.\n     */\n    function getIssuanceBlockTimestamp(bytes32 issuanceHash)\n        public\n        view\n        returns (uint timestamp)\n    {\n        return registry[issuanceHash].issuanceBlockTimestamp;\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'insert' mutations\n     */\n    function getAuthorizedInsertAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryInsertPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'modifyBeneficiary' mutations\n     */\n    function getAuthorizedEditAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryEditPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of debt agreements a debtor is party to,\n     * with each debt agreement listed by issuance hash.\n     */\n    function getDebtorsDebts(address debtor)\n        public\n        view\n        returns(bytes32[])\n    {\n        return debtorToDebts[debtor];\n    }\n\n    /**\n     * Helper function for computing the hash of a given issuance.\n     */\n    function _getIssuanceHash(Entry _entry, address _debtor, uint _salt)\n        internal\n        pure\n        returns(bytes32)\n    {\n        return keccak256(\n            _entry.version,\n            _debtor,\n            _entry.underwriter,\n            _entry.underwriterRiskRating,\n            _entry.termsContract,\n            _entry.termsContractParameters,\n            _salt\n        );\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
      "exportedSymbols": {
        "DebtRegistry": [
          1652
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
        "id": 1132,
        "name": "PragmaDirective",
        "src": "584:23:1"
      },
      {
        "attributes": {
          "SourceUnit": 4971,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
          "file": "./libraries/PermissionsLib.sol",
          "scope": 1653,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1133,
        "name": "ImportDirective",
        "src": "609:40:1"
      },
      {
        "attributes": {
          "SourceUnit": 7788,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 1653,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1134,
        "name": "ImportDirective",
        "src": "650:55:1"
      },
      {
        "attributes": {
          "SourceUnit": 7690,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 1653,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1135,
        "name": "ImportDirective",
        "src": "706:60:1"
      },
      {
        "attributes": {
          "contractDependencies": [
            7689,
            7843
          ],
          "contractKind": "contract",
          "documentation": "The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\nDharma protocol.  It authorizes a limited number of agents to\nperform mutations on it -- those agents can be changed at any\ntime by the contract's owner.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1652,
            7689,
            7843
          ],
          "name": "DebtRegistry",
          "scope": 1653
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
                  "name": "Pausable",
                  "referencedDeclaration": 7689,
                  "type": "contract Pausable"
                },
                "id": 1136,
                "name": "UserDefinedTypeName",
                "src": "1107:8:1"
              }
            ],
            "id": 1137,
            "name": "InheritanceSpecifier",
            "src": "1107:8:1"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 7787,
                  "type": "library SafeMath"
                },
                "id": 1138,
                "name": "UserDefinedTypeName",
                "src": "1128:8:1"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 1139,
                "name": "ElementaryTypeName",
                "src": "1141:4:1"
              }
            ],
            "id": 1140,
            "name": "UsingForDirective",
            "src": "1122:24:1"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 4970,
                  "type": "library PermissionsLib"
                },
                "id": 1141,
                "name": "UserDefinedTypeName",
                "src": "1157:14:1"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 4804,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1142,
                "name": "UserDefinedTypeName",
                "src": "1176:26:1"
              }
            ],
            "id": 1143,
            "name": "UsingForDirective",
            "src": "1151:52:1"
          },
          {
            "attributes": {
              "canonicalName": "DebtRegistry.Entry",
              "name": "Entry",
              "scope": 1652,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "version",
                  "scope": 1158,
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
                    "id": 1144,
                    "name": "ElementaryTypeName",
                    "src": "1232:7:1"
                  }
                ],
                "id": 1145,
                "name": "VariableDeclaration",
                "src": "1232:15:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "beneficiary",
                  "scope": 1158,
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
                    "id": 1146,
                    "name": "ElementaryTypeName",
                    "src": "1257:7:1"
                  }
                ],
                "id": 1147,
                "name": "VariableDeclaration",
                "src": "1257:19:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "underwriter",
                  "scope": 1158,
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
                    "id": 1148,
                    "name": "ElementaryTypeName",
                    "src": "1286:7:1"
                  }
                ],
                "id": 1149,
                "name": "VariableDeclaration",
                "src": "1286:19:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "underwriterRiskRating",
                  "scope": 1158,
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
                    "id": 1150,
                    "name": "ElementaryTypeName",
                    "src": "1315:4:1"
                  }
                ],
                "id": 1151,
                "name": "VariableDeclaration",
                "src": "1315:26:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termsContract",
                  "scope": 1158,
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
                    "id": 1152,
                    "name": "ElementaryTypeName",
                    "src": "1351:7:1"
                  }
                ],
                "id": 1153,
                "name": "VariableDeclaration",
                "src": "1351:21:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termsContractParameters",
                  "scope": 1158,
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
                    "id": 1154,
                    "name": "ElementaryTypeName",
                    "src": "1382:7:1"
                  }
                ],
                "id": 1155,
                "name": "VariableDeclaration",
                "src": "1382:31:1"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "issuanceBlockTimestamp",
                  "scope": 1158,
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
                    "id": 1156,
                    "name": "ElementaryTypeName",
                    "src": "1423:4:1"
                  }
                ],
                "id": 1157,
                "name": "VariableDeclaration",
                "src": "1423:27:1"
              }
            ],
            "id": 1158,
            "name": "StructDefinition",
            "src": "1209:248:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "registry",
              "scope": 1652,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "bytes32",
                      "type": "bytes32"
                    },
                    "id": 1159,
                    "name": "ElementaryTypeName",
                    "src": "1551:7:1"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Entry",
                      "referencedDeclaration": 1158,
                      "type": "struct DebtRegistry.Entry storage pointer"
                    },
                    "id": 1160,
                    "name": "UserDefinedTypeName",
                    "src": "1562:5:1"
                  }
                ],
                "id": 1161,
                "name": "Mapping",
                "src": "1542:26:1"
              }
            ],
            "id": 1162,
            "name": "VariableDeclaration",
            "src": "1542:44:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtorToDebts",
              "scope": 1652,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 1163,
                    "name": "ElementaryTypeName",
                    "src": "1673:7:1"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 1164,
                        "name": "ElementaryTypeName",
                        "src": "1684:7:1"
                      }
                    ],
                    "id": 1165,
                    "name": "ArrayTypeName",
                    "src": "1684:9:1"
                  }
                ],
                "id": 1166,
                "name": "Mapping",
                "src": "1664:30:1"
              }
            ],
            "id": 1167,
            "name": "VariableDeclaration",
            "src": "1664:53:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "entryInsertPermissions",
              "scope": 1652,
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
                  "referencedDeclaration": 4804,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1168,
                "name": "UserDefinedTypeName",
                "src": "1724:26:1"
              }
            ],
            "id": 1169,
            "name": "VariableDeclaration",
            "src": "1724:58:1"
          },
          {
            "attributes": {
              "constant": false,
              "name": "entryEditPermissions",
              "scope": 1652,
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
                  "referencedDeclaration": 4804,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1170,
                "name": "UserDefinedTypeName",
                "src": "1788:26:1"
              }
            ],
            "id": 1171,
            "name": "VariableDeclaration",
            "src": "1788:56:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogInsertEntry"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "issuanceHash",
                      "scope": 1185,
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
                        "id": 1172,
                        "name": "ElementaryTypeName",
                        "src": "1881:7:1"
                      }
                    ],
                    "id": 1173,
                    "name": "VariableDeclaration",
                    "src": "1881:28:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "beneficiary",
                      "scope": 1185,
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
                        "id": 1174,
                        "name": "ElementaryTypeName",
                        "src": "1919:7:1"
                      }
                    ],
                    "id": 1175,
                    "name": "VariableDeclaration",
                    "src": "1919:27:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "underwriter",
                      "scope": 1185,
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
                        "id": 1176,
                        "name": "ElementaryTypeName",
                        "src": "1956:7:1"
                      }
                    ],
                    "id": 1177,
                    "name": "VariableDeclaration",
                    "src": "1956:27:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "underwriterRiskRating",
                      "scope": 1185,
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
                        "id": 1178,
                        "name": "ElementaryTypeName",
                        "src": "1993:4:1"
                      }
                    ],
                    "id": 1179,
                    "name": "VariableDeclaration",
                    "src": "1993:26:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termsContract",
                      "scope": 1185,
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
                        "id": 1180,
                        "name": "ElementaryTypeName",
                        "src": "2029:7:1"
                      }
                    ],
                    "id": 1181,
                    "name": "VariableDeclaration",
                    "src": "2029:21:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termsContractParameters",
                      "scope": 1185,
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
                        "id": 1182,
                        "name": "ElementaryTypeName",
                        "src": "2060:7:1"
                      }
                    ],
                    "id": 1183,
                    "name": "VariableDeclaration",
                    "src": "2060:31:1"
                  }
                ],
                "id": 1184,
                "name": "ParameterList",
                "src": "1871:226:1"
              }
            ],
            "id": 1185,
            "name": "EventDefinition",
            "src": "1851:247:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogModifyEntryBeneficiary"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "issuanceHash",
                      "scope": 1193,
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
                        "id": 1186,
                        "name": "ElementaryTypeName",
                        "src": "2145:7:1"
                      }
                    ],
                    "id": 1187,
                    "name": "VariableDeclaration",
                    "src": "2145:28:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "previousBeneficiary",
                      "scope": 1193,
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
                        "id": 1188,
                        "name": "ElementaryTypeName",
                        "src": "2183:7:1"
                      }
                    ],
                    "id": 1189,
                    "name": "VariableDeclaration",
                    "src": "2183:35:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newBeneficiary",
                      "scope": 1193,
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
                        "id": 1190,
                        "name": "ElementaryTypeName",
                        "src": "2228:7:1"
                      }
                    ],
                    "id": 1191,
                    "name": "VariableDeclaration",
                    "src": "2228:30:1"
                  }
                ],
                "id": 1192,
                "name": "ParameterList",
                "src": "2135:129:1"
              }
            ],
            "id": 1193,
            "name": "EventDefinition",
            "src": "2104:161:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogAddAuthorizedInsertAgent"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "agent",
                      "scope": 1197,
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
                        "id": 1194,
                        "name": "ElementaryTypeName",
                        "src": "2314:7:1"
                      }
                    ],
                    "id": 1195,
                    "name": "VariableDeclaration",
                    "src": "2314:13:1"
                  }
                ],
                "id": 1196,
                "name": "ParameterList",
                "src": "2304:29:1"
              }
            ],
            "id": 1197,
            "name": "EventDefinition",
            "src": "2271:63:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogAddAuthorizedEditAgent"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "agent",
                      "scope": 1201,
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
                        "id": 1198,
                        "name": "ElementaryTypeName",
                        "src": "2381:7:1"
                      }
                    ],
                    "id": 1199,
                    "name": "VariableDeclaration",
                    "src": "2381:13:1"
                  }
                ],
                "id": 1200,
                "name": "ParameterList",
                "src": "2371:29:1"
              }
            ],
            "id": 1201,
            "name": "EventDefinition",
            "src": "2340:61:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogRevokeInsertAgentAuthorization"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "agent",
                      "scope": 1205,
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
                        "id": 1202,
                        "name": "ElementaryTypeName",
                        "src": "2456:7:1"
                      }
                    ],
                    "id": 1203,
                    "name": "VariableDeclaration",
                    "src": "2456:13:1"
                  }
                ],
                "id": 1204,
                "name": "ParameterList",
                "src": "2446:29:1"
              }
            ],
            "id": 1205,
            "name": "EventDefinition",
            "src": "2407:69:1"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogRevokeEditAgentAuthorization"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "agent",
                      "scope": 1209,
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
                        "id": 1206,
                        "name": "ElementaryTypeName",
                        "src": "2529:7:1"
                      }
                    ],
                    "id": 1207,
                    "name": "VariableDeclaration",
                    "src": "2529:13:1"
                  }
                ],
                "id": 1208,
                "name": "ParameterList",
                "src": "2519:29:1"
              }
            ],
            "id": 1209,
            "name": "EventDefinition",
            "src": "2482:67:1"
          },
          {
            "attributes": {
              "name": "onlyAuthorizedToInsert",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1210,
                "name": "ParameterList",
                "src": "2586:2:1"
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
                            "id": 1211,
                            "name": "Identifier",
                            "src": "2599:7:1"
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
                                  "referencedDeclaration": 4941,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1169,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "entryInsertPermissions"
                                    },
                                    "id": 1212,
                                    "name": "Identifier",
                                    "src": "2607:22:1"
                                  }
                                ],
                                "id": 1213,
                                "name": "MemberAccess",
                                "src": "2607:35:1"
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
                                    "id": 1214,
                                    "name": "Identifier",
                                    "src": "2643:3:1"
                                  }
                                ],
                                "id": 1215,
                                "name": "MemberAccess",
                                "src": "2643:10:1"
                              }
                            ],
                            "id": 1216,
                            "name": "FunctionCall",
                            "src": "2607:47:1"
                          }
                        ],
                        "id": 1217,
                        "name": "FunctionCall",
                        "src": "2599:56:1"
                      }
                    ],
                    "id": 1218,
                    "name": "ExpressionStatement",
                    "src": "2599:56:1"
                  },
                  {
                    "id": 1219,
                    "name": "PlaceholderStatement",
                    "src": "2665:1:1"
                  }
                ],
                "id": 1220,
                "name": "Block",
                "src": "2589:84:1"
              }
            ],
            "id": 1221,
            "name": "ModifierDefinition",
            "src": "2555:118:1"
          },
          {
            "attributes": {
              "name": "onlyAuthorizedToEdit",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1222,
                "name": "ParameterList",
                "src": "2708:2:1"
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
                            "id": 1223,
                            "name": "Identifier",
                            "src": "2721:7:1"
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
                                  "referencedDeclaration": 4941,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1171,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "entryEditPermissions"
                                    },
                                    "id": 1224,
                                    "name": "Identifier",
                                    "src": "2729:20:1"
                                  }
                                ],
                                "id": 1225,
                                "name": "MemberAccess",
                                "src": "2729:33:1"
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
                                    "id": 1226,
                                    "name": "Identifier",
                                    "src": "2763:3:1"
                                  }
                                ],
                                "id": 1227,
                                "name": "MemberAccess",
                                "src": "2763:10:1"
                              }
                            ],
                            "id": 1228,
                            "name": "FunctionCall",
                            "src": "2729:45:1"
                          }
                        ],
                        "id": 1229,
                        "name": "FunctionCall",
                        "src": "2721:54:1"
                      }
                    ],
                    "id": 1230,
                    "name": "ExpressionStatement",
                    "src": "2721:54:1"
                  },
                  {
                    "id": 1231,
                    "name": "PlaceholderStatement",
                    "src": "2785:1:1"
                  }
                ],
                "id": 1232,
                "name": "Block",
                "src": "2711:82:1"
              }
            ],
            "id": 1233,
            "name": "ModifierDefinition",
            "src": "2679:114:1"
          },
          {
            "attributes": {
              "name": "onlyExtantEntry",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "issuanceHash",
                      "scope": 1250,
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
                        "id": 1234,
                        "name": "ElementaryTypeName",
                        "src": "2824:7:1"
                      }
                    ],
                    "id": 1235,
                    "name": "VariableDeclaration",
                    "src": "2824:20:1"
                  }
                ],
                "id": 1236,
                "name": "ParameterList",
                "src": "2823:22:1"
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
                            "id": 1237,
                            "name": "Identifier",
                            "src": "2856:7:1"
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
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "beneficiary",
                                  "referencedDeclaration": 1147,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct DebtRegistry.Entry storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1162,
                                          "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                          "value": "registry"
                                        },
                                        "id": 1238,
                                        "name": "Identifier",
                                        "src": "2864:8:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1235,
                                          "type": "bytes32",
                                          "value": "issuanceHash"
                                        },
                                        "id": 1239,
                                        "name": "Identifier",
                                        "src": "2873:12:1"
                                      }
                                    ],
                                    "id": 1240,
                                    "name": "IndexAccess",
                                    "src": "2864:22:1"
                                  }
                                ],
                                "id": 1241,
                                "name": "MemberAccess",
                                "src": "2864:34:1"
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
                                    "id": 1242,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2902:7:1"
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
                                    "id": 1243,
                                    "name": "Literal",
                                    "src": "2910:1:1"
                                  }
                                ],
                                "id": 1244,
                                "name": "FunctionCall",
                                "src": "2902:10:1"
                              }
                            ],
                            "id": 1245,
                            "name": "BinaryOperation",
                            "src": "2864:48:1"
                          }
                        ],
                        "id": 1246,
                        "name": "FunctionCall",
                        "src": "2856:57:1"
                      }
                    ],
                    "id": 1247,
                    "name": "ExpressionStatement",
                    "src": "2856:57:1"
                  },
                  {
                    "id": 1248,
                    "name": "PlaceholderStatement",
                    "src": "2923:1:1"
                  }
                ],
                "id": 1249,
                "name": "Block",
                "src": "2846:85:1"
              }
            ],
            "id": 1250,
            "name": "ModifierDefinition",
            "src": "2799:132:1"
          },
          {
            "attributes": {
              "name": "nonNullBeneficiary",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 1264,
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
                        "id": 1251,
                        "name": "ElementaryTypeName",
                        "src": "2965:7:1"
                      }
                    ],
                    "id": 1252,
                    "name": "VariableDeclaration",
                    "src": "2965:19:1"
                  }
                ],
                "id": 1253,
                "name": "ParameterList",
                "src": "2964:21:1"
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
                            "id": 1254,
                            "name": "Identifier",
                            "src": "2996:7:1"
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
                                  "referencedDeclaration": 1252,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 1255,
                                "name": "Identifier",
                                "src": "3004:11:1"
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
                                    "id": 1256,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3019:7:1"
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
                                    "id": 1257,
                                    "name": "Literal",
                                    "src": "3027:1:1"
                                  }
                                ],
                                "id": 1258,
                                "name": "FunctionCall",
                                "src": "3019:10:1"
                              }
                            ],
                            "id": 1259,
                            "name": "BinaryOperation",
                            "src": "3004:25:1"
                          }
                        ],
                        "id": 1260,
                        "name": "FunctionCall",
                        "src": "2996:34:1"
                      }
                    ],
                    "id": 1261,
                    "name": "ExpressionStatement",
                    "src": "2996:34:1"
                  },
                  {
                    "id": 1262,
                    "name": "PlaceholderStatement",
                    "src": "3040:1:1"
                  }
                ],
                "id": 1263,
                "name": "Block",
                "src": "2986:62:1"
              }
            ],
            "id": 1264,
            "name": "ModifierDefinition",
            "src": "2937:111:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "insert",
              "payable": false,
              "scope": 1652,
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
                      "scope": 1354,
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
                        "id": 1265,
                        "name": "ElementaryTypeName",
                        "src": "3239:7:1"
                      }
                    ],
                    "id": 1266,
                    "name": "VariableDeclaration",
                    "src": "3239:16:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_beneficiary",
                      "scope": 1354,
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
                        "id": 1267,
                        "name": "ElementaryTypeName",
                        "src": "3265:7:1"
                      }
                    ],
                    "id": 1268,
                    "name": "VariableDeclaration",
                    "src": "3265:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 1354,
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
                        "id": 1269,
                        "name": "ElementaryTypeName",
                        "src": "3295:7:1"
                      }
                    ],
                    "id": 1270,
                    "name": "VariableDeclaration",
                    "src": "3295:15:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriter",
                      "scope": 1354,
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
                        "id": 1271,
                        "name": "ElementaryTypeName",
                        "src": "3320:7:1"
                      }
                    ],
                    "id": 1272,
                    "name": "VariableDeclaration",
                    "src": "3320:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriterRiskRating",
                      "scope": 1354,
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
                        "id": 1273,
                        "name": "ElementaryTypeName",
                        "src": "3350:4:1"
                      }
                    ],
                    "id": 1274,
                    "name": "VariableDeclaration",
                    "src": "3350:27:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContract",
                      "scope": 1354,
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
                        "id": 1275,
                        "name": "ElementaryTypeName",
                        "src": "3387:7:1"
                      }
                    ],
                    "id": 1276,
                    "name": "VariableDeclaration",
                    "src": "3387:22:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContractParameters",
                      "scope": 1354,
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
                        "id": 1277,
                        "name": "ElementaryTypeName",
                        "src": "3419:7:1"
                      }
                    ],
                    "id": 1278,
                    "name": "VariableDeclaration",
                    "src": "3419:32:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 1354,
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
                        "id": 1279,
                        "name": "ElementaryTypeName",
                        "src": "3461:4:1"
                      }
                    ],
                    "id": 1280,
                    "name": "VariableDeclaration",
                    "src": "3461:10:1"
                  }
                ],
                "id": 1281,
                "name": "ParameterList",
                "src": "3229:248:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_issuanceHash",
                      "scope": 1354,
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
                        "id": 1289,
                        "name": "ElementaryTypeName",
                        "src": "3604:7:1"
                      }
                    ],
                    "id": 1290,
                    "name": "VariableDeclaration",
                    "src": "3604:21:1"
                  }
                ],
                "id": 1291,
                "name": "ParameterList",
                "src": "3603:23:1"
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
                      "referencedDeclaration": 1221,
                      "type": "modifier ()",
                      "value": "onlyAuthorizedToInsert"
                    },
                    "id": 1282,
                    "name": "Identifier",
                    "src": "3501:22:1"
                  }
                ],
                "id": 1283,
                "name": "ModifierInvocation",
                "src": "3501:22:1"
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
                      "referencedDeclaration": 7650,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 1284,
                    "name": "Identifier",
                    "src": "3532:13:1"
                  }
                ],
                "id": 1285,
                "name": "ModifierInvocation",
                "src": "3532:13:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1264,
                      "type": "modifier (address)",
                      "value": "nonNullBeneficiary"
                    },
                    "id": 1286,
                    "name": "Identifier",
                    "src": "3554:18:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1268,
                      "type": "address",
                      "value": "_beneficiary"
                    },
                    "id": 1287,
                    "name": "Identifier",
                    "src": "3573:12:1"
                  }
                ],
                "id": 1288,
                "name": "ModifierInvocation",
                "src": "3554:32:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1293
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "entry",
                          "scope": 1354,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct DebtRegistry.Entry memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "Entry",
                              "referencedDeclaration": 1158,
                              "type": "struct DebtRegistry.Entry storage pointer"
                            },
                            "id": 1292,
                            "name": "UserDefinedTypeName",
                            "src": "3641:5:1"
                          }
                        ],
                        "id": 1293,
                        "name": "VariableDeclaration",
                        "src": "3641:18:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "struct DebtRegistry.Entry memory",
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1158,
                              "type": "type(struct DebtRegistry.Entry storage pointer)",
                              "value": "Entry"
                            },
                            "id": 1294,
                            "name": "Identifier",
                            "src": "3662:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1266,
                              "type": "address",
                              "value": "_version"
                            },
                            "id": 1295,
                            "name": "Identifier",
                            "src": "3681:8:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1268,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 1296,
                            "name": "Identifier",
                            "src": "3703:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1272,
                              "type": "address",
                              "value": "_underwriter"
                            },
                            "id": 1297,
                            "name": "Identifier",
                            "src": "3729:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1274,
                              "type": "uint256",
                              "value": "_underwriterRiskRating"
                            },
                            "id": 1298,
                            "name": "Identifier",
                            "src": "3755:22:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1276,
                              "type": "address",
                              "value": "_termsContract"
                            },
                            "id": 1299,
                            "name": "Identifier",
                            "src": "3791:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1278,
                              "type": "bytes32",
                              "value": "_termsContractParameters"
                            },
                            "id": 1300,
                            "name": "Identifier",
                            "src": "3819:24:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "timestamp",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 8359,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 1301,
                                "name": "Identifier",
                                "src": "3857:5:1"
                              }
                            ],
                            "id": 1302,
                            "name": "MemberAccess",
                            "src": "3857:15:1"
                          }
                        ],
                        "id": 1303,
                        "name": "FunctionCall",
                        "src": "3662:220:1"
                      }
                    ],
                    "id": 1304,
                    "name": "VariableDeclarationStatement",
                    "src": "3641:241:1"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1306
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceHash",
                          "scope": 1354,
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
                            "id": 1305,
                            "name": "ElementaryTypeName",
                            "src": "3893:7:1"
                          }
                        ],
                        "id": 1306,
                        "name": "VariableDeclaration",
                        "src": "3893:20:1"
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
                                  "typeIdentifier": "t_struct$_Entry_$1158_memory_ptr",
                                  "typeString": "struct DebtRegistry.Entry memory"
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
                              "referencedDeclaration": 1651,
                              "type": "function (struct DebtRegistry.Entry memory,address,uint256) pure returns (bytes32)",
                              "value": "_getIssuanceHash"
                            },
                            "id": 1307,
                            "name": "Identifier",
                            "src": "3916:16:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1293,
                              "type": "struct DebtRegistry.Entry memory",
                              "value": "entry"
                            },
                            "id": 1308,
                            "name": "Identifier",
                            "src": "3933:5:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1270,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 1309,
                            "name": "Identifier",
                            "src": "3940:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1280,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 1310,
                            "name": "Identifier",
                            "src": "3949:5:1"
                          }
                        ],
                        "id": 1311,
                        "name": "FunctionCall",
                        "src": "3916:39:1"
                      }
                    ],
                    "id": 1312,
                    "name": "VariableDeclarationStatement",
                    "src": "3893:62:1"
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
                            "id": 1313,
                            "name": "Identifier",
                            "src": "3966:7:1"
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
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "beneficiary",
                                  "referencedDeclaration": 1147,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "struct DebtRegistry.Entry storage ref"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1162,
                                          "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                          "value": "registry"
                                        },
                                        "id": 1314,
                                        "name": "Identifier",
                                        "src": "3974:8:1"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1306,
                                          "type": "bytes32",
                                          "value": "issuanceHash"
                                        },
                                        "id": 1315,
                                        "name": "Identifier",
                                        "src": "3983:12:1"
                                      }
                                    ],
                                    "id": 1316,
                                    "name": "IndexAccess",
                                    "src": "3974:22:1"
                                  }
                                ],
                                "id": 1317,
                                "name": "MemberAccess",
                                "src": "3974:34:1"
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
                                    "id": 1318,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4012:7:1"
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
                                    "id": 1319,
                                    "name": "Literal",
                                    "src": "4020:1:1"
                                  }
                                ],
                                "id": 1320,
                                "name": "FunctionCall",
                                "src": "4012:10:1"
                              }
                            ],
                            "id": 1321,
                            "name": "BinaryOperation",
                            "src": "3974:48:1"
                          }
                        ],
                        "id": 1322,
                        "name": "FunctionCall",
                        "src": "3966:57:1"
                      }
                    ],
                    "id": 1323,
                    "name": "ExpressionStatement",
                    "src": "3966:57:1"
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
                          "type": "struct DebtRegistry.Entry storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "struct DebtRegistry.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1162,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1324,
                                "name": "Identifier",
                                "src": "4034:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1306,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1325,
                                "name": "Identifier",
                                "src": "4043:12:1"
                              }
                            ],
                            "id": 1326,
                            "name": "IndexAccess",
                            "src": "4034:22:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1293,
                              "type": "struct DebtRegistry.Entry memory",
                              "value": "entry"
                            },
                            "id": 1327,
                            "name": "Identifier",
                            "src": "4059:5:1"
                          }
                        ],
                        "id": 1328,
                        "name": "Assignment",
                        "src": "4034:30:1"
                      }
                    ],
                    "id": 1329,
                    "name": "ExpressionStatement",
                    "src": "4034:30:1"
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
                          "type": "uint256",
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
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1167,
                                      "type": "mapping(address => bytes32[] storage ref)",
                                      "value": "debtorToDebts"
                                    },
                                    "id": 1330,
                                    "name": "Identifier",
                                    "src": "4074:13:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1270,
                                      "type": "address",
                                      "value": "_debtor"
                                    },
                                    "id": 1331,
                                    "name": "Identifier",
                                    "src": "4088:7:1"
                                  }
                                ],
                                "id": 1332,
                                "name": "IndexAccess",
                                "src": "4074:22:1"
                              }
                            ],
                            "id": 1333,
                            "name": "MemberAccess",
                            "src": "4074:27:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1306,
                              "type": "bytes32",
                              "value": "issuanceHash"
                            },
                            "id": 1334,
                            "name": "Identifier",
                            "src": "4102:12:1"
                          }
                        ],
                        "id": 1335,
                        "name": "FunctionCall",
                        "src": "4074:41:1"
                      }
                    ],
                    "id": 1336,
                    "name": "ExpressionStatement",
                    "src": "4074:41:1"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1185,
                              "type": "function (bytes32,address,address,uint256,address,bytes32)",
                              "value": "LogInsertEntry"
                            },
                            "id": 1337,
                            "name": "Identifier",
                            "src": "4126:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1306,
                              "type": "bytes32",
                              "value": "issuanceHash"
                            },
                            "id": 1338,
                            "name": "Identifier",
                            "src": "4154:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "beneficiary",
                              "referencedDeclaration": 1147,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1293,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1339,
                                "name": "Identifier",
                                "src": "4180:5:1"
                              }
                            ],
                            "id": 1340,
                            "name": "MemberAccess",
                            "src": "4180:17:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriter",
                              "referencedDeclaration": 1149,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1293,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1341,
                                "name": "Identifier",
                                "src": "4211:5:1"
                              }
                            ],
                            "id": 1342,
                            "name": "MemberAccess",
                            "src": "4211:17:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriterRiskRating",
                              "referencedDeclaration": 1151,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1293,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1343,
                                "name": "Identifier",
                                "src": "4242:5:1"
                              }
                            ],
                            "id": 1344,
                            "name": "MemberAccess",
                            "src": "4242:27:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1153,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1293,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1345,
                                "name": "Identifier",
                                "src": "4283:5:1"
                              }
                            ],
                            "id": 1346,
                            "name": "MemberAccess",
                            "src": "4283:19:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1155,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1293,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1347,
                                "name": "Identifier",
                                "src": "4316:5:1"
                              }
                            ],
                            "id": 1348,
                            "name": "MemberAccess",
                            "src": "4316:29:1"
                          }
                        ],
                        "id": 1349,
                        "name": "FunctionCall",
                        "src": "4126:229:1"
                      }
                    ],
                    "id": 1350,
                    "name": "ExpressionStatement",
                    "src": "4126:229:1"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1291
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1306,
                          "type": "bytes32",
                          "value": "issuanceHash"
                        },
                        "id": 1351,
                        "name": "Identifier",
                        "src": "4373:12:1"
                      }
                    ],
                    "id": 1352,
                    "name": "Return",
                    "src": "4366:19:1"
                  }
                ],
                "id": 1353,
                "name": "Block",
                "src": "3631:761:1"
              }
            ],
            "id": 1354,
            "name": "FunctionDefinition",
            "src": "3214:1178:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "modifyBeneficiary",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1392,
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
                        "id": 1355,
                        "name": "ElementaryTypeName",
                        "src": "4590:7:1"
                      }
                    ],
                    "id": 1356,
                    "name": "VariableDeclaration",
                    "src": "4590:20:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "newBeneficiary",
                      "scope": 1392,
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
                        "id": 1357,
                        "name": "ElementaryTypeName",
                        "src": "4612:7:1"
                      }
                    ],
                    "id": 1358,
                    "name": "VariableDeclaration",
                    "src": "4612:22:1"
                  }
                ],
                "id": 1359,
                "name": "ParameterList",
                "src": "4589:46:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1370,
                "name": "ParameterList",
                "src": "4787:0:1"
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
                      "referencedDeclaration": 1233,
                      "type": "modifier ()",
                      "value": "onlyAuthorizedToEdit"
                    },
                    "id": 1360,
                    "name": "Identifier",
                    "src": "4659:20:1"
                  }
                ],
                "id": 1361,
                "name": "ModifierInvocation",
                "src": "4659:20:1"
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
                      "referencedDeclaration": 7650,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 1362,
                    "name": "Identifier",
                    "src": "4688:13:1"
                  }
                ],
                "id": 1363,
                "name": "ModifierInvocation",
                "src": "4688:13:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1250,
                      "type": "modifier (bytes32)",
                      "value": "onlyExtantEntry"
                    },
                    "id": 1364,
                    "name": "Identifier",
                    "src": "4710:15:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1356,
                      "type": "bytes32",
                      "value": "issuanceHash"
                    },
                    "id": 1365,
                    "name": "Identifier",
                    "src": "4726:12:1"
                  }
                ],
                "id": 1366,
                "name": "ModifierInvocation",
                "src": "4710:29:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1264,
                      "type": "modifier (address)",
                      "value": "nonNullBeneficiary"
                    },
                    "id": 1367,
                    "name": "Identifier",
                    "src": "4748:18:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1358,
                      "type": "address",
                      "value": "newBeneficiary"
                    },
                    "id": 1368,
                    "name": "Identifier",
                    "src": "4767:14:1"
                  }
                ],
                "id": 1369,
                "name": "ModifierInvocation",
                "src": "4748:34:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1372
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBeneficiary",
                          "scope": 1392,
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
                            "id": 1371,
                            "name": "ElementaryTypeName",
                            "src": "4797:7:1"
                          }
                        ],
                        "id": 1372,
                        "name": "VariableDeclaration",
                        "src": "4797:27:1"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "beneficiary",
                          "referencedDeclaration": 1147,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct DebtRegistry.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1162,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1373,
                                "name": "Identifier",
                                "src": "4827:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1356,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1374,
                                "name": "Identifier",
                                "src": "4836:12:1"
                              }
                            ],
                            "id": 1375,
                            "name": "IndexAccess",
                            "src": "4827:22:1"
                          }
                        ],
                        "id": 1376,
                        "name": "MemberAccess",
                        "src": "4827:34:1"
                      }
                    ],
                    "id": 1377,
                    "name": "VariableDeclarationStatement",
                    "src": "4797:64:1"
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
                              "member_name": "beneficiary",
                              "referencedDeclaration": 1147,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1378,
                                    "name": "Identifier",
                                    "src": "4872:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1356,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1379,
                                    "name": "Identifier",
                                    "src": "4881:12:1"
                                  }
                                ],
                                "id": 1380,
                                "name": "IndexAccess",
                                "src": "4872:22:1"
                              }
                            ],
                            "id": 1381,
                            "name": "MemberAccess",
                            "src": "4872:34:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1358,
                              "type": "address",
                              "value": "newBeneficiary"
                            },
                            "id": 1382,
                            "name": "Identifier",
                            "src": "4909:14:1"
                          }
                        ],
                        "id": 1383,
                        "name": "Assignment",
                        "src": "4872:51:1"
                      }
                    ],
                    "id": 1384,
                    "name": "ExpressionStatement",
                    "src": "4872:51:1"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1193,
                              "type": "function (bytes32,address,address)",
                              "value": "LogModifyEntryBeneficiary"
                            },
                            "id": 1385,
                            "name": "Identifier",
                            "src": "4934:25:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1356,
                              "type": "bytes32",
                              "value": "issuanceHash"
                            },
                            "id": 1386,
                            "name": "Identifier",
                            "src": "4973:12:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1372,
                              "type": "address",
                              "value": "previousBeneficiary"
                            },
                            "id": 1387,
                            "name": "Identifier",
                            "src": "4999:19:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1358,
                              "type": "address",
                              "value": "newBeneficiary"
                            },
                            "id": 1388,
                            "name": "Identifier",
                            "src": "5032:14:1"
                          }
                        ],
                        "id": 1389,
                        "name": "FunctionCall",
                        "src": "4934:122:1"
                      }
                    ],
                    "id": 1390,
                    "name": "ExpressionStatement",
                    "src": "4934:122:1"
                  }
                ],
                "id": 1391,
                "name": "Block",
                "src": "4787:276:1"
              }
            ],
            "id": 1392,
            "name": "FunctionDefinition",
            "src": "4563:500:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedInsertAgent",
              "payable": false,
              "scope": 1652,
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
                      "name": "agent",
                      "scope": 1410,
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
                        "id": 1393,
                        "name": "ElementaryTypeName",
                        "src": "5226:7:1"
                      }
                    ],
                    "id": 1394,
                    "name": "VariableDeclaration",
                    "src": "5226:13:1"
                  }
                ],
                "id": 1395,
                "name": "ParameterList",
                "src": "5225:15:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1398,
                "name": "ParameterList",
                "src": "5278:0:1"
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
                      "referencedDeclaration": 7817,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1396,
                    "name": "Identifier",
                    "src": "5264:9:1"
                  }
                ],
                "id": 1397,
                "name": "ModifierInvocation",
                "src": "5264:9:1"
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
                              "referencedDeclaration": 4847,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1169,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryInsertPermissions"
                                },
                                "id": 1399,
                                "name": "Identifier",
                                "src": "5288:22:1"
                              }
                            ],
                            "id": 1401,
                            "name": "MemberAccess",
                            "src": "5288:32:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1394,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1402,
                            "name": "Identifier",
                            "src": "5321:5:1"
                          }
                        ],
                        "id": 1403,
                        "name": "FunctionCall",
                        "src": "5288:39:1"
                      }
                    ],
                    "id": 1404,
                    "name": "ExpressionStatement",
                    "src": "5288:39:1"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1197,
                              "type": "function (address)",
                              "value": "LogAddAuthorizedInsertAgent"
                            },
                            "id": 1405,
                            "name": "Identifier",
                            "src": "5337:27:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1394,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1406,
                            "name": "Identifier",
                            "src": "5365:5:1"
                          }
                        ],
                        "id": 1407,
                        "name": "FunctionCall",
                        "src": "5337:34:1"
                      }
                    ],
                    "id": 1408,
                    "name": "ExpressionStatement",
                    "src": "5337:34:1"
                  }
                ],
                "id": 1409,
                "name": "Block",
                "src": "5278:100:1"
              }
            ],
            "id": 1410,
            "name": "FunctionDefinition",
            "src": "5192:186:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedEditAgent",
              "payable": false,
              "scope": 1652,
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
                      "name": "agent",
                      "scope": 1428,
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
                        "id": 1411,
                        "name": "ElementaryTypeName",
                        "src": "5550:7:1"
                      }
                    ],
                    "id": 1412,
                    "name": "VariableDeclaration",
                    "src": "5550:13:1"
                  }
                ],
                "id": 1413,
                "name": "ParameterList",
                "src": "5549:15:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1416,
                "name": "ParameterList",
                "src": "5602:0:1"
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
                      "referencedDeclaration": 7817,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1414,
                    "name": "Identifier",
                    "src": "5588:9:1"
                  }
                ],
                "id": 1415,
                "name": "ModifierInvocation",
                "src": "5588:9:1"
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
                              "referencedDeclaration": 4847,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1171,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryEditPermissions"
                                },
                                "id": 1417,
                                "name": "Identifier",
                                "src": "5612:20:1"
                              }
                            ],
                            "id": 1419,
                            "name": "MemberAccess",
                            "src": "5612:30:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1412,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1420,
                            "name": "Identifier",
                            "src": "5643:5:1"
                          }
                        ],
                        "id": 1421,
                        "name": "FunctionCall",
                        "src": "5612:37:1"
                      }
                    ],
                    "id": 1422,
                    "name": "ExpressionStatement",
                    "src": "5612:37:1"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1201,
                              "type": "function (address)",
                              "value": "LogAddAuthorizedEditAgent"
                            },
                            "id": 1423,
                            "name": "Identifier",
                            "src": "5659:25:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1412,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1424,
                            "name": "Identifier",
                            "src": "5685:5:1"
                          }
                        ],
                        "id": 1425,
                        "name": "FunctionCall",
                        "src": "5659:32:1"
                      }
                    ],
                    "id": 1426,
                    "name": "ExpressionStatement",
                    "src": "5659:32:1"
                  }
                ],
                "id": 1427,
                "name": "Block",
                "src": "5602:96:1"
              }
            ],
            "id": 1428,
            "name": "FunctionDefinition",
            "src": "5518:180:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeInsertAgentAuthorization",
              "payable": false,
              "scope": 1652,
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
                      "name": "agent",
                      "scope": 1446,
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
                        "id": 1429,
                        "name": "ElementaryTypeName",
                        "src": "5872:7:1"
                      }
                    ],
                    "id": 1430,
                    "name": "VariableDeclaration",
                    "src": "5872:13:1"
                  }
                ],
                "id": 1431,
                "name": "ParameterList",
                "src": "5871:15:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1434,
                "name": "ParameterList",
                "src": "5924:0:1"
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
                      "referencedDeclaration": 7817,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1432,
                    "name": "Identifier",
                    "src": "5910:9:1"
                  }
                ],
                "id": 1433,
                "name": "ModifierInvocation",
                "src": "5910:9:1"
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
                              "referencedDeclaration": 4926,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1169,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryInsertPermissions"
                                },
                                "id": 1435,
                                "name": "Identifier",
                                "src": "5934:22:1"
                              }
                            ],
                            "id": 1437,
                            "name": "MemberAccess",
                            "src": "5934:42:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1430,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1438,
                            "name": "Identifier",
                            "src": "5977:5:1"
                          }
                        ],
                        "id": 1439,
                        "name": "FunctionCall",
                        "src": "5934:49:1"
                      }
                    ],
                    "id": 1440,
                    "name": "ExpressionStatement",
                    "src": "5934:49:1"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1205,
                              "type": "function (address)",
                              "value": "LogRevokeInsertAgentAuthorization"
                            },
                            "id": 1441,
                            "name": "Identifier",
                            "src": "5993:33:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1430,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1442,
                            "name": "Identifier",
                            "src": "6027:5:1"
                          }
                        ],
                        "id": 1443,
                        "name": "FunctionCall",
                        "src": "5993:40:1"
                      }
                    ],
                    "id": 1444,
                    "name": "ExpressionStatement",
                    "src": "5993:40:1"
                  }
                ],
                "id": 1445,
                "name": "Block",
                "src": "5924:116:1"
              }
            ],
            "id": 1446,
            "name": "FunctionDefinition",
            "src": "5832:208:1"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeEditAgentAuthorization",
              "payable": false,
              "scope": 1652,
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
                      "name": "agent",
                      "scope": 1464,
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
                        "id": 1447,
                        "name": "ElementaryTypeName",
                        "src": "6223:7:1"
                      }
                    ],
                    "id": 1448,
                    "name": "VariableDeclaration",
                    "src": "6223:13:1"
                  }
                ],
                "id": 1449,
                "name": "ParameterList",
                "src": "6222:15:1"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1452,
                "name": "ParameterList",
                "src": "6275:0:1"
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
                      "referencedDeclaration": 7817,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 1450,
                    "name": "Identifier",
                    "src": "6261:9:1"
                  }
                ],
                "id": 1451,
                "name": "ModifierInvocation",
                "src": "6261:9:1"
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
                              "referencedDeclaration": 4926,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1171,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryEditPermissions"
                                },
                                "id": 1453,
                                "name": "Identifier",
                                "src": "6285:20:1"
                              }
                            ],
                            "id": 1455,
                            "name": "MemberAccess",
                            "src": "6285:40:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1448,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1456,
                            "name": "Identifier",
                            "src": "6326:5:1"
                          }
                        ],
                        "id": 1457,
                        "name": "FunctionCall",
                        "src": "6285:47:1"
                      }
                    ],
                    "id": 1458,
                    "name": "ExpressionStatement",
                    "src": "6285:47:1"
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
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1209,
                              "type": "function (address)",
                              "value": "LogRevokeEditAgentAuthorization"
                            },
                            "id": 1459,
                            "name": "Identifier",
                            "src": "6342:31:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1448,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 1460,
                            "name": "Identifier",
                            "src": "6374:5:1"
                          }
                        ],
                        "id": 1461,
                        "name": "FunctionCall",
                        "src": "6342:38:1"
                      }
                    ],
                    "id": 1462,
                    "name": "ExpressionStatement",
                    "src": "6342:38:1"
                  }
                ],
                "id": 1463,
                "name": "Block",
                "src": "6275:112:1"
              }
            ],
            "id": 1464,
            "name": "FunctionDefinition",
            "src": "6185:202:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "get",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1514,
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
                        "id": 1465,
                        "name": "ElementaryTypeName",
                        "src": "6487:7:1"
                      }
                    ],
                    "id": 1466,
                    "name": "VariableDeclaration",
                    "src": "6487:20:1"
                  }
                ],
                "id": 1467,
                "name": "ParameterList",
                "src": "6486:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1468,
                        "name": "ElementaryTypeName",
                        "src": "6553:7:1"
                      }
                    ],
                    "id": 1469,
                    "name": "VariableDeclaration",
                    "src": "6553:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1470,
                        "name": "ElementaryTypeName",
                        "src": "6562:7:1"
                      }
                    ],
                    "id": 1471,
                    "name": "VariableDeclaration",
                    "src": "6562:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1472,
                        "name": "ElementaryTypeName",
                        "src": "6571:7:1"
                      }
                    ],
                    "id": 1473,
                    "name": "VariableDeclaration",
                    "src": "6571:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1474,
                        "name": "ElementaryTypeName",
                        "src": "6580:4:1"
                      }
                    ],
                    "id": 1475,
                    "name": "VariableDeclaration",
                    "src": "6580:4:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1476,
                        "name": "ElementaryTypeName",
                        "src": "6586:7:1"
                      }
                    ],
                    "id": 1477,
                    "name": "VariableDeclaration",
                    "src": "6586:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1478,
                        "name": "ElementaryTypeName",
                        "src": "6595:7:1"
                      }
                    ],
                    "id": 1479,
                    "name": "VariableDeclaration",
                    "src": "6595:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1514,
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
                        "id": 1480,
                        "name": "ElementaryTypeName",
                        "src": "6604:4:1"
                      }
                    ],
                    "id": 1481,
                    "name": "VariableDeclaration",
                    "src": "6604:4:1"
                  }
                ],
                "id": 1482,
                "name": "ParameterList",
                "src": "6552:57:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1482
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(address,address,address,uint256,address,bytes32,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "version",
                              "referencedDeclaration": 1145,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1483,
                                    "name": "Identifier",
                                    "src": "6645:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1484,
                                    "name": "Identifier",
                                    "src": "6654:12:1"
                                  }
                                ],
                                "id": 1485,
                                "name": "IndexAccess",
                                "src": "6645:22:1"
                              }
                            ],
                            "id": 1486,
                            "name": "MemberAccess",
                            "src": "6645:30:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "beneficiary",
                              "referencedDeclaration": 1147,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1487,
                                    "name": "Identifier",
                                    "src": "6689:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1488,
                                    "name": "Identifier",
                                    "src": "6698:12:1"
                                  }
                                ],
                                "id": 1489,
                                "name": "IndexAccess",
                                "src": "6689:22:1"
                              }
                            ],
                            "id": 1490,
                            "name": "MemberAccess",
                            "src": "6689:34:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriter",
                              "referencedDeclaration": 1149,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1491,
                                    "name": "Identifier",
                                    "src": "6737:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1492,
                                    "name": "Identifier",
                                    "src": "6746:12:1"
                                  }
                                ],
                                "id": 1493,
                                "name": "IndexAccess",
                                "src": "6737:22:1"
                              }
                            ],
                            "id": 1494,
                            "name": "MemberAccess",
                            "src": "6737:34:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriterRiskRating",
                              "referencedDeclaration": 1151,
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
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1495,
                                    "name": "Identifier",
                                    "src": "6785:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1496,
                                    "name": "Identifier",
                                    "src": "6794:12:1"
                                  }
                                ],
                                "id": 1497,
                                "name": "IndexAccess",
                                "src": "6785:22:1"
                              }
                            ],
                            "id": 1498,
                            "name": "MemberAccess",
                            "src": "6785:44:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1153,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1499,
                                    "name": "Identifier",
                                    "src": "6843:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1500,
                                    "name": "Identifier",
                                    "src": "6852:12:1"
                                  }
                                ],
                                "id": 1501,
                                "name": "IndexAccess",
                                "src": "6843:22:1"
                              }
                            ],
                            "id": 1502,
                            "name": "MemberAccess",
                            "src": "6843:36:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1155,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1503,
                                    "name": "Identifier",
                                    "src": "6893:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1504,
                                    "name": "Identifier",
                                    "src": "6902:12:1"
                                  }
                                ],
                                "id": 1505,
                                "name": "IndexAccess",
                                "src": "6893:22:1"
                              }
                            ],
                            "id": 1506,
                            "name": "MemberAccess",
                            "src": "6893:46:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "issuanceBlockTimestamp",
                              "referencedDeclaration": 1157,
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
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1507,
                                    "name": "Identifier",
                                    "src": "6953:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1466,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1508,
                                    "name": "Identifier",
                                    "src": "6962:12:1"
                                  }
                                ],
                                "id": 1509,
                                "name": "IndexAccess",
                                "src": "6953:22:1"
                              }
                            ],
                            "id": 1510,
                            "name": "MemberAccess",
                            "src": "6953:45:1"
                          }
                        ],
                        "id": 1511,
                        "name": "TupleExpression",
                        "src": "6631:377:1"
                      }
                    ],
                    "id": 1512,
                    "name": "Return",
                    "src": "6624:384:1"
                  }
                ],
                "id": 1513,
                "name": "Block",
                "src": "6614:401:1"
              }
            ],
            "id": 1514,
            "name": "FunctionDefinition",
            "src": "6474:541:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getBeneficiary",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1527,
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
                        "id": 1515,
                        "name": "ElementaryTypeName",
                        "src": "7112:7:1"
                      }
                    ],
                    "id": 1516,
                    "name": "VariableDeclaration",
                    "src": "7112:20:1"
                  }
                ],
                "id": 1517,
                "name": "ParameterList",
                "src": "7111:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1527,
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
                        "id": 1518,
                        "name": "ElementaryTypeName",
                        "src": "7178:7:1"
                      }
                    ],
                    "id": 1519,
                    "name": "VariableDeclaration",
                    "src": "7178:7:1"
                  }
                ],
                "id": 1520,
                "name": "ParameterList",
                "src": "7177:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1520
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "beneficiary",
                          "referencedDeclaration": 1147,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct DebtRegistry.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1162,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1521,
                                "name": "Identifier",
                                "src": "7208:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1516,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1522,
                                "name": "Identifier",
                                "src": "7217:12:1"
                              }
                            ],
                            "id": 1523,
                            "name": "IndexAccess",
                            "src": "7208:22:1"
                          }
                        ],
                        "id": 1524,
                        "name": "MemberAccess",
                        "src": "7208:34:1"
                      }
                    ],
                    "id": 1525,
                    "name": "Return",
                    "src": "7201:41:1"
                  }
                ],
                "id": 1526,
                "name": "Block",
                "src": "7191:58:1"
              }
            ],
            "id": 1527,
            "name": "FunctionDefinition",
            "src": "7088:161:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTermsContract",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1540,
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
                        "id": 1528,
                        "name": "ElementaryTypeName",
                        "src": "7359:7:1"
                      }
                    ],
                    "id": 1529,
                    "name": "VariableDeclaration",
                    "src": "7359:20:1"
                  }
                ],
                "id": 1530,
                "name": "ParameterList",
                "src": "7358:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1540,
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
                        "id": 1531,
                        "name": "ElementaryTypeName",
                        "src": "7426:7:1"
                      }
                    ],
                    "id": 1532,
                    "name": "VariableDeclaration",
                    "src": "7426:7:1"
                  }
                ],
                "id": 1533,
                "name": "ParameterList",
                "src": "7425:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1533
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "termsContract",
                          "referencedDeclaration": 1153,
                          "type": "address"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct DebtRegistry.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1162,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1534,
                                "name": "Identifier",
                                "src": "7456:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1529,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1535,
                                "name": "Identifier",
                                "src": "7465:12:1"
                              }
                            ],
                            "id": 1536,
                            "name": "IndexAccess",
                            "src": "7456:22:1"
                          }
                        ],
                        "id": 1537,
                        "name": "MemberAccess",
                        "src": "7456:36:1"
                      }
                    ],
                    "id": 1538,
                    "name": "Return",
                    "src": "7449:43:1"
                  }
                ],
                "id": 1539,
                "name": "Block",
                "src": "7439:60:1"
              }
            ],
            "id": 1540,
            "name": "FunctionDefinition",
            "src": "7333:166:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getTermsContractParameters",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1556,
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
                        "id": 1541,
                        "name": "ElementaryTypeName",
                        "src": "7622:7:1"
                      }
                    ],
                    "id": 1542,
                    "name": "VariableDeclaration",
                    "src": "7622:20:1"
                  }
                ],
                "id": 1543,
                "name": "ParameterList",
                "src": "7621:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1556,
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
                        "id": 1547,
                        "name": "ElementaryTypeName",
                        "src": "7727:7:1"
                      }
                    ],
                    "id": 1548,
                    "name": "VariableDeclaration",
                    "src": "7727:7:1"
                  }
                ],
                "id": 1549,
                "name": "ParameterList",
                "src": "7726:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1250,
                      "type": "modifier (bytes32)",
                      "value": "onlyExtantEntry"
                    },
                    "id": 1544,
                    "name": "Identifier",
                    "src": "7680:15:1"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1542,
                      "type": "bytes32",
                      "value": "issuanceHash"
                    },
                    "id": 1545,
                    "name": "Identifier",
                    "src": "7696:12:1"
                  }
                ],
                "id": 1546,
                "name": "ModifierInvocation",
                "src": "7680:29:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1549
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "termsContractParameters",
                          "referencedDeclaration": 1155,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "struct DebtRegistry.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1162,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1550,
                                "name": "Identifier",
                                "src": "7757:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1542,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1551,
                                "name": "Identifier",
                                "src": "7766:12:1"
                              }
                            ],
                            "id": 1552,
                            "name": "IndexAccess",
                            "src": "7757:22:1"
                          }
                        ],
                        "id": 1553,
                        "name": "MemberAccess",
                        "src": "7757:46:1"
                      }
                    ],
                    "id": 1554,
                    "name": "Return",
                    "src": "7750:53:1"
                  }
                ],
                "id": 1555,
                "name": "Block",
                "src": "7740:70:1"
              }
            ],
            "id": 1556,
            "name": "FunctionDefinition",
            "src": "7586:224:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getTerms",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1576,
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
                        "id": 1557,
                        "name": "ElementaryTypeName",
                        "src": "7953:7:1"
                      }
                    ],
                    "id": 1558,
                    "name": "VariableDeclaration",
                    "src": "7953:20:1"
                  }
                ],
                "id": 1559,
                "name": "ParameterList",
                "src": "7952:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1576,
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
                        "id": 1560,
                        "name": "ElementaryTypeName",
                        "src": "8019:7:1"
                      }
                    ],
                    "id": 1561,
                    "name": "VariableDeclaration",
                    "src": "8019:7:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1576,
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
                        "id": 1562,
                        "name": "ElementaryTypeName",
                        "src": "8028:7:1"
                      }
                    ],
                    "id": 1563,
                    "name": "VariableDeclaration",
                    "src": "8028:7:1"
                  }
                ],
                "id": 1564,
                "name": "ParameterList",
                "src": "8018:18:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1564
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(address,bytes32)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1153,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1565,
                                    "name": "Identifier",
                                    "src": "8072:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1558,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1566,
                                    "name": "Identifier",
                                    "src": "8081:12:1"
                                  }
                                ],
                                "id": 1567,
                                "name": "IndexAccess",
                                "src": "8072:22:1"
                              }
                            ],
                            "id": 1568,
                            "name": "MemberAccess",
                            "src": "8072:36:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1155,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "struct DebtRegistry.Entry storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1162,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 1569,
                                    "name": "Identifier",
                                    "src": "8122:8:1"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1558,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 1570,
                                    "name": "Identifier",
                                    "src": "8131:12:1"
                                  }
                                ],
                                "id": 1571,
                                "name": "IndexAccess",
                                "src": "8122:22:1"
                              }
                            ],
                            "id": 1572,
                            "name": "MemberAccess",
                            "src": "8122:46:1"
                          }
                        ],
                        "id": 1573,
                        "name": "TupleExpression",
                        "src": "8058:120:1"
                      }
                    ],
                    "id": 1574,
                    "name": "Return",
                    "src": "8051:127:1"
                  }
                ],
                "id": 1575,
                "name": "Block",
                "src": "8041:144:1"
              }
            ],
            "id": 1576,
            "name": "FunctionDefinition",
            "src": "7935:250:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getIssuanceBlockTimestamp",
              "payable": false,
              "scope": 1652,
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
                      "name": "issuanceHash",
                      "scope": 1589,
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
                        "id": 1577,
                        "name": "ElementaryTypeName",
                        "src": "8322:7:1"
                      }
                    ],
                    "id": 1578,
                    "name": "VariableDeclaration",
                    "src": "8322:20:1"
                  }
                ],
                "id": 1579,
                "name": "ParameterList",
                "src": "8321:22:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 1589,
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
                        "id": 1580,
                        "name": "ElementaryTypeName",
                        "src": "8389:4:1"
                      }
                    ],
                    "id": 1581,
                    "name": "VariableDeclaration",
                    "src": "8389:14:1"
                  }
                ],
                "id": 1582,
                "name": "ParameterList",
                "src": "8388:16:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1582
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "issuanceBlockTimestamp",
                          "referencedDeclaration": 1157,
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
                              "type": "struct DebtRegistry.Entry storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1162,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1583,
                                "name": "Identifier",
                                "src": "8426:8:1"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1578,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1584,
                                "name": "Identifier",
                                "src": "8435:12:1"
                              }
                            ],
                            "id": 1585,
                            "name": "IndexAccess",
                            "src": "8426:22:1"
                          }
                        ],
                        "id": 1586,
                        "name": "MemberAccess",
                        "src": "8426:45:1"
                      }
                    ],
                    "id": 1587,
                    "name": "Return",
                    "src": "8419:52:1"
                  }
                ],
                "id": 1588,
                "name": "Block",
                "src": "8409:69:1"
              }
            ],
            "id": 1589,
            "name": "FunctionDefinition",
            "src": "8287:191:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedInsertAgents",
              "payable": false,
              "scope": 1652,
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
                "id": 1590,
                "name": "ParameterList",
                "src": "8606:2:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1600,
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
                            "id": 1591,
                            "name": "ElementaryTypeName",
                            "src": "8653:7:1"
                          }
                        ],
                        "id": 1592,
                        "name": "ArrayTypeName",
                        "src": "8653:9:1"
                      }
                    ],
                    "id": 1593,
                    "name": "VariableDeclaration",
                    "src": "8653:9:1"
                  }
                ],
                "id": 1594,
                "name": "ParameterList",
                "src": "8652:11:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1594
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
                              "referencedDeclaration": 4969,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1169,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryInsertPermissions"
                                },
                                "id": 1595,
                                "name": "Identifier",
                                "src": "8685:22:1"
                              }
                            ],
                            "id": 1596,
                            "name": "MemberAccess",
                            "src": "8685:42:1"
                          }
                        ],
                        "id": 1597,
                        "name": "FunctionCall",
                        "src": "8685:44:1"
                      }
                    ],
                    "id": 1598,
                    "name": "Return",
                    "src": "8678:51:1"
                  }
                ],
                "id": 1599,
                "name": "Block",
                "src": "8668:68:1"
              }
            ],
            "id": 1600,
            "name": "FunctionDefinition",
            "src": "8572:164:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAuthorizedEditAgents",
              "payable": false,
              "scope": 1652,
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
                "id": 1601,
                "name": "ParameterList",
                "src": "8873:2:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1611,
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
                            "id": 1602,
                            "name": "ElementaryTypeName",
                            "src": "8920:7:1"
                          }
                        ],
                        "id": 1603,
                        "name": "ArrayTypeName",
                        "src": "8920:9:1"
                      }
                    ],
                    "id": 1604,
                    "name": "VariableDeclaration",
                    "src": "8920:9:1"
                  }
                ],
                "id": 1605,
                "name": "ParameterList",
                "src": "8919:11:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1605
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
                              "referencedDeclaration": 4969,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1171,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryEditPermissions"
                                },
                                "id": 1606,
                                "name": "Identifier",
                                "src": "8952:20:1"
                              }
                            ],
                            "id": 1607,
                            "name": "MemberAccess",
                            "src": "8952:40:1"
                          }
                        ],
                        "id": 1608,
                        "name": "FunctionCall",
                        "src": "8952:42:1"
                      }
                    ],
                    "id": 1609,
                    "name": "Return",
                    "src": "8945:49:1"
                  }
                ],
                "id": 1610,
                "name": "Block",
                "src": "8935:66:1"
              }
            ],
            "id": 1611,
            "name": "FunctionDefinition",
            "src": "8841:160:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getDebtorsDebts",
              "payable": false,
              "scope": 1652,
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
                      "name": "debtor",
                      "scope": 1624,
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
                        "id": 1612,
                        "name": "ElementaryTypeName",
                        "src": "9170:7:1"
                      }
                    ],
                    "id": 1613,
                    "name": "VariableDeclaration",
                    "src": "9170:14:1"
                  }
                ],
                "id": 1614,
                "name": "ParameterList",
                "src": "9169:16:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1624,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "bytes32[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "bytes32",
                              "type": "bytes32"
                            },
                            "id": 1615,
                            "name": "ElementaryTypeName",
                            "src": "9230:7:1"
                          }
                        ],
                        "id": 1616,
                        "name": "ArrayTypeName",
                        "src": "9230:9:1"
                      }
                    ],
                    "id": 1617,
                    "name": "VariableDeclaration",
                    "src": "9230:9:1"
                  }
                ],
                "id": 1618,
                "name": "ParameterList",
                "src": "9229:11:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1618
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32[] storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1167,
                              "type": "mapping(address => bytes32[] storage ref)",
                              "value": "debtorToDebts"
                            },
                            "id": 1619,
                            "name": "Identifier",
                            "src": "9262:13:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1613,
                              "type": "address",
                              "value": "debtor"
                            },
                            "id": 1620,
                            "name": "Identifier",
                            "src": "9276:6:1"
                          }
                        ],
                        "id": 1621,
                        "name": "IndexAccess",
                        "src": "9262:21:1"
                      }
                    ],
                    "id": 1622,
                    "name": "Return",
                    "src": "9255:28:1"
                  }
                ],
                "id": 1623,
                "name": "Block",
                "src": "9245:45:1"
              }
            ],
            "id": 1624,
            "name": "FunctionDefinition",
            "src": "9145:145:1"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "_getIssuanceHash",
              "payable": false,
              "scope": 1652,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_entry",
                      "scope": 1651,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct DebtRegistry.Entry memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "Entry",
                          "referencedDeclaration": 1158,
                          "type": "struct DebtRegistry.Entry storage pointer"
                        },
                        "id": 1625,
                        "name": "UserDefinedTypeName",
                        "src": "9405:5:1"
                      }
                    ],
                    "id": 1626,
                    "name": "VariableDeclaration",
                    "src": "9405:12:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 1651,
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
                        "id": 1627,
                        "name": "ElementaryTypeName",
                        "src": "9419:7:1"
                      }
                    ],
                    "id": 1628,
                    "name": "VariableDeclaration",
                    "src": "9419:15:1"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 1651,
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
                        "id": 1629,
                        "name": "ElementaryTypeName",
                        "src": "9436:4:1"
                      }
                    ],
                    "id": 1630,
                    "name": "VariableDeclaration",
                    "src": "9436:10:1"
                  }
                ],
                "id": 1631,
                "name": "ParameterList",
                "src": "9404:43:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1651,
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
                        "id": 1632,
                        "name": "ElementaryTypeName",
                        "src": "9494:7:1"
                      }
                    ],
                    "id": 1633,
                    "name": "VariableDeclaration",
                    "src": "9494:7:1"
                  }
                ],
                "id": 1634,
                "name": "ParameterList",
                "src": "9493:9:1"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1634
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 8361,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 1635,
                            "name": "Identifier",
                            "src": "9524:9:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "version",
                              "referencedDeclaration": 1145,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1626,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 1636,
                                "name": "Identifier",
                                "src": "9547:6:1"
                              }
                            ],
                            "id": 1637,
                            "name": "MemberAccess",
                            "src": "9547:14:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1628,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 1638,
                            "name": "Identifier",
                            "src": "9575:7:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriter",
                              "referencedDeclaration": 1149,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1626,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 1639,
                                "name": "Identifier",
                                "src": "9596:6:1"
                              }
                            ],
                            "id": 1640,
                            "name": "MemberAccess",
                            "src": "9596:18:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriterRiskRating",
                              "referencedDeclaration": 1151,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1626,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 1641,
                                "name": "Identifier",
                                "src": "9628:6:1"
                              }
                            ],
                            "id": 1642,
                            "name": "MemberAccess",
                            "src": "9628:28:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1153,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1626,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 1643,
                                "name": "Identifier",
                                "src": "9670:6:1"
                              }
                            ],
                            "id": 1644,
                            "name": "MemberAccess",
                            "src": "9670:20:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1155,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1626,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 1645,
                                "name": "Identifier",
                                "src": "9704:6:1"
                              }
                            ],
                            "id": 1646,
                            "name": "MemberAccess",
                            "src": "9704:30:1"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1630,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 1647,
                            "name": "Identifier",
                            "src": "9748:5:1"
                          }
                        ],
                        "id": 1648,
                        "name": "FunctionCall",
                        "src": "9524:239:1"
                      }
                    ],
                    "id": 1649,
                    "name": "Return",
                    "src": "9517:246:1"
                  }
                ],
                "id": 1650,
                "name": "Block",
                "src": "9507:263:1"
              }
            ],
            "id": 1651,
            "name": "FunctionDefinition",
            "src": "9379:391:1"
          }
        ],
        "id": 1652,
        "name": "ContractDefinition",
        "src": "1082:8690:1"
      }
    ],
    "id": 1653,
    "name": "SourceUnit",
    "src": "584:9189:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {
        "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "issuanceHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "beneficiary",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "underwriter",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "underwriterRiskRating",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "termsContract",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "termsContractParameters",
              "type": "bytes32"
            }
          ],
          "name": "LogInsertEntry",
          "type": "event"
        },
        "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "issuanceHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "previousBeneficiary",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newBeneficiary",
              "type": "address"
            }
          ],
          "name": "LogModifyEntryBeneficiary",
          "type": "event"
        },
        "0x3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogAddAuthorizedInsertAgent",
          "type": "event"
        },
        "0x1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogAddAuthorizedEditAgent",
          "type": "event"
        },
        "0xc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b12": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogRevokeInsertAgentAuthorization",
          "type": "event"
        },
        "0xd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af921": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogRevokeEditAgentAuthorization",
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
        }
      },
      "links": {},
      "address": "0x04657cdae47c3a35f1ef3b3e51b4e7b53fcce671"
    },
    "70": {
      "events": {
        "0x10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "issuanceHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "beneficiary",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "underwriter",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "underwriterRiskRating",
              "type": "uint256"
            },
            {
              "indexed": false,
              "name": "termsContract",
              "type": "address"
            },
            {
              "indexed": false,
              "name": "termsContractParameters",
              "type": "bytes32"
            }
          ],
          "name": "LogInsertEntry",
          "type": "event"
        },
        "0x7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d8094": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "name": "issuanceHash",
              "type": "bytes32"
            },
            {
              "indexed": true,
              "name": "previousBeneficiary",
              "type": "address"
            },
            {
              "indexed": true,
              "name": "newBeneficiary",
              "type": "address"
            }
          ],
          "name": "LogModifyEntryBeneficiary",
          "type": "event"
        },
        "0x3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogAddAuthorizedInsertAgent",
          "type": "event"
        },
        "0x1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogAddAuthorizedEditAgent",
          "type": "event"
        },
        "0xc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b12": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogRevokeInsertAgentAuthorization",
          "type": "event"
        },
        "0xd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af921": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "name": "agent",
              "type": "address"
            }
          ],
          "name": "LogRevokeEditAgentAuthorization",
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
        }
      },
      "links": {},
      "address": "0x3762426d592990bda04fe42f31549117c827645b"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-05T04:42:12.294Z"
}