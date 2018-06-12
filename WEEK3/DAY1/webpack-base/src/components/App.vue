<template>
  <div>
    <h1>哈哈哈哈</h1>
    <Home></Home>
    <router-view></router-view>
  </div>
</template>

<script>
  //一个.vue文件就是一个组件  分为三部分
  //1.template htm结构  有且只有一个根元素包裹
  //2.script 定义组件的那个对象  使用export default 默认导出组件
  //3.style 样式
  //只有template这一部分不可以省略
  //导入组件
  import Home from "./Home.vue"
  export default {
    //注册组件
    data(){
      return{}
    },
    components:{Home},

  }
</script>

<style scoped>
/*scoped:这个属性表示样式是私有的 只能当前组件使用*/
  h1{
    color: red;
  }
</style>