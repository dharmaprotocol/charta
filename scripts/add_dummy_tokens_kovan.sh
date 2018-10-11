# Setup SSH tunnneling with port forwarding into hosted Kovan node
ssh -f -o 'ServerAliveInterval 10' -o 'ServerAliveCountMax 3' \
    -N -L 8546:localhost:8545 ubuntu@kovan.dharma.io

# Grab PID of ssh connection process
SSH_PID=$(ps aux | grep "ssh" | grep -v 'grep' | awk '{print $2}')

# Deploy and register dummy tokens
truffle exec scripts/add_dummy_tokens.js --network kovan

# Kill ssh connection process
kill -9 $SSH_PID

echo -e "Successfully added dummy tokens onto Kovan Testnet!"
