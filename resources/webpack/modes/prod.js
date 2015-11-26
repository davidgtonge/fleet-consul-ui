var path = require("path");
var webpack = require("webpack");
var WriteFileWithBundleNamePlugin = require("../plugins/WriteFileWithBundleNamePlugin");

module.exports = (function(baseConfig) {
  var config = Object.create(baseConfig);
  var configPath = path.resolve(__dirname + "../../../../src/options/configuration/dev");

  config.resolve.alias["app-config"] = configPath;

  var oldPlugins = config.plugins || [];

  config.plugins = oldPlugins.concat([
    new webpack.DefinePlugin({
      MODE: JSON.stringify("PROD"),
      BUILD_DATE: JSON.stringify(new Date()),
      BUILD_NUMBER: JSON.stringify(process.env.bamboo_buildNumber || "production"),
      "process.env": {
        NODE_ENV: JSON.stringify("PROD"),
        REST_URL: JSON.stringify(process.env.REST_URL)
      }
    }),
    new WriteFileWithBundleNamePlugin({output: "index.html"}),
  ]);

  return config;
}(require("../base")));
