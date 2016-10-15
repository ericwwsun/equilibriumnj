module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

    var scripts = config.allJs;

    return gulp.src(scripts)
      .pipe(plugins.angularFilesort())
      .pipe(plugins.jshint(config.jshintOptions))
      .pipe(plugins.jshint.reporter('jshint-stylish'))
      .pipe(plugins.concat(config.name.toLowerCase() + '.js'))
      .pipe(plugins.sourcemaps.init({ loadMaps: true }))
      .pipe(gulp.dest(config.paths.distribution))
      .pipe(plugins.uglify())
      .pipe(plugins.rename(config.name.toLowerCase() + '.min.js'))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(config.paths.distribution))
      .pipe(plugins.server.reload({ stream: true }));

  };

  return {
    fn: task
  };

};
