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
        uint8 indexed _errorId
    );

    function LTVDecisionEngine()
        public {}

    /**
     *  Verifies that the correct signatures and data have been passed in.
     */
    function verify(
        // Creditor commitment.
        address creditor,
        bytes32 creditorCommitmentHash,
        // Price feed operator data.
        address priceFeedOperator,
        bytes32 principalTokenPriceDataHash,
        bytes32 collateralTokenPriceDataHash,
        // Signatures
        uint8[3] signaturesV,
        bytes32[3] signaturesR,
        bytes32[3] signaturesS
    )
        public
        view
        returns (bool)
    {
        // Ensure creditor signature is valid.
        if (!isValidSignature(
            creditor,
            creditorCommitmentHash,
            signaturesV[0],
            signaturesR[0],
            signaturesS[0])) {
            LogError(uint8(Errors.INVALID_CREDITOR_SIGNATURE));

            return false;
        }

        // Ensure price feed operator has signed off on the principal token's price.
        if (!isValidSignature(
            priceFeedOperator,
            principalTokenPriceDataHash,
            signaturesV[1],
            signaturesR[1],
            signaturesS[1])) {
            LogError(uint8(Errors.INVALID_PRINCIPAL_PRICE_SIGNATURE));

            return false;
        }

        // Ensure price feed operator has signed off on the collateral token's price.
        if (!isValidSignature(
            priceFeedOperator,
            collateralTokenPriceDataHash,
            signaturesV[2],
            signaturesR[2],
            signaturesS[2])) {
            LogError(uint8(Errors.INVALID_COLLATERAL_PRICE_SIGNATURE));

            return false;
        }

        return true;
    }

    function evaluate(
        uint principalTokenPrice,
        uint collateralTokenPrice,
        uint principalAmount,
        uint collateralAmount,
        uint maxLTV,
        uint expirationTimestampInSec
    )
        public
        view
        returns (bool) {
        // Ensure agreement has not expired.
        if (isExpired(expirationTimestampInSec)) {
            LogError(uint8(Errors.AGREEMENT_EXPIRED));

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
            LogError(uint8(Errors.LTV_EXCEEDS_MAX));

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
