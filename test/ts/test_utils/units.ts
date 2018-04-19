import { BigNumber } from "bignumber.js";
import * as Web3 from "web3";

const INTEREST_RATE_SCALING_FACTOR = new BigNumber(10 ** 4);
const UNDERWRITER_RISK_RATING_SCALING_FACTOR = new BigNumber(10 ** 7);

export function ether(amount: number): BigNumber {
    const weiString = web3.toWei(amount, "ether");
    return new BigNumber(weiString);
}

export function interestRateFixedPoint(amount: number): BigNumber {
    return new BigNumber(amount).times(INTEREST_RATE_SCALING_FACTOR);
}

export function underwriterRiskRatingFixedPoint(riskRating: number): BigNumber {
    return new BigNumber(riskRating).times(UNDERWRITER_RISK_RATING_SCALING_FACTOR);
}
