import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import path, { resolve } from 'path'
import fs from 'fs'

const basePath = __dirname
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath: string) => path.resolve(appDirectory, relativePath);

const config: webpack.Configuration = {
    entry: {
        // "@babel/polyfill",
        app: "./index.tsx"
    },
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".webpack.js", ".js", ".ts", "tsx", ".json"],
        alias: {
            '@src': resolve('./src')
        }
    },
    output: {
        path: resolveApp('build'),
        filename: "static/js/bundle.js",
        pathinfo: true,
        publicPath: '/',
        devtoolModuleFilenameTemplate: info => path.resolve(info.absoluteResourcePath),
    },
    devtool: "source-map",
    devServer: {
        contentBase: './dist',
        inline: true, //Enable watch and live reload
        compress: true,
        host: "localhost",
        port: 3000,
        stats: "errors-only",
        publicPath: '/',
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
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
                    babelCore: "@babel/core",
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
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
}

export default config