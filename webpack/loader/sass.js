/**
 * @description: 处理sass、scss文件的loader
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
const { resolve } = require('path')
const getEntry = require('../getEntry')
const getResourcesPath = (path) => {
  const list = getEntry(path)
  return Object.values(list)
}

const sass = {
  test: /\.scss|\.sass$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: '../../'
      }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 3
      }
    },
    {
      loader: 'px2rem-loader',
      options: px2remLoaderOptions
    },
    'postcss-loader',
    'sass-loader',
    {
      loader: 'sass-resources-loader',
      options: {
        resources: [
          ...getResourcesPath(resolve(__dirname, '../../src/style/variable')),
          ...getResourcesPath(resolve(__dirname, '../../src/style/mixin')),
          ...getResourcesPath(resolve(__dirname, '../../src/style/function'))
        ]
      }
    }
  ]
}
module.exports = sass
