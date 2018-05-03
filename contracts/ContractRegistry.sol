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

    Collateralizer public collateralizer;
    DebtKernel public debtKernel;
    DebtRegistry public debtRegistry;
    DebtToken public debtToken;
    RepaymentRouter public repaymentRouter;
    TokenRegistry public tokenRegistry;
    TokenTransferProxy public tokenTransferProxy;

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
}
