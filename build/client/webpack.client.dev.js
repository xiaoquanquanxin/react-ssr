const { merge } = require('webpack-merge');
const server = require('./webpack.client');
const { getDirFn } = require('../constants');
const webpack = require('webpack');
const mode = 'development';
module.exports = merge(server, {
    entry: {
        index: getDirFn('src/client/index.tsx'),
    },
    mode,
    module: {
        rules: [
            {
                test: /\.ts(x)$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'source-map-loader',
                    },
                ],
            },
        ],
    },
    //  设置为 false，自定义插件才生效
    devtool: false,
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map',
            columns: false,
            module: false,
        }),
    ],
});
