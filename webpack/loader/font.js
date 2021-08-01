/**
 * @description: 处理字体
 */
const font = {
  test: /\.(woff|woff2|eot|ttf|otf)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/font/[name]_[hash:8][ext]'
  }
}

module.exports = font
