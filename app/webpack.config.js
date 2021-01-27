const webpack = require('webpack');
const path = require("path");

module.exports = {
    entry: {
        app: ['js/app.js']
      },
    output : {
        path : path.join(__dirname, "../dist/assets/js/"),
        filename : "app.bundle.js"
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        extensions: ['*', '.js', '.jsx']
      },
    devServer : {
        contentBase : "../dist"
    },
    module : {
        rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {   test: /vendor\/.+\.(jsx|js)$/,
                loader: 'imports?jQuery=jquery,$=jquery,this=>window'
              }
        ]
    }
}