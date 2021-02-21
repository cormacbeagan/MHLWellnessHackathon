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
        { from: './src/icons/brain16.png' },
        { from: './src/icons/brain19.png' },
        { from: './src/icons/brain48.png' },
        { from: './src/icons/brain128.png' },
        { from: './src/icons/logo.svg' },
        { from: './src/icons/emoji_1.svg' },
        { from: './src/icons/emoji_2.svg' },
        { from: './src/icons/emoji_3.svg' },
        { from: './src/icons/emoji_4.svg' },
        { from: './src/icons/emoji_5.svg' },
      ],
    }),
  ],
  output: { 
    filename: '[name].js', 
    path: path.resolve(__dirname, 'dist'), // chrome will look for files under dist/* folder
    publicPath: '/',
  }
};
