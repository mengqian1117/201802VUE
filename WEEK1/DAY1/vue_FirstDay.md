###1.ES6
`ES6 的模块自动采用严格模式，不管你有没有在模块头部加上"use strict";
严格模式主要有以下限制。`

- 变量必须声明后再使用
- 函数的参数不能有同名属性，否则报错
- 不能使用with语句
- 不能对只读属性赋值，否则报错
- 不能使用前缀 0 表示八进制数，否则报错
- 不能删除不可删除的属性，否则报错
- 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
- eval不会在它的外层作用域引入变量
- eval和arguments不能被重新赋值
- arguments不会自动反映函数参数的变化
- 不能使用arguments.callee
- 不能使用arguments.caller
- 禁止this指向全局对象
- 不能使用fn.caller和fn.arguments获取函数调用的堆栈
- 增加了保留字（比如protected、static和interface）;


#### 1.数组遍历方法
- forEach
- map
- find
- findIndex
- filter
- some
- every
- reduce
- reduceRight

#### 2.set Map

#### 3.Symbol
- 基本数据类型 通过函数执行得到 不能使用new执行
- 唯一值
- 不能进行运算 因为不可以转数字 也不可以进行字符串拼接 这些都会报错
- 可以转为布尔值
- 当做属性名的时候只能用[""]的形式
- Object.getOwnPropertySymbols()
- Reflect.ownKeys方法可以返回所有类型的键名


#### 4.proxy
- get(target, propKey, receiver)：拦截对象属性的读取
- set(target, propKey, value, receiver)
- ....

#### 5.Iterator接口  和for of
##### 调用 Iterator 接口的场合
- 解构赋值
- 扩展运算符
- Set Map
- for...of
- Array.from()
- Promise.all()
- Promise.race()

##### 原生具备 Iterator 接口的数据结构如下。
- Array
- Map
- Set
- String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

#### 6.async await
- async 将一个函数变成promise对象
- await后面跟一个promise对象 如果不是默认将其变成一个resolve的promise 值作为resolve 的参数
- await的结果就是resolve或者reject的参数
- await异步执行完成之后再去执行后面的代码

#### 7.Object.getOwnPropertyDescriptor
#### 8.Object.defineProperty

### vue内容

#### 1.什么是MVC和MVVM模式

#### 2.什么是vue?

#### 3.Vue初识以及小胡子语法
```
{{小胡子语法: 直接写数据 , 数据赋值 , 三元运算符 , 数学运算 }}

```
#### 4.数据响应视图的原理(setter和getter拦截)和注意问题

#### 5.defineProperty和双向数据绑定的原理实现

#### 6.vue中v-model实现双向数据绑定

#### 7.使用ES6中proxy实现双向数据绑定

#### 8.vue中的常用指令

#### 9.vue中的事件以及修饰符

#### 10.checkbox,select以及radio中的v-model

#### 11.v-for循环