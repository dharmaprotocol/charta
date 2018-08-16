import { BigNumber } from "bignumber.js";
import { Address } from "../../../types/common";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";
import { CreditorProxyErrorCodes } from "../../../types/errors";

import { LogError } from "../logs/creditor_proxy";

import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { Web3Utils } from "../../../utils/web3_utils";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up Web3 utils
const web3Utils = new Web3Utils(web3);

const creditorProxyContract = artifacts.require("CreditorProxy");

contract("Creditor Proxy (Unit Tests)", async (ACCOUNTS) => {
    let creditorProxy: CreditorProxyContract;

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];

    const DEBTOR_1 = ACCOUNTS[5];
    const DEBTOR_2 = ACCOUNTS[6];
    const DEBTOR_3 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2, DEBTOR_3];

    const CREDITOR_1 = ACCOUNTS[8];
    const CREDITOR_2 = ACCOUNTS[9];
    const CREDITOR_3 = ACCOUNTS[10];
    const CREDITORS = [CREDITOR_1, CREDITOR_2, CREDITOR_3];

    const UNDERWRITER = ACCOUNTS[11];
    const RELAYER = ACCOUNTS[12];

    const MALICIOUS_TERMS_CONTRACTS = ACCOUNTS[13];

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        const creditorProxyContractInstance = await creditorProxyContract.new();

        const creditorProxyWeb3ContractInstance = web3.eth
            .contract(creditorProxyContract.abi)
            .at(creditorProxyContractInstance.address);

        creditorProxy = new CreditorProxyContract(creditorProxyWeb3ContractInstance, TX_DEFAULTS);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyContract.abi);
    };

    before(reset);

    describe("#submitDebtOrder", () => {
        let creditor: string;

        const testShouldReturnError = async (creditor: string, errorCode: number) => {
            const txHash = await creditorProxy.submitDebtOrder.sendTransactionAsync(creditor);

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(LogError(creditorProxy.address, errorCode));
        };

        it("should return CREDITOR_MISSING error", async () => {
            await testShouldReturnError(NULL_ADDRESS, CreditorProxyErrorCodes.CREDITOR_MISSING);
        });
    });
});
