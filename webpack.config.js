const env = process.env.NODE_ENV;

if (/prod/.test(env)) {
  module.exports = require('./config/webpack.prod');
} else if (/test/.test(env)) {
  module.exports = require('./config/webpack.test');
} else {
  module.exports = require('./config/webpack.dev');
}
