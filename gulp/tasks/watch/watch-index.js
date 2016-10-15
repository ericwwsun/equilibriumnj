module.exports = function(gulp, config, plugins) {

  'use strict';

  return function() {
    gulp.watch(config.paths.index, function(){
      plugins.runSequence('build:html');
    });
  };
};
