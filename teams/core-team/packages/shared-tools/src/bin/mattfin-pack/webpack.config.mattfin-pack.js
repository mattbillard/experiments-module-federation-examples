const _ = require('lodash');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = (appDir, mode = 'development', webpackConfigs) => {
  // Defaults
  const moduleFederationPluginConfig = webpackConfigs.moduleFederationPluginConfig || undefined;
  const webpackConfigMixin = webpackConfigs.webpackConfigMixin || {};

  const defaultConfig = {
    devServer: {
      hot: false,
      liveReload: false,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
    },
    devtool: 'source-map',
    entry: './src/index',
    mode,
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          // exclude: /node_modules/, // NOTE: commenting this out allows us to import from a node_module's src
        },
      ],
    },
    output: {
      libraryTarget: 'umd',
      // filename: '[name].js',
    },
    plugins: [
      // See below
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  };

  // Merge configs
  const mergedConfig = _.merge({}, defaultConfig, webpackConfigMixin);

  // CopyPlugin
  if (fs.existsSync(path.join(appDir, 'public'))) {
    const copyPlugin = new CopyPlugin({
      patterns: [
        { from: 'public', to: '' },
      ],
    });
    mergedConfig.plugins.push(copyPlugin);
  }

  // HtmlWebpackPlugin
  if (fs.existsSync(path.join(appDir, 'src/index.html'))) {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
      template: './src/index.html',
    });
    mergedConfig.plugins.push(htmlWebpackPlugin);
  }

  // ModuleFederationPlugin
  if (moduleFederationPluginConfig) {
    const moduleFederationPlugin = new ModuleFederationPlugin(moduleFederationPluginConfig);
    mergedConfig.plugins.push(moduleFederationPlugin);
  }

  return mergedConfig;
};
