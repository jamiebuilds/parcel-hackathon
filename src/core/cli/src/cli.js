// @flow
import program from 'commander';
import bundle from '@parcel/bundler';

export default async function cli(cwd: string, argv: Array<string>) {
  program
    .usage('[entries...] [options...]')
    .option('--serve, -s')
    .option('--watch, -w')
    .option('--open, -o [browser]')
    .option('--https')
    .option('--cert <path>')
    .option('--key <path>')
    .option('--port <port>')
    .option('--cache <dir>, --no-cache')
    .option('--hmr <port>, --no-hmr')
    .option('--hmr-hostname')
    .option('--no-source-maps')
    .option('--mode <mode>')
    .option('--production, --prod')
    .option('--development, --dev')
    .option('--test')
    .option('--autoinstall, --no-autoinstall')
    .option('--log-level <level>');

  let opts = program.parse(argv);

  try {
    await bundle({
      cwd,
      // ...
    });
  } catch (err) {
    console.log(err);
  }
}
