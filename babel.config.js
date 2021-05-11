var { clearConsole } = require('./config/index')

var plugins = ['@babel/plugin-transform-runtime', ['import', {
  libraryName: 'vant',
  libraryDirectory: 'es',
  style: true
}, 'vant']]
clearConsole && plugins.push('transform-remove-console')
module.exports = {
  presets: ['@babel/preset-env'],

  plugins: plugins
}
