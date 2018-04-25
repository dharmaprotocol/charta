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
  "bytecode": "0x606060405260008060146101000a81548160ff021916908315150217905550336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506120808061006d6000396000f300606060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063314a522e146101175780633f4ba83a1461015a57806342cc6b041461016f5780635969549e146101a85780635c975abb146101ee57806364a666f21461021b5780636be39bda146102855780638456cb59146102fb5780638ad1d846146103105780638da5cb5b1461039e5780638eaa6ac0146103f35780639329939514610510578063ad65599814610549578063ba20dda414610582578063c205e64c146105e9578063cf9df5eb14610622578063d69dbf6314610712578063f2fde38b1461074d578063f6f494c914610786578063f94df678146107ed575b600080fd5b341561012257600080fd5b61013c600480803560001916906020019091905050610857565b60405180826000191660001916815260200191505060405180910390f35b341561016557600080fd5b61016d6108fb565b005b341561017a57600080fd5b6101a6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109b9565b005b34156101b357600080fd5b6101ec60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a8e565b005b34156101f957600080fd5b610201610c87565b604051808215151515815260200191505060405180910390f35b341561022657600080fd5b61022e610c9a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610271578082015181840152602081019050610256565b505050509050019250505060405180910390f35b341561029057600080fd5b6102aa600480803560001916906020019091905050610cb1565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b341561030657600080fd5b61030e610d1b565b005b341561031b57600080fd5b610347600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ddb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561038a57808201518184015260208101905061036f565b505050509050019250505060405180910390f35b34156103a957600080fd5b6103b1610e7c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103fe57600080fd5b610418600480803560001916906020019091905050610ea1565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561051b57600080fd5b610547600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061101e565b005b341561055457600080fd5b610580600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506110f3565b005b341561058d57600080fd5b6105a76004808035600019169060200190919050506111c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105f457600080fd5b610620600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611210565b005b341561062d57600080fd5b6106f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506112e5565b60405180826000191660001916815260200191505060405180910390f35b341561071d57600080fd5b610737600480803560001916906020019091905050611720565b6040518082815260200191505060405180910390f35b341561075857600080fd5b610784600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611748565b005b341561079157600080fd5b6107ab60048080356000191690602001909190505061189d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107f857600080fd5b6108006118e5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610843578082015181840152602081019050610828565b505050509050019250505060405180910390f35b600081600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156108d457600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561095657600080fd5b600060149054906101000a900460ff16151561097157600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1457600080fd5b610a288160066118fc90919063ffffffff16565b7f1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000610aa4336006611a2490919063ffffffff16565b1515610aaf57600080fd5b600060149054906101000a900460ff16151515610acb57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515610b4657600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b8357600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610ca2611ec5565b610cac6003611a7d565b905090565b60008060016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600085600019166000191681526020019081526020016000206005015491509150915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7657600080fd5b600060149054906101000a900460ff16151515610d9257600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610de3611ed9565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610e7057602002820191906000526020600020905b81546000191681526020019060010190808311610e58575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107957600080fd5b61108d816006611b1590919063ffffffff16565b7fd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af92181604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561114e57600080fd5b6111628160036118fc90919063ffffffff16565b7f3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600060016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561126b57600080fd5b61127f816003611b1590919063ffffffff16565b7fc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b1281604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60006112ef611eed565b6000611305336003611a2490919063ffffffff16565b151561131057600080fd5b600060149054906101000a900460ff1615151561132c57600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561136957600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff16815260200187600019168152602001428152509250611406838b87611d57565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561148157600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816116319190611f86565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b6000600160008360001916600019168152602001908152602001600020600601549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117a357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156117df57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060016000836000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6118ed611ec5565b6118f76006611a7d565b905090565b6119068282611eb0565b151561191157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816119819190611fb2565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611a85611ec5565b81600201805480602002602001604051908101604052809291908181526020018280548015611b0957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611abf575b50505050509050919050565b6000806000611b248585611a24565b1515611b2f57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611b9157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611c2257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611d0757fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611d4f9190611fde565b505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b6000611ebc8383611a24565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b815481835581811511611fad57818360005260206000209182019101611fac919061200a565b5b505050565b815481835581811511611fd957818360005260206000209182019101611fd8919061202f565b5b505050565b81548183558181151161200557818360005260206000209182019101612004919061202f565b5b505050565b61202c91905b80821115612028576000816000905550600101612010565b5090565b90565b61205191905b8082111561204d576000816000905550600101612035565b5090565b905600a165627a7a72305820a693c88550c8793eb4f31512b2554558efb9399996eacd759b7e39192dc9eb3d0029",
  "deployedBytecode": "0x606060405260043610610112576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063314a522e146101175780633f4ba83a1461015a57806342cc6b041461016f5780635969549e146101a85780635c975abb146101ee57806364a666f21461021b5780636be39bda146102855780638456cb59146102fb5780638ad1d846146103105780638da5cb5b1461039e5780638eaa6ac0146103f35780639329939514610510578063ad65599814610549578063ba20dda414610582578063c205e64c146105e9578063cf9df5eb14610622578063d69dbf6314610712578063f2fde38b1461074d578063f6f494c914610786578063f94df678146107ed575b600080fd5b341561012257600080fd5b61013c600480803560001916906020019091905050610857565b60405180826000191660001916815260200191505060405180910390f35b341561016557600080fd5b61016d6108fb565b005b341561017a57600080fd5b6101a6600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506109b9565b005b34156101b357600080fd5b6101ec60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a8e565b005b34156101f957600080fd5b610201610c87565b604051808215151515815260200191505060405180910390f35b341561022657600080fd5b61022e610c9a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610271578082015181840152602081019050610256565b505050509050019250505060405180910390f35b341561029057600080fd5b6102aa600480803560001916906020019091905050610cb1565b604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200182600019166000191681526020019250505060405180910390f35b341561030657600080fd5b61030e610d1b565b005b341561031b57600080fd5b610347600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ddb565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561038a57808201518184015260208101905061036f565b505050509050019250505060405180910390f35b34156103a957600080fd5b6103b1610e7c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103fe57600080fd5b610418600480803560001916906020019091905050610ea1565b604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001836000191660001916815260200182815260200197505050505050505060405180910390f35b341561051b57600080fd5b610547600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061101e565b005b341561055457600080fd5b610580600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506110f3565b005b341561058d57600080fd5b6105a76004808035600019169060200190919050506111c8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156105f457600080fd5b610620600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611210565b005b341561062d57600080fd5b6106f4600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035600019169060200190919080359060200190919050506112e5565b60405180826000191660001916815260200191505060405180910390f35b341561071d57600080fd5b610737600480803560001916906020019091905050611720565b6040518082815260200191505060405180910390f35b341561075857600080fd5b610784600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611748565b005b341561079157600080fd5b6107ab60048080356000191690602001909190505061189d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107f857600080fd5b6108006118e5565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610843578082015181840152602081019050610828565b505050509050019250505060405180910390f35b600081600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515156108d457600080fd5b60016000846000191660001916815260200190815260200160002060050154915050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561095657600080fd5b600060149054906101000a900460ff16151561097157600080fd5b60008060146101000a81548160ff0219169083151502179055507f7805862f689e2f13df9f062ff482ad3ad112aca9e0847911ed832e158c525b3360405160405180910390a1565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a1457600080fd5b610a288160066118fc90919063ffffffff16565b7f1adcf3642077febc29ae94e96f4b266cd0014c4499a4ad57e1e6935efaf73c5c81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000610aa4336006611a2490919063ffffffff16565b1515610aaf57600080fd5b600060149054906101000a900460ff16151515610acb57600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff1660016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515610b4657600080fd5b82600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614151515610b8357600080fd5b60016000866000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692508360016000876000191660001916815260200190815260200160002060010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1686600019167f7afbd1e661f2fdce6222afdac74cd28b1847177e232db3d0f0dcf3739e8d809460405160405180910390a45050505050565b600060149054906101000a900460ff1681565b610ca2611ec5565b610cac6003611a7d565b905090565b60008060016000846000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166001600085600019166000191681526020019081526020016000206005015491509150915091565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610d7657600080fd5b600060149054906101000a900460ff16151515610d9257600080fd5b6001600060146101000a81548160ff0219169083151502179055507f6985a02210a168e66602d3235cb6db0e70f92b3ba4d376a33c0f3d9434bff62560405160405180910390a1565b610de3611ed9565b600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805480602002602001604051908101604052809291908181526020018280548015610e7057602002820191906000526020600020905b81546000191681526020019060010190808311610e58575b50505050509050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600080600080600060016000896000191660001916815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008a6000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008b6000191660001916815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008c6000191660001916815260200190815260200160002060030154600160008d6000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008e6000191660001916815260200190815260200160002060050154600160008f60001916600019168152602001908152602001600020600601549650965096509650965096509650919395979092949650565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561107957600080fd5b61108d816006611b1590919063ffffffff16565b7fd70b180c6a151902a25cf1e39c2d5d75079bb235362289aa42cd258a7e5af92181604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561114e57600080fd5b6111628160036118fc90919063ffffffff16565b7f3742184d7c9c1646421a0b618adffa131109c009b2c9f9fab3c8d890e295e5dd81604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b600060016000836000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561126b57600080fd5b61127f816003611b1590919063ffffffff16565b7fc265a0634721cf43fbe76b8ab5c6f79b59fabfc8056dea60d2f0d2612fc70b1281604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b60006112ef611eed565b6000611305336003611a2490919063ffffffff16565b151561131057600080fd5b600060149054906101000a900460ff1615151561132c57600080fd5b89600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561136957600080fd5b60e0604051908101604052808d73ffffffffffffffffffffffffffffffffffffffff1681526020018c73ffffffffffffffffffffffffffffffffffffffff1681526020018a73ffffffffffffffffffffffffffffffffffffffff1681526020018981526020018873ffffffffffffffffffffffffffffffffffffffff16815260200187600019168152602001428152509250611406838b87611d57565b9150600073ffffffffffffffffffffffffffffffffffffffff1660016000846000191660001916815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151561148157600080fd5b8260016000846000191660001916815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506060820151816003015560808201518160040160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060a0820151816005019060001916905560c08201518160060155905050600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816116319190611f86565b916000526020600020900160008490919091509060001916905550826040015173ffffffffffffffffffffffffffffffffffffffff16836020015173ffffffffffffffffffffffffffffffffffffffff1683600019167f10919d8a6bfbd0c46213ad51d6258e42af00bbf36133aada8a058bbe4f4a9240866060015187608001518860a00151604051808481526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018260001916600019168152602001935050505060405180910390a481935050505098975050505050505050565b6000600160008360001916600019168152602001908152602001600020600601549050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156117a357600080fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141515156117df57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600060016000836000191660001916815260200190815260200160002060040160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6118ed611ec5565b6118f76006611a7d565b905090565b6119068282611eb0565b151561191157600080fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508160020180548060010182816119819190611fb2565b9160005260206000209001600083909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505060018260020180549050038260010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611a85611ec5565b81600201805480602002602001604051908101604052809291908181526020018280548015611b0957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611abf575b50505050509050919050565b6000806000611b248585611a24565b1515611b2f57600080fd5b8460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549250600185600201805490500391508460020182815481101515611b9157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690508460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055808560020184815481101515611c2257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550828560010160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508460010160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558460020182815481101515611d0757fe5b906000526020600020900160006101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905560018560020181818054905003915081611d4f9190611fde565b505050505050565b60008360000151838560400151866060015187608001518860a0015187604051808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018581526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018360001916600019168152602001828152602001975050505050505050604051809103902090509392505050565b6000611ebc8383611a24565b15905092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff16815260200160008019168152602001600081525090565b815481835581811511611fad57818360005260206000209182019101611fac919061200a565b5b505050565b815481835581811511611fd957818360005260206000209182019101611fd8919061202f565b5b505050565b81548183558181151161200557818360005260206000209182019101612004919061202f565b5b505050565b61202c91905b80821115612028576000816000905550600101612010565b5090565b90565b61205191905b8082111561204d576000816000905550600101612035565b5090565b905600a165627a7a72305820a693c88550c8793eb4f31512b2554558efb9399996eacd759b7e39192dc9eb3d0029",
  "sourceMap": "1082:8690:2:-;;;268:5:28;247:26;;;;;;;;;;;;;;;;;;;;509:10:30;501:5;;:18;;;;;;;;;;;;;;;;;;1082:8690:2;;;;;;",
  "deployedSourceMap": "1082:8690:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7586:224;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;833:87:28;;;;;;;;;;;;;;5518:180:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;4563:500;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;247:26:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8572:164:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;7935:250:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;666:85:28;;;;;;;;;;;;;;9145:145:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;238:20:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6474:541:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6185:202;;;;;;;;;;;;;;;;;;;;;;;;;;;;5192:186;;;;;;;;;;;;;;;;;;;;;;;;;;;;7088:161;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5832:208;;;;;;;;;;;;;;;;;;;;;;;;;;;;3214:1178;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8287:191;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;832:169:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;7333:166:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8841:160;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;7586:224:2;7727:7;7696:12;2910:1;2864:48;;:8;:22;2873:12;2864:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;:48;;;;2856:57;;;;;;;;7757:8;:22;7766:12;7757:22;;;;;;;;;;;;;;;;;:46;;;7750:53;;7586:224;;;;:::o;833:87:28:-;653:5:30;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;568:6:28;;;;;;;;;;;560:15;;;;;;;;895:5;886:6;;:14;;;;;;;;;;;;;;;;;;906:9;;;;;;;;;;833:87::o;5518:180:2:-;653:5:30;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5612:37:2;5643:5;5612:20;:30;;:37;;;;:::i;:::-;5659:32;5685:5;5659:32;;;;;;;;;;;;;;;;;;;;;;5518:180;:::o;4563:500::-;4797:27;2729:45;2763:10;2729:20;:33;;:45;;;;:::i;:::-;2721:54;;;;;;;;416:6:28;;;;;;;;;;;415:7;407:16;;;;;;;;4726:12:2;2910:1;2864:48;;:8;:22;2873:12;2864:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;:48;;;;2856:57;;;;;;;;4767:14;3027:1;3004:25;;:11;:25;;;;2996:34;;;;;;;;4827:8;:22;4836:12;4827:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;4797:64;;4909:14;4872:8;:22;4881:12;4872:22;;;;;;;;;;;;;;;;;:34;;;:51;;;;;;;;;;;;;;;;;;5032:14;4934:122;;4999:19;4934:122;;4973:12;4934:122;;;;;;;;;;;;;2923:1;429::28;4563:500:2;;;:::o;247:26:28:-;;;;;;;;;;;;;:::o;8572:164:2:-;8653:9;;:::i;:::-;8685:44;:22;:42;:44::i;:::-;8678:51;;8572:164;:::o;7935:250::-;8019:7;8028;8072:8;:22;8081:12;8072:22;;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;8122:8;:22;8131:12;8122:22;;;;;;;;;;;;;;;;;:46;;;8051:127;;;;7935:250;;;:::o;666:85:28:-;653:5:30;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;416:6:28;;;;;;;;;;;415:7;407:16;;;;;;;;729:4;720:6;;:13;;;;;;;;;;;;;;;;;;739:7;;;;;;;;;;666:85::o;9145:145:2:-;9230:9;;:::i;:::-;9262:13;:21;9276:6;9262:21;;;;;;;;;;;;;;;9255:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9145:145;;;:::o;238:20:30:-;;;;;;;;;;;;;:::o;6474:541:2:-;6553:7;6562;6571;6580:4;6586:7;6595;6604:4;6645:8;:22;6654:12;6645:22;;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;6689:8;:22;6698:12;6689:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;6737:8;:22;6746:12;6737:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;6785:8;:22;6794:12;6785:22;;;;;;;;;;;;;;;;;:44;;;6843:8;:22;6852:12;6843:22;;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;6893:8;:22;6902:12;6893:22;;;;;;;;;;;;;;;;;:46;;;6953:8;:22;6962:12;6953:22;;;;;;;;;;;;;;;;;:45;;;6624:384;;;;;;;;;;;;;;6474:541;;;;;;;;;:::o;6185:202::-;653:5:30;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;6285:47:2;6326:5;6285:20;:40;;:47;;;;:::i;:::-;6342:38;6374:5;6342:38;;;;;;;;;;;;;;;;;;;;;;6185:202;:::o;5192:186::-;653:5:30;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5288:39:2;5321:5;5288:22;:32;;:39;;;;:::i;:::-;5337:34;5365:5;5337:34;;;;;;;;;;;;;;;;;;;;;;5192:186;:::o;7088:161::-;7178:7;7208:8;:22;7217:12;7208:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;7201:41;;7088:161;;;:::o;5832:208::-;653:5:30;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;5934:49:2;5977:5;5934:22;:42;;:49;;;;:::i;:::-;5993:40;6027:5;5993:40;;;;;;;;;;;;;;;;;;;;;;5832:208;:::o;3214:1178::-;3604:21;3641:18;;:::i;:::-;3893:20;2607:47;2643:10;2607:22;:35;;:47;;;;:::i;:::-;2599:56;;;;;;;;416:6:28;;;;;;;;;;;415:7;407:16;;;;;;;;3573:12:2;3027:1;3004:25;;:11;:25;;;;2996:34;;;;;;;;3662:220;;;;;;;;;3681:8;3662:220;;;;;;3703:12;3662:220;;;;;;3729:12;3662:220;;;;;;3755:22;3662:220;;;;3791:14;3662:220;;;;;;3819:24;3662:220;;;;;;;3857:15;3662:220;;;3641:241;;3916:39;3933:5;3940:7;3949:5;3916:16;:39::i;:::-;3893:62;;4020:1;3974:48;;:8;:22;3983:12;3974:22;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;;:48;;;3966:57;;;;;;;;4059:5;4034:8;:22;4043:12;4034:22;;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4074:13;:22;4088:7;4074:22;;;;;;;;;;;;;;;:41;;;;;;;;;;;:::i;:::-;;;;;;;;;;4102:12;4074:41;;;;;;;;;;;;4211:5;:17;;;4126:229;;4180:5;:17;;;4126:229;;4154:12;4126:229;;;;4242:5;:27;;;4283:5;:19;;;4316:5;:29;;;4126:229;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4373:12;4366:19;;429:1:28;3214:1178:2;;;;;;;;;;;;:::o;8287:191::-;8389:14;8426:8;:22;8435:12;8426:22;;;;;;;;;;;;;;;;;:45;;;8419:52;;8287:191;;;:::o;832:169:30:-;653:5;;;;;;;;;;;639:19;;:10;:19;;;631:28;;;;;;;;928:1;908:22;;:8;:22;;;;900:31;;;;;;;;965:8;937:37;;958:5;;;;;;;;;;;937:37;;;;;;;;;;;;988:8;980:5;;:16;;;;;;;;;;;;;;;;;;832:169;:::o;7333:166:2:-;7426:7;7456:8;:22;7465:12;7456:22;;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;7449:43;;7333:166;;;:::o;8841:160::-;8920:9;;:::i;:::-;8952:42;:20;:40;:42::i;:::-;8945:49;;8841:160;:::o;825:287:13:-;924:28;940:4;946:5;924:15;:28::i;:::-;916:37;;;;;;;;989:4;964;:15;;:22;980:5;964:22;;;;;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;1003:4;:21;;:33;;;;;;;;;;;:::i;:::-;;;;;;;;;;1030:5;1003:33;;;;;;;;;;;;;;;;;;;;;;;1104:1;1073:4;:21;;:28;;;;:32;1046:4;:17;;:24;1064:5;1046:24;;;;;;;;;;;;;;;:59;;;;825:287;;:::o;2185:166::-;2295:4;2322;:15;;:22;2338:5;2322:22;;;;;;;;;;;;;;;;;;;;;;;;;2315:29;;2185:166;;;;:::o;2536:162::-;2638:9;;:::i;:::-;2670:4;:21;;2663:28;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2536:162;;;:::o;1118:1061::-;1433:25;1495:23;1563:19;1396:25;1409:4;1415:5;1396:12;:25::i;:::-;1388:34;;;;;;;;1461:4;:17;;:24;1479:5;1461:24;;;;;;;;;;;;;;;;1433:52;;1552:1;1521:4;:21;;:28;;;;:32;1495:58;;1585:4;:21;;1607:18;1585:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;1563:63;;1689:4;:15;;:22;1705:5;1689:22;;;;;;;;;;;;;;;;1682:29;;;;;;;;;;;1838:11;1792:4;:21;;1814:20;1792:43;;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;1953:20;1920:4;:17;;:30;1938:11;1920:30;;;;;;;;;;;;;;;:53;;;;1990:4;:17;;:24;2008:5;1990:24;;;;;;;;;;;;;;;1983:31;;;2088:4;:21;;2110:18;2088:41;;;;;;;;;;;;;;;;;;;2081:48;;;;;;;;;;;2171:1;2139:4;:21;;:33;;;;;;;;;;;;;;:::i;:::-;;1118:1061;;;;;:::o;9379:391:2:-;9494:7;9547:6;:14;;;9575:7;9596:6;:18;;;9628:6;:28;;;9670:6;:20;;;9704:6;:30;;;9748:5;9524:239;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9517:246;;9379:391;;;;;:::o;2357:173:13:-;2470:4;2498:25;2511:4;2517:5;2498:12;:25::i;:::-;2497:26;2490:33;;2357:173;;;;:::o;1082:8690:2:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"./libraries/PermissionsLib.sol\";\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"zeppelin-solidity/contracts/lifecycle/Pausable.sol\";\n\n\n/**\n * The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\n * Dharma protocol.  It authorizes a limited number of agents to\n * perform mutations on it -- those agents can be changed at any\n * time by the contract's owner.\n *\n * Author: Nadav Hollander -- Github: nadavhollander\n */\ncontract DebtRegistry is Pausable {\n    using SafeMath for uint;\n    using PermissionsLib for PermissionsLib.Permissions;\n\n    struct Entry {\n        address version;\n        address beneficiary;\n        address underwriter;\n        uint underwriterRiskRating;\n        address termsContract;\n        bytes32 termsContractParameters;\n        uint issuanceBlockTimestamp;\n    }\n\n    // Primary registry mapping issuance hashes to their corresponding entries\n    mapping (bytes32 => Entry) internal registry;\n\n    // Maps debtor addresses to a list of their debts' issuance hashes\n    mapping (address => bytes32[]) internal debtorToDebts;\n\n    PermissionsLib.Permissions internal entryInsertPermissions;\n    PermissionsLib.Permissions internal entryEditPermissions;\n\n    event LogInsertEntry(\n        bytes32 indexed issuanceHash,\n        address indexed beneficiary,\n        address indexed underwriter,\n        uint underwriterRiskRating,\n        address termsContract,\n        bytes32 termsContractParameters\n    );\n\n    event LogModifyEntryBeneficiary(\n        bytes32 indexed issuanceHash,\n        address indexed previousBeneficiary,\n        address indexed newBeneficiary\n    );\n\n    event LogAddAuthorizedInsertAgent(\n        address agent\n    );\n\n    event LogAddAuthorizedEditAgent(\n        address agent\n    );\n\n    event LogRevokeInsertAgentAuthorization(\n        address agent\n    );\n\n    event LogRevokeEditAgentAuthorization(\n        address agent\n    );\n\n    modifier onlyAuthorizedToInsert() {\n        require(entryInsertPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyAuthorizedToEdit() {\n        require(entryEditPermissions.isAuthorized(msg.sender));\n        _;\n    }\n\n    modifier onlyExtantEntry(bytes32 issuanceHash) {\n        require(registry[issuanceHash].beneficiary != address(0));\n        _;\n    }\n\n    modifier nonNullBeneficiary(address beneficiary) {\n        require(beneficiary != address(0));\n        _;\n    }\n\n    /**\n     * Inserts a new entry into the registry, if the entry is valid and sender is\n     * authorized to make 'insert' mutations to the registry.\n     */\n    function insert(\n        address _version,\n        address _beneficiary,\n        address _debtor,\n        address _underwriter,\n        uint _underwriterRiskRating,\n        address _termsContract,\n        bytes32 _termsContractParameters,\n        uint _salt\n    )\n        public\n        onlyAuthorizedToInsert\n        whenNotPaused\n        nonNullBeneficiary(_beneficiary)\n        returns (bytes32 _issuanceHash)\n    {\n        Entry memory entry = Entry(\n            _version,\n            _beneficiary,\n            _underwriter,\n            _underwriterRiskRating,\n            _termsContract,\n            _termsContractParameters,\n            block.timestamp\n        );\n\n        bytes32 issuanceHash = _getIssuanceHash(entry, _debtor, _salt);\n\n        require(registry[issuanceHash].beneficiary == address(0));\n\n        registry[issuanceHash] = entry;\n        debtorToDebts[_debtor].push(issuanceHash);\n\n        LogInsertEntry(\n            issuanceHash,\n            entry.beneficiary,\n            entry.underwriter,\n            entry.underwriterRiskRating,\n            entry.termsContract,\n            entry.termsContractParameters\n        );\n\n        return issuanceHash;\n    }\n\n    /**\n     * Modifies the beneficiary of a debt issuance, if the sender\n     * is authorized to make 'modifyBeneficiary' mutations to\n     * the registry.\n     */\n    function modifyBeneficiary(bytes32 issuanceHash, address newBeneficiary)\n        public\n        onlyAuthorizedToEdit\n        whenNotPaused\n        onlyExtantEntry(issuanceHash)\n        nonNullBeneficiary(newBeneficiary)\n    {\n        address previousBeneficiary = registry[issuanceHash].beneficiary;\n\n        registry[issuanceHash].beneficiary = newBeneficiary;\n\n        LogModifyEntryBeneficiary(\n            issuanceHash,\n            previousBeneficiary,\n            newBeneficiary\n        );\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function addAuthorizedInsertAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.authorize(agent);\n        LogAddAuthorizedInsertAgent(agent);\n    }\n\n    /**\n     * Adds an address to the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function addAuthorizedEditAgent(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.authorize(agent);\n        LogAddAuthorizedEditAgent(agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'insert' mutations to the registry.\n     */\n    function revokeInsertAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryInsertPermissions.revokeAuthorization(agent);\n        LogRevokeInsertAgentAuthorization(agent);\n    }\n\n    /**\n     * Removes an address from the list of agents authorized\n     * to make 'modifyBeneficiary' mutations to the registry.\n     */\n    function revokeEditAgentAuthorization(address agent)\n        public\n        onlyOwner\n    {\n        entryEditPermissions.revokeAuthorization(agent);\n        LogRevokeEditAgentAuthorization(agent);\n    }\n\n    /**\n     * Returns the parameters of a debt issuance in the registry\n     */\n    function get(bytes32 issuanceHash)\n        public\n        view\n        returns(address, address, address, uint, address, bytes32, uint)\n    {\n        return (\n            registry[issuanceHash].version,\n            registry[issuanceHash].beneficiary,\n            registry[issuanceHash].underwriter,\n            registry[issuanceHash].underwriterRiskRating,\n            registry[issuanceHash].termsContract,\n            registry[issuanceHash].termsContractParameters,\n            registry[issuanceHash].issuanceBlockTimestamp\n        );\n    }\n\n    /**\n     * Returns the beneficiary of a given issuance\n     */\n    function getBeneficiary(bytes32 issuanceHash)\n        public\n        view\n        returns(address)\n    {\n        return registry[issuanceHash].beneficiary;\n    }\n\n    /**\n     * Returns the terms contract address of a given issuance\n     */\n    function getTermsContract(bytes32 issuanceHash)\n        public\n        view\n        returns (address)\n    {\n        return registry[issuanceHash].termsContract;\n    }\n\n    /**\n     * Returns the terms contract parameters of a given issuance\n     */\n    function getTermsContractParameters(bytes32 issuanceHash)\n        public\n        view\n        onlyExtantEntry(issuanceHash)\n        returns (bytes32)\n    {\n        return registry[issuanceHash].termsContractParameters;\n    }\n\n    /**\n     * Returns a tuple of the terms contract and its associated parameters\n     * for a given issuance\n     */\n    function getTerms(bytes32 issuanceHash)\n        public\n        view\n        returns(address, bytes32)\n    {\n        return (\n            registry[issuanceHash].termsContract,\n            registry[issuanceHash].termsContractParameters\n        );\n    }\n\n    /**\n     * Returns the timestamp of the block at which a debt agreement was issued.\n     */\n    function getIssuanceBlockTimestamp(bytes32 issuanceHash)\n        public\n        view\n        returns (uint timestamp)\n    {\n        return registry[issuanceHash].issuanceBlockTimestamp;\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'insert' mutations\n     */\n    function getAuthorizedInsertAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryInsertPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of agents authorized to make 'modifyBeneficiary' mutations\n     */\n    function getAuthorizedEditAgents()\n        public\n        view\n        returns(address[])\n    {\n        return entryEditPermissions.getAuthorizedAgents();\n    }\n\n    /**\n     * Returns the list of debt agreements a debtor is party to,\n     * with each debt agreement listed by issuance hash.\n     */\n    function getDebtorsDebts(address debtor)\n        public\n        view\n        returns(bytes32[])\n    {\n        return debtorToDebts[debtor];\n    }\n\n    /**\n     * Helper function for computing the hash of a given issuance.\n     */\n    function _getIssuanceHash(Entry _entry, address _debtor, uint _salt)\n        internal\n        pure\n        returns(bytes32)\n    {\n        return keccak256(\n            _entry.version,\n            _debtor,\n            _entry.underwriter,\n            _entry.underwriterRiskRating,\n            _entry.termsContract,\n            _entry.termsContractParameters,\n            _salt\n        );\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
      "exportedSymbols": {
        "DebtRegistry": [
          2281
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
        "id": 1761,
        "name": "PragmaDirective",
        "src": "584:23:2"
      },
      {
        "attributes": {
          "SourceUnit": 5370,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/libraries/PermissionsLib.sol",
          "file": "./libraries/PermissionsLib.sol",
          "scope": 2282,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1762,
        "name": "ImportDirective",
        "src": "609:40:2"
      },
      {
        "attributes": {
          "SourceUnit": 8048,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 2282,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1763,
        "name": "ImportDirective",
        "src": "650:55:2"
      },
      {
        "attributes": {
          "SourceUnit": 7950,
          "absolutePath": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "file": "zeppelin-solidity/contracts/lifecycle/Pausable.sol",
          "scope": 2282,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 1764,
        "name": "ImportDirective",
        "src": "706:60:2"
      },
      {
        "attributes": {
          "contractDependencies": [
            7949,
            8103
          ],
          "contractKind": "contract",
          "documentation": "The DebtRegistry stores the parameters and beneficiaries of all debt agreements in\nDharma protocol.  It authorizes a limited number of agents to\nperform mutations on it -- those agents can be changed at any\ntime by the contract's owner.\n * Author: Nadav Hollander -- Github: nadavhollander",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            2281,
            7949,
            8103
          ],
          "name": "DebtRegistry",
          "scope": 2282
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
                  "referencedDeclaration": 7949,
                  "type": "contract Pausable"
                },
                "id": 1765,
                "name": "UserDefinedTypeName",
                "src": "1107:8:2"
              }
            ],
            "id": 1766,
            "name": "InheritanceSpecifier",
            "src": "1107:8:2"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 8047,
                  "type": "library SafeMath"
                },
                "id": 1767,
                "name": "UserDefinedTypeName",
                "src": "1128:8:2"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 1768,
                "name": "ElementaryTypeName",
                "src": "1141:4:2"
              }
            ],
            "id": 1769,
            "name": "UsingForDirective",
            "src": "1122:24:2"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib",
                  "referencedDeclaration": 5369,
                  "type": "library PermissionsLib"
                },
                "id": 1770,
                "name": "UserDefinedTypeName",
                "src": "1157:14:2"
              },
              {
                "attributes": {
                  "contractScope": null,
                  "name": "PermissionsLib.Permissions",
                  "referencedDeclaration": 5203,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1771,
                "name": "UserDefinedTypeName",
                "src": "1176:26:2"
              }
            ],
            "id": 1772,
            "name": "UsingForDirective",
            "src": "1151:52:2"
          },
          {
            "attributes": {
              "canonicalName": "DebtRegistry.Entry",
              "name": "Entry",
              "scope": 2281,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "version",
                  "scope": 1787,
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
                    "id": 1773,
                    "name": "ElementaryTypeName",
                    "src": "1232:7:2"
                  }
                ],
                "id": 1774,
                "name": "VariableDeclaration",
                "src": "1232:15:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "beneficiary",
                  "scope": 1787,
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
                    "id": 1775,
                    "name": "ElementaryTypeName",
                    "src": "1257:7:2"
                  }
                ],
                "id": 1776,
                "name": "VariableDeclaration",
                "src": "1257:19:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "underwriter",
                  "scope": 1787,
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
                    "id": 1777,
                    "name": "ElementaryTypeName",
                    "src": "1286:7:2"
                  }
                ],
                "id": 1778,
                "name": "VariableDeclaration",
                "src": "1286:19:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "underwriterRiskRating",
                  "scope": 1787,
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
                    "id": 1779,
                    "name": "ElementaryTypeName",
                    "src": "1315:4:2"
                  }
                ],
                "id": 1780,
                "name": "VariableDeclaration",
                "src": "1315:26:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termsContract",
                  "scope": 1787,
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
                    "id": 1781,
                    "name": "ElementaryTypeName",
                    "src": "1351:7:2"
                  }
                ],
                "id": 1782,
                "name": "VariableDeclaration",
                "src": "1351:21:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termsContractParameters",
                  "scope": 1787,
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
                    "id": 1783,
                    "name": "ElementaryTypeName",
                    "src": "1382:7:2"
                  }
                ],
                "id": 1784,
                "name": "VariableDeclaration",
                "src": "1382:31:2"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "issuanceBlockTimestamp",
                  "scope": 1787,
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
                    "id": 1785,
                    "name": "ElementaryTypeName",
                    "src": "1423:4:2"
                  }
                ],
                "id": 1786,
                "name": "VariableDeclaration",
                "src": "1423:27:2"
              }
            ],
            "id": 1787,
            "name": "StructDefinition",
            "src": "1209:248:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "registry",
              "scope": 2281,
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
                    "id": 1788,
                    "name": "ElementaryTypeName",
                    "src": "1551:7:2"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "Entry",
                      "referencedDeclaration": 1787,
                      "type": "struct DebtRegistry.Entry storage pointer"
                    },
                    "id": 1789,
                    "name": "UserDefinedTypeName",
                    "src": "1562:5:2"
                  }
                ],
                "id": 1790,
                "name": "Mapping",
                "src": "1542:26:2"
              }
            ],
            "id": 1791,
            "name": "VariableDeclaration",
            "src": "1542:44:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtorToDebts",
              "scope": 2281,
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
                    "id": 1792,
                    "name": "ElementaryTypeName",
                    "src": "1673:7:2"
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
                        "id": 1793,
                        "name": "ElementaryTypeName",
                        "src": "1684:7:2"
                      }
                    ],
                    "id": 1794,
                    "name": "ArrayTypeName",
                    "src": "1684:9:2"
                  }
                ],
                "id": 1795,
                "name": "Mapping",
                "src": "1664:30:2"
              }
            ],
            "id": 1796,
            "name": "VariableDeclaration",
            "src": "1664:53:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "entryInsertPermissions",
              "scope": 2281,
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
                  "referencedDeclaration": 5203,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1797,
                "name": "UserDefinedTypeName",
                "src": "1724:26:2"
              }
            ],
            "id": 1798,
            "name": "VariableDeclaration",
            "src": "1724:58:2"
          },
          {
            "attributes": {
              "constant": false,
              "name": "entryEditPermissions",
              "scope": 2281,
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
                  "referencedDeclaration": 5203,
                  "type": "struct PermissionsLib.Permissions storage pointer"
                },
                "id": 1799,
                "name": "UserDefinedTypeName",
                "src": "1788:26:2"
              }
            ],
            "id": 1800,
            "name": "VariableDeclaration",
            "src": "1788:56:2"
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
                      "scope": 1814,
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
                        "id": 1801,
                        "name": "ElementaryTypeName",
                        "src": "1881:7:2"
                      }
                    ],
                    "id": 1802,
                    "name": "VariableDeclaration",
                    "src": "1881:28:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "beneficiary",
                      "scope": 1814,
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
                        "id": 1803,
                        "name": "ElementaryTypeName",
                        "src": "1919:7:2"
                      }
                    ],
                    "id": 1804,
                    "name": "VariableDeclaration",
                    "src": "1919:27:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "underwriter",
                      "scope": 1814,
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
                        "id": 1805,
                        "name": "ElementaryTypeName",
                        "src": "1956:7:2"
                      }
                    ],
                    "id": 1806,
                    "name": "VariableDeclaration",
                    "src": "1956:27:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "underwriterRiskRating",
                      "scope": 1814,
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
                        "id": 1807,
                        "name": "ElementaryTypeName",
                        "src": "1993:4:2"
                      }
                    ],
                    "id": 1808,
                    "name": "VariableDeclaration",
                    "src": "1993:26:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termsContract",
                      "scope": 1814,
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
                        "id": 1809,
                        "name": "ElementaryTypeName",
                        "src": "2029:7:2"
                      }
                    ],
                    "id": 1810,
                    "name": "VariableDeclaration",
                    "src": "2029:21:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termsContractParameters",
                      "scope": 1814,
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
                        "id": 1811,
                        "name": "ElementaryTypeName",
                        "src": "2060:7:2"
                      }
                    ],
                    "id": 1812,
                    "name": "VariableDeclaration",
                    "src": "2060:31:2"
                  }
                ],
                "id": 1813,
                "name": "ParameterList",
                "src": "1871:226:2"
              }
            ],
            "id": 1814,
            "name": "EventDefinition",
            "src": "1851:247:2"
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
                      "scope": 1822,
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
                        "id": 1815,
                        "name": "ElementaryTypeName",
                        "src": "2145:7:2"
                      }
                    ],
                    "id": 1816,
                    "name": "VariableDeclaration",
                    "src": "2145:28:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "previousBeneficiary",
                      "scope": 1822,
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
                        "id": 1817,
                        "name": "ElementaryTypeName",
                        "src": "2183:7:2"
                      }
                    ],
                    "id": 1818,
                    "name": "VariableDeclaration",
                    "src": "2183:35:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "newBeneficiary",
                      "scope": 1822,
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
                        "id": 1819,
                        "name": "ElementaryTypeName",
                        "src": "2228:7:2"
                      }
                    ],
                    "id": 1820,
                    "name": "VariableDeclaration",
                    "src": "2228:30:2"
                  }
                ],
                "id": 1821,
                "name": "ParameterList",
                "src": "2135:129:2"
              }
            ],
            "id": 1822,
            "name": "EventDefinition",
            "src": "2104:161:2"
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
                      "scope": 1826,
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
                        "id": 1823,
                        "name": "ElementaryTypeName",
                        "src": "2314:7:2"
                      }
                    ],
                    "id": 1824,
                    "name": "VariableDeclaration",
                    "src": "2314:13:2"
                  }
                ],
                "id": 1825,
                "name": "ParameterList",
                "src": "2304:29:2"
              }
            ],
            "id": 1826,
            "name": "EventDefinition",
            "src": "2271:63:2"
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
                      "scope": 1830,
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
                        "id": 1827,
                        "name": "ElementaryTypeName",
                        "src": "2381:7:2"
                      }
                    ],
                    "id": 1828,
                    "name": "VariableDeclaration",
                    "src": "2381:13:2"
                  }
                ],
                "id": 1829,
                "name": "ParameterList",
                "src": "2371:29:2"
              }
            ],
            "id": 1830,
            "name": "EventDefinition",
            "src": "2340:61:2"
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
                      "scope": 1834,
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
                        "id": 1831,
                        "name": "ElementaryTypeName",
                        "src": "2456:7:2"
                      }
                    ],
                    "id": 1832,
                    "name": "VariableDeclaration",
                    "src": "2456:13:2"
                  }
                ],
                "id": 1833,
                "name": "ParameterList",
                "src": "2446:29:2"
              }
            ],
            "id": 1834,
            "name": "EventDefinition",
            "src": "2407:69:2"
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
                      "scope": 1838,
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
                        "id": 1835,
                        "name": "ElementaryTypeName",
                        "src": "2529:7:2"
                      }
                    ],
                    "id": 1836,
                    "name": "VariableDeclaration",
                    "src": "2529:13:2"
                  }
                ],
                "id": 1837,
                "name": "ParameterList",
                "src": "2519:29:2"
              }
            ],
            "id": 1838,
            "name": "EventDefinition",
            "src": "2482:67:2"
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
                "id": 1839,
                "name": "ParameterList",
                "src": "2586:2:2"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1840,
                            "name": "Identifier",
                            "src": "2599:7:2"
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
                                  "referencedDeclaration": 5340,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1798,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "entryInsertPermissions"
                                    },
                                    "id": 1841,
                                    "name": "Identifier",
                                    "src": "2607:22:2"
                                  }
                                ],
                                "id": 1842,
                                "name": "MemberAccess",
                                "src": "2607:35:2"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1843,
                                    "name": "Identifier",
                                    "src": "2643:3:2"
                                  }
                                ],
                                "id": 1844,
                                "name": "MemberAccess",
                                "src": "2643:10:2"
                              }
                            ],
                            "id": 1845,
                            "name": "FunctionCall",
                            "src": "2607:47:2"
                          }
                        ],
                        "id": 1846,
                        "name": "FunctionCall",
                        "src": "2599:56:2"
                      }
                    ],
                    "id": 1847,
                    "name": "ExpressionStatement",
                    "src": "2599:56:2"
                  },
                  {
                    "id": 1848,
                    "name": "PlaceholderStatement",
                    "src": "2665:1:2"
                  }
                ],
                "id": 1849,
                "name": "Block",
                "src": "2589:84:2"
              }
            ],
            "id": 1850,
            "name": "ModifierDefinition",
            "src": "2555:118:2"
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
                "id": 1851,
                "name": "ParameterList",
                "src": "2708:2:2"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1852,
                            "name": "Identifier",
                            "src": "2721:7:2"
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
                                  "referencedDeclaration": 5340,
                                  "type": "function (struct PermissionsLib.Permissions storage pointer,address) view returns (bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1800,
                                      "type": "struct PermissionsLib.Permissions storage ref",
                                      "value": "entryEditPermissions"
                                    },
                                    "id": 1853,
                                    "name": "Identifier",
                                    "src": "2729:20:2"
                                  }
                                ],
                                "id": 1854,
                                "name": "MemberAccess",
                                "src": "2729:33:2"
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
                                      "referencedDeclaration": 9785,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 1855,
                                    "name": "Identifier",
                                    "src": "2763:3:2"
                                  }
                                ],
                                "id": 1856,
                                "name": "MemberAccess",
                                "src": "2763:10:2"
                              }
                            ],
                            "id": 1857,
                            "name": "FunctionCall",
                            "src": "2729:45:2"
                          }
                        ],
                        "id": 1858,
                        "name": "FunctionCall",
                        "src": "2721:54:2"
                      }
                    ],
                    "id": 1859,
                    "name": "ExpressionStatement",
                    "src": "2721:54:2"
                  },
                  {
                    "id": 1860,
                    "name": "PlaceholderStatement",
                    "src": "2785:1:2"
                  }
                ],
                "id": 1861,
                "name": "Block",
                "src": "2711:82:2"
              }
            ],
            "id": 1862,
            "name": "ModifierDefinition",
            "src": "2679:114:2"
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
                      "scope": 1879,
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
                        "id": 1863,
                        "name": "ElementaryTypeName",
                        "src": "2824:7:2"
                      }
                    ],
                    "id": 1864,
                    "name": "VariableDeclaration",
                    "src": "2824:20:2"
                  }
                ],
                "id": 1865,
                "name": "ParameterList",
                "src": "2823:22:2"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1866,
                            "name": "Identifier",
                            "src": "2856:7:2"
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
                                  "referencedDeclaration": 1776,
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
                                          "referencedDeclaration": 1791,
                                          "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                          "value": "registry"
                                        },
                                        "id": 1867,
                                        "name": "Identifier",
                                        "src": "2864:8:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1864,
                                          "type": "bytes32",
                                          "value": "issuanceHash"
                                        },
                                        "id": 1868,
                                        "name": "Identifier",
                                        "src": "2873:12:2"
                                      }
                                    ],
                                    "id": 1869,
                                    "name": "IndexAccess",
                                    "src": "2864:22:2"
                                  }
                                ],
                                "id": 1870,
                                "name": "MemberAccess",
                                "src": "2864:34:2"
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
                                    "id": 1871,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2902:7:2"
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
                                    "id": 1872,
                                    "name": "Literal",
                                    "src": "2910:1:2"
                                  }
                                ],
                                "id": 1873,
                                "name": "FunctionCall",
                                "src": "2902:10:2"
                              }
                            ],
                            "id": 1874,
                            "name": "BinaryOperation",
                            "src": "2864:48:2"
                          }
                        ],
                        "id": 1875,
                        "name": "FunctionCall",
                        "src": "2856:57:2"
                      }
                    ],
                    "id": 1876,
                    "name": "ExpressionStatement",
                    "src": "2856:57:2"
                  },
                  {
                    "id": 1877,
                    "name": "PlaceholderStatement",
                    "src": "2923:1:2"
                  }
                ],
                "id": 1878,
                "name": "Block",
                "src": "2846:85:2"
              }
            ],
            "id": 1879,
            "name": "ModifierDefinition",
            "src": "2799:132:2"
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
                      "scope": 1893,
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
                        "id": 1880,
                        "name": "ElementaryTypeName",
                        "src": "2965:7:2"
                      }
                    ],
                    "id": 1881,
                    "name": "VariableDeclaration",
                    "src": "2965:19:2"
                  }
                ],
                "id": 1882,
                "name": "ParameterList",
                "src": "2964:21:2"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1883,
                            "name": "Identifier",
                            "src": "2996:7:2"
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
                                  "referencedDeclaration": 1881,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 1884,
                                "name": "Identifier",
                                "src": "3004:11:2"
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
                                    "id": 1885,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3019:7:2"
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
                                    "id": 1886,
                                    "name": "Literal",
                                    "src": "3027:1:2"
                                  }
                                ],
                                "id": 1887,
                                "name": "FunctionCall",
                                "src": "3019:10:2"
                              }
                            ],
                            "id": 1888,
                            "name": "BinaryOperation",
                            "src": "3004:25:2"
                          }
                        ],
                        "id": 1889,
                        "name": "FunctionCall",
                        "src": "2996:34:2"
                      }
                    ],
                    "id": 1890,
                    "name": "ExpressionStatement",
                    "src": "2996:34:2"
                  },
                  {
                    "id": 1891,
                    "name": "PlaceholderStatement",
                    "src": "3040:1:2"
                  }
                ],
                "id": 1892,
                "name": "Block",
                "src": "2986:62:2"
              }
            ],
            "id": 1893,
            "name": "ModifierDefinition",
            "src": "2937:111:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "insert",
              "payable": false,
              "scope": 2281,
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
                      "scope": 1983,
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
                        "id": 1894,
                        "name": "ElementaryTypeName",
                        "src": "3239:7:2"
                      }
                    ],
                    "id": 1895,
                    "name": "VariableDeclaration",
                    "src": "3239:16:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_beneficiary",
                      "scope": 1983,
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
                        "id": 1896,
                        "name": "ElementaryTypeName",
                        "src": "3265:7:2"
                      }
                    ],
                    "id": 1897,
                    "name": "VariableDeclaration",
                    "src": "3265:20:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 1983,
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
                        "id": 1898,
                        "name": "ElementaryTypeName",
                        "src": "3295:7:2"
                      }
                    ],
                    "id": 1899,
                    "name": "VariableDeclaration",
                    "src": "3295:15:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriter",
                      "scope": 1983,
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
                        "id": 1900,
                        "name": "ElementaryTypeName",
                        "src": "3320:7:2"
                      }
                    ],
                    "id": 1901,
                    "name": "VariableDeclaration",
                    "src": "3320:20:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_underwriterRiskRating",
                      "scope": 1983,
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
                        "id": 1902,
                        "name": "ElementaryTypeName",
                        "src": "3350:4:2"
                      }
                    ],
                    "id": 1903,
                    "name": "VariableDeclaration",
                    "src": "3350:27:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContract",
                      "scope": 1983,
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
                        "id": 1904,
                        "name": "ElementaryTypeName",
                        "src": "3387:7:2"
                      }
                    ],
                    "id": 1905,
                    "name": "VariableDeclaration",
                    "src": "3387:22:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termsContractParameters",
                      "scope": 1983,
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
                        "id": 1906,
                        "name": "ElementaryTypeName",
                        "src": "3419:7:2"
                      }
                    ],
                    "id": 1907,
                    "name": "VariableDeclaration",
                    "src": "3419:32:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 1983,
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
                        "id": 1908,
                        "name": "ElementaryTypeName",
                        "src": "3461:4:2"
                      }
                    ],
                    "id": 1909,
                    "name": "VariableDeclaration",
                    "src": "3461:10:2"
                  }
                ],
                "id": 1910,
                "name": "ParameterList",
                "src": "3229:248:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_issuanceHash",
                      "scope": 1983,
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
                        "id": 1918,
                        "name": "ElementaryTypeName",
                        "src": "3604:7:2"
                      }
                    ],
                    "id": 1919,
                    "name": "VariableDeclaration",
                    "src": "3604:21:2"
                  }
                ],
                "id": 1920,
                "name": "ParameterList",
                "src": "3603:23:2"
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
                      "referencedDeclaration": 1850,
                      "type": "modifier ()",
                      "value": "onlyAuthorizedToInsert"
                    },
                    "id": 1911,
                    "name": "Identifier",
                    "src": "3501:22:2"
                  }
                ],
                "id": 1912,
                "name": "ModifierInvocation",
                "src": "3501:22:2"
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
                      "referencedDeclaration": 7910,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 1913,
                    "name": "Identifier",
                    "src": "3532:13:2"
                  }
                ],
                "id": 1914,
                "name": "ModifierInvocation",
                "src": "3532:13:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1893,
                      "type": "modifier (address)",
                      "value": "nonNullBeneficiary"
                    },
                    "id": 1915,
                    "name": "Identifier",
                    "src": "3554:18:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1897,
                      "type": "address",
                      "value": "_beneficiary"
                    },
                    "id": 1916,
                    "name": "Identifier",
                    "src": "3573:12:2"
                  }
                ],
                "id": 1917,
                "name": "ModifierInvocation",
                "src": "3554:32:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1922
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "entry",
                          "scope": 1983,
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
                              "referencedDeclaration": 1787,
                              "type": "struct DebtRegistry.Entry storage pointer"
                            },
                            "id": 1921,
                            "name": "UserDefinedTypeName",
                            "src": "3641:5:2"
                          }
                        ],
                        "id": 1922,
                        "name": "VariableDeclaration",
                        "src": "3641:18:2"
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
                              "referencedDeclaration": 1787,
                              "type": "type(struct DebtRegistry.Entry storage pointer)",
                              "value": "Entry"
                            },
                            "id": 1923,
                            "name": "Identifier",
                            "src": "3662:5:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1895,
                              "type": "address",
                              "value": "_version"
                            },
                            "id": 1924,
                            "name": "Identifier",
                            "src": "3681:8:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1897,
                              "type": "address",
                              "value": "_beneficiary"
                            },
                            "id": 1925,
                            "name": "Identifier",
                            "src": "3703:12:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1901,
                              "type": "address",
                              "value": "_underwriter"
                            },
                            "id": 1926,
                            "name": "Identifier",
                            "src": "3729:12:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1903,
                              "type": "uint256",
                              "value": "_underwriterRiskRating"
                            },
                            "id": 1927,
                            "name": "Identifier",
                            "src": "3755:22:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1905,
                              "type": "address",
                              "value": "_termsContract"
                            },
                            "id": 1928,
                            "name": "Identifier",
                            "src": "3791:14:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1907,
                              "type": "bytes32",
                              "value": "_termsContractParameters"
                            },
                            "id": 1929,
                            "name": "Identifier",
                            "src": "3819:24:2"
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
                                  "referencedDeclaration": 9777,
                                  "type": "block",
                                  "value": "block"
                                },
                                "id": 1930,
                                "name": "Identifier",
                                "src": "3857:5:2"
                              }
                            ],
                            "id": 1931,
                            "name": "MemberAccess",
                            "src": "3857:15:2"
                          }
                        ],
                        "id": 1932,
                        "name": "FunctionCall",
                        "src": "3662:220:2"
                      }
                    ],
                    "id": 1933,
                    "name": "VariableDeclarationStatement",
                    "src": "3641:241:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1935
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceHash",
                          "scope": 1983,
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
                            "id": 1934,
                            "name": "ElementaryTypeName",
                            "src": "3893:7:2"
                          }
                        ],
                        "id": 1935,
                        "name": "VariableDeclaration",
                        "src": "3893:20:2"
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
                                  "typeIdentifier": "t_struct$_Entry_$1787_memory_ptr",
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
                              "referencedDeclaration": 2280,
                              "type": "function (struct DebtRegistry.Entry memory,address,uint256) pure returns (bytes32)",
                              "value": "_getIssuanceHash"
                            },
                            "id": 1936,
                            "name": "Identifier",
                            "src": "3916:16:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1922,
                              "type": "struct DebtRegistry.Entry memory",
                              "value": "entry"
                            },
                            "id": 1937,
                            "name": "Identifier",
                            "src": "3933:5:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1899,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 1938,
                            "name": "Identifier",
                            "src": "3940:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1909,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 1939,
                            "name": "Identifier",
                            "src": "3949:5:2"
                          }
                        ],
                        "id": 1940,
                        "name": "FunctionCall",
                        "src": "3916:39:2"
                      }
                    ],
                    "id": 1941,
                    "name": "VariableDeclarationStatement",
                    "src": "3893:62:2"
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
                              "referencedDeclaration": 9788,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1942,
                            "name": "Identifier",
                            "src": "3966:7:2"
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
                                  "referencedDeclaration": 1776,
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
                                          "referencedDeclaration": 1791,
                                          "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                          "value": "registry"
                                        },
                                        "id": 1943,
                                        "name": "Identifier",
                                        "src": "3974:8:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1935,
                                          "type": "bytes32",
                                          "value": "issuanceHash"
                                        },
                                        "id": 1944,
                                        "name": "Identifier",
                                        "src": "3983:12:2"
                                      }
                                    ],
                                    "id": 1945,
                                    "name": "IndexAccess",
                                    "src": "3974:22:2"
                                  }
                                ],
                                "id": 1946,
                                "name": "MemberAccess",
                                "src": "3974:34:2"
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
                                    "id": 1947,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4012:7:2"
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
                                    "id": 1948,
                                    "name": "Literal",
                                    "src": "4020:1:2"
                                  }
                                ],
                                "id": 1949,
                                "name": "FunctionCall",
                                "src": "4012:10:2"
                              }
                            ],
                            "id": 1950,
                            "name": "BinaryOperation",
                            "src": "3974:48:2"
                          }
                        ],
                        "id": 1951,
                        "name": "FunctionCall",
                        "src": "3966:57:2"
                      }
                    ],
                    "id": 1952,
                    "name": "ExpressionStatement",
                    "src": "3966:57:2"
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
                                  "referencedDeclaration": 1791,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 1953,
                                "name": "Identifier",
                                "src": "4034:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1935,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 1954,
                                "name": "Identifier",
                                "src": "4043:12:2"
                              }
                            ],
                            "id": 1955,
                            "name": "IndexAccess",
                            "src": "4034:22:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1922,
                              "type": "struct DebtRegistry.Entry memory",
                              "value": "entry"
                            },
                            "id": 1956,
                            "name": "Identifier",
                            "src": "4059:5:2"
                          }
                        ],
                        "id": 1957,
                        "name": "Assignment",
                        "src": "4034:30:2"
                      }
                    ],
                    "id": 1958,
                    "name": "ExpressionStatement",
                    "src": "4034:30:2"
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
                                      "referencedDeclaration": 1796,
                                      "type": "mapping(address => bytes32[] storage ref)",
                                      "value": "debtorToDebts"
                                    },
                                    "id": 1959,
                                    "name": "Identifier",
                                    "src": "4074:13:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1899,
                                      "type": "address",
                                      "value": "_debtor"
                                    },
                                    "id": 1960,
                                    "name": "Identifier",
                                    "src": "4088:7:2"
                                  }
                                ],
                                "id": 1961,
                                "name": "IndexAccess",
                                "src": "4074:22:2"
                              }
                            ],
                            "id": 1962,
                            "name": "MemberAccess",
                            "src": "4074:27:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1935,
                              "type": "bytes32",
                              "value": "issuanceHash"
                            },
                            "id": 1963,
                            "name": "Identifier",
                            "src": "4102:12:2"
                          }
                        ],
                        "id": 1964,
                        "name": "FunctionCall",
                        "src": "4074:41:2"
                      }
                    ],
                    "id": 1965,
                    "name": "ExpressionStatement",
                    "src": "4074:41:2"
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
                              "referencedDeclaration": 1814,
                              "type": "function (bytes32,address,address,uint256,address,bytes32)",
                              "value": "LogInsertEntry"
                            },
                            "id": 1966,
                            "name": "Identifier",
                            "src": "4126:14:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1935,
                              "type": "bytes32",
                              "value": "issuanceHash"
                            },
                            "id": 1967,
                            "name": "Identifier",
                            "src": "4154:12:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "beneficiary",
                              "referencedDeclaration": 1776,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1922,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1968,
                                "name": "Identifier",
                                "src": "4180:5:2"
                              }
                            ],
                            "id": 1969,
                            "name": "MemberAccess",
                            "src": "4180:17:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriter",
                              "referencedDeclaration": 1778,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1922,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1970,
                                "name": "Identifier",
                                "src": "4211:5:2"
                              }
                            ],
                            "id": 1971,
                            "name": "MemberAccess",
                            "src": "4211:17:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriterRiskRating",
                              "referencedDeclaration": 1780,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1922,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1972,
                                "name": "Identifier",
                                "src": "4242:5:2"
                              }
                            ],
                            "id": 1973,
                            "name": "MemberAccess",
                            "src": "4242:27:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1782,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1922,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1974,
                                "name": "Identifier",
                                "src": "4283:5:2"
                              }
                            ],
                            "id": 1975,
                            "name": "MemberAccess",
                            "src": "4283:19:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1784,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1922,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "entry"
                                },
                                "id": 1976,
                                "name": "Identifier",
                                "src": "4316:5:2"
                              }
                            ],
                            "id": 1977,
                            "name": "MemberAccess",
                            "src": "4316:29:2"
                          }
                        ],
                        "id": 1978,
                        "name": "FunctionCall",
                        "src": "4126:229:2"
                      }
                    ],
                    "id": 1979,
                    "name": "ExpressionStatement",
                    "src": "4126:229:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1920
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 1935,
                          "type": "bytes32",
                          "value": "issuanceHash"
                        },
                        "id": 1980,
                        "name": "Identifier",
                        "src": "4373:12:2"
                      }
                    ],
                    "id": 1981,
                    "name": "Return",
                    "src": "4366:19:2"
                  }
                ],
                "id": 1982,
                "name": "Block",
                "src": "3631:761:2"
              }
            ],
            "id": 1983,
            "name": "FunctionDefinition",
            "src": "3214:1178:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "modifyBeneficiary",
              "payable": false,
              "scope": 2281,
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
                      "scope": 2021,
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
                        "id": 1984,
                        "name": "ElementaryTypeName",
                        "src": "4590:7:2"
                      }
                    ],
                    "id": 1985,
                    "name": "VariableDeclaration",
                    "src": "4590:20:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "newBeneficiary",
                      "scope": 2021,
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
                        "id": 1986,
                        "name": "ElementaryTypeName",
                        "src": "4612:7:2"
                      }
                    ],
                    "id": 1987,
                    "name": "VariableDeclaration",
                    "src": "4612:22:2"
                  }
                ],
                "id": 1988,
                "name": "ParameterList",
                "src": "4589:46:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 1999,
                "name": "ParameterList",
                "src": "4787:0:2"
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
                      "referencedDeclaration": 1862,
                      "type": "modifier ()",
                      "value": "onlyAuthorizedToEdit"
                    },
                    "id": 1989,
                    "name": "Identifier",
                    "src": "4659:20:2"
                  }
                ],
                "id": 1990,
                "name": "ModifierInvocation",
                "src": "4659:20:2"
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
                      "referencedDeclaration": 7910,
                      "type": "modifier ()",
                      "value": "whenNotPaused"
                    },
                    "id": 1991,
                    "name": "Identifier",
                    "src": "4688:13:2"
                  }
                ],
                "id": 1992,
                "name": "ModifierInvocation",
                "src": "4688:13:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1879,
                      "type": "modifier (bytes32)",
                      "value": "onlyExtantEntry"
                    },
                    "id": 1993,
                    "name": "Identifier",
                    "src": "4710:15:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1985,
                      "type": "bytes32",
                      "value": "issuanceHash"
                    },
                    "id": 1994,
                    "name": "Identifier",
                    "src": "4726:12:2"
                  }
                ],
                "id": 1995,
                "name": "ModifierInvocation",
                "src": "4710:29:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1893,
                      "type": "modifier (address)",
                      "value": "nonNullBeneficiary"
                    },
                    "id": 1996,
                    "name": "Identifier",
                    "src": "4748:18:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1987,
                      "type": "address",
                      "value": "newBeneficiary"
                    },
                    "id": 1997,
                    "name": "Identifier",
                    "src": "4767:14:2"
                  }
                ],
                "id": 1998,
                "name": "ModifierInvocation",
                "src": "4748:34:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2001
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "previousBeneficiary",
                          "scope": 2021,
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
                            "id": 2000,
                            "name": "ElementaryTypeName",
                            "src": "4797:7:2"
                          }
                        ],
                        "id": 2001,
                        "name": "VariableDeclaration",
                        "src": "4797:27:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "beneficiary",
                          "referencedDeclaration": 1776,
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
                                  "referencedDeclaration": 1791,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 2002,
                                "name": "Identifier",
                                "src": "4827:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1985,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 2003,
                                "name": "Identifier",
                                "src": "4836:12:2"
                              }
                            ],
                            "id": 2004,
                            "name": "IndexAccess",
                            "src": "4827:22:2"
                          }
                        ],
                        "id": 2005,
                        "name": "MemberAccess",
                        "src": "4827:34:2"
                      }
                    ],
                    "id": 2006,
                    "name": "VariableDeclarationStatement",
                    "src": "4797:64:2"
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
                              "referencedDeclaration": 1776,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2007,
                                    "name": "Identifier",
                                    "src": "4872:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1985,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2008,
                                    "name": "Identifier",
                                    "src": "4881:12:2"
                                  }
                                ],
                                "id": 2009,
                                "name": "IndexAccess",
                                "src": "4872:22:2"
                              }
                            ],
                            "id": 2010,
                            "name": "MemberAccess",
                            "src": "4872:34:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1987,
                              "type": "address",
                              "value": "newBeneficiary"
                            },
                            "id": 2011,
                            "name": "Identifier",
                            "src": "4909:14:2"
                          }
                        ],
                        "id": 2012,
                        "name": "Assignment",
                        "src": "4872:51:2"
                      }
                    ],
                    "id": 2013,
                    "name": "ExpressionStatement",
                    "src": "4872:51:2"
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
                              "referencedDeclaration": 1822,
                              "type": "function (bytes32,address,address)",
                              "value": "LogModifyEntryBeneficiary"
                            },
                            "id": 2014,
                            "name": "Identifier",
                            "src": "4934:25:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1985,
                              "type": "bytes32",
                              "value": "issuanceHash"
                            },
                            "id": 2015,
                            "name": "Identifier",
                            "src": "4973:12:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2001,
                              "type": "address",
                              "value": "previousBeneficiary"
                            },
                            "id": 2016,
                            "name": "Identifier",
                            "src": "4999:19:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1987,
                              "type": "address",
                              "value": "newBeneficiary"
                            },
                            "id": 2017,
                            "name": "Identifier",
                            "src": "5032:14:2"
                          }
                        ],
                        "id": 2018,
                        "name": "FunctionCall",
                        "src": "4934:122:2"
                      }
                    ],
                    "id": 2019,
                    "name": "ExpressionStatement",
                    "src": "4934:122:2"
                  }
                ],
                "id": 2020,
                "name": "Block",
                "src": "4787:276:2"
              }
            ],
            "id": 2021,
            "name": "FunctionDefinition",
            "src": "4563:500:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedInsertAgent",
              "payable": false,
              "scope": 2281,
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
                      "scope": 2039,
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
                        "id": 2022,
                        "name": "ElementaryTypeName",
                        "src": "5226:7:2"
                      }
                    ],
                    "id": 2023,
                    "name": "VariableDeclaration",
                    "src": "5226:13:2"
                  }
                ],
                "id": 2024,
                "name": "ParameterList",
                "src": "5225:15:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2027,
                "name": "ParameterList",
                "src": "5278:0:2"
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
                      "referencedDeclaration": 8077,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2025,
                    "name": "Identifier",
                    "src": "5264:9:2"
                  }
                ],
                "id": 2026,
                "name": "ModifierInvocation",
                "src": "5264:9:2"
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
                              "referencedDeclaration": 5246,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1798,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryInsertPermissions"
                                },
                                "id": 2028,
                                "name": "Identifier",
                                "src": "5288:22:2"
                              }
                            ],
                            "id": 2030,
                            "name": "MemberAccess",
                            "src": "5288:32:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2023,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2031,
                            "name": "Identifier",
                            "src": "5321:5:2"
                          }
                        ],
                        "id": 2032,
                        "name": "FunctionCall",
                        "src": "5288:39:2"
                      }
                    ],
                    "id": 2033,
                    "name": "ExpressionStatement",
                    "src": "5288:39:2"
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
                              "referencedDeclaration": 1826,
                              "type": "function (address)",
                              "value": "LogAddAuthorizedInsertAgent"
                            },
                            "id": 2034,
                            "name": "Identifier",
                            "src": "5337:27:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2023,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2035,
                            "name": "Identifier",
                            "src": "5365:5:2"
                          }
                        ],
                        "id": 2036,
                        "name": "FunctionCall",
                        "src": "5337:34:2"
                      }
                    ],
                    "id": 2037,
                    "name": "ExpressionStatement",
                    "src": "5337:34:2"
                  }
                ],
                "id": 2038,
                "name": "Block",
                "src": "5278:100:2"
              }
            ],
            "id": 2039,
            "name": "FunctionDefinition",
            "src": "5192:186:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "addAuthorizedEditAgent",
              "payable": false,
              "scope": 2281,
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
                      "scope": 2057,
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
                        "id": 2040,
                        "name": "ElementaryTypeName",
                        "src": "5550:7:2"
                      }
                    ],
                    "id": 2041,
                    "name": "VariableDeclaration",
                    "src": "5550:13:2"
                  }
                ],
                "id": 2042,
                "name": "ParameterList",
                "src": "5549:15:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2045,
                "name": "ParameterList",
                "src": "5602:0:2"
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
                      "referencedDeclaration": 8077,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2043,
                    "name": "Identifier",
                    "src": "5588:9:2"
                  }
                ],
                "id": 2044,
                "name": "ModifierInvocation",
                "src": "5588:9:2"
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
                              "referencedDeclaration": 5246,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1800,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryEditPermissions"
                                },
                                "id": 2046,
                                "name": "Identifier",
                                "src": "5612:20:2"
                              }
                            ],
                            "id": 2048,
                            "name": "MemberAccess",
                            "src": "5612:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2041,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2049,
                            "name": "Identifier",
                            "src": "5643:5:2"
                          }
                        ],
                        "id": 2050,
                        "name": "FunctionCall",
                        "src": "5612:37:2"
                      }
                    ],
                    "id": 2051,
                    "name": "ExpressionStatement",
                    "src": "5612:37:2"
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
                              "referencedDeclaration": 1830,
                              "type": "function (address)",
                              "value": "LogAddAuthorizedEditAgent"
                            },
                            "id": 2052,
                            "name": "Identifier",
                            "src": "5659:25:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2041,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2053,
                            "name": "Identifier",
                            "src": "5685:5:2"
                          }
                        ],
                        "id": 2054,
                        "name": "FunctionCall",
                        "src": "5659:32:2"
                      }
                    ],
                    "id": 2055,
                    "name": "ExpressionStatement",
                    "src": "5659:32:2"
                  }
                ],
                "id": 2056,
                "name": "Block",
                "src": "5602:96:2"
              }
            ],
            "id": 2057,
            "name": "FunctionDefinition",
            "src": "5518:180:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeInsertAgentAuthorization",
              "payable": false,
              "scope": 2281,
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
                      "scope": 2075,
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
                        "id": 2058,
                        "name": "ElementaryTypeName",
                        "src": "5872:7:2"
                      }
                    ],
                    "id": 2059,
                    "name": "VariableDeclaration",
                    "src": "5872:13:2"
                  }
                ],
                "id": 2060,
                "name": "ParameterList",
                "src": "5871:15:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2063,
                "name": "ParameterList",
                "src": "5924:0:2"
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
                      "referencedDeclaration": 8077,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2061,
                    "name": "Identifier",
                    "src": "5910:9:2"
                  }
                ],
                "id": 2062,
                "name": "ModifierInvocation",
                "src": "5910:9:2"
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
                              "referencedDeclaration": 5325,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1798,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryInsertPermissions"
                                },
                                "id": 2064,
                                "name": "Identifier",
                                "src": "5934:22:2"
                              }
                            ],
                            "id": 2066,
                            "name": "MemberAccess",
                            "src": "5934:42:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2059,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2067,
                            "name": "Identifier",
                            "src": "5977:5:2"
                          }
                        ],
                        "id": 2068,
                        "name": "FunctionCall",
                        "src": "5934:49:2"
                      }
                    ],
                    "id": 2069,
                    "name": "ExpressionStatement",
                    "src": "5934:49:2"
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
                              "referencedDeclaration": 1834,
                              "type": "function (address)",
                              "value": "LogRevokeInsertAgentAuthorization"
                            },
                            "id": 2070,
                            "name": "Identifier",
                            "src": "5993:33:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2059,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2071,
                            "name": "Identifier",
                            "src": "6027:5:2"
                          }
                        ],
                        "id": 2072,
                        "name": "FunctionCall",
                        "src": "5993:40:2"
                      }
                    ],
                    "id": 2073,
                    "name": "ExpressionStatement",
                    "src": "5993:40:2"
                  }
                ],
                "id": 2074,
                "name": "Block",
                "src": "5924:116:2"
              }
            ],
            "id": 2075,
            "name": "FunctionDefinition",
            "src": "5832:208:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "revokeEditAgentAuthorization",
              "payable": false,
              "scope": 2281,
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
                      "scope": 2093,
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
                        "id": 2076,
                        "name": "ElementaryTypeName",
                        "src": "6223:7:2"
                      }
                    ],
                    "id": 2077,
                    "name": "VariableDeclaration",
                    "src": "6223:13:2"
                  }
                ],
                "id": 2078,
                "name": "ParameterList",
                "src": "6222:15:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2081,
                "name": "ParameterList",
                "src": "6275:0:2"
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
                      "referencedDeclaration": 8077,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 2079,
                    "name": "Identifier",
                    "src": "6261:9:2"
                  }
                ],
                "id": 2080,
                "name": "ModifierInvocation",
                "src": "6261:9:2"
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
                              "referencedDeclaration": 5325,
                              "type": "function (struct PermissionsLib.Permissions storage pointer,address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1800,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryEditPermissions"
                                },
                                "id": 2082,
                                "name": "Identifier",
                                "src": "6285:20:2"
                              }
                            ],
                            "id": 2084,
                            "name": "MemberAccess",
                            "src": "6285:40:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2077,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2085,
                            "name": "Identifier",
                            "src": "6326:5:2"
                          }
                        ],
                        "id": 2086,
                        "name": "FunctionCall",
                        "src": "6285:47:2"
                      }
                    ],
                    "id": 2087,
                    "name": "ExpressionStatement",
                    "src": "6285:47:2"
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
                              "referencedDeclaration": 1838,
                              "type": "function (address)",
                              "value": "LogRevokeEditAgentAuthorization"
                            },
                            "id": 2088,
                            "name": "Identifier",
                            "src": "6342:31:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2077,
                              "type": "address",
                              "value": "agent"
                            },
                            "id": 2089,
                            "name": "Identifier",
                            "src": "6374:5:2"
                          }
                        ],
                        "id": 2090,
                        "name": "FunctionCall",
                        "src": "6342:38:2"
                      }
                    ],
                    "id": 2091,
                    "name": "ExpressionStatement",
                    "src": "6342:38:2"
                  }
                ],
                "id": 2092,
                "name": "Block",
                "src": "6275:112:2"
              }
            ],
            "id": 2093,
            "name": "FunctionDefinition",
            "src": "6185:202:2"
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
              "scope": 2281,
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
                      "scope": 2143,
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
                        "id": 2094,
                        "name": "ElementaryTypeName",
                        "src": "6487:7:2"
                      }
                    ],
                    "id": 2095,
                    "name": "VariableDeclaration",
                    "src": "6487:20:2"
                  }
                ],
                "id": 2096,
                "name": "ParameterList",
                "src": "6486:22:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2097,
                        "name": "ElementaryTypeName",
                        "src": "6553:7:2"
                      }
                    ],
                    "id": 2098,
                    "name": "VariableDeclaration",
                    "src": "6553:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2099,
                        "name": "ElementaryTypeName",
                        "src": "6562:7:2"
                      }
                    ],
                    "id": 2100,
                    "name": "VariableDeclaration",
                    "src": "6562:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2101,
                        "name": "ElementaryTypeName",
                        "src": "6571:7:2"
                      }
                    ],
                    "id": 2102,
                    "name": "VariableDeclaration",
                    "src": "6571:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2103,
                        "name": "ElementaryTypeName",
                        "src": "6580:4:2"
                      }
                    ],
                    "id": 2104,
                    "name": "VariableDeclaration",
                    "src": "6580:4:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2105,
                        "name": "ElementaryTypeName",
                        "src": "6586:7:2"
                      }
                    ],
                    "id": 2106,
                    "name": "VariableDeclaration",
                    "src": "6586:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2107,
                        "name": "ElementaryTypeName",
                        "src": "6595:7:2"
                      }
                    ],
                    "id": 2108,
                    "name": "VariableDeclaration",
                    "src": "6595:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2143,
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
                        "id": 2109,
                        "name": "ElementaryTypeName",
                        "src": "6604:4:2"
                      }
                    ],
                    "id": 2110,
                    "name": "VariableDeclaration",
                    "src": "6604:4:2"
                  }
                ],
                "id": 2111,
                "name": "ParameterList",
                "src": "6552:57:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2111
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
                              "referencedDeclaration": 1774,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2112,
                                    "name": "Identifier",
                                    "src": "6645:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2113,
                                    "name": "Identifier",
                                    "src": "6654:12:2"
                                  }
                                ],
                                "id": 2114,
                                "name": "IndexAccess",
                                "src": "6645:22:2"
                              }
                            ],
                            "id": 2115,
                            "name": "MemberAccess",
                            "src": "6645:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "beneficiary",
                              "referencedDeclaration": 1776,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2116,
                                    "name": "Identifier",
                                    "src": "6689:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2117,
                                    "name": "Identifier",
                                    "src": "6698:12:2"
                                  }
                                ],
                                "id": 2118,
                                "name": "IndexAccess",
                                "src": "6689:22:2"
                              }
                            ],
                            "id": 2119,
                            "name": "MemberAccess",
                            "src": "6689:34:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriter",
                              "referencedDeclaration": 1778,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2120,
                                    "name": "Identifier",
                                    "src": "6737:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2121,
                                    "name": "Identifier",
                                    "src": "6746:12:2"
                                  }
                                ],
                                "id": 2122,
                                "name": "IndexAccess",
                                "src": "6737:22:2"
                              }
                            ],
                            "id": 2123,
                            "name": "MemberAccess",
                            "src": "6737:34:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriterRiskRating",
                              "referencedDeclaration": 1780,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2124,
                                    "name": "Identifier",
                                    "src": "6785:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2125,
                                    "name": "Identifier",
                                    "src": "6794:12:2"
                                  }
                                ],
                                "id": 2126,
                                "name": "IndexAccess",
                                "src": "6785:22:2"
                              }
                            ],
                            "id": 2127,
                            "name": "MemberAccess",
                            "src": "6785:44:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1782,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2128,
                                    "name": "Identifier",
                                    "src": "6843:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2129,
                                    "name": "Identifier",
                                    "src": "6852:12:2"
                                  }
                                ],
                                "id": 2130,
                                "name": "IndexAccess",
                                "src": "6843:22:2"
                              }
                            ],
                            "id": 2131,
                            "name": "MemberAccess",
                            "src": "6843:36:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1784,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2132,
                                    "name": "Identifier",
                                    "src": "6893:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2133,
                                    "name": "Identifier",
                                    "src": "6902:12:2"
                                  }
                                ],
                                "id": 2134,
                                "name": "IndexAccess",
                                "src": "6893:22:2"
                              }
                            ],
                            "id": 2135,
                            "name": "MemberAccess",
                            "src": "6893:46:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "issuanceBlockTimestamp",
                              "referencedDeclaration": 1786,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2136,
                                    "name": "Identifier",
                                    "src": "6953:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2095,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2137,
                                    "name": "Identifier",
                                    "src": "6962:12:2"
                                  }
                                ],
                                "id": 2138,
                                "name": "IndexAccess",
                                "src": "6953:22:2"
                              }
                            ],
                            "id": 2139,
                            "name": "MemberAccess",
                            "src": "6953:45:2"
                          }
                        ],
                        "id": 2140,
                        "name": "TupleExpression",
                        "src": "6631:377:2"
                      }
                    ],
                    "id": 2141,
                    "name": "Return",
                    "src": "6624:384:2"
                  }
                ],
                "id": 2142,
                "name": "Block",
                "src": "6614:401:2"
              }
            ],
            "id": 2143,
            "name": "FunctionDefinition",
            "src": "6474:541:2"
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
              "scope": 2281,
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
                      "scope": 2156,
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
                        "id": 2144,
                        "name": "ElementaryTypeName",
                        "src": "7112:7:2"
                      }
                    ],
                    "id": 2145,
                    "name": "VariableDeclaration",
                    "src": "7112:20:2"
                  }
                ],
                "id": 2146,
                "name": "ParameterList",
                "src": "7111:22:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2156,
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
                        "id": 2147,
                        "name": "ElementaryTypeName",
                        "src": "7178:7:2"
                      }
                    ],
                    "id": 2148,
                    "name": "VariableDeclaration",
                    "src": "7178:7:2"
                  }
                ],
                "id": 2149,
                "name": "ParameterList",
                "src": "7177:9:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2149
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
                          "referencedDeclaration": 1776,
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
                                  "referencedDeclaration": 1791,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 2150,
                                "name": "Identifier",
                                "src": "7208:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2145,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 2151,
                                "name": "Identifier",
                                "src": "7217:12:2"
                              }
                            ],
                            "id": 2152,
                            "name": "IndexAccess",
                            "src": "7208:22:2"
                          }
                        ],
                        "id": 2153,
                        "name": "MemberAccess",
                        "src": "7208:34:2"
                      }
                    ],
                    "id": 2154,
                    "name": "Return",
                    "src": "7201:41:2"
                  }
                ],
                "id": 2155,
                "name": "Block",
                "src": "7191:58:2"
              }
            ],
            "id": 2156,
            "name": "FunctionDefinition",
            "src": "7088:161:2"
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
              "scope": 2281,
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
                      "scope": 2169,
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
                        "id": 2157,
                        "name": "ElementaryTypeName",
                        "src": "7359:7:2"
                      }
                    ],
                    "id": 2158,
                    "name": "VariableDeclaration",
                    "src": "7359:20:2"
                  }
                ],
                "id": 2159,
                "name": "ParameterList",
                "src": "7358:22:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2169,
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
                        "id": 2160,
                        "name": "ElementaryTypeName",
                        "src": "7426:7:2"
                      }
                    ],
                    "id": 2161,
                    "name": "VariableDeclaration",
                    "src": "7426:7:2"
                  }
                ],
                "id": 2162,
                "name": "ParameterList",
                "src": "7425:9:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2162
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
                          "referencedDeclaration": 1782,
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
                                  "referencedDeclaration": 1791,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 2163,
                                "name": "Identifier",
                                "src": "7456:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2158,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 2164,
                                "name": "Identifier",
                                "src": "7465:12:2"
                              }
                            ],
                            "id": 2165,
                            "name": "IndexAccess",
                            "src": "7456:22:2"
                          }
                        ],
                        "id": 2166,
                        "name": "MemberAccess",
                        "src": "7456:36:2"
                      }
                    ],
                    "id": 2167,
                    "name": "Return",
                    "src": "7449:43:2"
                  }
                ],
                "id": 2168,
                "name": "Block",
                "src": "7439:60:2"
              }
            ],
            "id": 2169,
            "name": "FunctionDefinition",
            "src": "7333:166:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getTermsContractParameters",
              "payable": false,
              "scope": 2281,
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
                      "scope": 2185,
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
                        "id": 2170,
                        "name": "ElementaryTypeName",
                        "src": "7622:7:2"
                      }
                    ],
                    "id": 2171,
                    "name": "VariableDeclaration",
                    "src": "7622:20:2"
                  }
                ],
                "id": 2172,
                "name": "ParameterList",
                "src": "7621:22:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2185,
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
                        "id": 2176,
                        "name": "ElementaryTypeName",
                        "src": "7727:7:2"
                      }
                    ],
                    "id": 2177,
                    "name": "VariableDeclaration",
                    "src": "7727:7:2"
                  }
                ],
                "id": 2178,
                "name": "ParameterList",
                "src": "7726:9:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1879,
                      "type": "modifier (bytes32)",
                      "value": "onlyExtantEntry"
                    },
                    "id": 2173,
                    "name": "Identifier",
                    "src": "7680:15:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2171,
                      "type": "bytes32",
                      "value": "issuanceHash"
                    },
                    "id": 2174,
                    "name": "Identifier",
                    "src": "7696:12:2"
                  }
                ],
                "id": 2175,
                "name": "ModifierInvocation",
                "src": "7680:29:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2178
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
                          "referencedDeclaration": 1784,
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
                                  "referencedDeclaration": 1791,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 2179,
                                "name": "Identifier",
                                "src": "7757:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2171,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 2180,
                                "name": "Identifier",
                                "src": "7766:12:2"
                              }
                            ],
                            "id": 2181,
                            "name": "IndexAccess",
                            "src": "7757:22:2"
                          }
                        ],
                        "id": 2182,
                        "name": "MemberAccess",
                        "src": "7757:46:2"
                      }
                    ],
                    "id": 2183,
                    "name": "Return",
                    "src": "7750:53:2"
                  }
                ],
                "id": 2184,
                "name": "Block",
                "src": "7740:70:2"
              }
            ],
            "id": 2185,
            "name": "FunctionDefinition",
            "src": "7586:224:2"
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
              "scope": 2281,
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
                      "scope": 2205,
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
                        "id": 2186,
                        "name": "ElementaryTypeName",
                        "src": "7953:7:2"
                      }
                    ],
                    "id": 2187,
                    "name": "VariableDeclaration",
                    "src": "7953:20:2"
                  }
                ],
                "id": 2188,
                "name": "ParameterList",
                "src": "7952:22:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2205,
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
                        "id": 2189,
                        "name": "ElementaryTypeName",
                        "src": "8019:7:2"
                      }
                    ],
                    "id": 2190,
                    "name": "VariableDeclaration",
                    "src": "8019:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2205,
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
                        "id": 2191,
                        "name": "ElementaryTypeName",
                        "src": "8028:7:2"
                      }
                    ],
                    "id": 2192,
                    "name": "VariableDeclaration",
                    "src": "8028:7:2"
                  }
                ],
                "id": 2193,
                "name": "ParameterList",
                "src": "8018:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2193
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
                              "referencedDeclaration": 1782,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2194,
                                    "name": "Identifier",
                                    "src": "8072:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2187,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2195,
                                    "name": "Identifier",
                                    "src": "8081:12:2"
                                  }
                                ],
                                "id": 2196,
                                "name": "IndexAccess",
                                "src": "8072:22:2"
                              }
                            ],
                            "id": 2197,
                            "name": "MemberAccess",
                            "src": "8072:36:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1784,
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
                                      "referencedDeclaration": 1791,
                                      "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                      "value": "registry"
                                    },
                                    "id": 2198,
                                    "name": "Identifier",
                                    "src": "8122:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2187,
                                      "type": "bytes32",
                                      "value": "issuanceHash"
                                    },
                                    "id": 2199,
                                    "name": "Identifier",
                                    "src": "8131:12:2"
                                  }
                                ],
                                "id": 2200,
                                "name": "IndexAccess",
                                "src": "8122:22:2"
                              }
                            ],
                            "id": 2201,
                            "name": "MemberAccess",
                            "src": "8122:46:2"
                          }
                        ],
                        "id": 2202,
                        "name": "TupleExpression",
                        "src": "8058:120:2"
                      }
                    ],
                    "id": 2203,
                    "name": "Return",
                    "src": "8051:127:2"
                  }
                ],
                "id": 2204,
                "name": "Block",
                "src": "8041:144:2"
              }
            ],
            "id": 2205,
            "name": "FunctionDefinition",
            "src": "7935:250:2"
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
              "scope": 2281,
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
                      "scope": 2218,
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
                        "id": 2206,
                        "name": "ElementaryTypeName",
                        "src": "8322:7:2"
                      }
                    ],
                    "id": 2207,
                    "name": "VariableDeclaration",
                    "src": "8322:20:2"
                  }
                ],
                "id": 2208,
                "name": "ParameterList",
                "src": "8321:22:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 2218,
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
                        "id": 2209,
                        "name": "ElementaryTypeName",
                        "src": "8389:4:2"
                      }
                    ],
                    "id": 2210,
                    "name": "VariableDeclaration",
                    "src": "8389:14:2"
                  }
                ],
                "id": 2211,
                "name": "ParameterList",
                "src": "8388:16:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2211
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
                          "referencedDeclaration": 1786,
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
                                  "referencedDeclaration": 1791,
                                  "type": "mapping(bytes32 => struct DebtRegistry.Entry storage ref)",
                                  "value": "registry"
                                },
                                "id": 2212,
                                "name": "Identifier",
                                "src": "8426:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2207,
                                  "type": "bytes32",
                                  "value": "issuanceHash"
                                },
                                "id": 2213,
                                "name": "Identifier",
                                "src": "8435:12:2"
                              }
                            ],
                            "id": 2214,
                            "name": "IndexAccess",
                            "src": "8426:22:2"
                          }
                        ],
                        "id": 2215,
                        "name": "MemberAccess",
                        "src": "8426:45:2"
                      }
                    ],
                    "id": 2216,
                    "name": "Return",
                    "src": "8419:52:2"
                  }
                ],
                "id": 2217,
                "name": "Block",
                "src": "8409:69:2"
              }
            ],
            "id": 2218,
            "name": "FunctionDefinition",
            "src": "8287:191:2"
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
              "scope": 2281,
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
                "id": 2219,
                "name": "ParameterList",
                "src": "8606:2:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2229,
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
                            "id": 2220,
                            "name": "ElementaryTypeName",
                            "src": "8653:7:2"
                          }
                        ],
                        "id": 2221,
                        "name": "ArrayTypeName",
                        "src": "8653:9:2"
                      }
                    ],
                    "id": 2222,
                    "name": "VariableDeclaration",
                    "src": "8653:9:2"
                  }
                ],
                "id": 2223,
                "name": "ParameterList",
                "src": "8652:11:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2223
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
                              "referencedDeclaration": 5368,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1798,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryInsertPermissions"
                                },
                                "id": 2224,
                                "name": "Identifier",
                                "src": "8685:22:2"
                              }
                            ],
                            "id": 2225,
                            "name": "MemberAccess",
                            "src": "8685:42:2"
                          }
                        ],
                        "id": 2226,
                        "name": "FunctionCall",
                        "src": "8685:44:2"
                      }
                    ],
                    "id": 2227,
                    "name": "Return",
                    "src": "8678:51:2"
                  }
                ],
                "id": 2228,
                "name": "Block",
                "src": "8668:68:2"
              }
            ],
            "id": 2229,
            "name": "FunctionDefinition",
            "src": "8572:164:2"
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
              "scope": 2281,
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
                "id": 2230,
                "name": "ParameterList",
                "src": "8873:2:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2240,
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
                            "id": 2231,
                            "name": "ElementaryTypeName",
                            "src": "8920:7:2"
                          }
                        ],
                        "id": 2232,
                        "name": "ArrayTypeName",
                        "src": "8920:9:2"
                      }
                    ],
                    "id": 2233,
                    "name": "VariableDeclaration",
                    "src": "8920:9:2"
                  }
                ],
                "id": 2234,
                "name": "ParameterList",
                "src": "8919:11:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2234
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
                              "referencedDeclaration": 5368,
                              "type": "function (struct PermissionsLib.Permissions storage pointer) view returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1800,
                                  "type": "struct PermissionsLib.Permissions storage ref",
                                  "value": "entryEditPermissions"
                                },
                                "id": 2235,
                                "name": "Identifier",
                                "src": "8952:20:2"
                              }
                            ],
                            "id": 2236,
                            "name": "MemberAccess",
                            "src": "8952:40:2"
                          }
                        ],
                        "id": 2237,
                        "name": "FunctionCall",
                        "src": "8952:42:2"
                      }
                    ],
                    "id": 2238,
                    "name": "Return",
                    "src": "8945:49:2"
                  }
                ],
                "id": 2239,
                "name": "Block",
                "src": "8935:66:2"
              }
            ],
            "id": 2240,
            "name": "FunctionDefinition",
            "src": "8841:160:2"
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
              "scope": 2281,
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
                      "scope": 2253,
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
                        "id": 2241,
                        "name": "ElementaryTypeName",
                        "src": "9170:7:2"
                      }
                    ],
                    "id": 2242,
                    "name": "VariableDeclaration",
                    "src": "9170:14:2"
                  }
                ],
                "id": 2243,
                "name": "ParameterList",
                "src": "9169:16:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2253,
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
                            "id": 2244,
                            "name": "ElementaryTypeName",
                            "src": "9230:7:2"
                          }
                        ],
                        "id": 2245,
                        "name": "ArrayTypeName",
                        "src": "9230:9:2"
                      }
                    ],
                    "id": 2246,
                    "name": "VariableDeclaration",
                    "src": "9230:9:2"
                  }
                ],
                "id": 2247,
                "name": "ParameterList",
                "src": "9229:11:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2247
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
                              "referencedDeclaration": 1796,
                              "type": "mapping(address => bytes32[] storage ref)",
                              "value": "debtorToDebts"
                            },
                            "id": 2248,
                            "name": "Identifier",
                            "src": "9262:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2242,
                              "type": "address",
                              "value": "debtor"
                            },
                            "id": 2249,
                            "name": "Identifier",
                            "src": "9276:6:2"
                          }
                        ],
                        "id": 2250,
                        "name": "IndexAccess",
                        "src": "9262:21:2"
                      }
                    ],
                    "id": 2251,
                    "name": "Return",
                    "src": "9255:28:2"
                  }
                ],
                "id": 2252,
                "name": "Block",
                "src": "9245:45:2"
              }
            ],
            "id": 2253,
            "name": "FunctionDefinition",
            "src": "9145:145:2"
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
              "scope": 2281,
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
                      "scope": 2280,
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
                          "referencedDeclaration": 1787,
                          "type": "struct DebtRegistry.Entry storage pointer"
                        },
                        "id": 2254,
                        "name": "UserDefinedTypeName",
                        "src": "9405:5:2"
                      }
                    ],
                    "id": 2255,
                    "name": "VariableDeclaration",
                    "src": "9405:12:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtor",
                      "scope": 2280,
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
                        "id": 2256,
                        "name": "ElementaryTypeName",
                        "src": "9419:7:2"
                      }
                    ],
                    "id": 2257,
                    "name": "VariableDeclaration",
                    "src": "9419:15:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_salt",
                      "scope": 2280,
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
                        "id": 2258,
                        "name": "ElementaryTypeName",
                        "src": "9436:4:2"
                      }
                    ],
                    "id": 2259,
                    "name": "VariableDeclaration",
                    "src": "9436:10:2"
                  }
                ],
                "id": 2260,
                "name": "ParameterList",
                "src": "9404:43:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 2280,
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
                        "id": 2261,
                        "name": "ElementaryTypeName",
                        "src": "9494:7:2"
                      }
                    ],
                    "id": 2262,
                    "name": "VariableDeclaration",
                    "src": "9494:7:2"
                  }
                ],
                "id": 2263,
                "name": "ParameterList",
                "src": "9493:9:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2263
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
                              "referencedDeclaration": 9779,
                              "type": "function () pure returns (bytes32)",
                              "value": "keccak256"
                            },
                            "id": 2264,
                            "name": "Identifier",
                            "src": "9524:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "version",
                              "referencedDeclaration": 1774,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 2265,
                                "name": "Identifier",
                                "src": "9547:6:2"
                              }
                            ],
                            "id": 2266,
                            "name": "MemberAccess",
                            "src": "9547:14:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2257,
                              "type": "address",
                              "value": "_debtor"
                            },
                            "id": 2267,
                            "name": "Identifier",
                            "src": "9575:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriter",
                              "referencedDeclaration": 1778,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 2268,
                                "name": "Identifier",
                                "src": "9596:6:2"
                              }
                            ],
                            "id": 2269,
                            "name": "MemberAccess",
                            "src": "9596:18:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "underwriterRiskRating",
                              "referencedDeclaration": 1780,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 2270,
                                "name": "Identifier",
                                "src": "9628:6:2"
                              }
                            ],
                            "id": 2271,
                            "name": "MemberAccess",
                            "src": "9628:28:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContract",
                              "referencedDeclaration": 1782,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 2272,
                                "name": "Identifier",
                                "src": "9670:6:2"
                              }
                            ],
                            "id": 2273,
                            "name": "MemberAccess",
                            "src": "9670:20:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termsContractParameters",
                              "referencedDeclaration": 1784,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2255,
                                  "type": "struct DebtRegistry.Entry memory",
                                  "value": "_entry"
                                },
                                "id": 2274,
                                "name": "Identifier",
                                "src": "9704:6:2"
                              }
                            ],
                            "id": 2275,
                            "name": "MemberAccess",
                            "src": "9704:30:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2259,
                              "type": "uint256",
                              "value": "_salt"
                            },
                            "id": 2276,
                            "name": "Identifier",
                            "src": "9748:5:2"
                          }
                        ],
                        "id": 2277,
                        "name": "FunctionCall",
                        "src": "9524:239:2"
                      }
                    ],
                    "id": 2278,
                    "name": "Return",
                    "src": "9517:246:2"
                  }
                ],
                "id": 2279,
                "name": "Block",
                "src": "9507:263:2"
              }
            ],
            "id": 2280,
            "name": "FunctionDefinition",
            "src": "9379:391:2"
          }
        ],
        "id": 2281,
        "name": "ContractDefinition",
        "src": "1082:8690:2"
      }
    ],
    "id": 2282,
    "name": "SourceUnit",
    "src": "584:9189:2"
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
      "address": "0x66e3f4e81394f696418a12428c5856daa9559a56"
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
  "updatedAt": "2018-04-25T07:10:36.819Z"
}