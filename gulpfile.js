const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const webpackConfig = require('./webpack.config.js');

gulp.task('copy-static', () => {
    gulp.src('src/index.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('run-webpack', () => {
    return webpackStream(webpackConfig, webpack)
        .pipe(gulp.dest(`./dist`));
});

gulp.task('build', ['copy-static', 'run-webpack']);
