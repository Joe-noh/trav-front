const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const DefinePlugin = require('webpack/lib/DefinePlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'dev';
const HMR = helpers.hasProcessFlag('hot');
const metadata = webpackMerge(commonConfig.metadata, {
  host: 'localhost',
  port: 4200,
  ENV: ENV,
  HMR: HMR
});

module.exports = webpackMerge(commonConfig, {
  metadata: metadata,
  debug: true,
  devtool: 'cheap-module-source-map',
  output: {
    path: helpers.root('dist'),
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new DefinePlugin({
      'ENV': JSON.stringify(metadata.ENV),
      'HMR': metadata.HMR,
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV),
        'HMR': metadata.HMR
      }
    })
  ],

  devServer: {
    port: metadata.port,
    host: metadata.host,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    outputPath: helpers.root('dist')
  },

  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
});
