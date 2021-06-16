/**
 * @description: loader配置入口
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:40:05
 * @LastEditTime: 2021-05-22 22:40:06
 * @LastEditors: 小康
 */

const HTMLLoader = require('./html')
const stylusLoader = require('./stylus')
const cssLoader = require('./css')
const javascriptLoader = require('./javascript')
const pugLoader = require('./pug')
const imageLoader = require('./image')
const fontLoader = require('./font')

module.exports = [
  HTMLLoader,
  stylusLoader,
  cssLoader,
  javascriptLoader,
  pugLoader,
  imageLoader,
  fontLoader
]
