/**
 * @description: 反向代理配置
 */
const proxy = {
  '/api': {
    target: 'https://api.xiaokang.me',
    pathRewrite: { '^/api': '' },
    changeOrigin: true, // target是域名的话，需要这个参数，
    secure: true, // 设置支持https协议的代理
  },
};

module.exports = proxy;
