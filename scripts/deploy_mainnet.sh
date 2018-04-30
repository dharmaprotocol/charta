# We use the build/ directory as a day-to-day development
# environment, and use the artifacts/ directory to store production
# artifacts (i.e. artifacts where our contracts are deployed
# on non-local blockchains).
#
# Truffle will by default use the build folder to fetch the most recent
# artifacts and update them with the newly deployed contract
# addresses, saving the newest artifacts in build.dev
#
# Thus, when pushing a new build to Mainnet, we want to replace build
# folder with most recent saved  production artifacts/ directory contents
# so that our new artifacts include the addresses of contracts deployed in production
# on networks *other* than Mainnet.
rm build/contracts/*
cp artifacts/json/* build/contracts/

# Setup SSH tunnneling with port forwarding into hosted Mainnet node
ssh -f -o 'ServerAliveInterval 10' -o 'ServerAliveCountMax 3' \
    -N -L 8547:localhost:8545 ec2-user@mainnet.dharma.io

# Grab PID of ssh connection process
SSH_PID=$(ps aux | grep "ssh" | grep -v 'grep' | awk '{print $2}')

# Re-compile all contracts
truffle compile --all

# Deploy contracts onto the Ethereum mainnet
truffle migrate --network live

# Replace production artifacts with newly generated json artifacts
rm artifacts/json/*
cp build/contracts/* artifacts/json/

# Remove old transpiled artifacts from the artifacts/ directory
rm artifacts/ts/*

# Transform raw JSON artifacts into Typescript modules.  This makes
# interacting with the artifacts significantly easier when exporting
# them as modules.
for filename in build/contracts/*.json; do
    filename_base=$(basename $filename .json)
    echo -e "export const $filename_base = " > "artifacts/ts/$filename_base.ts"
    cat "build/contracts/$filename_base.json" >> "artifacts/ts/$filename_base.ts"

    echo -e "Transpiled $filename_base.json into $filename_base.ts"
done

# Kill ssh connection process
kill -9 $SSH_PID

echo -e "Successfully deployed contracts onto Mainnet!"
