/**
 * @description: 处理图片
 */

const image = {
  test: /\.(png|svg|jpe?g|gif)$/i,
  loader: 'url-loader',
  options: {
    esModule: false,
    limit: 1536,
    name: 'assets/image/[name]_[hash:8].[ext]'
  }
}

module.exports = image
