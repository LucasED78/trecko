const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      { 
        test: /\.ts$/,
        use: 'awesome-typescript-loader',
      },
      { 
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ttf$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: { port: 3000 },
  resolve: {
    extensions: [ '.js', '.ts', '.tsx' ]
  }
}