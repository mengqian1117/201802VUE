<template>
  <!--v-model="被选中标签的索引"-->
  <van-tabbar v-model="index">
    <van-tabbar-item icon="home" to="/home">首页</van-tabbar-item>
    <van-tabbar-item icon="wap-nav" to="/list">分类</van-tabbar-item>
    <van-tabbar-item icon="cart" info="5" to="/car">购物车</van-tabbar-item>
    <van-tabbar-item icon="contact" info="20" to="/personal">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
  export default {
    name: "tabBar",
    data(){
      return {

      }
    },
    computed:{
      index:{
        get(){return this.active},
        set(){}
      }
    },
    props:["active"]
  }
</script>

<style scoped>

</style>
