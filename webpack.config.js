'use strict';

let nodeEnv = process.env.NODE_ENV;
let env;

if (/prod/.test(nodeEnv)) {
  env = 'prod';
} else if (/test/.test(nodeEnv)) {
  env = 'test';
} else {
  env = 'dev';
}

module.exports = require(`./config/webpack.${env}`);
