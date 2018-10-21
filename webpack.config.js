var path = require('path');

var src_path = path.join(__dirname, 'client/src');
var dist_path = path.join(__dirname, 'client/dist');

module.exports = {
  mode: "development",
  entry: `${src_path}/index.jsx`,
  output: {
    path: `${dist_path}`,
    filename: "bundle.js"
  },
  module: {
    rules: [
    {
      test: /\.jsx?/,
      include: [
        src_path
      ],
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env", "@babel/preset-react"]
      }
    }]
  }
}