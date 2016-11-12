module.exports = function(gulp, config, plugins) {

  'use strict';

  return function() {
    gulp.watch(config.allJs, ['build:js']);
  };
};
