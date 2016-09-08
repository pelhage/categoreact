var path = require('path');
var webpack = require('webpack')
var APP_DIR = path.resolve(__dirname, 'demo/src');
var SRC_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'demo');


module.exports = {
  entry: {
    app: ['./demo/src/index.js'],
  },
  output: {
    path: BUILD_DIR,
    publicPath: "/",
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: [APP_DIR, SRC_DIR],
        loader: 'babel'
      }
    ]
  }
}
