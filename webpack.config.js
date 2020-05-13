/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
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
          },
        },
        {
          test: /\.scss$/,
          // use: {
          //   loader: ['style-loader', 'css-loader', 'sass-loader'],
          // },
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.html$/,
          use: {
            loader: 'html-loader',
          },
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
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
