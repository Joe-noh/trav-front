require('ts-node/register');

var helpers = require('./helpers');
var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  baseUrl: 'http://localhost:4200/',

  specs: [
    helpers.root('e2e/**/*.e2e.ts')
  ],
  exclude: [],

  framework: 'jasmine',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter());
  },

  useAllAngular2AppRoots: true
};
