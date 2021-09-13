const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",

  // NOTE: if you wanted to run this app independently on its own port you could uncomment the following and change the start script back to "webpack-cli serve"
  devServer: {
    port: 3003,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: {
      index: '/assets/site/index.html'  // TODO. I think site is the only one that should have a fallback 
    },
    hot: false,
    devMiddleware: {
      writeToDisk: true,
    },

    // // TODO: probably comment out
    // proxy: [
    //   {
    //     changeOrigin: true,
    //     context: ['/assets/app1'],
    //     cookieDomainRewrite: 'localhost',
    //     secure: false,
    //     target: 'http://localhost:3001',
    //     ws: true,
    //   },
    //   {
    //     changeOrigin: true,
    //     context: ['/assets/app2'],
    //     cookieDomainRewrite: 'localhost',
    //     secure: false,
    //     target: 'http://localhost:3002',
    //     ws: true,
    //   },
    // ],
  },

  devtool: 'source-map',
  entry: "./src/index",
  output: {
    publicPath: "/assets/site/",
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
  plugins: [
    new ModuleFederationPlugin({
      name: "site",
      remotes: {
        app1: "app1@/assets/app1/remoteEntry.js", // NOTE: find app1 at /assets/app1/ instead of localhost:3001
        app2: "app2@/assets/app2/remoteEntry.js", // NOTE: find app2 at /assets/app2/ instead of localhost:3002
      },
      shared: ["react", "react-dom"],
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
