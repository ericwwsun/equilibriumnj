module.exports = function (plugins) {

  'use strict';

  let pkg = require('../package');

  let config = {
    name: pkg.name,
    paths: {
      source: './app',
      distribution: './dist',
      index: './app/index.html',
      bower: './bower_components'
    }
  };

  config.libs = {
    scripts: [
      config.paths.bower + '/angular/angular.js',
      config.paths.bower + '/angular-route/angular-route.js'
    ],
    styles: []
  };

  config.allJs = [
    config.paths.source + '/main.js',
    config.paths.source + '/**/*.js'
  ];

  config.sass = [
    config.paths.source + '/styles/main.scss'
  ];

  config.images = config.paths.source + '/images/**/*';

  config.templates = [
    plugins.path.join(config.paths.source, '/**/*.html')
  ];

  // ************************
  // Plugin Options
  // ************************
  config.jshintOptions = plugins.jsonutil.readFileSync(__dirname + '/../.jshintrc');

  return config;
}