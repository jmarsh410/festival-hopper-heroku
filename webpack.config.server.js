const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  watch: true,
  entry: './src/App.jsx',
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist-server'),
    library: 'App',
    libraryTarget: 'commonjs',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: 'media/',
            emitFile: false,
          },
        },
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
