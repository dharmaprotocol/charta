pragma solidity 0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * A decision engine for creditor-driven loans, that can evaluate whether or not a creditor
 * should fill a loan, depending on the loan-to-value ratio of the principal and collateral amounts.
 * These amounts are defined by prices that are signed by the relayer.
 */
contract LTVDecisionEngine {
    using SafeMath for uint;

    uint public constant PRECISION = 4;

    enum Errors {
        INVALID_CREDITOR_SIGNATURE,
        INVALID_PRINCIPAL_PRICE_SIGNATURE,
        INVALID_COLLATERAL_PRICE_SIGNATURE,
        AGREEMENT_EXPIRED,
        LTV_EXCEEDS_MAX
    }

    event LogError(
        // Corresponds to the Errors enum listed above.
        uint8 errorIndex
    );

    function LTVDecisionEngine()
        public {}

    // Required params:
    // Creditor address
    // LTV ratio
    // Price feed operator address
    // Price of principal token
    // price of collateral token
    // Signature and date for principal token price
    // Signature and date for collateral token price
    // Expiration date
    // Decision engine address
    // Signature for creditor on:
        // LTV ratio
        // Price feed operator
        // Principal token
        // Collateral token
        // Principal amount
        // Expiration date
        // Decision engine address
    // NOTE: Decision engine address is used in the CreditorProxy, but signature is validated here.
    function evaluate(
        address priceFeedOperator,
        address creditor,
        uint principalTokenPrice,
        uint collateralTokenPrice,
        uint principalAmount,
        uint collateralAmount,
        uint maxLTV,
        bytes32 creditorSignature,
        uint expirationTimestamp
    )
        public
        view
        returns (bool) {
        // CHECK SIGNATURES
        // Get the address of the price feed operator.
        // Check that the price feed operator has signed the principal token price, recently enough.
        // Check that the price feed operator has signed the collateral token price, recently enough.
        // Get the creditor address.
        // Check that the creditor signed the hash of relevant parameters (outlined above.)

        // CHECK EXPIRATION

        uint computedLTV = computeLTV(
            principalTokenPrice,
            collateralTokenPrice,
            principalAmount,
            collateralAmount
        );

        uint maxLTVWithPrecision = maxLTV.mul(10 ** (PRECISION.sub(2)));

        if (computedLTV > maxLTVWithPrecision) {
            LogError(uint8(Errors.LTV_EXCEEDS_MAX));

            return false;
        }

        return true;
    }

    function computeLTV(
        uint principalTokenPrice,
        uint collateralTokenPrice,
        uint principalAmount,
        uint collateralAmount
    )
        public
        constant
        returns (uint) {
        uint principalValue = principalTokenPrice.mul(principalAmount).mul(10 ** PRECISION);
        uint collateralValue = collateralTokenPrice.mul(collateralAmount);

        return principalValue.div(collateralValue);
    }
}
