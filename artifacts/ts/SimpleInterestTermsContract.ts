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
          "name": "_principalPlusInterest",
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
          "name": "principalPlusInterest",
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
  "bytecode": "0x6060604052341561000f57600080fd5b6040516080806114128339810160405280805190602001909190805190602001909190805190602001909190805190602001909190505082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555083600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506112b58061015d6000396000f3006060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100eb5780630776298214610126578063079dd4b71461014f57806320863894146101a45780632f866f73146101cd57806340018a0d146102225780635f0280ba1461024b5780636f69c96f146102f05780636fa9d056146103195780638b47e58a1461036e578063977a5e641461039757806399114d84146103f55780639d23c4c714610439578063ed8907d71461048e578063fd127a41146104de578063fd40d52e14610507575b600080fd5b34156100f657600080fd5b610110600480803560001916906020019091905050610542565b6040518082815260200191505060405180910390f35b341561013157600080fd5b610139610566565b6040518082815260200191505060405180910390f35b341561015a57600080fd5b61016261056f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101af57600080fd5b6101b7610595565b6040518082815260200191505060405180910390f35b34156101d857600080fd5b6101e06105a1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022d57600080fd5b6102356105c7565b6040518082815260200191505060405180910390f35b341561025657600080fd5b6102d660048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105d3565b604051808215151515815260200191505060405180910390f35b34156102fb57600080fd5b6103036106df565b6040518082815260200191505060405180910390f35b341561032457600080fd5b61032c6106e5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037957600080fd5b61038161070b565b6040518082815260200191505060405180910390f35b34156103a257600080fd5b6103db60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610710565b604051808215151515815260200191505060405180910390f35b341561040057600080fd5b610423600480803560001916906020019091908035906020019091905050610a00565b6040518082815260200191505060405180910390f35b341561044457600080fd5b61044c610b81565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561049957600080fd5b6104b3600480803560001916906020019091905050610ba7565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b34156104e957600080fd5b6104f1610cea565b6040518082815260200191505060405180910390f35b341561051257600080fd5b61052c600480803560001916906020019091905050610cf7565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b60006105dd611231565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063957600080fd5b61064287610d0f565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106d0576106a9846000808a600019166000191681526020019081526020016000205461106d90919063ffffffff16565b600080896000191660001916815260200190815260200160002081905550600191506106d5565b600091505b5095945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600581565b600080600080600080600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636be39bda8b6000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b151561081857600080fd5b6102c65a03f1151561082957600080fd5b50505060405180519060200180519050809750819850505061084a86610ba7565b80955081965082975083985050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b7866000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156108f357600080fd5b6102c65a03f1151561090457600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561094d5750600583105b801561098457503073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16145b156109ee57828173ffffffffffffffffffffffffffffffffffffffff168b600019167fbba1937885face98a3b7f118d96247d6f65d5cbe16fb6482ae966538a356c73e8786604051808381526020018281526020019250505060405180910390a4600197506109f3565b600097505b5050505050505092915050565b6000610a0a611231565b600084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610aae57600080fd5b6102c65a03f11515610abf57600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141515610b0257600080fd5b610b0b86610d0f565b9250826040015185111515610b235760009350610b78565b826060015185101515610b3c5782602001519350610b78565b610b46858461108b565b9150610b758360a00151610b678486602001516110d590919063ffffffff16565b61111090919063ffffffff16565b93505b50505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028d1697507effffffffffffffffffffffffffffff000000000000000000000000000000006001028d1696506ff00000000000000000000000000000006001028d1695506f0ffff0000000000000000000000000006001028d1694507f01000000000000000000000000000000000000000000000000000000000000008860019004811515610c6757fe5b0493507001000000000000000000000000000000008760019004811515610c8a57fe5b0492506f100000000000000000000000000000008660019004811515610cac57fe5b0491506d10000000000000000000000000008560019004811515610ccc57fe5b049050838383839b509b509b509b5050505050505050509193509193565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b610d17611231565b6000806000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8e6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610dc957600080fd5b6102c65a03f11515610dda57600080fd5b505050604051805190509a50610def8b610ba7565b809a50819b50829c50839d5050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b78b6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610e9857600080fd5b6102c65a03f11515610ea957600080fd5b505050604051805190509550600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610ef157600080fd5b600480811115610efd57fe5b8811151515610f0b57600080fd5b876004811115610f1757fe5b9450610f228561112b565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638e6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610fc557600080fd5b6102c65a03f11515610fd657600080fd5b505050604051805190509250610ff584886110d590919063ffffffff16565b915061100a838361106d90919063ffffffff16565b905060c0604051908101604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018a815260200184815260200182815260200186600481111561105257fe5b8152602001888152509b505050505050505050505050919050565b600080828401905083811015151561108157fe5b8091505092915050565b60008060006110a784604001518661121890919063ffffffff16565b91506110b6846080015161112b565b90506110cb818361111090919063ffffffff16565b9250505092915050565b60008060008414156110ea5760009150611109565b82840290508284828115156110fb57fe5b0414151561110557fe5b8091505b5092915050565b600080828481151561111e57fe5b0490508091505092915050565b600080600481111561113957fe5b82600481111561114557fe5b141561115557610e109050611213565b6001600481111561116257fe5b82600481111561116e57fe5b1415611181576018610e10029050611213565b6002600481111561118e57fe5b82600481111561119a57fe5b14156111b05760076018610e1002029050611213565b600360048111156111bd57fe5b8260048111156111c957fe5b14156111df57601e6018610e1002029050611213565b6004808111156111eb57fe5b8260048111156111f757fe5b141561120e5761016d6018610e1002029050611213565b600080fd5b919050565b600082821115151561122657fe5b818303905092915050565b60c060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000600481111561127c57fe5b81526020016000815250905600a165627a7a72305820af98ae125f0130a3f32bf0acc6c0ac618ee6acac41e3d35770bc6328af0cdcea0029",
  "deployedBytecode": "0x6060604052600436106100e6576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806303a896a1146100eb5780630776298214610126578063079dd4b71461014f57806320863894146101a45780632f866f73146101cd57806340018a0d146102225780635f0280ba1461024b5780636f69c96f146102f05780636fa9d056146103195780638b47e58a1461036e578063977a5e641461039757806399114d84146103f55780639d23c4c714610439578063ed8907d71461048e578063fd127a41146104de578063fd40d52e14610507575b600080fd5b34156100f657600080fd5b610110600480803560001916906020019091905050610542565b6040518082815260200191505060405180910390f35b341561013157600080fd5b610139610566565b6040518082815260200191505060405180910390f35b341561015a57600080fd5b61016261056f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156101af57600080fd5b6101b7610595565b6040518082815260200191505060405180910390f35b34156101d857600080fd5b6101e06105a1565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561022d57600080fd5b6102356105c7565b6040518082815260200191505060405180910390f35b341561025657600080fd5b6102d660048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506105d3565b604051808215151515815260200191505060405180910390f35b34156102fb57600080fd5b6103036106df565b6040518082815260200191505060405180910390f35b341561032457600080fd5b61032c6106e5565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561037957600080fd5b61038161070b565b6040518082815260200191505060405180910390f35b34156103a257600080fd5b6103db60048080356000191690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610710565b604051808215151515815260200191505060405180910390f35b341561040057600080fd5b610423600480803560001916906020019091908035906020019091905050610a00565b6040518082815260200191505060405180910390f35b341561044457600080fd5b61044c610b81565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561049957600080fd5b6104b3600480803560001916906020019091905050610ba7565b6040518085815260200184815260200183815260200182815260200194505050505060405180910390f35b34156104e957600080fd5b6104f1610cea565b6040518082815260200191505060405180910390f35b341561051257600080fd5b61052c600480803560001916906020019091905050610cf7565b6040518082815260200191505060405180910390f35b60008060008360001916600019168152602001908152602001600020549050919050565b6018610e100281565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601e6018610e10020281565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60076018610e10020281565b60006105dd611231565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561063957600080fd5b61064287610d0f565b9050806000015173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156106d0576106a9846000808a600019166000191681526020019081526020016000205461106d90919063ffffffff16565b600080896000191660001916815260200190815260200160002081905550600191506106d5565b600091505b5095945050505050565b610e1081565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600581565b600080600080600080600080600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561077857600080fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636be39bda8b6000604051604001526040518263ffffffff167c01000000000000000000000000000000000000000000000000000000000281526004018082600019166000191681526020019150506040805180830381600087803b151561081857600080fd5b6102c65a03f1151561082957600080fd5b50505060405180519060200180519050809750819850505061084a86610ba7565b80955081965082975083985050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b7866000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b15156108f357600080fd5b6102c65a03f1151561090457600080fd5b505050604051805190509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561094d5750600583105b801561098457503073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff16145b156109ee57828173ffffffffffffffffffffffffffffffffffffffff168b600019167fbba1937885face98a3b7f118d96247d6f65d5cbe16fb6482ae966538a356c73e8786604051808381526020018281526020019250505060405180910390a4600197506109f3565b600097505b5050505050505092915050565b6000610a0a611231565b600084600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f6f494c9826000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610aae57600080fd5b6102c65a03f11515610abf57600080fd5b5050506040518051905073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16141515610b0257600080fd5b610b0b86610d0f565b9250826040015185111515610b235760009350610b78565b826060015185101515610b3c5782602001519350610b78565b610b46858461108b565b9150610b758360a00151610b678486602001516110d590919063ffffffff16565b61111090919063ffffffff16565b93505b50505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000806000806000806000806000806000807fff000000000000000000000000000000000000000000000000000000000000006001028d1697507effffffffffffffffffffffffffffff000000000000000000000000000000006001028d1696506ff00000000000000000000000000000006001028d1695506f0ffff0000000000000000000000000006001028d1694507f01000000000000000000000000000000000000000000000000000000000000008860019004811515610c6757fe5b0493507001000000000000000000000000000000008760019004811515610c8a57fe5b0492506f100000000000000000000000000000008660019004811515610cac57fe5b0491506d10000000000000000000000000008560019004811515610ccc57fe5b049050838383839b509b509b509b5050505050505050509193509193565b61016d6018610e10020281565b60006020528060005260406000206000915090505481565b610d17611231565b6000806000806000806000806000806000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663314a522e8e6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610dc957600080fd5b6102c65a03f11515610dda57600080fd5b505050604051805190509a50610def8b610ba7565b809a50819b50829c50839d5050505050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635715c5b78b6000604051602001526040518263ffffffff167c010000000000000000000000000000000000000000000000000000000002815260040180828152602001915050602060405180830381600087803b1515610e9857600080fd5b6102c65a03f11515610ea957600080fd5b505050604051805190509550600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614151515610ef157600080fd5b600480811115610efd57fe5b8811151515610f0b57600080fd5b876004811115610f1757fe5b9450610f228561112b565b9350600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d69dbf638e6000604051602001526040518263ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808260001916600019168152602001915050602060405180830381600087803b1515610fc557600080fd5b6102c65a03f11515610fd657600080fd5b505050604051805190509250610ff584886110d590919063ffffffff16565b915061100a838361106d90919063ffffffff16565b905060c0604051908101604052808773ffffffffffffffffffffffffffffffffffffffff1681526020018a815260200184815260200182815260200186600481111561105257fe5b8152602001888152509b505050505050505050505050919050565b600080828401905083811015151561108157fe5b8091505092915050565b60008060006110a784604001518661121890919063ffffffff16565b91506110b6846080015161112b565b90506110cb818361111090919063ffffffff16565b9250505092915050565b60008060008414156110ea5760009150611109565b82840290508284828115156110fb57fe5b0414151561110557fe5b8091505b5092915050565b600080828481151561111e57fe5b0490508091505092915050565b600080600481111561113957fe5b82600481111561114557fe5b141561115557610e109050611213565b6001600481111561116257fe5b82600481111561116e57fe5b1415611181576018610e10029050611213565b6002600481111561118e57fe5b82600481111561119a57fe5b14156111b05760076018610e1002029050611213565b600360048111156111bd57fe5b8260048111156111c957fe5b14156111df57601e6018610e1002029050611213565b6004808111156111eb57fe5b8260048111156111f757fe5b141561120e5761016d6018610e1002029050611213565b600080fd5b919050565b600082821115151561122657fe5b818303905092915050565b60c060405190810160405280600073ffffffffffffffffffffffffffffffffffffffff1681526020016000815260200160008152602001600081526020016000600481111561127c57fe5b81526020016000815250905600a165627a7a72305820af98ae125f0130a3f32bf0acc6c0ac618ee6acac41e3d35770bc6328af0cdcea0029",
  "sourceMap": "759:13182:9:-;;;2419:381;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2645:13;2617:12;;:42;;;;;;;;;;;;;;;;;;2699:14;2669:13;;:45;;;;;;;;;;;;;;;;;;2738:11;2725:10;;:24;;;;;;;;;;;;;;;;;;2777:16;2759:15;;:34;;;;;;;;;;;;;;;;;;2419:381;;;;759:13182;;;;;;",
  "deployedSourceMap": "759:13182:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8204:167;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1318:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1762:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1473:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1683:32;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1396:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5769:547;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1259:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1793:30;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;917:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3453:1605;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6925:998;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1721:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8377:2036;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1552:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1632:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8204:167;8300:17;8340:11;:24;8352:11;8340:24;;;;;;;;;;;;;;;;;;8333:31;;8204:167;;;:::o;1318:72::-;1388:2;1305:7;1363:27;1318:72;:::o;1762:25::-;;;;;;;;;;;;;:::o;1473:73::-;1544:2;1388;1305:7;1363:27;1520:26;1473:73;:::o;1683:32::-;;;;;;;;;;;;;:::o;1396:71::-;1466:1;1388:2;1305:7;1363:27;1442:25;1396:71;:::o;5769:547::-;5998:13;6027:34;;:::i;:::-;2129:15;;;;;;;;;;;2115:29;;:10;:29;;;2107:38;;;;;;;;6064:39;6091:11;6064:26;:39::i;:::-;6027:76;;6134:6;:28;;;6118:44;;:12;:44;;;6114:173;;;6205:46;6234:16;6205:11;:24;6217:11;6205:24;;;;;;;;;;;;;;;;;;:28;;:46;;;;:::i;:::-;6178:11;:24;6190:11;6178:24;;;;;;;;;;;;;;;;;:73;;;;6272:4;6265:11;;;;6114:173;6304:5;6297:12;;2155:1;5769:547;;;;;;;;:::o;1259:53::-;1305:7;1259:53;:::o;1793:30::-;;;;;;;;;;;;;:::o;917:52::-;968:1;917:52;:::o;3453:1605::-;3594:13;3623:21;3654:31;3784:24;3818:26;3854:25;3889:34;4107:29;2384:10;;;;;;;;;;;2370:24;;:10;:24;;;2362:33;;;;;;;;3739:12;;;;;;;;;;;:21;;;3761:11;3739:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3696:77;;;;;;;;4046:50;4072:23;4046:25;:50::i;:::-;3934:162;;;;;;;;;;;;;;;;4151:13;;;;;;;;;;;:36;;;4188:19;4151:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4107:101;;4630:1;4597:35;;:21;:35;;;;:101;;;;;968:1;4648:20;:50;4597:101;:147;;;;;4739:4;4714:30;;:13;:30;;;4597:147;4593:436;;;4911:20;4833:21;4760:232;;4804:11;4760:232;;;;4872:21;4949:29;4760:232;;;;;;;;;;;;;;;;;;;;;;;;5014:4;5007:11;;;;4593:436;5046:5;5039:12;;2405:1;3453:1605;;;;;;;;;;;:::o;6925:998::-;7113:28;7157:34;;:::i;:::-;7734:13;7083:11;2259:12;;;;;;;;;;;:29;;;2289:11;2259:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2242:59;;2250:4;2242:59;;;2234:68;;;;;;;;7194:39;7221:11;7194:26;:39::i;:::-;7157:76;;7261:6;:29;;;7248:9;:42;;7244:673;;;7443:1;7436:8;;;;7244:673;7478:6;:27;;;7465:9;:40;;7461:456;;;7675:6;:28;;;7668:35;;;;7461:456;7750:51;7783:9;7794:6;7750:32;:51::i;:::-;7734:67;;7822:84;7869:6;:36;;;7822:42;7855:8;7822:6;:28;;;:32;;:42;;;;:::i;:::-;:46;;:84;;;;:::i;:::-;7815:91;;2312:1;6925:998;;;;;;;:::o;1721:34::-;;;;;;;;;;;;;:::o;8377:2036::-;8490:25;8529:27;8570:26;8610:35;8784:34;9013:36;9225:35;9482:44;9885:24;9965:26;10049:25;10131:34;8846:66;8833:79;;:10;:79;8784:128;;9077:66;9064:79;;:10;:79;9013:130;;9288:66;9275:79;;:10;:79;9225:129;;9554:66;9541:79;;:10;:79;9482:138;;9947:8;9917:26;9912:32;;;:43;;;;;;;;9885:70;;10031:8;9999:28;9994:34;;;:45;;;;;;;;9965:74;;10113:8;10082:27;10077:33;;;:44;;;;;;;;10049:72;;10225:8;10185:36;10180:42;;;:53;;;;;;;;10131:102;;10265:19;10298:21;10333:20;10367:29;10244:162;;;;;;;;8377:2036;;;;;;;;;;;;;:::o;1552:73::-;1622:3;1388:2;1305:7;1363:27;1598;1552:73;:::o;1632:44::-;;;;;;;;;;;;;;;;;:::o;10829:2298::-;10934:27;;:::i;:::-;10977:18;11141:24;11289:26;11415:31;11553:34;11764:29;12183:41;12286:36;12403:27;12506:24;12621:25;10998:12;;;;;;;;;;;:39;;;11038:11;10998:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10977:73;;11716:37;11742:10;11716:25;:37::i;:::-;11598:155;;;;;;;;;;;;;;;;11808:13;;;;;;;;;;;:36;;;11845:19;11808:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11764:101;;11985:1;11952:35;;:21;:35;;;;11944:44;;;;;;;;12144:26;12139:32;;;;;;;;12109:26;:62;;12101:71;;;;;;;;12248:26;12227:48;;;;;;;;12183:92;;12337:56;12372:20;12337:34;:56::i;:::-;12286:107;;12445:12;;;;;;;;;;;:38;;;12484:11;12445:51;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12403:93;;12545:66;12579:31;12545:29;:33;;:66;;;;:::i;:::-;12506:105;;12661:47;12685:22;12661:19;:23;;:47;;;;:::i;:::-;12621:87;;12726:394;;;;;;;;;12784:21;12726:394;;;;;;12842:21;12726:394;;;;12901:22;12726:394;;;;12959:20;12726:394;;;;13015:20;12726:394;;;;;;;;;;;;13080:29;12726:394;;;12719:401;;10829:2298;;;;;;;;;;;;;;:::o;1008:129:21:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;10419:404:9:-;10562:10;10588;10655:36;10601:44;10615:6;:29;;;10601:9;:13;;:44;;;;:::i;:::-;10588:57;;10694:63;10729:6;:27;;;10694:34;:63::i;:::-;10655:102;;10774:42;10784:31;10774:5;:9;;:42;;;;:::i;:::-;10767:49;;10419:404;;;;;;:::o;203:173:21:-;261:7;316:9;285:1;280;:6;276:35;;;303:1;296:8;;;;276:35;332:1;328;:5;316:17;;355:1;350;346;:5;;;;;;;;:10;339:18;;;;;;370:1;363:8;;203:173;;;;;;:::o;458:265::-;516:7;605:9;621:1;617;:5;;;;;;;;605:17;;717:1;710:8;;458:265;;;;;:::o;13133:806:9:-;13267:37;13348:26;13324:50;;;;;;;;:20;:50;;;;;;;;;13320:613;;;1305:7;13390:29;;;;13320:613;13464:25;13440:49;;;;;;;;:20;:49;;;;;;;;;13436:497;;;1388:2;1305:7;1363:27;13505:28;;;;13436:497;13578:26;13554:50;;;;;;;;:20;:50;;;;;;;;;13550:383;;;1466:1;1388:2;1305:7;1363:27;1442:25;13620:29;;;;13550:383;13694:27;13670:51;;;;;;;;:20;:51;;;;;;;;;13666:267;;;1544:2;1388;1305:7;1363:27;1520:26;13737:30;;;;13666:267;13812:26;13788:50;;;;;;;;:20;:50;;;;;;;;;13784:149;;;1622:3;1388:2;1305:7;1363:27;1598;13854:29;;;;13784:149;13914:8;;;13133:806;;;;:::o;836:110:21:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;759:13182:9:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\nimport \"zeppelin-solidity/contracts/math/SafeMath.sol\";\nimport \"../DebtRegistry.sol\";\nimport \"../TermsContract.sol\";\nimport \"../TokenRegistry.sol\";\n\n\ncontract SimpleInterestTermsContract is TermsContract {\n    using SafeMath for uint;\n\n    enum AmortizationUnitType { HOURS, DAYS, WEEKS, MONTHS, YEARS }\n    uint public constant NUM_AMORTIZATION_UNIT_TYPES = 5;\n\n    struct SimpleInterestParams {\n        address principalTokenAddress;\n        uint principalPlusInterest;\n        uint termStartUnixTimestamp;\n        uint termEndUnixTimestamp;\n        AmortizationUnitType amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n    }\n\n    uint public constant HOUR_LENGTH_IN_SECONDS = 60 * 60;\n    uint public constant DAY_LENGTH_IN_SECONDS = HOUR_LENGTH_IN_SECONDS * 24;\n    uint public constant WEEK_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 7;\n    uint public constant MONTH_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 30;\n    uint public constant YEAR_LENGTH_IN_SECONDS = DAY_LENGTH_IN_SECONDS * 365;\n\n    mapping (bytes32 => uint) public valueRepaid;\n\n    DebtRegistry public debtRegistry;\n    TokenRegistry public tokenRegistry;\n\n    address public debtKernel;\n    address public repaymentRouter;\n\n    event LogSimpleInterestTermStart(\n        bytes32 indexed agreementId,\n        address indexed principalToken,\n        uint principalPlusInterest,\n        uint indexed amortizationUnitType,\n        uint termLengthInAmortizationUnits\n    );\n\n    modifier onlyRouter() {\n        require(msg.sender == repaymentRouter);\n        _;\n    }\n\n    modifier onlyMappedToThisContract(bytes32 agreementId) {\n        require(address(this) == debtRegistry.getTermsContract(agreementId));\n        _;\n    }\n\n    modifier onlyDebtKernel() {\n        require(msg.sender == debtKernel);\n        _;\n    }\n\n    function SimpleInterestTermsContract(\n        address _debtKernel,\n        address _debtRegistry,\n        address _tokenRegistry,\n        address _repaymentRouter\n    )\n        public\n    {\n        debtRegistry = DebtRegistry(_debtRegistry);\n        tokenRegistry = TokenRegistry(_tokenRegistry);\n\n        debtKernel = _debtKernel;\n        repaymentRouter = _repaymentRouter;\n    }\n\n    /// When called, the registerTermStart function registers the fact that\n    ///    the debt agreement has begun.  Given that the SimpleInterestTermsContract\n    ///    doesn't rely on taking any sorts of actions when the loan term begins,\n    ///    we simply validate DebtKernel is the transaction sender, and return\n    ///    `true` if the debt agreement is associated with this terms contract.\n    /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n    /// @param  debtor address. The debtor in this particular issuance.\n    /// @return _success bool. Acknowledgment of whether\n    function registerTermStart(\n        bytes32 agreementId,\n        address debtor\n    )\n        public\n        onlyDebtKernel\n        returns (bool _success)\n    {\n        address termsContract;\n        bytes32 termsContractParameters;\n\n        (termsContract, termsContractParameters) = debtRegistry.getTerms(agreementId);\n\n        uint principalTokenIndex;\n        uint principalPlusInterest;\n        uint amortizationUnitType;\n        uint termLengthInAmortizationUnits;\n\n        (principalTokenIndex, principalPlusInterest, amortizationUnitType, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(termsContractParameters);\n\n        address principalTokenAddress =\n            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);\n\n        // Returns true (i.e. valid) if the specified principal token is valid,\n        // the specified amortization unit type is valid, and the terms contract\n        // associated with the agreement is this one.  We need not check\n        // if any of the other simple interest parameters are valid, because\n        // it is impossible to encode invalid values for them.\n        if (principalTokenAddress != address(0) &&\n            amortizationUnitType < NUM_AMORTIZATION_UNIT_TYPES &&\n            termsContract == address(this)) {\n            LogSimpleInterestTermStart(\n                agreementId,\n                principalTokenAddress,\n                principalPlusInterest,\n                amortizationUnitType,\n                termLengthInAmortizationUnits\n            );\n\n            return true;\n        }\n\n        return false;\n    }\n\n     /// When called, the registerRepayment function records the debtor's\n     ///  repayment, as well as any auxiliary metadata needed by the contract\n     ///  to determine ex post facto the value repaid (e.g. current USD\n     ///  exchange rate)\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  payer address. The address of the payer.\n     /// @param  beneficiary address. The address of the payment's beneficiary.\n     /// @param  unitsOfRepayment uint. The units-of-value repaid in the transaction.\n     /// @param  tokenAddress address. The address of the token with which the repayment transaction was executed.\n    function registerRepayment(\n        bytes32 agreementId,\n        address payer,\n        address beneficiary,\n        uint256 unitsOfRepayment,\n        address tokenAddress\n    )\n        public\n        onlyRouter\n        returns (bool _success)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n\n        if (tokenAddress == params.principalTokenAddress) {\n            valueRepaid[agreementId] = valueRepaid[agreementId].add(unitsOfRepayment);\n            return true;\n        }\n\n        return false;\n    }\n\n     /// Returns the cumulative units-of-value expected to be repaid given a block's timestamp.\n     ///  Note this is not a constant function -- this value can vary on basis of any number of\n     ///  conditions (e.g. interest rates can be renegotiated if repayments are delinquent).\n     /// @param  agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @param  timestamp uint. The timestamp for which repayment expectation is being queried.\n     /// @return uint256 The cumulative units-of-value expected to be repaid given a block's timestamp.\n    function getExpectedRepaymentValue(\n        bytes32 agreementId,\n        uint256 timestamp\n    )\n        public\n        view\n        onlyMappedToThisContract(agreementId)\n        returns (uint _expectedRepaymentValue)\n    {\n        SimpleInterestParams memory params = unpackParamsForAgreementID(agreementId);\n\n        if (timestamp <= params.termStartUnixTimestamp) {\n            /* The query occurs before the contract was even initialized so the\n            expected value of repayments is 0. */\n            return 0;\n        } else if (timestamp >= params.termEndUnixTimestamp) {\n            /* the query occurs beyond the contract's term, so the expected\n            value of repayment is the full principal plus interest. */\n            return params.principalPlusInterest;\n        } else {\n            uint numUnits = numAmortizationUnitsForTimestamp(timestamp, params);\n            return params.principalPlusInterest.mul(numUnits).div(params.termLengthInAmortizationUnits);\n        }\n    }\n\n     /// Returns the cumulative units-of-value repaid to date.\n     /// @param agreementId bytes32. The agreement id (issuance hash) of the debt agreement to which this pertains.\n     /// @return uint256 The cumulative units-of-value repaid by the specified block timestamp.\n    function getValueRepaidToDate(bytes32 agreementId)\n        public\n        view\n        returns (uint _valueRepaid)\n    {\n        return valueRepaid[agreementId];\n    }\n\n    function unpackParametersFromBytes(bytes32 parameters)\n        public\n        pure\n        returns (\n            uint _principalTokenIndex,\n            uint _principalPlusInterest,\n            uint _amortizationUnitType,\n            uint _termLengthInAmortizationUnits\n        )\n    {\n        // The first byte of the parameters encodes the principal token's index in the\n        // token registry.\n        bytes32 principalTokenIndexShifted =\n            parameters & 0xff00000000000000000000000000000000000000000000000000000000000000;\n        // The subsequent 15 bytes of the parameters encode the total principal + interest\n        bytes32 principalPlusInterestShifted =\n            parameters & 0x00ffffffffffffffffffffffffffffff00000000000000000000000000000000;\n        // The subsequent 4 bits encode the amortization unit type code\n        bytes32 amortizationUnitTypeShifted =\n            parameters & 0x00000000000000000000000000000000f0000000000000000000000000000000;\n        // The subsequent 2 bytes encode the term length, as denominated in\n        // the encoded amortization unit.\n        bytes32 termLengthInAmortizationUnitsShifted =\n            parameters & 0x000000000000000000000000000000000ffff000000000000000000000000000;\n\n        // We bit-shift these values, respectively, 248 bits, 126 bits, 124 bits,\n        // and 108 bits right mathematical operations, so that their 32 byte\n        // integer counterparts correspond to the intended values packed in the 32 byte string\n        uint principalTokenIndex = uint(principalTokenIndexShifted) / 2 ** 248;\n        uint principalPlusInterest = uint(principalPlusInterestShifted) / 2 ** 128;\n        uint amortizationUnitType = uint(amortizationUnitTypeShifted) / 2 ** 124;\n        uint termLengthInAmortizationUnits =\n            uint(termLengthInAmortizationUnitsShifted) / 2 ** 108;\n\n        return (\n            principalTokenIndex,\n            principalPlusInterest,\n            amortizationUnitType,\n            termLengthInAmortizationUnits\n        );\n    }\n\n    function numAmortizationUnitsForTimestamp(\n        uint timestamp,\n        SimpleInterestParams params\n    )\n        internal\n        returns (uint units)\n    {\n        uint delta = timestamp.sub(params.termStartUnixTimestamp);\n        uint amortizationUnitLengthInSeconds = getAmortizationUnitLengthInSeconds(params.amortizationUnitType);\n        return delta.div(amortizationUnitLengthInSeconds);\n    }\n\n    function unpackParamsForAgreementID(\n        bytes32 agreementId\n    )\n        internal\n        returns (SimpleInterestParams params)\n    {\n        bytes32 parameters = debtRegistry.getTermsContractParameters(agreementId);\n\n        // Index of the token used for principal payments in the Token Registry\n        uint principalTokenIndex;\n        // Amount, denominated in the aforementioned token, expected in total principal\n        // plus interest.\n        uint principalPlusInterest;\n        // The amortization unit in which the repayments installments schedule is defined\n        uint amortizationUnitTypeAsUint;\n        // The debt's entire term's length, denominated in the aforementioned amortization units\n        uint termLengthInAmortizationUnits;\n\n        (principalTokenIndex, principalPlusInterest, amortizationUnitTypeAsUint, termLengthInAmortizationUnits) =\n            unpackParametersFromBytes(parameters);\n\n        address principalTokenAddress =\n            tokenRegistry.getTokenAddressByIndex(principalTokenIndex);\n\n        // Ensure that the encoded principal token address is valid\n        require(principalTokenAddress != address(0));\n\n        // Before we cast to `AmortizationUnitType`, ensure that the raw value being stored is valid.\n        require(amortizationUnitTypeAsUint <= uint(AmortizationUnitType.YEARS));\n\n        AmortizationUnitType amortizationUnitType = AmortizationUnitType(amortizationUnitTypeAsUint);\n\n        uint amortizationUnitLengthInSeconds =\n            getAmortizationUnitLengthInSeconds(amortizationUnitType);\n        uint issuanceBlockTimestamp =\n            debtRegistry.getIssuanceBlockTimestamp(agreementId);\n        uint termLengthInSeconds =\n            termLengthInAmortizationUnits.mul(amortizationUnitLengthInSeconds);\n        uint termEndUnixTimestamp =\n            termLengthInSeconds.add(issuanceBlockTimestamp);\n\n        return SimpleInterestParams({\n            principalTokenAddress: principalTokenAddress,\n            principalPlusInterest: principalPlusInterest,\n            termStartUnixTimestamp: issuanceBlockTimestamp,\n            termEndUnixTimestamp: termEndUnixTimestamp,\n            amortizationUnitType: amortizationUnitType,\n            termLengthInAmortizationUnits: termLengthInAmortizationUnits\n        });\n    }\n\n    function getAmortizationUnitLengthInSeconds(AmortizationUnitType amortizationUnitType)\n        internal\n        pure\n        returns (uint _amortizationUnitLengthInSeconds)\n    {\n        if (amortizationUnitType == AmortizationUnitType.HOURS) {\n            return HOUR_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.DAYS) {\n            return DAY_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.WEEKS) {\n            return WEEK_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.MONTHS) {\n            return MONTH_LENGTH_IN_SECONDS;\n        } else if (amortizationUnitType == AmortizationUnitType.YEARS) {\n            return YEAR_LENGTH_IN_SECONDS;\n        } else {\n            revert();\n        }\n    }\n}\n",
  "sourcePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/examples/SimpleInterestTermsContract.sol",
      "exportedSymbols": {
        "SimpleInterestTermsContract": [
          3477
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
        "id": 2860,
        "name": "PragmaDirective",
        "src": "584:23:9"
      },
      {
        "attributes": {
          "SourceUnit": 5343,
          "absolutePath": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "file": "zeppelin-solidity/contracts/math/SafeMath.sol",
          "scope": 3478,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2861,
        "name": "ImportDirective",
        "src": "609:55:9"
      },
      {
        "attributes": {
          "SourceUnit": 1665,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/DebtRegistry.sol",
          "file": "../DebtRegistry.sol",
          "scope": 3478,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2862,
        "name": "ImportDirective",
        "src": "665:29:9"
      },
      {
        "attributes": {
          "SourceUnit": 2107,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TermsContract.sol",
          "file": "../TermsContract.sol",
          "scope": 3478,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2863,
        "name": "ImportDirective",
        "src": "695:30:9"
      },
      {
        "attributes": {
          "SourceUnit": 2197,
          "absolutePath": "/Users/nadavhollander/Documents/Dharma/Development/charta/contracts/TokenRegistry.sol",
          "file": "../TokenRegistry.sol",
          "scope": 3478,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 2864,
        "name": "ImportDirective",
        "src": "726:30:9"
      },
      {
        "attributes": {
          "contractDependencies": [
            2106
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            3477,
            2106
          ],
          "name": "SimpleInterestTermsContract",
          "scope": 3478
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
                  "referencedDeclaration": 2106,
                  "type": "contract TermsContract"
                },
                "id": 2865,
                "name": "UserDefinedTypeName",
                "src": "799:13:9"
              }
            ],
            "id": 2866,
            "name": "InheritanceSpecifier",
            "src": "799:13:9"
          },
          {
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "SafeMath",
                  "referencedDeclaration": 5342,
                  "type": "library SafeMath"
                },
                "id": 2867,
                "name": "UserDefinedTypeName",
                "src": "825:8:9"
              },
              {
                "attributes": {
                  "name": "uint",
                  "type": "uint256"
                },
                "id": 2868,
                "name": "ElementaryTypeName",
                "src": "838:4:9"
              }
            ],
            "id": 2869,
            "name": "UsingForDirective",
            "src": "819:24:9"
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
                "id": 2870,
                "name": "EnumValue",
                "src": "877:5:9"
              },
              {
                "attributes": {
                  "name": "DAYS"
                },
                "id": 2871,
                "name": "EnumValue",
                "src": "884:4:9"
              },
              {
                "attributes": {
                  "name": "WEEKS"
                },
                "id": 2872,
                "name": "EnumValue",
                "src": "890:5:9"
              },
              {
                "attributes": {
                  "name": "MONTHS"
                },
                "id": 2873,
                "name": "EnumValue",
                "src": "897:6:9"
              },
              {
                "attributes": {
                  "name": "YEARS"
                },
                "id": 2874,
                "name": "EnumValue",
                "src": "905:5:9"
              }
            ],
            "id": 2875,
            "name": "EnumDefinition",
            "src": "849:63:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "NUM_AMORTIZATION_UNIT_TYPES",
              "scope": 3477,
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
                "id": 2876,
                "name": "ElementaryTypeName",
                "src": "917:4:9"
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
                "id": 2877,
                "name": "Literal",
                "src": "968:1:9"
              }
            ],
            "id": 2878,
            "name": "VariableDeclaration",
            "src": "917:52:9"
          },
          {
            "attributes": {
              "canonicalName": "SimpleInterestTermsContract.SimpleInterestParams",
              "name": "SimpleInterestParams",
              "scope": 3477,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "constant": false,
                  "name": "principalTokenAddress",
                  "scope": 2891,
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
                    "id": 2879,
                    "name": "ElementaryTypeName",
                    "src": "1014:7:9"
                  }
                ],
                "id": 2880,
                "name": "VariableDeclaration",
                "src": "1014:29:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "principalPlusInterest",
                  "scope": 2891,
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
                    "id": 2881,
                    "name": "ElementaryTypeName",
                    "src": "1053:4:9"
                  }
                ],
                "id": 2882,
                "name": "VariableDeclaration",
                "src": "1053:26:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termStartUnixTimestamp",
                  "scope": 2891,
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
                    "id": 2883,
                    "name": "ElementaryTypeName",
                    "src": "1089:4:9"
                  }
                ],
                "id": 2884,
                "name": "VariableDeclaration",
                "src": "1089:27:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termEndUnixTimestamp",
                  "scope": 2891,
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
                    "id": 2885,
                    "name": "ElementaryTypeName",
                    "src": "1126:4:9"
                  }
                ],
                "id": 2886,
                "name": "VariableDeclaration",
                "src": "1126:25:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "amortizationUnitType",
                  "scope": 2891,
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
                      "referencedDeclaration": 2875,
                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                    },
                    "id": 2887,
                    "name": "UserDefinedTypeName",
                    "src": "1161:20:9"
                  }
                ],
                "id": 2888,
                "name": "VariableDeclaration",
                "src": "1161:41:9"
              },
              {
                "attributes": {
                  "constant": false,
                  "name": "termLengthInAmortizationUnits",
                  "scope": 2891,
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
                    "id": 2889,
                    "name": "ElementaryTypeName",
                    "src": "1212:4:9"
                  }
                ],
                "id": 2890,
                "name": "VariableDeclaration",
                "src": "1212:34:9"
              }
            ],
            "id": 2891,
            "name": "StructDefinition",
            "src": "976:277:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "HOUR_LENGTH_IN_SECONDS",
              "scope": 3477,
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
                "id": 2892,
                "name": "ElementaryTypeName",
                "src": "1259:4:9"
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
                    "id": 2893,
                    "name": "Literal",
                    "src": "1305:2:9"
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
                    "id": 2894,
                    "name": "Literal",
                    "src": "1310:2:9"
                  }
                ],
                "id": 2895,
                "name": "BinaryOperation",
                "src": "1305:7:9"
              }
            ],
            "id": 2896,
            "name": "VariableDeclaration",
            "src": "1259:53:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "DAY_LENGTH_IN_SECONDS",
              "scope": 3477,
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
                "id": 2897,
                "name": "ElementaryTypeName",
                "src": "1318:4:9"
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
                      "referencedDeclaration": 2896,
                      "type": "uint256",
                      "value": "HOUR_LENGTH_IN_SECONDS"
                    },
                    "id": 2898,
                    "name": "Identifier",
                    "src": "1363:22:9"
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
                    "id": 2899,
                    "name": "Literal",
                    "src": "1388:2:9"
                  }
                ],
                "id": 2900,
                "name": "BinaryOperation",
                "src": "1363:27:9"
              }
            ],
            "id": 2901,
            "name": "VariableDeclaration",
            "src": "1318:72:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "WEEK_LENGTH_IN_SECONDS",
              "scope": 3477,
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
                "id": 2902,
                "name": "ElementaryTypeName",
                "src": "1396:4:9"
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
                      "referencedDeclaration": 2901,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2903,
                    "name": "Identifier",
                    "src": "1442:21:9"
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
                    "id": 2904,
                    "name": "Literal",
                    "src": "1466:1:9"
                  }
                ],
                "id": 2905,
                "name": "BinaryOperation",
                "src": "1442:25:9"
              }
            ],
            "id": 2906,
            "name": "VariableDeclaration",
            "src": "1396:71:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "MONTH_LENGTH_IN_SECONDS",
              "scope": 3477,
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
                "id": 2907,
                "name": "ElementaryTypeName",
                "src": "1473:4:9"
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
                      "referencedDeclaration": 2901,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2908,
                    "name": "Identifier",
                    "src": "1520:21:9"
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
                    "id": 2909,
                    "name": "Literal",
                    "src": "1544:2:9"
                  }
                ],
                "id": 2910,
                "name": "BinaryOperation",
                "src": "1520:26:9"
              }
            ],
            "id": 2911,
            "name": "VariableDeclaration",
            "src": "1473:73:9"
          },
          {
            "attributes": {
              "constant": true,
              "name": "YEAR_LENGTH_IN_SECONDS",
              "scope": 3477,
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
                "id": 2912,
                "name": "ElementaryTypeName",
                "src": "1552:4:9"
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
                      "referencedDeclaration": 2901,
                      "type": "uint256",
                      "value": "DAY_LENGTH_IN_SECONDS"
                    },
                    "id": 2913,
                    "name": "Identifier",
                    "src": "1598:21:9"
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
                    "id": 2914,
                    "name": "Literal",
                    "src": "1622:3:9"
                  }
                ],
                "id": 2915,
                "name": "BinaryOperation",
                "src": "1598:27:9"
              }
            ],
            "id": 2916,
            "name": "VariableDeclaration",
            "src": "1552:73:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "valueRepaid",
              "scope": 3477,
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
                    "id": 2917,
                    "name": "ElementaryTypeName",
                    "src": "1641:7:9"
                  },
                  {
                    "attributes": {
                      "name": "uint",
                      "type": "uint256"
                    },
                    "id": 2918,
                    "name": "ElementaryTypeName",
                    "src": "1652:4:9"
                  }
                ],
                "id": 2919,
                "name": "Mapping",
                "src": "1632:25:9"
              }
            ],
            "id": 2920,
            "name": "VariableDeclaration",
            "src": "1632:44:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtRegistry",
              "scope": 3477,
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
                  "referencedDeclaration": 1664,
                  "type": "contract DebtRegistry"
                },
                "id": 2921,
                "name": "UserDefinedTypeName",
                "src": "1683:12:9"
              }
            ],
            "id": 2922,
            "name": "VariableDeclaration",
            "src": "1683:32:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "tokenRegistry",
              "scope": 3477,
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
                  "referencedDeclaration": 2196,
                  "type": "contract TokenRegistry"
                },
                "id": 2923,
                "name": "UserDefinedTypeName",
                "src": "1721:13:9"
              }
            ],
            "id": 2924,
            "name": "VariableDeclaration",
            "src": "1721:34:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "debtKernel",
              "scope": 3477,
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
                "id": 2925,
                "name": "ElementaryTypeName",
                "src": "1762:7:9"
              }
            ],
            "id": 2926,
            "name": "VariableDeclaration",
            "src": "1762:25:9"
          },
          {
            "attributes": {
              "constant": false,
              "name": "repaymentRouter",
              "scope": 3477,
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
                "id": 2927,
                "name": "ElementaryTypeName",
                "src": "1793:7:9"
              }
            ],
            "id": 2928,
            "name": "VariableDeclaration",
            "src": "1793:30:9"
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
                      "scope": 2940,
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
                        "id": 2929,
                        "name": "ElementaryTypeName",
                        "src": "1872:7:9"
                      }
                    ],
                    "id": 2930,
                    "name": "VariableDeclaration",
                    "src": "1872:27:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "principalToken",
                      "scope": 2940,
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
                        "id": 2931,
                        "name": "ElementaryTypeName",
                        "src": "1909:7:9"
                      }
                    ],
                    "id": 2932,
                    "name": "VariableDeclaration",
                    "src": "1909:30:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "principalPlusInterest",
                      "scope": 2940,
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
                        "id": 2933,
                        "name": "ElementaryTypeName",
                        "src": "1949:4:9"
                      }
                    ],
                    "id": 2934,
                    "name": "VariableDeclaration",
                    "src": "1949:26:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": true,
                      "name": "amortizationUnitType",
                      "scope": 2940,
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
                        "id": 2935,
                        "name": "ElementaryTypeName",
                        "src": "1985:4:9"
                      }
                    ],
                    "id": 2936,
                    "name": "VariableDeclaration",
                    "src": "1985:33:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "indexed": false,
                      "name": "termLengthInAmortizationUnits",
                      "scope": 2940,
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
                        "id": 2937,
                        "name": "ElementaryTypeName",
                        "src": "2028:4:9"
                      }
                    ],
                    "id": 2938,
                    "name": "VariableDeclaration",
                    "src": "2028:34:9"
                  }
                ],
                "id": 2939,
                "name": "ParameterList",
                "src": "1862:206:9"
              }
            ],
            "id": 2940,
            "name": "EventDefinition",
            "src": "1830:239:9"
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
                "id": 2941,
                "name": "ParameterList",
                "src": "2094:2:9"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2942,
                            "name": "Identifier",
                            "src": "2107:7:9"
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
                                      "referencedDeclaration": 5485,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2943,
                                    "name": "Identifier",
                                    "src": "2115:3:9"
                                  }
                                ],
                                "id": 2944,
                                "name": "MemberAccess",
                                "src": "2115:10:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2928,
                                  "type": "address",
                                  "value": "repaymentRouter"
                                },
                                "id": 2945,
                                "name": "Identifier",
                                "src": "2129:15:9"
                              }
                            ],
                            "id": 2946,
                            "name": "BinaryOperation",
                            "src": "2115:29:9"
                          }
                        ],
                        "id": 2947,
                        "name": "FunctionCall",
                        "src": "2107:38:9"
                      }
                    ],
                    "id": 2948,
                    "name": "ExpressionStatement",
                    "src": "2107:38:9"
                  },
                  {
                    "id": 2949,
                    "name": "PlaceholderStatement",
                    "src": "2155:1:9"
                  }
                ],
                "id": 2950,
                "name": "Block",
                "src": "2097:66:9"
              }
            ],
            "id": 2951,
            "name": "ModifierDefinition",
            "src": "2075:88:9"
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
                      "scope": 2968,
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
                        "id": 2952,
                        "name": "ElementaryTypeName",
                        "src": "2203:7:9"
                      }
                    ],
                    "id": 2953,
                    "name": "VariableDeclaration",
                    "src": "2203:19:9"
                  }
                ],
                "id": 2954,
                "name": "ParameterList",
                "src": "2202:21:9"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2955,
                            "name": "Identifier",
                            "src": "2234:7:9"
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
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$3477",
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
                                    "id": 2956,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2242:7:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5532,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 2957,
                                    "name": "Identifier",
                                    "src": "2250:4:9"
                                  }
                                ],
                                "id": 2958,
                                "name": "FunctionCall",
                                "src": "2242:13:9"
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
                                      "referencedDeclaration": 1552,
                                      "type": "function (bytes32) view external returns (address)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2922,
                                          "type": "contract DebtRegistry",
                                          "value": "debtRegistry"
                                        },
                                        "id": 2959,
                                        "name": "Identifier",
                                        "src": "2259:12:9"
                                      }
                                    ],
                                    "id": 2960,
                                    "name": "MemberAccess",
                                    "src": "2259:29:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2953,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 2961,
                                    "name": "Identifier",
                                    "src": "2289:11:9"
                                  }
                                ],
                                "id": 2962,
                                "name": "FunctionCall",
                                "src": "2259:42:9"
                              }
                            ],
                            "id": 2963,
                            "name": "BinaryOperation",
                            "src": "2242:59:9"
                          }
                        ],
                        "id": 2964,
                        "name": "FunctionCall",
                        "src": "2234:68:9"
                      }
                    ],
                    "id": 2965,
                    "name": "ExpressionStatement",
                    "src": "2234:68:9"
                  },
                  {
                    "id": 2966,
                    "name": "PlaceholderStatement",
                    "src": "2312:1:9"
                  }
                ],
                "id": 2967,
                "name": "Block",
                "src": "2224:96:9"
              }
            ],
            "id": 2968,
            "name": "ModifierDefinition",
            "src": "2169:151:9"
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
                "id": 2969,
                "name": "ParameterList",
                "src": "2349:2:9"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 2970,
                            "name": "Identifier",
                            "src": "2362:7:9"
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
                                      "referencedDeclaration": 5485,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 2971,
                                    "name": "Identifier",
                                    "src": "2370:3:9"
                                  }
                                ],
                                "id": 2972,
                                "name": "MemberAccess",
                                "src": "2370:10:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2926,
                                  "type": "address",
                                  "value": "debtKernel"
                                },
                                "id": 2973,
                                "name": "Identifier",
                                "src": "2384:10:9"
                              }
                            ],
                            "id": 2974,
                            "name": "BinaryOperation",
                            "src": "2370:24:9"
                          }
                        ],
                        "id": 2975,
                        "name": "FunctionCall",
                        "src": "2362:33:9"
                      }
                    ],
                    "id": 2976,
                    "name": "ExpressionStatement",
                    "src": "2362:33:9"
                  },
                  {
                    "id": 2977,
                    "name": "PlaceholderStatement",
                    "src": "2405:1:9"
                  }
                ],
                "id": 2978,
                "name": "Block",
                "src": "2352:61:9"
              }
            ],
            "id": 2979,
            "name": "ModifierDefinition",
            "src": "2326:87:9"
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
              "scope": 3477,
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
                      "scope": 3011,
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
                        "id": 2980,
                        "name": "ElementaryTypeName",
                        "src": "2465:7:9"
                      }
                    ],
                    "id": 2981,
                    "name": "VariableDeclaration",
                    "src": "2465:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_debtRegistry",
                      "scope": 3011,
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
                        "id": 2982,
                        "name": "ElementaryTypeName",
                        "src": "2494:7:9"
                      }
                    ],
                    "id": 2983,
                    "name": "VariableDeclaration",
                    "src": "2494:21:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_tokenRegistry",
                      "scope": 3011,
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
                        "id": 2984,
                        "name": "ElementaryTypeName",
                        "src": "2525:7:9"
                      }
                    ],
                    "id": 2985,
                    "name": "VariableDeclaration",
                    "src": "2525:22:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_repaymentRouter",
                      "scope": 3011,
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
                        "id": 2986,
                        "name": "ElementaryTypeName",
                        "src": "2557:7:9"
                      }
                    ],
                    "id": 2987,
                    "name": "VariableDeclaration",
                    "src": "2557:24:9"
                  }
                ],
                "id": 2988,
                "name": "ParameterList",
                "src": "2455:132:9"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 2989,
                "name": "ParameterList",
                "src": "2607:0:9"
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
                              "referencedDeclaration": 2922,
                              "type": "contract DebtRegistry",
                              "value": "debtRegistry"
                            },
                            "id": 2990,
                            "name": "Identifier",
                            "src": "2617:12:9"
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
                                  "referencedDeclaration": 1664,
                                  "type": "type(contract DebtRegistry)",
                                  "value": "DebtRegistry"
                                },
                                "id": 2991,
                                "name": "Identifier",
                                "src": "2632:12:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2983,
                                  "type": "address",
                                  "value": "_debtRegistry"
                                },
                                "id": 2992,
                                "name": "Identifier",
                                "src": "2645:13:9"
                              }
                            ],
                            "id": 2993,
                            "name": "FunctionCall",
                            "src": "2632:27:9"
                          }
                        ],
                        "id": 2994,
                        "name": "Assignment",
                        "src": "2617:42:9"
                      }
                    ],
                    "id": 2995,
                    "name": "ExpressionStatement",
                    "src": "2617:42:9"
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
                              "referencedDeclaration": 2924,
                              "type": "contract TokenRegistry",
                              "value": "tokenRegistry"
                            },
                            "id": 2996,
                            "name": "Identifier",
                            "src": "2669:13:9"
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
                                  "referencedDeclaration": 2196,
                                  "type": "type(contract TokenRegistry)",
                                  "value": "TokenRegistry"
                                },
                                "id": 2997,
                                "name": "Identifier",
                                "src": "2685:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2985,
                                  "type": "address",
                                  "value": "_tokenRegistry"
                                },
                                "id": 2998,
                                "name": "Identifier",
                                "src": "2699:14:9"
                              }
                            ],
                            "id": 2999,
                            "name": "FunctionCall",
                            "src": "2685:29:9"
                          }
                        ],
                        "id": 3000,
                        "name": "Assignment",
                        "src": "2669:45:9"
                      }
                    ],
                    "id": 3001,
                    "name": "ExpressionStatement",
                    "src": "2669:45:9"
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
                              "referencedDeclaration": 2926,
                              "type": "address",
                              "value": "debtKernel"
                            },
                            "id": 3002,
                            "name": "Identifier",
                            "src": "2725:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2981,
                              "type": "address",
                              "value": "_debtKernel"
                            },
                            "id": 3003,
                            "name": "Identifier",
                            "src": "2738:11:9"
                          }
                        ],
                        "id": 3004,
                        "name": "Assignment",
                        "src": "2725:24:9"
                      }
                    ],
                    "id": 3005,
                    "name": "ExpressionStatement",
                    "src": "2725:24:9"
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
                              "referencedDeclaration": 2928,
                              "type": "address",
                              "value": "repaymentRouter"
                            },
                            "id": 3006,
                            "name": "Identifier",
                            "src": "2759:15:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2987,
                              "type": "address",
                              "value": "_repaymentRouter"
                            },
                            "id": 3007,
                            "name": "Identifier",
                            "src": "2777:16:9"
                          }
                        ],
                        "id": 3008,
                        "name": "Assignment",
                        "src": "2759:34:9"
                      }
                    ],
                    "id": 3009,
                    "name": "ExpressionStatement",
                    "src": "2759:34:9"
                  }
                ],
                "id": 3010,
                "name": "Block",
                "src": "2607:193:9"
              }
            ],
            "id": 3011,
            "name": "FunctionDefinition",
            "src": "2419:381:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerTermStart",
              "payable": false,
              "scope": 3477,
              "stateMutability": "nonpayable",
              "superFunction": 2074,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3096,
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
                        "id": 3012,
                        "name": "ElementaryTypeName",
                        "src": "3489:7:9"
                      }
                    ],
                    "id": 3013,
                    "name": "VariableDeclaration",
                    "src": "3489:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "debtor",
                      "scope": 3096,
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
                        "id": 3014,
                        "name": "ElementaryTypeName",
                        "src": "3518:7:9"
                      }
                    ],
                    "id": 3015,
                    "name": "VariableDeclaration",
                    "src": "3518:14:9"
                  }
                ],
                "id": 3016,
                "name": "ParameterList",
                "src": "3479:59:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 3096,
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
                        "id": 3019,
                        "name": "ElementaryTypeName",
                        "src": "3594:4:9"
                      }
                    ],
                    "id": 3020,
                    "name": "VariableDeclaration",
                    "src": "3594:13:9"
                  }
                ],
                "id": 3021,
                "name": "ParameterList",
                "src": "3593:15:9"
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
                      "referencedDeclaration": 2979,
                      "type": "modifier ()",
                      "value": "onlyDebtKernel"
                    },
                    "id": 3017,
                    "name": "Identifier",
                    "src": "3562:14:9"
                  }
                ],
                "id": 3018,
                "name": "ModifierInvocation",
                "src": "3562:14:9"
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
                          "scope": 3096,
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
                            "id": 3022,
                            "name": "ElementaryTypeName",
                            "src": "3623:7:9"
                          }
                        ],
                        "id": 3023,
                        "name": "VariableDeclaration",
                        "src": "3623:21:9"
                      }
                    ],
                    "id": 3024,
                    "name": "VariableDeclarationStatement",
                    "src": "3623:21:9"
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
                          "scope": 3096,
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
                            "id": 3025,
                            "name": "ElementaryTypeName",
                            "src": "3654:7:9"
                          }
                        ],
                        "id": 3026,
                        "name": "VariableDeclaration",
                        "src": "3654:31:9"
                      }
                    ],
                    "id": 3027,
                    "name": "VariableDeclarationStatement",
                    "src": "3654:31:9"
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
                                  "referencedDeclaration": 3023,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 3028,
                                "name": "Identifier",
                                "src": "3697:13:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3026,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 3029,
                                "name": "Identifier",
                                "src": "3712:23:9"
                              }
                            ],
                            "id": 3030,
                            "name": "TupleExpression",
                            "src": "3696:40:9"
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
                                  "referencedDeclaration": 1588,
                                  "type": "function (bytes32) view external returns (address,bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2922,
                                      "type": "contract DebtRegistry",
                                      "value": "debtRegistry"
                                    },
                                    "id": 3031,
                                    "name": "Identifier",
                                    "src": "3739:12:9"
                                  }
                                ],
                                "id": 3032,
                                "name": "MemberAccess",
                                "src": "3739:21:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3013,
                                  "type": "bytes32",
                                  "value": "agreementId"
                                },
                                "id": 3033,
                                "name": "Identifier",
                                "src": "3761:11:9"
                              }
                            ],
                            "id": 3034,
                            "name": "FunctionCall",
                            "src": "3739:34:9"
                          }
                        ],
                        "id": 3035,
                        "name": "Assignment",
                        "src": "3696:77:9"
                      }
                    ],
                    "id": 3036,
                    "name": "ExpressionStatement",
                    "src": "3696:77:9"
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
                          "scope": 3096,
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
                            "id": 3037,
                            "name": "ElementaryTypeName",
                            "src": "3784:4:9"
                          }
                        ],
                        "id": 3038,
                        "name": "VariableDeclaration",
                        "src": "3784:24:9"
                      }
                    ],
                    "id": 3039,
                    "name": "VariableDeclarationStatement",
                    "src": "3784:24:9"
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
                          "name": "principalPlusInterest",
                          "scope": 3096,
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
                            "id": 3040,
                            "name": "ElementaryTypeName",
                            "src": "3818:4:9"
                          }
                        ],
                        "id": 3041,
                        "name": "VariableDeclaration",
                        "src": "3818:26:9"
                      }
                    ],
                    "id": 3042,
                    "name": "VariableDeclarationStatement",
                    "src": "3818:26:9"
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
                          "scope": 3096,
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
                            "id": 3043,
                            "name": "ElementaryTypeName",
                            "src": "3854:4:9"
                          }
                        ],
                        "id": 3044,
                        "name": "VariableDeclaration",
                        "src": "3854:25:9"
                      }
                    ],
                    "id": 3045,
                    "name": "VariableDeclarationStatement",
                    "src": "3854:25:9"
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
                          "scope": 3096,
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
                            "id": 3046,
                            "name": "ElementaryTypeName",
                            "src": "3889:4:9"
                          }
                        ],
                        "id": 3047,
                        "name": "VariableDeclaration",
                        "src": "3889:34:9"
                      }
                    ],
                    "id": 3048,
                    "name": "VariableDeclarationStatement",
                    "src": "3889:34:9"
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
                                  "referencedDeclaration": 3038,
                                  "type": "uint256",
                                  "value": "principalTokenIndex"
                                },
                                "id": 3049,
                                "name": "Identifier",
                                "src": "3935:19:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3041,
                                  "type": "uint256",
                                  "value": "principalPlusInterest"
                                },
                                "id": 3050,
                                "name": "Identifier",
                                "src": "3956:21:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3044,
                                  "type": "uint256",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3051,
                                "name": "Identifier",
                                "src": "3979:20:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3047,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3052,
                                "name": "Identifier",
                                "src": "4001:29:9"
                              }
                            ],
                            "id": 3053,
                            "name": "TupleExpression",
                            "src": "3934:97:9"
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
                              "type": "tuple(uint256,uint256,uint256,uint256)",
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
                                  "referencedDeclaration": 3291,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256,uint256)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 3054,
                                "name": "Identifier",
                                "src": "4046:25:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3026,
                                  "type": "bytes32",
                                  "value": "termsContractParameters"
                                },
                                "id": 3055,
                                "name": "Identifier",
                                "src": "4072:23:9"
                              }
                            ],
                            "id": 3056,
                            "name": "FunctionCall",
                            "src": "4046:50:9"
                          }
                        ],
                        "id": 3057,
                        "name": "Assignment",
                        "src": "3934:162:9"
                      }
                    ],
                    "id": 3058,
                    "name": "ExpressionStatement",
                    "src": "3934:162:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3060
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenAddress",
                          "scope": 3096,
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
                            "id": 3059,
                            "name": "ElementaryTypeName",
                            "src": "4107:7:9"
                          }
                        ],
                        "id": 3060,
                        "name": "VariableDeclaration",
                        "src": "4107:29:9"
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
                              "referencedDeclaration": 2195,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2924,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 3061,
                                "name": "Identifier",
                                "src": "4151:13:9"
                              }
                            ],
                            "id": 3062,
                            "name": "MemberAccess",
                            "src": "4151:36:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3038,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 3063,
                            "name": "Identifier",
                            "src": "4188:19:9"
                          }
                        ],
                        "id": 3064,
                        "name": "FunctionCall",
                        "src": "4151:57:9"
                      }
                    ],
                    "id": 3065,
                    "name": "VariableDeclarationStatement",
                    "src": "4107:101:9"
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
                                      "referencedDeclaration": 3060,
                                      "type": "address",
                                      "value": "principalTokenAddress"
                                    },
                                    "id": 3066,
                                    "name": "Identifier",
                                    "src": "4597:21:9"
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
                                        "id": 3067,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "4622:7:9"
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
                                        "id": 3068,
                                        "name": "Literal",
                                        "src": "4630:1:9"
                                      }
                                    ],
                                    "id": 3069,
                                    "name": "FunctionCall",
                                    "src": "4622:10:9"
                                  }
                                ],
                                "id": 3070,
                                "name": "BinaryOperation",
                                "src": "4597:35:9"
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
                                      "referencedDeclaration": 3044,
                                      "type": "uint256",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3071,
                                    "name": "Identifier",
                                    "src": "4648:20:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2878,
                                      "type": "uint256",
                                      "value": "NUM_AMORTIZATION_UNIT_TYPES"
                                    },
                                    "id": 3072,
                                    "name": "Identifier",
                                    "src": "4671:27:9"
                                  }
                                ],
                                "id": 3073,
                                "name": "BinaryOperation",
                                "src": "4648:50:9"
                              }
                            ],
                            "id": 3074,
                            "name": "BinaryOperation",
                            "src": "4597:101:9"
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
                                  "referencedDeclaration": 3023,
                                  "type": "address",
                                  "value": "termsContract"
                                },
                                "id": 3075,
                                "name": "Identifier",
                                "src": "4714:13:9"
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
                                          "typeIdentifier": "t_contract$_SimpleInterestTermsContract_$3477",
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
                                    "id": 3076,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "4731:7:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5532,
                                      "type": "contract SimpleInterestTermsContract",
                                      "value": "this"
                                    },
                                    "id": 3077,
                                    "name": "Identifier",
                                    "src": "4739:4:9"
                                  }
                                ],
                                "id": 3078,
                                "name": "FunctionCall",
                                "src": "4731:13:9"
                              }
                            ],
                            "id": 3079,
                            "name": "BinaryOperation",
                            "src": "4714:30:9"
                          }
                        ],
                        "id": 3080,
                        "name": "BinaryOperation",
                        "src": "4597:147:9"
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
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2940,
                                      "type": "function (bytes32,address,uint256,uint256,uint256)",
                                      "value": "LogSimpleInterestTermStart"
                                    },
                                    "id": 3081,
                                    "name": "Identifier",
                                    "src": "4760:26:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3013,
                                      "type": "bytes32",
                                      "value": "agreementId"
                                    },
                                    "id": 3082,
                                    "name": "Identifier",
                                    "src": "4804:11:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3060,
                                      "type": "address",
                                      "value": "principalTokenAddress"
                                    },
                                    "id": 3083,
                                    "name": "Identifier",
                                    "src": "4833:21:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3041,
                                      "type": "uint256",
                                      "value": "principalPlusInterest"
                                    },
                                    "id": 3084,
                                    "name": "Identifier",
                                    "src": "4872:21:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3044,
                                      "type": "uint256",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3085,
                                    "name": "Identifier",
                                    "src": "4911:20:9"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3047,
                                      "type": "uint256",
                                      "value": "termLengthInAmortizationUnits"
                                    },
                                    "id": 3086,
                                    "name": "Identifier",
                                    "src": "4949:29:9"
                                  }
                                ],
                                "id": 3087,
                                "name": "FunctionCall",
                                "src": "4760:232:9"
                              }
                            ],
                            "id": 3088,
                            "name": "ExpressionStatement",
                            "src": "4760:232:9"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3021
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
                                "id": 3089,
                                "name": "Literal",
                                "src": "5014:4:9"
                              }
                            ],
                            "id": 3090,
                            "name": "Return",
                            "src": "5007:11:9"
                          }
                        ],
                        "id": 3091,
                        "name": "Block",
                        "src": "4746:283:9"
                      }
                    ],
                    "id": 3092,
                    "name": "IfStatement",
                    "src": "4593:436:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3021
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
                        "id": 3093,
                        "name": "Literal",
                        "src": "5046:5:9"
                      }
                    ],
                    "id": 3094,
                    "name": "Return",
                    "src": "5039:12:9"
                  }
                ],
                "id": 3095,
                "name": "Block",
                "src": "3613:1445:9"
              }
            ],
            "id": 3096,
            "name": "FunctionDefinition",
            "src": "3453:1605:9"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "registerRepayment",
              "payable": false,
              "scope": 3477,
              "stateMutability": "nonpayable",
              "superFunction": 2089,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3141,
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
                        "id": 3097,
                        "name": "ElementaryTypeName",
                        "src": "5805:7:9"
                      }
                    ],
                    "id": 3098,
                    "name": "VariableDeclaration",
                    "src": "5805:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "payer",
                      "scope": 3141,
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
                        "id": 3099,
                        "name": "ElementaryTypeName",
                        "src": "5834:7:9"
                      }
                    ],
                    "id": 3100,
                    "name": "VariableDeclaration",
                    "src": "5834:13:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 3141,
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
                        "id": 3101,
                        "name": "ElementaryTypeName",
                        "src": "5857:7:9"
                      }
                    ],
                    "id": 3102,
                    "name": "VariableDeclaration",
                    "src": "5857:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "unitsOfRepayment",
                      "scope": 3141,
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
                        "id": 3103,
                        "name": "ElementaryTypeName",
                        "src": "5886:7:9"
                      }
                    ],
                    "id": 3104,
                    "name": "VariableDeclaration",
                    "src": "5886:24:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "tokenAddress",
                      "scope": 3141,
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
                        "id": 3105,
                        "name": "ElementaryTypeName",
                        "src": "5920:7:9"
                      }
                    ],
                    "id": 3106,
                    "name": "VariableDeclaration",
                    "src": "5920:20:9"
                  }
                ],
                "id": 3107,
                "name": "ParameterList",
                "src": "5795:151:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_success",
                      "scope": 3141,
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
                        "id": 3110,
                        "name": "ElementaryTypeName",
                        "src": "5998:4:9"
                      }
                    ],
                    "id": 3111,
                    "name": "VariableDeclaration",
                    "src": "5998:13:9"
                  }
                ],
                "id": 3112,
                "name": "ParameterList",
                "src": "5997:15:9"
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
                      "referencedDeclaration": 2951,
                      "type": "modifier ()",
                      "value": "onlyRouter"
                    },
                    "id": 3108,
                    "name": "Identifier",
                    "src": "5970:10:9"
                  }
                ],
                "id": 3109,
                "name": "ModifierInvocation",
                "src": "5970:10:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3114
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 3141,
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
                              "referencedDeclaration": 2891,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 3113,
                            "name": "UserDefinedTypeName",
                            "src": "6027:20:9"
                          }
                        ],
                        "id": 3114,
                        "name": "VariableDeclaration",
                        "src": "6027:34:9"
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
                              "referencedDeclaration": 3424,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 3115,
                            "name": "Identifier",
                            "src": "6064:26:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3098,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3116,
                            "name": "Identifier",
                            "src": "6091:11:9"
                          }
                        ],
                        "id": 3117,
                        "name": "FunctionCall",
                        "src": "6064:39:9"
                      }
                    ],
                    "id": 3118,
                    "name": "VariableDeclarationStatement",
                    "src": "6027:76:9"
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
                              "referencedDeclaration": 3106,
                              "type": "address",
                              "value": "tokenAddress"
                            },
                            "id": 3119,
                            "name": "Identifier",
                            "src": "6118:12:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "principalTokenAddress",
                              "referencedDeclaration": 2880,
                              "type": "address"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3114,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3120,
                                "name": "Identifier",
                                "src": "6134:6:9"
                              }
                            ],
                            "id": 3121,
                            "name": "MemberAccess",
                            "src": "6134:28:9"
                          }
                        ],
                        "id": 3122,
                        "name": "BinaryOperation",
                        "src": "6118:44:9"
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
                                          "referencedDeclaration": 2920,
                                          "type": "mapping(bytes32 => uint256)",
                                          "value": "valueRepaid"
                                        },
                                        "id": 3123,
                                        "name": "Identifier",
                                        "src": "6178:11:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3098,
                                          "type": "bytes32",
                                          "value": "agreementId"
                                        },
                                        "id": 3124,
                                        "name": "Identifier",
                                        "src": "6190:11:9"
                                      }
                                    ],
                                    "id": 3125,
                                    "name": "IndexAccess",
                                    "src": "6178:24:9"
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
                                          "referencedDeclaration": 5341,
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
                                                  "referencedDeclaration": 2920,
                                                  "type": "mapping(bytes32 => uint256)",
                                                  "value": "valueRepaid"
                                                },
                                                "id": 3126,
                                                "name": "Identifier",
                                                "src": "6205:11:9"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3098,
                                                  "type": "bytes32",
                                                  "value": "agreementId"
                                                },
                                                "id": 3127,
                                                "name": "Identifier",
                                                "src": "6217:11:9"
                                              }
                                            ],
                                            "id": 3128,
                                            "name": "IndexAccess",
                                            "src": "6205:24:9"
                                          }
                                        ],
                                        "id": 3129,
                                        "name": "MemberAccess",
                                        "src": "6205:28:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3104,
                                          "type": "uint256",
                                          "value": "unitsOfRepayment"
                                        },
                                        "id": 3130,
                                        "name": "Identifier",
                                        "src": "6234:16:9"
                                      }
                                    ],
                                    "id": 3131,
                                    "name": "FunctionCall",
                                    "src": "6205:46:9"
                                  }
                                ],
                                "id": 3132,
                                "name": "Assignment",
                                "src": "6178:73:9"
                              }
                            ],
                            "id": 3133,
                            "name": "ExpressionStatement",
                            "src": "6178:73:9"
                          },
                          {
                            "attributes": {
                              "functionReturnParameters": 3112
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
                                "id": 3134,
                                "name": "Literal",
                                "src": "6272:4:9"
                              }
                            ],
                            "id": 3135,
                            "name": "Return",
                            "src": "6265:11:9"
                          }
                        ],
                        "id": 3136,
                        "name": "Block",
                        "src": "6164:123:9"
                      }
                    ],
                    "id": 3137,
                    "name": "IfStatement",
                    "src": "6114:173:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3112
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
                        "id": 3138,
                        "name": "Literal",
                        "src": "6304:5:9"
                      }
                    ],
                    "id": 3139,
                    "name": "Return",
                    "src": "6297:12:9"
                  }
                ],
                "id": 3140,
                "name": "Block",
                "src": "6017:299:9"
              }
            ],
            "id": 3141,
            "name": "FunctionDefinition",
            "src": "5769:547:9"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "name": "getExpectedRepaymentValue",
              "payable": false,
              "scope": 3477,
              "stateMutability": "view",
              "superFunction": 2098,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3195,
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
                        "id": 3142,
                        "name": "ElementaryTypeName",
                        "src": "6969:7:9"
                      }
                    ],
                    "id": 3143,
                    "name": "VariableDeclaration",
                    "src": "6969:19:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "timestamp",
                      "scope": 3195,
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
                        "id": 3144,
                        "name": "ElementaryTypeName",
                        "src": "6998:7:9"
                      }
                    ],
                    "id": 3145,
                    "name": "VariableDeclaration",
                    "src": "6998:17:9"
                  }
                ],
                "id": 3146,
                "name": "ParameterList",
                "src": "6959:62:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_expectedRepaymentValue",
                      "scope": 3195,
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
                        "id": 3150,
                        "name": "ElementaryTypeName",
                        "src": "7113:4:9"
                      }
                    ],
                    "id": 3151,
                    "name": "VariableDeclaration",
                    "src": "7113:28:9"
                  }
                ],
                "id": 3152,
                "name": "ParameterList",
                "src": "7112:30:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2968,
                      "type": "modifier (bytes32)",
                      "value": "onlyMappedToThisContract"
                    },
                    "id": 3147,
                    "name": "Identifier",
                    "src": "7058:24:9"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 3143,
                      "type": "bytes32",
                      "value": "agreementId"
                    },
                    "id": 3148,
                    "name": "Identifier",
                    "src": "7083:11:9"
                  }
                ],
                "id": 3149,
                "name": "ModifierInvocation",
                "src": "7058:37:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3154
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "params",
                          "scope": 3195,
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
                              "referencedDeclaration": 2891,
                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                            },
                            "id": 3153,
                            "name": "UserDefinedTypeName",
                            "src": "7157:20:9"
                          }
                        ],
                        "id": 3154,
                        "name": "VariableDeclaration",
                        "src": "7157:34:9"
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
                              "referencedDeclaration": 3424,
                              "type": "function (bytes32) returns (struct SimpleInterestTermsContract.SimpleInterestParams memory)",
                              "value": "unpackParamsForAgreementID"
                            },
                            "id": 3155,
                            "name": "Identifier",
                            "src": "7194:26:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3143,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3156,
                            "name": "Identifier",
                            "src": "7221:11:9"
                          }
                        ],
                        "id": 3157,
                        "name": "FunctionCall",
                        "src": "7194:39:9"
                      }
                    ],
                    "id": 3158,
                    "name": "VariableDeclarationStatement",
                    "src": "7157:76:9"
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
                              "referencedDeclaration": 3145,
                              "type": "uint256",
                              "value": "timestamp"
                            },
                            "id": 3159,
                            "name": "Identifier",
                            "src": "7248:9:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 2884,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3154,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3160,
                                "name": "Identifier",
                                "src": "7261:6:9"
                              }
                            ],
                            "id": 3161,
                            "name": "MemberAccess",
                            "src": "7261:29:9"
                          }
                        ],
                        "id": 3162,
                        "name": "BinaryOperation",
                        "src": "7248:42:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3152
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
                                "id": 3163,
                                "name": "Literal",
                                "src": "7443:1:9"
                              }
                            ],
                            "id": 3164,
                            "name": "Return",
                            "src": "7436:8:9"
                          }
                        ],
                        "id": 3165,
                        "name": "Block",
                        "src": "7292:163:9"
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
                                  "referencedDeclaration": 3145,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3166,
                                "name": "Identifier",
                                "src": "7465:9:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "termEndUnixTimestamp",
                                  "referencedDeclaration": 2886,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 3154,
                                      "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                      "value": "params"
                                    },
                                    "id": 3167,
                                    "name": "Identifier",
                                    "src": "7478:6:9"
                                  }
                                ],
                                "id": 3168,
                                "name": "MemberAccess",
                                "src": "7478:27:9"
                              }
                            ],
                            "id": 3169,
                            "name": "BinaryOperation",
                            "src": "7465:40:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3152
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "principalPlusInterest",
                                      "referencedDeclaration": 2882,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3154,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 3170,
                                        "name": "Identifier",
                                        "src": "7675:6:9"
                                      }
                                    ],
                                    "id": 3171,
                                    "name": "MemberAccess",
                                    "src": "7675:28:9"
                                  }
                                ],
                                "id": 3172,
                                "name": "Return",
                                "src": "7668:35:9"
                              }
                            ],
                            "id": 3173,
                            "name": "Block",
                            "src": "7507:207:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "assignments": [
                                    3175
                                  ]
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "constant": false,
                                      "name": "numUnits",
                                      "scope": 3195,
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
                                        "id": 3174,
                                        "name": "ElementaryTypeName",
                                        "src": "7734:4:9"
                                      }
                                    ],
                                    "id": 3175,
                                    "name": "VariableDeclaration",
                                    "src": "7734:13:9"
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
                                              "typeIdentifier": "t_struct$_SimpleInterestParams_$2891_memory_ptr",
                                              "typeString": "struct SimpleInterestTermsContract.SimpleInterestParams memory"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3321,
                                          "type": "function (uint256,struct SimpleInterestTermsContract.SimpleInterestParams memory) returns (uint256)",
                                          "value": "numAmortizationUnitsForTimestamp"
                                        },
                                        "id": 3176,
                                        "name": "Identifier",
                                        "src": "7750:32:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3145,
                                          "type": "uint256",
                                          "value": "timestamp"
                                        },
                                        "id": 3177,
                                        "name": "Identifier",
                                        "src": "7783:9:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 3154,
                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                          "value": "params"
                                        },
                                        "id": 3178,
                                        "name": "Identifier",
                                        "src": "7794:6:9"
                                      }
                                    ],
                                    "id": 3179,
                                    "name": "FunctionCall",
                                    "src": "7750:51:9"
                                  }
                                ],
                                "id": 3180,
                                "name": "VariableDeclarationStatement",
                                "src": "7734:67:9"
                              },
                              {
                                "attributes": {
                                  "functionReturnParameters": 3152
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
                                          "referencedDeclaration": 5297,
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
                                                  "referencedDeclaration": 5279,
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
                                                      "member_name": "principalPlusInterest",
                                                      "referencedDeclaration": 2882,
                                                      "type": "uint256"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 3154,
                                                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                                          "value": "params"
                                                        },
                                                        "id": 3181,
                                                        "name": "Identifier",
                                                        "src": "7822:6:9"
                                                      }
                                                    ],
                                                    "id": 3182,
                                                    "name": "MemberAccess",
                                                    "src": "7822:28:9"
                                                  }
                                                ],
                                                "id": 3183,
                                                "name": "MemberAccess",
                                                "src": "7822:32:9"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 3175,
                                                  "type": "uint256",
                                                  "value": "numUnits"
                                                },
                                                "id": 3184,
                                                "name": "Identifier",
                                                "src": "7855:8:9"
                                              }
                                            ],
                                            "id": 3185,
                                            "name": "FunctionCall",
                                            "src": "7822:42:9"
                                          }
                                        ],
                                        "id": 3186,
                                        "name": "MemberAccess",
                                        "src": "7822:46:9"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "member_name": "termLengthInAmortizationUnits",
                                          "referencedDeclaration": 2890,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 3154,
                                              "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                              "value": "params"
                                            },
                                            "id": 3187,
                                            "name": "Identifier",
                                            "src": "7869:6:9"
                                          }
                                        ],
                                        "id": 3188,
                                        "name": "MemberAccess",
                                        "src": "7869:36:9"
                                      }
                                    ],
                                    "id": 3189,
                                    "name": "FunctionCall",
                                    "src": "7822:84:9"
                                  }
                                ],
                                "id": 3190,
                                "name": "Return",
                                "src": "7815:91:9"
                              }
                            ],
                            "id": 3191,
                            "name": "Block",
                            "src": "7720:197:9"
                          }
                        ],
                        "id": 3192,
                        "name": "IfStatement",
                        "src": "7461:456:9"
                      }
                    ],
                    "id": 3193,
                    "name": "IfStatement",
                    "src": "7244:673:9"
                  }
                ],
                "id": 3194,
                "name": "Block",
                "src": "7147:776:9"
              }
            ],
            "id": 3195,
            "name": "FunctionDefinition",
            "src": "6925:998:9"
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
              "scope": 3477,
              "stateMutability": "view",
              "superFunction": 2105,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "agreementId",
                      "scope": 3207,
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
                        "id": 3196,
                        "name": "ElementaryTypeName",
                        "src": "8234:7:9"
                      }
                    ],
                    "id": 3197,
                    "name": "VariableDeclaration",
                    "src": "8234:19:9"
                  }
                ],
                "id": 3198,
                "name": "ParameterList",
                "src": "8233:21:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_valueRepaid",
                      "scope": 3207,
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
                        "id": 3199,
                        "name": "ElementaryTypeName",
                        "src": "8300:4:9"
                      }
                    ],
                    "id": 3200,
                    "name": "VariableDeclaration",
                    "src": "8300:17:9"
                  }
                ],
                "id": 3201,
                "name": "ParameterList",
                "src": "8299:19:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 3201
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
                              "referencedDeclaration": 2920,
                              "type": "mapping(bytes32 => uint256)",
                              "value": "valueRepaid"
                            },
                            "id": 3202,
                            "name": "Identifier",
                            "src": "8340:11:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3197,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3203,
                            "name": "Identifier",
                            "src": "8352:11:9"
                          }
                        ],
                        "id": 3204,
                        "name": "IndexAccess",
                        "src": "8340:24:9"
                      }
                    ],
                    "id": 3205,
                    "name": "Return",
                    "src": "8333:31:9"
                  }
                ],
                "id": 3206,
                "name": "Block",
                "src": "8323:48:9"
              }
            ],
            "id": 3207,
            "name": "FunctionDefinition",
            "src": "8204:167:9"
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
              "scope": 3477,
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
                      "scope": 3291,
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
                        "id": 3208,
                        "name": "ElementaryTypeName",
                        "src": "8412:7:9"
                      }
                    ],
                    "id": 3209,
                    "name": "VariableDeclaration",
                    "src": "8412:18:9"
                  }
                ],
                "id": 3210,
                "name": "ParameterList",
                "src": "8411:20:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalTokenIndex",
                      "scope": 3291,
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
                        "id": 3211,
                        "name": "ElementaryTypeName",
                        "src": "8490:4:9"
                      }
                    ],
                    "id": 3212,
                    "name": "VariableDeclaration",
                    "src": "8490:25:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_principalPlusInterest",
                      "scope": 3291,
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
                        "id": 3213,
                        "name": "ElementaryTypeName",
                        "src": "8529:4:9"
                      }
                    ],
                    "id": 3214,
                    "name": "VariableDeclaration",
                    "src": "8529:27:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitType",
                      "scope": 3291,
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
                        "id": 3215,
                        "name": "ElementaryTypeName",
                        "src": "8570:4:9"
                      }
                    ],
                    "id": 3216,
                    "name": "VariableDeclaration",
                    "src": "8570:26:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_termLengthInAmortizationUnits",
                      "scope": 3291,
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
                        "id": 3217,
                        "name": "ElementaryTypeName",
                        "src": "8610:4:9"
                      }
                    ],
                    "id": 3218,
                    "name": "VariableDeclaration",
                    "src": "8610:35:9"
                  }
                ],
                "id": 3219,
                "name": "ParameterList",
                "src": "8476:179:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3221
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenIndexShifted",
                          "scope": 3291,
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
                            "id": 3220,
                            "name": "ElementaryTypeName",
                            "src": "8784:7:9"
                          }
                        ],
                        "id": 3221,
                        "name": "VariableDeclaration",
                        "src": "8784:34:9"
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
                              "referencedDeclaration": 3209,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3222,
                            "name": "Identifier",
                            "src": "8833:10:9"
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
                            "id": 3223,
                            "name": "Literal",
                            "src": "8846:66:9"
                          }
                        ],
                        "id": 3224,
                        "name": "BinaryOperation",
                        "src": "8833:79:9"
                      }
                    ],
                    "id": 3225,
                    "name": "VariableDeclarationStatement",
                    "src": "8784:128:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3227
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterestShifted",
                          "scope": 3291,
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
                            "id": 3226,
                            "name": "ElementaryTypeName",
                            "src": "9013:7:9"
                          }
                        ],
                        "id": 3227,
                        "name": "VariableDeclaration",
                        "src": "9013:36:9"
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
                              "referencedDeclaration": 3209,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3228,
                            "name": "Identifier",
                            "src": "9064:10:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "307830306666666666666666666666666666666666666666666666666666666666663030303030303030303030303030303030303030303030303030303030303030",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 452312848583266388373324160190187139711553510679219989815756580099142451200",
                              "value": "0x00ffffffffffffffffffffffffffffff00000000000000000000000000000000"
                            },
                            "id": 3229,
                            "name": "Literal",
                            "src": "9077:66:9"
                          }
                        ],
                        "id": 3230,
                        "name": "BinaryOperation",
                        "src": "9064:79:9"
                      }
                    ],
                    "id": 3231,
                    "name": "VariableDeclarationStatement",
                    "src": "9013:130:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3233
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitTypeShifted",
                          "scope": 3291,
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
                            "id": 3232,
                            "name": "ElementaryTypeName",
                            "src": "9225:7:9"
                          }
                        ],
                        "id": 3233,
                        "name": "VariableDeclaration",
                        "src": "9225:35:9"
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
                              "referencedDeclaration": 3209,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3234,
                            "name": "Identifier",
                            "src": "9275:10:9"
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
                            "id": 3235,
                            "name": "Literal",
                            "src": "9288:66:9"
                          }
                        ],
                        "id": 3236,
                        "name": "BinaryOperation",
                        "src": "9275:79:9"
                      }
                    ],
                    "id": 3237,
                    "name": "VariableDeclarationStatement",
                    "src": "9225:129:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3239
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnitsShifted",
                          "scope": 3291,
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
                            "id": 3238,
                            "name": "ElementaryTypeName",
                            "src": "9482:7:9"
                          }
                        ],
                        "id": 3239,
                        "name": "VariableDeclaration",
                        "src": "9482:44:9"
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
                              "referencedDeclaration": 3209,
                              "type": "bytes32",
                              "value": "parameters"
                            },
                            "id": 3240,
                            "name": "Identifier",
                            "src": "9541:10:9"
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
                            "id": 3241,
                            "name": "Literal",
                            "src": "9554:66:9"
                          }
                        ],
                        "id": 3242,
                        "name": "BinaryOperation",
                        "src": "9541:79:9"
                      }
                    ],
                    "id": 3243,
                    "name": "VariableDeclarationStatement",
                    "src": "9482:138:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3245
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenIndex",
                          "scope": 3291,
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
                            "id": 3244,
                            "name": "ElementaryTypeName",
                            "src": "9885:4:9"
                          }
                        ],
                        "id": 3245,
                        "name": "VariableDeclaration",
                        "src": "9885:24:9"
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
                                "id": 3246,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9912:4:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3221,
                                  "type": "bytes32",
                                  "value": "principalTokenIndexShifted"
                                },
                                "id": 3247,
                                "name": "Identifier",
                                "src": "9917:26:9"
                              }
                            ],
                            "id": 3248,
                            "name": "FunctionCall",
                            "src": "9912:32:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_452312848583266388373324160190187140051835877600158453279131187530910662656_by_1",
                                "typeString": "int_const 452312848583266388373324160190187140051835877600158453279131187530910662656"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 452312848583266388373324160190187140051835877600158453279131187530910662656"
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
                                "id": 3249,
                                "name": "Literal",
                                "src": "9947:1:9"
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
                                "id": 3250,
                                "name": "Literal",
                                "src": "9952:3:9"
                              }
                            ],
                            "id": 3251,
                            "name": "BinaryOperation",
                            "src": "9947:8:9"
                          }
                        ],
                        "id": 3252,
                        "name": "BinaryOperation",
                        "src": "9912:43:9"
                      }
                    ],
                    "id": 3253,
                    "name": "VariableDeclarationStatement",
                    "src": "9885:70:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3255
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalPlusInterest",
                          "scope": 3291,
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
                            "id": 3254,
                            "name": "ElementaryTypeName",
                            "src": "9965:4:9"
                          }
                        ],
                        "id": 3255,
                        "name": "VariableDeclaration",
                        "src": "9965:26:9"
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
                                "id": 3256,
                                "name": "ElementaryTypeNameExpression",
                                "src": "9994:4:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3227,
                                  "type": "bytes32",
                                  "value": "principalPlusInterestShifted"
                                },
                                "id": 3257,
                                "name": "Identifier",
                                "src": "9999:28:9"
                              }
                            ],
                            "id": 3258,
                            "name": "FunctionCall",
                            "src": "9994:34:9"
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
                                "id": 3259,
                                "name": "Literal",
                                "src": "10031:1:9"
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
                                "id": 3260,
                                "name": "Literal",
                                "src": "10036:3:9"
                              }
                            ],
                            "id": 3261,
                            "name": "BinaryOperation",
                            "src": "10031:8:9"
                          }
                        ],
                        "id": 3262,
                        "name": "BinaryOperation",
                        "src": "9994:45:9"
                      }
                    ],
                    "id": 3263,
                    "name": "VariableDeclarationStatement",
                    "src": "9965:74:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3265
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3291,
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
                            "id": 3264,
                            "name": "ElementaryTypeName",
                            "src": "10049:4:9"
                          }
                        ],
                        "id": 3265,
                        "name": "VariableDeclaration",
                        "src": "10049:25:9"
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
                                "id": 3266,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10077:4:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3233,
                                  "type": "bytes32",
                                  "value": "amortizationUnitTypeShifted"
                                },
                                "id": 3267,
                                "name": "Identifier",
                                "src": "10082:27:9"
                              }
                            ],
                            "id": 3268,
                            "name": "FunctionCall",
                            "src": "10077:33:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_21267647932558653966460912964485513216_by_1",
                                "typeString": "int_const 21267647932558653966460912964485513216"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 21267647932558653966460912964485513216"
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
                                "id": 3269,
                                "name": "Literal",
                                "src": "10113:1:9"
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
                                "id": 3270,
                                "name": "Literal",
                                "src": "10118:3:9"
                              }
                            ],
                            "id": 3271,
                            "name": "BinaryOperation",
                            "src": "10113:8:9"
                          }
                        ],
                        "id": 3272,
                        "name": "BinaryOperation",
                        "src": "10077:44:9"
                      }
                    ],
                    "id": 3273,
                    "name": "VariableDeclarationStatement",
                    "src": "10049:72:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3275
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInAmortizationUnits",
                          "scope": 3291,
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
                            "id": 3274,
                            "name": "ElementaryTypeName",
                            "src": "10131:4:9"
                          }
                        ],
                        "id": 3275,
                        "name": "VariableDeclaration",
                        "src": "10131:34:9"
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
                                "id": 3276,
                                "name": "ElementaryTypeNameExpression",
                                "src": "10180:4:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3239,
                                  "type": "bytes32",
                                  "value": "termLengthInAmortizationUnitsShifted"
                                },
                                "id": 3277,
                                "name": "Identifier",
                                "src": "10185:36:9"
                              }
                            ],
                            "id": 3278,
                            "name": "FunctionCall",
                            "src": "10180:42:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_rational_324518553658426726783156020576256_by_1",
                                "typeString": "int_const 324518553658426726783156020576256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "operator": "**",
                              "type": "int_const 324518553658426726783156020576256"
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
                                "id": 3279,
                                "name": "Literal",
                                "src": "10225:1:9"
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
                                "id": 3280,
                                "name": "Literal",
                                "src": "10230:3:9"
                              }
                            ],
                            "id": 3281,
                            "name": "BinaryOperation",
                            "src": "10225:8:9"
                          }
                        ],
                        "id": 3282,
                        "name": "BinaryOperation",
                        "src": "10180:53:9"
                      }
                    ],
                    "id": 3283,
                    "name": "VariableDeclarationStatement",
                    "src": "10131:102:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3219
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
                          "type": "tuple(uint256,uint256,uint256,uint256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3245,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 3284,
                            "name": "Identifier",
                            "src": "10265:19:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3255,
                              "type": "uint256",
                              "value": "principalPlusInterest"
                            },
                            "id": 3285,
                            "name": "Identifier",
                            "src": "10298:21:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3265,
                              "type": "uint256",
                              "value": "amortizationUnitType"
                            },
                            "id": 3286,
                            "name": "Identifier",
                            "src": "10333:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3275,
                              "type": "uint256",
                              "value": "termLengthInAmortizationUnits"
                            },
                            "id": 3287,
                            "name": "Identifier",
                            "src": "10367:29:9"
                          }
                        ],
                        "id": 3288,
                        "name": "TupleExpression",
                        "src": "10251:155:9"
                      }
                    ],
                    "id": 3289,
                    "name": "Return",
                    "src": "10244:162:9"
                  }
                ],
                "id": 3290,
                "name": "Block",
                "src": "8660:1753:9"
              }
            ],
            "id": 3291,
            "name": "FunctionDefinition",
            "src": "8377:2036:9"
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
              "scope": 3477,
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
                      "scope": 3321,
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
                        "id": 3292,
                        "name": "ElementaryTypeName",
                        "src": "10470:4:9"
                      }
                    ],
                    "id": 3293,
                    "name": "VariableDeclaration",
                    "src": "10470:14:9"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3321,
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
                          "referencedDeclaration": 2891,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3294,
                        "name": "UserDefinedTypeName",
                        "src": "10494:20:9"
                      }
                    ],
                    "id": 3295,
                    "name": "VariableDeclaration",
                    "src": "10494:27:9"
                  }
                ],
                "id": 3296,
                "name": "ParameterList",
                "src": "10460:67:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "units",
                      "scope": 3321,
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
                        "id": 3297,
                        "name": "ElementaryTypeName",
                        "src": "10562:4:9"
                      }
                    ],
                    "id": 3298,
                    "name": "VariableDeclaration",
                    "src": "10562:10:9"
                  }
                ],
                "id": 3299,
                "name": "ParameterList",
                "src": "10561:12:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3301
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "delta",
                          "scope": 3321,
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
                            "id": 3300,
                            "name": "ElementaryTypeName",
                            "src": "10588:4:9"
                          }
                        ],
                        "id": 3301,
                        "name": "VariableDeclaration",
                        "src": "10588:10:9"
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
                              "referencedDeclaration": 5317,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3293,
                                  "type": "uint256",
                                  "value": "timestamp"
                                },
                                "id": 3302,
                                "name": "Identifier",
                                "src": "10601:9:9"
                              }
                            ],
                            "id": 3303,
                            "name": "MemberAccess",
                            "src": "10601:13:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "termStartUnixTimestamp",
                              "referencedDeclaration": 2884,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3295,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3304,
                                "name": "Identifier",
                                "src": "10615:6:9"
                              }
                            ],
                            "id": 3305,
                            "name": "MemberAccess",
                            "src": "10615:29:9"
                          }
                        ],
                        "id": 3306,
                        "name": "FunctionCall",
                        "src": "10601:44:9"
                      }
                    ],
                    "id": 3307,
                    "name": "VariableDeclarationStatement",
                    "src": "10588:57:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3309
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3321,
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
                            "id": 3308,
                            "name": "ElementaryTypeName",
                            "src": "10655:4:9"
                          }
                        ],
                        "id": 3309,
                        "name": "VariableDeclaration",
                        "src": "10655:36:9"
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
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3476,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3310,
                            "name": "Identifier",
                            "src": "10694:34:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "amortizationUnitType",
                              "referencedDeclaration": 2888,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3295,
                                  "type": "struct SimpleInterestTermsContract.SimpleInterestParams memory",
                                  "value": "params"
                                },
                                "id": 3311,
                                "name": "Identifier",
                                "src": "10729:6:9"
                              }
                            ],
                            "id": 3312,
                            "name": "MemberAccess",
                            "src": "10729:27:9"
                          }
                        ],
                        "id": 3313,
                        "name": "FunctionCall",
                        "src": "10694:63:9"
                      }
                    ],
                    "id": 3314,
                    "name": "VariableDeclarationStatement",
                    "src": "10655:102:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3299
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
                              "referencedDeclaration": 5297,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3301,
                                  "type": "uint256",
                                  "value": "delta"
                                },
                                "id": 3315,
                                "name": "Identifier",
                                "src": "10774:5:9"
                              }
                            ],
                            "id": 3316,
                            "name": "MemberAccess",
                            "src": "10774:9:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3309,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3317,
                            "name": "Identifier",
                            "src": "10784:31:9"
                          }
                        ],
                        "id": 3318,
                        "name": "FunctionCall",
                        "src": "10774:42:9"
                      }
                    ],
                    "id": 3319,
                    "name": "Return",
                    "src": "10767:49:9"
                  }
                ],
                "id": 3320,
                "name": "Block",
                "src": "10578:245:9"
              }
            ],
            "id": 3321,
            "name": "FunctionDefinition",
            "src": "10419:404:9"
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
              "scope": 3477,
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
                      "scope": 3424,
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
                        "id": 3322,
                        "name": "ElementaryTypeName",
                        "src": "10874:7:9"
                      }
                    ],
                    "id": 3323,
                    "name": "VariableDeclaration",
                    "src": "10874:19:9"
                  }
                ],
                "id": 3324,
                "name": "ParameterList",
                "src": "10864:35:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "params",
                      "scope": 3424,
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
                          "referencedDeclaration": 2891,
                          "type": "struct SimpleInterestTermsContract.SimpleInterestParams storage pointer"
                        },
                        "id": 3325,
                        "name": "UserDefinedTypeName",
                        "src": "10934:20:9"
                      }
                    ],
                    "id": 3326,
                    "name": "VariableDeclaration",
                    "src": "10934:27:9"
                  }
                ],
                "id": 3327,
                "name": "ParameterList",
                "src": "10933:29:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        3329
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "parameters",
                          "scope": 3424,
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
                            "id": 3328,
                            "name": "ElementaryTypeName",
                            "src": "10977:7:9"
                          }
                        ],
                        "id": 3329,
                        "name": "VariableDeclaration",
                        "src": "10977:18:9"
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
                              "referencedDeclaration": 1568,
                              "type": "function (bytes32) view external returns (bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2922,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3330,
                                "name": "Identifier",
                                "src": "10998:12:9"
                              }
                            ],
                            "id": 3331,
                            "name": "MemberAccess",
                            "src": "10998:39:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3323,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3332,
                            "name": "Identifier",
                            "src": "11038:11:9"
                          }
                        ],
                        "id": 3333,
                        "name": "FunctionCall",
                        "src": "10998:52:9"
                      }
                    ],
                    "id": 3334,
                    "name": "VariableDeclarationStatement",
                    "src": "10977:73:9"
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
                          "scope": 3424,
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
                            "id": 3335,
                            "name": "ElementaryTypeName",
                            "src": "11141:4:9"
                          }
                        ],
                        "id": 3336,
                        "name": "VariableDeclaration",
                        "src": "11141:24:9"
                      }
                    ],
                    "id": 3337,
                    "name": "VariableDeclarationStatement",
                    "src": "11141:24:9"
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
                          "name": "principalPlusInterest",
                          "scope": 3424,
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
                            "id": 3338,
                            "name": "ElementaryTypeName",
                            "src": "11289:4:9"
                          }
                        ],
                        "id": 3339,
                        "name": "VariableDeclaration",
                        "src": "11289:26:9"
                      }
                    ],
                    "id": 3340,
                    "name": "VariableDeclarationStatement",
                    "src": "11289:26:9"
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
                          "scope": 3424,
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
                            "id": 3341,
                            "name": "ElementaryTypeName",
                            "src": "11415:4:9"
                          }
                        ],
                        "id": 3342,
                        "name": "VariableDeclaration",
                        "src": "11415:31:9"
                      }
                    ],
                    "id": 3343,
                    "name": "VariableDeclarationStatement",
                    "src": "11415:31:9"
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
                          "scope": 3424,
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
                            "id": 3344,
                            "name": "ElementaryTypeName",
                            "src": "11553:4:9"
                          }
                        ],
                        "id": 3345,
                        "name": "VariableDeclaration",
                        "src": "11553:34:9"
                      }
                    ],
                    "id": 3346,
                    "name": "VariableDeclarationStatement",
                    "src": "11553:34:9"
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
                                  "referencedDeclaration": 3336,
                                  "type": "uint256",
                                  "value": "principalTokenIndex"
                                },
                                "id": 3347,
                                "name": "Identifier",
                                "src": "11599:19:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3339,
                                  "type": "uint256",
                                  "value": "principalPlusInterest"
                                },
                                "id": 3348,
                                "name": "Identifier",
                                "src": "11620:21:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3342,
                                  "type": "uint256",
                                  "value": "amortizationUnitTypeAsUint"
                                },
                                "id": 3349,
                                "name": "Identifier",
                                "src": "11643:26:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3345,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3350,
                                "name": "Identifier",
                                "src": "11671:29:9"
                              }
                            ],
                            "id": 3351,
                            "name": "TupleExpression",
                            "src": "11598:103:9"
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
                              "type": "tuple(uint256,uint256,uint256,uint256)",
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
                                  "referencedDeclaration": 3291,
                                  "type": "function (bytes32) pure returns (uint256,uint256,uint256,uint256)",
                                  "value": "unpackParametersFromBytes"
                                },
                                "id": 3352,
                                "name": "Identifier",
                                "src": "11716:25:9"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3329,
                                  "type": "bytes32",
                                  "value": "parameters"
                                },
                                "id": 3353,
                                "name": "Identifier",
                                "src": "11742:10:9"
                              }
                            ],
                            "id": 3354,
                            "name": "FunctionCall",
                            "src": "11716:37:9"
                          }
                        ],
                        "id": 3355,
                        "name": "Assignment",
                        "src": "11598:155:9"
                      }
                    ],
                    "id": 3356,
                    "name": "ExpressionStatement",
                    "src": "11598:155:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3358
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "principalTokenAddress",
                          "scope": 3424,
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
                            "id": 3357,
                            "name": "ElementaryTypeName",
                            "src": "11764:7:9"
                          }
                        ],
                        "id": 3358,
                        "name": "VariableDeclaration",
                        "src": "11764:29:9"
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
                              "referencedDeclaration": 2195,
                              "type": "function (uint256) view external returns (address)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2924,
                                  "type": "contract TokenRegistry",
                                  "value": "tokenRegistry"
                                },
                                "id": 3359,
                                "name": "Identifier",
                                "src": "11808:13:9"
                              }
                            ],
                            "id": 3360,
                            "name": "MemberAccess",
                            "src": "11808:36:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3336,
                              "type": "uint256",
                              "value": "principalTokenIndex"
                            },
                            "id": 3361,
                            "name": "Identifier",
                            "src": "11845:19:9"
                          }
                        ],
                        "id": 3362,
                        "name": "FunctionCall",
                        "src": "11808:57:9"
                      }
                    ],
                    "id": 3363,
                    "name": "VariableDeclarationStatement",
                    "src": "11764:101:9"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3364,
                            "name": "Identifier",
                            "src": "11944:7:9"
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
                                  "referencedDeclaration": 3358,
                                  "type": "address",
                                  "value": "principalTokenAddress"
                                },
                                "id": 3365,
                                "name": "Identifier",
                                "src": "11952:21:9"
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
                                    "id": 3366,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "11977:7:9"
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
                                    "id": 3367,
                                    "name": "Literal",
                                    "src": "11985:1:9"
                                  }
                                ],
                                "id": 3368,
                                "name": "FunctionCall",
                                "src": "11977:10:9"
                              }
                            ],
                            "id": 3369,
                            "name": "BinaryOperation",
                            "src": "11952:35:9"
                          }
                        ],
                        "id": 3370,
                        "name": "FunctionCall",
                        "src": "11944:44:9"
                      }
                    ],
                    "id": 3371,
                    "name": "ExpressionStatement",
                    "src": "11944:44:9"
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
                              "referencedDeclaration": 5488,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 3372,
                            "name": "Identifier",
                            "src": "12101:7:9"
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
                                  "referencedDeclaration": 3342,
                                  "type": "uint256",
                                  "value": "amortizationUnitTypeAsUint"
                                },
                                "id": 3373,
                                "name": "Identifier",
                                "src": "12109:26:9"
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
                                          "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
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
                                    "id": 3374,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "12139:4:9"
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
                                          "referencedDeclaration": 2875,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3375,
                                        "name": "Identifier",
                                        "src": "12144:20:9"
                                      }
                                    ],
                                    "id": 3376,
                                    "name": "MemberAccess",
                                    "src": "12144:26:9"
                                  }
                                ],
                                "id": 3377,
                                "name": "FunctionCall",
                                "src": "12139:32:9"
                              }
                            ],
                            "id": 3378,
                            "name": "BinaryOperation",
                            "src": "12109:62:9"
                          }
                        ],
                        "id": 3379,
                        "name": "FunctionCall",
                        "src": "12101:71:9"
                      }
                    ],
                    "id": 3380,
                    "name": "ExpressionStatement",
                    "src": "12101:71:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3382
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitType",
                          "scope": 3424,
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
                              "referencedDeclaration": 2875,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                            },
                            "id": 3381,
                            "name": "UserDefinedTypeName",
                            "src": "12183:20:9"
                          }
                        ],
                        "id": 3382,
                        "name": "VariableDeclaration",
                        "src": "12183:41:9"
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
                              "referencedDeclaration": 2875,
                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                              "value": "AmortizationUnitType"
                            },
                            "id": 3383,
                            "name": "Identifier",
                            "src": "12227:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3342,
                              "type": "uint256",
                              "value": "amortizationUnitTypeAsUint"
                            },
                            "id": 3384,
                            "name": "Identifier",
                            "src": "12248:26:9"
                          }
                        ],
                        "id": 3385,
                        "name": "FunctionCall",
                        "src": "12227:48:9"
                      }
                    ],
                    "id": 3386,
                    "name": "VariableDeclarationStatement",
                    "src": "12183:92:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3388
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "amortizationUnitLengthInSeconds",
                          "scope": 3424,
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
                            "id": 3387,
                            "name": "ElementaryTypeName",
                            "src": "12286:4:9"
                          }
                        ],
                        "id": 3388,
                        "name": "VariableDeclaration",
                        "src": "12286:36:9"
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
                                  "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
                                  "typeString": "enum SimpleInterestTermsContract.AmortizationUnitType"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3476,
                              "type": "function (enum SimpleInterestTermsContract.AmortizationUnitType) pure returns (uint256)",
                              "value": "getAmortizationUnitLengthInSeconds"
                            },
                            "id": 3389,
                            "name": "Identifier",
                            "src": "12337:34:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3382,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3390,
                            "name": "Identifier",
                            "src": "12372:20:9"
                          }
                        ],
                        "id": 3391,
                        "name": "FunctionCall",
                        "src": "12337:56:9"
                      }
                    ],
                    "id": 3392,
                    "name": "VariableDeclarationStatement",
                    "src": "12286:107:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3394
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "issuanceBlockTimestamp",
                          "scope": 3424,
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
                            "id": 3393,
                            "name": "ElementaryTypeName",
                            "src": "12403:4:9"
                          }
                        ],
                        "id": 3394,
                        "name": "VariableDeclaration",
                        "src": "12403:27:9"
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
                              "referencedDeclaration": 1601,
                              "type": "function (bytes32) view external returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2922,
                                  "type": "contract DebtRegistry",
                                  "value": "debtRegistry"
                                },
                                "id": 3395,
                                "name": "Identifier",
                                "src": "12445:12:9"
                              }
                            ],
                            "id": 3396,
                            "name": "MemberAccess",
                            "src": "12445:38:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3323,
                              "type": "bytes32",
                              "value": "agreementId"
                            },
                            "id": 3397,
                            "name": "Identifier",
                            "src": "12484:11:9"
                          }
                        ],
                        "id": 3398,
                        "name": "FunctionCall",
                        "src": "12445:51:9"
                      }
                    ],
                    "id": 3399,
                    "name": "VariableDeclarationStatement",
                    "src": "12403:93:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3401
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termLengthInSeconds",
                          "scope": 3424,
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
                            "id": 3400,
                            "name": "ElementaryTypeName",
                            "src": "12506:4:9"
                          }
                        ],
                        "id": 3401,
                        "name": "VariableDeclaration",
                        "src": "12506:24:9"
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
                              "referencedDeclaration": 5279,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3345,
                                  "type": "uint256",
                                  "value": "termLengthInAmortizationUnits"
                                },
                                "id": 3402,
                                "name": "Identifier",
                                "src": "12545:29:9"
                              }
                            ],
                            "id": 3403,
                            "name": "MemberAccess",
                            "src": "12545:33:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3388,
                              "type": "uint256",
                              "value": "amortizationUnitLengthInSeconds"
                            },
                            "id": 3404,
                            "name": "Identifier",
                            "src": "12579:31:9"
                          }
                        ],
                        "id": 3405,
                        "name": "FunctionCall",
                        "src": "12545:66:9"
                      }
                    ],
                    "id": 3406,
                    "name": "VariableDeclarationStatement",
                    "src": "12506:105:9"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        3408
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "termEndUnixTimestamp",
                          "scope": 3424,
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
                            "id": 3407,
                            "name": "ElementaryTypeName",
                            "src": "12621:4:9"
                          }
                        ],
                        "id": 3408,
                        "name": "VariableDeclaration",
                        "src": "12621:25:9"
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
                              "referencedDeclaration": 5341,
                              "type": "function (uint256,uint256) pure returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 3401,
                                  "type": "uint256",
                                  "value": "termLengthInSeconds"
                                },
                                "id": 3409,
                                "name": "Identifier",
                                "src": "12661:19:9"
                              }
                            ],
                            "id": 3410,
                            "name": "MemberAccess",
                            "src": "12661:23:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3394,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3411,
                            "name": "Identifier",
                            "src": "12685:22:9"
                          }
                        ],
                        "id": 3412,
                        "name": "FunctionCall",
                        "src": "12661:47:9"
                      }
                    ],
                    "id": 3413,
                    "name": "VariableDeclarationStatement",
                    "src": "12621:87:9"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 3327
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
                            "principalPlusInterest",
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
                              "referencedDeclaration": 2891,
                              "type": "type(struct SimpleInterestTermsContract.SimpleInterestParams storage pointer)",
                              "value": "SimpleInterestParams"
                            },
                            "id": 3414,
                            "name": "Identifier",
                            "src": "12726:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3358,
                              "type": "address",
                              "value": "principalTokenAddress"
                            },
                            "id": 3415,
                            "name": "Identifier",
                            "src": "12784:21:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3339,
                              "type": "uint256",
                              "value": "principalPlusInterest"
                            },
                            "id": 3416,
                            "name": "Identifier",
                            "src": "12842:21:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3394,
                              "type": "uint256",
                              "value": "issuanceBlockTimestamp"
                            },
                            "id": 3417,
                            "name": "Identifier",
                            "src": "12901:22:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3408,
                              "type": "uint256",
                              "value": "termEndUnixTimestamp"
                            },
                            "id": 3418,
                            "name": "Identifier",
                            "src": "12959:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3382,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3419,
                            "name": "Identifier",
                            "src": "13015:20:9"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 3345,
                              "type": "uint256",
                              "value": "termLengthInAmortizationUnits"
                            },
                            "id": 3420,
                            "name": "Identifier",
                            "src": "13080:29:9"
                          }
                        ],
                        "id": 3421,
                        "name": "FunctionCall",
                        "src": "12726:394:9"
                      }
                    ],
                    "id": 3422,
                    "name": "Return",
                    "src": "12719:401:9"
                  }
                ],
                "id": 3423,
                "name": "Block",
                "src": "10967:2160:9"
              }
            ],
            "id": 3424,
            "name": "FunctionDefinition",
            "src": "10829:2298:9"
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
              "scope": 3477,
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
                      "scope": 3476,
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
                          "referencedDeclaration": 2875,
                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType"
                        },
                        "id": 3425,
                        "name": "UserDefinedTypeName",
                        "src": "13177:20:9"
                      }
                    ],
                    "id": 3426,
                    "name": "VariableDeclaration",
                    "src": "13177:41:9"
                  }
                ],
                "id": 3427,
                "name": "ParameterList",
                "src": "13176:43:9"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_amortizationUnitLengthInSeconds",
                      "scope": 3476,
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
                        "id": 3428,
                        "name": "ElementaryTypeName",
                        "src": "13267:4:9"
                      }
                    ],
                    "id": 3429,
                    "name": "VariableDeclaration",
                    "src": "13267:37:9"
                  }
                ],
                "id": 3430,
                "name": "ParameterList",
                "src": "13266:39:9"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
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
                              "referencedDeclaration": 3426,
                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                              "value": "amortizationUnitType"
                            },
                            "id": 3431,
                            "name": "Identifier",
                            "src": "13324:20:9"
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
                                  "referencedDeclaration": 2875,
                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                  "value": "AmortizationUnitType"
                                },
                                "id": 3432,
                                "name": "Identifier",
                                "src": "13348:20:9"
                              }
                            ],
                            "id": 3433,
                            "name": "MemberAccess",
                            "src": "13348:26:9"
                          }
                        ],
                        "id": 3434,
                        "name": "BinaryOperation",
                        "src": "13324:50:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 3430
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2896,
                                  "type": "uint256",
                                  "value": "HOUR_LENGTH_IN_SECONDS"
                                },
                                "id": 3435,
                                "name": "Identifier",
                                "src": "13397:22:9"
                              }
                            ],
                            "id": 3436,
                            "name": "Return",
                            "src": "13390:29:9"
                          }
                        ],
                        "id": 3437,
                        "name": "Block",
                        "src": "13376:54:9"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
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
                                  "referencedDeclaration": 3426,
                                  "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                  "value": "amortizationUnitType"
                                },
                                "id": 3438,
                                "name": "Identifier",
                                "src": "13440:20:9"
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
                                      "referencedDeclaration": 2875,
                                      "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                      "value": "AmortizationUnitType"
                                    },
                                    "id": 3439,
                                    "name": "Identifier",
                                    "src": "13464:20:9"
                                  }
                                ],
                                "id": 3440,
                                "name": "MemberAccess",
                                "src": "13464:25:9"
                              }
                            ],
                            "id": 3441,
                            "name": "BinaryOperation",
                            "src": "13440:49:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "functionReturnParameters": 3430
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2901,
                                      "type": "uint256",
                                      "value": "DAY_LENGTH_IN_SECONDS"
                                    },
                                    "id": 3442,
                                    "name": "Identifier",
                                    "src": "13512:21:9"
                                  }
                                ],
                                "id": 3443,
                                "name": "Return",
                                "src": "13505:28:9"
                              }
                            ],
                            "id": 3444,
                            "name": "Block",
                            "src": "13491:53:9"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
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
                                      "referencedDeclaration": 3426,
                                      "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                      "value": "amortizationUnitType"
                                    },
                                    "id": 3445,
                                    "name": "Identifier",
                                    "src": "13554:20:9"
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
                                          "referencedDeclaration": 2875,
                                          "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                          "value": "AmortizationUnitType"
                                        },
                                        "id": 3446,
                                        "name": "Identifier",
                                        "src": "13578:20:9"
                                      }
                                    ],
                                    "id": 3447,
                                    "name": "MemberAccess",
                                    "src": "13578:26:9"
                                  }
                                ],
                                "id": 3448,
                                "name": "BinaryOperation",
                                "src": "13554:50:9"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "functionReturnParameters": 3430
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2906,
                                          "type": "uint256",
                                          "value": "WEEK_LENGTH_IN_SECONDS"
                                        },
                                        "id": 3449,
                                        "name": "Identifier",
                                        "src": "13627:22:9"
                                      }
                                    ],
                                    "id": 3450,
                                    "name": "Return",
                                    "src": "13620:29:9"
                                  }
                                ],
                                "id": 3451,
                                "name": "Block",
                                "src": "13606:54:9"
                              },
                              {
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
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
                                          "referencedDeclaration": 3426,
                                          "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                          "value": "amortizationUnitType"
                                        },
                                        "id": 3452,
                                        "name": "Identifier",
                                        "src": "13670:20:9"
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
                                              "referencedDeclaration": 2875,
                                              "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                              "value": "AmortizationUnitType"
                                            },
                                            "id": 3453,
                                            "name": "Identifier",
                                            "src": "13694:20:9"
                                          }
                                        ],
                                        "id": 3454,
                                        "name": "MemberAccess",
                                        "src": "13694:27:9"
                                      }
                                    ],
                                    "id": 3455,
                                    "name": "BinaryOperation",
                                    "src": "13670:51:9"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "functionReturnParameters": 3430
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2911,
                                              "type": "uint256",
                                              "value": "MONTH_LENGTH_IN_SECONDS"
                                            },
                                            "id": 3456,
                                            "name": "Identifier",
                                            "src": "13744:23:9"
                                          }
                                        ],
                                        "id": 3457,
                                        "name": "Return",
                                        "src": "13737:30:9"
                                      }
                                    ],
                                    "id": 3458,
                                    "name": "Block",
                                    "src": "13723:55:9"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_enum$_AmortizationUnitType_$2875",
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
                                              "referencedDeclaration": 3426,
                                              "type": "enum SimpleInterestTermsContract.AmortizationUnitType",
                                              "value": "amortizationUnitType"
                                            },
                                            "id": 3459,
                                            "name": "Identifier",
                                            "src": "13788:20:9"
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
                                                  "referencedDeclaration": 2875,
                                                  "type": "type(enum SimpleInterestTermsContract.AmortizationUnitType)",
                                                  "value": "AmortizationUnitType"
                                                },
                                                "id": 3460,
                                                "name": "Identifier",
                                                "src": "13812:20:9"
                                              }
                                            ],
                                            "id": 3461,
                                            "name": "MemberAccess",
                                            "src": "13812:26:9"
                                          }
                                        ],
                                        "id": 3462,
                                        "name": "BinaryOperation",
                                        "src": "13788:50:9"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "functionReturnParameters": 3430
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 2916,
                                                  "type": "uint256",
                                                  "value": "YEAR_LENGTH_IN_SECONDS"
                                                },
                                                "id": 3463,
                                                "name": "Identifier",
                                                "src": "13861:22:9"
                                              }
                                            ],
                                            "id": 3464,
                                            "name": "Return",
                                            "src": "13854:29:9"
                                          }
                                        ],
                                        "id": 3465,
                                        "name": "Block",
                                        "src": "13840:54:9"
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
                                                      "referencedDeclaration": 5489,
                                                      "type": "function () pure",
                                                      "value": "revert"
                                                    },
                                                    "id": 3466,
                                                    "name": "Identifier",
                                                    "src": "13914:6:9"
                                                  }
                                                ],
                                                "id": 3467,
                                                "name": "FunctionCall",
                                                "src": "13914:8:9"
                                              }
                                            ],
                                            "id": 3468,
                                            "name": "ExpressionStatement",
                                            "src": "13914:8:9"
                                          }
                                        ],
                                        "id": 3469,
                                        "name": "Block",
                                        "src": "13900:33:9"
                                      }
                                    ],
                                    "id": 3470,
                                    "name": "IfStatement",
                                    "src": "13784:149:9"
                                  }
                                ],
                                "id": 3471,
                                "name": "IfStatement",
                                "src": "13666:267:9"
                              }
                            ],
                            "id": 3472,
                            "name": "IfStatement",
                            "src": "13550:383:9"
                          }
                        ],
                        "id": 3473,
                        "name": "IfStatement",
                        "src": "13436:497:9"
                      }
                    ],
                    "id": 3474,
                    "name": "IfStatement",
                    "src": "13320:613:9"
                  }
                ],
                "id": 3475,
                "name": "Block",
                "src": "13310:629:9"
              }
            ],
            "id": 3476,
            "name": "FunctionDefinition",
            "src": "13133:806:9"
          }
        ],
        "id": 3477,
        "name": "ContractDefinition",
        "src": "759:13182:9"
      }
    ],
    "id": 3478,
    "name": "SourceUnit",
    "src": "584:13358:9"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {
    "42": {
      "events": {},
      "links": {},
      "address": "0x578f485bf618cd748ec369ca85e9dd1399121244"
    }
  },
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-03-25T03:18:28.747Z"
}