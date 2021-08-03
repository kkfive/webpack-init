/**
 * @description: HtmlPack配置
 */
const fs = require('fs')
const { parse, resolve } = require('path')
const getEntry = require('./getEntry')
/**
 * 传入路径获取入口文件配置
 * @param {String} path 入口HTML文件夹
 * @returns {Array} HtmlWebpack配置对象
 */
const htmlFilePath = getEntry(resolve(__dirname, '../src/views'))
const getHtmlWebpack = () => {
  const fileNameList = Object.keys(htmlFilePath)
  const configs = []
  fileNameList.forEach((fileName) => {
    const template = htmlFilePath[fileName] + '.html'
    const config = {
      filename: `${fileName}.html`,
      template,
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
      chunks: [htmlFilePath[fileName]]
    }
    configs.push(config)
  })
  return configs
}
module.exports = getHtmlWebpack
