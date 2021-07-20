/**
 * @description: loader配置入口
 */

const HTMLLoader = require('./html')
const stylusLoader = require('./stylus')
const lessLoader = require('./less')
const cssLoader = require('./css')
const javascriptLoader = require('./javascript')
const pugLoader = require('./pug')
const imageLoader = require('./image')
const fontLoader = require('./font')

module.exports = [
  HTMLLoader,
  stylusLoader,
  lessLoader,
  cssLoader,
  javascriptLoader,
  pugLoader,
  imageLoader,
  fontLoader
]
