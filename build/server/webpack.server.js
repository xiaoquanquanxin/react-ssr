const webpackNodeExternals = require('webpack-node-externals');
const { getDirFn, webpackResolve } = require('../constants');
//const { merge } = require('webpack-merge');
module.exports = ({
    //  告诉 webpack 打包环境为 nodeJs
    target: 'node',
    output: {
        filename: 'app.js',
        path: getDirFn('dist/server'),
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
    externals: [webpackNodeExternals(
        {
            // 'react': 'React',
            // 'react-dom': 'ReactDOM',
            // 'react-router-dom': 'ReactRouterDOM',
        },
    )],
});
