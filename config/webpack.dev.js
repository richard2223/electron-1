const helpers = require('./helpers');
const webpackMerge = require('webpack-merge'); 
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev


const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'cheap-module-source-map',
    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:8080/',
        filename: 'module.js',
        libraryTarget: 'umd',
        umdNamedDefine: true,
        devtoolModuleFilenameTemplate: '[resource-path]'
    },

    module: {

      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [helpers.root('src', 'styles')]
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: [helpers.root('src', 'styles')]
        },

      ]

    },

    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR,
        }
      }),

     
      new LoaderOptionsPlugin({
        debug: true,
        options: {

        }
      }),

    ],

    // devServer: {
    //   port: METADATA.port,
    //   host: METADATA.host,
    //   historyApiFallback: true,
    //   watchOptions: {
    //     // if you're using Docker you may need this
    //     // aggregateTimeout: 300,
    //     // poll: 1000,
    //     ignored: /node_modules/
    //   },
    //   setup: function(app) {
    //     // For example, to define custom handlers for some paths:
    //     // app.get('/some/path', function(req, res) {
    //     //   res.json({ custom: 'response' });
    //     // });
    //   }
    // },
    // node: {
    //   global: true,
    //   crypto: 'empty',
    //   process: true,
    //   module: false,
    //   clearImmediate: false,
    //   setImmediate: false
    // }

  });
}
