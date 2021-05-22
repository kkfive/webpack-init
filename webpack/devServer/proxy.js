/**
 * @description:
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 23:20:56
 * @LastEditTime: 2021-05-22 23:20:56
 * @LastEditors: 小康
 */
const proxy = {
  '/api': {
    target: 'https://api.xiaokang.me',
    pathRewrite: { '^/api': '' },
    changeOrigin: true, // target是域名的话，需要这个参数，
    secure: true // 设置支持https协议的代理
  }
}

module.exports = proxy
