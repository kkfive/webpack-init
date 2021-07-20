const ENV = process.env.env_config
// 默认导出开发环境配置
const config = {
  BASE_URL: '/api'
}
switch (ENV) {
  // 开发模式
  case 'development':
    break
  // 测试模式
  case 'test':
    config.BASE_URL = 'http://api-test'
    break
  // 生产模式
  case 'production':
    config.BASE_URL = 'http://api-production'
    break
}
module.exports = config
