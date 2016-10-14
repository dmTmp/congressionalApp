var webpack = require('webpack')
var AppCachePlugin = require('appcache-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {reactRender:'./src/render.jsx'},
    output: {
        path: './www',
        filename: '[name].min.js',
        sourceMapFilename: 'sourcemap.js'
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
        new webpack.optimize.CommonsChunkPlugin({name:'lib'}),
        new AppCachePlugin({
            cache: ['index.html', /\.jsx$/],
            //network: null,  // No network access allowed!
            //fallback: ['failwhale.jpg'],
            //settings: ['prefer-online'],
            //exclude: ['file.txt', /.*\.js$/],  // Exclude file.txt and all .js files
            //output: 'my-manifest.appcache'
        })
    ],
}
