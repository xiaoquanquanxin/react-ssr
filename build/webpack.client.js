const path = require('path');
module.exports = {
    //  mode: 'production',
    mode: 'development',
    entry: {
        index: path.resolve(__dirname, '../src/client/index.tsx'),
    },
    output: {
        filename: 'assets/bundle.js',
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
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'react-router': 'ReactRouter',
        'react-router-dom':'ReactRouterDOM',
    },
};