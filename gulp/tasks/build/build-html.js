module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

    var destination = config.paths.distribution;
    var ignorePath = 'dist';

    var injectedVendorStyles = {
      files: gulp.src(plugins.path.join(destination, 'libs.min.css'), { read: false }),
      options: {
        ignorePath: ignorePath,
        addRootSlash: false,
        name: 'bower'
      }
    };

    var injectedStyles = {
      files: gulp.src(plugins.path.join(destination, config.name + '.min.css'), { read: false }),
      options: {
        ignorePath: ignorePath,
        addRootSlash: false
      }
    };

    var injectedVendorScripts = {
      files: gulp.src(plugins.path.join(destination, 'libs.min.js'), { read: false }),
      options: {
        ignorePath: ignorePath,
        addRootSlash: false,
        name: 'bower',
        transform: function(path) {
          return '<script src="' + path + '"></script>';
        }
      }
    };

    var injectedScripts = {
      files: gulp.src(plugins.path.join(destination, config.name.toLowerCase() + '.min.js'), { read: false }),
      options: {
        ignorePath: ignorePath,
        addRootSlash: false,
        transform: function(path) {
          return '<script src="' + path + '"></script>';
        }
      }
    };

    var injectedPartials = {
      files: gulp.src(plugins.path.join(destination, config.name + '.templates.js'), { read: false }),
      options: {
        ignorePath: ignorePath,
        addRootSlash: false,
        starttag: '<!-- inject:partials -->'
      }
    };

    return gulp.src(config.paths.index)
      .pipe(plugins.inject(injectedStyles.files, injectedStyles.options))
      .pipe(plugins.inject(injectedScripts.files, injectedScripts.options))
      .pipe(plugins.inject(injectedVendorStyles.files, injectedVendorStyles.options))
      .pipe(plugins.inject(injectedVendorScripts.files, injectedVendorScripts.options))
      .pipe(plugins.inject(injectedPartials.files, injectedPartials.options))
      .pipe(plugins.htmlmin())
      .pipe(gulp.dest(destination));

  };

  return task;

};
