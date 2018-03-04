# Setup SSH tunnneling with port forwarding into hosted Kovan node
ssh -f -o 'ServerAliveInterval 10' -o 'ServerAliveCountMax 3' \
    -N -L 8546:localhost:8545 ubuntu@kovan.dharma.io

# Grab PID of ssh connection process
SSH_PID=$(ps aux | grep "ssh" | grep -v 'grep' | awk '{print $2}')

# Deploy contracts onto Kovan network
truffle migrate --reset --network kovan

# Replace old artifacts with newly saved artifacts
rm -rf artifacts/contracts
cp -r build/contracts artifacts/

# Kill ssh connection process
kill -9 $SSH_PID
