/**
 * @description: 处理字体
 * @author: 小康
 * @url: https://xiaokang.me
 * @Date: 2021-05-22 22:49:12
 * @LastEditTime: 2021-06-22 22:49:12
 * @LastEditors: 小康
 */
const dev = {
  esModule: false,
  name: 'assets/font/[name]_[hash:8].[ext]'
}
const pro = {
  esModule: false,
  name: '[name]_[hash:8].[ext]',
  outputPath: '/assets/font/',
  publicPath: '../font/'
}
const font = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  loader: 'file-loader',
  options: process.env.NODE_ENV === 'production' ? pro : dev
}

module.exports = font
