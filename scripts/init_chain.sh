# #!/bin/bash
CHARTA_REPO=`pwd`

bash $CHARTA_REPO/scripts/migrate_0x_contracts.sh &

ganache-cli --networkId 70 --accounts 20
