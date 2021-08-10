// 默认导出开发环境配置
const config = {
  // 默认输出目录
  output: 'dist',
  // webpack不参与打包的模块
  // 如果设置了不打包模块，需手动在html中引入
  externals: {
    jquery: 'window.$',
    loadsh: 'window._'
  },
  // webpack dev server反向代理配置
  proxy: {
    '/api': {
      target: 'https://v1.hitokoto.cn/',
      pathRewrite: { '^/api': '' },
      changeOrigin: true, // target是域名的话，需要这个参数，
      secure: true // 设置支持https协议的代理
    }
  }
}

module.exports = config
