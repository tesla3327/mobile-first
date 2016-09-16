var gulp = require('gulp');
var sass = require('gulp-sass');

var sassPath = './src/**/*.scss';
var cssOutput = './dist';

gulp.task('sass', function() {
  return gulp.src( sassPath )
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest( cssOutput ));
});

gulp.task('sass:watch', function() {
  gulp.watch(sassPath, ['sass']);
});
