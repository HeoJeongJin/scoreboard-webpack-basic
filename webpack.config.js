const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname+'/dist',
    filename: 'main.js'
  },
  module:{
    rules:[
        {
          test: /\.css$/,
          use:[
              'style-loader',
              'css-loader'
              ]
          },
          {
            test: /\.scss$/,
            use: [ "style-loader", "css-loader", "sass-loader" ]
          }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin('main.js')
        ]
    
};