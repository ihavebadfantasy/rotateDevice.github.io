// to build a demo in docs folder
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

const buildWebpackConfig = merge(baseWebpackConfig, {
  // BUILD config
  mode: 'production',
  plugins: [],
  output: {
    publicPath: './',
  }
})

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig)
})
