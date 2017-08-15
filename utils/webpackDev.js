import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import webpackConfig from './webpackConfig'
import config from '../config'

// add hot reload support
webpackConfig.entry.home.unshift(`webpack-dev-server/client?http://localhost:${webpackConfig.devServer.port}`)
webpackConfig.entry.admin.unshift(`webpack-dev-server/client?http://localhost:${webpackConfig.devServer.port}`)
// add source map support
webpackConfig.devtool = 'inline-source-map'

const options = {
  proxy: {
    '/api/*': config.backend_url
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  historyApiFallback: {
    rewrites: [
      {from: /^\/$/, to: '/home.html'},
      {from: /^\/admin$/, to: '/admin.html'}
    ]
  }
}

const server = new WebpackDevServer(webpack(webpackConfig), options)
server.listen(webpackConfig.devServer.port, 'localhost', (err) => {
  if (err) throw err
})
