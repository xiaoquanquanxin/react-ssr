const {getDirFn, webpackResolve, rules} = require('../constants');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackNodeExternals = require('webpack-node-externals');
//const { merge } = require('webpack-merge');
module.exports = ({
    //  告诉 webpack 打包环境为 nodeJs
    target: 'node',
    output: {
        filename: 'app.js',
        path: getDirFn('dist/server'),
    },
    module: {
        rules,
    },
    resolve: webpackResolve,
    externals: [webpackNodeExternals()],
    plugins: [
        new MiniCssExtractPlugin(),
    ]
});
