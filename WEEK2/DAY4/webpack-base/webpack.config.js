
let HtmlWebpackPlugin=require("html-webpack-plugin");
let path=require("path");
//单入口文件
console.log(__dirname);
module.exports={
  //配置入口js文件
  entry:"./src/main.js",
  output:{
    filename:"build.js",//给打包后的js文件起的名字
    //配置打包后js文件的路径 必须给一个绝对路径
    //path:__dirname+"/dist",
    path:path.resolve("./dist"),
  },
  module:{
    rules:[
      //将后缀是.js的文件去使用 babel-loader解析 注意排除 node_modules中的js文件
      {test:/\.js$/,use:["babel-loader"],exclude:/node_modules/},
      //从右到左的顺序
      {test:/\.css$/,use:["style-loader","css-loader"]},
      {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
      //一般太大的图片不要变成base64 我们可以设置小于 5kb的时候转为base64 超过还是图片即可  5kb(5*1024字节 5120)
      {test:/\.(jpg|gif|jpeg|png)/i,use:["url-loader?limit=5120"]}
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:"zf.html",//最终在dist生成的html的名字 如果不写默认就是index.html
      //template 原来的html页面
      template:"./index.html"
    })
  ]
};