/**
 * @description: me文件入口
 */

console.log('foo')

async function hei<T>(params: T): Promise<any> {
  console.log(params)
  return Promise.resolve('你好')
}

hei('哈哈').then((res) => {
  console.log(res)
})
