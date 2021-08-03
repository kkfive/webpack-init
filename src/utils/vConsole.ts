const showVconsole = () => {
  // 开发测试环境显示console
  if (process.env.GLOBAL_SHOWCONSOLE === 'true') {
    console.log('process.env', process.env)
    // eslint-disable-next-line global-require
    const Vconsole = require('../../node_modules/vconsole/dist/vconsole.min')
    // eslint-disable-next-line no-new
    new Vconsole()
  }
}

export default showVconsole
