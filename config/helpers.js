'use strict';

let path = require('path');
let root = path.resolve(__dirname, '..');

module.exports = {
  root: (filepath) => {
    return path.join(root, filepath);
  },

  hasProcessFlag: (flag) => {
    return process.argv.includes(`--${flag}`);
  },

  packageSort: (packages) => {
    return (a, b) => {
      let nameA = a.names[0];
      let nameB = b.names[0];

      if (nameA === 'polyfills') { return -1; }
      if (nameA === 'main') { return 1;}
      return (nameA !== 'polyfills' && nameB === 'main') ? -1 : 1;
    };
  }
};
