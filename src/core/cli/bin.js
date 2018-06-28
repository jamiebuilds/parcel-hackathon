#!/usr/bin/env node
var cli = require('./lib/cli');
var cwd = process.cwd();
var argv = process.argv;

cli.default(cwd, argv).catch(function(err) {
  console.log(String(err));
});
