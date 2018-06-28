// @flow
import { type ModuleRequest, type ModuleReference } from './types';
import TaskQueue from './TaskQueue';
import ModuleGraph from './ModuleGraph';
import EventEmitter from 'events';

export type BundlerOpts = {
  // ...
};

export default class Bundler extends EventEmitter {
  transformerQueue: TaskQueue<ModuleRequest>;
  moduleGraph: ModuleGraph;

  constructor(opts: BundlerOpts) {
    super();
    this.transformerQueue = new TaskQueue(this.transformModuleRequest);
  }

  async bundle(entries: Array<ModuleRequest>) {
    // Add all of the entries to the resolver queue.
    this.transformerQueue.addAll(entries);

    // ...
  }

  async transformModuleRequest(moduleRequest: ModuleRequest) {
    // ...
    // this.moduleGraph.add(...);
    // ...
  }
}
