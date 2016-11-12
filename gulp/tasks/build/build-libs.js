module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

    var destination = config.paths.distribution;

    var js = gulp.src(config.libs.scripts)
      .pipe(plugins.concat('libs.js'))
      .pipe(plugins.sourcemaps.init())
      .pipe(gulp.dest(destination))
      .pipe(plugins.uglify())
      .pipe(plugins.rename('libs.min.js'))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(destination));

    var css = gulp.src(config.libs.styles)
      .pipe(plugins.concat('libs.css'))
      .pipe(plugins.sourcemaps.init())
      .pipe(gulp.dest(destination))
      .pipe(plugins.csso())
      .pipe(plugins.rename('libs.min.css'))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(destination));

    return plugins.es.concat(js, css);

  };

  return task;

};
