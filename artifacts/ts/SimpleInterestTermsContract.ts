export const SimpleInterestTermsContract = 
{
  "contractName": "SimpleInterestTermsContract",
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
      "inputs": [],
      "name": "INTEREST_RATE_SCALING_FACTOR",
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
      "name": "NUM_AMORTIZATION_UNIT_TYPES",
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
          "name": "debtor",
          "type": "address"
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
      "name": "tokenRegistry",
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
          "name": "_principalTokenIndex",
          "type": "uint256"
        },
        {
          "name": "_principalAmount",
          "type": "uint256"
        },
        {
          "name": "_interestRate",
          "type": "uint256"
        },
        {
          "name": "_amortizationUnitType",
          "type": "uint256"
        },
        {
          "name": "_termLengthInAmortizationUnits",
          "type": "uint256"
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
          "name": "_debtKernel",
          "type": "address"
        },
        {
          "name": "_debtRegistry",
          "type": "address"
        },
        {
          "name": "_tokenRegistry",
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
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "agreementId",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "name": "principalToken",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "principalAmount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "interestRate",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "amortizationUnitType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "termLengthInAmortizationUnits",
          "type": "uint256"
        }
      ],
      "name": "LogSimpleInterestTermStart",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6040516080806114bb8339810160405280805190602001909190805190602001909190805190602001909190805190602001909190505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050505061135e8061015d6000396000f3006060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100f65780630776298214610131578063079dd4b71461015a57806320863894146101af5780632f866f73146101d857806340018a0d1461022d5780635f0280ba146102565780636f69c96f146102fb5780636fa9d0561461032457806378b376cc146103795780638b47e58a146103a2578063977a5e64146103cb57806399114d84146104295780639d23c4c71461046d578063ed8907d7146104c2578063fd127a4114610519578063fd40d52e14610542575b600080fd5b341561010157600080fd5b61011b60048080356000191690602001909190505061057d565b6040518082815260200191505060405180910390f35b341561013c57600080fd5b6101446105a1565b6040518082815260200191505060405180910390f35b341561016557600080fd5b61016d6105aa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101ba57600080fd5b6101c26105d0565b6040518082815260200191505060405180910390f35b34156101e357600080fd5b6101eb6105dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561023857600080fd5b610240610602565b6040518082815260200191505060405180910390f35b341561026157600080fd5b6102e160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061060e565b604051808215151515815260200191505060405180910390f35b341561030657600080fd5b61030e61071a565b6040518082815260200191505060405180910390f35b341561032f57600080fd5b610337610720565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038457600080fd5b61038c610746565b6040518082815260200191505060405180910390f35b34156103ad57600080fd5b6103b561074c565b6040518082815260200191505060405180910390f35b34156103d657600080fd5b61040f60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610751565b604051808215151515815260200191505060405180910390f35b341561043457600080fd5b610457600480803560001916906020019091908035906020019091905050610a50565b6040518082815260200191505060405180910390f35b341561047857600080fd5b610480610bd6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104cd57600080fd5b6104e7600480803560001916906020019091905050610bfc565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b341561052457600080fd5b61052c610cf4565b6040518082815260200191505060405180910390f35b341561054d57600080fd5b610567600480803560001916906020019091905050610d01565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b60006106186112d3565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067457600080fd5b61067d87610d19565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561070b576106e4846000808a600019166000191681526020019081526020016000205461108390919063ffffffff16565b60008089600019166000191681526020019081526020016000208190555060019150610710565b600091505b5095945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61271081565b600581565b6000806000806000806000806000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107bb57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636be39bda8c6000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b151561085b57600080fd5b6102c65a03f1151561086c57600080fd5b50505060405180519060200180519050809850819950505061088d87610bfc565b809650819750829850839950849a505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b7876000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561093a57600080fd5b6102c65a03f1151561094b57600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156109945750600583105b80156109cb57503073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16145b15610a3d57828173ffffffffffffffffffffffffffffffffffffffff168c600019167f2c500aaec6833a053693d8c2a18a3ed5649a4609699abaf7778c3d389cc40c0588888760405180848152602001838152602001828152602001935050505060405180910390a460019850610a42565b600098505b505050505050505092915050565b6000610a5a6112d3565b60008085600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610aff57600080fd5b6102c65a03f11515610b1057600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141515610b5357600080fd5b610b5c87610d19565b9350610b67846110a1565b9250836060015186111515610b7f5760009450610bcc565b836080015186101515610b9457829450610bcc565b610b9e8685611110565b9150610bc98460c00151610bbb848661115a90919063ffffffff16565b61119590919063ffffffff16565b94505b5050505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028b1694507effffffffffffffffffffffff000000000000000000000000000000000000006001028b16935072ffffff000000000000000000000000000000006001028b1692506ff00000000000000000000000000000006001028b1691506f0ffff0000000000000000000000000006001028b169050610cb08560f86111b0565b610cbb8560986111b0565b610cc68560806111b0565b610cd185607c6111b0565b610cdc85606c6111b0565b99509950995099509950505050505091939590929450565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b610d216112d3565b600080600080600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610dd457600080fd5b6102c65a03f11515610de557600080fd5b505050604051805190509b50610dfa8c610bfc565b809b50819c50829d50839e50849f505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b78c6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610ea757600080fd5b6102c65a03f11515610eb857600080fd5b505050604051805190509550600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610f0057600080fd5b600480811115610f0c57fe5b8811151515610f1a57600080fd5b876004811115610f2657fe5b9450610f31856111cd565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610fd457600080fd5b6102c65a03f11515610fe557600080fd5b505050604051805190509250611004848861115a90919063ffffffff16565b9150611019838361108390919063ffffffff16565b905060e0604051908101604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a815260200184815260200182815260200186600481111561106757fe5b8152602001888152509c50505050505050505050505050919050565b600080828401905083811015151561109757fe5b8091505092915050565b60008060006110d56127106110c78660400151876020015161115a90919063ffffffff16565b61119590919063ffffffff16565b91506110ee8460c001518361115a90919063ffffffff16565b905061110781856020015161108390919063ffffffff16565b92505050919050565b600080600061112c8460600151866112ba90919063ffffffff16565b915061113b8460a001516111cd565b9050611150818361119590919063ffffffff16565b9250505092915050565b600080600084141561116f576000915061118e565b828402905082848281151561118057fe5b0414151561118a57fe5b8091505b5092915050565b60008082848115156111a357fe5b0490508091505092915050565b60008160020a83600190048115156111c457fe5b04905092915050565b60008060048111156111db57fe5b8260048111156111e757fe5b14156111f757610e1090506112b5565b6001600481111561120457fe5b82600481111561121057fe5b1415611223576018610e100290506112b5565b6002600481111561123057fe5b82600481111561123c57fe5b14156112525760076018610e10020290506112b5565b6003600481111561125f57fe5b82600481111561126b57fe5b141561128157601e6018610e10020290506112b5565b60048081111561128d57fe5b82600481111561129957fe5b14156112b05761016d6018610e10020290506112b5565b600080fd5b919050565b60008282111515156112c857fe5b818303905092915050565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000600481111561132557fe5b81526020016000815250905600a165627a7a72305820edfe1744552ac5c9689bd942b8c2acab2f59efb1edfb79e488cf674f1b72ee160029",
  "deployedBytecode": "0x6060604052600436106100f1576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100f65780630776298214610131578063079dd4b71461015a57806320863894146101af5780632f866f73146101d857806340018a0d1461022d5780635f0280ba146102565780636f69c96f146102fb5780636fa9d0561461032457806378b376cc146103795780638b47e58a146103a2578063977a5e64146103cb57806399114d84146104295780639d23c4c71461046d578063ed8907d7146104c2578063fd127a4114610519578063fd40d52e14610542575b600080fd5b341561010157600080fd5b61011b60048080356000191690602001909190505061057d565b6040518082815260200191505060405180910390f35b341561013c57600080fd5b6101446105a1565b6040518082815260200191505060405180910390f35b341561016557600080fd5b61016d6105aa565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101ba57600080fd5b6101c26105d0565b6040518082815260200191505060405180910390f35b34156101e357600080fd5b6101eb6105dc565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561023857600080fd5b610240610602565b6040518082815260200191505060405180910390f35b341561026157600080fd5b6102e160048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061060e565b604051808215151515815260200191505060405180910390f35b341561030657600080fd5b61030e61071a565b6040518082815260200191505060405180910390f35b341561032f57600080fd5b610337610720565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561038457600080fd5b61038c610746565b6040518082815260200191505060405180910390f35b34156103ad57600080fd5b6103b561074c565b6040518082815260200191505060405180910390f35b34156103d657600080fd5b61040f60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610751565b604051808215151515815260200191505060405180910390f35b341561043457600080fd5b610457600480803560001916906020019091908035906020019091905050610a50565b6040518082815260200191505060405180910390f35b341561047857600080fd5b610480610bd6565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156104cd57600080fd5b6104e7600480803560001916906020019091905050610bfc565b604051808681526020018581526020018481526020018381526020018281526020019550505050505060405180910390f35b341561052457600080fd5b61052c610cf4565b6040518082815260200191505060405180910390f35b341561054d57600080fd5b610567600480803560001916906020019091905050610d01565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b60006106186112d3565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561067457600080fd5b61067d87610d19565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561070b576106e4846000808a600019166000191681526020019081526020016000205461108390919063ffffffff16565b60008089600019166000191681526020019081526020016000208190555060019150610710565b600091505b5095945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61271081565b600581565b6000806000806000806000806000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156107bb57600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636be39bda8c6000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b151561085b57600080fd5b6102c65a03f1151561086c57600080fd5b50505060405180519060200180519050809850819950505061088d87610bfc565b809650819750829850839950849a505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b7876000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b151561093a57600080fd5b6102c65a03f1151561094b57600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16141580156109945750600583105b80156109cb57503073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16145b15610a3d57828173ffffffffffffffffffffffffffffffffffffffff168c600019167f2c500aaec6833a053693d8c2a18a3ed5649a4609699abaf7778c3d389cc40c0588888760405180848152602001838152602001828152602001935050505060405180910390a460019850610a42565b600098505b505050505050505092915050565b6000610a5a6112d3565b60008085600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610aff57600080fd5b6102c65a03f11515610b1057600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141515610b5357600080fd5b610b5c87610d19565b9350610b67846110a1565b9250836060015186111515610b7f5760009450610bcc565b836080015186101515610b9457829450610bcc565b610b9e8685611110565b9150610bc98460c00151610bbb848661115a90919063ffffffff16565b61119590919063ffffffff16565b94505b5050505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028b1694507effffffffffffffffffffffff000000000000000000000000000000000000006001028b16935072ffffff000000000000000000000000000000006001028b1692506ff00000000000000000000000000000006001028b1691506f0ffff0000000000000000000000000006001028b169050610cb08560f86111b0565b610cbb8560986111b0565b610cc68560806111b0565b610cd185607c6111b0565b610cdc85606c6111b0565b99509950995099509950505050505091939590929450565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b610d216112d3565b600080600080600080600080600080600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610dd457600080fd5b6102c65a03f11515610de557600080fd5b505050604051805190509b50610dfa8c610bfc565b809b50819c50829d50839e50849f505050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b78c6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610ea757600080fd5b6102c65a03f11515610eb857600080fd5b505050604051805190509550600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610f0057600080fd5b600480811115610f0c57fe5b8811151515610f1a57600080fd5b876004811115610f2657fe5b9450610f31856111cd565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638f6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610fd457600080fd5b6102c65a03f11515610fe557600080fd5b505050604051805190509250611004848861115a90919063ffffffff16565b9150611019838361108390919063ffffffff16565b905060e0604051908101604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018b81526020018a815260200184815260200182815260200186600481111561106757fe5b8152602001888152509c50505050505050505050505050919050565b600080828401905083811015151561109757fe5b8091505092915050565b60008060006110d56127106110c78660400151876020015161115a90919063ffffffff16565b61119590919063ffffffff16565b91506110ee8460c001518361115a90919063ffffffff16565b905061110781856020015161108390919063ffffffff16565b92505050919050565b600080600061112c8460600151866112ba90919063ffffffff16565b915061113b8460a001516111cd565b9050611150818361119590919063ffffffff16565b9250505092915050565b600080600084141561116f576000915061118e565b828402905082848281151561118057fe5b0414151561118a57fe5b8091505b5092915050565b60008082848115156111a357fe5b0490508091505092915050565b60008160020a83600190048115156111c457fe5b04905092915050565b60008060048111156111db57fe5b8260048111156111e757fe5b14156111f757610e1090506112b5565b6001600481111561120457fe5b82600481111561121057fe5b1415611223576018610e100290506112b5565b6002600481111561123057fe5b82600481111561123c57fe5b14156112525760076018610e10020290506112b5565b6003600481111561125f57fe5b82600481111561126b57fe5b141561128157601e6018610e10020290506112b5565b60048081111561128d57fe5b82600481111561129957fe5b14156112b05761016d6018610e10020290506112b5565b600080fd5b919050565b60008282111515156112c857fe5b818303905092915050565b60e060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff168152602001600081526020016000815260200160008152602001600081526020016000600481111561132557fe5b81526020016000815250905600a165627a7a72305820edfe1744552ac5c9689bd942b8c2acab2f59efb1edfb79e488cf674f1b72ee160029",
  "sourceMap": "759:15688:3:-;;;2734:381;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2960:13;2932:12;;:42;;;;;;;;;;;;;;;;;;3014:14;2984:13;;:45;;;;;;;;;;;;;;;;;;3053:11;3040:10;;:24;;;;;;;;;;;;;;;;;;3092:16;3074:15;;:34;;;;;;;;;;;;;;;;;;2734:381;;;;759:15688;;;;;;",
  "deployedSourceMap": "759:15688:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8640:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1339:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2056:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1494:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1977:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1417:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6137:547;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1280:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2087:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1860:59;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;917:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3768:1658;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7293:1066;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2015:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8813:2790;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1573:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1926:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8640:167;8736:17;8776:11;:24;8788:11;8776:24;;;;;;;;;;;;;;;;;;8769:31;;8640:167;;;:::o;1339:72::-;1409:2;1326:7;1384:27;1339:72;:::o;2056:25::-;;;;;;;;;;;;;:::o;1494:73::-;1565:2;1409;1326:7;1384:27;1541:26;1494:73;:::o;1977:32::-;;;;;;;;;;;;;:::o;1417:71::-;1487:1;1409:2;1326:7;1384:27;1463:25;1417:71;:::o;6137:547::-;6366:13;6395:34;;:::i;:::-;2444:15;;;;;;;;;;;2430:29;;:10;:29;;;2422:38;;;;;;;;6432:39;6459:11;6432:26;:39::i;:::-;6395:76;;6502:6;:28;;;6486:44;;:12;:44;;;6482:173;;;6573:46;6602:16;6573:11;:24;6585:11;6573:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;6546:11;:24;6558:11;6546:24;;;;;;;;;;;;;;;;;:73;;;;6640:4;6633:11;;;;6482:173;6672:5;6665:12;;2470:1;6137:547;;;;;;;;:::o;1280:53::-;1326:7;1280:53;:::o;2087:30::-;;;;;;;;;;;;;:::o;1860:59::-;1912:7;1860:59;:::o;917:52::-;968:1;917:52;:::o;3768:1658::-;3909:13;3938:21;3969:31;4099:24;4133:20;4163:17;4190:25;4225:34;4451:29;2699:10;;;;;;;;;;;2685:24;;:10;:24;;;2677:33;;;;;;;;4054:12;;;;;;;;;;;:21;;;4076:11;4054:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4011:77;;;;;;;;4390:50;4416:23;4390:25;:50::i;:::-;4270:170;;;;;;;;;;;;;;;;;;;;4495:13;;;;;;;;;;;:36;;;4532:19;4495:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4451:101;;4974:1;4941:35;;:21;:35;;;;:101;;;;;968:1;4992:20;:50;4941:101;:147;;;;;5083:4;5058:30;;:13;:30;;;4941:147;4937:460;;;5279:20;5177:21;5104:256;;5148:11;5104:256;;;;5216:15;5249:12;5317:29;5104:256;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5382:4;5375:11;;;;4937:460;5414:5;5407:12;;2720:1;3768:1658;;;;;;;;;;;;:::o;7293:1066::-;7481:28;7525:34;;:::i;:::-;7611:26;8177:13;7451:11;2574:12;;;;;;;;;;;:29;;;2604:11;2574:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2557:59;;2565:4;2557:59;;;2549:68;;;;;;;;7562:39;7589:11;7562:26;:39::i;:::-;7525:76;;7640:43;7676:6;7640:35;:43::i;:::-;7611:72;;7711:6;:29;;;7698:9;:42;;7694:659;;;7893:1;7886:8;;;;7694:659;7928:6;:27;;;7915:9;:40;;7911:442;;;8125:21;8118:28;;;;7911:442;8193:51;8226:9;8237:6;8193:32;:51::i;:::-;8177:67;;8265:77;8305:6;:36;;;8265:35;8291:8;8265:21;:25;;:35;;;;:::i;:::-;:39;;:77;;;;:::i;:::-;8258:84;;2627:1;7293:1066;;;;;;;;:::o;2015:34::-;;;;;;;;;;;;;:::o;8813:2790::-;8926:25;8965:21;9000:18;9032:26;9072:35;9246:34;9466:30;9678:27;9894:35;10151:44;9308:66;9295:79;;:10;:79;9246:128;;9524:66;9511:79;;:10;:79;9466:124;;9733:66;9720:79;;:10;:79;9678:121;;9957:66;9944:79;;:10;:79;9894:129;;10223:66;10210:79;;:10;:79;10151:138;;11300:46;11314:26;11342:3;11300:13;:46::i;:::-;11360:42;11374:22;11398:3;11360:13;:42::i;:::-;11416:39;11430:19;11451:3;11416:13;:39::i;:::-;11469:47;11483:27;11512:3;11469:13;:47::i;:::-;11530:56;11544:36;11582:3;11530:13;:56::i;:::-;11279:317;;;;;;;;;;8813:2790;;;;;;;;;;;;:::o;1573:73::-;1643:3;1409:2;1326:7;1384:27;1619;1573:73;:::o;1926:44::-;;;;;;;;;;;;;;;;;:::o;13270:2363::-;13375:27;;:::i;:::-;13418:18;13582:24;13689:20;13779:17;13897:28;14032:34;14248:29;14664:41;14764:36;14881:27;14984:24;15099:25;13439:12;;;;;;;;;;;:39;;;13479:11;13439:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13418:73;;14200:37;14226:10;14200:25;:37::i;:::-;14077:160;;;;;;;;;;;;;;;;;;;;14292:13;;;;;;;;;;;:36;;;14329:19;14292:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14248:101;;14469:1;14436:35;;:21;:35;;;;14428:44;;;;;;;;14625:26;14620:32;;;;;;;;14593:23;:59;;14585:68;;;;;;;;14729:23;14708:45;;;;;;;;14664:89;;14815:56;14850:20;14815:34;:56::i;:::-;14764:107;;14923:12;;;;;;;;;;;:38;;;14962:11;14923:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14881:93;;15023:66;15057:31;15023:29;:33;;:66;;;;:::i;:::-;14984:105;;15139:47;15163:22;15139:19;:23;;:47;;;;:::i;:::-;15099:87;;15204:422;;;;;;;;;15262:21;15204:422;;;;;;15314:15;15204:422;;;;15357:12;15204:422;;;;15407:22;15204:422;;;;15465:20;15204:422;;;;15521:20;15204:422;;;;;;;;;;;;15586:29;15204:422;;;15197:429;;13270:2363;;;;;;;;;;;;;;;:::o;1008:129:6:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;12557:707:3:-;12679:27;12979:20;13120:18;13002:107;1912:7;13002:60;13042:6;:19;;;13002:6;:22;;;:39;;:60;;;;:::i;:::-;:77;;:107;;;;:::i;:::-;12979:130;;13141:57;13161:6;:36;;;13141:15;:19;;:57;;;;:::i;:::-;13120:78;;13216:41;13243:13;13216:6;:22;;;:26;;:41;;;;:::i;:::-;13209:48;;12557:707;;;;;:::o;11772:404::-;11915:10;11941;12008:36;11954:44;11968:6;:29;;;11954:9;:13;;:44;;;;:::i;:::-;11941:57;;12047:63;12082:6;:27;;;12047:34;:63::i;:::-;12008:102;;12127:42;12137:31;12127:5;:9;;:42;;;;:::i;:::-;12120:49;;11772:404;;;;;;:::o;203:173:6:-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;11609:157:3:-;11707:4;11753:6;11748:1;:11;11739:5;11734:11;;;:25;;;;;;;;11727:32;;11609:157;;;;:::o;15639:806::-;15773:37;15854:26;15830:50;;;;;;;;:20;:50;;;;;;;;;15826:613;;;1326:7;15896:29;;;;15826:613;15970:25;15946:49;;;;;;;;:20;:49;;;;;;;;;15942:497;;;1409:2;1326:7;1384:27;16011:28;;;;15942:497;16084:26;16060:50;;;;;;;;:20;:50;;;;;;;;;16056:383;;;1487:1;1409:2;1326:7;1384:27;1463:25;16126:29;;;;16056:383;16200:27;16176:51;;;;;;;;:20;:51;;;;;;;;;16172:267;;;1565:2;1409;1326:7;1384:27;1541:26;16243:30;;;;16172:267;16318:26;16294:50;;;;;;;;:20;:50;;;;;;;;;16290:149;;;1643:3;1409:2;1326:7;1384:27;1619;16360:29;;;;16290:149;16420:8;;;15639:806;;;;:::o;836:110:6:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;759:15688:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TermsContract.sol\";\nimport \"../TokenRegistry.sol\";\n\n\ncontract SimpleInterestTermsContract is TermsContract {\n    using SafeMath for uint;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n    uint public constant NUM_AMORTIZATION_UNIT_TYPES = 5;\n\n    struct SimpleInterestParams {\n        address principalTokenAddress;\n        uint principalAmount;\n        uint interestRate;\n        uint termStartUnixTimestamp;\n        uint termEndUnixTimestamp;\n        AmortizationUnitType amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n    }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    // Given that Solidity doesn't support floating points, we represent\n    // decimal values (such as interestRate) with fixed point values\n    // scaled up by a factor of 10000 -- e.g. 10.342% => 1034250\n    uint public constant INTEREST_RATE_SCALING_FACTOR = 10 ** 4;\n\n    mapping (bytes32 => uint) public valueRepaid;\n\n    DebtRegistry public debtRegistry;\n    TokenRegistry public tokenRegistry;\n\n    address public debtKernel;\n    address public repaymentRouter;\n\n    event LogSimpleInterestTermStart(\n        bytes32 indexed agreementId,\n        address indexed principalToken,\n        uint principalAmount,\n        uint interestRate,\n        uint indexed amortizationUnitType,\n        uint termLengthInAmortizationUnits\n    );\n\n    modifier onlyRouter() {\n        require(msg.sender == repaymentRouter);\n        _;\n    }\n\n    modifier onlyMappedToThisContract(bytes32 agreementId) {\n        require(address(this) == debtRegistry.getTermsContract(agreementId));\n        _;\n    }\n\n    modifier onlyDebtKernel() {\n        require(msg.sender == debtKernel);\n        _;\n    }\n\n    function SimpleInterestTermsContract(\n        address _debtKernel,\n        address _debtRegistry,\n        address _tokenRegistry,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n\n        debtKernel = _debtKernel;\n        repaymentRouter = _repaymentRouter;\n    }\n\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @param  debtor address. The debtor in this particular issuance.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        onlyDebtKernel\n        returns (bool _success)\n    {\n        address termsContract;\n        bytes32 termsContractParameters;\n\n        (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);\n\n        uint principalTokenIndex;\n        uint principalAmount;\n        uint interestRate;\n        uint amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n\n        (principalTokenIndex, principalAmount, interestRate, amortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(termsContractParameters);\n\n        address principalTokenAddress =\n            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);\n\n        // Returns true (i.e. valid) if the specified principal token is valid,\n        // the specified amortization unit type is valid, and the terms contract\n        // associated with the agreement is this one.  We need not check\n        // if any of the other simple interest parameters are valid, because\n        // it is impossible to encode invalid values for them.\n        if (principalTokenAddress != address(0) &&\n            amortizationUnitType < NUM_AMORTIZATION_UNIT_TYPES &&\n            termsContract == address(this)) {\n            LogSimpleInterestTermStart(\n                agreementId,\n                principalTokenAddress,\n                principalAmount,\n                interestRate,\n                amortizationUnitType,\n                termLengthInAmortizationUnits\n            );\n\n            return true;\n        }\n\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        onlyRouter\n        returns (bool _success)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n\n        if (tokenAddress == params.principalTokenAddress) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        onlyMappedToThisContract(agreementId)\n        returns (uint _expectedRepaymentValue)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n        uint principalPlusInterest = calculateTotalPrincipalPlusInterest(params);\n\n        if (timestamp <= params.termStartUnixTimestamp) {\n            /* The query occurs before the contract was even initialized so the\n            expected value of repayments is 0. */\n            return 0;\n        } else if (timestamp >= params.termEndUnixTimestamp) {\n            /* the query occurs beyond the contract's term, so the expected\n            value of repayment is the full principal plus interest. */\n            return principalPlusInterest;\n        } else {\n            uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);\n            return principalPlusInterest.mul(numUnits).div(params.termLengthInAmortizationUnits);\n        }\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    function unpackParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint _principalTokenIndex,\n            uint _principalAmount,\n            uint _interestRate,\n            uint _amortizationUnitType,\n            uint _termLengthInAmortizationUnits\n        )\n    {\n        // The first byte of the parameters encodes the principal token's index in the\n        // token registry.\n        bytes32 principalTokenIndexShifted =\n            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;\n        // The subsequent 12 bytes of the parameters encode the principal amount.\n        bytes32 principalAmountShifted =\n            parameters & 0x00ffffffffffffffffffffffff00000000000000000000000000000000000000;\n        // The subsequent 3 bytes of the parameters encode the interest rate.\n        bytes32 interestRateShifted =\n            parameters & 0x00000000000000000000000000ffffff00000000000000000000000000000000;\n        // The subsequent 4 bits (half byte) encode the amortization unit type code.\n        bytes32 amortizationUnitTypeShifted =\n            parameters & 0x00000000000000000000000000000000f0000000000000000000000000000000;\n        // The subsequent 2 bytes encode the term length, as denominated in\n        // the encoded amortization unit.\n        bytes32 termLengthInAmortizationUnitsShifted =\n            parameters & 0x000000000000000000000000000000000ffff000000000000000000000000000;\n\n        // Note that the remaining 108 bits are reserved for any parameters relevant to a\n        // collateralized terms contracts.\n\n        /*\n        We then bit shift left each of these values so that the 32-byte uint\n        counterpart correctly represents the value that was originally packed\n        into the 32 byte string.\n\n        The below chart summarizes where in the 32 byte string each value\n        terminates -- which indicates the extent to which each value must be bit\n        shifted left.\n\n                                        Location (bytes)\tLocation (bits)\n                                        32                  256\n        principalTokenIndex\t            31\t                248\n        principalAmount\t                19                  152\n        interestRate                    16                  128\n        amortizationUnitType            15.5                124\n        termLengthInAmortizationUnits   13.5                108\n        */\n        return (\n            bitShiftRight(principalTokenIndexShifted, 248),\n            bitShiftRight(principalAmountShifted, 152),\n            bitShiftRight(interestRateShifted, 128),\n            bitShiftRight(amortizationUnitTypeShifted, 124),\n            bitShiftRight(termLengthInAmortizationUnitsShifted, 108)\n        );\n    }\n\n    function bitShiftRight(bytes32 value, uint amount)\n        internal\n        pure\n        returns (uint)\n    {\n        return uint(value) / 2 ** amount;\n    }\n\n    function numAmortizationUnitsForTimestamp(\n        uint timestamp,\n        SimpleInterestParams params\n    )\n        internal\n        returns (uint units)\n    {\n        uint delta = timestamp.sub(params.termStartUnixTimestamp);\n        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(params.amortizationUnitType);\n        return delta.div(amortizationUnitLengthInSeconds);\n    }\n\n    /**\n     * Calculates the total repayment value expected at the end of the loan's term.\n     *\n     * This computation assumes that interest is paid per amortization period.\n     *\n     * @param params SimpleInterestParams. The parameters that define the simple interest loan.\n     * @return uint The total repayment value expected at the end of the loan's term.\n     */\n    function calculateTotalPrincipalPlusInterest(\n        SimpleInterestParams params\n    )\n        internal\n        returns (uint _principalPlusInterest)\n    {\n        // Since we represent decimal interest rates using their\n        // scaled-up, fixed point representation, we have to\n        // downscale the result of the interest payment computation\n        // by the scaling factor we choose for interest rates.\n        uint interestPayment = params.principalAmount\n            .mul(params.interestRate)\n            .div(INTEREST_RATE_SCALING_FACTOR);\n\n        uint totalInterest = interestPayment.mul(params.termLengthInAmortizationUnits);\n\n        return params.principalAmount.add(totalInterest);\n    }\n\n    function unpackParamsForAgreementID(\n        bytes32 agreementId\n    )\n        internal\n        returns (SimpleInterestParams params)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n\n        // Index of the token used for principal payments in the Token Registry\n        uint principalTokenIndex;\n        // The principal amount denominated in the aforementioned token.\n        uint principalAmount;\n        // The interest rate accrued per amortization unit.\n        uint interestRate;\n        // The amortization unit in which the repayments installments schedule is defined.\n        uint rawAmortizationUnitType;\n        // The debt's entire term's length, denominated in the aforementioned amortization units\n        uint termLengthInAmortizationUnits;\n\n        (principalTokenIndex, principalAmount, interestRate, rawAmortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(parameters);\n\n        address principalTokenAddress =\n            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);\n\n        // Ensure that the encoded principal token address is valid\n        require(principalTokenAddress != address(0));\n\n        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.\n        require(rawAmortizationUnitType <= uint(AmortizationUnitType.YEARS));\n\n        AmortizationUnitType amortizationUnitType = AmortizationUnitType(rawAmortizationUnitType);\n\n        uint amortizationUnitLengthInSeconds =\n            getAmortizationUnitLengthInSeconds(amortizationUnitType);\n        uint issuanceBlockTimestamp =\n            debtRegistry.getIssuanceBlockTimestamp(agreementId);\n        uint termLengthInSeconds =\n            termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);\n        uint termEndUnixTimestamp =\n            termLengthInSeconds.add(issuanceBlockTimestamp);\n\n        return SimpleInterestParams({\n            principalTokenAddress: principalTokenAddress,\n            principalAmount: principalAmount,\n            interestRate: interestRate,\n            termStartUnixTimestamp: issuanceBlockTimestamp,\n            termEndUnixTimestamp: termEndUnixTimestamp,\n            amortizationUnitType: amortizationUnitType,\n            termLengthInAmortizationUnits: termLengthInAmortizationUnits\n        });\n    }\n\n    function getAmortizationUnitLengthInSeconds(AmortizationUnitType amortizationUnitType)\n        internal\n        pure\n        returns (uint _amortizationUnitLengthInSeconds)\n    {\n        if (amortizationUnitType == AmortizationUnitType.HOURS) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.DAYS) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.WEEKS) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.MONTHS) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.YEARS) {\n            return YEAR_LENGTH_IN_SECONDS;\n        } else {\n            revert();\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
      "exportedSymbols": {
        "SimpleInterestTermsContract": [
          1374
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
        "id": 698,
        "name": "PragmaDirective",
        "src": "584:23:3"
      },
      {
        "attributes": {
          "SourceUnit": 1713,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 1375,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 699,
        "name": "ImportDirective",
        "src": "609:55:3"
      },
      {
        "attributes": {
          "SourceUnit": 522,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 1375,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 700,
        "name": "ImportDirective",
        "src": "665:29:3"
      },
      {
        "attributes": {
          "SourceUnit": 565,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 1375,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 701,
        "name": "ImportDirective",
        "src": "695:30:3"
      },
      {
        "attributes": {
          "SourceUnit": 697,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
          "file": "../TokenRegistry.sol",
          "scope": 1375,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 702,
        "name": "ImportDirective",
        "src": "726:30:3"
      },
      {
        "attributes": {
          "contractDependencies": [
            564
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            1374,
            564
          ],
          "name": "SimpleInterestTermsContract",
          "scope": 1375
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
                  "referencedDeclaration": 564,
                  "type": "contract TermsContract"
                },
                "id": 703,
                "name": "UserDefinedTypeName",
                "src": "799:13:3"
              }
            ],
            "id": 704,
            "name": "InheritanceSpecifier",
            "src": "799:13:3"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 1712,
                  "type": "library SafeMath"
                },
                "id": 705,
                "name": "UserDefinedTypeName",
                "src": "825:8:3"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 706,
                "name": "ElementaryTypeName",
                "src": "838:4:3"
              }
            ],
            "id": 707,
            "name": "UsingForDirective",
            "src": "819:24:3"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.AmortizationUnitType",
              "name": "AmortizationUnitType"
            },
            "children": [
              {
                "attributes": {
                  "name": "HOURS"
                },
                "id": 708,
                "name": "EnumValue",
                "src": "877:5:3"
              },
              {
                "attributes": {
                  "name": "DAYS"
                },
                "id": 709,
                "name": "EnumValue",
                "src": "884:4:3"
              },
              {
                "attributes": {
                  "name": "WEEKS"
                },
                "id": 710,
                "name": "EnumValue",
                "src": "890:5:3"
              },
              {
                "attributes": {
                  "name": "MONTHS"
                },
                "id": 711,
                "name": "EnumValue",
                "src": "897:6:3"
              },
              {
                "attributes": {
                  "name": "YEARS"
                },
                "id": 712,
                "name": "EnumValue",
                "src": "905:5:3"
              }
            ],
            "id": 713,
            "name": "EnumDefinition",
            "src": "849:63:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "NUM_AMORTIZATION_UNIT_TYPES",
              "scope": 1374,
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
                "id": 714,
                "name": "ElementaryTypeName",
                "src": "917:4:3"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "hexvalue": "35",
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "subdenomination": null,
                  "token": "number",
                  "type": "int_const 5",
                  "value": "5"
                },
                "id": 715,
                "name": "Literal",
                "src": "968:1:3"
              }
            ],
            "id": 716,
            "name": "VariableDeclaration",
            "src": "917:52:3"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.SimpleInterestParams",
              "name": "SimpleInterestParams",
              "scope": 1374,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "principalTokenAddress",
                  "scope": 731,
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
                    "id": 717,
                    "name": "ElementaryTypeName",
                    "src": "1014:7:3"
                  }
                ],
                "id": 718,
                "name": "VariableDeclaration",
                "src": "1014:29:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "principalAmount",
                  "scope": 731,
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
                    "id": 719,
                    "name": "ElementaryTypeName",
                    "src": "1053:4:3"
                  }
                ],
                "id": 720,
                "name": "VariableDeclaration",
                "src": "1053:20:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "interestRate",
                  "scope": 731,
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
                    "id": 721,
                    "name": "ElementaryTypeName",
                    "src": "1083:4:3"
                  }
                ],
                "id": 722,
                "name": "VariableDeclaration",
                "src": "1083:17:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termStartUnixTimestamp",
                  "scope": 731,
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
                    "id": 723,
                    "name": "ElementaryTypeName",
                    "src": "1110:4:3"
                  }
                ],
                "id": 724,
                "name": "VariableDeclaration",
                "src": "1110:27:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termEndUnixTimestamp",
                  "scope": 731,
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
                    "id": 725,
                    "name": "ElementaryTypeName",
                    "src": "1147:4:3"
                  }
                ],
                "id": 726,
                "name": "VariableDeclaration",
                "src": "1147:25:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amortizationUnitType",
                  "scope": 731,
                  "stateVariable": false,
                  "storageLocation": "default",
                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                  "value": null,
                  "visibility": "internal"
                },
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "AmortizationUnitType",
                      "referencedDeclaration": 713,
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                    },
                    "id": 727,
                    "name": "UserDefinedTypeName",
                    "src": "1182:20:3"
                  }
                ],
                "id": 728,
                "name": "VariableDeclaration",
                "src": "1182:41:3"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termLengthInAmortizationUnits",
                  "scope": 731,
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
                    "id": 729,
                    "name": "ElementaryTypeName",
                    "src": "1233:4:3"
                  }
                ],
                "id": 730,
                "name": "VariableDeclaration",
                "src": "1233:34:3"
              }
            ],
            "id": 731,
            "name": "StructDefinition",
            "src": "976:298:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "HOUR_LENGTH_IN_SECONDS",
              "scope": 1374,
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
                "id": 732,
                "name": "ElementaryTypeName",
                "src": "1280:4:3"
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
                    "id": 733,
                    "name": "Literal",
                    "src": "1326:2:3"
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
                    "id": 734,
                    "name": "Literal",
                    "src": "1331:2:3"
                  }
                ],
                "id": 735,
                "name": "BinaryOperation",
                "src": "1326:7:3"
              }
            ],
            "id": 736,
            "name": "VariableDeclaration",
            "src": "1280:53:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "DAY_LENGTH_IN_SECONDS",
              "scope": 1374,
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
                "id": 737,
                "name": "ElementaryTypeName",
                "src": "1339:4:3"
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
                      "referencedDeclaration": 736,
                      "type": "uint256",
                      "value": "HOUR_LENGTH_IN_SECONDS"
                    },
                    "id": 738,
                    "name": "Identifier",
                    "src": "1384:22:3"
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
                    "id": 739,
                    "name": "Literal",
                    "src": "1409:2:3"
                  }
                ],
                "id": 740,
                "name": "BinaryOperation",
                "src": "1384:27:3"
              }
            ],
            "id": 741,
            "name": "VariableDeclaration",
            "src": "1339:72:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "WEEK_LENGTH_IN_SECONDS",
              "scope": 1374,
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
                "id": 742,
                "name": "ElementaryTypeName",
                "src": "1417:4:3"
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
                      "referencedDeclaration": 741,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 743,
                    "name": "Identifier",
                    "src": "1463:21:3"
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
                    "id": 744,
                    "name": "Literal",
                    "src": "1487:1:3"
                  }
                ],
                "id": 745,
                "name": "BinaryOperation",
                "src": "1463:25:3"
              }
            ],
            "id": 746,
            "name": "VariableDeclaration",
            "src": "1417:71:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "MONTH_LENGTH_IN_SECONDS",
              "scope": 1374,
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
                "id": 747,
                "name": "ElementaryTypeName",
                "src": "1494:4:3"
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
                      "referencedDeclaration": 741,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 748,
                    "name": "Identifier",
                    "src": "1541:21:3"
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
                    "id": 749,
                    "name": "Literal",
                    "src": "1565:2:3"
                  }
                ],
                "id": 750,
                "name": "BinaryOperation",
                "src": "1541:26:3"
              }
            ],
            "id": 751,
            "name": "VariableDeclaration",
            "src": "1494:73:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "YEAR_LENGTH_IN_SECONDS",
              "scope": 1374,
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
                "id": 752,
                "name": "ElementaryTypeName",
                "src": "1573:4:3"
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
                      "referencedDeclaration": 741,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 753,
                    "name": "Identifier",
                    "src": "1619:21:3"
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
                    "id": 754,
                    "name": "Literal",
                    "src": "1643:3:3"
                  }
                ],
                "id": 755,
                "name": "BinaryOperation",
                "src": "1619:27:3"
              }
            ],
            "id": 756,
            "name": "VariableDeclaration",
            "src": "1573:73:3"
          },
          {
            "attributes": {
              "constant": true,
              "name": "INTEREST_RATE_SCALING_FACTOR",
              "scope": 1374,
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
                "id": 757,
                "name": "ElementaryTypeName",
                "src": "1860:4:3"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "commonType": {
                    "typeIdentifier": "t_rational_10000_by_1",
                    "typeString": "int_const 10000"
                  },
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "lValueRequested": false,
                  "operator": "**",
                  "type": "int_const 10000"
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
                    "id": 758,
                    "name": "Literal",
                    "src": "1912:2:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "34",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 4",
                      "value": "4"
                    },
                    "id": 759,
                    "name": "Literal",
                    "src": "1918:1:3"
                  }
                ],
                "id": 760,
                "name": "BinaryOperation",
                "src": "1912:7:3"
              }
            ],
            "id": 761,
            "name": "VariableDeclaration",
            "src": "1860:59:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "valueRepaid",
              "scope": 1374,
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
                    "id": 762,
                    "name": "ElementaryTypeName",
                    "src": "1935:7:3"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 763,
                    "name": "ElementaryTypeName",
                    "src": "1946:4:3"
                  }
                ],
                "id": 764,
                "name": "Mapping",
                "src": "1926:25:3"
              }
            ],
            "id": 765,
            "name": "VariableDeclaration",
            "src": "1926:44:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 1374,
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
                  "referencedDeclaration": 521,
                  "type": "contract DebtRegistry"
                },
                "id": 766,
                "name": "UserDefinedTypeName",
                "src": "1977:12:3"
              }
            ],
            "id": 767,
            "name": "VariableDeclaration",
            "src": "1977:32:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenRegistry",
              "scope": 1374,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "contract TokenRegistry",
              "value": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "TokenRegistry",
                  "referencedDeclaration": 696,
                  "type": "contract TokenRegistry"
                },
                "id": 768,
                "name": "UserDefinedTypeName",
                "src": "2015:13:3"
              }
            ],
            "id": 769,
            "name": "VariableDeclaration",
            "src": "2015:34:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 1374,
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
                "id": 770,
                "name": "ElementaryTypeName",
                "src": "2056:7:3"
              }
            ],
            "id": 771,
            "name": "VariableDeclaration",
            "src": "2056:25:3"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 1374,
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
                "id": 772,
                "name": "ElementaryTypeName",
                "src": "2087:7:3"
              }
            ],
            "id": 773,
            "name": "VariableDeclaration",
            "src": "2087:30:3"
          },
          {
            "attributes": {
              "anonymous": false,
              "name": "LogSimpleInterestTermStart"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "agreementId",
                      "scope": 787,
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
                        "id": 774,
                        "name": "ElementaryTypeName",
                        "src": "2166:7:3"
                      }
                    ],
                    "id": 775,
                    "name": "VariableDeclaration",
                    "src": "2166:27:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "principalToken",
                      "scope": 787,
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
                        "id": 776,
                        "name": "ElementaryTypeName",
                        "src": "2203:7:3"
                      }
                    ],
                    "id": 777,
                    "name": "VariableDeclaration",
                    "src": "2203:30:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "principalAmount",
                      "scope": 787,
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
                        "id": 778,
                        "name": "ElementaryTypeName",
                        "src": "2243:4:3"
                      }
                    ],
                    "id": 779,
                    "name": "VariableDeclaration",
                    "src": "2243:20:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "interestRate",
                      "scope": 787,
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
                        "id": 780,
                        "name": "ElementaryTypeName",
                        "src": "2273:4:3"
                      }
                    ],
                    "id": 781,
                    "name": "VariableDeclaration",
                    "src": "2273:17:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "amortizationUnitType",
                      "scope": 787,
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
                        "id": 782,
                        "name": "ElementaryTypeName",
                        "src": "2300:4:3"
                      }
                    ],
                    "id": 783,
                    "name": "VariableDeclaration",
                    "src": "2300:33:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termLengthInAmortizationUnits",
                      "scope": 787,
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
                        "id": 784,
                        "name": "ElementaryTypeName",
                        "src": "2343:4:3"
                      }
                    ],
                    "id": 785,
                    "name": "VariableDeclaration",
                    "src": "2343:34:3"
                  }
                ],
                "id": 786,
                "name": "ParameterList",
                "src": "2156:227:3"
              }
            ],
            "id": 787,
            "name": "EventDefinition",
            "src": "2124:260:3"
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
                "id": 788,
                "name": "ParameterList",
                "src": "2409:2:3"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 789,
                            "name": "Identifier",
                            "src": "2422:7:3"
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
                                      "referencedDeclaration": 1780,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 790,
                                    "name": "Identifier",
                                    "src": "2430:3:3"
                                  }
                                ],
                                "id": 791,
                                "name": "MemberAccess",
                                "src": "2430:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 773,
                                  "type": "address",
                                  "value": "repaymentRouter"
                                },
                                "id": 792,
                                "name": "Identifier",
                                "src": "2444:15:3"
                              }
                            ],
                            "id": 793,
                            "name": "BinaryOperation",
                            "src": "2430:29:3"
                          }
                        ],
                        "id": 794,
                        "name": "FunctionCall",
                        "src": "2422:38:3"
                      }
                    ],
                    "id": 795,
                    "name": "ExpressionStatement",
                    "src": "2422:38:3"
                  },
                  {
                    "id": 796,
                    "name": "PlaceholderStatement",
                    "src": "2470:1:3"
                  }
                ],
                "id": 797,
                "name": "Block",
                "src": "2412:66:3"
              }
            ],
            "id": 798,
            "name": "ModifierDefinition",
            "src": "2390:88:3"
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
                      "scope": 815,
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
                        "id": 799,
                        "name": "ElementaryTypeName",
                        "src": "2518:7:3"
                      }
                    ],
                    "id": 800,
                    "name": "VariableDeclaration",
                    "src": "2518:19:3"
                  }
                ],
                "id": 801,
                "name": "ParameterList",
                "src": "2517:21:3"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 802,
                            "name": "Identifier",
                            "src": "2549:7:3"
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
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$1374",
                                          "typeString": "contract SimpleInterestTermsContract"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 803,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2557:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1805,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 804,
                                    "name": "Identifier",
                                    "src": "2565:4:3"
                                  }
                                ],
                                "id": 805,
                                "name": "FunctionCall",
                                "src": "2557:13:3"
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
                                      "referencedDeclaration": 409,
                                      "type": "function (bytes32) view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 767,
                                          "type": "contract DebtRegistry",
                                          "value": "debtRegistry"
                                        },
                                        "id": 806,
                                        "name": "Identifier",
                                        "src": "2574:12:3"
                                      }
                                    ],
                                    "id": 807,
                                    "name": "MemberAccess",
                                    "src": "2574:29:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 800,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 808,
                                    "name": "Identifier",
                                    "src": "2604:11:3"
                                  }
                                ],
                                "id": 809,
                                "name": "FunctionCall",
                                "src": "2574:42:3"
                              }
                            ],
                            "id": 810,
                            "name": "BinaryOperation",
                            "src": "2557:59:3"
                          }
                        ],
                        "id": 811,
                        "name": "FunctionCall",
                        "src": "2549:68:3"
                      }
                    ],
                    "id": 812,
                    "name": "ExpressionStatement",
                    "src": "2549:68:3"
                  },
                  {
                    "id": 813,
                    "name": "PlaceholderStatement",
                    "src": "2627:1:3"
                  }
                ],
                "id": 814,
                "name": "Block",
                "src": "2539:96:3"
              }
            ],
            "id": 815,
            "name": "ModifierDefinition",
            "src": "2484:151:3"
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
                "id": 816,
                "name": "ParameterList",
                "src": "2664:2:3"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 817,
                            "name": "Identifier",
                            "src": "2677:7:3"
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
                                      "referencedDeclaration": 1780,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 818,
                                    "name": "Identifier",
                                    "src": "2685:3:3"
                                  }
                                ],
                                "id": 819,
                                "name": "MemberAccess",
                                "src": "2685:10:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 771,
                                  "type": "address",
                                  "value": "debtKernel"
                                },
                                "id": 820,
                                "name": "Identifier",
                                "src": "2699:10:3"
                              }
                            ],
                            "id": 821,
                            "name": "BinaryOperation",
                            "src": "2685:24:3"
                          }
                        ],
                        "id": 822,
                        "name": "FunctionCall",
                        "src": "2677:33:3"
                      }
                    ],
                    "id": 823,
                    "name": "ExpressionStatement",
                    "src": "2677:33:3"
                  },
                  {
                    "id": 824,
                    "name": "PlaceholderStatement",
                    "src": "2720:1:3"
                  }
                ],
                "id": 825,
                "name": "Block",
                "src": "2667:61:3"
              }
            ],
            "id": 826,
            "name": "ModifierDefinition",
            "src": "2641:87:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": true,
              "modifiers": [
                null
              ],
              "name": "SimpleInterestTermsContract",
              "payable": false,
              "scope": 1374,
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
                      "name": "_debtKernel",
                      "scope": 858,
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
                        "id": 827,
                        "name": "ElementaryTypeName",
                        "src": "2780:7:3"
                      }
                    ],
                    "id": 828,
                    "name": "VariableDeclaration",
                    "src": "2780:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 858,
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
                        "id": 829,
                        "name": "ElementaryTypeName",
                        "src": "2809:7:3"
                      }
                    ],
                    "id": 830,
                    "name": "VariableDeclaration",
                    "src": "2809:21:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenRegistry",
                      "scope": 858,
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
                        "id": 831,
                        "name": "ElementaryTypeName",
                        "src": "2840:7:3"
                      }
                    ],
                    "id": 832,
                    "name": "VariableDeclaration",
                    "src": "2840:22:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 858,
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
                        "id": 833,
                        "name": "ElementaryTypeName",
                        "src": "2872:7:3"
                      }
                    ],
                    "id": 834,
                    "name": "VariableDeclaration",
                    "src": "2872:24:3"
                  }
                ],
                "id": 835,
                "name": "ParameterList",
                "src": "2770:132:3"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 836,
                "name": "ParameterList",
                "src": "2922:0:3"
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
                              "referencedDeclaration": 767,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 837,
                            "name": "Identifier",
                            "src": "2932:12:3"
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
                                  "referencedDeclaration": 521,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 838,
                                "name": "Identifier",
                                "src": "2947:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 830,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 839,
                                "name": "Identifier",
                                "src": "2960:13:3"
                              }
                            ],
                            "id": 840,
                            "name": "FunctionCall",
                            "src": "2947:27:3"
                          }
                        ],
                        "id": 841,
                        "name": "Assignment",
                        "src": "2932:42:3"
                      }
                    ],
                    "id": 842,
                    "name": "ExpressionStatement",
                    "src": "2932:42:3"
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
                          "type": "contract TokenRegistry"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 769,
                              "type": "contract TokenRegistry",
                              "value": "tokenRegistry"
                            },
                            "id": 843,
                            "name": "Identifier",
                            "src": "2984:13:3"
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
                              "type": "contract TokenRegistry",
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
                                  "referencedDeclaration": 696,
                                  "type": "type(contract TokenRegistry)",
                                  "value": "TokenRegistry"
                                },
                                "id": 844,
                                "name": "Identifier",
                                "src": "3000:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 832,
                                  "type": "address",
                                  "value": "_tokenRegistry"
                                },
                                "id": 845,
                                "name": "Identifier",
                                "src": "3014:14:3"
                              }
                            ],
                            "id": 846,
                            "name": "FunctionCall",
                            "src": "3000:29:3"
                          }
                        ],
                        "id": 847,
                        "name": "Assignment",
                        "src": "2984:45:3"
                      }
                    ],
                    "id": 848,
                    "name": "ExpressionStatement",
                    "src": "2984:45:3"
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
                              "referencedDeclaration": 771,
                              "type": "address",
                              "value": "debtKernel"
                            },
                            "id": 849,
                            "name": "Identifier",
                            "src": "3040:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 828,
                              "type": "address",
                              "value": "_debtKernel"
                            },
                            "id": 850,
                            "name": "Identifier",
                            "src": "3053:11:3"
                          }
                        ],
                        "id": 851,
                        "name": "Assignment",
                        "src": "3040:24:3"
                      }
                    ],
                    "id": 852,
                    "name": "ExpressionStatement",
                    "src": "3040:24:3"
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
                              "referencedDeclaration": 773,
                              "type": "address",
                              "value": "repaymentRouter"
                            },
                            "id": 853,
                            "name": "Identifier",
                            "src": "3074:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 834,
                              "type": "address",
                              "value": "_repaymentRouter"
                            },
                            "id": 854,
                            "name": "Identifier",
                            "src": "3092:16:3"
                          }
                        ],
                        "id": 855,
                        "name": "Assignment",
                        "src": "3074:34:3"
                      }
                    ],
                    "id": 856,
                    "name": "ExpressionStatement",
                    "src": "3074:34:3"
                  }
                ],
                "id": 857,
                "name": "Block",
                "src": "2922:193:3"
              }
            ],
            "id": 858,
            "name": "FunctionDefinition",
            "src": "2734:381:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerTermStart",
              "payable": false,
              "scope": 1374,
              "stateMutability": "nonpayable",
              "superFunction": 532,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 948,
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
                        "id": 859,
                        "name": "ElementaryTypeName",
                        "src": "3804:7:3"
                      }
                    ],
                    "id": 860,
                    "name": "VariableDeclaration",
                    "src": "3804:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 948,
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
                        "id": 861,
                        "name": "ElementaryTypeName",
                        "src": "3833:7:3"
                      }
                    ],
                    "id": 862,
                    "name": "VariableDeclaration",
                    "src": "3833:14:3"
                  }
                ],
                "id": 863,
                "name": "ParameterList",
                "src": "3794:59:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 948,
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
                        "id": 866,
                        "name": "ElementaryTypeName",
                        "src": "3909:4:3"
                      }
                    ],
                    "id": 867,
                    "name": "VariableDeclaration",
                    "src": "3909:13:3"
                  }
                ],
                "id": 868,
                "name": "ParameterList",
                "src": "3908:15:3"
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
                      "referencedDeclaration": 826,
                      "type": "modifier ()",
                      "value": "onlyDebtKernel"
                    },
                    "id": 864,
                    "name": "Identifier",
                    "src": "3877:14:3"
                  }
                ],
                "id": 865,
                "name": "ModifierInvocation",
                "src": "3877:14:3"
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
                          "name": "termsContract",
                          "scope": 948,
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
                            "id": 869,
                            "name": "ElementaryTypeName",
                            "src": "3938:7:3"
                          }
                        ],
                        "id": 870,
                        "name": "VariableDeclaration",
                        "src": "3938:21:3"
                      }
                    ],
                    "id": 871,
                    "name": "VariableDeclarationStatement",
                    "src": "3938:21:3"
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
                          "name": "termsContractParameters",
                          "scope": 948,
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
                            "id": 872,
                            "name": "ElementaryTypeName",
                            "src": "3969:7:3"
                          }
                        ],
                        "id": 873,
                        "name": "VariableDeclaration",
                        "src": "3969:31:3"
                      }
                    ],
                    "id": 874,
                    "name": "VariableDeclarationStatement",
                    "src": "3969:31:3"
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
                              "type": "tuple(address,bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 870,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 875,
                                "name": "Identifier",
                                "src": "4012:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 873,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 876,
                                "name": "Identifier",
                                "src": "4027:23:3"
                              }
                            ],
                            "id": 877,
                            "name": "TupleExpression",
                            "src": "4011:40:3"
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
                              "type": "tuple(address,bytes32)",
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
                                  "member_name": "getTerms",
                                  "referencedDeclaration": 445,
                                  "type": "function (bytes32) view external returns (address,bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 767,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 878,
                                    "name": "Identifier",
                                    "src": "4054:12:3"
                                  }
                                ],
                                "id": 879,
                                "name": "MemberAccess",
                                "src": "4054:21:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 860,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 880,
                                "name": "Identifier",
                                "src": "4076:11:3"
                              }
                            ],
                            "id": 881,
                            "name": "FunctionCall",
                            "src": "4054:34:3"
                          }
                        ],
                        "id": 882,
                        "name": "Assignment",
                        "src": "4011:77:3"
                      }
                    ],
                    "id": 883,
                    "name": "ExpressionStatement",
                    "src": "4011:77:3"
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
                          "name": "principalTokenIndex",
                          "scope": 948,
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
                            "id": 884,
                            "name": "ElementaryTypeName",
                            "src": "4099:4:3"
                          }
                        ],
                        "id": 885,
                        "name": "VariableDeclaration",
                        "src": "4099:24:3"
                      }
                    ],
                    "id": 886,
                    "name": "VariableDeclarationStatement",
                    "src": "4099:24:3"
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
                          "name": "principalAmount",
                          "scope": 948,
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
                            "id": 887,
                            "name": "ElementaryTypeName",
                            "src": "4133:4:3"
                          }
                        ],
                        "id": 888,
                        "name": "VariableDeclaration",
                        "src": "4133:20:3"
                      }
                    ],
                    "id": 889,
                    "name": "VariableDeclarationStatement",
                    "src": "4133:20:3"
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
                          "scope": 948,
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
                            "id": 890,
                            "name": "ElementaryTypeName",
                            "src": "4163:4:3"
                          }
                        ],
                        "id": 891,
                        "name": "VariableDeclaration",
                        "src": "4163:17:3"
                      }
                    ],
                    "id": 892,
                    "name": "VariableDeclarationStatement",
                    "src": "4163:17:3"
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
                          "name": "amortizationUnitType",
                          "scope": 948,
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
                            "id": 893,
                            "name": "ElementaryTypeName",
                            "src": "4190:4:3"
                          }
                        ],
                        "id": 894,
                        "name": "VariableDeclaration",
                        "src": "4190:25:3"
                      }
                    ],
                    "id": 895,
                    "name": "VariableDeclarationStatement",
                    "src": "4190:25:3"
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
                          "scope": 948,
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
                            "id": 896,
                            "name": "ElementaryTypeName",
                            "src": "4225:4:3"
                          }
                        ],
                        "id": 897,
                        "name": "VariableDeclaration",
                        "src": "4225:34:3"
                      }
                    ],
                    "id": 898,
                    "name": "VariableDeclarationStatement",
                    "src": "4225:34:3"
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
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 885,
                                  "type": "uint256",
                                  "value": "principalTokenIndex"
                                },
                                "id": 899,
                                "name": "Identifier",
                                "src": "4271:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 888,
                                  "type": "uint256",
                                  "value": "principalAmount"
                                },
                                "id": 900,
                                "name": "Identifier",
                                "src": "4292:15:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 891,
                                  "type": "uint256",
                                  "value": "interestRate"
                                },
                                "id": 901,
                                "name": "Identifier",
                                "src": "4309:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 894,
                                  "type": "uint256",
                                  "value": "amortizationUnitType"
                                },
                                "id": 902,
                                "name": "Identifier",
                                "src": "4323:20:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 897,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 903,
                                "name": "Identifier",
                                "src": "4345:29:3"
                              }
                            ],
                            "id": 904,
                            "name": "TupleExpression",
                            "src": "4270:105:3"
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
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)",
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
                                  "referencedDeclaration": 1131,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 905,
                                "name": "Identifier",
                                "src": "4390:25:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 873,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 906,
                                "name": "Identifier",
                                "src": "4416:23:3"
                              }
                            ],
                            "id": 907,
                            "name": "FunctionCall",
                            "src": "4390:50:3"
                          }
                        ],
                        "id": 908,
                        "name": "Assignment",
                        "src": "4270:170:3"
                      }
                    ],
                    "id": 909,
                    "name": "ExpressionStatement",
                    "src": "4270:170:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        911
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenAddress",
                          "scope": 948,
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
                            "id": 910,
                            "name": "ElementaryTypeName",
                            "src": "4451:7:3"
                          }
                        ],
                        "id": 911,
                        "name": "VariableDeclaration",
                        "src": "4451:29:3"
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
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTokenAddressByIndex",
                              "referencedDeclaration": 669,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 769,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 912,
                                "name": "Identifier",
                                "src": "4495:13:3"
                              }
                            ],
                            "id": 913,
                            "name": "MemberAccess",
                            "src": "4495:36:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 885,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 914,
                            "name": "Identifier",
                            "src": "4532:19:3"
                          }
                        ],
                        "id": 915,
                        "name": "FunctionCall",
                        "src": "4495:57:3"
                      }
                    ],
                    "id": 916,
                    "name": "VariableDeclarationStatement",
                    "src": "4451:101:3"
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
                          "operator": "&&",
                          "type": "bool"
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
                              "operator": "&&",
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
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 911,
                                      "type": "address",
                                      "value": "principalTokenAddress"
                                    },
                                    "id": 917,
                                    "name": "Identifier",
                                    "src": "4941:21:3"
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
                                        "id": 918,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "4966:7:3"
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
                                        "id": 919,
                                        "name": "Literal",
                                        "src": "4974:1:3"
                                      }
                                    ],
                                    "id": 920,
                                    "name": "FunctionCall",
                                    "src": "4966:10:3"
                                  }
                                ],
                                "id": 921,
                                "name": "BinaryOperation",
                                "src": "4941:35:3"
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
                                      "referencedDeclaration": 894,
                                      "type": "uint256",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 922,
                                    "name": "Identifier",
                                    "src": "4992:20:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 716,
                                      "type": "uint256",
                                      "value": "NUM_AMORTIZATION_UNIT_TYPES"
                                    },
                                    "id": 923,
                                    "name": "Identifier",
                                    "src": "5015:27:3"
                                  }
                                ],
                                "id": 924,
                                "name": "BinaryOperation",
                                "src": "4992:50:3"
                              }
                            ],
                            "id": 925,
                            "name": "BinaryOperation",
                            "src": "4941:101:3"
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
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 870,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 926,
                                "name": "Identifier",
                                "src": "5058:13:3"
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
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$1374",
                                          "typeString": "contract SimpleInterestTermsContract"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(address)",
                                      "value": "address"
                                    },
                                    "id": 927,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "5075:7:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1805,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 928,
                                    "name": "Identifier",
                                    "src": "5083:4:3"
                                  }
                                ],
                                "id": 929,
                                "name": "FunctionCall",
                                "src": "5075:13:3"
                              }
                            ],
                            "id": 930,
                            "name": "BinaryOperation",
                            "src": "5058:30:3"
                          }
                        ],
                        "id": 931,
                        "name": "BinaryOperation",
                        "src": "4941:147:3"
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
                                        },
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
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 787,
                                      "type": "function (bytes32,address,uint256,uint256,uint256,uint256)",
                                      "value": "LogSimpleInterestTermStart"
                                    },
                                    "id": 932,
                                    "name": "Identifier",
                                    "src": "5104:26:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 860,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 933,
                                    "name": "Identifier",
                                    "src": "5148:11:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 911,
                                      "type": "address",
                                      "value": "principalTokenAddress"
                                    },
                                    "id": 934,
                                    "name": "Identifier",
                                    "src": "5177:21:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 888,
                                      "type": "uint256",
                                      "value": "principalAmount"
                                    },
                                    "id": 935,
                                    "name": "Identifier",
                                    "src": "5216:15:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 891,
                                      "type": "uint256",
                                      "value": "interestRate"
                                    },
                                    "id": 936,
                                    "name": "Identifier",
                                    "src": "5249:12:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 894,
                                      "type": "uint256",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 937,
                                    "name": "Identifier",
                                    "src": "5279:20:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 897,
                                      "type": "uint256",
                                      "value": "termLengthInAmortizationUnits"
                                    },
                                    "id": 938,
                                    "name": "Identifier",
                                    "src": "5317:29:3"
                                  }
                                ],
                                "id": 939,
                                "name": "FunctionCall",
                                "src": "5104:256:3"
                              }
                            ],
                            "id": 940,
                            "name": "ExpressionStatement",
                            "src": "5104:256:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 868
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
                                "id": 941,
                                "name": "Literal",
                                "src": "5382:4:3"
                              }
                            ],
                            "id": 942,
                            "name": "Return",
                            "src": "5375:11:3"
                          }
                        ],
                        "id": 943,
                        "name": "Block",
                        "src": "5090:307:3"
                      }
                    ],
                    "id": 944,
                    "name": "IfStatement",
                    "src": "4937:460:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 868
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
                        "id": 945,
                        "name": "Literal",
                        "src": "5414:5:3"
                      }
                    ],
                    "id": 946,
                    "name": "Return",
                    "src": "5407:12:3"
                  }
                ],
                "id": 947,
                "name": "Block",
                "src": "3928:1498:3"
              }
            ],
            "id": 948,
            "name": "FunctionDefinition",
            "src": "3768:1658:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerRepayment",
              "payable": false,
              "scope": 1374,
              "stateMutability": "nonpayable",
              "superFunction": 547,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 993,
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
                        "id": 949,
                        "name": "ElementaryTypeName",
                        "src": "6173:7:3"
                      }
                    ],
                    "id": 950,
                    "name": "VariableDeclaration",
                    "src": "6173:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 993,
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
                        "id": 951,
                        "name": "ElementaryTypeName",
                        "src": "6202:7:3"
                      }
                    ],
                    "id": 952,
                    "name": "VariableDeclaration",
                    "src": "6202:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 993,
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
                        "id": 953,
                        "name": "ElementaryTypeName",
                        "src": "6225:7:3"
                      }
                    ],
                    "id": 954,
                    "name": "VariableDeclaration",
                    "src": "6225:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 993,
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
                        "id": 955,
                        "name": "ElementaryTypeName",
                        "src": "6254:7:3"
                      }
                    ],
                    "id": 956,
                    "name": "VariableDeclaration",
                    "src": "6254:24:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 993,
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
                        "id": 957,
                        "name": "ElementaryTypeName",
                        "src": "6288:7:3"
                      }
                    ],
                    "id": 958,
                    "name": "VariableDeclaration",
                    "src": "6288:20:3"
                  }
                ],
                "id": 959,
                "name": "ParameterList",
                "src": "6163:151:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 993,
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
                        "id": 962,
                        "name": "ElementaryTypeName",
                        "src": "6366:4:3"
                      }
                    ],
                    "id": 963,
                    "name": "VariableDeclaration",
                    "src": "6366:13:3"
                  }
                ],
                "id": 964,
                "name": "ParameterList",
                "src": "6365:15:3"
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
                      "referencedDeclaration": 798,
                      "type": "modifier ()",
                      "value": "onlyRouter"
                    },
                    "id": 960,
                    "name": "Identifier",
                    "src": "6338:10:3"
                  }
                ],
                "id": 961,
                "name": "ModifierInvocation",
                "src": "6338:10:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        966
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 993,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "SimpleInterestParams",
                              "referencedDeclaration": 731,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 965,
                            "name": "UserDefinedTypeName",
                            "src": "6395:20:3"
                          }
                        ],
                        "id": 966,
                        "name": "VariableDeclaration",
                        "src": "6395:34:3"
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
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
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
                              "referencedDeclaration": 1321,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 967,
                            "name": "Identifier",
                            "src": "6432:26:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 950,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 968,
                            "name": "Identifier",
                            "src": "6459:11:3"
                          }
                        ],
                        "id": 969,
                        "name": "FunctionCall",
                        "src": "6432:39:3"
                      }
                    ],
                    "id": 970,
                    "name": "VariableDeclarationStatement",
                    "src": "6395:76:3"
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
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 958,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 971,
                            "name": "Identifier",
                            "src": "6486:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "principalTokenAddress",
                              "referencedDeclaration": 718,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 966,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 972,
                                "name": "Identifier",
                                "src": "6502:6:3"
                              }
                            ],
                            "id": 973,
                            "name": "MemberAccess",
                            "src": "6502:28:3"
                          }
                        ],
                        "id": 974,
                        "name": "BinaryOperation",
                        "src": "6486:44:3"
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
                                          "referencedDeclaration": 765,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "valueRepaid"
                                        },
                                        "id": 975,
                                        "name": "Identifier",
                                        "src": "6546:11:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 950,
                                          "type": "bytes32",
                                          "value": "agreementId"
                                        },
                                        "id": 976,
                                        "name": "Identifier",
                                        "src": "6558:11:3"
                                      }
                                    ],
                                    "id": 977,
                                    "name": "IndexAccess",
                                    "src": "6546:24:3"
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
                                          "referencedDeclaration": 1711,
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
                                                  "referencedDeclaration": 765,
                                                  "type": "mapping(bytes32 => uint256)",
                                                  "value": "valueRepaid"
                                                },
                                                "id": 978,
                                                "name": "Identifier",
                                                "src": "6573:11:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 950,
                                                  "type": "bytes32",
                                                  "value": "agreementId"
                                                },
                                                "id": 979,
                                                "name": "Identifier",
                                                "src": "6585:11:3"
                                              }
                                            ],
                                            "id": 980,
                                            "name": "IndexAccess",
                                            "src": "6573:24:3"
                                          }
                                        ],
                                        "id": 981,
                                        "name": "MemberAccess",
                                        "src": "6573:28:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 956,
                                          "type": "uint256",
                                          "value": "unitsOfRepayment"
                                        },
                                        "id": 982,
                                        "name": "Identifier",
                                        "src": "6602:16:3"
                                      }
                                    ],
                                    "id": 983,
                                    "name": "FunctionCall",
                                    "src": "6573:46:3"
                                  }
                                ],
                                "id": 984,
                                "name": "Assignment",
                                "src": "6546:73:3"
                              }
                            ],
                            "id": 985,
                            "name": "ExpressionStatement",
                            "src": "6546:73:3"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 964
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
                                "id": 986,
                                "name": "Literal",
                                "src": "6640:4:3"
                              }
                            ],
                            "id": 987,
                            "name": "Return",
                            "src": "6633:11:3"
                          }
                        ],
                        "id": 988,
                        "name": "Block",
                        "src": "6532:123:3"
                      }
                    ],
                    "id": 989,
                    "name": "IfStatement",
                    "src": "6482:173:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 964
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
                        "id": 990,
                        "name": "Literal",
                        "src": "6672:5:3"
                      }
                    ],
                    "id": 991,
                    "name": "Return",
                    "src": "6665:12:3"
                  }
                ],
                "id": 992,
                "name": "Block",
                "src": "6385:299:3"
              }
            ],
            "id": 993,
            "name": "FunctionDefinition",
            "src": "6137:547:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 1374,
              "stateMutability": "view",
              "superFunction": 556,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 1051,
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
                        "id": 994,
                        "name": "ElementaryTypeName",
                        "src": "7337:7:3"
                      }
                    ],
                    "id": 995,
                    "name": "VariableDeclaration",
                    "src": "7337:19:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 1051,
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
                        "id": 996,
                        "name": "ElementaryTypeName",
                        "src": "7366:7:3"
                      }
                    ],
                    "id": 997,
                    "name": "VariableDeclaration",
                    "src": "7366:17:3"
                  }
                ],
                "id": 998,
                "name": "ParameterList",
                "src": "7327:62:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 1051,
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
                        "id": 1002,
                        "name": "ElementaryTypeName",
                        "src": "7481:4:3"
                      }
                    ],
                    "id": 1003,
                    "name": "VariableDeclaration",
                    "src": "7481:28:3"
                  }
                ],
                "id": 1004,
                "name": "ParameterList",
                "src": "7480:30:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 815,
                      "type": "modifier (bytes32)",
                      "value": "onlyMappedToThisContract"
                    },
                    "id": 999,
                    "name": "Identifier",
                    "src": "7426:24:3"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 995,
                      "type": "bytes32",
                      "value": "agreementId"
                    },
                    "id": 1000,
                    "name": "Identifier",
                    "src": "7451:11:3"
                  }
                ],
                "id": 1001,
                "name": "ModifierInvocation",
                "src": "7426:37:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1006
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 1051,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "SimpleInterestParams",
                              "referencedDeclaration": 731,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 1005,
                            "name": "UserDefinedTypeName",
                            "src": "7525:20:3"
                          }
                        ],
                        "id": 1006,
                        "name": "VariableDeclaration",
                        "src": "7525:34:3"
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
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
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
                              "referencedDeclaration": 1321,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 1007,
                            "name": "Identifier",
                            "src": "7562:26:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 995,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 1008,
                            "name": "Identifier",
                            "src": "7589:11:3"
                          }
                        ],
                        "id": 1009,
                        "name": "FunctionCall",
                        "src": "7562:39:3"
                      }
                    ],
                    "id": 1010,
                    "name": "VariableDeclarationStatement",
                    "src": "7525:76:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1012
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterest",
                          "scope": 1051,
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
                            "id": 1011,
                            "name": "ElementaryTypeName",
                            "src": "7611:4:3"
                          }
                        ],
                        "id": 1012,
                        "name": "VariableDeclaration",
                        "src": "7611:26:3"
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
                                  "typeIdentifier": "t_struct$_SimpleInterestParams_$731_memory_ptr",
                                  "typeString": "struct SimpleInterestTermsContract.SimpleInterestParams memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1213,
                              "type": "function (struct SimpleInterestTermsContract.SimpleInterestParams memory) returns (uint256)",
                              "value": "calculateTotalPrincipalPlusInterest"
                            },
                            "id": 1013,
                            "name": "Identifier",
                            "src": "7640:35:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1006,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                              "value": "params"
                            },
                            "id": 1014,
                            "name": "Identifier",
                            "src": "7676:6:3"
                          }
                        ],
                        "id": 1015,
                        "name": "FunctionCall",
                        "src": "7640:43:3"
                      }
                    ],
                    "id": 1016,
                    "name": "VariableDeclarationStatement",
                    "src": "7611:72:3"
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
                              "referencedDeclaration": 997,
                              "type": "uint256",
                              "value": "timestamp"
                            },
                            "id": 1017,
                            "name": "Identifier",
                            "src": "7698:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 724,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1006,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 1018,
                                "name": "Identifier",
                                "src": "7711:6:3"
                              }
                            ],
                            "id": 1019,
                            "name": "MemberAccess",
                            "src": "7711:29:3"
                          }
                        ],
                        "id": 1020,
                        "name": "BinaryOperation",
                        "src": "7698:42:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 1004
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
                                "id": 1021,
                                "name": "Literal",
                                "src": "7893:1:3"
                              }
                            ],
                            "id": 1022,
                            "name": "Return",
                            "src": "7886:8:3"
                          }
                        ],
                        "id": 1023,
                        "name": "Block",
                        "src": "7742:163:3"
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
                              "operator": ">=",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 997,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 1024,
                                "name": "Identifier",
                                "src": "7915:9:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "termEndUnixTimestamp",
                                  "referencedDeclaration": 726,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1006,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 1025,
                                    "name": "Identifier",
                                    "src": "7928:6:3"
                                  }
                                ],
                                "id": 1026,
                                "name": "MemberAccess",
                                "src": "7928:27:3"
                              }
                            ],
                            "id": 1027,
                            "name": "BinaryOperation",
                            "src": "7915:40:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 1004
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1012,
                                      "type": "uint256",
                                      "value": "principalPlusInterest"
                                    },
                                    "id": 1028,
                                    "name": "Identifier",
                                    "src": "8125:21:3"
                                  }
                                ],
                                "id": 1029,
                                "name": "Return",
                                "src": "8118:28:3"
                              }
                            ],
                            "id": 1030,
                            "name": "Block",
                            "src": "7957:200:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    1032
                                  ]
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "numUnits",
                                      "scope": 1051,
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
                                        "id": 1031,
                                        "name": "ElementaryTypeName",
                                        "src": "8177:4:3"
                                      }
                                    ],
                                    "id": 1032,
                                    "name": "VariableDeclaration",
                                    "src": "8177:13:3"
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
                                              "typeIdentifier": "t_struct$_SimpleInterestParams_$731_memory_ptr",
                                              "typeString": "struct SimpleInterestTermsContract.SimpleInterestParams memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1179,
                                          "type": "function (uint256,struct SimpleInterestTermsContract.SimpleInterestParams memory) returns (uint256)",
                                          "value": "numAmortizationUnitsForTimestamp"
                                        },
                                        "id": 1033,
                                        "name": "Identifier",
                                        "src": "8193:32:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 997,
                                          "type": "uint256",
                                          "value": "timestamp"
                                        },
                                        "id": 1034,
                                        "name": "Identifier",
                                        "src": "8226:9:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1006,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 1035,
                                        "name": "Identifier",
                                        "src": "8237:6:3"
                                      }
                                    ],
                                    "id": 1036,
                                    "name": "FunctionCall",
                                    "src": "8193:51:3"
                                  }
                                ],
                                "id": 1037,
                                "name": "VariableDeclarationStatement",
                                "src": "8177:67:3"
                              },
                              {
                                "attributes": {
                                  "functionReturnParameters": 1004
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
                                          "referencedDeclaration": 1667,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
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
                                                  "member_name": "mul",
                                                  "referencedDeclaration": 1649,
                                                  "type": "function (uint256,uint256) pure returns (uint256)"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 1012,
                                                      "type": "uint256",
                                                      "value": "principalPlusInterest"
                                                    },
                                                    "id": 1038,
                                                    "name": "Identifier",
                                                    "src": "8265:21:3"
                                                  }
                                                ],
                                                "id": 1039,
                                                "name": "MemberAccess",
                                                "src": "8265:25:3"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1032,
                                                  "type": "uint256",
                                                  "value": "numUnits"
                                                },
                                                "id": 1040,
                                                "name": "Identifier",
                                                "src": "8291:8:3"
                                              }
                                            ],
                                            "id": 1041,
                                            "name": "FunctionCall",
                                            "src": "8265:35:3"
                                          }
                                        ],
                                        "id": 1042,
                                        "name": "MemberAccess",
                                        "src": "8265:39:3"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "termLengthInAmortizationUnits",
                                          "referencedDeclaration": 730,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1006,
                                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 1043,
                                            "name": "Identifier",
                                            "src": "8305:6:3"
                                          }
                                        ],
                                        "id": 1044,
                                        "name": "MemberAccess",
                                        "src": "8305:36:3"
                                      }
                                    ],
                                    "id": 1045,
                                    "name": "FunctionCall",
                                    "src": "8265:77:3"
                                  }
                                ],
                                "id": 1046,
                                "name": "Return",
                                "src": "8258:84:3"
                              }
                            ],
                            "id": 1047,
                            "name": "Block",
                            "src": "8163:190:3"
                          }
                        ],
                        "id": 1048,
                        "name": "IfStatement",
                        "src": "7911:442:3"
                      }
                    ],
                    "id": 1049,
                    "name": "IfStatement",
                    "src": "7694:659:3"
                  }
                ],
                "id": 1050,
                "name": "Block",
                "src": "7515:844:3"
              }
            ],
            "id": 1051,
            "name": "FunctionDefinition",
            "src": "7293:1066:3"
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
              "scope": 1374,
              "stateMutability": "view",
              "superFunction": 563,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 1063,
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
                        "id": 1052,
                        "name": "ElementaryTypeName",
                        "src": "8670:7:3"
                      }
                    ],
                    "id": 1053,
                    "name": "VariableDeclaration",
                    "src": "8670:19:3"
                  }
                ],
                "id": 1054,
                "name": "ParameterList",
                "src": "8669:21:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 1063,
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
                        "id": 1055,
                        "name": "ElementaryTypeName",
                        "src": "8736:4:3"
                      }
                    ],
                    "id": 1056,
                    "name": "VariableDeclaration",
                    "src": "8736:17:3"
                  }
                ],
                "id": 1057,
                "name": "ParameterList",
                "src": "8735:19:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1057
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
                              "referencedDeclaration": 765,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "valueRepaid"
                            },
                            "id": 1058,
                            "name": "Identifier",
                            "src": "8776:11:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1053,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 1059,
                            "name": "Identifier",
                            "src": "8788:11:3"
                          }
                        ],
                        "id": 1060,
                        "name": "IndexAccess",
                        "src": "8776:24:3"
                      }
                    ],
                    "id": 1061,
                    "name": "Return",
                    "src": "8769:31:3"
                  }
                ],
                "id": 1062,
                "name": "Block",
                "src": "8759:48:3"
              }
            ],
            "id": 1063,
            "name": "FunctionDefinition",
            "src": "8640:167:3"
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
              "scope": 1374,
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
                      "scope": 1131,
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
                        "id": 1064,
                        "name": "ElementaryTypeName",
                        "src": "8848:7:3"
                      }
                    ],
                    "id": 1065,
                    "name": "VariableDeclaration",
                    "src": "8848:18:3"
                  }
                ],
                "id": 1066,
                "name": "ParameterList",
                "src": "8847:20:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalTokenIndex",
                      "scope": 1131,
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
                        "id": 1067,
                        "name": "ElementaryTypeName",
                        "src": "8926:4:3"
                      }
                    ],
                    "id": 1068,
                    "name": "VariableDeclaration",
                    "src": "8926:25:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalAmount",
                      "scope": 1131,
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
                        "id": 1069,
                        "name": "ElementaryTypeName",
                        "src": "8965:4:3"
                      }
                    ],
                    "id": 1070,
                    "name": "VariableDeclaration",
                    "src": "8965:21:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_interestRate",
                      "scope": 1131,
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
                        "id": 1071,
                        "name": "ElementaryTypeName",
                        "src": "9000:4:3"
                      }
                    ],
                    "id": 1072,
                    "name": "VariableDeclaration",
                    "src": "9000:18:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitType",
                      "scope": 1131,
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
                        "id": 1073,
                        "name": "ElementaryTypeName",
                        "src": "9032:4:3"
                      }
                    ],
                    "id": 1074,
                    "name": "VariableDeclaration",
                    "src": "9032:26:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termLengthInAmortizationUnits",
                      "scope": 1131,
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
                        "id": 1075,
                        "name": "ElementaryTypeName",
                        "src": "9072:4:3"
                      }
                    ],
                    "id": 1076,
                    "name": "VariableDeclaration",
                    "src": "9072:35:3"
                  }
                ],
                "id": 1077,
                "name": "ParameterList",
                "src": "8912:205:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1079
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenIndexShifted",
                          "scope": 1131,
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
                            "id": 1078,
                            "name": "ElementaryTypeName",
                            "src": "9246:7:3"
                          }
                        ],
                        "id": 1079,
                        "name": "VariableDeclaration",
                        "src": "9246:34:3"
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
                              "referencedDeclaration": 1065,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 1080,
                            "name": "Identifier",
                            "src": "9295:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307866663030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 115339776388732929035197660848497720713218148788040405586178452820382218977280",
                              "value": "0xff00000000000000000000000000000000000000000000000000000000000000"
                            },
                            "id": 1081,
                            "name": "Literal",
                            "src": "9308:66:3"
                          }
                        ],
                        "id": 1082,
                        "name": "BinaryOperation",
                        "src": "9295:79:3"
                      }
                    ],
                    "id": 1083,
                    "name": "VariableDeclarationStatement",
                    "src": "9246:128:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1085
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalAmountShifted",
                          "scope": 1131,
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
                            "id": 1084,
                            "name": "ElementaryTypeName",
                            "src": "9466:7:3"
                          }
                        ],
                        "id": 1085,
                        "name": "VariableDeclaration",
                        "src": "9466:30:3"
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
                              "referencedDeclaration": 1065,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 1086,
                            "name": "Identifier",
                            "src": "9511:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830306666666666666666666666666666666666666666666666663030303030303030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 452312848583266388373324160184478149281012038075925309401333206985379676160",
                              "value": "0x00ffffffffffffffffffffffff00000000000000000000000000000000000000"
                            },
                            "id": 1087,
                            "name": "Literal",
                            "src": "9524:66:3"
                          }
                        ],
                        "id": 1088,
                        "name": "BinaryOperation",
                        "src": "9511:79:3"
                      }
                    ],
                    "id": 1089,
                    "name": "VariableDeclarationStatement",
                    "src": "9466:124:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1091
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestRateShifted",
                          "scope": 1131,
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
                            "id": 1090,
                            "name": "ElementaryTypeName",
                            "src": "9678:7:3"
                          }
                        ],
                        "id": 1091,
                        "name": "VariableDeclaration",
                        "src": "9678:27:3"
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
                              "referencedDeclaration": 1065,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 1092,
                            "name": "Identifier",
                            "src": "9720:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030306666666666663030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 5708990430541472603294680414423373113762775040",
                              "value": "0x00000000000000000000000000ffffff00000000000000000000000000000000"
                            },
                            "id": 1093,
                            "name": "Literal",
                            "src": "9733:66:3"
                          }
                        ],
                        "id": 1094,
                        "name": "BinaryOperation",
                        "src": "9720:79:3"
                      }
                    ],
                    "id": 1095,
                    "name": "VariableDeclarationStatement",
                    "src": "9678:121:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1097
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitTypeShifted",
                          "scope": 1131,
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
                            "id": 1096,
                            "name": "ElementaryTypeName",
                            "src": "9894:7:3"
                          }
                        ],
                        "id": 1097,
                        "name": "VariableDeclaration",
                        "src": "9894:35:3"
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
                              "referencedDeclaration": 1065,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 1098,
                            "name": "Identifier",
                            "src": "9944:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030306630303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 319014718988379809496913694467282698240",
                              "value": "0x00000000000000000000000000000000f0000000000000000000000000000000"
                            },
                            "id": 1099,
                            "name": "Literal",
                            "src": "9957:66:3"
                          }
                        ],
                        "id": 1100,
                        "name": "BinaryOperation",
                        "src": "9944:79:3"
                      }
                    ],
                    "id": 1101,
                    "name": "VariableDeclarationStatement",
                    "src": "9894:129:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1103
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnitsShifted",
                          "scope": 1131,
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
                            "id": 1102,
                            "name": "ElementaryTypeName",
                            "src": "10151:7:3"
                          }
                        ],
                        "id": 1103,
                        "name": "VariableDeclaration",
                        "src": "10151:44:3"
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
                              "referencedDeclaration": 1065,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 1104,
                            "name": "Identifier",
                            "src": "10210:10:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830303030303030303030303030303030303030303030303030303030303030303066666666303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 21267323414004995539734129808464936960",
                              "value": "0x000000000000000000000000000000000ffff000000000000000000000000000"
                            },
                            "id": 1105,
                            "name": "Literal",
                            "src": "10223:66:3"
                          }
                        ],
                        "id": 1106,
                        "name": "BinaryOperation",
                        "src": "10210:79:3"
                      }
                    ],
                    "id": 1107,
                    "name": "VariableDeclarationStatement",
                    "src": "10151:138:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1077
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
                          "type": "tuple(uint256,uint256,uint256,uint256,uint256)"
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
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_rational_248_by_1",
                                      "typeString": "int_const 248"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1149,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 1108,
                                "name": "Identifier",
                                "src": "11300:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1079,
                                  "type": "bytes32",
                                  "value": "principalTokenIndexShifted"
                                },
                                "id": 1109,
                                "name": "Identifier",
                                "src": "11314:26:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "323438",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 248",
                                  "value": "248"
                                },
                                "id": 1110,
                                "name": "Literal",
                                "src": "11342:3:3"
                              }
                            ],
                            "id": 1111,
                            "name": "FunctionCall",
                            "src": "11300:46:3"
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
                                    },
                                    {
                                      "typeIdentifier": "t_rational_152_by_1",
                                      "typeString": "int_const 152"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1149,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 1112,
                                "name": "Identifier",
                                "src": "11360:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1085,
                                  "type": "bytes32",
                                  "value": "principalAmountShifted"
                                },
                                "id": 1113,
                                "name": "Identifier",
                                "src": "11374:22:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313532",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 152",
                                  "value": "152"
                                },
                                "id": 1114,
                                "name": "Literal",
                                "src": "11398:3:3"
                              }
                            ],
                            "id": 1115,
                            "name": "FunctionCall",
                            "src": "11360:42:3"
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
                                    },
                                    {
                                      "typeIdentifier": "t_rational_128_by_1",
                                      "typeString": "int_const 128"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1149,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 1116,
                                "name": "Identifier",
                                "src": "11416:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1091,
                                  "type": "bytes32",
                                  "value": "interestRateShifted"
                                },
                                "id": 1117,
                                "name": "Identifier",
                                "src": "11430:19:3"
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
                                "id": 1118,
                                "name": "Literal",
                                "src": "11451:3:3"
                              }
                            ],
                            "id": 1119,
                            "name": "FunctionCall",
                            "src": "11416:39:3"
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
                                    },
                                    {
                                      "typeIdentifier": "t_rational_124_by_1",
                                      "typeString": "int_const 124"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1149,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 1120,
                                "name": "Identifier",
                                "src": "11469:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1097,
                                  "type": "bytes32",
                                  "value": "amortizationUnitTypeShifted"
                                },
                                "id": 1121,
                                "name": "Identifier",
                                "src": "11483:27:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313234",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 124",
                                  "value": "124"
                                },
                                "id": 1122,
                                "name": "Literal",
                                "src": "11512:3:3"
                              }
                            ],
                            "id": 1123,
                            "name": "FunctionCall",
                            "src": "11469:47:3"
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
                                    },
                                    {
                                      "typeIdentifier": "t_rational_108_by_1",
                                      "typeString": "int_const 108"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1149,
                                  "type": "function (bytes32,uint256) pure returns (uint256)",
                                  "value": "bitShiftRight"
                                },
                                "id": 1124,
                                "name": "Identifier",
                                "src": "11530:13:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1103,
                                  "type": "bytes32",
                                  "value": "termLengthInAmortizationUnitsShifted"
                                },
                                "id": 1125,
                                "name": "Identifier",
                                "src": "11544:36:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "313038",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 108",
                                  "value": "108"
                                },
                                "id": 1126,
                                "name": "Literal",
                                "src": "11582:3:3"
                              }
                            ],
                            "id": 1127,
                            "name": "FunctionCall",
                            "src": "11530:56:3"
                          }
                        ],
                        "id": 1128,
                        "name": "TupleExpression",
                        "src": "11286:310:3"
                      }
                    ],
                    "id": 1129,
                    "name": "Return",
                    "src": "11279:317:3"
                  }
                ],
                "id": 1130,
                "name": "Block",
                "src": "9122:2481:3"
              }
            ],
            "id": 1131,
            "name": "FunctionDefinition",
            "src": "8813:2790:3"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "bitShiftRight",
              "payable": false,
              "scope": 1374,
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
                      "scope": 1149,
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
                        "id": 1132,
                        "name": "ElementaryTypeName",
                        "src": "11632:7:3"
                      }
                    ],
                    "id": 1133,
                    "name": "VariableDeclaration",
                    "src": "11632:13:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "amount",
                      "scope": 1149,
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
                        "id": 1134,
                        "name": "ElementaryTypeName",
                        "src": "11647:4:3"
                      }
                    ],
                    "id": 1135,
                    "name": "VariableDeclaration",
                    "src": "11647:11:3"
                  }
                ],
                "id": 1136,
                "name": "ParameterList",
                "src": "11631:28:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 1149,
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
                        "id": 1137,
                        "name": "ElementaryTypeName",
                        "src": "11707:4:3"
                      }
                    ],
                    "id": 1138,
                    "name": "VariableDeclaration",
                    "src": "11707:4:3"
                  }
                ],
                "id": 1139,
                "name": "ParameterList",
                "src": "11706:6:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 1139
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
                                "id": 1140,
                                "name": "ElementaryTypeNameExpression",
                                "src": "11734:4:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1133,
                                  "type": "bytes32",
                                  "value": "value"
                                },
                                "id": 1141,
                                "name": "Identifier",
                                "src": "11739:5:3"
                              }
                            ],
                            "id": 1142,
                            "name": "FunctionCall",
                            "src": "11734:11:3"
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
                                "id": 1143,
                                "name": "Literal",
                                "src": "11748:1:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1135,
                                  "type": "uint256",
                                  "value": "amount"
                                },
                                "id": 1144,
                                "name": "Identifier",
                                "src": "11753:6:3"
                              }
                            ],
                            "id": 1145,
                            "name": "BinaryOperation",
                            "src": "11748:11:3"
                          }
                        ],
                        "id": 1146,
                        "name": "BinaryOperation",
                        "src": "11734:25:3"
                      }
                    ],
                    "id": 1147,
                    "name": "Return",
                    "src": "11727:32:3"
                  }
                ],
                "id": 1148,
                "name": "Block",
                "src": "11717:49:3"
              }
            ],
            "id": 1149,
            "name": "FunctionDefinition",
            "src": "11609:157:3"
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
              "scope": 1374,
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
                      "scope": 1179,
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
                        "src": "11823:4:3"
                      }
                    ],
                    "id": 1151,
                    "name": "VariableDeclaration",
                    "src": "11823:14:3"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 1179,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 731,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 1152,
                        "name": "UserDefinedTypeName",
                        "src": "11847:20:3"
                      }
                    ],
                    "id": 1153,
                    "name": "VariableDeclaration",
                    "src": "11847:27:3"
                  }
                ],
                "id": 1154,
                "name": "ParameterList",
                "src": "11813:67:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "units",
                      "scope": 1179,
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
                        "id": 1155,
                        "name": "ElementaryTypeName",
                        "src": "11915:4:3"
                      }
                    ],
                    "id": 1156,
                    "name": "VariableDeclaration",
                    "src": "11915:10:3"
                  }
                ],
                "id": 1157,
                "name": "ParameterList",
                "src": "11914:12:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1159
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "delta",
                          "scope": 1179,
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
                            "id": 1158,
                            "name": "ElementaryTypeName",
                            "src": "11941:4:3"
                          }
                        ],
                        "id": 1159,
                        "name": "VariableDeclaration",
                        "src": "11941:10:3"
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
                              "referencedDeclaration": 1687,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1151,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 1160,
                                "name": "Identifier",
                                "src": "11954:9:3"
                              }
                            ],
                            "id": 1161,
                            "name": "MemberAccess",
                            "src": "11954:13:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 724,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1153,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 1162,
                                "name": "Identifier",
                                "src": "11968:6:3"
                              }
                            ],
                            "id": 1163,
                            "name": "MemberAccess",
                            "src": "11968:29:3"
                          }
                        ],
                        "id": 1164,
                        "name": "FunctionCall",
                        "src": "11954:44:3"
                      }
                    ],
                    "id": 1165,
                    "name": "VariableDeclarationStatement",
                    "src": "11941:57:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1167
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 1179,
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
                            "id": 1166,
                            "name": "ElementaryTypeName",
                            "src": "12008:4:3"
                          }
                        ],
                        "id": 1167,
                        "name": "VariableDeclaration",
                        "src": "12008:36:3"
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
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1373,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 1168,
                            "name": "Identifier",
                            "src": "12047:34:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amortizationUnitType",
                              "referencedDeclaration": 728,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1153,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 1169,
                                "name": "Identifier",
                                "src": "12082:6:3"
                              }
                            ],
                            "id": 1170,
                            "name": "MemberAccess",
                            "src": "12082:27:3"
                          }
                        ],
                        "id": 1171,
                        "name": "FunctionCall",
                        "src": "12047:63:3"
                      }
                    ],
                    "id": 1172,
                    "name": "VariableDeclarationStatement",
                    "src": "12008:102:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1157
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
                              "referencedDeclaration": 1667,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1159,
                                  "type": "uint256",
                                  "value": "delta"
                                },
                                "id": 1173,
                                "name": "Identifier",
                                "src": "12127:5:3"
                              }
                            ],
                            "id": 1174,
                            "name": "MemberAccess",
                            "src": "12127:9:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1167,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 1175,
                            "name": "Identifier",
                            "src": "12137:31:3"
                          }
                        ],
                        "id": 1176,
                        "name": "FunctionCall",
                        "src": "12127:42:3"
                      }
                    ],
                    "id": 1177,
                    "name": "Return",
                    "src": "12120:49:3"
                  }
                ],
                "id": 1178,
                "name": "Block",
                "src": "11931:245:3"
              }
            ],
            "id": 1179,
            "name": "FunctionDefinition",
            "src": "11772:404:3"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "calculateTotalPrincipalPlusInterest",
              "payable": false,
              "scope": 1374,
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
                      "name": "params",
                      "scope": 1213,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 731,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 1180,
                        "name": "UserDefinedTypeName",
                        "src": "12611:20:3"
                      }
                    ],
                    "id": 1181,
                    "name": "VariableDeclaration",
                    "src": "12611:27:3"
                  }
                ],
                "id": 1182,
                "name": "ParameterList",
                "src": "12601:43:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalPlusInterest",
                      "scope": 1213,
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
                        "id": 1183,
                        "name": "ElementaryTypeName",
                        "src": "12679:4:3"
                      }
                    ],
                    "id": 1184,
                    "name": "VariableDeclaration",
                    "src": "12679:27:3"
                  }
                ],
                "id": 1185,
                "name": "ParameterList",
                "src": "12678:29:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1187
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "interestPayment",
                          "scope": 1213,
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
                            "id": 1186,
                            "name": "ElementaryTypeName",
                            "src": "12979:4:3"
                          }
                        ],
                        "id": 1187,
                        "name": "VariableDeclaration",
                        "src": "12979:20:3"
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
                              "member_name": "div",
                              "referencedDeclaration": 1667,
                              "type": "function (uint256,uint256) pure returns (uint256)"
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
                                      "member_name": "mul",
                                      "referencedDeclaration": 1649,
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
                                          "member_name": "principalAmount",
                                          "referencedDeclaration": 720,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 1181,
                                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 1188,
                                            "name": "Identifier",
                                            "src": "13002:6:3"
                                          }
                                        ],
                                        "id": 1189,
                                        "name": "MemberAccess",
                                        "src": "13002:22:3"
                                      }
                                    ],
                                    "id": 1190,
                                    "name": "MemberAccess",
                                    "src": "13002:39:3"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "interestRate",
                                      "referencedDeclaration": 722,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 1181,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 1191,
                                        "name": "Identifier",
                                        "src": "13042:6:3"
                                      }
                                    ],
                                    "id": 1192,
                                    "name": "MemberAccess",
                                    "src": "13042:19:3"
                                  }
                                ],
                                "id": 1193,
                                "name": "FunctionCall",
                                "src": "13002:60:3"
                              }
                            ],
                            "id": 1194,
                            "name": "MemberAccess",
                            "src": "13002:77:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 761,
                              "type": "uint256",
                              "value": "INTEREST_RATE_SCALING_FACTOR"
                            },
                            "id": 1195,
                            "name": "Identifier",
                            "src": "13080:28:3"
                          }
                        ],
                        "id": 1196,
                        "name": "FunctionCall",
                        "src": "13002:107:3"
                      }
                    ],
                    "id": 1197,
                    "name": "VariableDeclarationStatement",
                    "src": "12979:130:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1199
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "totalInterest",
                          "scope": 1213,
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
                            "id": 1198,
                            "name": "ElementaryTypeName",
                            "src": "13120:4:3"
                          }
                        ],
                        "id": 1199,
                        "name": "VariableDeclaration",
                        "src": "13120:18:3"
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
                              "referencedDeclaration": 1649,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1187,
                                  "type": "uint256",
                                  "value": "interestPayment"
                                },
                                "id": 1200,
                                "name": "Identifier",
                                "src": "13141:15:3"
                              }
                            ],
                            "id": 1201,
                            "name": "MemberAccess",
                            "src": "13141:19:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termLengthInAmortizationUnits",
                              "referencedDeclaration": 730,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1181,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 1202,
                                "name": "Identifier",
                                "src": "13161:6:3"
                              }
                            ],
                            "id": 1203,
                            "name": "MemberAccess",
                            "src": "13161:36:3"
                          }
                        ],
                        "id": 1204,
                        "name": "FunctionCall",
                        "src": "13141:57:3"
                      }
                    ],
                    "id": 1205,
                    "name": "VariableDeclarationStatement",
                    "src": "13120:78:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1185
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
                              "member_name": "add",
                              "referencedDeclaration": 1711,
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
                                  "member_name": "principalAmount",
                                  "referencedDeclaration": 720,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1181,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 1206,
                                    "name": "Identifier",
                                    "src": "13216:6:3"
                                  }
                                ],
                                "id": 1207,
                                "name": "MemberAccess",
                                "src": "13216:22:3"
                              }
                            ],
                            "id": 1208,
                            "name": "MemberAccess",
                            "src": "13216:26:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1199,
                              "type": "uint256",
                              "value": "totalInterest"
                            },
                            "id": 1209,
                            "name": "Identifier",
                            "src": "13243:13:3"
                          }
                        ],
                        "id": 1210,
                        "name": "FunctionCall",
                        "src": "13216:41:3"
                      }
                    ],
                    "id": 1211,
                    "name": "Return",
                    "src": "13209:48:3"
                  }
                ],
                "id": 1212,
                "name": "Block",
                "src": "12712:552:3"
              }
            ],
            "id": 1213,
            "name": "FunctionDefinition",
            "src": "12557:707:3"
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
              "scope": 1374,
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
                      "scope": 1321,
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
                        "id": 1214,
                        "name": "ElementaryTypeName",
                        "src": "13315:7:3"
                      }
                    ],
                    "id": 1215,
                    "name": "VariableDeclaration",
                    "src": "13315:19:3"
                  }
                ],
                "id": 1216,
                "name": "ParameterList",
                "src": "13305:35:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 1321,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "SimpleInterestParams",
                          "referencedDeclaration": 731,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 1217,
                        "name": "UserDefinedTypeName",
                        "src": "13375:20:3"
                      }
                    ],
                    "id": 1218,
                    "name": "VariableDeclaration",
                    "src": "13375:27:3"
                  }
                ],
                "id": 1219,
                "name": "ParameterList",
                "src": "13374:29:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        1221
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "parameters",
                          "scope": 1321,
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
                            "id": 1220,
                            "name": "ElementaryTypeName",
                            "src": "13418:7:3"
                          }
                        ],
                        "id": 1221,
                        "name": "VariableDeclaration",
                        "src": "13418:18:3"
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
                              "referencedDeclaration": 425,
                              "type": "function (bytes32) view external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 767,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 1222,
                                "name": "Identifier",
                                "src": "13439:12:3"
                              }
                            ],
                            "id": 1223,
                            "name": "MemberAccess",
                            "src": "13439:39:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1215,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 1224,
                            "name": "Identifier",
                            "src": "13479:11:3"
                          }
                        ],
                        "id": 1225,
                        "name": "FunctionCall",
                        "src": "13439:52:3"
                      }
                    ],
                    "id": 1226,
                    "name": "VariableDeclarationStatement",
                    "src": "13418:73:3"
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
                          "name": "principalTokenIndex",
                          "scope": 1321,
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
                            "id": 1227,
                            "name": "ElementaryTypeName",
                            "src": "13582:4:3"
                          }
                        ],
                        "id": 1228,
                        "name": "VariableDeclaration",
                        "src": "13582:24:3"
                      }
                    ],
                    "id": 1229,
                    "name": "VariableDeclarationStatement",
                    "src": "13582:24:3"
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
                          "name": "principalAmount",
                          "scope": 1321,
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
                            "id": 1230,
                            "name": "ElementaryTypeName",
                            "src": "13689:4:3"
                          }
                        ],
                        "id": 1231,
                        "name": "VariableDeclaration",
                        "src": "13689:20:3"
                      }
                    ],
                    "id": 1232,
                    "name": "VariableDeclarationStatement",
                    "src": "13689:20:3"
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
                          "scope": 1321,
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
                            "id": 1233,
                            "name": "ElementaryTypeName",
                            "src": "13779:4:3"
                          }
                        ],
                        "id": 1234,
                        "name": "VariableDeclaration",
                        "src": "13779:17:3"
                      }
                    ],
                    "id": 1235,
                    "name": "VariableDeclarationStatement",
                    "src": "13779:17:3"
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
                          "name": "rawAmortizationUnitType",
                          "scope": 1321,
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
                            "id": 1236,
                            "name": "ElementaryTypeName",
                            "src": "13897:4:3"
                          }
                        ],
                        "id": 1237,
                        "name": "VariableDeclaration",
                        "src": "13897:28:3"
                      }
                    ],
                    "id": 1238,
                    "name": "VariableDeclarationStatement",
                    "src": "13897:28:3"
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
                          "scope": 1321,
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
                            "id": 1239,
                            "name": "ElementaryTypeName",
                            "src": "14032:4:3"
                          }
                        ],
                        "id": 1240,
                        "name": "VariableDeclaration",
                        "src": "14032:34:3"
                      }
                    ],
                    "id": 1241,
                    "name": "VariableDeclarationStatement",
                    "src": "14032:34:3"
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
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1228,
                                  "type": "uint256",
                                  "value": "principalTokenIndex"
                                },
                                "id": 1242,
                                "name": "Identifier",
                                "src": "14078:19:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1231,
                                  "type": "uint256",
                                  "value": "principalAmount"
                                },
                                "id": 1243,
                                "name": "Identifier",
                                "src": "14099:15:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1234,
                                  "type": "uint256",
                                  "value": "interestRate"
                                },
                                "id": 1244,
                                "name": "Identifier",
                                "src": "14116:12:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1237,
                                  "type": "uint256",
                                  "value": "rawAmortizationUnitType"
                                },
                                "id": 1245,
                                "name": "Identifier",
                                "src": "14130:23:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1240,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 1246,
                                "name": "Identifier",
                                "src": "14155:29:3"
                              }
                            ],
                            "id": 1247,
                            "name": "TupleExpression",
                            "src": "14077:108:3"
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
                              "type": "tuple(uint256,uint256,uint256,uint256,uint256)",
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
                                  "referencedDeclaration": 1131,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256,uint256,uint256)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 1248,
                                "name": "Identifier",
                                "src": "14200:25:3"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1221,
                                  "type": "bytes32",
                                  "value": "parameters"
                                },
                                "id": 1249,
                                "name": "Identifier",
                                "src": "14226:10:3"
                              }
                            ],
                            "id": 1250,
                            "name": "FunctionCall",
                            "src": "14200:37:3"
                          }
                        ],
                        "id": 1251,
                        "name": "Assignment",
                        "src": "14077:160:3"
                      }
                    ],
                    "id": 1252,
                    "name": "ExpressionStatement",
                    "src": "14077:160:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1254
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenAddress",
                          "scope": 1321,
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
                            "id": 1253,
                            "name": "ElementaryTypeName",
                            "src": "14248:7:3"
                          }
                        ],
                        "id": 1254,
                        "name": "VariableDeclaration",
                        "src": "14248:29:3"
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
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "getTokenAddressByIndex",
                              "referencedDeclaration": 669,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 769,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 1255,
                                "name": "Identifier",
                                "src": "14292:13:3"
                              }
                            ],
                            "id": 1256,
                            "name": "MemberAccess",
                            "src": "14292:36:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1228,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 1257,
                            "name": "Identifier",
                            "src": "14329:19:3"
                          }
                        ],
                        "id": 1258,
                        "name": "FunctionCall",
                        "src": "14292:57:3"
                      }
                    ],
                    "id": 1259,
                    "name": "VariableDeclarationStatement",
                    "src": "14248:101:3"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1260,
                            "name": "Identifier",
                            "src": "14428:7:3"
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
                                  "referencedDeclaration": 1254,
                                  "type": "address",
                                  "value": "principalTokenAddress"
                                },
                                "id": 1261,
                                "name": "Identifier",
                                "src": "14436:21:3"
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
                                    "id": 1262,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "14461:7:3"
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
                                    "id": 1263,
                                    "name": "Literal",
                                    "src": "14469:1:3"
                                  }
                                ],
                                "id": 1264,
                                "name": "FunctionCall",
                                "src": "14461:10:3"
                              }
                            ],
                            "id": 1265,
                            "name": "BinaryOperation",
                            "src": "14436:35:3"
                          }
                        ],
                        "id": 1266,
                        "name": "FunctionCall",
                        "src": "14428:44:3"
                      }
                    ],
                    "id": 1267,
                    "name": "ExpressionStatement",
                    "src": "14428:44:3"
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
                              "referencedDeclaration": 1783,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 1268,
                            "name": "Identifier",
                            "src": "14585:7:3"
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
                                  "referencedDeclaration": 1237,
                                  "type": "uint256",
                                  "value": "rawAmortizationUnitType"
                                },
                                "id": 1269,
                                "name": "Identifier",
                                "src": "14593:23:3"
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
                                          "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                          "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(uint256)",
                                      "value": "uint"
                                    },
                                    "id": 1270,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "14620:4:3"
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
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 713,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 1271,
                                        "name": "Identifier",
                                        "src": "14625:20:3"
                                      }
                                    ],
                                    "id": 1272,
                                    "name": "MemberAccess",
                                    "src": "14625:26:3"
                                  }
                                ],
                                "id": 1273,
                                "name": "FunctionCall",
                                "src": "14620:32:3"
                              }
                            ],
                            "id": 1274,
                            "name": "BinaryOperation",
                            "src": "14593:59:3"
                          }
                        ],
                        "id": 1275,
                        "name": "FunctionCall",
                        "src": "14585:68:3"
                      }
                    ],
                    "id": 1276,
                    "name": "ExpressionStatement",
                    "src": "14585:68:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1278
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 1321,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "contractScope": null,
                              "name": "AmortizationUnitType",
                              "referencedDeclaration": 713,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "id": 1277,
                            "name": "UserDefinedTypeName",
                            "src": "14664:20:3"
                          }
                        ],
                        "id": 1278,
                        "name": "VariableDeclaration",
                        "src": "14664:41:3"
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
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
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
                              "referencedDeclaration": 713,
                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                              "value": "AmortizationUnitType"
                            },
                            "id": 1279,
                            "name": "Identifier",
                            "src": "14708:20:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1237,
                              "type": "uint256",
                              "value": "rawAmortizationUnitType"
                            },
                            "id": 1280,
                            "name": "Identifier",
                            "src": "14729:23:3"
                          }
                        ],
                        "id": 1281,
                        "name": "FunctionCall",
                        "src": "14708:45:3"
                      }
                    ],
                    "id": 1282,
                    "name": "VariableDeclarationStatement",
                    "src": "14664:89:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1284
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 1321,
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
                            "id": 1283,
                            "name": "ElementaryTypeName",
                            "src": "14764:4:3"
                          }
                        ],
                        "id": 1284,
                        "name": "VariableDeclaration",
                        "src": "14764:36:3"
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
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1373,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 1285,
                            "name": "Identifier",
                            "src": "14815:34:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1278,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 1286,
                            "name": "Identifier",
                            "src": "14850:20:3"
                          }
                        ],
                        "id": 1287,
                        "name": "FunctionCall",
                        "src": "14815:56:3"
                      }
                    ],
                    "id": 1288,
                    "name": "VariableDeclarationStatement",
                    "src": "14764:107:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1290
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceBlockTimestamp",
                          "scope": 1321,
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
                            "id": 1289,
                            "name": "ElementaryTypeName",
                            "src": "14881:4:3"
                          }
                        ],
                        "id": 1290,
                        "name": "VariableDeclaration",
                        "src": "14881:27:3"
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
                              "referencedDeclaration": 458,
                              "type": "function (bytes32) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 767,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 1291,
                                "name": "Identifier",
                                "src": "14923:12:3"
                              }
                            ],
                            "id": 1292,
                            "name": "MemberAccess",
                            "src": "14923:38:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1215,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 1293,
                            "name": "Identifier",
                            "src": "14962:11:3"
                          }
                        ],
                        "id": 1294,
                        "name": "FunctionCall",
                        "src": "14923:51:3"
                      }
                    ],
                    "id": 1295,
                    "name": "VariableDeclarationStatement",
                    "src": "14881:93:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1297
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInSeconds",
                          "scope": 1321,
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
                            "id": 1296,
                            "name": "ElementaryTypeName",
                            "src": "14984:4:3"
                          }
                        ],
                        "id": 1297,
                        "name": "VariableDeclaration",
                        "src": "14984:24:3"
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
                              "referencedDeclaration": 1649,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1240,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 1298,
                                "name": "Identifier",
                                "src": "15023:29:3"
                              }
                            ],
                            "id": 1299,
                            "name": "MemberAccess",
                            "src": "15023:33:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1284,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 1300,
                            "name": "Identifier",
                            "src": "15057:31:3"
                          }
                        ],
                        "id": 1301,
                        "name": "FunctionCall",
                        "src": "15023:66:3"
                      }
                    ],
                    "id": 1302,
                    "name": "VariableDeclarationStatement",
                    "src": "14984:105:3"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        1304
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termEndUnixTimestamp",
                          "scope": 1321,
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
                            "id": 1303,
                            "name": "ElementaryTypeName",
                            "src": "15099:4:3"
                          }
                        ],
                        "id": 1304,
                        "name": "VariableDeclaration",
                        "src": "15099:25:3"
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
                              "referencedDeclaration": 1711,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1297,
                                  "type": "uint256",
                                  "value": "termLengthInSeconds"
                                },
                                "id": 1305,
                                "name": "Identifier",
                                "src": "15139:19:3"
                              }
                            ],
                            "id": 1306,
                            "name": "MemberAccess",
                            "src": "15139:23:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1290,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 1307,
                            "name": "Identifier",
                            "src": "15163:22:3"
                          }
                        ],
                        "id": 1308,
                        "name": "FunctionCall",
                        "src": "15139:47:3"
                      }
                    ],
                    "id": 1309,
                    "name": "VariableDeclarationStatement",
                    "src": "15099:87:3"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 1219
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
                            "principalTokenAddress",
                            "principalAmount",
                            "interestRate",
                            "termStartUnixTimestamp",
                            "termEndUnixTimestamp",
                            "amortizationUnitType",
                            "termLengthInAmortizationUnits"
                          ],
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 731,
                              "type": "type(struct SimpleInterestTermsContract.SimpleInterestParams storage pointer)",
                              "value": "SimpleInterestParams"
                            },
                            "id": 1310,
                            "name": "Identifier",
                            "src": "15204:20:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1254,
                              "type": "address",
                              "value": "principalTokenAddress"
                            },
                            "id": 1311,
                            "name": "Identifier",
                            "src": "15262:21:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1231,
                              "type": "uint256",
                              "value": "principalAmount"
                            },
                            "id": 1312,
                            "name": "Identifier",
                            "src": "15314:15:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1234,
                              "type": "uint256",
                              "value": "interestRate"
                            },
                            "id": 1313,
                            "name": "Identifier",
                            "src": "15357:12:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1290,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 1314,
                            "name": "Identifier",
                            "src": "15407:22:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1304,
                              "type": "uint256",
                              "value": "termEndUnixTimestamp"
                            },
                            "id": 1315,
                            "name": "Identifier",
                            "src": "15465:20:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1278,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 1316,
                            "name": "Identifier",
                            "src": "15521:20:3"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1240,
                              "type": "uint256",
                              "value": "termLengthInAmortizationUnits"
                            },
                            "id": 1317,
                            "name": "Identifier",
                            "src": "15586:29:3"
                          }
                        ],
                        "id": 1318,
                        "name": "FunctionCall",
                        "src": "15204:422:3"
                      }
                    ],
                    "id": 1319,
                    "name": "Return",
                    "src": "15197:429:3"
                  }
                ],
                "id": 1320,
                "name": "Block",
                "src": "13408:2225:3"
              }
            ],
            "id": 1321,
            "name": "FunctionDefinition",
            "src": "13270:2363:3"
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
              "scope": 1374,
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
                      "scope": 1373,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "contractScope": null,
                          "name": "AmortizationUnitType",
                          "referencedDeclaration": 713,
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                        },
                        "id": 1322,
                        "name": "UserDefinedTypeName",
                        "src": "15683:20:3"
                      }
                    ],
                    "id": 1323,
                    "name": "VariableDeclaration",
                    "src": "15683:41:3"
                  }
                ],
                "id": 1324,
                "name": "ParameterList",
                "src": "15682:43:3"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitLengthInSeconds",
                      "scope": 1373,
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
                        "id": 1325,
                        "name": "ElementaryTypeName",
                        "src": "15773:4:3"
                      }
                    ],
                    "id": 1326,
                    "name": "VariableDeclaration",
                    "src": "15773:37:3"
                  }
                ],
                "id": 1327,
                "name": "ParameterList",
                "src": "15772:39:3"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
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
                              "referencedDeclaration": 1323,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 1328,
                            "name": "Identifier",
                            "src": "15830:20:3"
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
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 713,
                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                  "value": "AmortizationUnitType"
                                },
                                "id": 1329,
                                "name": "Identifier",
                                "src": "15854:20:3"
                              }
                            ],
                            "id": 1330,
                            "name": "MemberAccess",
                            "src": "15854:26:3"
                          }
                        ],
                        "id": 1331,
                        "name": "BinaryOperation",
                        "src": "15830:50:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 1327
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 736,
                                  "type": "uint256",
                                  "value": "HOUR_LENGTH_IN_SECONDS"
                                },
                                "id": 1332,
                                "name": "Identifier",
                                "src": "15903:22:3"
                              }
                            ],
                            "id": 1333,
                            "name": "Return",
                            "src": "15896:29:3"
                          }
                        ],
                        "id": 1334,
                        "name": "Block",
                        "src": "15882:54:3"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
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
                                  "referencedDeclaration": 1323,
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                  "value": "amortizationUnitType"
                                },
                                "id": 1335,
                                "name": "Identifier",
                                "src": "15946:20:3"
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
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 713,
                                      "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                      "value": "AmortizationUnitType"
                                    },
                                    "id": 1336,
                                    "name": "Identifier",
                                    "src": "15970:20:3"
                                  }
                                ],
                                "id": 1337,
                                "name": "MemberAccess",
                                "src": "15970:25:3"
                              }
                            ],
                            "id": 1338,
                            "name": "BinaryOperation",
                            "src": "15946:49:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 1327
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 741,
                                      "type": "uint256",
                                      "value": "DAY_LENGTH_IN_SECONDS"
                                    },
                                    "id": 1339,
                                    "name": "Identifier",
                                    "src": "16018:21:3"
                                  }
                                ],
                                "id": 1340,
                                "name": "Return",
                                "src": "16011:28:3"
                              }
                            ],
                            "id": 1341,
                            "name": "Block",
                            "src": "15997:53:3"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                    "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
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
                                      "referencedDeclaration": 1323,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 1342,
                                    "name": "Identifier",
                                    "src": "16060:20:3"
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
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 713,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 1343,
                                        "name": "Identifier",
                                        "src": "16084:20:3"
                                      }
                                    ],
                                    "id": 1344,
                                    "name": "MemberAccess",
                                    "src": "16084:26:3"
                                  }
                                ],
                                "id": 1345,
                                "name": "BinaryOperation",
                                "src": "16060:50:3"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 1327
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 746,
                                          "type": "uint256",
                                          "value": "WEEK_LENGTH_IN_SECONDS"
                                        },
                                        "id": 1346,
                                        "name": "Identifier",
                                        "src": "16133:22:3"
                                      }
                                    ],
                                    "id": 1347,
                                    "name": "Return",
                                    "src": "16126:29:3"
                                  }
                                ],
                                "id": 1348,
                                "name": "Block",
                                "src": "16112:54:3"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                        "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
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
                                          "referencedDeclaration": 1323,
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                          "value": "amortizationUnitType"
                                        },
                                        "id": 1349,
                                        "name": "Identifier",
                                        "src": "16176:20:3"
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
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 713,
                                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                              "value": "AmortizationUnitType"
                                            },
                                            "id": 1350,
                                            "name": "Identifier",
                                            "src": "16200:20:3"
                                          }
                                        ],
                                        "id": 1351,
                                        "name": "MemberAccess",
                                        "src": "16200:27:3"
                                      }
                                    ],
                                    "id": 1352,
                                    "name": "BinaryOperation",
                                    "src": "16176:51:3"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 1327
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 751,
                                              "type": "uint256",
                                              "value": "MONTH_LENGTH_IN_SECONDS"
                                            },
                                            "id": 1353,
                                            "name": "Identifier",
                                            "src": "16250:23:3"
                                          }
                                        ],
                                        "id": 1354,
                                        "name": "Return",
                                        "src": "16243:30:3"
                                      }
                                    ],
                                    "id": 1355,
                                    "name": "Block",
                                    "src": "16229:55:3"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$713",
                                            "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
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
                                              "referencedDeclaration": 1323,
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                              "value": "amortizationUnitType"
                                            },
                                            "id": 1356,
                                            "name": "Identifier",
                                            "src": "16294:20:3"
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
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 713,
                                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                  "value": "AmortizationUnitType"
                                                },
                                                "id": 1357,
                                                "name": "Identifier",
                                                "src": "16318:20:3"
                                              }
                                            ],
                                            "id": 1358,
                                            "name": "MemberAccess",
                                            "src": "16318:26:3"
                                          }
                                        ],
                                        "id": 1359,
                                        "name": "BinaryOperation",
                                        "src": "16294:50:3"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 1327
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 756,
                                                  "type": "uint256",
                                                  "value": "YEAR_LENGTH_IN_SECONDS"
                                                },
                                                "id": 1360,
                                                "name": "Identifier",
                                                "src": "16367:22:3"
                                              }
                                            ],
                                            "id": 1361,
                                            "name": "Return",
                                            "src": "16360:29:3"
                                          }
                                        ],
                                        "id": 1362,
                                        "name": "Block",
                                        "src": "16346:54:3"
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
                                                      "referencedDeclaration": 1784,
                                                      "type": "function () pure",
                                                      "value": "revert"
                                                    },
                                                    "id": 1363,
                                                    "name": "Identifier",
                                                    "src": "16420:6:3"
                                                  }
                                                ],
                                                "id": 1364,
                                                "name": "FunctionCall",
                                                "src": "16420:8:3"
                                              }
                                            ],
                                            "id": 1365,
                                            "name": "ExpressionStatement",
                                            "src": "16420:8:3"
                                          }
                                        ],
                                        "id": 1366,
                                        "name": "Block",
                                        "src": "16406:33:3"
                                      }
                                    ],
                                    "id": 1367,
                                    "name": "IfStatement",
                                    "src": "16290:149:3"
                                  }
                                ],
                                "id": 1368,
                                "name": "IfStatement",
                                "src": "16172:267:3"
                              }
                            ],
                            "id": 1369,
                            "name": "IfStatement",
                            "src": "16056:383:3"
                          }
                        ],
                        "id": 1370,
                        "name": "IfStatement",
                        "src": "15942:497:3"
                      }
                    ],
                    "id": 1371,
                    "name": "IfStatement",
                    "src": "15826:613:3"
                  }
                ],
                "id": 1372,
                "name": "Block",
                "src": "15816:629:3"
              }
            ],
            "id": 1373,
            "name": "FunctionDefinition",
            "src": "15639:806:3"
          }
        ],
        "id": 1374,
        "name": "ContractDefinition",
        "src": "759:15688:3"
      }
    ],
    "id": 1375,
    "name": "SourceUnit",
    "src": "584:15864:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x04f962e11ca5e351d90cf8d3e004ed46d2e0813f"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-27T18:03:58.788Z"
}