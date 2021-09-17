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
    './app': './src/components/app/app',
    './button': './src/components/button/button',
  },
  shared: ['react', 'react-dom'],
};

// const modFedPluginDef = {
//   moduleFederationId: 'exampleTeam1__app2',
//   remoteEntryUrl: '/assets/example-team1__app2/remoteEntry.js',
//   exposes: {
//     './app': './src/components/app/app',
//     './button': './src/components/button/button',
//   },
//   shared: ['react', 'react-dom'],
// }

// const appDef = {
//   "apps": {
//     "exampleTeam1__app2": {
//       "moduleFederationId": "exampleTeam1__app2",
//       "component": "./app",
//       "remoteEntryUrl": "/assets/example-team1__app1/remoteEntry.js"
//     }
//   }
// };

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
