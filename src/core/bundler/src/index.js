// @flow
import Bundler from './Bundler';

type Opts = {
  cwd: string,
};

export default async function bundle(opts: Opts) {
  let bundler = new Bundler({
    // ...
  });

  await bundler.bundle();

  // ...
}
