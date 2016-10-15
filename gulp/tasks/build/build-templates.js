module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

    var templatesOptions = {
      module: config.name
    };

    return gulp.src(config.templates)
      .pipe(plugins.htmlmin())
      .pipe(plugins.angularTemplatecache(config.name + '.templates.js', templatesOptions))
      .pipe(gulp.dest(config.paths.distribution))
      .pipe(plugins.server.reload({ stream: true }));

  };

  return task;

};
