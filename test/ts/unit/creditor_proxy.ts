import { BigNumber } from "bignumber.js";

import * as ABIDecoder from "abi-decoder";
import * as chai from "chai";
import * as _ from "lodash";
import * as moment from "moment";
import * as Web3 from "web3";
import * as Units from "../test_utils/units";

import { LogError, LogCreditOrderFilled, LogCreditOrderCancelled } from "../logs/creditor_proxy";

import { CreditorProxyContract } from "../../../types/generated/creditor_proxy";
import { DebtKernelContract } from "../../../types/generated/debt_kernel";
import { MockDebtTokenContract } from "../../../types/generated/mock_debt_token";
import { MockERC20TokenContract } from "../../../types/generated/mock_e_r_c20_token";
import { MockTokenTransferProxyContract } from "../../../types/generated/mock_token_transfer_proxy";
import { MockTermsContractContract } from "../../../types/generated/mock_terms_contract";
import { RepaymentRouterContract } from "../../../types/generated/repayment_router";

import { CreditorProxyErrorCodes } from "../../../types/errors";
import { CreditOrder, SignedCreditOrder } from "../../../types/proxy/credit_order";
import {
    CreditorCommitment,
    SignedCreditorCommitment,
} from "../../../types/proxy/creditor_commitment";

import { BigNumberSetup } from "../test_utils/bignumber_setup";
import ChaiSetup from "../test_utils/chai_setup";
import { REVERT_ERROR } from "../test_utils/constants";
import { Web3Utils } from "../../../utils/web3_utils";

import { CreditOrderFactory } from "../factories/credit_order_factory";

// Configure BigNumber exponentiation
BigNumberSetup.configure();

// Set up Chai
ChaiSetup.configure();
const expect = chai.expect;

// Set up Web3 utils
const web3Utils = new Web3Utils(web3);

const creditorProxyContract = artifacts.require("CreditorProxy");
const debtKernelContract = artifacts.require("DebtKernel");
const mockDebtTokenContract = artifacts.require("MockDebtToken");
const mockTermsContractArtifacts = artifacts.require("MockTermsContract");

