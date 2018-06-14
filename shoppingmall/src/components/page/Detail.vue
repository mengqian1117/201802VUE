<template>
  <h1>商品的详情页</h1>
</template>

<script>
  export default {
    name: "Detail",
    watch:{
      $route:{
        handler(){
          console.log(this.$route.params);
        },
        immediate:true,
      }
    }
  }
</script>

<style scoped>

</style>
