pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

import "./Collateralizer.sol";
import "./ERC721Collateralizer.sol";
import "./DebtKernel.sol";
import "./DebtRegistry.sol";
import "./DebtToken.sol";
import "./RepaymentRouter.sol";
import "./TokenRegistry.sol";
import "./ERC721TokenRegistry.sol";
import "./TokenTransferProxy.sol";


contract ContractRegistry is Ownable {

    event ContractAddressUpdated(
        ContractType indexed contractType,
        address indexed oldAddress,
        address indexed newAddress
    );

    enum ContractType {
        Collateralizer,
        ERC721Collateralizer,
        DebtKernel,
        DebtRegistry,
        DebtToken,
        RepaymentRouter,
        TokenRegistry,
        ERC721TokenRegistry,
        TokenTransferProxy
    }

    Collateralizer public collateralizer;
    ERC721Collateralizer public erc721Collateralizer;
    DebtKernel public debtKernel;
    DebtRegistry public  debtRegistry;
    DebtToken public debtToken;
    RepaymentRouter public repaymentRouter;
    TokenRegistry public tokenRegistry;
    ERC721TokenRegistry public erc721TokenRegistry;
    TokenTransferProxy public tokenTransferProxy;

    function ContractRegistry(
        address _collateralizer,
        address _erc721Collateralizer,
        address _debtKernel,
        address _debtRegistry,
        address _debtToken,
        address _repaymentRouter,
        address _tokenRegistry,
        address _erc721tokenRegistry,
        address _tokenTransferProxy
    )
        public
    {
        collateralizer = Collateralizer(_collateralizer);
        erc721Collateralizer = ERC721Collateralizer(_erc721Collateralizer);
        debtKernel = DebtKernel(_debtKernel);
        debtRegistry = DebtRegistry(_debtRegistry);
        debtToken = DebtToken(_debtToken);
        repaymentRouter = RepaymentRouter(_repaymentRouter);
        tokenRegistry = TokenRegistry(_tokenRegistry);
        erc721TokenRegistry = ERC721TokenRegistry(_erc721tokenRegistry);
        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);
    }

    function updateAddress(
        ContractType contractType,
        address newAddress
    )
        public
        onlyOwner
    {
        address oldAddress;

        if (contractType == ContractType.Collateralizer) {
            oldAddress = address(collateralizer);
            validateNewAddress(newAddress, oldAddress);
            collateralizer = Collateralizer(newAddress);
        } else if (contractType == ContractType.ERC721Collateralizer) {
            oldAddress = address(erc721Collateralizer);
            validateNewAddress(newAddress, oldAddress);
            erc721Collateralizer = ERC721Collateralizer(newAddress);
        } else if (contractType == ContractType.DebtKernel) {
            oldAddress = address(debtKernel);
            validateNewAddress(newAddress, oldAddress);
            debtKernel = DebtKernel(newAddress);
        } else if (contractType == ContractType.DebtRegistry) {
            oldAddress = address(debtRegistry);
            validateNewAddress(newAddress, oldAddress);
            debtRegistry = DebtRegistry(newAddress);
        } else if (contractType == ContractType.DebtToken) {
            oldAddress = address(debtToken);
            validateNewAddress(newAddress, oldAddress);
            debtToken = DebtToken(newAddress);
        } else if (contractType == ContractType.RepaymentRouter) {
            oldAddress = address(repaymentRouter);
            validateNewAddress(newAddress, oldAddress);
            repaymentRouter = RepaymentRouter(newAddress);
        } else if (contractType == ContractType.TokenRegistry) {
            oldAddress = address(tokenRegistry);
            validateNewAddress(newAddress, oldAddress);
            tokenRegistry = TokenRegistry(newAddress);
        } else if (contractType == ContractType.ERC721TokenRegistry) {
            oldAddress = address(erc721TokenRegistry);
            validateNewAddress(newAddress, oldAddress);
            tokenRegistry = TokenRegistry(newAddress);
        } else if (contractType == ContractType.TokenTransferProxy) {
            oldAddress = address(tokenTransferProxy);
            validateNewAddress(newAddress, oldAddress);
            tokenTransferProxy = TokenTransferProxy(newAddress);
        } else {
            revert();
        }

        ContractAddressUpdated(contractType, oldAddress, newAddress);
    }

    function validateNewAddress(
        address newAddress,
        address oldAddress
    )
        internal
        pure
    {
        require(newAddress != address(0)); // new address cannot be null address.
        require(newAddress != oldAddress); // new address cannot be existing address.
    }
}
