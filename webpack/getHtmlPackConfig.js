/**
 * @description: HtmlPack配置
 */
const fs = require('fs')
const { parse, resolve } = require('path')
const envMode = process.env.envMode
const getEntry = require('./getEntry')
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  prod: {
    css: [],
    js: [
      // https://cdn.bootcdn.net/
      // 'https://cdn.bootcdn.net/ajax/libs/vue/3.1.5/vue.runtime.global.prod.js',
      // 'https://cdn.bootcdn.net/ajax/libs/vue-router/4.0.10/vue-router.global.prod.min.js',
      // 'https://cdn.bootcdn.net/ajax/libs/vuex/4.0.2/vuex.global.prod.min.js',

      // https://www.staticfile.org/
      // 'https://cdn.staticfile.org/vue/3.1.5/vue.runtime.global.prod.js',
      // 'https://cdn.staticfile.org/vue-router/4.0.10/vue-router.global.prod.min.js',
      // 'https://cdn.staticfile.org/vuex/4.0.2/vuex.global.prod.min.js',

      // https://www.jsdelivr.net
      'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js'
    ]
  }
}
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
      chunks: [fileName],
      files: envMode === 'production' ? cdn.prod : cdn.dev
    }
    configs.push(config)
  })
  return configs
}
module.exports = getHtmlWebpack
