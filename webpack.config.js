const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './src/main.js'
    ],
    output: {
        path: DIST_DIR,
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.jsx?$/,
            include: SRC_DIR,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'es2015']
                }
            }]
        }]
    }
};
