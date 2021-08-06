/**
 * @description: me文件入口
 */

import showVconsole from '@/utils/vConsole'
import 'lib-flexible'
import simpleTemplate from '@/components/simple.pug'

import introduceTemplate from '@/components/introduce.ejs'
import $ from '@/utils/jquery'

showVconsole()

console.log('foo')

async function hei<T>(params: T): Promise<any> {
  console.log(params)
  return Promise.resolve('你好')
}
$('.button').on('click', () => {
  const tips = $.alert('你好', 20000, () => {
    console.log('弹框弹出成功!')
  })
  setTimeout(() => {
    console.log(1)
    tips.destroy()
  }, 1000)
})
hei('哈哈').then((res) => {
  console.log(res)
  const container = document.querySelector('.container')

  if (container) {
    container.innerHTML =
      simpleTemplate({ title: 1234 }) +
      introduceTemplate({ name: '百度', url: 'https://baidu.com' })
  }
})
