/**
 * 本地预览
 */

const path = require('path');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.base.js');

module.exports = merge(webpackBaseConfig, {
  // 入口
  entry: {
    main: './example/index',
    vendors: ['vue'],
  },
  // 输出
  output: {
    path: path.join(__dirname, '../example/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },
  resolve: {
    alias: {
      draggableTree: '../src/index',
      vue: 'vue/dist/vue.js',
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devtool: '#eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: 'index.html',
      template: path.join(__dirname, '../example/index.html'),
    }),
  ],
});