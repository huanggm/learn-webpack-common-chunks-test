// webpack.config.js

const path = require('path')

const webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var entries = {
    pageA: "./src/views/pageA/pageA.js",
    pageB: "./src/views/pageB/pageB.js",
    pageC: "./src/views/pageC/pageC.js",
    pageD: "./src/views/pageD/pageD.js",
    pageE: "./src/views/pageE/pageE.js",
    pageF: "./src/views/pageF/pageF.js",
    pageG: "./src/views/pageG/pageG.js",
};

var chunks = Object.keys(entries);

var config = {
    entry: entries,
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash].js',
        chunkFilename: "js/[id].[chunkhash].js",
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js',
        '@': resolve('src'),
        'src': resolve('src'),
        'components': resolve('src/components')
      }
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        //   exclude: [resolve('node_modules'), resolve('dist')]
          exclude: /node_modules/,
          options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader' // <- 这是vue-loader的依赖，所以如果使用npm3，则不需要显式安装
            })
          }
        }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
        //   exclude: [resolve('node_modules'), resolve('dist')]
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: 'img/[name].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]'
          }
        },

      ]
    },
    plugins: [
        new ExtractTextPlugin({
          filename: 'css/[name].[contenthash].css',
          allChunks: true //测试异步加载的BUG
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            chunks: chunks,
            minChunks: 4
        }),
        new webpack.optimize.CommonsChunkPlugin({
          name: 'manifest'
        }),
        new HtmlWebpackPlugin({
            filename: './views/pageA/pageA.html',
            template: './src/views/pageA/pageA.html',
            chunks: ['manifest', 'vendor', 'pageA'],
            inject: true
        }),
        new HtmlWebpackPlugin({
            filename: './views/pageB/pageB.html',
            template: './src/views/pageB/pageB.html',
            chunks: ['manifest', 'vendor', 'pageB'],
            inject: true
        }),
    ]
};

if(process.env.npm_config_report) {
    config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config
