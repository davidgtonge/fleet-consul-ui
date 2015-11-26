process.env.UV_THREADPOOL_SIZE = 100;

var path = require("path");
var fs = require("fs");

module.exports = {
  devtool: "eval",
  context: path.join(__dirname, "/../../src"),
  entry: {
    main: "./main"
  },
  node: {
    fs: "empty"
  },
  output: {
    path: path.join(__dirname, "/../../build"),
    filename: "[hash].js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.(js)$/,
        include: path.resolve("./src/"),
        loaders: [
          "babel"
        ]
      },
      { test: /\.json$/, loader: "json" },
      { test: /\.(woff|ttf|eot)\??.*$/, loader: "file?name=font/[hash].[ext]" },
      { test: /[\/\\]fonts[\/\\].*\.(svg)\??.*$/, loader: "file?name=font/[hash].[ext]" },
      { test: /^((?!fonts).)*\.(jpg|png|gif)$/, loader: "url?name=img/[hash].[ext]&limit=8192" },
      { test: /^((?!fonts).)*\.(svg)$/, loader: "url?name=img/[hash].[ext]&limit=100" },
      { test: /\.scss$/, loaders: [ "style", "css", "sass"]}
    ]
  },
  resolveLoader: {
    fallback: path.join(__dirname, "../../node_modules")
  },
  resolve: {
    extensions: [ "", ".js", ".json", ".jsx"],
    alias: {
      react: path.resolve("./node_modules/react")
    }
  }
};
