module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  devServer: {
    contentBase: "./public",
    port: 8080,
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}

