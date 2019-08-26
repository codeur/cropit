var webpack = require('webpack');
// var path = require('path');

var pkg = require('./package.json');

// var paths = {
//   src: path.join(__dirname, 'src'),
//   dist: path.join(__dirname, 'dist'),
// };
//
// module.exports = {
//   entry: paths.src + '/plugin.js',
//   output: {
//     path: paths.dist,
//     filename: 'jquery.cropit.js',
//     library: 'cropit',
//     libraryTarget: 'umd',
//   },
//
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader?blacklist[]=strict',
//       },
//     ],
//   },
//
//   externals: {
//     jquery: {
//       root: 'jQuery',
//       commonjs: 'jquery',
//       commonjs2: 'jquery',
//       amd: 'jquery',
//     },
//   },
//
//   plugins: [
//     new webpack.BannerPlugin(pkg.name + ' - v' + pkg.version +
//       ' <' +pkg.homepage + '>'),
//   ],
// };


var path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/plugin.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery.cropit.js',
    library: 'cropit',
    libraryTarget: 'umd',
  },
  optimization: {
    // namedModules: false,
    // namedChunks: false,
    // nodeEnv: 'production',
    // flagIncludedChunks: true,
    // occurrenceOrder: true,
    // sideEffects: true,
    // usedExports: true,
    // concatenateModules: true,
    // splitChunks: {
    //   hidePathInfo: true,
    //   minSize: 30000,
    //   maxAsyncRequests: 5,
    //   maxInitialRequests: 3,
    // },
    // noEmitOnErrors: true,
    // checkWasmTypes: true,
    minimize: false,
  },
  externals: {
    jquery: 'jQuery',
  },

  plugins: [
    new webpack.BannerPlugin(pkg.name + ' - v' + pkg.version +
      ' <' +pkg.homepage + '>'),
  ],
};
