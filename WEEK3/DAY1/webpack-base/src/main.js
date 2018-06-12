// import {str} from "./js/A.js";
// import "./css/style2.css"
// import "./css/style1.less"
// import imgSrc from "./images/1.jpg"
// let img=new Image();
// img.src=imgSrc;
// img.onload=function () {
//   document.body.appendChild(img);
// };
// let h1=document.getElementById("h1");
// h1.innerHTML=str;
import Vue from "vue"
import VueRouter from "vue-router"
//在这里 VueRouter 采用的是插件的形式 必须使用Vue.use() 只有这样VueRouter才会生效
Vue.use(VueRouter);
//通过 from "vue" 导入使用的是runtime方式 识别不了template
//需要一个compiler 识别template
//from "vue/dist/vue.js 有runtime+compiler
//import Vue from "vue/dist/vue.js"
//App.vue 千万不要省略后缀
import App from "./components/App.vue"
//import fn from "./router/index.js"
//如果导入的是文件夹中的index.js可以省略index.js
import router from "./router"

new Vue({
  el:"#app",
  //template:"<h1>111</h1>"
  // render(h){
  //   return h(App);
  // },
  render:(h)=>h(App),
  router,
});