const { merge } = require('webpack-merge');
const server = require('./webpack.client');
module.exports = merge(server, {
    mode: 'development',
});
