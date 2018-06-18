const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  watch: true,
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
  entry: ['./src/App.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body',
    }),
  ]
};