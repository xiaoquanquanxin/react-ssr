const {merge} = require('webpack-merge');
const server = require('./webpack.server');
//const {SetEnv} = require('../plugin/setEnv');
const {getDirFn} = require('../constants');
const entryApp = getDirFn('src/server/prod.app.tsx');
const mode = 'production';
module.exports = merge(server, {
    mode,
    entry: {
        app: entryApp,
    },
    plugins: [
        //new SetEnv(mode)
    ]
});
