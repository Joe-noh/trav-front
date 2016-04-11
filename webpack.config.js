module.exports = {
  devtool: 'eval-source-map',
  entry:  __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        loader: 'style!css!stylus?modules!postcss'
      }
    ]
  },

  postcss: [
    require('autoprefixer')
  ],

  devServer: {
    contentBase: "./public",
    port: 8080,
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}

