/**
 * @description: 用于一些常用且需要修改的配置
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 23:00:27
 * @LastEditTime: 2021-05-22 23:00:27
 * @LastEditors: 小康
 */

const config = {
  /**
   * px自动转换rem
   * 需要在js文件引入 lib-flexible/flexible.js
   */
  px2remLoaderOptions: {
    // 填写设计稿的十分之一 例如设计稿是375，那么填写37.5
    remUnit: 37.5,
    // rem单位保留的小数点
    remPrecision: 8
  },
  /**
   * babel-loader需要兼容的浏览器设置
   */
  babelLoaderOptions: {
    chrome: '60',
    firefox: '60',
    ie: '9',
    safari: '10',
    edge: '17'
  }
}

module.exports = config
