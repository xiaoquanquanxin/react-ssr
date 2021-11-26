const {getDirFn, webpackResolve} = require('../constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = ({
    output: {
        filename: 'js/bundle.[contenthash:4].js',
        path: getDirFn('dist/client'),
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
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: getDirFn('dist')
        }),
        new HtmlWebpackPlugin({
            template: getDirFn('src/client/template.html'),
            filename: getDirFn('dist/client/index.html'),
            //  注意不能删除注释
            minify: {removeComments: false,}
        }),
    ],
});
