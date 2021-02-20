const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    popup: './src/popup/index.js',
    background: './src/background.js',
    inject: './src/inject/inject.js',
  },
  // todo babel plugin set up here under module: {rules:}
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({ 
      template: 'src/popup/index.html',
      inject: false
     }),
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/manifest.json' },
        { from: './src/icons/icon16.png' },
        { from: './src/icons/icon19.png' },
        { from: './src/icons/icon48.png' },
        { from: './src/icons/icon128.png' },
      ],
    }),
  ],
  output: { filename: '[name].js', path: path.resolve(__dirname, 'dist') }, // chrome will look for files under dist/* folder
};
