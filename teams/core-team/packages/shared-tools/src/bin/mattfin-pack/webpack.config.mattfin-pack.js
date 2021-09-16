const _ = require('lodash');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = (appDir, mode = 'development', webpackConfigs) => {
  // Defaults
  const moduleFederationPluginConfig = webpackConfigs.moduleFederationPluginConfig || undefined;
  const webpackConfigMixin = webpackConfigs.webpackConfigMixin || {};

  // prettier-ignore
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
        // Images, fonts, etc
        {
          test: /\.(svg|png|svg|jpg|jpeg|gif|woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },

        // Traditional/untyped CSS
        {
          test: /\.(css|scss)$/,
          exclude: /\.module\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
        },
        
        // Typed CSS
        {
          test: /\.(css|scss)$/,
          include: /\.module\.(css|scss)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'dts-css-modules-loader',                       // Create types for CSS 
              options: { namedExport: true },                         // Makes more legible .css.d.ts files 
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'pure',                                       // Prevents global CSS. Options: local|global|pure
                  exportLocalsConvention: 'camelCaseOnly',
                  localIdentName: "[name]__[local]__[hash:base64:5]", // Uglify CSS classes' names
                },
              }
            },
            'sass-loader'
          ],
        },

        // TypeScript
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
      new MiniCssExtractPlugin(),
      // See below
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
  };

  // Merge configs
  const mergedConfig = _.merge({}, defaultConfig, webpackConfigMixin);

  // CopyPlugin - if /public exists
  if (fs.existsSync(path.join(appDir, 'public'))) {
    const copyPlugin = new CopyPlugin({
      patterns: [{ from: 'public', to: '' }],
    });
    mergedConfig.plugins.push(copyPlugin);
  }

  // HtmlWebpackPlugin - if src/index.html exists
  if (fs.existsSync(path.join(appDir, 'src/index.html'))) {
    const htmlWebpackPlugin = new HtmlWebpackPlugin({
      template: './src/index.html',
    });
    mergedConfig.plugins.push(htmlWebpackPlugin);
  }

  // ModuleFederationPlugin - if moduleFederationPluginConfig
  if (moduleFederationPluginConfig) {
    const moduleFederationPlugin = new ModuleFederationPlugin(moduleFederationPluginConfig);
    mergedConfig.plugins.push(moduleFederationPlugin);
  }

  return mergedConfig;
};
