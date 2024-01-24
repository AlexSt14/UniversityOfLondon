//USED THIS TUTORIAL to create the module bundler:
// https://www.youtube.com/watch?v=h3LpsM42s5o&ab_channel=WittCode
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './js/app.js',
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html'
    })
  ],
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/reset-react']
          }
        } 
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};