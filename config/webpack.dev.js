const helpers = require('./helpers');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js'); // the settings that are common to prod and dev


const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const path = require('path');
const fs = require('fs');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

const METADATA = webpackMerge(commonConfig({
  env: ENV
}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV
});

module.exports = function (options) {
  return webpackMerge(commonConfig({
    env: ENV
  }), {
    devtool: 'cheap-module-source-map',
    output: {
      path: helpers.root('dist'),
      filename: 'module.js',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      devtoolModuleFilenameTemplate: '[resource-path]'
    },

    module: {

      rules: [{
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

    devServer: {
      host: '0.0.0.0',
      port: 4200,
      contentBase: './node_modules/@celine/frontdoor/dist',
      historyApiFallback: {
        index: 'index.html'
      },
      setup: function (app) {
        // menu.json
        // For example, to define custom handlers for some paths:
        app.get('/serve/menu', function (req, res) {
          fs.readFile('menu.json', 'utf8', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
            console.log('from here Served /serve/menu');
          });
        });

        // For example, to define custom handlers for some paths:
        app.get('/.env', function (req, res) {
          fs.readFile('.env', 'utf8', (err, data) => {
            if (err) throw err;
            // Convert key=value into json
            var json = data.split('\n').reduce(function (o, pair) {
              pair = pair.split('=');
              return o[pair[0].trim()] = pair[1].trim(), o;
            }, {});

            res.json(json);
            console.log('Served /.env', json);
          });
        });
      },
      proxy: {
        "/serve/menu": {
          target: "http://localhost:8080",
          secure: false,
          changeOrigin: true,
          logLevel: "debug"
        }
      }
    }
  });
}