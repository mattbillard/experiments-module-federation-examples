const _ = require('lodash');
const fs = require('fs');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const path = require('path');

module.exports = (appDir, mode = 'development', webpackConfigs) => {
  const isApp = webpackConfigs.isApp || false;  // TODO: clean up all instances
  const moduleFederationPluginConfig = webpackConfigs.moduleFederationPluginConfig || undefined;
  const webpackConfigMixin = webpackConfigs.webpackConfigMixin || {};

  const defaultConfig = {
    devServer: {
      // devMiddleware: {
      //   writeToDisk: true,
      // },
      hot: false,
      liveReload: false,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
    },
    devtool: 'source-map',
    entry: './src/index',
    // externals: isApp ? 
    //   {} : 
    //   {
    //     // IMPORTANT: don't bundle react or react-dom or you will get errors about having multiple versions of React and violating the rule of hooks
    //     react: {
    //       commonjs: 'react',
    //       commonjs2: 'react',
    //       amd: 'React',
    //       root: 'React'
    //     },
    //     'react-dom': {
    //       commonjs: 'react-dom',
    //       commonjs2: 'react-dom',
    //       amd: 'ReactDOM',
    //       root: 'ReactDOM'
    //     },
    //   },
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
      // filename: 'index.js',
    },
    plugins: [
      // See below
    ],
    resolve: {
      // alias: isApp ? {
      //     'react': path.resolve(appDir, './node_modules/react'),
      //   } : 
      //   {},
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
