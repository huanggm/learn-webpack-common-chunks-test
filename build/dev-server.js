const opn = require('opn')
const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')

// default port where dev server listens for incoming traffic
const port = 3000
// automatically open browser, if not set will be false
const autoOpenBrowser = true

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
})

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {
    }
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})

const pageList = ['/views/pageA/pageA', '/views/pageB/pageB']
const rewriteList = pageList.map(page => {
    const regexp = new RegExp(page)
    return {
        from: regexp,
        to (context) {
            return page + '.html'
        }
    }
})
// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')(
    {
        rewrites: rewriteList
    }
))

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
app.use(express.static(__dirname + '/dist'))

const uri = 'http://localhost:' + port + '/views/pageA/pageA.html'

devMiddleware.waitUntilValid(function () {
    console.log('> 构建完成，已自动在浏览器打开页面，如未自动打开，请手工复制下面的链接，复制到浏览器里打开。')
    console.log('> Listening at ' + uri + '\n')
    if (autoOpenBrowser) {
        opn(uri)
    }
})

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('\n正在构建初始化中，构建完成后，将自动在浏览器打开页面。')
})
