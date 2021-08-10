// eslint-disable-next-line func-names
;(function () {
  if (process.env.GLOBAL_SHOWCONSOLE === 'true') {
    console.log('process.env', process.env)
    // eslint-disable-next-line global-require
    const Vconsole = require('../../node_modules/vconsole/dist/vconsole.min')
    // eslint-disable-next-line no-new
    new Vconsole()
  }
})()
