const paths = require('../paths')

const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const Dotenv = require('dotenv-webpack')

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-transform-runtime'
    ]
  }
}

module.exports = {
  entry: `${paths.src}/index.js`,
  output: {
    path: paths.build,
    filename: 'js/[name].bundle.js',
    publicPath: '/',
    clean: true,
    crossOriginLoading: 'anonymous',
    module: true,
    environment: {
      arrowFunction: true,
      bigIntLiteral: false,
      const: true,
      destructuring: true,
      dynamicImport: false,
      forOf: true
    }
  },
  resolve: {
    alias: {
      '@': `${paths.src}/modules`
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  },
  experiments: {
    topLevelAwait: true,
    outputModule: true
  },
  module: {
    rules: [
      // JavaScript, React

      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        use: babelLoader
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      // TypeScript
      {
        test: /.tsx?$/i,
        exclude: /node_modules/,
        use: [babelLoader, 'ts-loader']
      },
      // // CSS, SASS
      //   // CSS, SASS
      //   {
      //     test: /\.(c|sa|sc)ss$/i,
      //     use: [
      //       'style-loader',
      //       {
      //         loader: 'css-loader',
      //         options: { importLoaders: 1 }
      //       },
      //       'sass-loader'
      //     ]
      //   },

      
        // MD
        {
          test: /\.md$/i,
          use: ['html-loader', 'markdown-loader']
        },
      // MD
      {
        test: /\.md$/i,
        use: ['html-loader', 'markdown-loader']
      },
      // static files
      {
        test: /\.(jpe?g|png|gif|eot|ttf|woff2?)$/i,
        type: 'asset/inline'
      },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: 'svg-url-loader',
      //       options: {
      //         limit: 10000,
      //       },
      //     },
      //   ],
      // },


    ]
  },
  plugins: [
    new webpack.ProgressPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.public}/assets`
        }
      ]
    }),

    new HtmlWebpackPlugin({
      template: `${paths.public}/index.html`,
      filename: 'index.html',
      templateParameters: {
        analytics: 'Google Analytics ID',
        author: 'Vadim Savchuk',
        publishedDate: '2024-05-17',
        description:
          'Full April CRM',
        keywords:
          'app, nmbrsdntl, bitrix, react, fullstack',
        title: 'April',
        url: 'https://april-garant.ru'
      }
    }),

    new webpack.ProvidePlugin({
      React: 'react'
    }),

    new Dotenv({
      path: './config/.env'
    })
  ]
}
