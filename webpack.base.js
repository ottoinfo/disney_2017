const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.js'],
    style: ['./src/styles/app.scss'],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },

  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, 'app'),
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    alias: {
      '_api': `${__dirname}/src/api`,
      '_components': `${__dirname}/src/components`,
      '_containers': `${__dirname}/src/containers`,
      '_layouts': `${__dirname}/src/layouts`,
      '_redux': `${__dirname}/src/redux`,
      '_views': `${__dirname}/src/views`
    },
  },


  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ["es2015", "react", "stage-0"]
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]__[hash:base64:5]',
              includePaths: ['./src/styles', './node_modules'],
            }
          },
          { 
            loader: 'sass-loader',
            options: {
              includePaths: ['./src/styles', './node_modules'],
            }
          },
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'public/images/[name].[ext]'
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),

    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body',
      chunksSortMode: 'dependency'
    }),

    new CopyWebpackPlugin([
      {from: 'public'},
    ])
  ],

  devServer: {
    proxy: {
      '/api': 'http://localhost:3000'
    },
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    https: false,
    noInfo: true,
  },
}