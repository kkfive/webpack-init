/**
 * @description: me文件入口
 */
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
  let Vconsole = require('../../node_modules/vconsole/dist/vconsole.min')
  new Vconsole()
}
