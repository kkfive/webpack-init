/**
 * @description: 处理字体
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
