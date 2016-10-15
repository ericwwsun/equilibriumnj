module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

    return gulp.src(config.images)
      .pipe(plugins.imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [plugins.pngquant()]
      }))
      .pipe(gulp.dest(config.paths.distribution + '/images'))
      .pipe(plugins.server.reload({ stream: true }));

  };

  return {
    fn: task
  };

};
