const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
    //  mode: 'production',
    mode: 'development',
    //  告诉 webpack 打包环境为 nodeJs
    target: 'node',
    entry: {
        app: path.resolve(__dirname, '../src/server/app.tsx'),
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, '../dist'),
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