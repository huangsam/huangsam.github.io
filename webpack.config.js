const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  entry: './app/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false, sourceMap: devMode } },
          { loader: 'sass-loader', options: { sourceMap: devMode } }
        ],
      },
    ]
  },
  devtool: devMode ? 'source-map' : false,
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    })
  ],
  mode : devMode ? 'development' : 'production',
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
