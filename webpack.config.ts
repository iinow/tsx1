import webpack from 'webpack'
import path from 'path'
import { resolve } from 'q';

const basePath = __dirname

const config: webpack.Configuration = {
    entry: [
        "@babel/polyfill",
        "./index.tsx"
    ],
    context: path.join(basePath, "src"),
    resolve: {
        extensions: [".js", ".ts", "tsx"]
    },
    
}

module.exports = {

    
}