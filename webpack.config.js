const HtmlWebpackPlugin = require('html-webpack-plugin');
const ImagesConfigWebpackPlugin = require('image-config-webpack-plugin');
const JsConfigWebpackPlugin = require('js-config-webpack-plugin');
const ScssConfigWebpackPlugin = require('scss-config-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.js'],
  resolve: {
    modules: ['node_modules'],
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new ImagesConfigWebpackPlugin(),
    new JsConfigWebpackPlugin({ babelConfigFile: './.babelrc' }),
    new ScssConfigWebpackPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
  },
};
