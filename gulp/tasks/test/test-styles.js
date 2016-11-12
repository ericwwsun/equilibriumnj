module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

    var styles = plugins.path.join(config.paths.source, '/**/*.scss');

    return gulp.src(styles)
      .pipe(plugins.sassLint())
      .pipe(plugins.sassLint.format());
  };

  return task;

};
