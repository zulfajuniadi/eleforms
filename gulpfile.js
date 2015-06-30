var gulp    = require('gulp');
var watch   = require('gulp-watch');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var notify  = require("gulp-notify");
var plumber = require("gulp-plumber");

gulp.task("javascripts", function() {
  gulp.src('eleforms.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest("."))
    .pipe(notify('eleforms.js processed.'));
});

gulp.task('watch', function() {
  gulp.watch('eleforms.js', ['javascripts']);
});

gulp.task("default", ["watch"]);