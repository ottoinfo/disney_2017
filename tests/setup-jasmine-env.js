const path = require('path');
const savePath = path.join(__dirname, '..', 'test-results')
const reporters = require('jasmine-reporters');
const reporter = new reporters.JUnitXmlReporter({
  // Jest runs many instances of Jasmine in parallel. Force distinct file output
  // per test to avoid collisions.
  consolidateAll: false,
  filePrefix: 'junit',
  savePath
});
jasmine.getEnv().addReporter(reporter);

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }
}

global.localStorage = new LocalStorageMock;
global.sessionStorage = new LocalStorageMock;
