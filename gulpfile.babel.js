'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var browserify = require('browserify');
var babelify = require('babelify');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

sass.compiler = require('node-sass');

gulp.task('sass-doc', function () {
    return gulp.src('./docs/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./docs/dist/css'))
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

gulp.task('js', function() {
    let bundler = browserify({
        entries: [
            './js/main.js'
        ]
    });
    return bundler
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`./dist/js`));
});


gulp.task('js:watch', function () {
    gulp.watch('./js/**/*.js', gulp.series('js','js-doc'));
});


gulp.task('js-doc', function() {
    let bundler = browserify({
        entries: [
            './docs/js/main.js'
        ]
    });
    return bundler
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        // .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`./docs/dist/js`));
});


gulp.task('js-doc:watch', function () {
    gulp.watch('./docs/js/**/*.js', gulp.series('js-doc'));
});