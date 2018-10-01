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
        uint8 indexed _errorId,
        address indexed _creditor,
        bytes32 indexed _creditorCommitmentHash
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
        uint principalTokenPrice,
        uint collateralTokenPrice,
        uint principalAmount,
        uint collateralAmount,
        uint maxLTV,
        uint expirationTimestampInSec,
        address creditor,
        bytes32 creditorCommitmentHash,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        public
        view
        returns (bool) {

        // Ensure creditor signature is valid.
        if (!isValidSignature(
            creditor,
            creditorCommitmentHash,
            v,
            r,
            s)) {
            LogError(
                uint8(Errors.INVALID_CREDITOR_SIGNATURE),
                creditor,
                creditorCommitmentHash
            );

            return false;
        }

        // CHECK SIGNATURES
        // Get the address of the price feed operator.
        // Check that the price feed operator has signed the principal token price, recently enough.
        // Check that the price feed operator has signed the collateral token price, recently enough.
        // Get the creditor address.
        // Check that the creditor signed the hash of relevant parameters (outlined above.)

        // CHECK EXPIRATION
        if (isExpired(expirationTimestampInSec)) {
            LogError(uint8(Errors.AGREEMENT_EXPIRED), creditor, creditorCommitmentHash);

            return false;
        }

        uint computedLTV = computeLTV(
            principalTokenPrice,
            collateralTokenPrice,
            principalAmount,
            collateralAmount
        );

        uint maxLTVWithPrecision = maxLTV.mul(10 ** (PRECISION.sub(2)));

        if (computedLTV > maxLTVWithPrecision) {
            LogError(uint8(Errors.LTV_EXCEEDS_MAX), creditor, creditorCommitmentHash);

            return false;
        }

        return true;
    }

    function isExpired(uint expirationTimestampInSec) public view returns (bool expired) {
        return expirationTimestampInSec < block.timestamp;
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

    /**
     * Given a hashed message, a signer's address, and a signature,
     * returns whether the signature is valid.
     */
    function isValidSignature(
        address signer,
        bytes32 hash,
        uint8 v,
        bytes32 r,
        bytes32 s
    )
        public
        pure
        returns (bool valid)
    {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHash = keccak256(prefix, hash);
        return ecrecover(prefixedHash, v, r, s) == signer;
    }

}
