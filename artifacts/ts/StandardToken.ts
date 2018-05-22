export const StandardToken = 
{
  "contractName": "StandardToken",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
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
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
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
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "balance",
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
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
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
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
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
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
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
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b610fea8061001e6000396000f30060606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461009357806318160ddd146100ed57806323b872dd14610116578063661884631461018f57806370a08231146101e9578063a9059cbb14610236578063d73dd62314610290578063dd62ed3e146102ea575b600080fd5b341561009e57600080fd5b6100d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610356565b604051808215151515815260200191505060405180910390f35b34156100f857600080fd5b610100610448565b6040518082815260200191505060405180910390f35b341561012157600080fd5b610175600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610452565b604051808215151515815260200191505060405180910390f35b341561019a57600080fd5b6101cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061080c565b604051808215151515815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9d565b6040518082815260200191505060405180910390f35b341561024157600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae5565b604051808215151515815260200191505060405180910390f35b341561029b57600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d04565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610340600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f00565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561048f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156104dc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561056757600080fd5b6105b8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061071c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561091d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b1565b6109308382610f8790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b2257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610b6f57600080fd5b610bc0826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c53826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610d9582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610f9557fe5b818303905092915050565b6000808284019050838110151515610fb457fe5b80915050929150505600a165627a7a723058202fd2ce582d5e79b88bbbab1e1d860be60c89586d34ff94ba9b168579ea6253530029",
  "deployedBytecode": "0x60606040526004361061008e576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063095ea7b31461009357806318160ddd146100ed57806323b872dd14610116578063661884631461018f57806370a08231146101e9578063a9059cbb14610236578063d73dd62314610290578063dd62ed3e146102ea575b600080fd5b341561009e57600080fd5b6100d3600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610356565b604051808215151515815260200191505060405180910390f35b34156100f857600080fd5b610100610448565b6040518082815260200191505060405180910390f35b341561012157600080fd5b610175600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610452565b604051808215151515815260200191505060405180910390f35b341561019a57600080fd5b6101cf600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061080c565b604051808215151515815260200191505060405180910390f35b34156101f457600080fd5b610220600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610a9d565b6040518082815260200191505060405180910390f35b341561024157600080fd5b610276600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ae5565b604051808215151515815260200191505060405180910390f35b341561029b57600080fd5b6102d0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610d04565b604051808215151515815260200191505060405180910390f35b34156102f557600080fd5b610340600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610f00565b6040518082815260200191505060405180910390f35b600081600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415151561048f57600080fd5b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205482111515156104dc57600080fd5b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054821115151561056757600080fd5b6105b8826000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061064b826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061071c82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508083111561091d576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109b1565b6109308382610f8790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610b2257600080fd5b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211151515610b6f57600080fd5b610bc0826000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f8790919063ffffffff16565b6000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610c53826000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a36001905092915050565b6000610d9582600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fa090919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a36001905092915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6000828211151515610f9557fe5b818303905092915050565b6000808284019050838110151515610fb457fe5b80915050929150505600a165627a7a723058202fd2ce582d5e79b88bbbab1e1d860be60c89586d34ff94ba9b168579ea6253530029",
  "sourceMap": "344:3659:37:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "344:3659:37:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:33;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:33:-;415:7;437:12;;430:19;;371:83;:::o;736:439:37:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;3602:398::-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:33:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:37:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;835:110:31:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./BasicToken.sol\";\nimport \"./ERC20.sol\";\n\n\n/**\n * @title Standard ERC20 token\n *\n * @dev Implementation of the basic standard token.\n * @dev https://github.com/ethereum/EIPs/issues/20\n * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol\n */\ncontract StandardToken is ERC20, BasicToken {\n\n  mapping (address => mapping (address => uint256)) internal allowed;\n\n\n  /**\n   * @dev Transfer tokens from one address to another\n   * @param _from address The address which you want to send tokens from\n   * @param _to address The address which you want to transfer to\n   * @param _value uint256 the amount of tokens to be transferred\n   */\n  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[_from]);\n    require(_value <= allowed[_from][msg.sender]);\n\n    balances[_from] = balances[_from].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);\n    Transfer(_from, _to, _value);\n    return true;\n  }\n\n  /**\n   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\n   *\n   * Beware that changing an allowance with this method brings the risk that someone may use both the old\n   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\n   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   * @param _spender The address which will spend the funds.\n   * @param _value The amount of tokens to be spent.\n   */\n  function approve(address _spender, uint256 _value) public returns (bool) {\n    allowed[msg.sender][_spender] = _value;\n    Approval(msg.sender, _spender, _value);\n    return true;\n  }\n\n  /**\n   * @dev Function to check the amount of tokens that an owner allowed to a spender.\n   * @param _owner address The address which owns the funds.\n   * @param _spender address The address which will spend the funds.\n   * @return A uint256 specifying the amount of tokens still available for the spender.\n   */\n  function allowance(address _owner, address _spender) public view returns (uint256) {\n    return allowed[_owner][_spender];\n  }\n\n  /**\n   * @dev Increase the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To increment\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _addedValue The amount of tokens to increase the allowance by.\n   */\n  function increaseApproval(address _spender, uint _addedValue) public returns (bool) {\n    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n  /**\n   * @dev Decrease the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To decrement\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _subtractedValue The amount of tokens to decrease the allowance by.\n   */\n  function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {\n    uint oldValue = allowed[msg.sender][_spender];\n    if (_subtractedValue > oldValue) {\n      allowed[msg.sender][_spender] = 0;\n    } else {\n      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);\n    }\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
      "exportedSymbols": {
        "StandardToken": [
          9303
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
        "id": 9059,
        "name": "PragmaDirective",
        "src": "0:24:37"
      },
      {
        "attributes": {
          "SourceUnit": 8888,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
          "file": "./BasicToken.sol",
          "scope": 9304,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9060,
        "name": "ImportDirective",
        "src": "26:26:37"
      },
      {
        "attributes": {
          "SourceUnit": 8931,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "./ERC20.sol",
          "scope": 9304,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 9061,
        "name": "ImportDirective",
        "src": "53:21:37"
      },
      {
        "attributes": {
          "contractDependencies": [
            8887,
            8930,
            8962
          ],
          "contractKind": "contract",
          "documentation": "@title Standard ERC20 token\n * @dev Implementation of the basic standard token.\n@dev https://github.com/ethereum/EIPs/issues/20\n@dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            9303,
            8887,
            8930,
            8962
          ],
          "name": "StandardToken",
          "scope": 9304
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
                  "name": "ERC20",
                  "referencedDeclaration": 8930,
                  "type": "contract ERC20"
                },
                "id": 9062,
                "name": "UserDefinedTypeName",
                "src": "370:5:37"
              }
            ],
            "id": 9063,
            "name": "InheritanceSpecifier",
            "src": "370:5:37"
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
                  "name": "BasicToken",
                  "referencedDeclaration": 8887,
                  "type": "contract BasicToken"
                },
                "id": 9064,
                "name": "UserDefinedTypeName",
                "src": "377:10:37"
              }
            ],
            "id": 9065,
            "name": "InheritanceSpecifier",
            "src": "377:10:37"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowed",
              "scope": 9303,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(address => mapping(address => uint256))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(address => mapping(address => uint256))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "address",
                      "type": "address"
                    },
                    "id": 9066,
                    "name": "ElementaryTypeName",
                    "src": "402:7:37"
                  },
                  {
                    "attributes": {
                      "type": "mapping(address => uint256)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 9067,
                        "name": "ElementaryTypeName",
                        "src": "422:7:37"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 9068,
                        "name": "ElementaryTypeName",
                        "src": "433:7:37"
                      }
                    ],
                    "id": 9069,
                    "name": "Mapping",
                    "src": "413:28:37"
                  }
                ],
                "id": 9070,
                "name": "Mapping",
                "src": "393:49:37"
              }
            ],
            "id": 9071,
            "name": "VariableDeclaration",
            "src": "393:66:37"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferFrom",
              "payable": false,
              "scope": 9303,
              "stateMutability": "nonpayable",
              "superFunction": 8912,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 9157,
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
                        "id": 9072,
                        "name": "ElementaryTypeName",
                        "src": "758:7:37"
                      }
                    ],
                    "id": 9073,
                    "name": "VariableDeclaration",
                    "src": "758:13:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 9157,
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
                        "id": 9074,
                        "name": "ElementaryTypeName",
                        "src": "773:7:37"
                      }
                    ],
                    "id": 9075,
                    "name": "VariableDeclaration",
                    "src": "773:11:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 9157,
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
                        "id": 9076,
                        "name": "ElementaryTypeName",
                        "src": "786:7:37"
                      }
                    ],
                    "id": 9077,
                    "name": "VariableDeclaration",
                    "src": "786:14:37"
                  }
                ],
                "id": 9078,
                "name": "ParameterList",
                "src": "757:44:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9157,
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
                        "id": 9079,
                        "name": "ElementaryTypeName",
                        "src": "818:4:37"
                      }
                    ],
                    "id": 9080,
                    "name": "VariableDeclaration",
                    "src": "818:4:37"
                  }
                ],
                "id": 9081,
                "name": "ParameterList",
                "src": "817:6:37"
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
                              "referencedDeclaration": 10476,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9082,
                            "name": "Identifier",
                            "src": "830:7:37"
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
                                  "referencedDeclaration": 9075,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9083,
                                "name": "Identifier",
                                "src": "838:3:37"
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
                                    "id": 9084,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "845:7:37"
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
                                    "id": 9085,
                                    "name": "Literal",
                                    "src": "853:1:37"
                                  }
                                ],
                                "id": 9086,
                                "name": "FunctionCall",
                                "src": "845:10:37"
                              }
                            ],
                            "id": 9087,
                            "name": "BinaryOperation",
                            "src": "838:17:37"
                          }
                        ],
                        "id": 9088,
                        "name": "FunctionCall",
                        "src": "830:26:37"
                      }
                    ],
                    "id": 9089,
                    "name": "ExpressionStatement",
                    "src": "830:26:37"
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
                              "referencedDeclaration": 10476,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9090,
                            "name": "Identifier",
                            "src": "862:7:37"
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
                                  "referencedDeclaration": 9077,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 9091,
                                "name": "Identifier",
                                "src": "870:6:37"
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
                                      "referencedDeclaration": 8804,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 9092,
                                    "name": "Identifier",
                                    "src": "880:8:37"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9073,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 9093,
                                    "name": "Identifier",
                                    "src": "889:5:37"
                                  }
                                ],
                                "id": 9094,
                                "name": "IndexAccess",
                                "src": "880:15:37"
                              }
                            ],
                            "id": 9095,
                            "name": "BinaryOperation",
                            "src": "870:25:37"
                          }
                        ],
                        "id": 9096,
                        "name": "FunctionCall",
                        "src": "862:34:37"
                      }
                    ],
                    "id": 9097,
                    "name": "ExpressionStatement",
                    "src": "862:34:37"
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
                              "referencedDeclaration": 10476,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 9098,
                            "name": "Identifier",
                            "src": "902:7:37"
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
                                  "referencedDeclaration": 9077,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 9099,
                                "name": "Identifier",
                                "src": "910:6:37"
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
                                      "type": "mapping(address => uint256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9071,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowed"
                                        },
                                        "id": 9100,
                                        "name": "Identifier",
                                        "src": "920:7:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9073,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 9101,
                                        "name": "Identifier",
                                        "src": "928:5:37"
                                      }
                                    ],
                                    "id": 9102,
                                    "name": "IndexAccess",
                                    "src": "920:14:37"
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
                                          "referencedDeclaration": 10473,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9103,
                                        "name": "Identifier",
                                        "src": "935:3:37"
                                      }
                                    ],
                                    "id": 9104,
                                    "name": "MemberAccess",
                                    "src": "935:10:37"
                                  }
                                ],
                                "id": 9105,
                                "name": "IndexAccess",
                                "src": "920:26:37"
                              }
                            ],
                            "id": 9106,
                            "name": "BinaryOperation",
                            "src": "910:36:37"
                          }
                        ],
                        "id": 9107,
                        "name": "FunctionCall",
                        "src": "902:45:37"
                      }
                    ],
                    "id": 9108,
                    "name": "ExpressionStatement",
                    "src": "902:45:37"
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
                                  "referencedDeclaration": 8804,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 9109,
                                "name": "Identifier",
                                "src": "954:8:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9073,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 9110,
                                "name": "Identifier",
                                "src": "963:5:37"
                              }
                            ],
                            "id": 9111,
                            "name": "IndexAccess",
                            "src": "954:15:37"
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
                                  "referencedDeclaration": 8710,
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
                                          "referencedDeclaration": 8804,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 9112,
                                        "name": "Identifier",
                                        "src": "972:8:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9073,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 9113,
                                        "name": "Identifier",
                                        "src": "981:5:37"
                                      }
                                    ],
                                    "id": 9114,
                                    "name": "IndexAccess",
                                    "src": "972:15:37"
                                  }
                                ],
                                "id": 9115,
                                "name": "MemberAccess",
                                "src": "972:19:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9077,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 9116,
                                "name": "Identifier",
                                "src": "992:6:37"
                              }
                            ],
                            "id": 9117,
                            "name": "FunctionCall",
                            "src": "972:27:37"
                          }
                        ],
                        "id": 9118,
                        "name": "Assignment",
                        "src": "954:45:37"
                      }
                    ],
                    "id": 9119,
                    "name": "ExpressionStatement",
                    "src": "954:45:37"
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
                                  "referencedDeclaration": 8804,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 9120,
                                "name": "Identifier",
                                "src": "1005:8:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9075,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 9121,
                                "name": "Identifier",
                                "src": "1014:3:37"
                              }
                            ],
                            "id": 9122,
                            "name": "IndexAccess",
                            "src": "1005:13:37"
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
                                  "referencedDeclaration": 8734,
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
                                          "referencedDeclaration": 8804,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 9123,
                                        "name": "Identifier",
                                        "src": "1021:8:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9075,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 9124,
                                        "name": "Identifier",
                                        "src": "1030:3:37"
                                      }
                                    ],
                                    "id": 9125,
                                    "name": "IndexAccess",
                                    "src": "1021:13:37"
                                  }
                                ],
                                "id": 9126,
                                "name": "MemberAccess",
                                "src": "1021:17:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9077,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 9127,
                                "name": "Identifier",
                                "src": "1039:6:37"
                              }
                            ],
                            "id": 9128,
                            "name": "FunctionCall",
                            "src": "1021:25:37"
                          }
                        ],
                        "id": 9129,
                        "name": "Assignment",
                        "src": "1005:41:37"
                      }
                    ],
                    "id": 9130,
                    "name": "ExpressionStatement",
                    "src": "1005:41:37"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9071,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 9131,
                                    "name": "Identifier",
                                    "src": "1052:7:37"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9073,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 9132,
                                    "name": "Identifier",
                                    "src": "1060:5:37"
                                  }
                                ],
                                "id": 9135,
                                "name": "IndexAccess",
                                "src": "1052:14:37"
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
                                      "referencedDeclaration": 10473,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 9133,
                                    "name": "Identifier",
                                    "src": "1067:3:37"
                                  }
                                ],
                                "id": 9134,
                                "name": "MemberAccess",
                                "src": "1067:10:37"
                              }
                            ],
                            "id": 9136,
                            "name": "IndexAccess",
                            "src": "1052:26:37"
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
                                  "referencedDeclaration": 8710,
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9071,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 9137,
                                            "name": "Identifier",
                                            "src": "1081:7:37"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9073,
                                              "type": "address",
                                              "value": "_from"
                                            },
                                            "id": 9138,
                                            "name": "Identifier",
                                            "src": "1089:5:37"
                                          }
                                        ],
                                        "id": 9139,
                                        "name": "IndexAccess",
                                        "src": "1081:14:37"
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
                                              "referencedDeclaration": 10473,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 9140,
                                            "name": "Identifier",
                                            "src": "1096:3:37"
                                          }
                                        ],
                                        "id": 9141,
                                        "name": "MemberAccess",
                                        "src": "1096:10:37"
                                      }
                                    ],
                                    "id": 9142,
                                    "name": "IndexAccess",
                                    "src": "1081:26:37"
                                  }
                                ],
                                "id": 9143,
                                "name": "MemberAccess",
                                "src": "1081:30:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9077,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 9144,
                                "name": "Identifier",
                                "src": "1112:6:37"
                              }
                            ],
                            "id": 9145,
                            "name": "FunctionCall",
                            "src": "1081:38:37"
                          }
                        ],
                        "id": 9146,
                        "name": "Assignment",
                        "src": "1052:67:37"
                      }
                    ],
                    "id": 9147,
                    "name": "ExpressionStatement",
                    "src": "1052:67:37"
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
                              "referencedDeclaration": 8961,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 9148,
                            "name": "Identifier",
                            "src": "1125:8:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9073,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 9149,
                            "name": "Identifier",
                            "src": "1134:5:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9075,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 9150,
                            "name": "Identifier",
                            "src": "1141:3:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9077,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 9151,
                            "name": "Identifier",
                            "src": "1146:6:37"
                          }
                        ],
                        "id": 9152,
                        "name": "FunctionCall",
                        "src": "1125:28:37"
                      }
                    ],
                    "id": 9153,
                    "name": "ExpressionStatement",
                    "src": "1125:28:37"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9081
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
                        "id": 9154,
                        "name": "Literal",
                        "src": "1166:4:37"
                      }
                    ],
                    "id": 9155,
                    "name": "Return",
                    "src": "1159:11:37"
                  }
                ],
                "id": 9156,
                "name": "Block",
                "src": "824:351:37"
              }
            ],
            "id": 9157,
            "name": "FunctionDefinition",
            "src": "736:439:37"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "approve",
              "payable": false,
              "scope": 9303,
              "stateMutability": "nonpayable",
              "superFunction": 8921,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 9185,
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
                        "id": 9158,
                        "name": "ElementaryTypeName",
                        "src": "1815:7:37"
                      }
                    ],
                    "id": 9159,
                    "name": "VariableDeclaration",
                    "src": "1815:16:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 9185,
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
                        "id": 9160,
                        "name": "ElementaryTypeName",
                        "src": "1833:7:37"
                      }
                    ],
                    "id": 9161,
                    "name": "VariableDeclaration",
                    "src": "1833:14:37"
                  }
                ],
                "id": 9162,
                "name": "ParameterList",
                "src": "1814:34:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9185,
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
                        "id": 9163,
                        "name": "ElementaryTypeName",
                        "src": "1865:4:37"
                      }
                    ],
                    "id": 9164,
                    "name": "VariableDeclaration",
                    "src": "1865:4:37"
                  }
                ],
                "id": 9165,
                "name": "ParameterList",
                "src": "1864:6:37"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9071,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 9166,
                                    "name": "Identifier",
                                    "src": "1877:7:37"
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
                                          "referencedDeclaration": 10473,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9167,
                                        "name": "Identifier",
                                        "src": "1885:3:37"
                                      }
                                    ],
                                    "id": 9168,
                                    "name": "MemberAccess",
                                    "src": "1885:10:37"
                                  }
                                ],
                                "id": 9170,
                                "name": "IndexAccess",
                                "src": "1877:19:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9159,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 9169,
                                "name": "Identifier",
                                "src": "1897:8:37"
                              }
                            ],
                            "id": 9171,
                            "name": "IndexAccess",
                            "src": "1877:29:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9161,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 9172,
                            "name": "Identifier",
                            "src": "1909:6:37"
                          }
                        ],
                        "id": 9173,
                        "name": "Assignment",
                        "src": "1877:38:37"
                      }
                    ],
                    "id": 9174,
                    "name": "ExpressionStatement",
                    "src": "1877:38:37"
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
                              "referencedDeclaration": 8929,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 9175,
                            "name": "Identifier",
                            "src": "1921:8:37"
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
                                  "referencedDeclaration": 10473,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 9176,
                                "name": "Identifier",
                                "src": "1930:3:37"
                              }
                            ],
                            "id": 9177,
                            "name": "MemberAccess",
                            "src": "1930:10:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9159,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 9178,
                            "name": "Identifier",
                            "src": "1942:8:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9161,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 9179,
                            "name": "Identifier",
                            "src": "1952:6:37"
                          }
                        ],
                        "id": 9180,
                        "name": "FunctionCall",
                        "src": "1921:38:37"
                      }
                    ],
                    "id": 9181,
                    "name": "ExpressionStatement",
                    "src": "1921:38:37"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9165
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
                        "id": 9182,
                        "name": "Literal",
                        "src": "1972:4:37"
                      }
                    ],
                    "id": 9183,
                    "name": "Return",
                    "src": "1965:11:37"
                  }
                ],
                "id": 9184,
                "name": "Block",
                "src": "1871:110:37"
              }
            ],
            "id": 9185,
            "name": "FunctionDefinition",
            "src": "1798:183:37"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "allowance",
              "payable": false,
              "scope": 9303,
              "stateMutability": "view",
              "superFunction": 8901,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 9201,
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
                        "id": 9186,
                        "name": "ElementaryTypeName",
                        "src": "2319:7:37"
                      }
                    ],
                    "id": 9187,
                    "name": "VariableDeclaration",
                    "src": "2319:14:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 9201,
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
                        "id": 9188,
                        "name": "ElementaryTypeName",
                        "src": "2335:7:37"
                      }
                    ],
                    "id": 9189,
                    "name": "VariableDeclaration",
                    "src": "2335:16:37"
                  }
                ],
                "id": 9190,
                "name": "ParameterList",
                "src": "2318:34:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9201,
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
                        "id": 9191,
                        "name": "ElementaryTypeName",
                        "src": "2374:7:37"
                      }
                    ],
                    "id": 9192,
                    "name": "VariableDeclaration",
                    "src": "2374:7:37"
                  }
                ],
                "id": 9193,
                "name": "ParameterList",
                "src": "2373:9:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 9193
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
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9071,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 9194,
                                "name": "Identifier",
                                "src": "2396:7:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9187,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 9195,
                                "name": "Identifier",
                                "src": "2404:6:37"
                              }
                            ],
                            "id": 9196,
                            "name": "IndexAccess",
                            "src": "2396:15:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9189,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 9197,
                            "name": "Identifier",
                            "src": "2412:8:37"
                          }
                        ],
                        "id": 9198,
                        "name": "IndexAccess",
                        "src": "2396:25:37"
                      }
                    ],
                    "id": 9199,
                    "name": "Return",
                    "src": "2389:32:37"
                  }
                ],
                "id": 9200,
                "name": "Block",
                "src": "2383:43:37"
              }
            ],
            "id": 9201,
            "name": "FunctionDefinition",
            "src": "2300:126:37"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "increaseApproval",
              "payable": false,
              "scope": 9303,
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
                      "name": "_spender",
                      "scope": 9242,
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
                        "id": 9202,
                        "name": "ElementaryTypeName",
                        "src": "2909:7:37"
                      }
                    ],
                    "id": 9203,
                    "name": "VariableDeclaration",
                    "src": "2909:16:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addedValue",
                      "scope": 9242,
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
                        "id": 9204,
                        "name": "ElementaryTypeName",
                        "src": "2927:4:37"
                      }
                    ],
                    "id": 9205,
                    "name": "VariableDeclaration",
                    "src": "2927:16:37"
                  }
                ],
                "id": 9206,
                "name": "ParameterList",
                "src": "2908:36:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9242,
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
                        "id": 9207,
                        "name": "ElementaryTypeName",
                        "src": "2961:4:37"
                      }
                    ],
                    "id": 9208,
                    "name": "VariableDeclaration",
                    "src": "2961:4:37"
                  }
                ],
                "id": 9209,
                "name": "ParameterList",
                "src": "2960:6:37"
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
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9071,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 9210,
                                    "name": "Identifier",
                                    "src": "2973:7:37"
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
                                          "referencedDeclaration": 10473,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9211,
                                        "name": "Identifier",
                                        "src": "2981:3:37"
                                      }
                                    ],
                                    "id": 9212,
                                    "name": "MemberAccess",
                                    "src": "2981:10:37"
                                  }
                                ],
                                "id": 9214,
                                "name": "IndexAccess",
                                "src": "2973:19:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9203,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 9213,
                                "name": "Identifier",
                                "src": "2993:8:37"
                              }
                            ],
                            "id": 9215,
                            "name": "IndexAccess",
                            "src": "2973:29:37"
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
                                  "referencedDeclaration": 8734,
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9071,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 9216,
                                            "name": "Identifier",
                                            "src": "3005:7:37"
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
                                                  "referencedDeclaration": 10473,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 9217,
                                                "name": "Identifier",
                                                "src": "3013:3:37"
                                              }
                                            ],
                                            "id": 9218,
                                            "name": "MemberAccess",
                                            "src": "3013:10:37"
                                          }
                                        ],
                                        "id": 9219,
                                        "name": "IndexAccess",
                                        "src": "3005:19:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9203,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 9220,
                                        "name": "Identifier",
                                        "src": "3025:8:37"
                                      }
                                    ],
                                    "id": 9221,
                                    "name": "IndexAccess",
                                    "src": "3005:29:37"
                                  }
                                ],
                                "id": 9222,
                                "name": "MemberAccess",
                                "src": "3005:33:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9205,
                                  "type": "uint256",
                                  "value": "_addedValue"
                                },
                                "id": 9223,
                                "name": "Identifier",
                                "src": "3039:11:37"
                              }
                            ],
                            "id": 9224,
                            "name": "FunctionCall",
                            "src": "3005:46:37"
                          }
                        ],
                        "id": 9225,
                        "name": "Assignment",
                        "src": "2973:78:37"
                      }
                    ],
                    "id": 9226,
                    "name": "ExpressionStatement",
                    "src": "2973:78:37"
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
                              "referencedDeclaration": 8929,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 9227,
                            "name": "Identifier",
                            "src": "3057:8:37"
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
                                  "referencedDeclaration": 10473,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 9228,
                                "name": "Identifier",
                                "src": "3066:3:37"
                              }
                            ],
                            "id": 9229,
                            "name": "MemberAccess",
                            "src": "3066:10:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9203,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 9230,
                            "name": "Identifier",
                            "src": "3078:8:37"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9071,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 9231,
                                    "name": "Identifier",
                                    "src": "3088:7:37"
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
                                          "referencedDeclaration": 10473,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9232,
                                        "name": "Identifier",
                                        "src": "3096:3:37"
                                      }
                                    ],
                                    "id": 9233,
                                    "name": "MemberAccess",
                                    "src": "3096:10:37"
                                  }
                                ],
                                "id": 9234,
                                "name": "IndexAccess",
                                "src": "3088:19:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9203,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 9235,
                                "name": "Identifier",
                                "src": "3108:8:37"
                              }
                            ],
                            "id": 9236,
                            "name": "IndexAccess",
                            "src": "3088:29:37"
                          }
                        ],
                        "id": 9237,
                        "name": "FunctionCall",
                        "src": "3057:61:37"
                      }
                    ],
                    "id": 9238,
                    "name": "ExpressionStatement",
                    "src": "3057:61:37"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9209
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
                        "id": 9239,
                        "name": "Literal",
                        "src": "3131:4:37"
                      }
                    ],
                    "id": 9240,
                    "name": "Return",
                    "src": "3124:11:37"
                  }
                ],
                "id": 9241,
                "name": "Block",
                "src": "2967:173:37"
              }
            ],
            "id": 9242,
            "name": "FunctionDefinition",
            "src": "2883:257:37"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "decreaseApproval",
              "payable": false,
              "scope": 9303,
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
                      "name": "_spender",
                      "scope": 9302,
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
                        "id": 9243,
                        "name": "ElementaryTypeName",
                        "src": "3628:7:37"
                      }
                    ],
                    "id": 9244,
                    "name": "VariableDeclaration",
                    "src": "3628:16:37"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_subtractedValue",
                      "scope": 9302,
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
                        "id": 9245,
                        "name": "ElementaryTypeName",
                        "src": "3646:4:37"
                      }
                    ],
                    "id": 9246,
                    "name": "VariableDeclaration",
                    "src": "3646:21:37"
                  }
                ],
                "id": 9247,
                "name": "ParameterList",
                "src": "3627:41:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 9302,
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
                        "id": 9248,
                        "name": "ElementaryTypeName",
                        "src": "3685:4:37"
                      }
                    ],
                    "id": 9249,
                    "name": "VariableDeclaration",
                    "src": "3685:4:37"
                  }
                ],
                "id": 9250,
                "name": "ParameterList",
                "src": "3684:6:37"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        9252
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "oldValue",
                          "scope": 9302,
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
                            "id": 9251,
                            "name": "ElementaryTypeName",
                            "src": "3697:4:37"
                          }
                        ],
                        "id": 9252,
                        "name": "VariableDeclaration",
                        "src": "3697:13:37"
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
                              "type": "mapping(address => uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9071,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 9253,
                                "name": "Identifier",
                                "src": "3713:7:37"
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
                                      "referencedDeclaration": 10473,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 9254,
                                    "name": "Identifier",
                                    "src": "3721:3:37"
                                  }
                                ],
                                "id": 9255,
                                "name": "MemberAccess",
                                "src": "3721:10:37"
                              }
                            ],
                            "id": 9256,
                            "name": "IndexAccess",
                            "src": "3713:19:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9244,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 9257,
                            "name": "Identifier",
                            "src": "3733:8:37"
                          }
                        ],
                        "id": 9258,
                        "name": "IndexAccess",
                        "src": "3713:29:37"
                      }
                    ],
                    "id": 9259,
                    "name": "VariableDeclarationStatement",
                    "src": "3697:45:37"
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
                              "referencedDeclaration": 9246,
                              "type": "uint256",
                              "value": "_subtractedValue"
                            },
                            "id": 9260,
                            "name": "Identifier",
                            "src": "3752:16:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9252,
                              "type": "uint256",
                              "value": "oldValue"
                            },
                            "id": 9261,
                            "name": "Identifier",
                            "src": "3771:8:37"
                          }
                        ],
                        "id": 9262,
                        "name": "BinaryOperation",
                        "src": "3752:27:37"
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9071,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 9263,
                                            "name": "Identifier",
                                            "src": "3789:7:37"
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
                                                  "referencedDeclaration": 10473,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 9264,
                                                "name": "Identifier",
                                                "src": "3797:3:37"
                                              }
                                            ],
                                            "id": 9265,
                                            "name": "MemberAccess",
                                            "src": "3797:10:37"
                                          }
                                        ],
                                        "id": 9267,
                                        "name": "IndexAccess",
                                        "src": "3789:19:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9244,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 9266,
                                        "name": "Identifier",
                                        "src": "3809:8:37"
                                      }
                                    ],
                                    "id": 9268,
                                    "name": "IndexAccess",
                                    "src": "3789:29:37"
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
                                    "id": 9269,
                                    "name": "Literal",
                                    "src": "3821:1:37"
                                  }
                                ],
                                "id": 9270,
                                "name": "Assignment",
                                "src": "3789:33:37"
                              }
                            ],
                            "id": 9271,
                            "name": "ExpressionStatement",
                            "src": "3789:33:37"
                          }
                        ],
                        "id": 9272,
                        "name": "Block",
                        "src": "3781:48:37"
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
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "mapping(address => uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9071,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 9273,
                                            "name": "Identifier",
                                            "src": "3843:7:37"
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
                                                  "referencedDeclaration": 10473,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 9274,
                                                "name": "Identifier",
                                                "src": "3851:3:37"
                                              }
                                            ],
                                            "id": 9275,
                                            "name": "MemberAccess",
                                            "src": "3851:10:37"
                                          }
                                        ],
                                        "id": 9277,
                                        "name": "IndexAccess",
                                        "src": "3843:19:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9244,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 9276,
                                        "name": "Identifier",
                                        "src": "3863:8:37"
                                      }
                                    ],
                                    "id": 9278,
                                    "name": "IndexAccess",
                                    "src": "3843:29:37"
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
                                          "referencedDeclaration": 8710,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 9252,
                                              "type": "uint256",
                                              "value": "oldValue"
                                            },
                                            "id": 9279,
                                            "name": "Identifier",
                                            "src": "3875:8:37"
                                          }
                                        ],
                                        "id": 9280,
                                        "name": "MemberAccess",
                                        "src": "3875:12:37"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 9246,
                                          "type": "uint256",
                                          "value": "_subtractedValue"
                                        },
                                        "id": 9281,
                                        "name": "Identifier",
                                        "src": "3888:16:37"
                                      }
                                    ],
                                    "id": 9282,
                                    "name": "FunctionCall",
                                    "src": "3875:30:37"
                                  }
                                ],
                                "id": 9283,
                                "name": "Assignment",
                                "src": "3843:62:37"
                              }
                            ],
                            "id": 9284,
                            "name": "ExpressionStatement",
                            "src": "3843:62:37"
                          }
                        ],
                        "id": 9285,
                        "name": "Block",
                        "src": "3835:77:37"
                      }
                    ],
                    "id": 9286,
                    "name": "IfStatement",
                    "src": "3748:164:37"
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
                              "referencedDeclaration": 8929,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 9287,
                            "name": "Identifier",
                            "src": "3917:8:37"
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
                                  "referencedDeclaration": 10473,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 9288,
                                "name": "Identifier",
                                "src": "3926:3:37"
                              }
                            ],
                            "id": 9289,
                            "name": "MemberAccess",
                            "src": "3926:10:37"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 9244,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 9290,
                            "name": "Identifier",
                            "src": "3938:8:37"
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
                                  "type": "mapping(address => uint256)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 9071,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 9291,
                                    "name": "Identifier",
                                    "src": "3948:7:37"
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
                                          "referencedDeclaration": 10473,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 9292,
                                        "name": "Identifier",
                                        "src": "3956:3:37"
                                      }
                                    ],
                                    "id": 9293,
                                    "name": "MemberAccess",
                                    "src": "3956:10:37"
                                  }
                                ],
                                "id": 9294,
                                "name": "IndexAccess",
                                "src": "3948:19:37"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 9244,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 9295,
                                "name": "Identifier",
                                "src": "3968:8:37"
                              }
                            ],
                            "id": 9296,
                            "name": "IndexAccess",
                            "src": "3948:29:37"
                          }
                        ],
                        "id": 9297,
                        "name": "FunctionCall",
                        "src": "3917:61:37"
                      }
                    ],
                    "id": 9298,
                    "name": "ExpressionStatement",
                    "src": "3917:61:37"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 9250
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
                        "id": 9299,
                        "name": "Literal",
                        "src": "3991:4:37"
                      }
                    ],
                    "id": 9300,
                    "name": "Return",
                    "src": "3984:11:37"
                  }
                ],
                "id": 9301,
                "name": "Block",
                "src": "3691:309:37"
              }
            ],
            "id": 9302,
            "name": "FunctionDefinition",
            "src": "3602:398:37"
          }
        ],
        "id": 9303,
        "name": "ContractDefinition",
        "src": "344:3659:37"
      }
    ],
    "id": 9304,
    "name": "SourceUnit",
    "src": "0:4004:37"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-05-22T05:49:38.848Z"
}