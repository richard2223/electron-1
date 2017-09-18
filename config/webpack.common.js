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
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
                './src/app/module.main.ts'
            ]
        },

        resolve: {
            extensions: ['.ts', '.js', '.css', '.scss', '.json'],
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
                    use: ['raw-loader'],
                },
                {
                    test: /\.scss$/,
                    use: ['raw-loader', 'sass-loader']

                },
                {
                    test: /bootstrap\/dist\/js\/umd\//,
                    use: 'imports-loader?jQuery=jquery'
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
                    test: /\.(ttf|eot|svg)(\?v=.+)?$/,
                    use: 'file-loader'
                },
                {
                    test: /\.woff(2)?(\?v=.+)?$/,
                    use: 'url-loader?limit=10000&mimetype=application/font-woff'
                },


            ],

        },

        plugins: [
            new ExtractTextPlugin("styles.css"),
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
            new webpack.DllReferencePlugin({
                context: '.',
                manifest: require(helpers.root('./node_modules/@celine/frontdoor/dist', 'polyfills-manifest.json'))
            }),
            new webpack.DllReferencePlugin({
                context: '.',
                manifest: require(helpers.root('./node_modules/@celine/frontdoor/dist', 'vendor_angular-manifest.json'))
            }),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery",
                Tether: "tether",
                "window.Tether": "tether",
                Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
                Button: "exports-loader?Button!bootstrap/js/dist/button",
                Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
                Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
                Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
                Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
                Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
                Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
                Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
                Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
                Util: "exports-loader?Util!bootstrap/js/dist/util",
            })
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
