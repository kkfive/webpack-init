/**
 * @description: me文件入口
 */

console.log('foo')
// eslint-disable-next-line import/no-unresolved
require('@/assets/image/avatar.jpg')
// 开发测试环境显示console
if (process.env.GLOBAL_SHOWCONSOLE === 'true') {
  console.log('process.env', process.env)
  // eslint-disable-next-line global-require
  const Vconsole = require('../../../node_modules/vconsole/dist/vconsole.min')
  // eslint-disable-next-line no-new
  new Vconsole()
}
