module.exports = function(gulp, config, plugins) {
  'use strict';

  var task = function() {
    return plugins.del([ config.paths.distribution + '**/*']);
  };

  return task;
};
