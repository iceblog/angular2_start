var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports ={
    entry: './src/main.ts',
    output: {
        path: './dist',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loaders: ['ts', 'angular2-template-loader']},
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.css$/,
                loader:'style!css'
                // loader: ExtractTextPlugin.extract('style', 'css')
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/images/[name].[hash].[ext]'
            }
            
        ]
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.html', '.css']
    },
    plugins:[
        // new ExtractTextPlugin("b.css"),
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        // new CopyWebpackPlugin([{from:'./src/assets',to:'assets'}])
    ]
}