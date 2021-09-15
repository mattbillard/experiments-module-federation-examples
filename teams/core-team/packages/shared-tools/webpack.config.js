const path = require('path');

const webpackConfigMixin = {
  externals: {
    // IMPORTANT: don't bundle react or react-dom or you will get errors about having multiple versions of React and violating the rule of hooks
    // NOTE: does not work if you want to also export code as Module Federation 
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};

// TOOD: doesn't seem to make a difference to whether importing DynamicModuleFederationLoader from dist works or not
const moduleFederationPluginConfig = undefined;
// const moduleFederationPluginConfig = {
//   name: 'sharedTools',
//   shared: ['react', 'react-dom'],
// };

module.exports = {
  moduleFederationPluginConfig,
  webpackConfigMixin,
};
