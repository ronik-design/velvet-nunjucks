'use strict';

const nunjucksDate = require('nunjucks-date');

const install = function (env) {
  env.addFilter('starts_with', (str, searchStr) => {
    str = str || '';
    return (str || '').search(searchStr) === 0;
  });

  env.addFilter('ends_with', (str, searchStr) => {
    str = str || '';
    return str.search(searchStr) === str.length - searchStr.length;
  });

  env.addFilter('date', nunjucksDate);
};

module.exports = {install};
