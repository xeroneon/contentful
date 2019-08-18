const webpack = require('webpack');
const merge = require('webpack-merge');

const helpers = require('./helpers');
const commonConfig = require('./webpack.common');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',

  output: {
    filename: 'js/[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  // optimization: {
  //   minimizer: [new TerserPlugin({
  //     cache: true,
  //     parallel: true,
  //     sourceMap: true,
  //     terserOptions: {
  //       ecma: 6,
  //       compress: false,
  //       mangle: true
  //     }
  //   })]
    // [
    //   // we specify a custom UglifyJsPlugin here to get source maps in production
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     uglifyOptions: {
    //       compress: false,
    //       ecma: 6,
    //       mangle: true
    //     },
    //     sourceMap: true
    //   })
    // ]
  // }
});
