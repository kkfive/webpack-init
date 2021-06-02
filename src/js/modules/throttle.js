/**
 * @description: 节流
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-23 15:19:17
 * @LastEditTime: 2021-05-23 15:19:18
 * @LastEditors: 小康
 */
function throttle(fn, delay) {
  var timer = null
  return function () {
    console.log(fn)
    var context = this,
      args = arguments
    // current = new Date()
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

export { throttle }
