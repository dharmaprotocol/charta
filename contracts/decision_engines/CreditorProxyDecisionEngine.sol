pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/math/SafeMath.sol";

/**
 * A decision engine for creditor-driven loans, that can evaluate whether or not a creditor
 * should fill a loan, depending on the loan-to-value ratio of the principal and collateral amounts.
 * These amounts are defined by prices that are signed by the relayer.
 */
contract CreditorProxyDecisionEngine {
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

    function unpackParameters(
        bytes32[] memory decisionEngineParams
    ) public view returns(address[4], uint[4], bytes32[1]) {
        return ([
            address(decisionEngineParams[0]),  // creditor
            address(decisionEngineParams[2]),  // repaymentRouter
            address(decisionEngineParams[3]),  // underwriter
            address(decisionEngineParams[4])   // termsContract
        ],
        [
            // TODO: ensure the following 4 values do not take up more than 32 bytes when passed in
            uint(decisionEngineParams[5]),  // creditor fee
            uint(decisionEngineParams[6]),  // underwriterRiskRating
            uint(decisionEngineParams[7]),  // commitmentExpirationTimestampInSec
            uint(decisionEngineParams[8])   // salt
        ],
        [decisionEngineParams[9]] // termsContractParameters
        );
    }

    // Verifies that the creditor has signed all of the given parameters.
    function verifyCreditorCommitment(
        address creditor,
        bytes32[] memory decisionEngineParams,
        bytes32 signatureR,
        bytes32 signatureS,
        uint8 signatureV
    ) public view returns(bool) {
        address[4] memory addressParams;
        uint[4] memory uintParams;
        bytes32[1] memory bytesParams;

        (addressParams, uintParams, bytesParams) = unpackParameters(decisionEngineParams);

        bytes32 creditorCommitmentHash = getCreditorCommitmentHash(
            addressParams, uintParams, bytesParams
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

            return false;
        }

        return true;
    }

    function genericVerify(
        address creditor,
        bytes32[] memory decisionEngineParams,
        bytes32[] signaturesR,
        bytes32[] signaturesS,
        uint8[] signaturesV
    )
    public view returns (bool)
    {
        return verifyCreditorCommitment(
            creditor,
            decisionEngineParams,
            signaturesR[0],
            signaturesS[0],
            signaturesV[0]
        );
    }

    function evaluate()
        public
        view
        returns (bool) {
        // STUB.
        return true;
    }

    function isExpired(uint expirationTimestampInSec) public view returns (bool expired) {
        return expirationTimestampInSec < block.timestamp;
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

    /**
     * Returns the messaged signed by the creditor to indicate their commitment
     */
    function getCreditorCommitmentHash(
        address[4] commitmentAddresses,
        uint[4] commitmentValues,
        bytes32[1] termsContractParameters
    )
        internal
        pure
        returns (bytes32 _creditorCommitmentHash)
    {
        return keccak256(
            commitmentAddresses[0], // creditor
            commitmentAddresses[1], // repayment router version
            commitmentValues[0], // creditor fee
            commitmentAddresses[2], // underwriter
            commitmentValues[1], // underwriterRiskRating
            commitmentAddresses[3], // termsContract
            termsContractParameters[0],
            commitmentValues[2], // commitmentExpirationTimestampInSec
            commitmentValues[3] // salt
        );
    }
}
