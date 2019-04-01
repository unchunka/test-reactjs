var webpack = require('webpack');
var path = require('path');

var parentDir = path.join(__dirname, '../');

module.exports = {
    entry: [
        path.join(parentDir, 'index.js')
    ],
    module: {
        rules: [
            {
                test: /\.(jsx?|tsx?)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader',
                    options:{
                        presets: ['babel-preset-react']
                    }
                }
            },
            {
                test: /\.(s*)css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],

            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss','.ts','.tsx'],
    },
    output: {
        path: parentDir + 'dist',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true,
        port: 8008
    }
}
