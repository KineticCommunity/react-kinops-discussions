/* eslint-disable */
var path = require('path');
var webpack = require('webpack');
var webpackEnvConfig =
  process.env.NODE_ENV === 'production'
    ? require('./webpack.production')
    : require('./webpack.development');

module.exports = {
  entry: webpackEnvConfig.entry,
  devtool: webpackEnvConfig.devTool,
  plugins: webpackEnvConfig.plugins,
  devServer: webpackEnvConfig.devServer,
  output: webpackEnvConfig.output,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        use: 'url-loader?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader',
      },
      {
        test: /\.svg/,
        use: 'raw-loader',
      },
      {
        test: /\.(jpg|png)/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
