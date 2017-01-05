/* eslint-disable */

var path = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');
console.log(path.join(__dirname, 'dist'));
module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/',
    fileName: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader '
      }
    ]
  },

  resolve: {
    root: root
  }
};
