/**
 * @description: index页面入口文件
 */
import './index.scss'
import 'lib-flexible'
import $ from 'jquery'
// 导入better-scroll核心组件
import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
import ObserveDOM from '@better-scroll/observe-dom'

BScroll.use(ObserveDOM)
BScroll.use(Pullup)
let bodyScroll
let timer
let number = 0
const maxNumber = 10
async function getSaid(c) {
  const result = await $.get(process.env.BASE_URL, {
    c
  })
  return result.hitokoto
}
function render(text) {
  return `<div class="content-item">
            <div class="content-item-avatar">
              <img
                src="https://cdn.jsdelivr.net/npm/kang-static@latest/avatar.jpg"
              />
            </div>
            <div class="content-item-body">${text}</div>
          </div>`
}
$(() => {
  // 头部滑动
  const headerWrapper = document.querySelector('.header-wrapper')
  const headerScroll = new BScroll(headerWrapper, {
    scrollX: true,
    scrollY: false,
    probeType: 3 // listening scroll event
  })
  console.log(headerScroll)
  // 内容区滑动
  const wrapper = document.querySelector('.wrapper')

  bodyScroll = new BScroll(wrapper, {
    scrollY: true,
    probeType: 3, // listening scroll event
    tap: 'tap',
    // 上拉加载更多示例
    pullUpLoad: true,
    ObserveDOM: true,
    // true 使用css
    useTransition: false
  })
  function pullingUpHandler() {
    $('.pullup-txt').show()
    clearTimeout(timer)
    timer = setTimeout(async () => {
      number += 1
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
  bodyScroll.on('pullingUp', pullingUpHandler)
  bodyScroll.autoPullUpLoad()
})

console.log(1234)
