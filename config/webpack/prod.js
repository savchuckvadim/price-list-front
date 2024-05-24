const paths = require('../paths')
const {
  merge
} = require('webpack-merge')
const common = require('./common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const TerserPlugin = require('terser-webpack-plugin');

const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const glob = require('glob');


module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: {
      import: `${paths.src}/index.js`,
      dependOn: ['react', 'helpers']
    },
    react: ['react', 'react-dom', 'prop-types'],
    helpers: ['immer', 'nanoid']
  },
  devtool: false,
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: './'
  },
  module: {
    rules: [
      //   {
      //   test: /\.(c|sa|sc)ss$/i,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     {
      //       loader: 'css-loader',
      //       options: {
      //         importLoaders: 1
      //       }
      //     },
      //     'sass-loader'
      //   ]
      // }

      // CSS Modules
      {
        test: /\.module\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',

            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[local]',
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
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }

    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),
    new Dotenv({
      path: './.env.development',
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          plugins: [
            ['gifsicle', { interlaced: true }],
            ['jpegtran', { progressive: true }],
            ['optipng', { optimizationLevel: 5 }],
            ['svgo', {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            }],
          ],
        },
      },
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${paths.src}/**/*`, { nodir: true }),
      safelist: {
        standard: [
          /^(modal|fade|show|modal-title|modal-dialog|modal-content|modal-header|modal-body|modal-footer|modal-backdrop|modal-open|col|row|container|btn|alert|carousel|dropdown|nav|navbar|popover|tooltip|card|breadcrumb|form|input|badge|jumbotron|list-group|media|pagination|progress|table|tab|fade|show|close|fade|collapse)/
        ],
      }, // Укажите классы, которые не должны быть удалены

      // only: ['bundle', 'vendor'] // Имена чанков, для которых нужно применить очистку
    }),
    // new BundleAnalyzerPlugin()
  ],
  optimization: {
    minimize: true,
    runtimeChunk: 'single',

    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: true,
          keep_fnames: true,
          safari10: false,
        },
      }),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', {
                plugins: [
                  {
                    removeViewBox: false,
                  },
                ],
              }],
            ],
          },
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 20000, // 20 KB
      maxSize: 250000, // 250 KB
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    },

  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})