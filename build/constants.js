const {resolve} = require('path');
const projectDir = resolve(__dirname, '../');
const getDirFn = (path) => resolve(projectDir, path);
module.exports = {
    projectDir,
    getDirFn,
}
