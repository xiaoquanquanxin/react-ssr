const {resolve} = require('path');
const projectDir = resolve(__dirname, '../');
const getDirFn = (path) => resolve(projectDir, path);
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const webpackResolve = {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
        '@client': getDirFn('src/client'),
        '@server': getDirFn('src/server'),
        '@shared': getDirFn('src/shared'),
    },
};
const rules = [
    {
        test: /\.ts(x)?/,
        use: ['babel-loader'],
    },
    {
        test: /\.css/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader
            },
            'css-loader'
        ]
    }
]

module.exports = {
    projectDir,
    getDirFn,
    webpackResolve,
    rules,
};
