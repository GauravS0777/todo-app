const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./frontend/src/index.js",
  output: {
    filename: "index_bundle.js",
    path: path.resolve(__dirname, "frontend/dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./frontend/public/index.html",
      filename: "index.html"
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
  mode: "development"
};
