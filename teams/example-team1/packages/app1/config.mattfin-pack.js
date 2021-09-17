const path = require('path');
const { config } = require('./package.json');

const webpackConfigMixin = {
  devServer: {
    port: 1101,
  },
  output: {
    // TODO
    // path: path.resolve(__dirname, 'dist/assets/example-team1__app1'),
    // publicPath: '/assets/example-team1__app1/',
    path: path.resolve(__dirname, `dist${config.assetPath}`),
    publicPath: config.assetPath,
  },
};

const moduleFederationPluginConfig = {
  name: 'exampleTeam1__app1',
  filename: 'remoteEntry.js',
  exposes: {
    './app': './src/components/app/app',
    './button': './src/components/button/button',
  },
  shared: ['react', 'react-dom'],
};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