contract("Creditor Proxy (Unit Tests)", async (ACCOUNTS) => {
    let creditorProxy: CreditorProxyContract;
    let kernel: DebtKernelContract;
    let repaymentRouter: RepaymentRouterContract;
    let mockDebtToken: MockDebtTokenContract;
    let mockPrincipalToken: MockERC20TokenContract;
    let mockTokenTransferProxy: MockTokenTransferProxyContract;
    let mockTermsContract: MockTermsContractContract;

    let orderFactory: CreditOrderFactory;
    let defaultOrderParams: { [key: string]: any };

    const CONTRACT_OWNER = ACCOUNTS[0];
    const ATTACKER = ACCOUNTS[1];
    const RELAYER = ACCOUNTS[2];
    const UNDERWRITER = ACCOUNTS[3];

    const CREDITOR_1 = ACCOUNTS[4];
    const CREDITOR_2 = ACCOUNTS[5];
    const CREDITORS = [CREDITOR_1, CREDITOR_2];

    const DEBTOR_1 = ACCOUNTS[6];
    const DEBTOR_2 = ACCOUNTS[7];
    const DEBTORS = [DEBTOR_1, DEBTOR_2];

    const TERMS_CONTRACT_PARAMETERS = web3.sha3("arbitrary terms contract parameters");

    const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

    const TX_DEFAULTS = { from: CONTRACT_OWNER, gas: 4712388 };

    const reset = async () => {
        mockTokenTransferProxy = await MockTokenTransferProxyContract.deployed(web3, TX_DEFAULTS);

        /*
        In our test environment, we want to interact with the contract being
        unit tested as a statically-typed entity. In order to accomplish this,
        we take the following steps:

          1 - Instantiate an instance of the contract through the Truffle
              framework.
          2 - Instantiate an instance of the contract through the Web3 API using
              the truffle instance's ABI.
          3 - Use the Web3 contract instance to instantiate a statically-typed
              version of the contract as handled by ABI-GEN, which generates
              a contract wrapper with types pulled from the contract's ABI.
         */

        // Step 1: Instantiate a truffle instance of the contract.
        const creditorProxyContractInstance = await creditorProxyContract.new(
            mockTokenTransferProxy.address,
        );
        const kernelContractInstance = await debtKernelContract.new(mockTokenTransferProxy.address);
        const mockTermsContractInstance = await mockTermsContractArtifacts.new();

        // Step 2: Instantiate a web3 instance of the contract.
        const creditorProxyWeb3ContractInstance = web3.eth
            .contract(creditorProxyContract.abi)
            .at(creditorProxyContractInstance.address);
        const kernelWeb3ContractInstance = web3.eth
            .contract(debtKernelContract.abi)
            .at(kernelContractInstance.address);
        const mockTermsContractWeb3ContractInstance = web3.eth
            .contract(mockTermsContractArtifacts.abi)
            .at(mockTermsContractInstance.address);

        // Step 3: Instantiate a statically-typed version of the contract.
        creditorProxy = new CreditorProxyContract(creditorProxyWeb3ContractInstance, TX_DEFAULTS);
        kernel = new DebtKernelContract(kernelWeb3ContractInstance, TX_DEFAULTS);
        mockTermsContract = new MockTermsContractContract(
            mockTermsContractWeb3ContractInstance,
            TX_DEFAULTS,
        );

        // Load current Repayment Router for use as a version address in the Issuance
        // commitments
        repaymentRouter = await RepaymentRouterContract.deployed(web3, TX_DEFAULTS);

        mockDebtToken = await MockDebtTokenContract.deployed(web3, TX_DEFAULTS);
        mockPrincipalToken = await MockERC20TokenContract.deployed(web3, TX_DEFAULTS);

        const latestBlockTime = await web3Utils.getLatestBlockTime();

        defaultOrderParams = {
            kernelVersion: kernel.address,
            repaymentVersion: repaymentRouter.address,
            creditor: CREDITOR_1,
            underwriter: UNDERWRITER,
            termsContract: mockTermsContract.address,
            termsContractParameters: TERMS_CONTRACT_PARAMETERS,
            principalToken: mockPrincipalToken.address,
            principalAmount: Units.ether(1),
            minimumRiskRating: Units.underwriterRiskRatingFixedPoint(1),
            maximumCreditorFee: Units.ether(0.005),
            commitmentExpirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            nonce: new BigNumber(0),

            debtor: DEBTOR_1,
            relayer: RELAYER,
            creditorFee: Units.ether(0.002),
            debtorFee: Units.ether(0.001),
            relayerFee: Units.ether(0.0015),
            underwriterFee: Units.ether(0.0015),
            underwriterRiskRating: Units.underwriterRiskRatingFixedPoint(1.5),
            orderExpirationTimestampInSec: new BigNumber(
                moment
                    .unix(latestBlockTime)
                    .add(30, "days")
                    .unix(),
            ),
            salt: "abc123",
            orderSignatories: { debtor: DEBTOR_1, creditor: CREDITOR_1, underwriter: UNDERWRITER },
        };

        orderFactory = new CreditOrderFactory(defaultOrderParams);

        // Setup ABI decoder in order to decode logs
        ABIDecoder.addABI(creditorProxyContract.abi);
        ABIDecoder.addABI(debtKernelContract.abi);
        ABIDecoder.addABI(mockDebtTokenContract.abi);
    };

    before(reset);

    describe("Initialization & Upgrades", async () => {});

    describe("#fillCreditOrder", () => {
        let creditOrder: SignedCreditOrder;
        let creditorCommitment: CreditorCommitment;
        let creditor: string;

        const testShouldReturnError = async (
            order: SignedCreditOrder,
            errorCode: number,
            signaturesR?: string[],
            signaturesS?: string[],
            signaturesV?: number[],
        ) => {
            const txHash = await creditorProxy.fillCreditOrder.sendTransactionAsync(
                order.getOrderAddresses(),
                order.getOrderValues(),
                order.getOrderBytes32(),
                signaturesV || order.getSignaturesV(),
                signaturesR || order.getSignaturesR(),
                signaturesS || order.getSignaturesS(),
            );

            const receipt = await web3.eth.getTransactionReceipt(txHash);
            const [errorLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));

            expect(errorLog).to.deep.equal(
                LogError(kernel.address, errorCode, order.getCreditorCommitmentHash()),
            );
        };

        const resetMocks = async () => {
            await mockDebtToken.reset.sendTransactionAsync();
            await mockTokenTransferProxy.reset.sendTransactionAsync();
            await mockPrincipalToken.reset.sendTransactionAsync();
        };

        const testOrderFill = async (filler: string, setupCreditOrder: () => Promise<void>) => {
            return () => {
                let creditor = CREDITOR_1;
                let orderFilledLog: ABIDecoder.DecodedLog;

                before(async () => {
                    await setupCreditOrder();

                    await mockDebtToken.reset.sendTransactionAsync();
                    await mockDebtToken.mockCreateReturnValue.sendTransactionAsync(
                        new BigNumber(creditOrder.getIssuanceHash()),
                    );

                    await mockPrincipalToken.reset.sendTransactionAsync();
                    await mockPrincipalToken.mockBalanceOfFor.sendTransactionAsync(
                        creditorCommitment.getCreditor(),
                        creditorCommitment.getPrincipalAmount().plus(creditOrder.getCreditorFee()),
                    );
                    await mockPrincipalToken.mockAllowanceFor.sendTransactionAsync(
                        creditorCommitment.getCreditor(),
                        mockTokenTransferProxy.address,
                        creditorCommitment.getPrincipalAmount().plus(creditOrder.getCreditorFee()),
                    );

                    await mockTermsContract.reset.sendTransactionAsync();
                    await mockTermsContract.mockRegisterTermStartReturnValue.sendTransactionAsync(
                        creditOrder.getIssuanceHash(),
                        creditOrder.getDebtor(),
                        true,
                    );

                    const txHash = await creditorProxy.fillCreditOrder.sendTransactionAsync(
                        creditOrder.getOrderAddresses(),
                        creditOrder.getOrderValues(),
                        creditOrder.getOrderBytes32(),
                        creditOrder.getSignaturesV(),
                        creditOrder.getSignaturesR(),
                        creditOrder.getSignaturesS(),
                        { from: filler },
                    );

                    const receipt = await web3.eth.getTransactionReceipt(txHash);
                    [orderFilledLog] = _.compact(ABIDecoder.decodeLogs(receipt.logs));
                });

                it("should transfer principal + creditor fees from creditor", async () => {
                    if (creditorCommitment.getPrincipalAmount().greaterThan(0)) {
                        await expect(
                            mockTokenTransferProxy.wasTransferFromCalledWith.callAsync(
                                mockPrincipalToken.address,
                                creditor,
                                creditorProxy.address,
                                creditorCommitment
                                    .getPrincipalAmount()
                                    .minus(creditOrder.getDebtorFee()),
                            ),
                        );
                    }
                });
                it("should transfer a newly minted debt token to the creditor", async () => {});
                it("should emit order submitted log", () => {});
            };
        };

        describe("User fills valid, consentual credit order", () => {
            testOrderFill(CONTRACT_OWNER, async () => {
                creditOrder = await orderFactory.generateCreditOrder();
                creditorCommitment = creditOrder.getCreditorCommitment();
            });
        });
    });

    describe("#cancelCreditIssuance", () => {});
});
