import Vue from 'vue'
import App from './App'
import router from './router'
//导入全部组件
//import Vant from "vant"
//导入样式
//import "vant/lib/vant-css/index.css"
//使用babel-plugin-import 插件实现按需导入
import {Icon,Tabbar,TabbarItem} from "vant"
Vue.use(Icon).use(Tabbar).use(TabbarItem);
Vue.config.productionTip = false;
new Vue({
  el: '#app',
  router,
  // template:"</App>",
  // components:{App},
  render:(h)=>h(App)
});
let W=document.documentElement.clientWidth||document.body.clientWidth;
document.documentElement.style.fontSize=W/640 *100 +"px";
