'use strict';

module.exports.install = function (env) {
  const site = env.getGlobal('site');
  env.addGlobal('get_page', relpath => {
    return site.getPage(relpath);
  });
};
