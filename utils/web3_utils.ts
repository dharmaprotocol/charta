import * as promisify from "tiny-promisify";
import * as Web3 from "web3";

export class Web3Utils {
    private web3: Web3;

    constructor(web3: Web3) {
        this.web3 = web3;
    }

    public async doesContractExistAtAddressAsync(address: string): Promise<boolean> {
        const code = await promisify(this.web3.eth.getCode)(address);

        // Regex matches 0x0, 0x00, 0x in order to accommodate poorly implemented clients
        const codeIsEmpty = /^0x0{0,40}$/i.test(code);
        return !codeIsEmpty;
    }

    /**
     * Returns the current blocktime in seconds.
     *
     * @returns {Promise<number>}
     */
    public async getCurrentBlockTime(): Promise<number> {
        const latestBlock = await promisify(this.web3.eth.getBlock)("latest");

        return latestBlock.timestamp;
    }

    /**
     * Increases block time by the given number of seconds. Returns true
     * if the next block was mined successfully after increasing time.
     *
     * @param {number} seconds
     * @returns {Promise<boolean>}
     */
    public async increaseTime(seconds: number): Promise<boolean> {
        const increaseTimeResponse = await this.sendJsonRpcRequestAsync("evm_increaseTime", [
            seconds,
        ]);

        // A new block must be mined to make this effective.
        const blockMineResponse = await this.mineBlock();

        return !increaseTimeResponse["error"] && !blockMineResponse["error"];
    }

    /**
     * Mines a single block.
     *
     * @returns {Promise<"web3".Web3.JSONRPCResponsePayload>}
     */
    public async mineBlock(): Promise<Web3.JSONRPCResponsePayload> {
        return this.sendJsonRpcRequestAsync("evm_mine", []);
    }

    private async sendJsonRpcRequestAsync(
        method: string,
        params: any[],
    ): Promise<Web3.JSONRPCResponsePayload> {
        return promisify(this.web3.currentProvider.sendAsync, {
            context: this.web3.currentProvider,
        })({
            jsonrpc: "2.0",
            method,
            params,
            id: new Date().getTime(),
        });
    }
}
