const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.base.js');

module.exports = Merge(CommonConfig, {
  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('dev')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin({
    //   beautify: false,
    //   mangle: {
    //     screw_ie8: true,
    //     keep_fnames: true
    //   },
    //   compress: {
    //     screw_ie8: true
    //   },
    //   comments: false
    // })
  ]
})