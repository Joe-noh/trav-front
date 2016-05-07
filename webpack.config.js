const nodeEnv = process.env.NODE_ENV;

if (/prod/.test(nodeEnv)) {
  module.exports = require('./config/webpack.prod');
} else if (/test/.test(nodeEnv)) {
  module.exports = require('./config/webpack.test');
} else {
  module.exports = require('./config/webpack.dev');
}
