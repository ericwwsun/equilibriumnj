module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function(callback) {

    plugins.runSequence(['build:styles', 'build:js', 'build:templates', 'build:images', 'build:libs'], 'build:html', callback);

  };

  return task;

};
