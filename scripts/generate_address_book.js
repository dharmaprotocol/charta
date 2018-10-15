/**
 * Creates an address book, using the contract artifacts.
 */

// Libraries
const fs = require("fs");
const AWS = require("aws-sdk")

const projectRoot = `${__dirname}/..`;

const secretAccessKey = process.env["AWS_SECRET_ACCESS_KEY"];
const accessKeyId = process.env["AWS_ACCESS_KEY_ID"];

// Package
const packageJson = require(`${projectRoot}/package.json`);
const packageVersion = packageJson.version;


// A list of the environment names, mapped to their network IDs.
const environments = {
    live: "1",
    kovan: "42",
    development: "70",
};

// Instantiate the address book that we're going to fill.
const addressBook = {
    live: {},
    kovan: {},
    development: {},
};

// The location of the artifact files.
const artifactDirectory = `${projectRoot}/build/contracts/`;

// Configuration
AWS.config.update({
    accessKeyId,
    secretAccessKey,
});

const s3 = new AWS.S3();

// Loop through all of the files.
fs.readdir(artifactDirectory, (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        const contents = fs.readFileSync(`${artifactDirectory}${file}`, "utf8");
        const JsonContents = JSON.parse(contents);

        const {contractName, networks} = JsonContents;

        for (let envName in environments) {
            const envId = environments[envName];

            if (networks[envId]) {
                addressBook[envName][contractName] = networks[envId].address;
            }
        }
    });

    // Now sync with s3.
    s3.putObject({
        Bucket: "dharma-contract-config",
        Key: `address_book/${packageVersion}.json`,
        Body: JSON.stringify(addressBook),
        ACL: "public-read",
    }, (err, data) => {
        if (err) {
            throw err;
        }

        console.log("Successfully uploaded package.");
    });
});
