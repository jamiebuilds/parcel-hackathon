#!/usr/bin/env node
require('./lib/cli').default(process.cwd(), process.argv.slice(2));
