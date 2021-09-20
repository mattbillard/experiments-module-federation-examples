const path = require("path");

module.exports = {
  mode: "development",
  devServer: {
    port: 3002,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    devMiddleware: {
      writeToDisk: true, // NOTE: need to writeToDisk if we want to consume this package from dist
    },
  },
  devtool: 'source-map',
  entry: {
    'index': './src/index.ts',
    'button': './src/components/button/button.tsx',
  },
  externals: {
    // NOTE: remote components need this
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd', // NOTE: remote components need this
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
