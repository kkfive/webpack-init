/**
 * @description: index页面入口文件
 */
import '../style/index/index.styl'
import 'lib-flexible'
import * as $ from 'jquery'
// 导入better-scroll核心组件
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
BScroll.use(Pullup)

let bodyScroll: BScroll
let timer: number

let number = 0
const maxNumber = 10

$(function () {
  // 头部滑动
  let headerWrapper = document.querySelector('.header-wrapper')
  let headerScroll = new BScroll(headerWrapper as HTMLElement, {
    scrollX: true,
    scrollY: false,
    probeType: 3 // listening scroll event
  })
  // 内容区滑动
  let wrapper = document.querySelector('.wrapper')
  bodyScroll = new BScroll(wrapper as HTMLElement, {
    scrollY: true,
    probeType: 3, // listening scroll event
    tap: 'tap',
    // 上拉加载更多示例
    pullUpLoad: true,
    ObserveDOM: true,
    // true 使用css
    useTransition: false
  })

  bodyScroll.on('pullingUp', pullingUpHandler)
  bodyScroll.autoPullUpLoad()
})
function pullingUpHandler() {
  $('.pullup-txt').show()
  clearTimeout(timer)
  timer = window.setTimeout(async () => {
    number++
    if (number >= maxNumber) {
      // 假设没有数据了
      $('.pullup-txt').text('没有数据了！')
      bodyScroll.refresh()
      bodyScroll.closePullUp()
    } else {
      const result = await getSaid()
      $('.pullup-txt').before(render(result))
      bodyScroll.refresh()
      bodyScroll.finishPullUp()
      $('.pullup-txt').hide()
    }
  }, 1000)
}
async function getSaid(c?: string) {
  const result = await $.get('https://v1.hitokoto.cn/', {
    c
  })
  return result.hitokoto
}
function render(text: string) {
  return `<div class="content-item">
            <div class="content-item-avatar">
              <img src="https://cdn.jsdelivr.net/npm/kang-static@latest/avatar.jpg" />
            </div>
            <div class="content-item-body">${text}</div>
          </div>`
}
