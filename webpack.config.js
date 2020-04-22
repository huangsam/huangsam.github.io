'use strict';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Developer flag
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        include: /styles/,
        use: [
          MiniCssExtractPlugin.loader,
          {loader: 'css-loader', options: {url: false}},
        ],
      },
    ],
  },
  devtool: devMode ? 'eval' : false,
};
