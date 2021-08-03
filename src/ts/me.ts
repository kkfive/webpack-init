/**
 * @description: me文件入口
 */

// eslint-disable-next-line import/no-unresolved
import 'lib-flexible'

console.log('foo')

async function hei<T>(params: T): Promise<any> {
  console.log(params)
  return Promise.resolve('你好')
}

hei('哈哈').then((res) => {
  console.log(res)
})
// 开发测试环境显示console
if (process.env.GLOBAL_SHOWCONSOLE === 'true') {
  console.log('process.env', process.env)
  // eslint-disable-next-line global-require
  const Vconsole = require('../../node_modules/vconsole/dist/vconsole.min')
  // eslint-disable-next-line no-new
  new Vconsole()
}
