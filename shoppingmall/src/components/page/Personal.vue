<template>
  <div class="container">
    <div class="base-info">
      <div class="user-look">
        <img :src="userLook" alt="">
      </div>
      <div class="user-name">
        <p>我是快乐的小猴子</p>
        <p>普通用户</p>
      </div>
      <van-icon name="setting" class="ico-set"></van-icon>
    </div>
    <tabBar :active="3"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import userLook from "../../assets/images/avatar_default.png"
  export default {
    name: "Personal",
    data(){
      return {
        userLook,
      }
    },
    components:{tabBar}
  }
</script>

<style scoped lang="less">
.container{
  background-color: #dddddd38;
  .base-info{
    background-color: #fff283;
    padding:0.5rem 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap:nowrap ;
    .user-look{
      width:1.5rem;
      height:1.5rem;
      margin-right: 0.3rem;
      img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    };
    .ico-set{
      position: absolute;
      right: 0.2rem;
      top:0.4rem;
      color: #fff;
    }
  }
}
</style>
