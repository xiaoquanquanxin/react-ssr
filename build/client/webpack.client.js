const {getDirFn} = require('../constants');
module.exports = {
    output: {
        filename: 'assets/bundle.js',
        path: getDirFn('dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?/,
                exclude: /(node_modules|bower_components)/,
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
