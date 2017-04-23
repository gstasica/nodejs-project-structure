const entries = {};

let files = [{ name: 'tsindex', path: './src/tsindex.ts' }, { name: 'index', path: './src/index.js' }];
files.forEach(f => {
  entries[f.name] = f.path
});

var path = require('path');

module.exports = {
  resolve: {
    extensions: [".js", ".ts"],
  },
  entry: entries, //['./src/tsindex.ts', './src/index.js']
  output: {
    filename: 'dist/[name].js'
  },
  module: {
    rules: [{
      test: '/\.tsx?$/',
      loader: 'awesome-typescript-loader',
      enforce: 'pre'
    }]
  },
  plugins: []
};