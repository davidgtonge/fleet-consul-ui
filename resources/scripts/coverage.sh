#!/bin/bash

# NOTE:
# we need to use '--' syntax below
# to tell Istanbul to pass '--opts' command to mocha
export NODE_ENV=TEST
find ./src -type d -name '__tests__' |
xargs -I {} find {} -name '*.js' |
xargs istanbul cover ./node_modules/mocha/bin/_mocha \
  -- --opts ./resources/test/mocha.opts
