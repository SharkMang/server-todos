const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  target: 'node',
  // devtool: "inline-source-map",
  // externals: [nodeExternals()],
  entry: ['babel-polyfill','./src_TS/serverTS.ts'],
  module: {
    rules: [
      { test: /\.ts$/, exclude: /node_modules/, use: ['ts-loader'], },
      { test: /\.js$/, exclude: /node_modules/, use: [ "babel-loader" ] },
    ]
  },
  resolve: {
    extentions: ['.ts', '.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.ts',
  },

};