var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: [
        './config/polyfills.ts',
        './src/main.ts'
    ],

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'module.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        devtoolModuleFilenameTemplate: '[resource-path]'
    },

    resolve: {
        // resolve module file requests by looking for explicit extensions
        // or look for matching files with .js or .ts extensions
        extensions: ['*', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', '@angularclass/hmr-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // handle component-scoped styles specified with styleUrls
            {
                test: /\.css$/,
                include: helpers.root('module'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: []
};
