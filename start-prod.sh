#!/bin/sh

echo "---------------------------------------"
echo "-- STARTING FRONT-END PROD SCRIPT    --"
echo "---------------------------------------"

rm -rf ./node_modules && yarn install --frozen-lockfile
yarn build
yarn serve