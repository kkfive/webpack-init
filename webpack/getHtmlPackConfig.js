/**
 * @description: HtmlPack配置
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-18 22:55:35
 * @LastEditTime: 2021-05-18 22:55:35
 * @LastEditors: 小康
 */
const fs = require('fs')
const { parse, resolve } = require('path')
/**
 * 传入路径获取入口文件配置
 * @author 小康
 * @date 2021-05-18
 * @param {String} path 入口HTML文件夹
 * @returns {Array} HtmlWebpack配置对象
 */
const getHtmlWebpack = (path) => {
  const files = fs.readdirSync(path)
  const configs = []
  files.forEach((item) => {
    const { name, ext, base } = parse(resolve(__dirname, path, item))
    // 如果ext存在,则认为是模板文件
    if (ext) {
      const config = {
        filename: `${name}.html`,
        template: resolve(path, item),
        inject: true,
        minify: {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        },
        chunks: [name]
      }
      configs.push(config)
    }
  })
  return configs
}
module.exports = getHtmlWebpack
