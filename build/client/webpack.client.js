const { getDirFn, webpackResolve } = require('../constants');
//const { merge } = require('webpack-merge');

module.exports =  ({
    output: {
        filename: 'assets/bundle.js',
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
    resolve: webpackResolve,
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'axios': 'axios',
        'redux': 'Redux',
        'react-redux': 'ReactRedux',
        // 'react-router-dom': 'ReactRouterDOM',
    },
});
