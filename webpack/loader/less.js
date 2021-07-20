/**
 * @description: 处理less文件的loader
 */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { px2remLoaderOptions } = require('../config')
const less = {
  test: /\.less$/,
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
    'less-loader'
  ]
}
module.exports = less
