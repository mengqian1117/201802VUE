<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
  export default {}
</script>

<style>
  @import "assets/iconfont/iconfont.css";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    color: #2c3e50;
  }

  .van-tabbar-item--active {
    color: orange;
  }
  .van-search__cancel{
    color: orange;
  }
</style>
