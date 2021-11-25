const { merge } = require('webpack-merge');
const server = require('./webpack.server');
module.exports = merge(server, {
    mode: 'production',
});
