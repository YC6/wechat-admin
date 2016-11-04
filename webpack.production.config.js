var webpack = require("webpack");
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(APP_PATH, 'templates');

module.exports = {

  entry: {
    app: path.resolve(APP_PATH, 'index.js'),
    mobile: path.resolve(APP_PATH, 'mobile.js'),
    vendors: ['jquery', 'reqwest']
  },

  output: {
    path: BUILD_PATH,
    filename: '[name].js'
  },

  module: {

    perLoaders: [
        {
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: "jshint-loader"
        }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        include: APP_PATH,
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"],
        include: APP_PATH
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url?limit=40000"
      }
    ]
  },

  plugins: [

    new webpack.optimize.UglifyJsPlugin({minimize: true}),

    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

    new HtmlwebpackPlugin({
      title: 'Hello World app',
      template: path.resolve(TEM_PATH, 'index.html'),
      filename: 'index.html',
      //chunks这个参数告诉插件要引用entry里面的哪几个入口
      chunks: ['app', 'vendors'],
      //要把script插入到标签里
      inject: 'body',
      hash: true
    }),
    new HtmlwebpackPlugin({
      title: 'Hello Mobile app',
      template: path.resolve(TEM_PATH, 'mobile.html'),
      filename: 'mobile.html',
      chunks: ['mobile', 'vendors'],
      inject: 'body',
      hash: true
    })
  ]
};