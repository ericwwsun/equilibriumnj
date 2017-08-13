'use strict';

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

plugins.del = require('del');
plugins.path = require('path');
plugins.jsonutil = require('jsonutil');
plugins.es = require('event-stream');
plugins.runSequence = require('run-sequence');
plugins.pngquant = require('imagemin-pngquant');
plugins.server = require('browser-sync').create('app server');
plugins.historyApi = require('connect-history-api-fallback');

let config = require('./gulp/config')(plugins);

plugins.simpleTaskLoader({
  taskDirectory: 'gulp/tasks/',
  filenameDelimiter: '-',
  tasknameDelimiter: ':',
  plugins: plugins,
  config: config
}, gulp);

gulp.task('help', plugins.taskListing);

gulp.task('default',function(){
  plugins.runSequence('clean', 'build', 'copy', 'server', 'watch');
});
