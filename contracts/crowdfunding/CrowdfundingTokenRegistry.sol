pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/token/ERC721/ERC721Receiver.sol";

import "../ContractRegistry.sol";
import "../DebtRegistry.sol";
import "../DebtToken.sol";

import "./CrowdfundingToken.sol";
import "./Controlled.sol";

contract CrowdfundingTokenRegistry is ERC721Receiver {
    uint8 constant DECIMAL_UNITS = 18;
    bool constant TRANSFERS_ENABLED = true;
    string constant TOKEN_NAME = "Dharma Crowdfunding Token";
    string constant TOKEN_SYMBOL = "DFT";

    event LogCreateAndRegisterCrowdfundingToken(
        address _owner,
        address _debtToken,
        uint _agreementId,
        uint _repaymentTokenIndex
    );

    address contractRegistry;

    // Mapping of Dharma DebtToken agreementId to address of CrowdfundingToken
    mapping (uint => address) public crowdfundingTokens;

    function CrowdfundingTokenRegistry(
        address _contractRegistry
    )
        public
    {
        contractRegistry = _contractRegistry;
    }

    /**
     * Triggers the creation of a CrowdfundingToken
     */
    function onERC721Received(address _from, uint256 _tokenId, bytes _data)
        public
        returns (bytes4)
    {
        // TODO: assert that the received ERC-721 is a DebtToken

        uint repaymentTokenIndex = bytesToUint(_data);

        // TODO: require that the repaymentTokenIndex is within bounds?

        // create a CrowdfundingToken to wrap the DebtToken
        address crowdfundingToken = createCrowdfundingToken(
            _from,
            msg.sender,
            _tokenId,
            contractRegistry,
            repaymentTokenIndex
        );

        // add the CrowdfundingToken to the registry
        crowdfundingTokens[_tokenId] = crowdfundingToken;

        LogCreateAndRegisterCrowdfundingToken(
            _from,
            msg.sender,
            _tokenId,
            repaymentTokenIndex
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
        address _contractRegistry,
        uint _repaymentTokenIndex
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
                _contractRegistry,
                TOKEN_NAME,
                DECIMAL_UNITS,
                TOKEN_SYMBOL,
                _repaymentTokenIndex,
                TRANSFERS_ENABLED
            );

        // transfer ownership of the DebtToken to the CrowdfundingToken
        DebtToken(_debtToken).safeTransferFrom(address(this), crowdfundingToken, _agreementId);

        return crowdfundingToken;
    }

    function bytesToUint(
        bytes b
    )
        private
        pure
        returns (uint unsigned_int)
    {
        for(uint i = 0; i < b.length; i++){
            unsigned_int = unsigned_int + uint(b[i]) * (2 ** (8 * (b.length - (i+1))));
        }
        return unsigned_int;
    }
}
