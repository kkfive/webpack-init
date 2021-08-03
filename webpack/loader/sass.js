/**
 * @description: 处理sass、scss文件的loader
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
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
    'sass-loader'
  ]
}
module.exports = sass
