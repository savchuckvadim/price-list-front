const paths = require('../paths')

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./common')
const Dotenv = require('dotenv-webpack');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');
const glob = require('glob');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    compress: true,
    static: paths.build,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 5000,

  },
  module: {
    rules: [

      // CSS Modules
      {
        test: /\.module\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          },
          'sass-loader'
        ]
      },
      // Global CSS
      {
        test: /\.(c|sa|sc)ss$/i,
        exclude: /\.module\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },
  plugins: [

    new Dotenv({
      path: './.env.development',
    }),
    new webpack.HotModuleReplacementPlugin(),
   

  ]
})
