const { getDirFn, webpackResolve, rules: _rules } = require('../constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const rules = [..._rules];
rules.splice(1, 0,
    {
        test: /\.style.module.(css|less)$/,
        use: [
            {
                loader: 'style-loader',
            },
        ],
    },
);
console.log(rules);
module.exports = merge({
    devtool: 'source-map',
    output: {
        filename: 'js/bundle.[contenthash:4].js',
        path: getDirFn('dist/client'),
    },
    module: {
        rules,
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
            cleanOnceBeforeBuildPatterns: getDirFn('dist'),
        }),
        new HtmlWebpackPlugin({
            template: getDirFn('src/client/template.html'),
            filename: getDirFn('dist/client/index.html'),
            //  注意不能删除注释
            minify: { removeComments: false },
        }),
        new MiniCssExtractPlugin(),
    ],
});
