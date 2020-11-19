// 路径别名

const webpack = require("webpack");
module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? './' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'notes': '@/notes',
        'views': '@/views',
        "Computer": 'views/Computer'
      }
    },
  }
}
