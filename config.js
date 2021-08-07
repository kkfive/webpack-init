const { BASE_URL } = process.env
// 默认导出开发环境配置
const config = {
  BASE_URL,
  // webpack不参与打包的模块
  // 如果设置了不打包模块，需手动在html中引入
  externals: {
    jquery: 'window.$'
  }
}

module.exports = config
