var webpack = require('webpack')

module.exports = {
    devtool: 'eval-source-map',
    entry: {index:'./src/index.jsx'},
    output: {
        path: './www',
        filename: '[name].min.js'
    },
    module: {
        loaders: [
            {
                test: [/\.jsx$/],
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: ['transform-flow-strip-types', 'transform-react-jsx'],
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({compress:true, mangle:true}),
        new webpack.optimize.CommonsChunkPlugin({name:'lib'})
    ],
}
