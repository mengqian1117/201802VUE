import VueRouter from "vue-router"
import Home from "../components/Home.vue"
let routes=[
  {path:"/",component:Home},
  {path:"/home",component:Home},
];
let router=new VueRouter({
  routes,

});
export default router;