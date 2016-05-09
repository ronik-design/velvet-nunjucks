'use strict';

const files = require('./tags/files');
const filters = require('./tags/filters');
const images = require('./tags/images');
const scripts = require('./tags/scripts');
const styles = require('./tags/styles');

module.exports = function () {
  const tags = {
    files,
    filters,
    images,
    scripts,
    styles
  };

  return {tags};
};
