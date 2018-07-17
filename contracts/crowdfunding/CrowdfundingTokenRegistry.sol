pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol";

import "../ContractRegistry.sol";
import "../DebtRegistry.sol";
import "../DebtToken.sol";

import "./CrowdfundingToken.sol";
import "./Controlled.sol";

contract CrowdfundingTokenRegistry is ERC721Receiver {
    // TODO: make sure magic value and function signature are still valid

    /**
     * @dev Magic value to be returned upon successful reception of an NFT
     *  Equals to `bytes4(keccak256("onERC721Received(address,uint256,bytes)"))`
     */
    bytes4 constant ERC721_RECEIVED = 0xf0b9e5ba;

    uint8 constant DECIMAL_UNITS = 18;
    bool constant TRANSFERS_ENABLED = true;
    string constant TOKEN_NAME = "Dharma Crowdfunding Token";
    string constant TOKEN_SYMBOL = "DFT";

    event LogCreateAndRegisterCrowdfundingToken(
        address _owner,
        address _debtToken,
        uint _agreementId
    );

    // Dharma Protocol ContractRegistry
    ContractRegistry contractRegistry;

    // Mapping of Dharma DebtToken agreementId to address of CrowdfundingToken
    mapping (uint => address) crowdfundingTokens;

    function CrowdfundingTokenRegistry(
        address _contractRegistry
    )
        public
    {
        contractRegistry = ContractRegistry(_contractRegistry);
    }

    /**
     * Triggers the creation of a CrowdfundingToken
     */
    function onERC721Received(address _from, uint256 _tokenId, bytes _data)
        public
        returns (bytes4)
    {
        // TODO: assert that the received ERC-721 is a DebtToken

        // require that _data only contains a single address
        require(_data.length == 20);

        // TODO: investigate if repaymentToken address can be (easily) obtained from DebtRegistry entry
        address repaymentToken = bytesToAddress(_data);

        // create a CrowdfundingToken to wrap the DebtToken
        address crowdfundingToken = createCrowdfundingToken(
            _from,
            msg.sender,
            _tokenId,
            contractRegistry.debtRegistry(),
            repaymentToken
        );

        // add the CrowdfundingToken to the registry
        crowdfundingTokens[_tokenId] = crowdfundingToken;

        LogCreateAndRegisterCrowdfundingToken(
            _from,
            msg.sender,
            _tokenId
        );

        return ERC721_RECEIVED;
    }

    /**
     * Creates a new CrowdfundingToken
     */
    function createCrowdfundingToken(
        address _owner,
        address _debtToken,
        uint _agreementId,
        address _debtRegistry,
        address _repaymentToken
    )
        internal
        returns (address crowdfundingToken)
    {
        // create the CrowdfundingToken
        crowdfundingToken =
            new CrowdfundingToken(
                _owner,
                _debtToken,
                _agreementId,
                _debtRegistry,
                TOKEN_NAME,
                DECIMAL_UNITS,
                TOKEN_SYMBOL,
                _repaymentToken,
                TRANSFERS_ENABLED
            );

        // transfer ownership of the DebtToken to the CrowdfundingToken
        DebtToken(_debtToken).safeTransferFrom(this, crowdfundingToken, _agreementId);

        return crowdfundingToken;
    }

    function bytesToAddress(
        bytes bys
    )
        private
        pure
        returns (address addr)
    {
        assembly {
          addr := mload(add(bys,20))
        }
    }
}
