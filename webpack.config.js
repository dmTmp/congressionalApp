//https://gist.github.com/learncodeacademy/25092d8f1daf5e4a6fd3
//var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src/',
  devtool: "inline-sourcemap",
  entry: "./index.jsx",
  target: 'web',
  output: {
    path: __dirname + "/www",
    filename: "index.min.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.es6$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          plugins: ["transform-flow-strip-types", "transform-react-jsx"],
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
};
