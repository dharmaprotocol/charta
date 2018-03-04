mkdir -p dist

npm run transpile

cp transpiled/artifacts/* dist/
cp -r artifacts/contracts dist/
