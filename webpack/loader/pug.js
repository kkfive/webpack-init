/**
 * @description: 处理pug模板
 */
const pug = {
  test: /\.pug/,
  use: [
    {
      loader: 'pug-loader'
    }
  ]
}
module.exports = pug
