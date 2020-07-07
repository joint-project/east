const path = require('path')

function pathHandler (pathUrl) {
  return path.join(__dirname,pathUrl)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@',pathHandler('./src'))
      .set('Api',pathHandler('./src/api'))
      .set('Assets',pathHandler('./src/assets'))
      .set('Comp',pathHandler('./src/components'))
      .set('Pages',pathHandler('./src/pages'))
      .set('Router',pathHandler('./src/router'))
      .set('Store',pathHandler('./src/store'))
      .set('Utils',pathHandler('./src/utils'))
  },
  devServer: {
    open: true,
    proxy: {
      // /index.php?r=class/category&type=1
      // 标识符: 配置项
      '/index.php': {
        target: 'http://www.qinqin.net',
        changeOrigin:true,
        // pathRewrite: {
        //   '^/qinqin': ''
        // } //路径重写
      }
    }
  }
}


