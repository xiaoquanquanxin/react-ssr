const {merge} = require('webpack-merge');
const server = require('./webpack.client');
const {getDirFn} = require('../constants');
const mode = 'production';
module.exports = merge(server, {
    entry: {
        index: getDirFn('src/client/index.tsx'),
    },
    mode,
});
