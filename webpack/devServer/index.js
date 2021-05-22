/**
 * @description: webpack server配置
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 23:16:28
 * @LastEditTime: 2021-05-22 23:16:29
 * @LastEditors: 小康
 */
const { resolve } = require('path')
const proxy = require('./proxy')
const devServer = {
  // 构建后的路径
  contentBase: resolve(__dirname, 'dist'),
  // 启动gzip压缩
  compress: true,
  // 端口号
  port: 3000,
  // 自动打开浏览器
  open: true,
  // HMR
  hot: true,
  // 代理（解决跨域）
  proxy
}

module.exports = devServer
