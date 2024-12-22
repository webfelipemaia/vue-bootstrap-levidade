const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-bootstrap-levidade/' : '/',  
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        sassOptions: {
          silenceDeprecations: ['mixed-decls', 'color-functions', 'global-builtin', 'import'],
        },
      },
    },
  },
  configureWebpack: {
    output: {
      libraryExport: 'default',
      filename: 'levidade.[name].js',
      chunkFilename: 'levidade.[name].js' 
    }
  },
  chainWebpack: config => {
    config.entry('app').clear().add('./src/main.js');
    config.output.filename('levidade.js');
  }
};
