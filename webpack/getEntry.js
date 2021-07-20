/**
 * @description: 获取入口
 */
const fs = require('fs')
const { parse, resolve } = require('path')
/**
 * 传入路径获取入口文件配置
 * @author 小康
 * @date 2021-05-18
 * @param {String} path 入口js文件夹
 * @returns {Object} 入口配置对象
 */
const getEntry = (path) => {
  const files = fs.readdirSync(path)
  const entry = {}
  files.forEach((item) => {
    const { name, ext, base } = parse(resolve(__dirname, path, item))
    // 如果ext存在,则认为是入口js文件
    if (ext) {
      entry[name] = resolve(path, base)
    }
  })
  return entry
}

module.exports = getEntry
