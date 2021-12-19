const path = require("path");

module.exports = {
  entry: {
    App: "./app/assets/js/scripts.js",
  },
  output: {
    path: path.resolve(__dirname, "app/assets/js"),
    filename: "scripts-bundled.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
