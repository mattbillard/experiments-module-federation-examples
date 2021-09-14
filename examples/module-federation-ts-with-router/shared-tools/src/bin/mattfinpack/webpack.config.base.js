const _ = require('lodash');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = (appDir, mode = 'development', appWebpackConfig = {}, moduleFederationPluginConfig = undefined) => {
  const defaultConfig = {
    devServer: {
      // devMiddleware: {
      //   writeToDisk: true,
      // },
      // port,
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
          exclude: /node_modules/,
        },
      ],
    },
    output: {
      libraryTarget: 'umd',
    //   filename: '[name].js',
    //   // filename: 'index.js',
    //   // publicPath,
    },
    plugins: [
      // See below
    ],
    resolve: {
      // alias: {
      //   'react': path.resolve(appDir, './node_modules/react'),
      // },
      extensions: ['.ts', '.tsx', '.js'],
    },
  };

  // Merge configs
  const mergedConfig = _.merge({}, defaultConfig, appWebpackConfig);

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
