const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 開發模式
  entry: './src/index.js', // 入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 輸出目錄
    filename: 'bundle.js', // 輸出文件名
    clean: true, // 在每次構建前清理 output 目錄
  },
  devtool: 'inline-source-map', // 開發環境下的 source map
  devServer: {
    static: './dist', // 伺服器的根目錄
    port: 3000, // 開發伺服器端口
    open: true, // 自動打開瀏覽器
    hot: true, // 啟用熱模組替換
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // 匹配 .js 和 .jsx 檔案
        exclude: /node_modules/, // 排除 node_modules 目錄
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/i, // 匹配 .css 檔案
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // 可以在此處添加處理圖片、字體等其他資源的 loader
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // 使用的 HTML 模板
      filename: 'index.html', // 輸出的 HTML 文件名
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'], // 允許在 import 時省略 .js 和 .jsx 副檔名
  },
};