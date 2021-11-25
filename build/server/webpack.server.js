const webpackNodeExternals = require('webpack-node-externals');
const {getDirFn} = require('../constants');

module.exports = {
    //  告诉 webpack 打包环境为 nodeJs
    target: 'node',
    output: {
        filename: 'app.js',
        path: getDirFn('dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    externals: [webpackNodeExternals(
        {
            'react': 'React',
            'react-dom': 'ReactDOM',
//            'react-router': 'ReactRouter',
//            'react-router-dom': 'ReactRouterDOM',
        },
    )],
};
