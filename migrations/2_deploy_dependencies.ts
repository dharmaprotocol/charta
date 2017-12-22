import {promisify} from '@0xproject/utils';
import {spawn} from "child-process-promise";
import * as Web3 from "web3";
import * as fs from "fs-extra";

const migrateDependencies = async () => {
    const spawnProcess = spawn('scripts/migrate_0x_contracts.sh');
    const child = spawnProcess.childProcess;

    child.stdout.setEncoding('utf8');
    child.stdout.on('data', function (data: string) {
        data.toString().split("\n").forEach((line: string) => {
            process.stdout.write(`\x1b[33m${"[dependencies migration]: "}\x1b[0m`);
            process.stdout.write(line + "\n");
        });
    });

    child.stderr.setEncoding('utf8');
    child.stderr.on('data', function (data: string) {
        data.toString().split("\n").forEach((line: string) => {
            process.stdout.write(`\x1b[31m${"[dependencies migration]: "}\x1b[0m`);
            process.stdout.write(line + "\n");
        });
    });

    await spawnProcess;
}

module.exports = (deployer: any) => {
    deployer.then(migrateDependencies);
};
