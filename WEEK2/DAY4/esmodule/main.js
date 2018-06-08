//console.log(a); 虽然import导入的内容可以提前使用 但是 开发时候写 import必须写在最上边

//导入
//导出的是一个对象可以使用解构赋值获取数据
import {a,b} from "./1.js"
import * as zf from "./1.js"
//使用zf 代表模块所有内容接受
import fn from "./2.js"

console.log(a, b);
console.log(zf);
fn();