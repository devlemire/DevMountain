var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
  html: './view/*.html',
  css: './styles/*.css',
  js: './script/**/*.js',

  htmlDest: './dist/html',
  cssDest: './dist/css',
  jsDest: './dist/js'
};

gulp.task('html', function() {
  return gulp.src(paths.html)
  .pipe(concat('html.html'))
  .pipe(gulp.dest(paths.htmlDest));
});

gulp.task('css', function() {
  return gulp.src(paths.css)
  .pipe(concat('css.css'))
  .pipe(gulp.dest(paths.cssDest));
});

gulp.task('js', function() {
  return gulp.src(paths.js)
  .pipe(concat('js.js'))
  .pipe(gulp.dest(paths.jsDest));
});

gulp.task('watch', function()  {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['watch', 'html', 'css', 'js']);
