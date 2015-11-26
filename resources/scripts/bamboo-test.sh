#!/bin/bash
export NODE_ENV=TEST
export JUNIT_REPORT_PATH=/opt/nodeservice/test_reports/unit.xml
find ./src -type d -name __tests__ |
xargs -I {} find {} -name \*.js |
xargs ./node_modules/mocha/bin/_mocha \
  --opts ./resources/test/mocha.opts \
  --reporter mocha-jenkins-reporter || true
