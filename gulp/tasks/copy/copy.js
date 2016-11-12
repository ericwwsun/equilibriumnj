'use strict';

module.exports = function(gulp, config, plugins) {

  return function() {
    return gulp.src(config.copy, {base: 'app'})
      .pipe(gulp.dest(config.paths.distribution));
  };
};
