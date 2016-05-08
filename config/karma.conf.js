module.exports = function (config) {
  const webpackConfig = require('./webpack.test');

  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      {pattern: './karma-test-shim.js', watched: false}
    ],
    exclude: [],
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS'],
    autoWatch: false,
    singleRun: true
  });
};
