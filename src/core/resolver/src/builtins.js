var builtins = require('node-libs-browser');

for (var key in builtins) {
  if (builtins[key] == null) {
    builtins[key] = require.resolve('./_empty');
  }
}

module.exports = builtins;
