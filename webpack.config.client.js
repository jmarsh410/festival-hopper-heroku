const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

// Specify any environment variables?
// const env = {};

module.exports = {
  watch: true,
  entry: './src/index.jsx', // TODO: see if you want to add polyfills to the bundle
  // We generate sourcemaps in production. This is slow but gives good results.
  // You can exclude the *.map files from the build during deployment.
  devtool: 'inline-source-map',
  output: {
    // put the files in the dist-client folder
    path: path.resolve(__dirname, 'dist-client'),
    // put the js bundle in static/js with a name and chunk hash
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader',
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '/media/',
          },
        },
      },
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: { compact: false },
      },
    ],
  },
  plugins: [
    // MANY OF THESE PLUGINS COPIED DIRECTLY FROM CREATE REACT APPS CONFIG

    // Makes some environment variables available to the JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }. See `./env.js`.
    // It is absolutely essential that NODE_ENV was set to production here.
    // Otherwise React will be compiled in the very slow development mode.
    // new webpack.DefinePlugin(env),

    // This helps ensure the builds are consistent if source hasn't changed:
    new webpack.optimize.OccurrenceOrderPlugin(),
    // Minify the code.
    new ExtractTextPlugin('static/css/styles.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        screw_ie8: true, // React doesn't support IE8
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
    }),
    // Generate a manifest file which contains a mapping of all asset filenames
    // to their corresponding output file so that tools can pick it up without
    // having to parse `index.html`.
    new ManifestPlugin({
      fileName: 'asset-manifest.json',
    }),
  ],
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
  },
};
