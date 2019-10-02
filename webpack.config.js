const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const fs = require('fs')

const basePath = __dirname;
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

class WebpackConfig {
  constructor(env, options) {
    this._init(env, options)
  }
  _init(env, options) {
    this._path()
    this._dev()
    this._plugins()
    this._module()    
  }

  _path() {
    this.context = path.join(basePath, "src")
    this.resolve = {
      extensions: [".js", ".ts", ".tsx"]
    }
    this.entry = ["@babel/polyfill", "./index.tsx"]
    this.output = {
      path: resolveApp('build'),
      // path: path.join(basePath, "dist"),
      // publicPath: "dist",
      filename: "static/js/bundle.js",
      pathinfo: true,
      publicPath: '/',
      devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
    }
  }

  _dev() {
    this.devtool = "source-map"
    this.devServer = {
      contentBase: "./dist", // Content base
      inline: true, // Enable watch and live reload,
      compress: true,
      host: "localhost",
      port: 3000,
      stats: "errors-only",
      publicPath: '/',
      historyApiFallback: true
    }
  }

  _plugins() {
    this.plugins = [
      //Generate index.html in /dist => https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: "index.html", //Name of file in ./dist/
        template: "index.html", //Name of template in ./src
        hash: true
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ]
  }

  _module() {
    this.module = {
      rules: [{
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
          babelCore: "@babel/core" // needed for Babel v7
        }
      }, {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }, {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }, {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]"
        }
      }
      ]
    }
  }
}

module.exports = (env, options) => new WebpackConfig(env, options)
