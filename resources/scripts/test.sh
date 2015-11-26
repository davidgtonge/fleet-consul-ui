#!/bin/bash
export NODE_ENV=TEST
find ./src -type d -name '__tests__' |
xargs -I {} find {} -name '*.js' |
xargs ./node_modules/mocha/bin/_mocha \
  --opts ./resources/test/mocha.opts
