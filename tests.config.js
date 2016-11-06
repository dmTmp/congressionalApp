var webpack = require('webpack')
var AppCachePlugin = require('appcache-webpack-plugin');

module.exports = {
    entry: {
      main:'./src/test.jsx'
    },
    output: {
        path: './tests',
        filename: '[name].min.js'
    },
    module: {
      loaders: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-flow-strip-types', 'transform-react-jsx', 'transform-object-rest-spread'],
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader",
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress:true, mangle:true})
    ],
}
