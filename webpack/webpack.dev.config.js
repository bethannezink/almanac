var path = require('path');
var parentDir = path.join(__dirname, '../src');

module.exports = {
	entry: [
		path.join(parentDir, '/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: parentDir + '/dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: parentDir,
    historyApiFallback: true,
    port: 9000
  }
}
