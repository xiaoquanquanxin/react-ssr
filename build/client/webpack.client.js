const {getDirFn, webpackResolve, rules: _rules} = require('../constants');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {WebpackManifestPlugin} = require('webpack-manifest-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
// const CustomPluginManifest = require('../plugin/custom-plugin-manifest');
const {merge} = require('webpack-merge');
const rules = [..._rules];
rules.splice(1, 0,
    {
        test: /\.style.module.(css|less)$/,
        use: [
            {
                loader: 'style-loader'
            },
        ],
    }
)
console.log('客户端 rules：', rules);
module.exports = merge({
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
            cleanOnceBeforeBuildPatterns: getDirFn('dist')
        }),
        new HtmlWebpackPlugin({
            template: getDirFn('src/client/template.html'),
            filename: getDirFn('dist/client/index.html'),
            //  注意不能删除注释
            minify: {removeComments: false,}
        }),
        new MiniCssExtractPlugin(),
        //  官方 manifest
        new WebpackManifestPlugin({
            //  指定路径前缀，输出路径
            basePath: '',
            publicPath: '',
        }),
        //  自定义 manifest 插件
        // new CustomPluginManifest()
    ],
    optimization: {
        splitChunks: {chunks: "all"},
        runtimeChunk: {name: "runtime"},
    },
});
