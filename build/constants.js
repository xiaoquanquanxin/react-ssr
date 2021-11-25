const { resolve } = require('path');
const projectDir = resolve(__dirname, '../');
const getDirFn = (path) => resolve(projectDir, path);

const webpackResolve = {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
        '@client': getDirFn('src/client'),
        '@server': getDirFn('src/server'),
        '@shared': getDirFn('src/shared'),
    },
};

module.exports = {
    projectDir,
    getDirFn,
    webpackResolve,
};
