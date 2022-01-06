const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
     entry: path.join(__dirname, "src", "index"),
     output: {
          path: path.join(__dirname, "dist"),
          publicPath: "/dist/",
          filename: "bundle.js",
          chunkFilename: "[name].js",
     },
     module: {
          rules: [
               {
                    test: /.j(s|sx)?$/,
                    include: [path.resolve(__dirname, "src")],
                    exclude: [path.resolve(__dirname, "node_modules")],
                    loader: "babel-loader",
                    options: {
                         presets: ["@babel/preset-env"],
                    },
               },
               {
                    test: /\.(png|jpe?g|svg)$/i,
                    use: [
                         {
                              loader: "file-loader",
                         },
                    ],
               },
               {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader"],
               },
          ],
     },
     resolve: {
          extensions: [".json", ".js", ".jsx"],
     },
     devtool: "source-map",
     plugins: [
          new HtmlWebpackPlugin({
               template: path.resolve(__dirname, "public/index.html"),
               filename: "index.html",
          }),
          new Dotenv(),
     ],
};
