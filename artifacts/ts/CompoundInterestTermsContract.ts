export const CompoundInterestTermsContract = 
{
  "contractName": "CompoundInterestTermsContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "getValueRepaidToDate",
      "outputs": [
        {
          "name": "_valueRepaid",
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
      "name": "DAY_LENGTH_IN_SECONDS",
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
      "name": "debtKernel",
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
      "name": "MONTH_LENGTH_IN_SECONDS",
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
          "name": "agreementId",
          "type": "bytes32"
        }
      ],
      "name": "registerTermStart",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "debtRegistry",
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
      "name": "WEEK_LENGTH_IN_SECONDS",
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
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "payer",
          "type": "address"
        },
        {
          "name": "beneficiary",
          "type": "address"
        },
        {
          "name": "unitsOfRepayment",
          "type": "uint256"
        },
        {
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "registerRepayment",
      "outputs": [
        {
          "name": "_success",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "INTEREST_RATE_DECIMALS",
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
      "name": "HOUR_LENGTH_IN_SECONDS",
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
      "name": "repaymentRouter",
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
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "name": "getExpectedRepaymentValue",
      "outputs": [
        {
          "name": "_expectedRepaymentValue",
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
      "name": "repaymentToken",
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
          "name": "parameters",
          "type": "bytes32"
        }
      ],
      "name": "unpackParametersFromBytes",
      "outputs": [
        {
          "name": "_principal",
          "type": "uint128"
        },
        {
          "name": "_interestRate",
          "type": "uint64"
        },
        {
          "name": "_amortizationUnitType",
          "type": "uint8"
        },
        {
          "name": "_termLengthInAmortizationUnits",
          "type": "uint56"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "YEAR_LENGTH_IN_SECONDS",
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
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "valueRepaid",
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
      "inputs": [
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_repaymentToken",
          "type": "address"
        },
        {
          "name": "_repaymentRouter",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6040516080806111db8339810160405280805190602001909190805190602001909190805190602001909190805190602001909190505083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505061107e8061015d6000396000f3006060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100eb5780630776298214610126578063079dd4b71461014f57806320863894146101a4578063282b3405146101cd5780632f866f731461020c57806340018a0d146102615780635f0280ba1461028a57806366234ffa1461032f5780636f69c96f146103585780636fa9d0561461038157806399114d84146103d6578063d6939ce01461041a578063ed8907d71461046f578063fd127a411461050f578063fd40d52e14610538575b600080fd5b34156100f657600080fd5b610110600480803560001916906020019091905050610573565b6040518082815260200191505060405180910390f35b341561013157600080fd5b610139610597565b6040518082815260200191505060405180910390f35b341561015a57600080fd5b6101626105a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101af57600080fd5b6101b76105c6565b6040518082815260200191505060405180910390f35b34156101d857600080fd5b6101f26004808035600019169060200190919050506105d2565b604051808215151515815260200191505060405180910390f35b341561021757600080fd5b61021f610721565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026c57600080fd5b610274610747565b6040518082815260200191505060405180910390f35b341561029557600080fd5b61031560048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610753565b604051808215151515815260200191505060405180910390f35b341561033a57600080fd5b610342610869565b6040518082815260200191505060405180910390f35b341561036357600080fd5b61036b61086e565b6040518082815260200191505060405180910390f35b341561038c57600080fd5b610394610874565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103e157600080fd5b61040460048080356000191690602001909190803590602001909190505061089a565b6040518082815260200191505060405180910390f35b341561042557600080fd5b61042d610a0e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561047a57600080fd5b610494600480803560001916906020019091905050610a34565b60405180856fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018467ffffffffffffffff1667ffffffffffffffff1681526020018360ff1660ff1681526020018266ffffffffffffff1666ffffffffffffff16815260200194505050505060405180910390f35b341561051a57600080fd5b610522610b1a565b6040518082815260200191505060405180910390f35b341561054357600080fd5b61055d600480803560001916906020019091905050610b27565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063057600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16149050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107b157600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561085b5761083483600080896000191660001916815260200190815260200160002054610b3f90919063ffffffff16565b60008088600019166000191681526020019081526020016000208190555060019050610860565b600090505b95945050505050565b600981565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006108a4611010565b600084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561094857600080fd5b6102c65a03f1151561095957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614151561099c57600080fd5b6109a586610b5d565b92506109b18584610de4565b915060008214156109c55760009350610a05565b8260a001518211156109ef576109e8836000015184602001518560a00151610e45565b9350610a05565b610a028360000151846020015184610e45565b93505b50505092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060008060008060008060007fffffffffffffffffffffffffffffffff000000000000000000000000000000006001028c1696506fffffffffffffffff00000000000000006001028c16955067ff000000000000006001028c1694507001000000000000000000000000000000008760019004811515610ab557fe5b049350680100000000000000008660019004811515610ad057fe5b0492506701000000000000008560019004811515610aea57fe5b04915066ffffffffffffff6001028c16905083838383600190049a509a509a509a50505050505050509193509193565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b6000808284019050838110151515610b5357fe5b8091505092915050565b610b65611010565b600080600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8d6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610c1557600080fd5b6102c65a03f11515610c2657600080fd5b505050604051805190509950610c3b8a610a34565b836fffffffffffffffffffffffffffffffff1693508267ffffffffffffffff1692508160ff1691508066ffffffffffffff169050809950819a50829b50839c5050505050600480811115610c8b57fe5b8711151515610c9957600080fd5b866004811115610ca557fe5b9450610cb085610e81565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638d6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610d5357600080fd5b6102c65a03f11515610d6457600080fd5b505050604051805190509250610d838487610f6e90919063ffffffff16565b9150610d988383610b3f90919063ffffffff16565b905060c0604051908101604052808a8152602001898152602001848152602001828152602001866004811115610dca57fe5b8152602001878152509a5050505050505050505050919050565b6000806000836040015185111515610dff5760009250610e3d565b610e16846040015186610fa990919063ffffffff16565b9150610e258460800151610e81565b9050610e3a8183610fc290919063ffffffff16565b92505b505092915050565b6000806000610e5385610fdd565b9150610e6a84830a87610f6e90919063ffffffff16565b9050610e768185610fed565b925050509392505050565b6000806004811115610e8f57fe5b826004811115610e9b57fe5b1415610eab57610e109050610f69565b60016004811115610eb857fe5b826004811115610ec457fe5b1415610ed7576018610e10029050610f69565b60026004811115610ee457fe5b826004811115610ef057fe5b1415610f065760076018610e1002029050610f69565b60036004811115610f1357fe5b826004811115610f1f57fe5b1415610f3557601e6018610e1002029050610f69565b600480811115610f4157fe5b826004811115610f4d57fe5b1415610f645761016d6018610e1002029050610f69565b600080fd5b919050565b6000806000841415610f835760009150610fa2565b8284029050828482811515610f9457fe5b04141515610f9e57fe5b8091505b5092915050565b6000828211151515610fb757fe5b818303905092915050565b6000808284811515610fd057fe5b0490508091505092915050565b60006009600a0a82019050919050565b600061100882600902600a0a84610fc290919063ffffffff16565b905092915050565b60c060405190810160405280600081526020016000815260200160008152602001600081526020016000600481111561104557fe5b81526020016000815250905600a165627a7a72305820af82b66f924d2ee16c80ac8bf2c62965b1b2e326cb2d35f34204681421dcea500029",
  "deployedBytecode": "0x6060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100eb5780630776298214610126578063079dd4b71461014f57806320863894146101a4578063282b3405146101cd5780632f866f731461020c57806340018a0d146102615780635f0280ba1461028a57806366234ffa1461032f5780636f69c96f146103585780636fa9d0561461038157806399114d84146103d6578063d6939ce01461041a578063ed8907d71461046f578063fd127a411461050f578063fd40d52e14610538575b600080fd5b34156100f657600080fd5b610110600480803560001916906020019091905050610573565b6040518082815260200191505060405180910390f35b341561013157600080fd5b610139610597565b6040518082815260200191505060405180910390f35b341561015a57600080fd5b6101626105a0565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101af57600080fd5b6101b76105c6565b6040518082815260200191505060405180910390f35b34156101d857600080fd5b6101f26004808035600019169060200190919050506105d2565b604051808215151515815260200191505060405180910390f35b341561021757600080fd5b61021f610721565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026c57600080fd5b610274610747565b6040518082815260200191505060405180910390f35b341561029557600080fd5b61031560048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610753565b604051808215151515815260200191505060405180910390f35b341561033a57600080fd5b610342610869565b6040518082815260200191505060405180910390f35b341561036357600080fd5b61036b61086e565b6040518082815260200191505060405180910390f35b341561038c57600080fd5b610394610874565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156103e157600080fd5b61040460048080356000191690602001909190803590602001909190505061089a565b6040518082815260200191505060405180910390f35b341561042557600080fd5b61042d610a0e565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561047a57600080fd5b610494600480803560001916906020019091905050610a34565b60405180856fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1681526020018467ffffffffffffffff1667ffffffffffffffff1681526020018360ff1660ff1681526020018266ffffffffffffff1666ffffffffffffff16815260200194505050505060405180910390f35b341561051a57600080fd5b610522610b1a565b6040518082815260200191505060405180910390f35b341561054357600080fd5b61055d600480803560001916906020019091905050610b27565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063057600080fd5b3073ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9846000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b15156106e857600080fd5b6102c65a03f115156106f957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff16149050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b6000600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107b157600080fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561085b5761083483600080896000191660001916815260200190815260200160002054610b3f90919063ffffffff16565b60008088600019166000191681526020019081526020016000208190555060019050610860565b600090505b95945050505050565b600981565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006108a4611010565b600084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b151561094857600080fd5b6102c65a03f1151561095957600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff1614151561099c57600080fd5b6109a586610b5d565b92506109b18584610de4565b915060008214156109c55760009350610a05565b8260a001518211156109ef576109e8836000015184602001518560a00151610e45565b9350610a05565b610a028360000151846020015184610e45565b93505b50505092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060008060008060008060008060007fffffffffffffffffffffffffffffffff000000000000000000000000000000006001028c1696506fffffffffffffffff00000000000000006001028c16955067ff000000000000006001028c1694507001000000000000000000000000000000008760019004811515610ab557fe5b049350680100000000000000008660019004811515610ad057fe5b0492506701000000000000008560019004811515610aea57fe5b04915066ffffffffffffff6001028c16905083838383600190049a509a509a509a50505050505050509193509193565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b6000808284019050838110151515610b5357fe5b8091505092915050565b610b65611010565b600080600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8d6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610c1557600080fd5b6102c65a03f11515610c2657600080fd5b505050604051805190509950610c3b8a610a34565b836fffffffffffffffffffffffffffffffff1693508267ffffffffffffffff1692508160ff1691508066ffffffffffffff169050809950819a50829b50839c5050505050600480811115610c8b57fe5b8711151515610c9957600080fd5b866004811115610ca557fe5b9450610cb085610e81565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638d6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610d5357600080fd5b6102c65a03f11515610d6457600080fd5b505050604051805190509250610d838487610f6e90919063ffffffff16565b9150610d988383610b3f90919063ffffffff16565b905060c0604051908101604052808a8152602001898152602001848152602001828152602001866004811115610dca57fe5b8152602001878152509a5050505050505050505050919050565b6000806000836040015185111515610dff5760009250610e3d565b610e16846040015186610fa990919063ffffffff16565b9150610e258460800151610e81565b9050610e3a8183610fc290919063ffffffff16565b92505b505092915050565b6000806000610e5385610fdd565b9150610e6a84830a87610f6e90919063ffffffff16565b9050610e768185610fed565b925050509392505050565b6000806004811115610e8f57fe5b826004811115610e9b57fe5b1415610eab57610e109050610f69565b60016004811115610eb857fe5b826004811115610ec457fe5b1415610ed7576018610e10029050610f69565b60026004811115610ee457fe5b826004811115610ef057fe5b1415610f065760076018610e1002029050610f69565b60036004811115610f1357fe5b826004811115610f1f57fe5b1415610f3557601e6018610e1002029050610f69565b600480811115610f4157fe5b826004811115610f4d57fe5b1415610f645761016d6018610e1002029050610f69565b600080fd5b919050565b6000806000841415610f835760009150610fa2565b8284029050828482811515610f9457fe5b04141515610f9e57fe5b8091505b5092915050565b6000828211151515610fb757fe5b818303905092915050565b6000808284811515610fd057fe5b0490508091505092915050565b60006009600a0a82019050919050565b600061100882600902600a0a84610fc290919063ffffffff16565b905092915050565b60c060405190810160405280600081526020016000815260200160008152602001600081526020016000600481111561104557fe5b81526020016000815250905600a165627a7a72305820af82b66f924d2ee16c80ac8bf2c62965b1b2e326cb2d35f34204681421dcea500029",
  "sourceMap": "2074:15484:10:-;;;3548:371;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3777:13;3749:12;;:42;;;;;;;;;;;;;;;;;;3815:11;3802:10;;:24;;;;;;;;;;;;;;;;;;3853:15;3836:14;;:32;;;;;;;;;;;;;;;;;;3896:16;3878:15;;:34;;;;;;;;;;;;;;;;;;3548:371;;;;2074:15484;;;;;;",
  "deployedSourceMap": "2074:15484:10:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7955:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2609:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3013:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2764:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4502:219;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2974:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2687:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5433:446;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2166:47;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2550:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3079:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6488:1189;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3044:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8788:1977;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2843:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2923:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7955:167;8051:17;8091:11;:24;8103:11;8091:24;;;;;;;;;;;;;;;;;;8084:31;;7955:167;;;:::o;2609:72::-;2679:2;2596:7;2654:27;2609:72;:::o;3013:25::-;;;;;;;;;;;;;:::o;2764:73::-;2835:2;2679;2596:7;2654:27;2811:26;2764:73;:::o;4502:219::-;4619:13;3268:10;;;;;;;;;;;3254:24;;:10;:24;;;3246:33;;;;;;;;4709:4;4655:59;;:12;;;;;;;;;;;:29;;;4685:11;4655:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:59;;;4648:66;;4502:219;;;:::o;2974:32::-;;;;;;;;;;;;;:::o;2687:71::-;2757:1;2679:2;2596:7;2654:27;2733:25;2687:71;:::o;5433:446::-;5662:13;3170:15;;;;;;;;;;;3156:29;;:10;:29;;;3148:38;;;;;;;;5711:14;;;;;;;;;;;5695:30;;:12;:30;;;5691:159;;;5768:46;5797:16;5768:11;:24;5780:11;5768:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;5741:11;:24;5753:11;5741:24;;;;;;;;;;;;;;;;;:73;;;;5835:4;5828:11;;;;5691:159;5867:5;5860:12;;3196:1;5433:446;;;;;;;:::o;2166:47::-;2212:1;2166:47;:::o;2550:53::-;2596:7;2550:53;:::o;3079:30::-;;;;;;;;;;;;;:::o;6488:1189::-;6676:28;6720:36;;:::i;:::-;6809:13;6646:11;3393:12;;;;;;;;;;;:29;;;3423:11;3393:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3376:59;;3384:4;3376:59;;;3368:68;;;;;;;;6759:39;6786:11;6759:26;:39::i;:::-;6720:78;;6825:51;6858:9;6869:6;6825:32;:51::i;:::-;6809:67;;6903:1;6891:8;:13;6887:784;;;7057:1;7050:8;;;;6887:784;7090:6;:36;;;7079:8;:47;7075:596;;;7296:177;7352:6;:16;;;7386:6;:19;;;7423:6;:36;;;7296:38;:177::i;:::-;7289:184;;;;7075:596;7511:149;7567:6;:16;;;7601:6;:19;;;7638:8;7511:38;:149::i;:::-;7504:156;;3446:1;6488:1189;;;;;;;:::o;3044:29::-;;;;;;;;;;;;;:::o;8788:1977::-;8901:18;8933:20;8967:27;9008:37;9142:24;9363:27;9568:35;9957:14;10017:17;10082:25;10441:37;9194:66;9181:79;;:10;:79;9142:118;;9418:66;9405:79;;:10;:79;9363:121;;9631:66;9618:79;;:10;:79;9568:129;;9999:8;9979:16;9974:22;;;:33;;;;;;;;9957:50;;10065:7;10042:19;10037:25;;;:35;;;;;;;;10017:55;;10146:7;10115:27;10110:33;;;:43;;;;;;;;10082:71;;10506:66;10493:79;;:10;:79;10441:131;;10612:9;10643:12;10676:20;10718:29;10711:37;;;10583:175;;;;;;;;8788:1977;;;;;;;;;;;;:::o;2843:73::-;2913:3;2679:2;2596:7;2654:27;2889;2843:73;:::o;2923:44::-;;;;;;;;;;;;;;;;;:::o;1008:129:22:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;12184:1559:10:-;12289:30;;:::i;:::-;12335:18;12419:14;12443:17;12470:31;12511:34;12887:41;12990:36;13095:27;13186:24;13289:25;12356:12;;;;;;;;;;;:39;;;12396:11;12356:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12335:73;;12655:37;12681:10;12655:25;:37::i;:::-;12556:136;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12848:26;12843:32;;;;;;;;12813:26;:62;;12805:71;;;;;;;;12952:26;12931:48;;;;;;;;12887:92;;13029:56;13064:20;13029:34;:56::i;:::-;12990:95;;13125:12;;;;;;;;;;;:38;;;13164:11;13125:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13095:81;;13213:66;13247:31;13213:29;:33;;:66;;;;:::i;:::-;13186:93;;13317:47;13341:22;13317:19;:23;;:47;;;;:::i;:::-;13289:75;;13382:354;;;;;;;;;13430:9;13382:354;;;;13467:12;13382:354;;;;13517:22;13382:354;;;;13575:20;13382:354;;;;13631:20;13382:354;;;;;;;;;;;;13696:29;13382:354;;;13375:361;;12184:1559;;;;;;;;;;;;;:::o;11317:509::-;11462:10;11579;11646:36;11505:6;:29;;;11492:9;:42;;11488:81;;;11557:1;11550:8;;;;11488:81;11592:44;11606:6;:29;;;11592:9;:13;;:44;;;;:::i;:::-;11579:57;;11697:63;11732:6;:27;;;11697:34;:63::i;:::-;11646:114;;11777:42;11787:31;11777:5;:9;;:42;;;;:::i;:::-;11770:49;;11317:509;;;;;;;:::o;14318:744::-;14505:35;14556:21;14622:30;14580:32;14599:12;14580:18;:32::i;:::-;14556:56;;14655:77;14702:20;14682:16;:40;14655:9;:13;;:77;;;;:::i;:::-;14622:110;;14984:71;15007:25;15034:20;14984:22;:71::i;:::-;14977:78;;14318:744;;;;;;;:::o;16750:806::-;16884:37;16965:26;16941:50;;;;;;;;:20;:50;;;;;;;;;16937:613;;;2596:7;17007:29;;;;16937:613;17081:25;17057:49;;;;;;;;:20;:49;;;;;;;;;17053:497;;;2679:2;2596:7;2654:27;17122:28;;;;17053:497;17195:26;17171:50;;;;;;;;:20;:50;;;;;;;;;17167:383;;;2757:1;2679:2;2596:7;2654:27;2733:25;17237:29;;;;17167:383;17311:27;17287:51;;;;;;;;:20;:51;;;;;;;;;17283:267;;;2835:2;2679;2596:7;2654:27;2811:26;17354:30;;;;17283:267;17429:26;17405:50;;;;;;;;:20;:50;;;;;;;;;17401:149;;;2913:3;2679:2;2596:7;2654:27;2889;17471:29;;;;17401:149;17531:8;;;16750:806;;;;:::o;203:173:22:-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o;836:110::-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;15382:313:10:-;15476:22;2212:1;15660:2;:28;15645:12;:43;15638:50;;15382:313;;;:::o;16262:202::-;16365:22;16410:47;16450:5;2212:1;16427:28;16420:2;:36;16410:5;:9;;:47;;;;:::i;:::-;16403:54;;16262:202;;;;:::o;2074:15484::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TermsContract.sol\";\n\n\n/**\n * TODO: Address known issue: given that Solidity must use integers to compute\n *  compound interest functions, we require interestRates passed into\n *  the function have 9 decimals worth of precision.  This means that,\n *  with the following compound interest formula...\n *\n *      V = P(1+r)^t\n *\n *  Can be translated in solidity to...\n *\n *      V * 10^(9t) = P((1+r) * 10^9)^t\n *\n *  Meaning we compute the expected repayment value with ....\n *\n *      V = P((1+r) * 10^9)^t / 10^(9t)\n *\n *  This is all well and good, but there are scenarios in which\n *  the intermediate value V * 10^(9t) overflows a 256-bit unsigned\n *  integer.\n *\n *  Seeking guidance from security auditors for best practices\n *  in emulating fraction exponentiation in Solidity.\n *\n *  ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====\n *\n * Example terms contract for issuing debt agreements with compounding interest rates.\n *\n * The compound interest rate formula we're leveraging is\n *  V = P(1 + r/n)^(tn)\n *\n * Given that we assume n = 1 (i.e. compounding happens\n *  once per amortization interval), we can reduce the\n *  formula to\n *  V = P(1 + r)^t\n *\n * Thus, for simplification, we assign the following\n * terms:\n *\n * V := expectedRepaymentValue\n * P := principal\n * (1 + r) := interestRateBase\n * t := termLengthInAmortizationUnits\n *\n */\ncontract CompoundInterestTermsContract is TermsContract {\n    using SafeMath for uint;\n\n    uint public constant INTEREST_RATE_DECIMALS = 9;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n\n    struct CompoundInterestParams {\n        uint principal;\n        uint interestRate;\n        uint termStartUnixTimestamp;\n        uint termEndUnixTimestamp;\n        AmortizationUnitType amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n    }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    mapping (bytes32 => uint) public valueRepaid;\n\n    DebtRegistry public debtRegistry;\n\n    address public debtKernel;\n    address public repaymentToken;\n    address public repaymentRouter;\n\n    modifier onlyRouter() {\n        require(msg.sender == repaymentRouter);\n        _;\n    }\n\n    modifier onlyDebtKernel() {\n        require(msg.sender == debtKernel);\n        _;\n    }\n\n    modifier onlyMappedToThisContract(bytes32 agreementId) {\n        require(address(this) == debtRegistry.getTermsContract(agreementId));\n        _;\n    }\n\n    ////////////////////////\n    // EXTERNAL FUNCTIONS //\n    ////////////////////////\n\n    function CompoundInterestTermsContract(\n        address _debtRegistry,\n        address _debtKernel,\n        address _repaymentToken,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n\n        debtKernel = _debtKernel;\n        repaymentToken = _repaymentToken;\n        repaymentRouter = _repaymentRouter;\n    }\n\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the CompoundInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId\n    )\n        public\n        onlyDebtKernel\n        returns (bool _success)\n    {\n        return debtRegistry.getTermsContract(agreementId) == address(this);\n    }\n\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        onlyRouter\n        returns (bool _success)\n    {\n        if (tokenAddress == repaymentToken) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        onlyMappedToThisContract(agreementId)\n        returns (uint _expectedRepaymentValue)\n    {\n        CompoundInterestParams memory params = unpackParamsForAgreementID(agreementId);\n\n        uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);\n\n        if (numUnits == 0) {\n            /* The query occurs before the contract was even initialized so the\n            expected value of repayments is 0. */\n            return 0;\n        } else if (numUnits > params.termLengthInAmortizationUnits) {\n            /* the query occurs beyond the contract's term, so the expected\n            value of repayment is the full principal plus interest. */\n            return calculateCompoundInterestExpectedValue(\n                params.principal,\n                params.interestRate,\n                params.termLengthInAmortizationUnits\n            );\n        } else {\n            return calculateCompoundInterestExpectedValue(\n                params.principal,\n                params.interestRate,\n                numUnits\n            );\n        }\n    }\n\n    /// Returns the cumulative units-of-value repaid to date.\n    /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    /**\n     * Converts the 32-byte hex encoding of the given terms contract\n     * parameters into the principal, interest rate, amortization type,\n     * and term length of a CompoundInterestTermsContract parameterized\n     * by the given parameters.\n     *\n     * @param parameters bytes32 Hex-encoded 32-byte terms contract parameters.\n     * @return uint128 _principal The debt agreement principal amount.\n     * @return uint64 _interestRate The debt agreement's interest rate.\n     * @return uint8 _amortizationUnitType The debt agreement's amortization type.\n     * @return uint56 _termLengthInAmortizationUnits The debt agreement's term length\n     */\n    function unpackParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint128 _principal,\n            uint64 _interestRate,\n            uint8 _amortizationUnitType,\n            uint56 _termLengthInAmortizationUnits\n        )\n    {\n        // The first 16 bytes of the parameters represent the principal\n        bytes32 principalShifted =\n            parameters & 0xffffffffffffffffffffffffffffffff00000000000000000000000000000000;\n        // The subsequent 8 bytes represent the interest rate (with 9 decimals of precision)\n        bytes32 interestRateShifted =\n            parameters & 0x00000000000000000000000000000000ffffffffffffffff0000000000000000;\n        // The subsequent byte represents the amortization unit type code\n        bytes32 amortizationUnitTypeShifted =\n            parameters & 0x000000000000000000000000000000000000000000000000ff00000000000000;\n\n\n        // We bit-shift these values, respectively, 16 bytes, 8 bytes, and 7 bytes right using\n        // mathematical operations, so that their 32 byte integer counterparts\n        // correspond to the intended values packed in the 32 byte string\n        uint principal = uint(principalShifted) / 2 ** 128;\n        uint interestRate = uint(interestRateShifted) / 2 ** 64;\n        uint amortizationUnitType = uint(amortizationUnitTypeShifted) / 2 ** 56;\n\n        // The last 7 bytes of the parameters represents the term length of the loan,\n        // as defined in terms of the specified amortization units.\n        // Since this value takes the rightmost place in the parameters string,\n        // we do not need to bit-shift it.\n        bytes32 termLengthInAmortizationUnits =\n            parameters & 0x00000000000000000000000000000000000000000000000000ffffffffffffff;\n\n        return (\n            uint128(principal),\n            uint64(interestRate),\n            uint8(amortizationUnitType),\n            uint56(termLengthInAmortizationUnits)\n        );\n    }\n\n    ////////////////////////\n    // INTERNAL FUNCTIONS //\n    ////////////////////////\n\n    /**\n     * Returns the number of amortization units that have\n     * elapsed between the term start timestamp\n     * specified in `params` and the given `timestamp`\n     *\n     * @param timestamp uint Unix timestamp for which we are querying elapsed amortization units\n     * @param params CompoundInterestParams Unpacked parameters of the debt agreemen\n     * @return uint Number of amortization units elapsed between term start and `timestamp`\n     */\n    function numAmortizationUnitsForTimestamp(\n        uint timestamp,\n        CompoundInterestParams params\n    )\n        internal\n        returns (uint units)\n    {\n        if (timestamp <= params.termStartUnixTimestamp) {\n            return 0;\n        }\n\n        uint delta = timestamp.sub(params.termStartUnixTimestamp);\n        uint amortizationUnitLengthInSeconds =\n            getAmortizationUnitLengthInSeconds(params.amortizationUnitType);\n        return delta.div(amortizationUnitLengthInSeconds);\n    }\n\n    /**\n     * Retrieves terms contract parameters associated\n     * with `agreementId` and unpacks the hex representation\n     * into a struct containing the the fields defined in\n     * the CompoundInterestParams struct\n     *\n     * @param agreementId bytes32 The debt agreement's issuance hash\n     * @return CompoundInterestParams _params\n     */\n    function unpackParamsForAgreementID(\n        bytes32 agreementId\n    )\n        internal\n        returns (CompoundInterestParams _params)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n\n        uint principal;\n        uint interestRate;\n        uint amortizationUnitTypeAsUint;\n        uint termLengthInAmortizationUnits;\n\n        (principal, interestRate, amortizationUnitTypeAsUint, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(parameters);\n\n        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.\n        require(amortizationUnitTypeAsUint <= uint(AmortizationUnitType.YEARS));\n\n        AmortizationUnitType amortizationUnitType = AmortizationUnitType(amortizationUnitTypeAsUint);\n\n        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(amortizationUnitType);\n        uint issuanceBlockTimestamp = debtRegistry.getIssuanceBlockTimestamp(agreementId);\n        uint termLengthInSeconds = termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);\n        uint termEndUnixTimestamp = termLengthInSeconds.add(issuanceBlockTimestamp);\n\n        return CompoundInterestParams({\n            principal: principal,\n            interestRate: interestRate,\n            termStartUnixTimestamp: issuanceBlockTimestamp,\n            termEndUnixTimestamp: termEndUnixTimestamp,\n            amortizationUnitType: amortizationUnitType,\n            termLengthInAmortizationUnits: termLengthInAmortizationUnits\n        });\n    }\n\n    /**\n     * Given a principal amount, interest rate (with 9 decimals of precision),\n     * and a number of amortization units, calculates\n     * the principal + total expected compound interest by time\n     * the specified number of amortization units has elapsed.\n     *\n     * @param principal uint The principal amount\n     * @param interestRate uint The interest rate, with 9 decimals of precision\n     * @param numAmortizationUnits uint The number of amortization units elapsed\n     * @return uint The sum of the principal and compounded interest rate.\n     */\n    function calculateCompoundInterestExpectedValue(\n        uint principal,\n        uint interestRate,\n        uint numAmortizationUnits\n    )\n        internal\n        pure\n        returns (uint _compoundInterestExpectedValue)\n    {\n        uint interestRateBase = toInterestRateBase(interestRate);\n        uint unnormalizedExpectedValue = principal.mul(\n            interestRateBase ** numAmortizationUnits\n        );\n\n        // When exponentiating a number with 9 decimals of precision in\n        // Solidity by a number N, our result ends up 10 ^ (9*N)\n        // overweighted.  Thus, we normalize the value down by a factor\n        // of 10 ^ (9*N)\n        return normalizeDecimalPlaces(unnormalizedExpectedValue, numAmortizationUnits);\n    }\n\n    /**\n     * Returns the interest rate incremented by 1\n     * (with 9 decimal precision), for usage in\n     * the compound interest formula.\n     *\n     * @param interestRate uint A given interest rate with 9 decimal precision\n     * @return uint Interest rate with 9 decimal precision incremented by 1\n     */\n    function toInterestRateBase(uint interestRate)\n        internal\n        pure\n        returns (uint _interestRateBase)\n    {\n        // Since interestRate has 9 decimals of precision, incrementing\n        // it by 1 is the equivalent of adding 10^9\n        return interestRate + 10 ** INTEREST_RATE_DECIMALS;\n    }\n\n\n    /**\n     * Divides the given value by 10^(9 * power).  This is necessary because,\n     * when we exponentiate a uint with 9 decimals of precision,\n     * solidity treats the 9 decimals of precision as significant digits > 1,\n     * and, therefore, this utility proves useful for scaling down\n     * the results of such mathematical operations.\n     *\n     * @param value uint The value we wish to normalize\n     * @param power uint The power by which we will exponentiate 10^9 in normalizing value\n     * @return uint Value divided by 10^(9*power)\n     */\n    function normalizeDecimalPlaces(uint value, uint power)\n        internal\n        pure\n        returns (uint _normalizedValues)\n    {\n        return value.div(10 ** (INTEREST_RATE_DECIMALS*power));\n    }\n\n    /**\n     * Given an amortization unit type, returns that amortization unit's\n     * length in seconds.\n     *\n     * @param amortizationUnitType The amortization unit type\n     * @return _amortizationUnitLengthInSeconds The length of the amortization unit in seconds.\n     */\n    function getAmortizationUnitLengthInSeconds(AmortizationUnitType amortizationUnitType)\n        internal\n        pure\n        returns (uint _amortizationUnitLengthInSeconds)\n    {\n        if (amortizationUnitType == AmortizationUnitType.HOURS) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.DAYS) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.WEEKS) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.MONTHS) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.YEARS) {\n            return YEAR_LENGTH_IN_SECONDS;\n        } else {\n            revert();\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/CompoundInterestTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/CompoundInterestTermsContract.sol",
      "exportedSymbols": {
        "CompoundInterestTermsContract": [
          3242
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
        "id": 2653,
        "name": "PragmaDirective",
        "src": "584:23:10"
      },
      {
        "attributes": {
          "SourceUnit": 5333,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 3243,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2654,
        "name": "ImportDirective",
        "src": "609:55:10"
      },
      {
        "attributes": {
          "SourceUnit": 1653,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 3243,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2655,
        "name": "ImportDirective",
        "src": "665:29:10"
      },
      {
        "attributes": {
          "SourceUnit": 2093,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 3243,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2656,
        "name": "ImportDirective",
        "src": "695:30:10"
      },
      {
        "attributes": {
          "contractDependencies": [
            2092
          ],
          "contractKind": "contract",
          "documentation": "TODO: Address known issue: given that Solidity must use integers to compute\n compound interest functions, we require interestRates passed into\n the function have 9 decimals worth of precision.  This means that,\n with the following compound interest formula...\n *      V = P(1+r)^t\n *  Can be translated in solidity to...\n *      V * 10^(9t) = P((1+r) * 10^9)^t\n *  Meaning we compute the expected repayment value with ....\n *      V = P((1+r) * 10^9)^t / 10^(9t)\n *  This is all well and good, but there are scenarios in which\n the intermediate value V * 10^(9t) overflows a 256-bit unsigned\n integer.\n *  Seeking guidance from security auditors for best practices\n in emulating fraction exponentiation in Solidity.\n *  ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ==== ====\n * Example terms contract for issuing debt agreements with compounding interest rates.\n * The compound interest rate formula we're leveraging is\n V = P(1 + r/n)^(tn)\n * Given that we assume n = 1 (i.e. compounding happens\n once per amortization interval), we can reduce the\n formula to\n V = P(1 + r)^t\n * Thus, for simplification, we assign the following\nterms:\n * V := expectedRepaymentValue\nP := principal\n(1 + r) := interestRateBase\nt := termLengthInAmortizationUnits\n ",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3242,
            2092
          ],
          "name": "CompoundInterestTermsContract",
          "scope": 3243
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
                  "name": "TermsContract",
                  "referencedDeclaration": 2092,
                  "type": "contract TermsContract"
                },
                "id": 2657,
                "name": "UserDefinedTypeName",
                "src": "2116:13:10"
              }
            ],
            "id": 2658,
            "name": "InheritanceSpecifier",
            "src": "2116:13:10"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 5332,
                  "type": "library SafeMath"
                },
                "id": 2659,
                "name": "UserDefinedTypeName",
                "src": "2142:8:10"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2660,
                "name": "ElementaryTypeName",
                "src": "2155:4:10"
              }
            ],
            "id": 2661,
            "name": "UsingForDirective",
            "src": "2136:24:10"
          },
          {
            "attributes": {
              "constant": true,
              "name": "INTEREST_RATE_DECIMALS",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2662,
                "name": "ElementaryTypeName",
                "src": "2166:4:10"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "39",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 9",
                  "value": "9"
                },
                "id": 2663,
                "name": "Literal",
                "src": "2212:1:10"
              }
            ],
            "id": 2664,
            "name": "VariableDeclaration",
            "src": "2166:47:10"
          },
          {
            "attributes": {
              "canonicalName": "CompoundInterestTermsContract.AmortizationUnitType",
              "name": "AmortizationUnitType"
            },
            "children": [
              {
                "attributes": {
                  "name": "HOURS"
                },
                "id": 2665,
                "name": "EnumValue",
                "src": "2248:5:10"
              },
              {
                "attributes": {
                  "name": "DAYS"
                },
                "id": 2666,
                "name": "EnumValue",
                "src": "2255:4:10"
              },
              {
                "attributes": {
                  "name": "WEEKS"
                },
                "id": 2667,
                "name": "EnumValue",
                "src": "2261:5:10"
              },
              {
                "attributes": {
                  "name": "MONTHS"
                },
                "id": 2668,
                "name": "EnumValue",
                "src": "2268:6:10"
              },
              {
                "attributes": {
                  "name": "YEARS"
                },
                "id": 2669,
                "name": "EnumValue",
                "src": "2276:5:10"
              }
            ],
            "id": 2670,
            "name": "EnumDefinition",
            "src": "2220:63:10"
          },
          {
            "attributes": {
              "canonicalName": "CompoundInterestTermsContract.CompoundInterestParams",
              "name": "CompoundInterestParams",
              "scope": 3242,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "principal",
                  "scope": 2683,
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
                    "id": 2671,
                    "name": "ElementaryTypeName",
                    "src": "2329:4:10"
                  }
                ],
                "id": 2672,
                "name": "VariableDeclaration",
                "src": "2329:14:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "interestRate",
                  "scope": 2683,
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
                    "id": 2673,
                    "name": "ElementaryTypeName",
                    "src": "2353:4:10"
                  }
                ],
                "id": 2674,
                "name": "VariableDeclaration",
                "src": "2353:17:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termStartUnixTimestamp",
                  "scope": 2683,
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
                    "id": 2675,
                    "name": "ElementaryTypeName",
                    "src": "2380:4:10"
                  }
                ],
                "id": 2676,
                "name": "VariableDeclaration",
                "src": "2380:27:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termEndUnixTimestamp",
                  "scope": 2683,
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
                    "id": 2677,
                    "name": "ElementaryTypeName",
                    "src": "2417:4:10"
                  }
                ],
                "id": 2678,
                "name": "VariableDeclaration",
                "src": "2417:25:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amortizationUnitType",
                  "scope": 2683,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "AmortizationUnitType",
                      "referencedDeclaration": 2670,
                      "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                    },
                    "id": 2679,
                    "name": "UserDefinedTypeName",
                    "src": "2452:20:10"
                  }
                ],
                "id": 2680,
                "name": "VariableDeclaration",
                "src": "2452:41:10"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termLengthInAmortizationUnits",
                  "scope": 2683,
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
                    "id": 2681,
                    "name": "ElementaryTypeName",
                    "src": "2503:4:10"
                  }
                ],
                "id": 2682,
                "name": "VariableDeclaration",
                "src": "2503:34:10"
              }
            ],
            "id": 2683,
            "name": "StructDefinition",
            "src": "2289:255:10"
          },
          {
            "attributes": {
              "constant": true,
              "name": "HOUR_LENGTH_IN_SECONDS",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2684,
                "name": "ElementaryTypeName",
                "src": "2550:4:10"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_3600_by_1",
                    "typeString": "int_const 3600"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "int_const 3600"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 2685,
                    "name": "Literal",
                    "src": "2596:2:10"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3630",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 60",
                      "value": "60"
                    },
                    "id": 2686,
                    "name": "Literal",
                    "src": "2601:2:10"
                  }
                ],
                "id": 2687,
                "name": "BinaryOperation",
                "src": "2596:7:10"
              }
            ],
            "id": 2688,
            "name": "VariableDeclaration",
            "src": "2550:53:10"
          },
          {
            "attributes": {
              "constant": true,
              "name": "DAY_LENGTH_IN_SECONDS",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2689,
                "name": "ElementaryTypeName",
                "src": "2609:4:10"
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
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2688,
                      "type": "uint256",
                      "value": "HOUR_LENGTH_IN_SECONDS"
                    },
                    "id": 2690,
                    "name": "Identifier",
                    "src": "2654:22:10"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3234",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 24",
                      "value": "24"
                    },
                    "id": 2691,
                    "name": "Literal",
                    "src": "2679:2:10"
                  }
                ],
                "id": 2692,
                "name": "BinaryOperation",
                "src": "2654:27:10"
              }
            ],
            "id": 2693,
            "name": "VariableDeclaration",
            "src": "2609:72:10"
          },
          {
            "attributes": {
              "constant": true,
              "name": "WEEK_LENGTH_IN_SECONDS",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2694,
                "name": "ElementaryTypeName",
                "src": "2687:4:10"
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
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2693,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2695,
                    "name": "Identifier",
                    "src": "2733:21:10"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "37",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 7",
                      "value": "7"
                    },
                    "id": 2696,
                    "name": "Literal",
                    "src": "2757:1:10"
                  }
                ],
                "id": 2697,
                "name": "BinaryOperation",
                "src": "2733:25:10"
              }
            ],
            "id": 2698,
            "name": "VariableDeclaration",
            "src": "2687:71:10"
          },
          {
            "attributes": {
              "constant": true,
              "name": "MONTH_LENGTH_IN_SECONDS",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2699,
                "name": "ElementaryTypeName",
                "src": "2764:4:10"
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
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2693,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2700,
                    "name": "Identifier",
                    "src": "2811:21:10"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "3330",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 30",
                      "value": "30"
                    },
                    "id": 2701,
                    "name": "Literal",
                    "src": "2835:2:10"
                  }
                ],
                "id": 2702,
                "name": "BinaryOperation",
                "src": "2811:26:10"
              }
            ],
            "id": 2703,
            "name": "VariableDeclaration",
            "src": "2764:73:10"
          },
          {
            "attributes": {
              "constant": true,
              "name": "YEAR_LENGTH_IN_SECONDS",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "uint256",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2704,
                "name": "ElementaryTypeName",
                "src": "2843:4:10"
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
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "*",
                  "type": "uint256"
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2693,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2705,
                    "name": "Identifier",
                    "src": "2889:21:10"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "333635",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 365",
                      "value": "365"
                    },
                    "id": 2706,
                    "name": "Literal",
                    "src": "2913:3:10"
                  }
                ],
                "id": 2707,
                "name": "BinaryOperation",
                "src": "2889:27:10"
              }
            ],
            "id": 2708,
            "name": "VariableDeclaration",
            "src": "2843:73:10"
          },
          {
            "attributes": {
              "constant": false,
              "name": "valueRepaid",
              "scope": 3242,
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
                    "id": 2709,
                    "name": "ElementaryTypeName",
                    "src": "2932:7:10"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2710,
                    "name": "ElementaryTypeName",
                    "src": "2943:4:10"
                  }
                ],
                "id": 2711,
                "name": "Mapping",
                "src": "2923:25:10"
              }
            ],
            "id": 2712,
            "name": "VariableDeclaration",
            "src": "2923:44:10"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 3242,
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
                  "referencedDeclaration": 1652,
                  "type": "contract DebtRegistry"
                },
                "id": 2713,
                "name": "UserDefinedTypeName",
                "src": "2974:12:10"
              }
            ],
            "id": 2714,
            "name": "VariableDeclaration",
            "src": "2974:32:10"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 2715,
                "name": "ElementaryTypeName",
                "src": "3013:7:10"
              }
            ],
            "id": 2716,
            "name": "VariableDeclaration",
            "src": "3013:25:10"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentToken",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 2717,
                "name": "ElementaryTypeName",
                "src": "3044:7:10"
              }
            ],
            "id": 2718,
            "name": "VariableDeclaration",
            "src": "3044:29:10"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 3242,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "address",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "address",
                  "type": "address"
                },
                "id": 2719,
                "name": "ElementaryTypeName",
                "src": "3079:7:10"
              }
            ],
            "id": 2720,
            "name": "VariableDeclaration",
            "src": "3079:30:10"
          },
          {
            "attributes": {
              "name": "onlyRouter",
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
                "id": 2721,
                "name": "ParameterList",
                "src": "3135:2:10"
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
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2722,
                            "name": "Identifier",
                            "src": "3148:7:10"
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
                                      "referencedDeclaration": 5475,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2723,
                                    "name": "Identifier",
                                    "src": "3156:3:10"
                                  }
                                ],
                                "id": 2724,
                                "name": "MemberAccess",
                                "src": "3156:10:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2720,
                                  "type": "address",
                                  "value": "repaymentRouter"
                                },
                                "id": 2725,
                                "name": "Identifier",
                                "src": "3170:15:10"
                              }
                            ],
                            "id": 2726,
                            "name": "BinaryOperation",
                            "src": "3156:29:10"
                          }
                        ],
                        "id": 2727,
                        "name": "FunctionCall",
                        "src": "3148:38:10"
                      }
                    ],
                    "id": 2728,
                    "name": "ExpressionStatement",
                    "src": "3148:38:10"
                  },
                  {
                    "id": 2729,
                    "name": "PlaceholderStatement",
                    "src": "3196:1:10"
                  }
                ],
                "id": 2730,
                "name": "Block",
                "src": "3138:66:10"
              }
            ],
            "id": 2731,
            "name": "ModifierDefinition",
            "src": "3116:88:10"
          },
          {
            "attributes": {
              "name": "onlyDebtKernel",
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
                "id": 2732,
                "name": "ParameterList",
                "src": "3233:2:10"
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
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2733,
                            "name": "Identifier",
                            "src": "3246:7:10"
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
                                      "referencedDeclaration": 5475,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2734,
                                    "name": "Identifier",
                                    "src": "3254:3:10"
                                  }
                                ],
                                "id": 2735,
                                "name": "MemberAccess",
                                "src": "3254:10:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2716,
                                  "type": "address",
                                  "value": "debtKernel"
                                },
                                "id": 2736,
                                "name": "Identifier",
                                "src": "3268:10:10"
                              }
                            ],
                            "id": 2737,
                            "name": "BinaryOperation",
                            "src": "3254:24:10"
                          }
                        ],
                        "id": 2738,
                        "name": "FunctionCall",
                        "src": "3246:33:10"
                      }
                    ],
                    "id": 2739,
                    "name": "ExpressionStatement",
                    "src": "3246:33:10"
                  },
                  {
                    "id": 2740,
                    "name": "PlaceholderStatement",
                    "src": "3289:1:10"
                  }
                ],
                "id": 2741,
                "name": "Block",
                "src": "3236:61:10"
              }
            ],
            "id": 2742,
            "name": "ModifierDefinition",
            "src": "3210:87:10"
          },
          {
            "attributes": {
              "name": "onlyMappedToThisContract",
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2759,
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
                        "id": 2743,
                        "name": "ElementaryTypeName",
                        "src": "3337:7:10"
                      }
                    ],
                    "id": 2744,
                    "name": "VariableDeclaration",
                    "src": "3337:19:10"
                  }
                ],
                "id": 2745,
                "name": "ParameterList",
                "src": "3336:21:10"
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
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2746,
                            "name": "Identifier",
                            "src": "3368:7:10"
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
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_contract$_CompoundInterestTermsContract_$3242",
                                          "typeString": "contract CompoundInterestTermsContract"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 2747,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "3376:7:10"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5522,
                                      "type": "contract CompoundInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 2748,
                                    "name": "Identifier",
                                    "src": "3384:4:10"
                                  }
                                ],
                                "id": 2749,
                                "name": "FunctionCall",
                                "src": "3376:13:10"
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
                                          "typeIdentifier": "t_bytes32",
                                          "typeString": "bytes32"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "getTermsContract",
                                      "referencedDeclaration": 1540,
                                      "type": "function (bytes32) view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2714,
                                          "type": "contract DebtRegistry",
                                          "value": "debtRegistry"
                                        },
                                        "id": 2750,
                                        "name": "Identifier",
                                        "src": "3393:12:10"
                                      }
                                    ],
                                    "id": 2751,
                                    "name": "MemberAccess",
                                    "src": "3393:29:10"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2744,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2752,
                                    "name": "Identifier",
                                    "src": "3423:11:10"
                                  }
                                ],
                                "id": 2753,
                                "name": "FunctionCall",
                                "src": "3393:42:10"
                              }
                            ],
                            "id": 2754,
                            "name": "BinaryOperation",
                            "src": "3376:59:10"
                          }
                        ],
                        "id": 2755,
                        "name": "FunctionCall",
                        "src": "3368:68:10"
                      }
                    ],
                    "id": 2756,
                    "name": "ExpressionStatement",
                    "src": "3368:68:10"
                  },
                  {
                    "id": 2757,
                    "name": "PlaceholderStatement",
                    "src": "3446:1:10"
                  }
                ],
                "id": 2758,
                "name": "Block",
                "src": "3358:96:10"
              }
            ],
            "id": 2759,
            "name": "ModifierDefinition",
            "src": "3303:151:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "CompoundInterestTermsContract",
              "payable": false,
              "scope": 3242,
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
                      "name": "_debtRegistry",
                      "scope": 2789,
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
                        "id": 2760,
                        "name": "ElementaryTypeName",
                        "src": "3596:7:10"
                      }
                    ],
                    "id": 2761,
                    "name": "VariableDeclaration",
                    "src": "3596:21:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtKernel",
                      "scope": 2789,
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
                        "id": 2762,
                        "name": "ElementaryTypeName",
                        "src": "3627:7:10"
                      }
                    ],
                    "id": 2763,
                    "name": "VariableDeclaration",
                    "src": "3627:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentToken",
                      "scope": 2789,
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
                        "id": 2764,
                        "name": "ElementaryTypeName",
                        "src": "3656:7:10"
                      }
                    ],
                    "id": 2765,
                    "name": "VariableDeclaration",
                    "src": "3656:23:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 2789,
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
                        "id": 2766,
                        "name": "ElementaryTypeName",
                        "src": "3689:7:10"
                      }
                    ],
                    "id": 2767,
                    "name": "VariableDeclaration",
                    "src": "3689:24:10"
                  }
                ],
                "id": 2768,
                "name": "ParameterList",
                "src": "3586:133:10"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2769,
                "name": "ParameterList",
                "src": "3739:0:10"
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
                              "referencedDeclaration": 2714,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 2770,
                            "name": "Identifier",
                            "src": "3749:12:10"
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
                                  "referencedDeclaration": 1652,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2771,
                                "name": "Identifier",
                                "src": "3764:12:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2761,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 2772,
                                "name": "Identifier",
                                "src": "3777:13:10"
                              }
                            ],
                            "id": 2773,
                            "name": "FunctionCall",
                            "src": "3764:27:10"
                          }
                        ],
                        "id": 2774,
                        "name": "Assignment",
                        "src": "3749:42:10"
                      }
                    ],
                    "id": 2775,
                    "name": "ExpressionStatement",
                    "src": "3749:42:10"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2716,
                              "type": "address",
                              "value": "debtKernel"
                            },
                            "id": 2776,
                            "name": "Identifier",
                            "src": "3802:10:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2763,
                              "type": "address",
                              "value": "_debtKernel"
                            },
                            "id": 2777,
                            "name": "Identifier",
                            "src": "3815:11:10"
                          }
                        ],
                        "id": 2778,
                        "name": "Assignment",
                        "src": "3802:24:10"
                      }
                    ],
                    "id": 2779,
                    "name": "ExpressionStatement",
                    "src": "3802:24:10"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2718,
                              "type": "address",
                              "value": "repaymentToken"
                            },
                            "id": 2780,
                            "name": "Identifier",
                            "src": "3836:14:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2765,
                              "type": "address",
                              "value": "_repaymentToken"
                            },
                            "id": 2781,
                            "name": "Identifier",
                            "src": "3853:15:10"
                          }
                        ],
                        "id": 2782,
                        "name": "Assignment",
                        "src": "3836:32:10"
                      }
                    ],
                    "id": 2783,
                    "name": "ExpressionStatement",
                    "src": "3836:32:10"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2720,
                              "type": "address",
                              "value": "repaymentRouter"
                            },
                            "id": 2784,
                            "name": "Identifier",
                            "src": "3878:15:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2767,
                              "type": "address",
                              "value": "_repaymentRouter"
                            },
                            "id": 2785,
                            "name": "Identifier",
                            "src": "3896:16:10"
                          }
                        ],
                        "id": 2786,
                        "name": "Assignment",
                        "src": "3878:34:10"
                      }
                    ],
                    "id": 2787,
                    "name": "ExpressionStatement",
                    "src": "3878:34:10"
                  }
                ],
                "id": 2788,
                "name": "Block",
                "src": "3739:180:10"
              }
            ],
            "id": 2789,
            "name": "FunctionDefinition",
            "src": "3548:371:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerTermStart",
              "payable": false,
              "scope": 3242,
              "stateMutability": "nonpayable",
              "superFunction": 2060,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2808,
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
                        "id": 2790,
                        "name": "ElementaryTypeName",
                        "src": "4538:7:10"
                      }
                    ],
                    "id": 2791,
                    "name": "VariableDeclaration",
                    "src": "4538:19:10"
                  }
                ],
                "id": 2792,
                "name": "ParameterList",
                "src": "4528:35:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 2808,
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
                        "id": 2795,
                        "name": "ElementaryTypeName",
                        "src": "4619:4:10"
                      }
                    ],
                    "id": 2796,
                    "name": "VariableDeclaration",
                    "src": "4619:13:10"
                  }
                ],
                "id": 2797,
                "name": "ParameterList",
                "src": "4618:15:10"
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
                      "referencedDeclaration": 2742,
                      "type": "modifier ()",
                      "value": "onlyDebtKernel"
                    },
                    "id": 2793,
                    "name": "Identifier",
                    "src": "4587:14:10"
                  }
                ],
                "id": 2794,
                "name": "ModifierInvocation",
                "src": "4587:14:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2797
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
                                  "member_name": "getTermsContract",
                                  "referencedDeclaration": 1540,
                                  "type": "function (bytes32) view external returns (address)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2714,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 2798,
                                    "name": "Identifier",
                                    "src": "4655:12:10"
                                  }
                                ],
                                "id": 2799,
                                "name": "MemberAccess",
                                "src": "4655:29:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2791,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 2800,
                                "name": "Identifier",
                                "src": "4685:11:10"
                              }
                            ],
                            "id": 2801,
                            "name": "FunctionCall",
                            "src": "4655:42:10"
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
                              "type_conversion": true
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_contract$_CompoundInterestTermsContract_$3242",
                                      "typeString": "contract CompoundInterestTermsContract"
                                    }
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "type(address)",
                                  "value": "address"
                                },
                                "id": 2802,
                                "name": "ElementaryTypeNameExpression",
                                "src": "4701:7:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5522,
                                  "type": "contract CompoundInterestTermsContract",
                                  "value": "this"
                                },
                                "id": 2803,
                                "name": "Identifier",
                                "src": "4709:4:10"
                              }
                            ],
                            "id": 2804,
                            "name": "FunctionCall",
                            "src": "4701:13:10"
                          }
                        ],
                        "id": 2805,
                        "name": "BinaryOperation",
                        "src": "4655:59:10"
                      }
                    ],
                    "id": 2806,
                    "name": "Return",
                    "src": "4648:66:10"
                  }
                ],
                "id": 2807,
                "name": "Block",
                "src": "4638:83:10"
              }
            ],
            "id": 2808,
            "name": "FunctionDefinition",
            "src": "4502:219:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerRepayment",
              "payable": false,
              "scope": 3242,
              "stateMutability": "nonpayable",
              "superFunction": 2075,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2846,
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
                        "id": 2809,
                        "name": "ElementaryTypeName",
                        "src": "5469:7:10"
                      }
                    ],
                    "id": 2810,
                    "name": "VariableDeclaration",
                    "src": "5469:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 2846,
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
                        "id": 2811,
                        "name": "ElementaryTypeName",
                        "src": "5498:7:10"
                      }
                    ],
                    "id": 2812,
                    "name": "VariableDeclaration",
                    "src": "5498:13:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 2846,
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
                        "id": 2813,
                        "name": "ElementaryTypeName",
                        "src": "5521:7:10"
                      }
                    ],
                    "id": 2814,
                    "name": "VariableDeclaration",
                    "src": "5521:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 2846,
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
                        "id": 2815,
                        "name": "ElementaryTypeName",
                        "src": "5550:7:10"
                      }
                    ],
                    "id": 2816,
                    "name": "VariableDeclaration",
                    "src": "5550:24:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 2846,
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
                        "id": 2817,
                        "name": "ElementaryTypeName",
                        "src": "5584:7:10"
                      }
                    ],
                    "id": 2818,
                    "name": "VariableDeclaration",
                    "src": "5584:20:10"
                  }
                ],
                "id": 2819,
                "name": "ParameterList",
                "src": "5459:151:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 2846,
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
                        "id": 2822,
                        "name": "ElementaryTypeName",
                        "src": "5662:4:10"
                      }
                    ],
                    "id": 2823,
                    "name": "VariableDeclaration",
                    "src": "5662:13:10"
                  }
                ],
                "id": 2824,
                "name": "ParameterList",
                "src": "5661:15:10"
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
                      "referencedDeclaration": 2731,
                      "type": "modifier ()",
                      "value": "onlyRouter"
                    },
                    "id": 2820,
                    "name": "Identifier",
                    "src": "5634:10:10"
                  }
                ],
                "id": 2821,
                "name": "ModifierInvocation",
                "src": "5634:10:10"
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
                              "referencedDeclaration": 2818,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 2825,
                            "name": "Identifier",
                            "src": "5695:12:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2718,
                              "type": "address",
                              "value": "repaymentToken"
                            },
                            "id": 2826,
                            "name": "Identifier",
                            "src": "5711:14:10"
                          }
                        ],
                        "id": 2827,
                        "name": "BinaryOperation",
                        "src": "5695:30:10"
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
                                          "referencedDeclaration": 2712,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "valueRepaid"
                                        },
                                        "id": 2828,
                                        "name": "Identifier",
                                        "src": "5741:11:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2810,
                                          "type": "bytes32",
                                          "value": "agreementId"
                                        },
                                        "id": 2829,
                                        "name": "Identifier",
                                        "src": "5753:11:10"
                                      }
                                    ],
                                    "id": 2830,
                                    "name": "IndexAccess",
                                    "src": "5741:24:10"
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
                                          "member_name": "add",
                                          "referencedDeclaration": 5331,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
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
                                                  "referencedDeclaration": 2712,
                                                  "type": "mapping(bytes32 => uint256)",
                                                  "value": "valueRepaid"
                                                },
                                                "id": 2831,
                                                "name": "Identifier",
                                                "src": "5768:11:10"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2810,
                                                  "type": "bytes32",
                                                  "value": "agreementId"
                                                },
                                                "id": 2832,
                                                "name": "Identifier",
                                                "src": "5780:11:10"
                                              }
                                            ],
                                            "id": 2833,
                                            "name": "IndexAccess",
                                            "src": "5768:24:10"
                                          }
                                        ],
                                        "id": 2834,
                                        "name": "MemberAccess",
                                        "src": "5768:28:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2816,
                                          "type": "uint256",
                                          "value": "unitsOfRepayment"
                                        },
                                        "id": 2835,
                                        "name": "Identifier",
                                        "src": "5797:16:10"
                                      }
                                    ],
                                    "id": 2836,
                                    "name": "FunctionCall",
                                    "src": "5768:46:10"
                                  }
                                ],
                                "id": 2837,
                                "name": "Assignment",
                                "src": "5741:73:10"
                              }
                            ],
                            "id": 2838,
                            "name": "ExpressionStatement",
                            "src": "5741:73:10"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 2824
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
                                "id": 2839,
                                "name": "Literal",
                                "src": "5835:4:10"
                              }
                            ],
                            "id": 2840,
                            "name": "Return",
                            "src": "5828:11:10"
                          }
                        ],
                        "id": 2841,
                        "name": "Block",
                        "src": "5727:123:10"
                      }
                    ],
                    "id": 2842,
                    "name": "IfStatement",
                    "src": "5691:159:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2824
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "hexvalue": "66616c7365",
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "subdenomination": null,
                          "token": "bool",
                          "type": "bool",
                          "value": "false"
                        },
                        "id": 2843,
                        "name": "Literal",
                        "src": "5867:5:10"
                      }
                    ],
                    "id": 2844,
                    "name": "Return",
                    "src": "5860:12:10"
                  }
                ],
                "id": 2845,
                "name": "Block",
                "src": "5681:198:10"
              }
            ],
            "id": 2846,
            "name": "FunctionDefinition",
            "src": "5433:446:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 3242,
              "stateMutability": "view",
              "superFunction": 2084,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2903,
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
                        "id": 2847,
                        "name": "ElementaryTypeName",
                        "src": "6532:7:10"
                      }
                    ],
                    "id": 2848,
                    "name": "VariableDeclaration",
                    "src": "6532:19:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 2903,
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
                        "id": 2849,
                        "name": "ElementaryTypeName",
                        "src": "6561:7:10"
                      }
                    ],
                    "id": 2850,
                    "name": "VariableDeclaration",
                    "src": "6561:17:10"
                  }
                ],
                "id": 2851,
                "name": "ParameterList",
                "src": "6522:62:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 2903,
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
                        "id": 2855,
                        "name": "ElementaryTypeName",
                        "src": "6676:4:10"
                      }
                    ],
                    "id": 2856,
                    "name": "VariableDeclaration",
                    "src": "6676:28:10"
                  }
                ],
                "id": 2857,
                "name": "ParameterList",
                "src": "6675:30:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2759,
                      "type": "modifier (bytes32)",
                      "value": "onlyMappedToThisContract"
                    },
                    "id": 2852,
                    "name": "Identifier",
                    "src": "6621:24:10"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2848,
                      "type": "bytes32",
                      "value": "agreementId"
                    },
                    "id": 2853,
                    "name": "Identifier",
                    "src": "6646:11:10"
                  }
                ],
                "id": 2854,
                "name": "ModifierInvocation",
                "src": "6621:37:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2859
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 2903,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "CompoundInterestParams",
                              "referencedDeclaration": 2683,
                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams storage pointer"
                            },
                            "id": 2858,
                            "name": "UserDefinedTypeName",
                            "src": "6720:22:10"
                          }
                        ],
                        "id": 2859,
                        "name": "VariableDeclaration",
                        "src": "6720:36:10"
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
                          "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3123,
                              "type": "function (bytes32) returns (struct CompoundInterestTermsContract.CompoundInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 2860,
                            "name": "Identifier",
                            "src": "6759:26:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2848,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2861,
                            "name": "Identifier",
                            "src": "6786:11:10"
                          }
                        ],
                        "id": 2862,
                        "name": "FunctionCall",
                        "src": "6759:39:10"
                      }
                    ],
                    "id": 2863,
                    "name": "VariableDeclarationStatement",
                    "src": "6720:78:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2865
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "numUnits",
                          "scope": 2903,
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
                            "id": 2864,
                            "name": "ElementaryTypeName",
                            "src": "6809:4:10"
                          }
                        ],
                        "id": 2865,
                        "name": "VariableDeclaration",
                        "src": "6809:13:10"
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
                                  "typeIdentifier": "t_struct$_CompoundInterestParams_$2683_memory_ptr",
                                  "typeString": "struct CompoundInterestTermsContract.CompoundInterestParams memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3035,
                              "type": "function (uint256,struct CompoundInterestTermsContract.CompoundInterestParams memory) returns (uint256)",
                              "value": "numAmortizationUnitsForTimestamp"
                            },
                            "id": 2866,
                            "name": "Identifier",
                            "src": "6825:32:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2850,
                              "type": "uint256",
                              "value": "timestamp"
                            },
                            "id": 2867,
                            "name": "Identifier",
                            "src": "6858:9:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2859,
                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                              "value": "params"
                            },
                            "id": 2868,
                            "name": "Identifier",
                            "src": "6869:6:10"
                          }
                        ],
                        "id": 2869,
                        "name": "FunctionCall",
                        "src": "6825:51:10"
                      }
                    ],
                    "id": 2870,
                    "name": "VariableDeclarationStatement",
                    "src": "6809:67:10"
                  },
                  {
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
                              "referencedDeclaration": 2865,
                              "type": "uint256",
                              "value": "numUnits"
                            },
                            "id": 2871,
                            "name": "Identifier",
                            "src": "6891:8:10"
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
                            "id": 2872,
                            "name": "Literal",
                            "src": "6903:1:10"
                          }
                        ],
                        "id": 2873,
                        "name": "BinaryOperation",
                        "src": "6891:13:10"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 2857
                            },
                            "children": [
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
                                "id": 2874,
                                "name": "Literal",
                                "src": "7057:1:10"
                              }
                            ],
                            "id": 2875,
                            "name": "Return",
                            "src": "7050:8:10"
                          }
                        ],
                        "id": 2876,
                        "name": "Block",
                        "src": "6906:163:10"
                      },
                      {
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
                                  "referencedDeclaration": 2865,
                                  "type": "uint256",
                                  "value": "numUnits"
                                },
                                "id": 2877,
                                "name": "Identifier",
                                "src": "7079:8:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "termLengthInAmortizationUnits",
                                  "referencedDeclaration": 2682,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2859,
                                      "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 2878,
                                    "name": "Identifier",
                                    "src": "7090:6:10"
                                  }
                                ],
                                "id": 2879,
                                "name": "MemberAccess",
                                "src": "7090:36:10"
                              }
                            ],
                            "id": 2880,
                            "name": "BinaryOperation",
                            "src": "7079:47:10"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 2857
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
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3155,
                                          "type": "function (uint256,uint256,uint256) pure returns (uint256)",
                                          "value": "calculateCompoundInterestExpectedValue"
                                        },
                                        "id": 2881,
                                        "name": "Identifier",
                                        "src": "7296:38:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "principal",
                                          "referencedDeclaration": 2672,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2859,
                                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 2882,
                                            "name": "Identifier",
                                            "src": "7352:6:10"
                                          }
                                        ],
                                        "id": 2883,
                                        "name": "MemberAccess",
                                        "src": "7352:16:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "interestRate",
                                          "referencedDeclaration": 2674,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2859,
                                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 2884,
                                            "name": "Identifier",
                                            "src": "7386:6:10"
                                          }
                                        ],
                                        "id": 2885,
                                        "name": "MemberAccess",
                                        "src": "7386:19:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "termLengthInAmortizationUnits",
                                          "referencedDeclaration": 2682,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2859,
                                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 2886,
                                            "name": "Identifier",
                                            "src": "7423:6:10"
                                          }
                                        ],
                                        "id": 2887,
                                        "name": "MemberAccess",
                                        "src": "7423:36:10"
                                      }
                                    ],
                                    "id": 2888,
                                    "name": "FunctionCall",
                                    "src": "7296:177:10"
                                  }
                                ],
                                "id": 2889,
                                "name": "Return",
                                "src": "7289:184:10"
                              }
                            ],
                            "id": 2890,
                            "name": "Block",
                            "src": "7128:356:10"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 2857
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
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            },
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3155,
                                          "type": "function (uint256,uint256,uint256) pure returns (uint256)",
                                          "value": "calculateCompoundInterestExpectedValue"
                                        },
                                        "id": 2891,
                                        "name": "Identifier",
                                        "src": "7511:38:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "principal",
                                          "referencedDeclaration": 2672,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2859,
                                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 2892,
                                            "name": "Identifier",
                                            "src": "7567:6:10"
                                          }
                                        ],
                                        "id": 2893,
                                        "name": "MemberAccess",
                                        "src": "7567:16:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "interestRate",
                                          "referencedDeclaration": 2674,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2859,
                                              "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 2894,
                                            "name": "Identifier",
                                            "src": "7601:6:10"
                                          }
                                        ],
                                        "id": 2895,
                                        "name": "MemberAccess",
                                        "src": "7601:19:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2865,
                                          "type": "uint256",
                                          "value": "numUnits"
                                        },
                                        "id": 2896,
                                        "name": "Identifier",
                                        "src": "7638:8:10"
                                      }
                                    ],
                                    "id": 2897,
                                    "name": "FunctionCall",
                                    "src": "7511:149:10"
                                  }
                                ],
                                "id": 2898,
                                "name": "Return",
                                "src": "7504:156:10"
                              }
                            ],
                            "id": 2899,
                            "name": "Block",
                            "src": "7490:181:10"
                          }
                        ],
                        "id": 2900,
                        "name": "IfStatement",
                        "src": "7075:596:10"
                      }
                    ],
                    "id": 2901,
                    "name": "IfStatement",
                    "src": "6887:784:10"
                  }
                ],
                "id": 2902,
                "name": "Block",
                "src": "6710:967:10"
              }
            ],
            "id": 2903,
            "name": "FunctionDefinition",
            "src": "6488:1189:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getValueRepaidToDate",
              "payable": false,
              "scope": 3242,
              "stateMutability": "view",
              "superFunction": 2091,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 2915,
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
                        "id": 2904,
                        "name": "ElementaryTypeName",
                        "src": "7985:7:10"
                      }
                    ],
                    "id": 2905,
                    "name": "VariableDeclaration",
                    "src": "7985:19:10"
                  }
                ],
                "id": 2906,
                "name": "ParameterList",
                "src": "7984:21:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 2915,
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
                        "id": 2907,
                        "name": "ElementaryTypeName",
                        "src": "8051:4:10"
                      }
                    ],
                    "id": 2908,
                    "name": "VariableDeclaration",
                    "src": "8051:17:10"
                  }
                ],
                "id": 2909,
                "name": "ParameterList",
                "src": "8050:19:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 2909
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
                              "referencedDeclaration": 2712,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "valueRepaid"
                            },
                            "id": 2910,
                            "name": "Identifier",
                            "src": "8091:11:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2905,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 2911,
                            "name": "Identifier",
                            "src": "8103:11:10"
                          }
                        ],
                        "id": 2912,
                        "name": "IndexAccess",
                        "src": "8091:24:10"
                      }
                    ],
                    "id": 2913,
                    "name": "Return",
                    "src": "8084:31:10"
                  }
                ],
                "id": 2914,
                "name": "Block",
                "src": "8074:48:10"
              }
            ],
            "id": 2915,
            "name": "FunctionDefinition",
            "src": "7955:167:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackParametersFromBytes",
              "payable": false,
              "scope": 3242,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "parameters",
                      "scope": 2997,
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
                        "id": 2916,
                        "name": "ElementaryTypeName",
                        "src": "8823:7:10"
                      }
                    ],
                    "id": 2917,
                    "name": "VariableDeclaration",
                    "src": "8823:18:10"
                  }
                ],
                "id": 2918,
                "name": "ParameterList",
                "src": "8822:20:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principal",
                      "scope": 2997,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint128",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint128",
                          "type": "uint128"
                        },
                        "id": 2919,
                        "name": "ElementaryTypeName",
                        "src": "8901:7:10"
                      }
                    ],
                    "id": 2920,
                    "name": "VariableDeclaration",
                    "src": "8901:18:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_interestRate",
                      "scope": 2997,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint64",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint64",
                          "type": "uint64"
                        },
                        "id": 2921,
                        "name": "ElementaryTypeName",
                        "src": "8933:6:10"
                      }
                    ],
                    "id": 2922,
                    "name": "VariableDeclaration",
                    "src": "8933:20:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitType",
                      "scope": 2997,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint8",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint8",
                          "type": "uint8"
                        },
                        "id": 2923,
                        "name": "ElementaryTypeName",
                        "src": "8967:5:10"
                      }
                    ],
                    "id": 2924,
                    "name": "VariableDeclaration",
                    "src": "8967:27:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termLengthInAmortizationUnits",
                      "scope": 2997,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint56",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint56",
                          "type": "uint56"
                        },
                        "id": 2925,
                        "name": "ElementaryTypeName",
                        "src": "9008:6:10"
                      }
                    ],
                    "id": 2926,
                    "name": "VariableDeclaration",
                    "src": "9008:37:10"
                  }
                ],
                "id": 2927,
                "name": "ParameterList",
                "src": "8887:168:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        2929
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalShifted",
                          "scope": 2997,
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
                            "id": 2928,
                            "name": "ElementaryTypeName",
                            "src": "9142:7:10"
                          }
                        ],
                        "id": 2929,
                        "name": "VariableDeclaration",
                        "src": "9142:24:10"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2917,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2930,
                            "name": "Identifier",
                            "src": "9181:10:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307866666666666666666666666666666666666666666666666666666666666666663030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 115792089237316195423570985008687907852929702298719625575994209400481361428480",
                              "value": "0xffffffffffffffffffffffffffffffff00000000000000000000000000000000"
                            },
                            "id": 2931,
                            "name": "Literal",
                            "src": "9194:66:10"
                          }
                        ],
                        "id": 2932,
                        "name": "BinaryOperation",
                        "src": "9181:79:10"
                      }
                    ],
                    "id": 2933,
                    "name": "VariableDeclarationStatement",
                    "src": "9142:118:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2935
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRateShifted",
                          "scope": 2997,
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
                            "id": 2934,
                            "name": "ElementaryTypeName",
                            "src": "9363:7:10"
                          }
                        ],
                        "id": 2935,
                        "name": "VariableDeclaration",
                        "src": "9363:27:10"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2917,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2936,
                            "name": "Identifier",
                            "src": "9405:10:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030306666666666666666666666666666666630303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 340282366920938463444927863358058659840",
                              "value": "0x00000000000000000000000000000000ffffffffffffffff0000000000000000"
                            },
                            "id": 2937,
                            "name": "Literal",
                            "src": "9418:66:10"
                          }
                        ],
                        "id": 2938,
                        "name": "BinaryOperation",
                        "src": "9405:79:10"
                      }
                    ],
                    "id": 2939,
                    "name": "VariableDeclarationStatement",
                    "src": "9363:121:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2941
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitTypeShifted",
                          "scope": 2997,
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
                            "id": 2940,
                            "name": "ElementaryTypeName",
                            "src": "9568:7:10"
                          }
                        ],
                        "id": 2941,
                        "name": "VariableDeclaration",
                        "src": "9568:35:10"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2917,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2942,
                            "name": "Identifier",
                            "src": "9618:10:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303066663030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 18374686479671623680",
                              "value": "0x000000000000000000000000000000000000000000000000ff00000000000000"
                            },
                            "id": 2943,
                            "name": "Literal",
                            "src": "9631:66:10"
                          }
                        ],
                        "id": 2944,
                        "name": "BinaryOperation",
                        "src": "9618:79:10"
                      }
                    ],
                    "id": 2945,
                    "name": "VariableDeclarationStatement",
                    "src": "9568:129:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2947
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principal",
                          "scope": 2997,
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
                            "id": 2946,
                            "name": "ElementaryTypeName",
                            "src": "9957:4:10"
                          }
                        ],
                        "id": 2947,
                        "name": "VariableDeclaration",
                        "src": "9957:14:10"
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
                          "operator": "/",
                          "type": "uint256"
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
                                "id": 2948,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9974:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2929,
                                  "type": "bytes32",
                                  "value": "principalShifted"
                                },
                                "id": 2949,
                                "name": "Identifier",
                                "src": "9979:16:10"
                              }
                            ],
                            "id": 2950,
                            "name": "FunctionCall",
                            "src": "9974:22:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_340282366920938463463374607431768211456_by_1",
                                "typeString": "int_const 340282366920938463463374607431768211456"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 340282366920938463463374607431768211456"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 2951,
                                "name": "Literal",
                                "src": "9999:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313238",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 128",
                                  "value": "128"
                                },
                                "id": 2952,
                                "name": "Literal",
                                "src": "10004:3:10"
                              }
                            ],
                            "id": 2953,
                            "name": "BinaryOperation",
                            "src": "9999:8:10"
                          }
                        ],
                        "id": 2954,
                        "name": "BinaryOperation",
                        "src": "9974:33:10"
                      }
                    ],
                    "id": 2955,
                    "name": "VariableDeclarationStatement",
                    "src": "9957:50:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2957
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRate",
                          "scope": 2997,
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
                            "id": 2956,
                            "name": "ElementaryTypeName",
                            "src": "10017:4:10"
                          }
                        ],
                        "id": 2957,
                        "name": "VariableDeclaration",
                        "src": "10017:17:10"
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
                          "operator": "/",
                          "type": "uint256"
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
                                "id": 2958,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10037:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2935,
                                  "type": "bytes32",
                                  "value": "interestRateShifted"
                                },
                                "id": 2959,
                                "name": "Identifier",
                                "src": "10042:19:10"
                              }
                            ],
                            "id": 2960,
                            "name": "FunctionCall",
                            "src": "10037:25:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_18446744073709551616_by_1",
                                "typeString": "int_const 18446744073709551616"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 18446744073709551616"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 2961,
                                "name": "Literal",
                                "src": "10065:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3634",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 64",
                                  "value": "64"
                                },
                                "id": 2962,
                                "name": "Literal",
                                "src": "10070:2:10"
                              }
                            ],
                            "id": 2963,
                            "name": "BinaryOperation",
                            "src": "10065:7:10"
                          }
                        ],
                        "id": 2964,
                        "name": "BinaryOperation",
                        "src": "10037:35:10"
                      }
                    ],
                    "id": 2965,
                    "name": "VariableDeclarationStatement",
                    "src": "10017:55:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2967
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 2997,
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
                            "id": 2966,
                            "name": "ElementaryTypeName",
                            "src": "10082:4:10"
                          }
                        ],
                        "id": 2967,
                        "name": "VariableDeclaration",
                        "src": "10082:25:10"
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
                          "operator": "/",
                          "type": "uint256"
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
                                "id": 2968,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10110:4:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2941,
                                  "type": "bytes32",
                                  "value": "amortizationUnitTypeShifted"
                                },
                                "id": 2969,
                                "name": "Identifier",
                                "src": "10115:27:10"
                              }
                            ],
                            "id": 2970,
                            "name": "FunctionCall",
                            "src": "10110:33:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_72057594037927936_by_1",
                                "typeString": "int_const 72057594037927936"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 72057594037927936"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "32",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 2",
                                  "value": "2"
                                },
                                "id": 2971,
                                "name": "Literal",
                                "src": "10146:1:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3536",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 56",
                                  "value": "56"
                                },
                                "id": 2972,
                                "name": "Literal",
                                "src": "10151:2:10"
                              }
                            ],
                            "id": 2973,
                            "name": "BinaryOperation",
                            "src": "10146:7:10"
                          }
                        ],
                        "id": 2974,
                        "name": "BinaryOperation",
                        "src": "10110:43:10"
                      }
                    ],
                    "id": 2975,
                    "name": "VariableDeclarationStatement",
                    "src": "10082:71:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        2977
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnits",
                          "scope": 2997,
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
                            "id": 2976,
                            "name": "ElementaryTypeName",
                            "src": "10441:7:10"
                          }
                        ],
                        "id": 2977,
                        "name": "VariableDeclaration",
                        "src": "10441:37:10"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_bytes32",
                            "typeString": "bytes32"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "&",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2917,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 2978,
                            "name": "Identifier",
                            "src": "10493:10:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030306666666666666666666666666666",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 72057594037927935",
                              "value": "0x00000000000000000000000000000000000000000000000000ffffffffffffff"
                            },
                            "id": 2979,
                            "name": "Literal",
                            "src": "10506:66:10"
                          }
                        ],
                        "id": 2980,
                        "name": "BinaryOperation",
                        "src": "10493:79:10"
                      }
                    ],
                    "id": 2981,
                    "name": "VariableDeclarationStatement",
                    "src": "10441:131:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 2927
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
                          "type": "tuple(uint128,uint64,uint8,uint56)"
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
                              "type": "uint128",
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
                                  "type": "type(uint128)",
                                  "value": "uint128"
                                },
                                "id": 2982,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10604:7:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2947,
                                  "type": "uint256",
                                  "value": "principal"
                                },
                                "id": 2983,
                                "name": "Identifier",
                                "src": "10612:9:10"
                              }
                            ],
                            "id": 2984,
                            "name": "FunctionCall",
                            "src": "10604:18:10"
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
                              "type": "uint64",
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
                                  "type": "type(uint64)",
                                  "value": "uint64"
                                },
                                "id": 2985,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10636:6:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2957,
                                  "type": "uint256",
                                  "value": "interestRate"
                                },
                                "id": 2986,
                                "name": "Identifier",
                                "src": "10643:12:10"
                              }
                            ],
                            "id": 2987,
                            "name": "FunctionCall",
                            "src": "10636:20:10"
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
                              "type": "uint8",
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
                                  "type": "type(uint8)",
                                  "value": "uint8"
                                },
                                "id": 2988,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10670:5:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2967,
                                  "type": "uint256",
                                  "value": "amortizationUnitType"
                                },
                                "id": 2989,
                                "name": "Identifier",
                                "src": "10676:20:10"
                              }
                            ],
                            "id": 2990,
                            "name": "FunctionCall",
                            "src": "10670:27:10"
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
                              "type": "uint56",
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
                                  "type": "type(uint56)",
                                  "value": "uint56"
                                },
                                "id": 2991,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10711:6:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2977,
                                  "type": "bytes32",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 2992,
                                "name": "Identifier",
                                "src": "10718:29:10"
                              }
                            ],
                            "id": 2993,
                            "name": "FunctionCall",
                            "src": "10711:37:10"
                          }
                        ],
                        "id": 2994,
                        "name": "TupleExpression",
                        "src": "10590:168:10"
                      }
                    ],
                    "id": 2995,
                    "name": "Return",
                    "src": "10583:175:10"
                  }
                ],
                "id": 2996,
                "name": "Block",
                "src": "9060:1705:10"
              }
            ],
            "id": 2997,
            "name": "FunctionDefinition",
            "src": "8788:1977:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "numAmortizationUnitsForTimestamp",
              "payable": false,
              "scope": 3242,
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
                      "name": "timestamp",
                      "scope": 3035,
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
                        "id": 2998,
                        "name": "ElementaryTypeName",
                        "src": "11368:4:10"
                      }
                    ],
                    "id": 2999,
                    "name": "VariableDeclaration",
                    "src": "11368:14:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3035,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "CompoundInterestParams",
                          "referencedDeclaration": 2683,
                          "type": "struct CompoundInterestTermsContract.CompoundInterestParams storage pointer"
                        },
                        "id": 3000,
                        "name": "UserDefinedTypeName",
                        "src": "11392:22:10"
                      }
                    ],
                    "id": 3001,
                    "name": "VariableDeclaration",
                    "src": "11392:29:10"
                  }
                ],
                "id": 3002,
                "name": "ParameterList",
                "src": "11358:69:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "units",
                      "scope": 3035,
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
                        "id": 3003,
                        "name": "ElementaryTypeName",
                        "src": "11462:4:10"
                      }
                    ],
                    "id": 3004,
                    "name": "VariableDeclaration",
                    "src": "11462:10:10"
                  }
                ],
                "id": 3005,
                "name": "ParameterList",
                "src": "11461:12:10"
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
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2999,
                              "type": "uint256",
                              "value": "timestamp"
                            },
                            "id": 3006,
                            "name": "Identifier",
                            "src": "11492:9:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 2676,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3001,
                                  "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3007,
                                "name": "Identifier",
                                "src": "11505:6:10"
                              }
                            ],
                            "id": 3008,
                            "name": "MemberAccess",
                            "src": "11505:29:10"
                          }
                        ],
                        "id": 3009,
                        "name": "BinaryOperation",
                        "src": "11492:42:10"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3005
                            },
                            "children": [
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
                                "id": 3010,
                                "name": "Literal",
                                "src": "11557:1:10"
                              }
                            ],
                            "id": 3011,
                            "name": "Return",
                            "src": "11550:8:10"
                          }
                        ],
                        "id": 3012,
                        "name": "Block",
                        "src": "11536:33:10"
                      }
                    ],
                    "id": 3013,
                    "name": "IfStatement",
                    "src": "11488:81:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3015
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "delta",
                          "scope": 3035,
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
                            "id": 3014,
                            "name": "ElementaryTypeName",
                            "src": "11579:4:10"
                          }
                        ],
                        "id": 3015,
                        "name": "VariableDeclaration",
                        "src": "11579:10:10"
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
                              "member_name": "sub",
                              "referencedDeclaration": 5307,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2999,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3016,
                                "name": "Identifier",
                                "src": "11592:9:10"
                              }
                            ],
                            "id": 3017,
                            "name": "MemberAccess",
                            "src": "11592:13:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 2676,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3001,
                                  "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3018,
                                "name": "Identifier",
                                "src": "11606:6:10"
                              }
                            ],
                            "id": 3019,
                            "name": "MemberAccess",
                            "src": "11606:29:10"
                          }
                        ],
                        "id": 3020,
                        "name": "FunctionCall",
                        "src": "11592:44:10"
                      }
                    ],
                    "id": 3021,
                    "name": "VariableDeclarationStatement",
                    "src": "11579:57:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3023
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3035,
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
                            "id": 3022,
                            "name": "ElementaryTypeName",
                            "src": "11646:4:10"
                          }
                        ],
                        "id": 3023,
                        "name": "VariableDeclaration",
                        "src": "11646:36:10"
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
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                  "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3241,
                              "type": "function (enum CompoundInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3024,
                            "name": "Identifier",
                            "src": "11697:34:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amortizationUnitType",
                              "referencedDeclaration": 2680,
                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3001,
                                  "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3025,
                                "name": "Identifier",
                                "src": "11732:6:10"
                              }
                            ],
                            "id": 3026,
                            "name": "MemberAccess",
                            "src": "11732:27:10"
                          }
                        ],
                        "id": 3027,
                        "name": "FunctionCall",
                        "src": "11697:63:10"
                      }
                    ],
                    "id": 3028,
                    "name": "VariableDeclarationStatement",
                    "src": "11646:114:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3005
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "div",
                              "referencedDeclaration": 5287,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3015,
                                  "type": "uint256",
                                  "value": "delta"
                                },
                                "id": 3029,
                                "name": "Identifier",
                                "src": "11777:5:10"
                              }
                            ],
                            "id": 3030,
                            "name": "MemberAccess",
                            "src": "11777:9:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3023,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3031,
                            "name": "Identifier",
                            "src": "11787:31:10"
                          }
                        ],
                        "id": 3032,
                        "name": "FunctionCall",
                        "src": "11777:42:10"
                      }
                    ],
                    "id": 3033,
                    "name": "Return",
                    "src": "11770:49:10"
                  }
                ],
                "id": 3034,
                "name": "Block",
                "src": "11478:348:10"
              }
            ],
            "id": 3035,
            "name": "FunctionDefinition",
            "src": "11317:509:10"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "unpackParamsForAgreementID",
              "payable": false,
              "scope": 3242,
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
                      "name": "agreementId",
                      "scope": 3123,
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
                        "id": 3036,
                        "name": "ElementaryTypeName",
                        "src": "12229:7:10"
                      }
                    ],
                    "id": 3037,
                    "name": "VariableDeclaration",
                    "src": "12229:19:10"
                  }
                ],
                "id": 3038,
                "name": "ParameterList",
                "src": "12219:35:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_params",
                      "scope": 3123,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "CompoundInterestParams",
                          "referencedDeclaration": 2683,
                          "type": "struct CompoundInterestTermsContract.CompoundInterestParams storage pointer"
                        },
                        "id": 3039,
                        "name": "UserDefinedTypeName",
                        "src": "12289:22:10"
                      }
                    ],
                    "id": 3040,
                    "name": "VariableDeclaration",
                    "src": "12289:30:10"
                  }
                ],
                "id": 3041,
                "name": "ParameterList",
                "src": "12288:32:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3043
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "parameters",
                          "scope": 3123,
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
                            "id": 3042,
                            "name": "ElementaryTypeName",
                            "src": "12335:7:10"
                          }
                        ],
                        "id": 3043,
                        "name": "VariableDeclaration",
                        "src": "12335:18:10"
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
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTermsContractParameters",
                              "referencedDeclaration": 1556,
                              "type": "function (bytes32) view external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2714,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3044,
                                "name": "Identifier",
                                "src": "12356:12:10"
                              }
                            ],
                            "id": 3045,
                            "name": "MemberAccess",
                            "src": "12356:39:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3037,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3046,
                            "name": "Identifier",
                            "src": "12396:11:10"
                          }
                        ],
                        "id": 3047,
                        "name": "FunctionCall",
                        "src": "12356:52:10"
                      }
                    ],
                    "id": 3048,
                    "name": "VariableDeclarationStatement",
                    "src": "12335:73:10"
                  },
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
                          "name": "principal",
                          "scope": 3123,
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
                            "id": 3049,
                            "name": "ElementaryTypeName",
                            "src": "12419:4:10"
                          }
                        ],
                        "id": 3050,
                        "name": "VariableDeclaration",
                        "src": "12419:14:10"
                      }
                    ],
                    "id": 3051,
                    "name": "VariableDeclarationStatement",
                    "src": "12419:14:10"
                  },
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
                          "name": "interestRate",
                          "scope": 3123,
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
                            "id": 3052,
                            "name": "ElementaryTypeName",
                            "src": "12443:4:10"
                          }
                        ],
                        "id": 3053,
                        "name": "VariableDeclaration",
                        "src": "12443:17:10"
                      }
                    ],
                    "id": 3054,
                    "name": "VariableDeclarationStatement",
                    "src": "12443:17:10"
                  },
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
                          "name": "amortizationUnitTypeAsUint",
                          "scope": 3123,
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
                            "id": 3055,
                            "name": "ElementaryTypeName",
                            "src": "12470:4:10"
                          }
                        ],
                        "id": 3056,
                        "name": "VariableDeclaration",
                        "src": "12470:31:10"
                      }
                    ],
                    "id": 3057,
                    "name": "VariableDeclarationStatement",
                    "src": "12470:31:10"
                  },
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
                          "name": "termLengthInAmortizationUnits",
                          "scope": 3123,
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
                            "id": 3058,
                            "name": "ElementaryTypeName",
                            "src": "12511:4:10"
                          }
                        ],
                        "id": 3059,
                        "name": "VariableDeclaration",
                        "src": "12511:34:10"
                      }
                    ],
                    "id": 3060,
                    "name": "VariableDeclarationStatement",
                    "src": "12511:34:10"
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
                          "type": "tuple()"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "tuple(uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3050,
                                  "type": "uint256",
                                  "value": "principal"
                                },
                                "id": 3061,
                                "name": "Identifier",
                                "src": "12557:9:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3053,
                                  "type": "uint256",
                                  "value": "interestRate"
                                },
                                "id": 3062,
                                "name": "Identifier",
                                "src": "12568:12:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3056,
                                  "type": "uint256",
                                  "value": "amortizationUnitTypeAsUint"
                                },
                                "id": 3063,
                                "name": "Identifier",
                                "src": "12582:26:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3059,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3064,
                                "name": "Identifier",
                                "src": "12610:29:10"
                              }
                            ],
                            "id": 3065,
                            "name": "TupleExpression",
                            "src": "12556:84:10"
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
                              "type": "tuple(uint128,uint64,uint8,uint56)",
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2997,
                                  "type": "function (bytes32) pure returns (uint128,uint64,uint8,uint56)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 3066,
                                "name": "Identifier",
                                "src": "12655:25:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3043,
                                  "type": "bytes32",
                                  "value": "parameters"
                                },
                                "id": 3067,
                                "name": "Identifier",
                                "src": "12681:10:10"
                              }
                            ],
                            "id": 3068,
                            "name": "FunctionCall",
                            "src": "12655:37:10"
                          }
                        ],
                        "id": 3069,
                        "name": "Assignment",
                        "src": "12556:136:10"
                      }
                    ],
                    "id": 3070,
                    "name": "ExpressionStatement",
                    "src": "12556:136:10"
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
                              "referencedDeclaration": 5478,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3071,
                            "name": "Identifier",
                            "src": "12805:7:10"
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
                              "operator": "<=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3056,
                                  "type": "uint256",
                                  "value": "amortizationUnitTypeAsUint"
                                },
                                "id": 3072,
                                "name": "Identifier",
                                "src": "12813:26:10"
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
                                  "type": "uint256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                          "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint"
                                    },
                                    "id": 3073,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "12843:4:10"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "YEARS",
                                      "referencedDeclaration": null,
                                      "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2670,
                                          "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3074,
                                        "name": "Identifier",
                                        "src": "12848:20:10"
                                      }
                                    ],
                                    "id": 3075,
                                    "name": "MemberAccess",
                                    "src": "12848:26:10"
                                  }
                                ],
                                "id": 3076,
                                "name": "FunctionCall",
                                "src": "12843:32:10"
                              }
                            ],
                            "id": 3077,
                            "name": "BinaryOperation",
                            "src": "12813:62:10"
                          }
                        ],
                        "id": 3078,
                        "name": "FunctionCall",
                        "src": "12805:71:10"
                      }
                    ],
                    "id": 3079,
                    "name": "ExpressionStatement",
                    "src": "12805:71:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3081
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3123,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "AmortizationUnitType",
                              "referencedDeclaration": 2670,
                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                            },
                            "id": 3080,
                            "name": "UserDefinedTypeName",
                            "src": "12887:20:10"
                          }
                        ],
                        "id": 3081,
                        "name": "VariableDeclaration",
                        "src": "12887:41:10"
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
                          "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2670,
                              "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                              "value": "AmortizationUnitType"
                            },
                            "id": 3082,
                            "name": "Identifier",
                            "src": "12931:20:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3056,
                              "type": "uint256",
                              "value": "amortizationUnitTypeAsUint"
                            },
                            "id": 3083,
                            "name": "Identifier",
                            "src": "12952:26:10"
                          }
                        ],
                        "id": 3084,
                        "name": "FunctionCall",
                        "src": "12931:48:10"
                      }
                    ],
                    "id": 3085,
                    "name": "VariableDeclarationStatement",
                    "src": "12887:92:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3087
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3123,
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
                            "id": 3086,
                            "name": "ElementaryTypeName",
                            "src": "12990:4:10"
                          }
                        ],
                        "id": 3087,
                        "name": "VariableDeclaration",
                        "src": "12990:36:10"
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
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                  "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3241,
                              "type": "function (enum CompoundInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3088,
                            "name": "Identifier",
                            "src": "13029:34:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3081,
                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3089,
                            "name": "Identifier",
                            "src": "13064:20:10"
                          }
                        ],
                        "id": 3090,
                        "name": "FunctionCall",
                        "src": "13029:56:10"
                      }
                    ],
                    "id": 3091,
                    "name": "VariableDeclarationStatement",
                    "src": "12990:95:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3093
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceBlockTimestamp",
                          "scope": 3123,
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
                            "id": 3092,
                            "name": "ElementaryTypeName",
                            "src": "13095:4:10"
                          }
                        ],
                        "id": 3093,
                        "name": "VariableDeclaration",
                        "src": "13095:27:10"
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
                              "member_name": "getIssuanceBlockTimestamp",
                              "referencedDeclaration": 1589,
                              "type": "function (bytes32) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2714,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3094,
                                "name": "Identifier",
                                "src": "13125:12:10"
                              }
                            ],
                            "id": 3095,
                            "name": "MemberAccess",
                            "src": "13125:38:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3037,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3096,
                            "name": "Identifier",
                            "src": "13164:11:10"
                          }
                        ],
                        "id": 3097,
                        "name": "FunctionCall",
                        "src": "13125:51:10"
                      }
                    ],
                    "id": 3098,
                    "name": "VariableDeclarationStatement",
                    "src": "13095:81:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3100
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInSeconds",
                          "scope": 3123,
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
                            "id": 3099,
                            "name": "ElementaryTypeName",
                            "src": "13186:4:10"
                          }
                        ],
                        "id": 3100,
                        "name": "VariableDeclaration",
                        "src": "13186:24:10"
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
                              "member_name": "mul",
                              "referencedDeclaration": 5269,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3059,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3101,
                                "name": "Identifier",
                                "src": "13213:29:10"
                              }
                            ],
                            "id": 3102,
                            "name": "MemberAccess",
                            "src": "13213:33:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3087,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3103,
                            "name": "Identifier",
                            "src": "13247:31:10"
                          }
                        ],
                        "id": 3104,
                        "name": "FunctionCall",
                        "src": "13213:66:10"
                      }
                    ],
                    "id": 3105,
                    "name": "VariableDeclarationStatement",
                    "src": "13186:93:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3107
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termEndUnixTimestamp",
                          "scope": 3123,
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
                            "id": 3106,
                            "name": "ElementaryTypeName",
                            "src": "13289:4:10"
                          }
                        ],
                        "id": 3107,
                        "name": "VariableDeclaration",
                        "src": "13289:25:10"
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
                              "member_name": "add",
                              "referencedDeclaration": 5331,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3100,
                                  "type": "uint256",
                                  "value": "termLengthInSeconds"
                                },
                                "id": 3108,
                                "name": "Identifier",
                                "src": "13317:19:10"
                              }
                            ],
                            "id": 3109,
                            "name": "MemberAccess",
                            "src": "13317:23:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3093,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3110,
                            "name": "Identifier",
                            "src": "13341:22:10"
                          }
                        ],
                        "id": 3111,
                        "name": "FunctionCall",
                        "src": "13317:47:10"
                      }
                    ],
                    "id": 3112,
                    "name": "VariableDeclarationStatement",
                    "src": "13289:75:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3041
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": true,
                          "lValueRequested": false,
                          "names": [
                            "principal",
                            "interestRate",
                            "termStartUnixTimestamp",
                            "termEndUnixTimestamp",
                            "amortizationUnitType",
                            "termLengthInAmortizationUnits"
                          ],
                          "type": "struct CompoundInterestTermsContract.CompoundInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2683,
                              "type": "type(struct CompoundInterestTermsContract.CompoundInterestParams storage pointer)",
                              "value": "CompoundInterestParams"
                            },
                            "id": 3113,
                            "name": "Identifier",
                            "src": "13382:22:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3050,
                              "type": "uint256",
                              "value": "principal"
                            },
                            "id": 3114,
                            "name": "Identifier",
                            "src": "13430:9:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3053,
                              "type": "uint256",
                              "value": "interestRate"
                            },
                            "id": 3115,
                            "name": "Identifier",
                            "src": "13467:12:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3093,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3116,
                            "name": "Identifier",
                            "src": "13517:22:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3107,
                              "type": "uint256",
                              "value": "termEndUnixTimestamp"
                            },
                            "id": 3117,
                            "name": "Identifier",
                            "src": "13575:20:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3081,
                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3118,
                            "name": "Identifier",
                            "src": "13631:20:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3059,
                              "type": "uint256",
                              "value": "termLengthInAmortizationUnits"
                            },
                            "id": 3119,
                            "name": "Identifier",
                            "src": "13696:29:10"
                          }
                        ],
                        "id": 3120,
                        "name": "FunctionCall",
                        "src": "13382:354:10"
                      }
                    ],
                    "id": 3121,
                    "name": "Return",
                    "src": "13375:361:10"
                  }
                ],
                "id": 3122,
                "name": "Block",
                "src": "12325:1418:10"
              }
            ],
            "id": 3123,
            "name": "FunctionDefinition",
            "src": "12184:1559:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "calculateCompoundInterestExpectedValue",
              "payable": false,
              "scope": 3242,
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
                      "name": "principal",
                      "scope": 3155,
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
                        "id": 3124,
                        "name": "ElementaryTypeName",
                        "src": "14375:4:10"
                      }
                    ],
                    "id": 3125,
                    "name": "VariableDeclaration",
                    "src": "14375:14:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "interestRate",
                      "scope": 3155,
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
                        "id": 3126,
                        "name": "ElementaryTypeName",
                        "src": "14399:4:10"
                      }
                    ],
                    "id": 3127,
                    "name": "VariableDeclaration",
                    "src": "14399:17:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "numAmortizationUnits",
                      "scope": 3155,
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
                        "id": 3128,
                        "name": "ElementaryTypeName",
                        "src": "14426:4:10"
                      }
                    ],
                    "id": 3129,
                    "name": "VariableDeclaration",
                    "src": "14426:25:10"
                  }
                ],
                "id": 3130,
                "name": "ParameterList",
                "src": "14365:92:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_compoundInterestExpectedValue",
                      "scope": 3155,
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
                        "id": 3131,
                        "name": "ElementaryTypeName",
                        "src": "14505:4:10"
                      }
                    ],
                    "id": 3132,
                    "name": "VariableDeclaration",
                    "src": "14505:35:10"
                  }
                ],
                "id": 3133,
                "name": "ParameterList",
                "src": "14504:37:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3135
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRateBase",
                          "scope": 3155,
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
                            "id": 3134,
                            "name": "ElementaryTypeName",
                            "src": "14556:4:10"
                          }
                        ],
                        "id": 3135,
                        "name": "VariableDeclaration",
                        "src": "14556:21:10"
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
                              "referencedDeclaration": 3169,
                              "type": "function (uint256) pure returns (uint256)",
                              "value": "toInterestRateBase"
                            },
                            "id": 3136,
                            "name": "Identifier",
                            "src": "14580:18:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3127,
                              "type": "uint256",
                              "value": "interestRate"
                            },
                            "id": 3137,
                            "name": "Identifier",
                            "src": "14599:12:10"
                          }
                        ],
                        "id": 3138,
                        "name": "FunctionCall",
                        "src": "14580:32:10"
                      }
                    ],
                    "id": 3139,
                    "name": "VariableDeclarationStatement",
                    "src": "14556:56:10"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3141
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "unnormalizedExpectedValue",
                          "scope": 3155,
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
                            "id": 3140,
                            "name": "ElementaryTypeName",
                            "src": "14622:4:10"
                          }
                        ],
                        "id": 3141,
                        "name": "VariableDeclaration",
                        "src": "14622:30:10"
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
                              "member_name": "mul",
                              "referencedDeclaration": 5269,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3125,
                                  "type": "uint256",
                                  "value": "principal"
                                },
                                "id": 3142,
                                "name": "Identifier",
                                "src": "14655:9:10"
                              }
                            ],
                            "id": 3143,
                            "name": "MemberAccess",
                            "src": "14655:13:10"
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
                              "operator": "**",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3135,
                                  "type": "uint256",
                                  "value": "interestRateBase"
                                },
                                "id": 3144,
                                "name": "Identifier",
                                "src": "14682:16:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3129,
                                  "type": "uint256",
                                  "value": "numAmortizationUnits"
                                },
                                "id": 3145,
                                "name": "Identifier",
                                "src": "14702:20:10"
                              }
                            ],
                            "id": 3146,
                            "name": "BinaryOperation",
                            "src": "14682:40:10"
                          }
                        ],
                        "id": 3147,
                        "name": "FunctionCall",
                        "src": "14655:77:10"
                      }
                    ],
                    "id": 3148,
                    "name": "VariableDeclarationStatement",
                    "src": "14622:110:10"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3133
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3189,
                              "type": "function (uint256,uint256) pure returns (uint256)",
                              "value": "normalizeDecimalPlaces"
                            },
                            "id": 3149,
                            "name": "Identifier",
                            "src": "14984:22:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3141,
                              "type": "uint256",
                              "value": "unnormalizedExpectedValue"
                            },
                            "id": 3150,
                            "name": "Identifier",
                            "src": "15007:25:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3129,
                              "type": "uint256",
                              "value": "numAmortizationUnits"
                            },
                            "id": 3151,
                            "name": "Identifier",
                            "src": "15034:20:10"
                          }
                        ],
                        "id": 3152,
                        "name": "FunctionCall",
                        "src": "14984:71:10"
                      }
                    ],
                    "id": 3153,
                    "name": "Return",
                    "src": "14977:78:10"
                  }
                ],
                "id": 3154,
                "name": "Block",
                "src": "14546:516:10"
              }
            ],
            "id": 3155,
            "name": "FunctionDefinition",
            "src": "14318:744:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "toInterestRateBase",
              "payable": false,
              "scope": 3242,
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
                      "name": "interestRate",
                      "scope": 3169,
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
                        "id": 3156,
                        "name": "ElementaryTypeName",
                        "src": "15410:4:10"
                      }
                    ],
                    "id": 3157,
                    "name": "VariableDeclaration",
                    "src": "15410:17:10"
                  }
                ],
                "id": 3158,
                "name": "ParameterList",
                "src": "15409:19:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_interestRateBase",
                      "scope": 3169,
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
                        "id": 3159,
                        "name": "ElementaryTypeName",
                        "src": "15476:4:10"
                      }
                    ],
                    "id": 3160,
                    "name": "VariableDeclaration",
                    "src": "15476:22:10"
                  }
                ],
                "id": 3161,
                "name": "ParameterList",
                "src": "15475:24:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3161
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
                          "operator": "+",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3157,
                              "type": "uint256",
                              "value": "interestRate"
                            },
                            "id": 3162,
                            "name": "Identifier",
                            "src": "15645:12:10"
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
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3130",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 10",
                                  "value": "10"
                                },
                                "id": 3163,
                                "name": "Literal",
                                "src": "15660:2:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2664,
                                  "type": "uint256",
                                  "value": "INTEREST_RATE_DECIMALS"
                                },
                                "id": 3164,
                                "name": "Identifier",
                                "src": "15666:22:10"
                              }
                            ],
                            "id": 3165,
                            "name": "BinaryOperation",
                            "src": "15660:28:10"
                          }
                        ],
                        "id": 3166,
                        "name": "BinaryOperation",
                        "src": "15645:43:10"
                      }
                    ],
                    "id": 3167,
                    "name": "Return",
                    "src": "15638:50:10"
                  }
                ],
                "id": 3168,
                "name": "Block",
                "src": "15504:191:10"
              }
            ],
            "id": 3169,
            "name": "FunctionDefinition",
            "src": "15382:313:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "normalizeDecimalPlaces",
              "payable": false,
              "scope": 3242,
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
                      "name": "value",
                      "scope": 3189,
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
                        "id": 3170,
                        "name": "ElementaryTypeName",
                        "src": "16294:4:10"
                      }
                    ],
                    "id": 3171,
                    "name": "VariableDeclaration",
                    "src": "16294:10:10"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "power",
                      "scope": 3189,
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
                        "id": 3172,
                        "name": "ElementaryTypeName",
                        "src": "16306:4:10"
                      }
                    ],
                    "id": 3173,
                    "name": "VariableDeclaration",
                    "src": "16306:10:10"
                  }
                ],
                "id": 3174,
                "name": "ParameterList",
                "src": "16293:24:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_normalizedValues",
                      "scope": 3189,
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
                        "id": 3175,
                        "name": "ElementaryTypeName",
                        "src": "16365:4:10"
                      }
                    ],
                    "id": 3176,
                    "name": "VariableDeclaration",
                    "src": "16365:22:10"
                  }
                ],
                "id": 3177,
                "name": "ParameterList",
                "src": "16364:24:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3177
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
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "div",
                              "referencedDeclaration": 5287,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3171,
                                  "type": "uint256",
                                  "value": "value"
                                },
                                "id": 3178,
                                "name": "Identifier",
                                "src": "16410:5:10"
                              }
                            ],
                            "id": 3179,
                            "name": "MemberAccess",
                            "src": "16410:9:10"
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
                              "operator": "**",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "3130",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 10",
                                  "value": "10"
                                },
                                "id": 3180,
                                "name": "Literal",
                                "src": "16420:2:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256"
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
                                      "operator": "*",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2664,
                                          "type": "uint256",
                                          "value": "INTEREST_RATE_DECIMALS"
                                        },
                                        "id": 3181,
                                        "name": "Identifier",
                                        "src": "16427:22:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3173,
                                          "type": "uint256",
                                          "value": "power"
                                        },
                                        "id": 3182,
                                        "name": "Identifier",
                                        "src": "16450:5:10"
                                      }
                                    ],
                                    "id": 3183,
                                    "name": "BinaryOperation",
                                    "src": "16427:28:10"
                                  }
                                ],
                                "id": 3184,
                                "name": "TupleExpression",
                                "src": "16426:30:10"
                              }
                            ],
                            "id": 3185,
                            "name": "BinaryOperation",
                            "src": "16420:36:10"
                          }
                        ],
                        "id": 3186,
                        "name": "FunctionCall",
                        "src": "16410:47:10"
                      }
                    ],
                    "id": 3187,
                    "name": "Return",
                    "src": "16403:54:10"
                  }
                ],
                "id": 3188,
                "name": "Block",
                "src": "16393:71:10"
              }
            ],
            "id": 3189,
            "name": "FunctionDefinition",
            "src": "16262:202:10"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getAmortizationUnitLengthInSeconds",
              "payable": false,
              "scope": 3242,
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
                      "name": "amortizationUnitType",
                      "scope": 3241,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "AmortizationUnitType",
                          "referencedDeclaration": 2670,
                          "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                        },
                        "id": 3190,
                        "name": "UserDefinedTypeName",
                        "src": "16794:20:10"
                      }
                    ],
                    "id": 3191,
                    "name": "VariableDeclaration",
                    "src": "16794:41:10"
                  }
                ],
                "id": 3192,
                "name": "ParameterList",
                "src": "16793:43:10"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitLengthInSeconds",
                      "scope": 3241,
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
                        "id": 3193,
                        "name": "ElementaryTypeName",
                        "src": "16884:4:10"
                      }
                    ],
                    "id": 3194,
                    "name": "VariableDeclaration",
                    "src": "16884:37:10"
                  }
                ],
                "id": 3195,
                "name": "ParameterList",
                "src": "16883:39:10"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                            "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
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
                              "referencedDeclaration": 3191,
                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3196,
                            "name": "Identifier",
                            "src": "16941:20:10"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "member_name": "HOURS",
                              "referencedDeclaration": null,
                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2670,
                                  "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                                  "value": "AmortizationUnitType"
                                },
                                "id": 3197,
                                "name": "Identifier",
                                "src": "16965:20:10"
                              }
                            ],
                            "id": 3198,
                            "name": "MemberAccess",
                            "src": "16965:26:10"
                          }
                        ],
                        "id": 3199,
                        "name": "BinaryOperation",
                        "src": "16941:50:10"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3195
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2688,
                                  "type": "uint256",
                                  "value": "HOUR_LENGTH_IN_SECONDS"
                                },
                                "id": 3200,
                                "name": "Identifier",
                                "src": "17014:22:10"
                              }
                            ],
                            "id": 3201,
                            "name": "Return",
                            "src": "17007:29:10"
                          }
                        ],
                        "id": 3202,
                        "name": "Block",
                        "src": "16993:54:10"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
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
                                  "referencedDeclaration": 3191,
                                  "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3203,
                                "name": "Identifier",
                                "src": "17057:20:10"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "member_name": "DAYS",
                                  "referencedDeclaration": null,
                                  "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2670,
                                      "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                                      "value": "AmortizationUnitType"
                                    },
                                    "id": 3204,
                                    "name": "Identifier",
                                    "src": "17081:20:10"
                                  }
                                ],
                                "id": 3205,
                                "name": "MemberAccess",
                                "src": "17081:25:10"
                              }
                            ],
                            "id": 3206,
                            "name": "BinaryOperation",
                            "src": "17057:49:10"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3195
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2693,
                                      "type": "uint256",
                                      "value": "DAY_LENGTH_IN_SECONDS"
                                    },
                                    "id": 3207,
                                    "name": "Identifier",
                                    "src": "17129:21:10"
                                  }
                                ],
                                "id": 3208,
                                "name": "Return",
                                "src": "17122:28:10"
                              }
                            ],
                            "id": 3209,
                            "name": "Block",
                            "src": "17108:53:10"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                    "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
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
                                      "referencedDeclaration": 3191,
                                      "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3210,
                                    "name": "Identifier",
                                    "src": "17171:20:10"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "member_name": "WEEKS",
                                      "referencedDeclaration": null,
                                      "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2670,
                                          "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3211,
                                        "name": "Identifier",
                                        "src": "17195:20:10"
                                      }
                                    ],
                                    "id": 3212,
                                    "name": "MemberAccess",
                                    "src": "17195:26:10"
                                  }
                                ],
                                "id": 3213,
                                "name": "BinaryOperation",
                                "src": "17171:50:10"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 3195
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2698,
                                          "type": "uint256",
                                          "value": "WEEK_LENGTH_IN_SECONDS"
                                        },
                                        "id": 3214,
                                        "name": "Identifier",
                                        "src": "17244:22:10"
                                      }
                                    ],
                                    "id": 3215,
                                    "name": "Return",
                                    "src": "17237:29:10"
                                  }
                                ],
                                "id": 3216,
                                "name": "Block",
                                "src": "17223:54:10"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                        "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
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
                                          "referencedDeclaration": 3191,
                                          "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                                          "value": "amortizationUnitType"
                                        },
                                        "id": 3217,
                                        "name": "Identifier",
                                        "src": "17287:20:10"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "member_name": "MONTHS",
                                          "referencedDeclaration": null,
                                          "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2670,
                                              "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                                              "value": "AmortizationUnitType"
                                            },
                                            "id": 3218,
                                            "name": "Identifier",
                                            "src": "17311:20:10"
                                          }
                                        ],
                                        "id": 3219,
                                        "name": "MemberAccess",
                                        "src": "17311:27:10"
                                      }
                                    ],
                                    "id": 3220,
                                    "name": "BinaryOperation",
                                    "src": "17287:51:10"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 3195
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2703,
                                              "type": "uint256",
                                              "value": "MONTH_LENGTH_IN_SECONDS"
                                            },
                                            "id": 3221,
                                            "name": "Identifier",
                                            "src": "17361:23:10"
                                          }
                                        ],
                                        "id": 3222,
                                        "name": "Return",
                                        "src": "17354:30:10"
                                      }
                                    ],
                                    "id": 3223,
                                    "name": "Block",
                                    "src": "17340:55:10"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2670",
                                            "typeString": "enum CompoundInterestTermsContract.AmortizationUnitType"
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
                                              "referencedDeclaration": 3191,
                                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType",
                                              "value": "amortizationUnitType"
                                            },
                                            "id": 3224,
                                            "name": "Identifier",
                                            "src": "17405:20:10"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "member_name": "YEARS",
                                              "referencedDeclaration": null,
                                              "type": "enum CompoundInterestTermsContract.AmortizationUnitType"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2670,
                                                  "type": "type(enum CompoundInterestTermsContract.AmortizationUnitType)",
                                                  "value": "AmortizationUnitType"
                                                },
                                                "id": 3225,
                                                "name": "Identifier",
                                                "src": "17429:20:10"
                                              }
                                            ],
                                            "id": 3226,
                                            "name": "MemberAccess",
                                            "src": "17429:26:10"
                                          }
                                        ],
                                        "id": 3227,
                                        "name": "BinaryOperation",
                                        "src": "17405:50:10"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 3195
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2708,
                                                  "type": "uint256",
                                                  "value": "YEAR_LENGTH_IN_SECONDS"
                                                },
                                                "id": 3228,
                                                "name": "Identifier",
                                                "src": "17478:22:10"
                                              }
                                            ],
                                            "id": 3229,
                                            "name": "Return",
                                            "src": "17471:29:10"
                                          }
                                        ],
                                        "id": 3230,
                                        "name": "Block",
                                        "src": "17457:54:10"
                                      },
                                      {
                                        "children": [
                                          {
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
                                                  "type": "tuple()",
                                                  "type_conversion": false
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": [
                                                        null
                                                      ],
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5479,
                                                      "type": "function () pure",
                                                      "value": "revert"
                                                    },
                                                    "id": 3231,
                                                    "name": "Identifier",
                                                    "src": "17531:6:10"
                                                  }
                                                ],
                                                "id": 3232,
                                                "name": "FunctionCall",
                                                "src": "17531:8:10"
                                              }
                                            ],
                                            "id": 3233,
                                            "name": "ExpressionStatement",
                                            "src": "17531:8:10"
                                          }
                                        ],
                                        "id": 3234,
                                        "name": "Block",
                                        "src": "17517:33:10"
                                      }
                                    ],
                                    "id": 3235,
                                    "name": "IfStatement",
                                    "src": "17401:149:10"
                                  }
                                ],
                                "id": 3236,
                                "name": "IfStatement",
                                "src": "17283:267:10"
                              }
                            ],
                            "id": 3237,
                            "name": "IfStatement",
                            "src": "17167:383:10"
                          }
                        ],
                        "id": 3238,
                        "name": "IfStatement",
                        "src": "17053:497:10"
                      }
                    ],
                    "id": 3239,
                    "name": "IfStatement",
                    "src": "16937:613:10"
                  }
                ],
                "id": 3240,
                "name": "Block",
                "src": "16927:629:10"
              }
            ],
            "id": 3241,
            "name": "FunctionDefinition",
            "src": "16750:806:10"
          }
        ],
        "id": 3242,
        "name": "ContractDefinition",
        "src": "2074:15484:10"
      }
    ],
    "id": 3243,
    "name": "SourceUnit",
    "src": "584:16975:10"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-26T00:44:40.845Z"
}