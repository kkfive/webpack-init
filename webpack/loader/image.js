/**
 * @description: 处理图片
 */

const image = {
  test: /\.(png|svg|jpe?g|gif)$/i,
  type: 'asset/resource',
  generator: {
    // [ext]前面自带"."
    filename: 'assets/image/[name]_[hash:8][ext]'
  }
}

module.exports = image
