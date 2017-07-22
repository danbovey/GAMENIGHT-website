var gulp = require('gulp');
var util = require('gulp-util');
var watch = require('gulp-watch');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var importCss = require('gulp-import-css');

var dev = false;

gulp.task('scss', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(importCss())
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('docs/css'))
        .pipe(notify("Compiled SCSS"));
});

gulp.task('default', function() {
    runSequence('scss');
});

gulp.task('dev', function() {
    dev = true;

    runSequence('scss');
    
    gulp.watch('src/scss/**/*.scss', ['scss']);
});
