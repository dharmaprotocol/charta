/*
    Deploys a DummyToken to a test or local environment, then adds it to the TokenRegistry

    Arguments:
        tokenSymbol
        tokenAddress
        tokenName
        numDecimals

    Example:
        $ truffle exec ./scripts/add_dummy_tokens
 */

// External libraries
const fs = require("fs");
const ABIDecoder = require("abi-decoder");
const { BigNumber } = require("bignumber.js");

// Artifacts
const DummyToken = artifacts.require("DummyToken");

// Wrappers
const { TokenRegistryContract } = require("../transpiled/types/generated/token_registry");
const {
    DharmaMultiSigWalletContract,
} = require("../transpiled/types/generated/dharma_multi_sig_wallet");
const { DummyTokenContract } = require("../transpiled/types/generated/dummy_token");

// MultiSig Transaction Submission Helper
const { multiSigExecuteAfterTimelock } = require("../transpiled/test/ts/test_utils/multisig");

// Sends all transactions from the default account
const TX_DEFAULTS = { from: web3.eth.accounts[0], gas: 4000000 };

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function deployDummyToken(multiSig, tokenRegistry, tokenSymbol, tokenName, numDecimals) {
    console.log("Deploying new DummyToken");
    console.log(`\ttoken symbol: ${tokenSymbol}`);
    console.log(`\ttoken name: ${tokenName}`);
    console.log(`\tnumber of decimals: ${numDecimals.toString()}`);

    const dummyToken = await DummyToken.new(
        tokenName,
        tokenSymbol,
        numDecimals,
        1000 * 10 ** 18,
        web3.eth.accounts,
    );

    const tokenAddress = dummyToken.address;

    console.log(`Dummy Token deployed to address: ${tokenAddress}\n`);

    return [tokenSymbol, tokenAddress, tokenName, numDecimals, TX_DEFAULTS];
}

async function submitTransactionToMultiSig(multiSig, tokenRegistry, params) {
    console.log(`Submitting transaction to register Dummy Token ${params[0]} in Token Registry`);

    const encodedTransaction = await tokenRegistry.web3ContractInstance.setTokenAttributes.getData.apply(
        null,
        params,
    );

    const txHash = await multiSig.submitTransaction.sendTransactionAsync(
        tokenRegistry.address,
        new BigNumber(0),
        encodedTransaction,
        TX_DEFAULTS,
    );
    console.log(`Token ${params[0]} MultiSig submitTransaction hash: ${txHash}`);

    console.log("Sleeping for 60 seconds");
    await sleep(60 * 1000);

    const receipt = await web3.eth.getTransactionReceipt(txHash);

    const submission = ABIDecoder.decodeLogs(receipt.logs)[0];

    const transactionId = submission.events[0].value;

    console.log(`\tTransaction submitted.  MultiSig Transaction ID: ${transactionId}\n`);

    const sleepSeconds = 2;

    console.log(`Sleeping for ${sleepSeconds} second(s)...`);
    await sleep(sleepSeconds * 1000);

    console.log(`\tSlept for ${sleepSeconds} second(s)`);

    console.log(`Executing transaction with id: ${transactionId}`);

    const executeTxHash = await multiSig.executeTransaction.sendTransactionAsync(
        transactionId,
        TX_DEFAULTS,
    );

    console.log(`\ttransaction hash: ${executeTxHash}`);

    // Development environment only
    // const transaction = await multiSig.transactions.callAsync(transactionId);
    //
    // const [destination, value, data, executedSuccessfully] = transaction;
    //
    // if (!executedSuccessfully) {
    //     throw new Error(`Multisig transaction with ID #${transactionId} failed to execute.`);
    // }
    //
    // console.log("\tTransaction successfully executed!");
    //
    // console.log("Name in Token Registry: ", await tokenRegistry.getTokenNameBySymbol.callAsync(params[0]));
    // console.log("Num decimals in Token Registry: ", await tokenRegistry.getNumDecimalsFromSymbol.callAsync(params[0]));
}

async function deployTokens() {
    const ERC20_TOKEN_LIST = JSON.parse(
        fs.readFileSync("token_registry_data/erc20_tokens.json", "utf8"),
    );

    const multiSig = await DharmaMultiSigWalletContract.deployed(web3, TX_DEFAULTS);
    const tokenRegistry = await TokenRegistryContract.deployed(web3, TX_DEFAULTS);

    console.log(await tokenRegistry.tokenSymbolList.callAsync(54));

    // ABIDecoder.addABI(multiSig.abi);
    //
    // for (const token of ERC20_TOKEN_LIST) {
    //     const numDecimals = new BigNumber(token.decimals);
    //
    //     const params = await deployDummyToken(multiSig, tokenRegistry, token.symbol, token.name, numDecimals);
    //
    //     await submitTransactionToMultiSig(multiSig, tokenRegistry, params);
    // }
    //
    // ABIDecoder.removeABI(multiSig.abi);
}

function run(callback) {
    // Parse the parameters
    // const [tokenSymbol, tokenName, numDecimalsString] = process.argv.slice(4);
    //
    // const numDecimals = new BigNumber(numDecimalsString);

    deployTokens();

    callback();
}

module.exports = run;
