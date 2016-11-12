module.exports = function (gulp, config, plugins) {

  'use strict';

  var task = function() {

   var options = {
      logLevel: 'debug',
      server: {
        baseDir: config.paths.distribution,
        index: 'index.html'
      },
      middleware: [
        plugins.historyApi({index: '/index.html'})
      ],
      open: 'local',
      notify: false,
      port: 3000
    };

    plugins.server.init(options);
  };

  return {
    fn: task
  };

};
