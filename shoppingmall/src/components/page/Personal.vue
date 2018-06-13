<template>
  <div>
    <h1>Personal</h1>
    <tabBar :active="3"></tabBar>
  </div>
</template>

<script>
  import tabBar from "../base/tabBar.vue"
  export default {
    name: "Personal",
    components:{tabBar}
  }
</script>

<style scoped>

</style>
