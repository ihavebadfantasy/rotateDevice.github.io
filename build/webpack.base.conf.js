const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../docs'),
  assets: 'assets/'
}

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`,
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: './'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'vue-style-loader!css-loader!sass-loader'
          }
        }
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.src}/js/postcss.config.js`
              }
            }
          }, {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }, {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: `${PATHS.src}/js/postcss.config.js`
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    // Copy HtmlWebpackPlugin and change index.html for another html page
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/index.html`,
      filename: './index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
        from: `${PATHS.src}/img`,
        to: `${PATHS.assets}img`
      },
      {
        from: `${PATHS.src}/static`,
        to: ''
      },
    ])
  ],
}