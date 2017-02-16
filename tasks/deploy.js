'use strict';

const config  = require('../config');
const ghPages = require('gulp-gh-pages-cname');
const gulp    = require('gulp');
const moment  = require('moment');

gulp.task('deploy', () => {
  return gulp.src(config.distRoot + '/**/*')
    .pipe(ghPages({
      cname: 'filipelemos.com',
      message: `Site build ${moment().format('MMMM Do YYYY, h:mm')}`
  }));
});
