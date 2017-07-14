var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
var helpers = require('./helpers');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: [
            './config/polyfills.ts',
            './src/main.ts'
        ],
    },

    output: {
        path: helpers.root('dist'),
        // publicPath: '/dist/',
        // publicPath: 'http://localhost:8080/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },

    resolve: {
        // resolve module file requests by looking for explicit extensions
        // or look for matching files with .js or .ts extensions
        extensions: ["*", ".ts", ".js"],
        modules: ["./node_modules"]
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            // handle component-scoped styles specified with styleUrls
            {
                test: /\.css$/,
                include: helpers.root('src'),
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
            },
            // {
            //     test: /\.s?css/,
            //     include: helpers.root('src'),
            //     loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] })
            // },
            // {
            //     test: /\.scss$/, 
            //     loaders: ['raw-loader', 'sass-loader'] 
            // },
            // {
            //     test: /\.s?css/,
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: ['css-loader', 'sass-loader']
            //     })
            // },
            {
                test: /\.json$/,
                loader: "json-loader"
            },
            {
                test: /\.(eot|svg)$/,
                loader: "file-loader?name=[name].[hash:20].[ext]"
            },
            {
                test: /\.(jpg|png|gif|otf|ttf|woff|woff2|cur|ani)$/,
                loader: "url-loader?name=[name].[hash:20].[ext]&limit=10000"
            },
        ]
    },

    plugins: [
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(helpers.root('dist', 'vendor_keycloak-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(helpers.root('dist', 'polyfills-manifest.json'))
        }),
        new webpack.DllReferencePlugin({
            context: '.',
            manifest: require(helpers.root('dist', 'vendor_angular-manifest.json'))
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            title: 'Loom',
            hash: true,
            xhtml: true
        }),
        new AddAssetHtmlPlugin([
            { filepath: 'dist/vendor_keycloak.dll.js', includeSourcemap: false },
            { filepath: 'dist/polyfills.dll.js', includeSourcemap: false },
            { filepath: 'dist/vendor_angular.dll.js', includeSourcemap: false },
        ]),
        new ExtractTextPlugin('styles.css'), //Extract to styles.css file
        new webpack.NamedModulesPlugin({}),
        new CopyWebpackPlugin([
            { from: 'src/assets', to: 'assets' },
        ])
    ],

    devServer: {
        host: '0.0.0.0',
        port: 4200,
        historyApiFallback: true,
        proxy: {
            "/serve/menu": {
                target: "http://localhost:8080",
                secure: false,
                changeOrigin: true,
                logLevel: "debug"
            }
        }
    }
};
