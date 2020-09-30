module.exports = {
    configureWebpack: (config) => {
      // 1) xserver で確認したい場合
      config.output.publicPath = 'https://y-t-zj4rb.github.io/yasudataiki/'
  
      // 2) ローカルの環境で確認したい場合
      // const path = require('path')
      // config.output.publicPath = path.resolve(__dirname, 'dist')
    }
  }