import Vue from 'vue'
import App from './App'
import router from './router'
//导入全部组件
//import Vant from "vant"
//导入样式
//import "vant/lib/vant-css/index.css"
//使用babel-plugin-import 插件实现按需导入
import {Icon,Tabbar,TabbarItem,Lazyload,Search,Row,Col,Cell, CellGroup,Card, Checkbox, CheckboxGroup ,Stepper,SubmitBar} from "vant"
Vue.use(Icon).use(Tabbar).use(TabbarItem).use(Lazyload).use(Search).use(Row).use(Col).use(Cell).use(CellGroup).use(Card).use(Checkbox).use(CheckboxGroup).use(Stepper).use(SubmitBar);
Vue.config.productionTip = false;
//定义全局过滤器
Vue.filter("toFixed",(target,val=2)=>{
  return parseFloat(target).toFixed(val)
})
new Vue({
  el: '#app',
  router,
  // template:"</App>",
  // components:{App},
  render:(h)=>h(App)
});
let W=document.documentElement.clientWidth||document.body.clientWidth;
document.documentElement.style.fontSize=W/640 *100 +"px";
