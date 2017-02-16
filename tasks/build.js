'use strict;';

const gulp = require('gulp');
gulp.task('build', ['images:dist', 'scripts:dist', 'styles:dist']);
