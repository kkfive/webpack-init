/**
 * @description: loader配置入口
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:40:05
 * @LastEditTime: 2021-05-22 22:40:06
 * @LastEditors: 小康
 */

const stylusLoader = require('./stylus')
const lessLoader = require('./less')
const sassLoader = require('./sass')
const cssLoader = require('./css')
const javascriptLoader = require('./javascript')
const pugLoader = require('./pug')
const imageLoader = require('./image')
const fontLoader = require('./font')

module.exports = [
  stylusLoader,
  lessLoader,
  sassLoader,
  cssLoader,
  javascriptLoader,
  pugLoader,
  imageLoader,
  fontLoader
]
