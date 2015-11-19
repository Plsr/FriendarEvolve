'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  console.log('It worked!');
});

gulp.task('sass', function () {
  gulp.src('./frontend/public/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./frontend/public/css'));
});

gulp.task('watch', function () {
  gulp.watch('./frontend/public/scss/**/*.scss', ['sass']);
});
