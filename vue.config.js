const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.hetushu.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        secure: false
      },
    }
  },
})
