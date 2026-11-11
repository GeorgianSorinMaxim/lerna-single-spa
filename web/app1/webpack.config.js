const path = require('path');

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
  'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
};

module.exports = {
  entry: { singleSpaEntry: './src/singleSpaEntry.js' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'release'),
    publicPath: '/app1/',
    library: { name: 'app1', type: 'umd' },
    clean: true
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: { rootMode: 'upward' } },
      { test: /\.(png|jpe?g|gif)$/, type: 'asset/resource' }
    ]
  },
  devtool: 'source-map',
  devServer: { historyApiFallback: true, headers: cors }
};
