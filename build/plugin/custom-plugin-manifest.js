const { getCompilerHooks } = require('webpack-manifest-plugin');

class CustomPluginManifest {
    apply(compiler) {
        const { beforeEmit } = getCompilerHooks(compiler);

        beforeEmit.tap('BatmanPlugin', (manifest) => {
            console.log(manifest);
            return { ...manifest, name: 'hello' };
        });
    }
}

module.exports = CustomPluginManifest;
