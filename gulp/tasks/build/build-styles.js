module.exports = function (gulp, config, plugins) {

  'use strict';

  var dependencies = [
    'test:styles'
  ];

  var task = function() {

    var master = plugins.path.join(config.paths.source, '/styles/main.scss');
    var styles = plugins.path.join(config.paths.source, '/**/[^_]*.scss'); // ignores sass files leading with an underscore

    var injectedStyles = {
      files: gulp.src([styles, '!' + master], { read: false }),
      options: {
        starttag: '// inject:styles',
        endtag: '// endinject',
        addRootSlash: false,
        transform: function (path) {
          path = path.replace(config.paths.source, '');
          return '@import "' + path + '";';

        }
      }
    };

    return gulp.src(master)
      .pipe(plugins.inject(injectedStyles.files, injectedStyles.options))
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        includePaths : config.paths.source
      }).on('error', plugins.sass.logError))
      .pipe(plugins.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
      .pipe(plugins.rename(config.name + '.css'))
      .pipe(gulp.dest(config.paths.distribution))
      .pipe(plugins.csso())
      .pipe(plugins.rename(config.name + '.min.css'))
      .pipe(plugins.sourcemaps.write('./'))
      .pipe(gulp.dest(config.paths.distribution))
      .pipe(plugins.server.reload({ stream: true }));

  };

  return {
    deps: dependencies,
    fn: task
  };

};
