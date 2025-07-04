const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
require('dotenv').config({ path: './.env' }); // 引入 dotenv 並載入 .env 檔案

module.exports = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    historyApiFallback: true,
    client: {
      overlay: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'automatic',
                },
              ],
              '@babel/preset-env',
            ],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        // 壓縮 HTML
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),

    new MiniCssExtractPlugin({
      filename: '[name].css', // 會產生 e.g. main.css
    }),

    new webpack.DefinePlugin({
      // 定義你的環境變數。Webpack 會將這些值注入到你的客戶端程式碼中。
      // 注意：這裡的值會被序列化（JSON.stringify），所以字符串需要加上引號。
      'process.env.APP_PROD_API_KEY': JSON.stringify(process.env.APP_PROD_API_KEY),
      // 你也可以定義其他你需要的環境變數
      // 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
