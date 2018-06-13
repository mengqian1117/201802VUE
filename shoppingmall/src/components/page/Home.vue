<template>
  <div>
    <div class="home-search">
      <form action="/">
        <van-search
          v-model="value"
          placeholder="请输入商品名称"
          show-action
          @search="onSearch"
          @cancel="onCancel"

        />
      </form>
    </div>
    <div class="home-swipe">
      <slides :slides="slides"></slides>
    </div>
    <tabBar :active="0"></tabBar>

  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  import {getSlidesData} from "../../api";
  import slides from "../base/slides.vue"
  export default {
    name: "Home",
    data(){
      return{
        slides: [{
          "image": "https://img.alicdn.com/tfs/TB1B143uv5TBuNjSspmXXaDRVXa-520-280.jpg_q90_.webp",
          "goodsId": "2199b4bb56d247a1b044d5e7d902c942"
        }, {
          "image": "https://img.alicdn.com/simba/img/TB1ck7Mr.R1BeNjy0FmSuv0wVXa.jpg",
          "goodsId": "91a849140de24546b0de9e23d85399a3"
        }, {
          "image": "https://img.alicdn.com/tfs/TB1hSUbuv9TBuNjy0FcXXbeiFXa-520-280.jpg_q90_.webp",
          "goodsId": "c68a7668cceb4168ab48ae0aa312a67d"
        }],
        value:"酸奶"
      }
    },
    components:{
      tabBar,slides
    },
    async created(){
      //let data=await getSlidesData() ;
      //this.slides=data.slides;
    },
    methods:{
      onSearch(){},
      onCancel(){},
    }
  }
</script>

<style scoped>
  .van-swipe{
    max-height: 3.6rem;
  }
</style>
