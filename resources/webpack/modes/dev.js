var path = require("path");
var webpack = require("webpack");
var R = require("ramda")
var WriteFileWithBundleNamePlugin = require("../plugins/WriteFileWithBundleNamePlugin");

module.exports = (function(baseConfig) {
  var config = R.merge({}, baseConfig)

  config.entry.main = ["webpack/hot/dev-server"].concat(baseConfig.entry.main);

  config.module.loaders = config.module.loaders.map(function(loaderConfig) {
    if (loaderConfig.test.toString() === "/\\.(js)$/") {
      loaderConfig.loaders.unshift("react-hot-loader");
    }

    return loaderConfig;
  });

  var oldPlugins = config.plugins || [];

  config.plugins = oldPlugins.concat([
    new webpack.DefinePlugin({
      MODE: JSON.stringify("DEV"),
      BUILD_DATE: JSON.stringify(new Date()),
      BUILD_NUMBER: JSON.stringify(process.env.bamboo_buildNumber || "dev"),
      "process.env": {
        NODE_ENV: JSON.stringify("DEV"),
        REST_URL: JSON.stringify(process.env.REST_URL)
      }
    }),
    new WriteFileWithBundleNamePlugin({output: "index.html", platform: "dev"})
  ]);

  return config;
}(require("../base")));
