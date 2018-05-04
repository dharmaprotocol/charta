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

    function updateAddressForContractType(
        ContractType contractType,
        address newAddress
    )
        public
        returns (bool success)
    {
        if (contractType == ContractType.Collateralizer) {
            collateralizer = Collateralizer(newAddress);
        } else if (contractType == ContractType.DebtKernel) {
            debtKernel = DebtKernel(newAddress);
        } else if (contractType == ContractType.DebtRegistry) {
            debtRegistry = DebtRegistry(newAddress);
        } else if (contractType == ContractType.DebtToken) {
            debtToken = DebtToken(newAddress);
        } else if (contractType == ContractType.RepaymentRouter) {
            repaymentRouter = RepaymentRouter(newAddress);
        } else if (contractType == ContractType.TokenRegistry) {
            tokenRegistry = TokenRegistry(newAddress);
        } else if (contractType == ContractType.TokenTransferProxy) {
            tokenTransferProxy = TokenTransferProxy(newAddress);
        } else {
            return false;
        }
        return true;
    }
}
