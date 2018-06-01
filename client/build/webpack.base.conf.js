const path = require('path');
var config = require('../config')
var utils = require('./utils')
var webpack = require('webpack')
var projectRoot = path.resolve(__dirname, '../')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')

var env = process.env.NODE_ENV

var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

module.exports = {
  entry: {
      'pages/test': './src/pages/test/app.js',
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
      extensions: ['.js', '.vue', '.scss'],
      alias: {
          'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
          'src': path.resolve(__dirname, '../src'),
          'assets': path.resolve(__dirname, '../src/assets'),
          'components': path.resolve(__dirname, '../src/components'),
          'modules': path.resolve(__dirname, '../src/modules'),
          'config': path.resolve(__dirname, '../src/config'),
          'scss': path.resolve(__dirname, '../src/assets/scss'),
          'router': path.resolve(__dirname, '../src/router'),          
      },
  },
  module: {
        rules: [
      			{
                test: /\.js$/,
                use: 'babel-loader',
                include: projectRoot,
                exclude: /node_modules/
            }, 
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader', //url转base64
                    options: {
                      limit: 3072, // 3k
                      name: utils.assetsPath('assets/img/[name].[hash:7].[ext]')
                    }
                  }
                ]
            }, {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                        limit: 3072, // 3k
                        name: utils.assetsPath('assets/fonts/[name].[hash:7].[ext]')
                    }
                  }
                ]
            }
        ]
  },
  plugins: [
    	new VueLoaderPlugin(), //新版vue-loader需要
    	//new webpack.HotModuleReplacementPlugin(), //热加载模板webpack-hot-middleware
  ]
};