#!/bin/bash
find ./src -name \*.js |
xargs ./node_modules/eslint/bin/eslint.js
