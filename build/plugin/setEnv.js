class SetEnv {
    mode

    constructor(mode) {
        this.mode = mode;
    }

    apply(compiler) {
        compiler.hooks.compilation.tap(
            'testPlugin',
            (compilation,callback) => {
                // console.log(this.mode);
                // console.log(compilation);
                // console.log('文件列表', Object.keys(compilation).join(','));
            }
        );
    }
}

module.exports = {
    SetEnv,
}
