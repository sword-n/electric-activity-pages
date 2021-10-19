const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports =  {
  mode:'production',
  entry:'./src/index.js',
  output:{
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {test:/\.css$/i,use:['style-loader','css-loader']},
      {test:/\.less$/i,use:['style-loader','css-loader','less-loader']}
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      filename:"electric.html",
      template:"./src/electric.html",
      minify:false,
    }),
    new htmlWebpackPlugin({
      filename:"index.html",
      template:"./src/index.html",
      minify:false,
    }),
    new htmlWebpackPlugin({
      filename:"co2.html",
      template:"./src/co2.html",
      minify:false,
    })
  ],
  devServer:{}

}