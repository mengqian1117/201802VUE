<template>
  <div class="floor">
    <div class="floor-1">
      <div class="floor-left">
        <img :src="floor[0].image" width="100%">
      </div>
      <div class="floor-right">
        <div>
          <img :src="floor[1].image" width="100%">
        </div>
        <div>
          <img :src="floor[2].image" width="100%">
        </div>
      </div>
    </div>
    <div class="floor-2">
      <div v-for="item in floor.slice(3)">
        <img :src="item.image" alt="" width="100%">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "floor",
    props:{
      floor:{
        type:Array,
        default:[]
      }
    }
  }
</script>

<style scoped lang="less">
  .floor{
    .floor-1{
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      .floor-left{
        width: 7.8rem;
      }
    }
    .floor-2{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      div{
        width: 50%;
        box-sizing: border-box;
      }
      div:nth-child(2n-1){
        border-right: 1px solid #ccc;
      }
    }
  }
</style>
