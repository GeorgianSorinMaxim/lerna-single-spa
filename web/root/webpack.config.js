const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { main: './src/portal.js' },
  output: {
    publicPath: '',
    filename: '[name].js',
    path: path.resolve(__dirname, 'release'),
    clean: true
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: { rootMode: 'upward' } }]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/index.html' },
        { from: 'src/style.css' },
        { from: require.resolve('systemjs/dist/system.min.js'), to: 'system.js' }
      ]
    })
  ],
  devtool: 'source-map',
  devServer: {
    static: './release',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    // Dev-only proxy. In production, configure the web server to do the same.
    proxy: [
      {
        context: ['/app1'],
        target: 'http://localhost:9001'
      }
    ]
  }
};
