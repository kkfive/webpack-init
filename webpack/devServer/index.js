/**
 * @description: webpack server配置
 */

const proxy = require('./proxy');

const port = 3000;
const devServer = {
  // 端口号
  port,
  // 自动打开浏览器
  open: `http://127.0.0.1:${port}`,
  // HMR
  hot: true,
  host: '0.0.0.0',
  // 代理（解决跨域）
  proxy,
};

module.exports = devServer;
