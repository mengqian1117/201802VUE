<template>
  <div>
    <h1>Home</h1>
    <tabBar :active="0"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  export default {
    name: "Home",
    components:{tabBar}
  }
</script>

<style scoped>

</style>
