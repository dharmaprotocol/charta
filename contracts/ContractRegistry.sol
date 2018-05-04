pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

import "./Collateralizer.sol";
import "./DebtKernel.sol";
import "./DebtRegistry.sol";
import "./DebtToken.sol";
import "./RepaymentRouter.sol";
import "./TokenRegistry.sol";
import "./TokenTransferProxy.sol";


contract ContractRegistry is Ownable {

    event ContractAddressUpdated(
        ContractType indexed contractType,
        address indexed oldAddress,
        address indexed newAddress
    );

    enum ContractType {
        Collateralizer,
        DebtKernel,
        DebtRegistry,
        DebtToken,
        RepaymentRouter,
        TokenRegistry,
        TokenTransferProxy
    }

    Collateralizer collateralizer;
    DebtKernel debtKernel;
    DebtRegistry debtRegistry;
    DebtToken debtToken;
    RepaymentRouter repaymentRouter;
    TokenRegistry tokenRegistry;
    TokenTransferProxy tokenTransferProxy;

    function ContractRegistry(
        address _collateralizer,
        address _debtKernel,
        address _debtRegistry,
        address _debtToken,
        address _repaymentRouter,
        address _tokenRegistry,
        address _tokenTransferProxy
    )
        public
    {
        collateralizer = Collateralizer(_collateralizer);
        debtKernel = DebtKernel(_debtKernel);
        debtRegistry = DebtRegistry(_debtRegistry);
        debtToken = DebtToken(_debtToken);
        repaymentRouter = RepaymentRouter(_repaymentRouter);
        tokenRegistry = TokenRegistry(_tokenRegistry);
        tokenTransferProxy = TokenTransferProxy(_tokenTransferProxy);
    }

    function getCollateralizer() public view returns (Collateralizer) {
        return collateralizer;
    }

    function getDebtKernel() public view returns (DebtKernel) {
        return debtKernel;
    }

    function getDebtRegistry() public view returns (DebtRegistry) {
        return debtRegistry;
    }

    function getDebtToken() public view returns (DebtToken) {
        return debtToken;
    }

    function getRepaymentRouter() public view returns (RepaymentRouter) {
        return repaymentRouter;
    }

    function getTokenRegistry() public view returns (TokenRegistry) {
        return tokenRegistry;
    }

    function getTokenTransferProxy() public view returns (TokenTransferProxy) {
        return tokenTransferProxy;
    }

    function updateAddress(
        ContractType contractType,
        address newAddress
    )
        public
        returns (bool success)
    {
        address oldAddress;

        if (contractType == ContractType.Collateralizer) {
            oldAddress = address(collateralizer);
            collateralizer = Collateralizer(newAddress);
        } else if (contractType == ContractType.DebtKernel) {
            oldAddress = address(debtKernel);
            debtKernel = DebtKernel(newAddress);
        } else if (contractType == ContractType.DebtRegistry) {
            oldAddress = address(debtRegistry);
            debtRegistry = DebtRegistry(newAddress);
        } else if (contractType == ContractType.DebtToken) {
            oldAddress = address(debtToken);
            debtToken = DebtToken(newAddress);
        } else if (contractType == ContractType.RepaymentRouter) {
            oldAddress = address(repaymentRouter);
            repaymentRouter = RepaymentRouter(newAddress);
        } else if (contractType == ContractType.TokenRegistry) {
            oldAddress = address(tokenRegistry);
            tokenRegistry = TokenRegistry(newAddress);
        } else if (contractType == ContractType.TokenTransferProxy) {
            oldAddress = address(tokenTransferProxy);
            tokenTransferProxy = TokenTransferProxy(newAddress);
        } else {
            return false;
        }

        ContractAddressUpdated(contractType, oldAddress, newAddress);

        return true;
    }
}
