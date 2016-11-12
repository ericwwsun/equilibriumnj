module.exports = function(gulp, config, plugins) {
  'use strict';

  var s3 = require('gulp-s3-upload')(config.s3Options);

  var task = function() {

    return gulp.src(config.paths.distribution + '/**')
      .pipe(s3({
        Bucket: config.s3Options.bucket,  //  Required
        ACL:    'public-read' //  Needs to be user-defined
      }, {
        // S3 Construcor Options
        maxRetries: 5
      }));
  };

  return task;
};
