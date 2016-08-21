const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

gulp.task('js', () => {
  gulp.src(['./js/app.js', './js/*.js'])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'))
});

gulp.task('css', () => {
  gulp.src('./styles/**/*.css')
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dest'))
});

gulp.watch(['./js/**/*.js'], ['js']);
