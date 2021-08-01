/**
 * @description: me文件入口
 */

const config = require('../../webpack/config')

console.log('foo')

// 开发测试环境显示console
if (process.env.GLOBAL_SHOWCONSOLE === 'true') {
  console.log('process.env', process.env)
  let Vconsole = require('../../node_modules/vconsole/dist/vconsole.min')
  new Vconsole()
}
