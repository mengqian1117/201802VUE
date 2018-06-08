//console.log(arguments);
//每一个模块都默认传了5个参数

//1.exports 导出
//console.log(exports);
//2.require()  导入
//模块三种:
//1.内置模块 node自带的模块 自带的模块不需要安装直接require导入 路径不需要带./ 直接模块名字就可以
let fs=require("fs");
let http=require("http");
let url=require("url");
let path=require("path");
//2.自定义模块 自己写的JS文件 使用require导入路径带着./

//3.第三方模块 需要安装 安装的第三方模块都在node_modules文件夹里面 导入的时候不需要./ 直接模块名字
//1.先看是不是内置模块 不是再找第三方模块
//2.找安装的node_modules的顺序是按照module.paths顺序找的

//导入的文件如果省略后缀,文件后缀的顺序会按照下面的extensions来匹配
//extensions: { '.js': [Function], '.json': [Function], '.node': [Function] },

//3.module
/*
paths:
[ 'F:\\webstorm\\201802VUE\\WEEK2\\DAY4\\node\\node_modules',
  'F:\\webstorm\\201802VUE\\WEEK2\\DAY4\\node_modules',
  'F:\\webstorm\\201802VUE\\WEEK2\\node_modules',
  'F:\\webstorm\\201802VUE\\node_modules',
  'F:\\webstorm\\node_modules',
  'F:\\node_modules' ]

  */

//4.__filename 文件绝对路径
console.log(__filename);

//5.__dirname  文件绝对目录
console.log(__dirname);
//'./zf'
console.log(path.resolve("./zf"));
console.log(__dirname + "/zf");


//全局对象 global
var a=10;
b=100;
console.log(global.b);

//exports 就是this
console.log(this==exports);
