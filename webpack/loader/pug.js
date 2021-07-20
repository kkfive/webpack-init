/**
 * @description: 处理pug模板
 */
const pug = {
  test: /\.pug/,
  use: [
    'raw-loader',
    {
      loader: 'pug-html-loader',
      options: {
        // options to pass to the compiler same as: https://pugjs.org/api/reference.html
        data: {} // set of data to pass to the pug render.
      }
    }
  ]
}
module.exports = pug
