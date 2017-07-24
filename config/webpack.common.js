const webpack = require('webpack');
const helpers = require('./helpers');

const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');


const METADATA = {
    title: 'Micro UI project',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};


module.exports = function (options) {
    isProd = options.env === 'production';
    return {

        entry: {
            main: [
                `./src/app/module.main.ts`
            ],

        },

        resolve: {
            extensions: ['.ts', '.js', '.json'],

            modules: [helpers.root('src'), helpers.root('node_modules')],

        },

        module: {

            rules: [
                {
                    test: /\.ts$/,
                    loaders: ['awesome-typescript-loader', '@angularclass/hmr-loader', 'angular2-template-loader', 'angular-router-loader'],
                    exclude: [/\.(spec|e2e)\.ts$/]
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader'],
                    exclude: [helpers.root('src', 'styles')]
                },
                {
                    test: /\.scss$/,
                    use: ['to-string-loader', 'css-loader', 'sass-loader'],
                    exclude: [helpers.root('src', 'styles')]
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                },
                {
                    test: /\.(eot|woff2?|svg|ttf)([\?]?.*)$/,
                    use: 'file-loader'
                }

            ],

        },

        plugins: [
            new CheckerPlugin(),
            new CommonsChunkPlugin({
                name: 'polyfills',
                chunks: ['polyfills']
            }),
            new CopyWebpackPlugin([
                { from: 'src/assets', to: 'assets' }
            ],
                isProd ? { ignore: ['mock-data/**/*'] } : undefined
            ),
            new LoaderOptionsPlugin({}),
        ],
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }

    };
}
