const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  mode: 'development',
  entry: {
    app: require.resolve('./index'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    fallback: {
      "fs": false
    }
  },
  module: {
    rules: [
      {
        test: /\.yaml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader', options:{ asJSON: true } }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: outputPath,
  }
};
