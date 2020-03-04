'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('sass-doc', function () {
    return gulp.src('./docs/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass-doc:watch', function () {
    gulp.watch('./docs/sass/**/*.scss', gulp.series('sass-doc'));
});

gulp.task('sass', function () {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass','sass-doc'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
    gulp.watch("docs/*.html").on('change', browserSync.reload);
});