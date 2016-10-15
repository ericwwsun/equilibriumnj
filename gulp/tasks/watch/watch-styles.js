module.exports = function(gulp, config, plugins) {

  'use strict';


  return function() {
    gulp.watch(plugins.path.join(config.paths.source, '/**/*.scss'), ['build:styles']);
  };
};
