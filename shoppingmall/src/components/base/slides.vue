<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(image, index) in slides" :key="index">
      <img v-lazy="image.image" width="100%"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
  import {SwipeItem,Swipe} from "vant"
  export default {
    name: "slides",
    props:["slides"],
    components:{
      [Swipe.name]:Swipe,
      [SwipeItem.name]:SwipeItem,
    }
  }
</script>

<style scoped>

</style>
