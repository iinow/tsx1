"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
var mini_css_extract_plugin_1 = __importDefault(require("mini-css-extract-plugin"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var basePath = __dirname;
var appDirectory = fs_1["default"].realpathSync(process.cwd());
var resolveApp = function (relativePath) { return path_1["default"].resolve(appDirectory, relativePath); };
var config = {
    entry: [
        "@babel/polyfill",
        "./index.tsx"
    ],
    context: path_1["default"].join(basePath, "src"),
    resolve: {
        extensions: [".webpack.js", ".js", ".ts", "tsx"]
    },
    output: {
        path: resolveApp('build'),
        filename: "static/js/bundle.js",
        pathinfo: true,
        publicPath: '/',
        devtoolModuleFilenameTemplate: function (info) { return path_1["default"].resolve(info.absoluteResourcePath); }
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        inline: true,
        compress: true,
        host: "localhost",
        port: 3000,
        stats: "errors-only",
        publicPath: '/',
        historyApiFallback: true
    },
    plugins: [
        new html_webpack_plugin_1["default"]({
            filename: "index.html",
            template: "index.html",
            hash: true
        }),
        new mini_css_extract_plugin_1["default"]({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "awesome-typescript-loader",
                options: {
                    useBabel: true,
                    babelCore: "@babel/core"
                }
            },
            {
                test: /\.css$/,
                use: [mini_css_extract_plugin_1["default"].loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: "file-loader",
                options: {
                    name: "assets/img/[name].[ext]?[hash]"
                }
            }
        ]
    }
};
exports["default"] = config;
