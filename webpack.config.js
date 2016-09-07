var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: {
    app: APP_DIR + '/index.js'
  },
  output: {
    path: BUILD_DIR,
    filename: "categoreact.js",
    library:'CategoriedInput',
    libraryTarget: 'umd',
  },
  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-dom': {
        root: 'ReactDOM',
        commonjs2: 'react-dom',
        commonjs: 'react-dom',
        amd: 'react-dom'
      }
    }
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)(\?.*)?$/,
        include: [APP_DIR],
        loader: 'file',
        query: {
          name: '/media/[name].[ext]'
        }
      },
      {
        test: /style.scss/,
        include: APP_DIR + '/sass/',
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions'
        ]
      },

    ]
  }
};

module.exports = config;
