const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Developer flag
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: devMode ? 'development' : 'production',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
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
          { loader: 'css-loader', options: { url: false, sourceMap: devMode } },
        ],
      },
    ],
  },
  devtool: devMode ? 'source-map' : false,
};
