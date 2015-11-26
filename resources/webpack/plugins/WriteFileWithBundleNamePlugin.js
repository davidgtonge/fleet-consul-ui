var WriteFileWithBundleNameInItPlugin, fs, handlebars, path;

path = require("path");

fs = require("fs");

handlebars = require('handlebars');

module.exports = WriteFileWithBundleNameInItPlugin = (function() {
  function WriteFileWithBundleNamePlugin(arg) {
    var templateFile, templateFileName;
    this.output = arg.output, this.platform = arg.platform, this.hash = arg.hash;
    templateFileName = "index.hbs";
    if (this.platform != null) {
      templateFileName = "index-" + this.platform + ".hbs";
    }
    templateFile = fs.readFileSync(path.join(__dirname, "../templates/" + templateFileName)).toString();
    this.template = handlebars.compile(templateFile);
  }

  WriteFileWithBundleNamePlugin.prototype.apply = function(compiler) {
    return compiler.plugin('after-compile', (function(_this) {
      return function(compilation, callback) {
        var hash, htmlFile;
        hash = _this.hash != null ? _this.hash : compilation.hash;
        htmlFile = _this.template({
          bundleName: compilation.fileName,
          filename: hash
        });
        compilation.assets[_this.output] = {
          size: function() {
            return Buffer.byteLength(this.source(), 'utf8');
          },
          source: function() {
            return htmlFile;
          }
        };
        return callback();
      };
    })(this));
  };

  return WriteFileWithBundleNamePlugin;

})();