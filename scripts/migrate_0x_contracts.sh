#!/bin/bash
CYAN='\033[0;36m'
NO_COLOR='\033[0m'

CHARTA_REPO=`pwd`
ZEROX_SMART_CONTRACTS=$CHARTA_REPO/node_modules/0x-smart-contracts

cd $ZEROX_SMART_CONTRACTS

echo -e "${CYAN}Installing 0x contract deployment dependencies...${NO_COLOR}"
npm install
echo -e "\n"

echo -e "${CYAN}Compiling 0x smart contracts...${NO_COLOR}"
npm run compile
echo -e "\n"

echo -e "${CYAN}Running 0x smart contract migrations...${NO_COLOR}"
npm run migrate
echo -e "\n"

cd build/contracts/

echo -e "${CYAN}Copying 0x smart contract artifacts to local build folder...${NO_COLOR}"
for f in *.json; do cp -- "$f" "$CHARTA_REPO/build/contracts/ZeroX_$f"; done

echo -e "${CYAN}Renaming contract artifacts to separate them from the Dharma smart contracts...${NO_COLOR}"
sed -i '' 's/"contract_name": "/"contract_name": "ZeroX_/g' $CHARTA_REPO/build/contracts/ZeroX_*
