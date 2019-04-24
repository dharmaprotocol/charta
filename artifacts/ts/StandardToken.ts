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
  "sourceMap": "344:3659:44:-;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "344:3659:44:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;371:83:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;736:439:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3602:398;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1189:107:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;608:379;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2883:257:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2300:126;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1798:183;1865:4;1909:6;1877:7;:19;1885:10;1877:19;;;;;;;;;;;;;;;:29;1897:8;1877:29;;;;;;;;;;;;;;;:38;;;;1942:8;1921:38;;1930:10;1921:38;;;1952:6;1921:38;;;;;;;;;;;;;;;;;;1972:4;1965:11;;1798:183;;;;:::o;371:83:40:-;415:7;437:12;;430:19;;371:83;:::o;736:439:44:-;818:4;853:1;838:17;;:3;:17;;;;830:26;;;;;;;;880:8;:15;889:5;880:15;;;;;;;;;;;;;;;;870:6;:25;;862:34;;;;;;;;920:7;:14;928:5;920:14;;;;;;;;;;;;;;;:26;935:10;920:26;;;;;;;;;;;;;;;;910:6;:36;;902:45;;;;;;;;972:27;992:6;972:8;:15;981:5;972:15;;;;;;;;;;;;;;;;:19;;:27;;;;:::i;:::-;954:8;:15;963:5;954:15;;;;;;;;;;;;;;;:45;;;;1021:25;1039:6;1021:8;:13;1030:3;1021:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;1005:8;:13;1014:3;1005:13;;;;;;;;;;;;;;;:41;;;;1081:38;1112:6;1081:7;:14;1089:5;1081:14;;;;;;;;;;;;;;;:26;1096:10;1081:26;;;;;;;;;;;;;;;;:30;;:38;;;;:::i;:::-;1052:7;:14;1060:5;1052:14;;;;;;;;;;;;;;;:26;1067:10;1052:26;;;;;;;;;;;;;;;:67;;;;1141:3;1125:28;;1134:5;1125:28;;;1146:6;1125:28;;;;;;;;;;;;;;;;;;1166:4;1159:11;;736:439;;;;;:::o;3602:398::-;3685:4;3697:13;3713:7;:19;3721:10;3713:19;;;;;;;;;;;;;;;:29;3733:8;3713:29;;;;;;;;;;;;;;;;3697:45;;3771:8;3752:16;:27;3748:164;;;3821:1;3789:7;:19;3797:10;3789:19;;;;;;;;;;;;;;;:29;3809:8;3789:29;;;;;;;;;;;;;;;:33;;;;3748:164;;;3875:30;3888:16;3875:8;:12;;:30;;;;:::i;:::-;3843:7;:19;3851:10;3843:19;;;;;;;;;;;;;;;:29;3863:8;3843:29;;;;;;;;;;;;;;;:62;;;;3748:164;3938:8;3917:61;;3926:10;3917:61;;;3948:7;:19;3956:10;3948:19;;;;;;;;;;;;;;;:29;3968:8;3948:29;;;;;;;;;;;;;;;;3917:61;;;;;;;;;;;;;;;;;;3991:4;3984:11;;3602:398;;;;;:::o;1189:107:40:-;1245:15;1275:8;:16;1284:6;1275:16;;;;;;;;;;;;;;;;1268:23;;1189:107;;;:::o;608:379::-;671:4;706:1;691:17;;:3;:17;;;;683:26;;;;;;;;733:8;:20;742:10;733:20;;;;;;;;;;;;;;;;723:6;:30;;715:39;;;;;;;;847:32;872:6;847:8;:20;856:10;847:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;824:8;:20;833:10;824:20;;;;;;;;;;;;;;;:55;;;;901:25;919:6;901:8;:13;910:3;901:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;885:8;:13;894:3;885:13;;;;;;;;;;;;;;;:41;;;;953:3;932:33;;941:10;932:33;;;958:6;932:33;;;;;;;;;;;;;;;;;;978:4;971:11;;608:379;;;;:::o;2883:257:44:-;2961:4;3005:46;3039:11;3005:7;:19;3013:10;3005:19;;;;;;;;;;;;;;;:29;3025:8;3005:29;;;;;;;;;;;;;;;;:33;;:46;;;;:::i;:::-;2973:7;:19;2981:10;2973:19;;;;;;;;;;;;;;;:29;2993:8;2973:29;;;;;;;;;;;;;;;:78;;;;3078:8;3057:61;;3066:10;3057:61;;;3088:7;:19;3096:10;3088:19;;;;;;;;;;;;;;;:29;3108:8;3088:29;;;;;;;;;;;;;;;;3057:61;;;;;;;;;;;;;;;;;;3131:4;3124:11;;2883:257;;;;:::o;2300:126::-;2374:7;2396;:15;2404:6;2396:15;;;;;;;;;;;;;;;:25;2412:8;2396:25;;;;;;;;;;;;;;;;2389:32;;2300:126;;;;:::o;835:110:38:-;893:7;920:1;915;:6;;908:14;;;;;;939:1;935;:5;928:12;;835:110;;;;:::o;1007:129::-;1065:7;1080:9;1096:1;1092;:5;1080:17;;1115:1;1110;:6;;1103:14;;;;;;1130:1;1123:8;;1007:129;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport \"./BasicToken.sol\";\nimport \"./ERC20.sol\";\n\n\n/**\n * @title Standard ERC20 token\n *\n * @dev Implementation of the basic standard token.\n * @dev https://github.com/ethereum/EIPs/issues/20\n * @dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol\n */\ncontract StandardToken is ERC20, BasicToken {\n\n  mapping (address => mapping (address => uint256)) internal allowed;\n\n\n  /**\n   * @dev Transfer tokens from one address to another\n   * @param _from address The address which you want to send tokens from\n   * @param _to address The address which you want to transfer to\n   * @param _value uint256 the amount of tokens to be transferred\n   */\n  function transferFrom(address _from, address _to, uint256 _value) public returns (bool) {\n    require(_to != address(0));\n    require(_value <= balances[_from]);\n    require(_value <= allowed[_from][msg.sender]);\n\n    balances[_from] = balances[_from].sub(_value);\n    balances[_to] = balances[_to].add(_value);\n    allowed[_from][msg.sender] = allowed[_from][msg.sender].sub(_value);\n    Transfer(_from, _to, _value);\n    return true;\n  }\n\n  /**\n   * @dev Approve the passed address to spend the specified amount of tokens on behalf of msg.sender.\n   *\n   * Beware that changing an allowance with this method brings the risk that someone may use both the old\n   * and the new allowance by unfortunate transaction ordering. One possible solution to mitigate this\n   * race condition is to first reduce the spender's allowance to 0 and set the desired value afterwards:\n   * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\n   * @param _spender The address which will spend the funds.\n   * @param _value The amount of tokens to be spent.\n   */\n  function approve(address _spender, uint256 _value) public returns (bool) {\n    allowed[msg.sender][_spender] = _value;\n    Approval(msg.sender, _spender, _value);\n    return true;\n  }\n\n  /**\n   * @dev Function to check the amount of tokens that an owner allowed to a spender.\n   * @param _owner address The address which owns the funds.\n   * @param _spender address The address which will spend the funds.\n   * @return A uint256 specifying the amount of tokens still available for the spender.\n   */\n  function allowance(address _owner, address _spender) public view returns (uint256) {\n    return allowed[_owner][_spender];\n  }\n\n  /**\n   * @dev Increase the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To increment\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _addedValue The amount of tokens to increase the allowance by.\n   */\n  function increaseApproval(address _spender, uint _addedValue) public returns (bool) {\n    allowed[msg.sender][_spender] = allowed[msg.sender][_spender].add(_addedValue);\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n  /**\n   * @dev Decrease the amount of tokens that an owner allowed to a spender.\n   *\n   * approve should be called when allowed[_spender] == 0. To decrement\n   * allowed value is better to use this function to avoid 2 calls (and wait until\n   * the first transaction is mined)\n   * From MonolithDAO Token.sol\n   * @param _spender The address which will spend the funds.\n   * @param _subtractedValue The amount of tokens to decrease the allowance by.\n   */\n  function decreaseApproval(address _spender, uint _subtractedValue) public returns (bool) {\n    uint oldValue = allowed[msg.sender][_spender];\n    if (_subtractedValue > oldValue) {\n      allowed[msg.sender][_spender] = 0;\n    } else {\n      allowed[msg.sender][_spender] = oldValue.sub(_subtractedValue);\n    }\n    Approval(msg.sender, _spender, allowed[msg.sender][_spender]);\n    return true;\n  }\n\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
  "ast": {
    "attributes": {
      "absolutePath": "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol",
      "exportedSymbols": {
        "StandardToken": [
          14711
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
        "id": 14467,
        "name": "PragmaDirective",
        "src": "0:24:44"
      },
      {
        "attributes": {
          "SourceUnit": 14296,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/BasicToken.sol",
          "file": "./BasicToken.sol",
          "scope": 14712,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14468,
        "name": "ImportDirective",
        "src": "26:26:44"
      },
      {
        "attributes": {
          "SourceUnit": 14339,
          "absolutePath": "zeppelin-solidity/contracts/token/ERC20/ERC20.sol",
          "file": "./ERC20.sol",
          "scope": 14712,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 14469,
        "name": "ImportDirective",
        "src": "53:21:44"
      },
      {
        "attributes": {
          "contractDependencies": [
            14295,
            14338,
            14370
          ],
          "contractKind": "contract",
          "documentation": "@title Standard ERC20 token\n * @dev Implementation of the basic standard token.\n@dev https://github.com/ethereum/EIPs/issues/20\n@dev Based on code by FirstBlood: https://github.com/Firstbloodio/token/blob/master/smart_contract/FirstBloodToken.sol",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            14711,
            14295,
            14338,
            14370
          ],
          "name": "StandardToken",
          "scope": 14712
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
                  "referencedDeclaration": 14338,
                  "type": "contract ERC20"
                },
                "id": 14470,
                "name": "UserDefinedTypeName",
                "src": "370:5:44"
              }
            ],
            "id": 14471,
            "name": "InheritanceSpecifier",
            "src": "370:5:44"
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
                  "referencedDeclaration": 14295,
                  "type": "contract BasicToken"
                },
                "id": 14472,
                "name": "UserDefinedTypeName",
                "src": "377:10:44"
              }
            ],
            "id": 14473,
            "name": "InheritanceSpecifier",
            "src": "377:10:44"
          },
          {
            "attributes": {
              "constant": false,
              "name": "allowed",
              "scope": 14711,
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
                    "id": 14474,
                    "name": "ElementaryTypeName",
                    "src": "402:7:44"
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
                        "id": 14475,
                        "name": "ElementaryTypeName",
                        "src": "422:7:44"
                      },
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 14476,
                        "name": "ElementaryTypeName",
                        "src": "433:7:44"
                      }
                    ],
                    "id": 14477,
                    "name": "Mapping",
                    "src": "413:28:44"
                  }
                ],
                "id": 14478,
                "name": "Mapping",
                "src": "393:49:44"
              }
            ],
            "id": 14479,
            "name": "VariableDeclaration",
            "src": "393:66:44"
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
              "scope": 14711,
              "stateMutability": "nonpayable",
              "superFunction": 14320,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_from",
                      "scope": 14565,
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
                        "id": 14480,
                        "name": "ElementaryTypeName",
                        "src": "758:7:44"
                      }
                    ],
                    "id": 14481,
                    "name": "VariableDeclaration",
                    "src": "758:13:44"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_to",
                      "scope": 14565,
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
                        "id": 14482,
                        "name": "ElementaryTypeName",
                        "src": "773:7:44"
                      }
                    ],
                    "id": 14483,
                    "name": "VariableDeclaration",
                    "src": "773:11:44"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 14565,
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
                        "id": 14484,
                        "name": "ElementaryTypeName",
                        "src": "786:7:44"
                      }
                    ],
                    "id": 14485,
                    "name": "VariableDeclaration",
                    "src": "786:14:44"
                  }
                ],
                "id": 14486,
                "name": "ParameterList",
                "src": "757:44:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14565,
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
                        "id": 14487,
                        "name": "ElementaryTypeName",
                        "src": "818:4:44"
                      }
                    ],
                    "id": 14488,
                    "name": "VariableDeclaration",
                    "src": "818:4:44"
                  }
                ],
                "id": 14489,
                "name": "ParameterList",
                "src": "817:6:44"
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 14490,
                            "name": "Identifier",
                            "src": "830:7:44"
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
                                  "referencedDeclaration": 14483,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 14491,
                                "name": "Identifier",
                                "src": "838:3:44"
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
                                    "id": 14492,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "845:7:44"
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
                                    "id": 14493,
                                    "name": "Literal",
                                    "src": "853:1:44"
                                  }
                                ],
                                "id": 14494,
                                "name": "FunctionCall",
                                "src": "845:10:44"
                              }
                            ],
                            "id": 14495,
                            "name": "BinaryOperation",
                            "src": "838:17:44"
                          }
                        ],
                        "id": 14496,
                        "name": "FunctionCall",
                        "src": "830:26:44"
                      }
                    ],
                    "id": 14497,
                    "name": "ExpressionStatement",
                    "src": "830:26:44"
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 14498,
                            "name": "Identifier",
                            "src": "862:7:44"
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
                                  "referencedDeclaration": 14485,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 14499,
                                "name": "Identifier",
                                "src": "870:6:44"
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
                                      "referencedDeclaration": 14212,
                                      "type": "mapping(address => uint256)",
                                      "value": "balances"
                                    },
                                    "id": 14500,
                                    "name": "Identifier",
                                    "src": "880:8:44"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14481,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 14501,
                                    "name": "Identifier",
                                    "src": "889:5:44"
                                  }
                                ],
                                "id": 14502,
                                "name": "IndexAccess",
                                "src": "880:15:44"
                              }
                            ],
                            "id": 14503,
                            "name": "BinaryOperation",
                            "src": "870:25:44"
                          }
                        ],
                        "id": 14504,
                        "name": "FunctionCall",
                        "src": "862:34:44"
                      }
                    ],
                    "id": 14505,
                    "name": "ExpressionStatement",
                    "src": "862:34:44"
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
                              "referencedDeclaration": 15884,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 14506,
                            "name": "Identifier",
                            "src": "902:7:44"
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
                                  "referencedDeclaration": 14485,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 14507,
                                "name": "Identifier",
                                "src": "910:6:44"
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
                                          "referencedDeclaration": 14479,
                                          "type": "mapping(address => mapping(address => uint256))",
                                          "value": "allowed"
                                        },
                                        "id": 14508,
                                        "name": "Identifier",
                                        "src": "920:7:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14481,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 14509,
                                        "name": "Identifier",
                                        "src": "928:5:44"
                                      }
                                    ],
                                    "id": 14510,
                                    "name": "IndexAccess",
                                    "src": "920:14:44"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 14511,
                                        "name": "Identifier",
                                        "src": "935:3:44"
                                      }
                                    ],
                                    "id": 14512,
                                    "name": "MemberAccess",
                                    "src": "935:10:44"
                                  }
                                ],
                                "id": 14513,
                                "name": "IndexAccess",
                                "src": "920:26:44"
                              }
                            ],
                            "id": 14514,
                            "name": "BinaryOperation",
                            "src": "910:36:44"
                          }
                        ],
                        "id": 14515,
                        "name": "FunctionCall",
                        "src": "902:45:44"
                      }
                    ],
                    "id": 14516,
                    "name": "ExpressionStatement",
                    "src": "902:45:44"
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
                                  "referencedDeclaration": 14212,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 14517,
                                "name": "Identifier",
                                "src": "954:8:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14481,
                                  "type": "address",
                                  "value": "_from"
                                },
                                "id": 14518,
                                "name": "Identifier",
                                "src": "963:5:44"
                              }
                            ],
                            "id": 14519,
                            "name": "IndexAccess",
                            "src": "954:15:44"
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
                                  "referencedDeclaration": 14118,
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
                                          "referencedDeclaration": 14212,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 14520,
                                        "name": "Identifier",
                                        "src": "972:8:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14481,
                                          "type": "address",
                                          "value": "_from"
                                        },
                                        "id": 14521,
                                        "name": "Identifier",
                                        "src": "981:5:44"
                                      }
                                    ],
                                    "id": 14522,
                                    "name": "IndexAccess",
                                    "src": "972:15:44"
                                  }
                                ],
                                "id": 14523,
                                "name": "MemberAccess",
                                "src": "972:19:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14485,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 14524,
                                "name": "Identifier",
                                "src": "992:6:44"
                              }
                            ],
                            "id": 14525,
                            "name": "FunctionCall",
                            "src": "972:27:44"
                          }
                        ],
                        "id": 14526,
                        "name": "Assignment",
                        "src": "954:45:44"
                      }
                    ],
                    "id": 14527,
                    "name": "ExpressionStatement",
                    "src": "954:45:44"
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
                                  "referencedDeclaration": 14212,
                                  "type": "mapping(address => uint256)",
                                  "value": "balances"
                                },
                                "id": 14528,
                                "name": "Identifier",
                                "src": "1005:8:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14483,
                                  "type": "address",
                                  "value": "_to"
                                },
                                "id": 14529,
                                "name": "Identifier",
                                "src": "1014:3:44"
                              }
                            ],
                            "id": 14530,
                            "name": "IndexAccess",
                            "src": "1005:13:44"
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
                                  "referencedDeclaration": 14142,
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
                                          "referencedDeclaration": 14212,
                                          "type": "mapping(address => uint256)",
                                          "value": "balances"
                                        },
                                        "id": 14531,
                                        "name": "Identifier",
                                        "src": "1021:8:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14483,
                                          "type": "address",
                                          "value": "_to"
                                        },
                                        "id": 14532,
                                        "name": "Identifier",
                                        "src": "1030:3:44"
                                      }
                                    ],
                                    "id": 14533,
                                    "name": "IndexAccess",
                                    "src": "1021:13:44"
                                  }
                                ],
                                "id": 14534,
                                "name": "MemberAccess",
                                "src": "1021:17:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14485,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 14535,
                                "name": "Identifier",
                                "src": "1039:6:44"
                              }
                            ],
                            "id": 14536,
                            "name": "FunctionCall",
                            "src": "1021:25:44"
                          }
                        ],
                        "id": 14537,
                        "name": "Assignment",
                        "src": "1005:41:44"
                      }
                    ],
                    "id": 14538,
                    "name": "ExpressionStatement",
                    "src": "1005:41:44"
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
                                      "referencedDeclaration": 14479,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 14539,
                                    "name": "Identifier",
                                    "src": "1052:7:44"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 14481,
                                      "type": "address",
                                      "value": "_from"
                                    },
                                    "id": 14540,
                                    "name": "Identifier",
                                    "src": "1060:5:44"
                                  }
                                ],
                                "id": 14543,
                                "name": "IndexAccess",
                                "src": "1052:14:44"
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
                                      "referencedDeclaration": 15881,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 14541,
                                    "name": "Identifier",
                                    "src": "1067:3:44"
                                  }
                                ],
                                "id": 14542,
                                "name": "MemberAccess",
                                "src": "1067:10:44"
                              }
                            ],
                            "id": 14544,
                            "name": "IndexAccess",
                            "src": "1052:26:44"
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
                                  "referencedDeclaration": 14118,
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
                                              "referencedDeclaration": 14479,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 14545,
                                            "name": "Identifier",
                                            "src": "1081:7:44"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 14481,
                                              "type": "address",
                                              "value": "_from"
                                            },
                                            "id": 14546,
                                            "name": "Identifier",
                                            "src": "1089:5:44"
                                          }
                                        ],
                                        "id": 14547,
                                        "name": "IndexAccess",
                                        "src": "1081:14:44"
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
                                              "referencedDeclaration": 15881,
                                              "type": "msg",
                                              "value": "msg"
                                            },
                                            "id": 14548,
                                            "name": "Identifier",
                                            "src": "1096:3:44"
                                          }
                                        ],
                                        "id": 14549,
                                        "name": "MemberAccess",
                                        "src": "1096:10:44"
                                      }
                                    ],
                                    "id": 14550,
                                    "name": "IndexAccess",
                                    "src": "1081:26:44"
                                  }
                                ],
                                "id": 14551,
                                "name": "MemberAccess",
                                "src": "1081:30:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14485,
                                  "type": "uint256",
                                  "value": "_value"
                                },
                                "id": 14552,
                                "name": "Identifier",
                                "src": "1112:6:44"
                              }
                            ],
                            "id": 14553,
                            "name": "FunctionCall",
                            "src": "1081:38:44"
                          }
                        ],
                        "id": 14554,
                        "name": "Assignment",
                        "src": "1052:67:44"
                      }
                    ],
                    "id": 14555,
                    "name": "ExpressionStatement",
                    "src": "1052:67:44"
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
                              "referencedDeclaration": 14369,
                              "type": "function (address,address,uint256)",
                              "value": "Transfer"
                            },
                            "id": 14556,
                            "name": "Identifier",
                            "src": "1125:8:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14481,
                              "type": "address",
                              "value": "_from"
                            },
                            "id": 14557,
                            "name": "Identifier",
                            "src": "1134:5:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14483,
                              "type": "address",
                              "value": "_to"
                            },
                            "id": 14558,
                            "name": "Identifier",
                            "src": "1141:3:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14485,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 14559,
                            "name": "Identifier",
                            "src": "1146:6:44"
                          }
                        ],
                        "id": 14560,
                        "name": "FunctionCall",
                        "src": "1125:28:44"
                      }
                    ],
                    "id": 14561,
                    "name": "ExpressionStatement",
                    "src": "1125:28:44"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14489
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
                        "id": 14562,
                        "name": "Literal",
                        "src": "1166:4:44"
                      }
                    ],
                    "id": 14563,
                    "name": "Return",
                    "src": "1159:11:44"
                  }
                ],
                "id": 14564,
                "name": "Block",
                "src": "824:351:44"
              }
            ],
            "id": 14565,
            "name": "FunctionDefinition",
            "src": "736:439:44"
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
              "scope": 14711,
              "stateMutability": "nonpayable",
              "superFunction": 14329,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 14593,
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
                        "id": 14566,
                        "name": "ElementaryTypeName",
                        "src": "1815:7:44"
                      }
                    ],
                    "id": 14567,
                    "name": "VariableDeclaration",
                    "src": "1815:16:44"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_value",
                      "scope": 14593,
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
                        "id": 14568,
                        "name": "ElementaryTypeName",
                        "src": "1833:7:44"
                      }
                    ],
                    "id": 14569,
                    "name": "VariableDeclaration",
                    "src": "1833:14:44"
                  }
                ],
                "id": 14570,
                "name": "ParameterList",
                "src": "1814:34:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14593,
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
                        "id": 14571,
                        "name": "ElementaryTypeName",
                        "src": "1865:4:44"
                      }
                    ],
                    "id": 14572,
                    "name": "VariableDeclaration",
                    "src": "1865:4:44"
                  }
                ],
                "id": 14573,
                "name": "ParameterList",
                "src": "1864:6:44"
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
                                      "referencedDeclaration": 14479,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 14574,
                                    "name": "Identifier",
                                    "src": "1877:7:44"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 14575,
                                        "name": "Identifier",
                                        "src": "1885:3:44"
                                      }
                                    ],
                                    "id": 14576,
                                    "name": "MemberAccess",
                                    "src": "1885:10:44"
                                  }
                                ],
                                "id": 14578,
                                "name": "IndexAccess",
                                "src": "1877:19:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14567,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 14577,
                                "name": "Identifier",
                                "src": "1897:8:44"
                              }
                            ],
                            "id": 14579,
                            "name": "IndexAccess",
                            "src": "1877:29:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14569,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 14580,
                            "name": "Identifier",
                            "src": "1909:6:44"
                          }
                        ],
                        "id": 14581,
                        "name": "Assignment",
                        "src": "1877:38:44"
                      }
                    ],
                    "id": 14582,
                    "name": "ExpressionStatement",
                    "src": "1877:38:44"
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
                              "referencedDeclaration": 14337,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 14583,
                            "name": "Identifier",
                            "src": "1921:8:44"
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
                                  "referencedDeclaration": 15881,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 14584,
                                "name": "Identifier",
                                "src": "1930:3:44"
                              }
                            ],
                            "id": 14585,
                            "name": "MemberAccess",
                            "src": "1930:10:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14567,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 14586,
                            "name": "Identifier",
                            "src": "1942:8:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14569,
                              "type": "uint256",
                              "value": "_value"
                            },
                            "id": 14587,
                            "name": "Identifier",
                            "src": "1952:6:44"
                          }
                        ],
                        "id": 14588,
                        "name": "FunctionCall",
                        "src": "1921:38:44"
                      }
                    ],
                    "id": 14589,
                    "name": "ExpressionStatement",
                    "src": "1921:38:44"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14573
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
                        "id": 14590,
                        "name": "Literal",
                        "src": "1972:4:44"
                      }
                    ],
                    "id": 14591,
                    "name": "Return",
                    "src": "1965:11:44"
                  }
                ],
                "id": 14592,
                "name": "Block",
                "src": "1871:110:44"
              }
            ],
            "id": 14593,
            "name": "FunctionDefinition",
            "src": "1798:183:44"
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
              "scope": 14711,
              "stateMutability": "view",
              "superFunction": 14309,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_owner",
                      "scope": 14609,
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
                        "id": 14594,
                        "name": "ElementaryTypeName",
                        "src": "2319:7:44"
                      }
                    ],
                    "id": 14595,
                    "name": "VariableDeclaration",
                    "src": "2319:14:44"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_spender",
                      "scope": 14609,
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
                        "id": 14596,
                        "name": "ElementaryTypeName",
                        "src": "2335:7:44"
                      }
                    ],
                    "id": 14597,
                    "name": "VariableDeclaration",
                    "src": "2335:16:44"
                  }
                ],
                "id": 14598,
                "name": "ParameterList",
                "src": "2318:34:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14609,
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
                        "id": 14599,
                        "name": "ElementaryTypeName",
                        "src": "2374:7:44"
                      }
                    ],
                    "id": 14600,
                    "name": "VariableDeclaration",
                    "src": "2374:7:44"
                  }
                ],
                "id": 14601,
                "name": "ParameterList",
                "src": "2373:9:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 14601
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
                                  "referencedDeclaration": 14479,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 14602,
                                "name": "Identifier",
                                "src": "2396:7:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14595,
                                  "type": "address",
                                  "value": "_owner"
                                },
                                "id": 14603,
                                "name": "Identifier",
                                "src": "2404:6:44"
                              }
                            ],
                            "id": 14604,
                            "name": "IndexAccess",
                            "src": "2396:15:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14597,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 14605,
                            "name": "Identifier",
                            "src": "2412:8:44"
                          }
                        ],
                        "id": 14606,
                        "name": "IndexAccess",
                        "src": "2396:25:44"
                      }
                    ],
                    "id": 14607,
                    "name": "Return",
                    "src": "2389:32:44"
                  }
                ],
                "id": 14608,
                "name": "Block",
                "src": "2383:43:44"
              }
            ],
            "id": 14609,
            "name": "FunctionDefinition",
            "src": "2300:126:44"
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
              "scope": 14711,
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
                      "scope": 14650,
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
                        "id": 14610,
                        "name": "ElementaryTypeName",
                        "src": "2909:7:44"
                      }
                    ],
                    "id": 14611,
                    "name": "VariableDeclaration",
                    "src": "2909:16:44"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_addedValue",
                      "scope": 14650,
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
                        "id": 14612,
                        "name": "ElementaryTypeName",
                        "src": "2927:4:44"
                      }
                    ],
                    "id": 14613,
                    "name": "VariableDeclaration",
                    "src": "2927:16:44"
                  }
                ],
                "id": 14614,
                "name": "ParameterList",
                "src": "2908:36:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14650,
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
                        "id": 14615,
                        "name": "ElementaryTypeName",
                        "src": "2961:4:44"
                      }
                    ],
                    "id": 14616,
                    "name": "VariableDeclaration",
                    "src": "2961:4:44"
                  }
                ],
                "id": 14617,
                "name": "ParameterList",
                "src": "2960:6:44"
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
                                      "referencedDeclaration": 14479,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 14618,
                                    "name": "Identifier",
                                    "src": "2973:7:44"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 14619,
                                        "name": "Identifier",
                                        "src": "2981:3:44"
                                      }
                                    ],
                                    "id": 14620,
                                    "name": "MemberAccess",
                                    "src": "2981:10:44"
                                  }
                                ],
                                "id": 14622,
                                "name": "IndexAccess",
                                "src": "2973:19:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14611,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 14621,
                                "name": "Identifier",
                                "src": "2993:8:44"
                              }
                            ],
                            "id": 14623,
                            "name": "IndexAccess",
                            "src": "2973:29:44"
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
                                  "referencedDeclaration": 14142,
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
                                              "referencedDeclaration": 14479,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 14624,
                                            "name": "Identifier",
                                            "src": "3005:7:44"
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
                                                  "referencedDeclaration": 15881,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 14625,
                                                "name": "Identifier",
                                                "src": "3013:3:44"
                                              }
                                            ],
                                            "id": 14626,
                                            "name": "MemberAccess",
                                            "src": "3013:10:44"
                                          }
                                        ],
                                        "id": 14627,
                                        "name": "IndexAccess",
                                        "src": "3005:19:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14611,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 14628,
                                        "name": "Identifier",
                                        "src": "3025:8:44"
                                      }
                                    ],
                                    "id": 14629,
                                    "name": "IndexAccess",
                                    "src": "3005:29:44"
                                  }
                                ],
                                "id": 14630,
                                "name": "MemberAccess",
                                "src": "3005:33:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14613,
                                  "type": "uint256",
                                  "value": "_addedValue"
                                },
                                "id": 14631,
                                "name": "Identifier",
                                "src": "3039:11:44"
                              }
                            ],
                            "id": 14632,
                            "name": "FunctionCall",
                            "src": "3005:46:44"
                          }
                        ],
                        "id": 14633,
                        "name": "Assignment",
                        "src": "2973:78:44"
                      }
                    ],
                    "id": 14634,
                    "name": "ExpressionStatement",
                    "src": "2973:78:44"
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
                              "referencedDeclaration": 14337,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 14635,
                            "name": "Identifier",
                            "src": "3057:8:44"
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
                                  "referencedDeclaration": 15881,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 14636,
                                "name": "Identifier",
                                "src": "3066:3:44"
                              }
                            ],
                            "id": 14637,
                            "name": "MemberAccess",
                            "src": "3066:10:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14611,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 14638,
                            "name": "Identifier",
                            "src": "3078:8:44"
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
                                      "referencedDeclaration": 14479,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 14639,
                                    "name": "Identifier",
                                    "src": "3088:7:44"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 14640,
                                        "name": "Identifier",
                                        "src": "3096:3:44"
                                      }
                                    ],
                                    "id": 14641,
                                    "name": "MemberAccess",
                                    "src": "3096:10:44"
                                  }
                                ],
                                "id": 14642,
                                "name": "IndexAccess",
                                "src": "3088:19:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14611,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 14643,
                                "name": "Identifier",
                                "src": "3108:8:44"
                              }
                            ],
                            "id": 14644,
                            "name": "IndexAccess",
                            "src": "3088:29:44"
                          }
                        ],
                        "id": 14645,
                        "name": "FunctionCall",
                        "src": "3057:61:44"
                      }
                    ],
                    "id": 14646,
                    "name": "ExpressionStatement",
                    "src": "3057:61:44"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14617
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
                        "id": 14647,
                        "name": "Literal",
                        "src": "3131:4:44"
                      }
                    ],
                    "id": 14648,
                    "name": "Return",
                    "src": "3124:11:44"
                  }
                ],
                "id": 14649,
                "name": "Block",
                "src": "2967:173:44"
              }
            ],
            "id": 14650,
            "name": "FunctionDefinition",
            "src": "2883:257:44"
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
              "scope": 14711,
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
                      "scope": 14710,
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
                        "id": 14651,
                        "name": "ElementaryTypeName",
                        "src": "3628:7:44"
                      }
                    ],
                    "id": 14652,
                    "name": "VariableDeclaration",
                    "src": "3628:16:44"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_subtractedValue",
                      "scope": 14710,
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
                        "id": 14653,
                        "name": "ElementaryTypeName",
                        "src": "3646:4:44"
                      }
                    ],
                    "id": 14654,
                    "name": "VariableDeclaration",
                    "src": "3646:21:44"
                  }
                ],
                "id": 14655,
                "name": "ParameterList",
                "src": "3627:41:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 14710,
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
                        "id": 14656,
                        "name": "ElementaryTypeName",
                        "src": "3685:4:44"
                      }
                    ],
                    "id": 14657,
                    "name": "VariableDeclaration",
                    "src": "3685:4:44"
                  }
                ],
                "id": 14658,
                "name": "ParameterList",
                "src": "3684:6:44"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        14660
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "oldValue",
                          "scope": 14710,
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
                            "id": 14659,
                            "name": "ElementaryTypeName",
                            "src": "3697:4:44"
                          }
                        ],
                        "id": 14660,
                        "name": "VariableDeclaration",
                        "src": "3697:13:44"
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
                                  "referencedDeclaration": 14479,
                                  "type": "mapping(address => mapping(address => uint256))",
                                  "value": "allowed"
                                },
                                "id": 14661,
                                "name": "Identifier",
                                "src": "3713:7:44"
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
                                      "referencedDeclaration": 15881,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 14662,
                                    "name": "Identifier",
                                    "src": "3721:3:44"
                                  }
                                ],
                                "id": 14663,
                                "name": "MemberAccess",
                                "src": "3721:10:44"
                              }
                            ],
                            "id": 14664,
                            "name": "IndexAccess",
                            "src": "3713:19:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14652,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 14665,
                            "name": "Identifier",
                            "src": "3733:8:44"
                          }
                        ],
                        "id": 14666,
                        "name": "IndexAccess",
                        "src": "3713:29:44"
                      }
                    ],
                    "id": 14667,
                    "name": "VariableDeclarationStatement",
                    "src": "3697:45:44"
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
                              "referencedDeclaration": 14654,
                              "type": "uint256",
                              "value": "_subtractedValue"
                            },
                            "id": 14668,
                            "name": "Identifier",
                            "src": "3752:16:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14660,
                              "type": "uint256",
                              "value": "oldValue"
                            },
                            "id": 14669,
                            "name": "Identifier",
                            "src": "3771:8:44"
                          }
                        ],
                        "id": 14670,
                        "name": "BinaryOperation",
                        "src": "3752:27:44"
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
                                              "referencedDeclaration": 14479,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 14671,
                                            "name": "Identifier",
                                            "src": "3789:7:44"
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
                                                  "referencedDeclaration": 15881,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 14672,
                                                "name": "Identifier",
                                                "src": "3797:3:44"
                                              }
                                            ],
                                            "id": 14673,
                                            "name": "MemberAccess",
                                            "src": "3797:10:44"
                                          }
                                        ],
                                        "id": 14675,
                                        "name": "IndexAccess",
                                        "src": "3789:19:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14652,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 14674,
                                        "name": "Identifier",
                                        "src": "3809:8:44"
                                      }
                                    ],
                                    "id": 14676,
                                    "name": "IndexAccess",
                                    "src": "3789:29:44"
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
                                    "id": 14677,
                                    "name": "Literal",
                                    "src": "3821:1:44"
                                  }
                                ],
                                "id": 14678,
                                "name": "Assignment",
                                "src": "3789:33:44"
                              }
                            ],
                            "id": 14679,
                            "name": "ExpressionStatement",
                            "src": "3789:33:44"
                          }
                        ],
                        "id": 14680,
                        "name": "Block",
                        "src": "3781:48:44"
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
                                              "referencedDeclaration": 14479,
                                              "type": "mapping(address => mapping(address => uint256))",
                                              "value": "allowed"
                                            },
                                            "id": 14681,
                                            "name": "Identifier",
                                            "src": "3843:7:44"
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
                                                  "referencedDeclaration": 15881,
                                                  "type": "msg",
                                                  "value": "msg"
                                                },
                                                "id": 14682,
                                                "name": "Identifier",
                                                "src": "3851:3:44"
                                              }
                                            ],
                                            "id": 14683,
                                            "name": "MemberAccess",
                                            "src": "3851:10:44"
                                          }
                                        ],
                                        "id": 14685,
                                        "name": "IndexAccess",
                                        "src": "3843:19:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14652,
                                          "type": "address",
                                          "value": "_spender"
                                        },
                                        "id": 14684,
                                        "name": "Identifier",
                                        "src": "3863:8:44"
                                      }
                                    ],
                                    "id": 14686,
                                    "name": "IndexAccess",
                                    "src": "3843:29:44"
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
                                          "referencedDeclaration": 14118,
                                          "type": "function (uint256,uint256) pure returns (uint256)"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 14660,
                                              "type": "uint256",
                                              "value": "oldValue"
                                            },
                                            "id": 14687,
                                            "name": "Identifier",
                                            "src": "3875:8:44"
                                          }
                                        ],
                                        "id": 14688,
                                        "name": "MemberAccess",
                                        "src": "3875:12:44"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 14654,
                                          "type": "uint256",
                                          "value": "_subtractedValue"
                                        },
                                        "id": 14689,
                                        "name": "Identifier",
                                        "src": "3888:16:44"
                                      }
                                    ],
                                    "id": 14690,
                                    "name": "FunctionCall",
                                    "src": "3875:30:44"
                                  }
                                ],
                                "id": 14691,
                                "name": "Assignment",
                                "src": "3843:62:44"
                              }
                            ],
                            "id": 14692,
                            "name": "ExpressionStatement",
                            "src": "3843:62:44"
                          }
                        ],
                        "id": 14693,
                        "name": "Block",
                        "src": "3835:77:44"
                      }
                    ],
                    "id": 14694,
                    "name": "IfStatement",
                    "src": "3748:164:44"
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
                              "referencedDeclaration": 14337,
                              "type": "function (address,address,uint256)",
                              "value": "Approval"
                            },
                            "id": 14695,
                            "name": "Identifier",
                            "src": "3917:8:44"
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
                                  "referencedDeclaration": 15881,
                                  "type": "msg",
                                  "value": "msg"
                                },
                                "id": 14696,
                                "name": "Identifier",
                                "src": "3926:3:44"
                              }
                            ],
                            "id": 14697,
                            "name": "MemberAccess",
                            "src": "3926:10:44"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 14652,
                              "type": "address",
                              "value": "_spender"
                            },
                            "id": 14698,
                            "name": "Identifier",
                            "src": "3938:8:44"
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
                                      "referencedDeclaration": 14479,
                                      "type": "mapping(address => mapping(address => uint256))",
                                      "value": "allowed"
                                    },
                                    "id": 14699,
                                    "name": "Identifier",
                                    "src": "3948:7:44"
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
                                          "referencedDeclaration": 15881,
                                          "type": "msg",
                                          "value": "msg"
                                        },
                                        "id": 14700,
                                        "name": "Identifier",
                                        "src": "3956:3:44"
                                      }
                                    ],
                                    "id": 14701,
                                    "name": "MemberAccess",
                                    "src": "3956:10:44"
                                  }
                                ],
                                "id": 14702,
                                "name": "IndexAccess",
                                "src": "3948:19:44"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 14652,
                                  "type": "address",
                                  "value": "_spender"
                                },
                                "id": 14703,
                                "name": "Identifier",
                                "src": "3968:8:44"
                              }
                            ],
                            "id": 14704,
                            "name": "IndexAccess",
                            "src": "3948:29:44"
                          }
                        ],
                        "id": 14705,
                        "name": "FunctionCall",
                        "src": "3917:61:44"
                      }
                    ],
                    "id": 14706,
                    "name": "ExpressionStatement",
                    "src": "3917:61:44"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 14658
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
                        "id": 14707,
                        "name": "Literal",
                        "src": "3991:4:44"
                      }
                    ],
                    "id": 14708,
                    "name": "Return",
                    "src": "3984:11:44"
                  }
                ],
                "id": 14709,
                "name": "Block",
                "src": "3691:309:44"
              }
            ],
            "id": 14710,
            "name": "FunctionDefinition",
            "src": "3602:398:44"
          }
        ],
        "id": 14711,
        "name": "ContractDefinition",
        "src": "344:3659:44"
      }
    ],
    "id": 14712,
    "name": "SourceUnit",
    "src": "0:4004:44"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2019-03-12T22:10:45.925Z"
}