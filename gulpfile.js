/* Global require */
"use strict";

var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');

gulp.task('default', function(){
  browserSync({
    files:  './',
    server: {
      baseDir: './template/'
    },
    notify: false
  });
});
