/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          use: {
            loader: 'source-map-loader',
          }
        },
        { 
          test: /\.scss$/, 
          use: [ "style-loader", "css-loader", "sass-loader" ] 
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new htmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
  };
};
