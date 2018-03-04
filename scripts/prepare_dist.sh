rm -rf ./dist
tsc --p tsconfig.dist.json
cp -r artifacts/contracts dist/artifacts/
