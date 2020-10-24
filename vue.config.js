// 路径别名
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'content': 'components/content',
        'common': 'components/common',
        'assets': '@/assets',
        'network': '@/network',
        'notes':'@/notes',
        'views': '@/views',
        "Computer":'views/Computer'
      }
    },
  }
}
