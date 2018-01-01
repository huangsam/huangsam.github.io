const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin('static/css/[name].css');

module.exports = {
  entry: ['./app/main.js', './scss/main.scss'],
  output: {
    filename: 'static/js/bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader?sourceMap'
            },
            {
              loader: 'sass-loader'
            }
          ],
          fallback: 'style-loader'
        })
      }
    ]
  },
  plugins: [
    extractSass
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
}
