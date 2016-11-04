var path = require("path");
var webpack = require("webpack");
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(APP_PATH, 'templates');

module.exports = {

  entry: {
    app: path.resolve(APP_PATH, "index.jsx")
  },

  output: {
    path: BUILD_PATH,
    filename: "bundle.js"
  },

  // devtool: 'eval-source-map',

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
    // proxy: {
    //   '/api/*': {
    //       target: 'http://localhost:5000',
    //       secure: false
    //   }
    // }
  },

  module: {

    perLoaders: [
        {
            test: /\.jsx?$/,
            include: APP_PATH,
            loader: 'jshint-loader'
        }
    ],

    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        include: APP_PATH
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

  jshint: {
    "esnext": true
  },

  resolve: {
      extensions: ["", ".js", ".jsx", ".css"]
  },

  plugins: [
    // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

    new HtmlwebpackPlugin({
      title: 'Hello react'
    })
  ]
};