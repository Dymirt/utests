const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  mode: 'development', // or 'production' based on your environment
  entry: './src/index.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js',
    publicPath: 'http://127.0.0.1:3000/',
  },
  plugins: [
    new BundleTracker({ path: __dirname, filename: 'webpack-stats.json' })
  ],
  devServer: {
    port: 3000,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
    ],
  },
};
