const {getDirFn} = require('../constants');

module.exports = {
    entry: {

    },
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
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        // 'react-router-dom': 'ReactRouterDOM',
    },
};
