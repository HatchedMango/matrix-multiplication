const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('./webpack.config.js');

gulp.task('copy-static', () => {
    gulp.src('src/index.html')
    .pipe(gulp.dest('./dist'));
    gulp.src('src/style/*.css')
    .pipe(gulp.dest('./dist'));
});

gulp.task('run-webpack', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest(`./dist`));
});

gulp.task('watch', function () {
    gulp.watch('src/scripts/*.js', ['run-webpack']);
    gulp.watch('src/*.html', ['copy-static']);
    gulp.watch('src/style/*.css', ['copy-static']);
});

gulp.task('build', ['copy-static', 'run-webpack']);
