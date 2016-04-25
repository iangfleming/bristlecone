'use strict';

var gulp = require('gulp');
var sketch = require('gulp-sketch');
var browserSync = require('browser-sync').create();

gulp.task('sketch', function(){
  return gulp.src('./src/*.sketch')
    .pipe(sketch({
      export: 'slices',
      formats: 'png'
    }))
    .pipe(gulp.dest('./images'));
});

gulp.task('browserSync', function(){
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('watch', function(){
  gulp.watch('./src/*.sketch', ['sketch']).on('change', browserSync.reload);
  gulp.watch('./app.coffee').on('change', browserSync.reload);
  gulp.watch('./modules/*.coffee').on('change', browserSync.reload);
});

gulp.task('serve', ['browserSync', 'watch']);
