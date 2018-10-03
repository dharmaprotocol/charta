pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * A decision engine for creditor-driven loans, that can evaluate whether or not a creditor
 * should fill a loan, depending on the loan-to-value ratio of the principal and collateral amounts.
 * These amounts are defined by prices that are signed by the relayer.
 */
contract LTVDecisionEngine {
    using SafeMath for uint;

    uint public constant PRECISION = 4;

    bytes32 constant public NULL_ISSUANCE_HASH = bytes32(0);

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

    // Verifies that the creditor has signed all of the given parameters.
    function verifyCreditorCommitment(
        address creditor,
        bytes32[] memory decisionEngineParams,
        bytes32 signatureR,
        bytes32 signatureS,
        uint8 signatureV
    ) public view returns(bytes32 creditorCommitmentHash) {
        bytes32 maxLTV = decisionEngineParams[0];
        address priceFeedOperator = address(decisionEngineParams[1]);
        address principalToken = address(decisionEngineParams[2]);
        bytes32 principalAmount = decisionEngineParams[3];
        bytes32 expirationTimestamp = decisionEngineParams[4];
        address decisionEngine = address(decisionEngineParams[5]);

        creditorCommitmentHash = keccak256(
            maxLTV,
            priceFeedOperator,
            principalToken,
            principalAmount,
            expirationTimestamp,
            decisionEngine
        );

        if (!isValidSignature(
            creditor,
            creditorCommitmentHash,
            signatureV,
            signatureR,
            signatureS)) {
            LogError(
                uint8(Errors.INVALID_CREDITOR_SIGNATURE),
                creditor,
                creditorCommitmentHash
            );

            return NULL_ISSUANCE_HASH;
        }

        return creditorCommitmentHash;
    }

    function verifyPriceFeedData(
        bytes32[] memory decisionEngineParams
    ) public view returns(bool) {
        // STUB.
        return true;
    }

    /**
     * Takes in debt order data, and packed params.
     * Debt Order includes:
     * - Creditor address
     * - Principal amount
     * - Expiration timestamp
     * Packed params includes:
     * - Price of principal
     * - Price of collateral
     * - Retrieval time of principal price
     * - Retrieval time of collateral price
     * - Price feed operator
     * - Signature for principal price
     * - Signature for collateral price
     * - Signature for creditor commitment
     *  And so, we verify by the following step:
     * 1. Generate a creditor commitment hash
     * 2. Test the creditor commitment hash using creditor address and signature
     * 3. Generate a principal price hash
     * 4. Test the principal price hash
     * 5. Generate a collateral price hash
     * 6. Test the collateral price hash
     **/
    function genericVerify(
        // Like Terms Contract Parameters, but for Decision Engines(tm) ;)
        address creditor,
        bytes32[] memory decisionEngineParams,
        bytes32[] signaturesR,
        bytes32[] signaturesS,
        uint8[] signaturesV
    )
        public view returns (bytes32 creditorCommitmentHash)
    {
        creditorCommitmentHash = verifyCreditorCommitment(
            creditor,
            decisionEngineParams,
            signaturesR[0],
            signaturesS[0],
            signaturesV[0]
        );

        if (verifyPriceFeedData(decisionEngineParams)) {
            // Return null or a valid commitment hash.
            return creditorCommitmentHash;
        }

        return NULL_ISSUANCE_HASH;
    }

//    function verify(
//        // Creditor commitment.
//        address creditor,
//        bytes32 creditorCommitmentHash,
//        // Price feed operator data.
//        address priceFeedOperator,
//        bytes32 principalTokenPriceDataHash,
//        bytes32 collateralTokenPriceDataHash,
//        // Signatures
//        uint8[3] signaturesV,
//        bytes32[3] signaturesR,
//        bytes32[3] signaturesS
//    )
//        public
//        view
//        returns (bool)
//    {
//        // Ensure creditor signature is valid.
//        if (!isValidSignature(
//            creditor,
//            creditorCommitmentHash,
//            signaturesV[0],
//            signaturesR[0],
//            signaturesS[0])) {
//            LogError(
//                uint8(Errors.INVALID_CREDITOR_SIGNATURE),
//                creditor,
//                creditorCommitmentHash
//            );
//
//            return false;
//        }
//
//        // Ensure price feed operator has signed off on the principal token's price.
//        if (!isValidSignature(
//            priceFeedOperator,
//            principalTokenPriceDataHash,
//            signaturesV[1],
//            signaturesR[1],
//            signaturesS[1])) {
//            LogError(
//                uint8(Errors.INVALID_PRINCIPAL_PRICE_SIGNATURE),
//                creditor,
//                creditorCommitmentHash
//            );
//
//            return false;
//        }
//
//        // Ensure price feed operator has signed off on the collateral token's price.
//        if (!isValidSignature(
//            priceFeedOperator,
//            collateralTokenPriceDataHash,
//            signaturesV[2],
//            signaturesR[2],
//            signaturesS[2])) {
//            LogError(
//                uint8(Errors.INVALID_COLLATERAL_PRICE_SIGNATURE),
//                creditor,
//                creditorCommitmentHash
//            );
//
//            return false;
//        }
//
//        return true;
//    }

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
//            LogError(uint8(Errors.AGREEMENT_EXPIRED), creditor, creditorCommitmentHash);

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
//            LogError(uint8(Errors.LTV_EXCEEDS_MAX), creditor, creditorCommitmentHash);

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

//        // Creditor commitment.
//        address creditor,
//        bytes32 creditorCommitmentHash,
//        // Price feed operator data.
//        address priceFeedOperator,
//        bytes32 principalTokenPriceDataHash,
//        bytes32 collateralTokenPriceDataHash,
//        // Signatures
//        uint8[3] signaturesV,
//        bytes32[3] signaturesR,
//        bytes32[3] signaturesS

//    function unpackVerificationParams(bytes32[] parameters)
//        public
//        pure
//        returns (
//            bytes32 creditorCommitmentHash,
//            address addresses,
//            bytes32[2] memory priceDataHashes,
//            bytes32[3] memory signaturesR,
//            bytes32[3] memory signaturesS,
//            uint8[3] memory signaturesV
//        )
//    {
//        return (
//            // Creditor commitment hashes.
//            parameters[1],
//            // Creditor and price feed addresses.
//            [
//                address(parameters[0]),
//                address(parameters[2])
//            ],
//            // Price feed data.
//            [
//                parameters[2],
//                parameters[3]
//            ],
//            // Signatures R
//            [parameters[4], parameters[5], parameters[6]],
//            // Signatures S
//            [parameters[7], parameters[8], parameters[9]],
//            [
//                uint8(parameters[10] & 0x000000000000000000000000000000000000000000000000000000000000ffff),
//                uint8(parameters[10] & 0x00000000000000000000000000000000000000000000000000000000ffff0000),
//                uint8(parameters[10] & 0x0000000000000000000000000000000000000000000000000000ffff00000000)
//            ]
//        );
//
//
////        (
////            creditor,
////            creditorCommitmentHash,
////            priceFeedOperator,
////            principalTokenPriceDataHash,
////            collateralTokenPriceDataHash
////            signaturesR[0],
////            signaturesR[1],
////            signaturesR[2],
////            signaturesS[0],
////            signaturesS[1],
////            signaturesS[2],
////            signaturesV,
////        ) = parameters;
//
//
//            // Each of these is uint8
////        [
////        signaturesV[0].toString(),
////        signaturesV[0],
////        signaturesV[0],
////        ].join(""),
//    }
}
