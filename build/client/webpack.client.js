const { getDirFn, webpackResolve } = require('../constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = ({
    output: {
        filename: 'js/bundle.[contenthash:4].js',
        path: getDirFn('dist/assets'),
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: webpackResolve,
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'axios': 'axios',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        // 'react-router-dom': 'ReactRouterDOM',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: getDirFn('src/client/template.html'),
            filename: getDirFn('dist/assets/index.html'),
        }),
    ],
});
