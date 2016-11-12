module.exports = function (gulp, config, plugins) {

  'use strict';

  return {
    deps: ['watch:js', 'watch:styles', 'watch:templates', 'watch:images', 'watch:index']
  };
};


