const path = require('path');

const webpackConfigMixin = {
  devServer: {
    port: 1102,
  },
  output: {
    path: path.resolve(__dirname, 'dist/assets/example-team1__app2'),
    publicPath: '/assets/example-team1__app2/',
  },
};

const moduleFederationPluginConfig = {
  name: 'exampleTeam1__app2',
  filename: 'remoteEntry.js',
  exposes: {
    './button': './src/components/button/button',
  },
  shared: ['react', 'react-dom'],
};

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
