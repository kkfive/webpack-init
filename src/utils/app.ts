/**
 * app内相关操作
 */

/**
 * app内跳转
 * @param {string} type 跳转类型
 * @param {string} value 跳转值
 * @param {string} title 标题
 * @returns {void}
 */
export function appJump(type: string, value: string, title: string): void {
  const u = navigator.userAgent
  const json = `{"goType":"${type}","goValue":"${value}","title":"${title}"}`

  if (u.indexOf('jessicasecret') > -1) {
    if (u.toLowerCase().indexOf('iphone') > -1) {
      window.webkit.messageHandlers.jumpToAppByType.postMessage(json)
    } else if (u.toLowerCase().indexOf('android') > -1) {
      window.android.jumpToAppByType(json)
    }
  }
}
export function test(str: any) {
  return str
}
