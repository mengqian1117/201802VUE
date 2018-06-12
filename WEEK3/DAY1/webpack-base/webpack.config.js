let path=require("path");
let HtmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
  entry:"./src/main.js",
  output:{
    filename:"build.js",
    //path:__dirname+"/dist"
    path:path.resolve("./dist"),
  },
  module:{
    rules:[
      {test:/\.js$/,use:["babel-loader"],exclude:/node_modules/},
      {test:/\.css$/,use:["style-loader","css-loader"]},
      {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
      {test:/\.(jpg|gif|png|jpeg)$/i,use:["url-loader?limit=5120"]},
      {test:/\.vue$/,use:["vue-loader"]}
    ]
  },
  plugins:[new HtmlWebpackPlugin({template:"./src/index.html"})]
};