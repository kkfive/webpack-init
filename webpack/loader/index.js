/**
 * @description: loader配置入口
 */

const HTMLLoader = require('./html')
const stylusLoader = require('./stylus')
const cssLoader = require('./css')
const javascriptLoader = require('./javascript')
const typescriptLoader = require('./typescript')
const pugLoader = require('./pug')
const imageLoader = require('./image')
const fontLoader = require('./font')

module.exports = [
  HTMLLoader,
  stylusLoader,
  cssLoader,
  javascriptLoader,
  typescriptLoader,
  pugLoader,
  imageLoader,
  fontLoader
]
