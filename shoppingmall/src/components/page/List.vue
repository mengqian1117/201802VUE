<template>
  <div>
    <h1>List</h1>
    <tabBar :active="1"></tabBar>
  </div>

</template>

<script>
  import tabBar from "../base/tabBar.vue"
  export default {
    name: "List",
    components:{tabBar}
  }
</script>

<style scoped>

</style>
