/**
 * @description: 获取入口
 */
const fs = require('fs')
const { parse, resolve } = require('path')
/**
 * 传入路径获取入口文件配置
 * @param {String} path 入口js文件夹
 * @param {boolean} extFlag 是否匹配后缀
 * @returns {Object} 入口配置对象
 */
const getEntry = (path) => {
  const files = fs.readdirSync(path)
  const entry = {}
  files.forEach((item) => {
    const { name, base, ext } = parse(resolve(__dirname, path, item))
    entry[name] = resolve(path, base, ext ? '' : name)
  })
  return entry
}
console.log(resolve(__dirname, '../src/views'))
console.log(getEntry(resolve(__dirname, '../src/views')))
module.exports = getEntry
