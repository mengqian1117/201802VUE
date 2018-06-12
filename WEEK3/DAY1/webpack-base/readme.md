1.初始化项目
```
npm init -y
```
2.安装webpack 开发依赖 一般使用版本3.6.0
```
npm i webpack@3.6.0 --save-dev
npm i webpack@3.6.0 -D
```
3.安装babel 以及es2015以及 stage-0预设  识别es6和es7
```
npm i babel babel-core babel-loader --save-dev
npm i babel-preset-es2015 babel-preset-stage-0 --save-dev
```
4.设置.babelrc文件 设置预设的
```
{"presets":["es2015","stage-0]}

```
5.安装识别和转义css less
```
npm i css-loader style-loader --save-dev
npm i less less-loader --save-dev

```    
6.识别文件 路径的 例如 导入图片
```
npm i file-loader url-loader --save-dev 
``` 
7.安装识别的html插件  
```
npm i html-webpack-plugin --save-dev
```  
8.安装webpack服务
```
npm i webpack-dev-server --save-dev
```   

9.配置 package.json 中的脚本   是一个json文件注意使用双引号 不可以写注释, 注意不要多写逗号

"scripts":{
  "build":"webpack",
  "dev":"webpack-dev-server --open"  会自动打开浏览器
}

10.配置webpack.config.js文件
```
let HtmlWebpackPlugin=require("html-webpack-plugin")
module.exports={
   entry:"./src/main.js",
   output:{
     filename:"build.js",
     path:__dirname+"/dist"
   },
   module:{
     rules:[
       {test:/\.js$/,use:["babel-loader"],exclude:/node_modules/},
       {test:/\.css$/,use:["style-loader","css-loader"]},
       {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
       {test:/\.(jpg|gif|png|jpeg)$/i,use:["url-loader?limit=5120"]},
     ]
   },
   plugis:[
      new HtmlWebpackPlugin({
        filename:"zf.html",
        template:"./src/index.html"
      })
   ]
}
```



